"""Transactional assembly revision orchestration behind the MCP adapter."""

from __future__ import annotations

import copy
from typing import Any

from ..assembly.composer import (
    AssemblyComposer,
    apply_changes,
    parse_definition,
)
from ..assembly.domain import Assembly, AssemblyRevision
from ..errors import Mcp3dError
from ..identity import AssemblyId
from ..models import OperationResult, RenderedImage
from ..recipe import length_scale_mm
from ..rendering import RenderService
from ..reporting import DEFAULT_ANALYZE_VIEWS, apply_views, requested_views
from .observation import OperationMilestone, OperationObserver
from .store import InMemoryPartStore


class AssemblyService:
    """Create, revise, and inspect pinned, fastened-mate assemblies."""

    def __init__(
        self,
        *,
        store: InMemoryPartStore,
        composer: AssemblyComposer | None = None,
        renderer: RenderService | None = None,
        observer: OperationObserver | None = None,
    ) -> None:
        self.store = store
        self.composer = composer or AssemblyComposer()
        self.renderer = renderer or RenderService()
        self.observer = observer

    def list_assemblies(self) -> dict[str, Any]:
        """Describe the assembly heads available in this local server session."""
        return {
            "status": "ok",
            "assemblies": [
                {
                    "assembly_id": assembly.assembly_id.value,
                    "head_revision": assembly.revisions[-1].number,
                    "status": assembly.revisions[-1].build.diagnostics["status"],
                }
                for assembly in self.store.list_assemblies()
            ],
        }

    def apply(
        self,
        *,
        assembly_id: str | None,
        definition: dict[str, Any] | None,
        changes: list[dict[str, Any]] | None,
        base_revision: int | None,
        requirements: dict[str, Any] | None,
        render: dict[str, Any] | None = None,
    ) -> OperationResult:
        """Commit a complete definition or semantic edit only after it solves."""
        self._record("apply", "started", assembly_id, message="Received a new assembly revision request.")
        try:
            parsed_id = AssemblyId.parse(assembly_id)
            views = apply_views(render)
            self._record("apply", "solving", parsed_id.value, message="Resolving part revisions and fastened mates.", requested_views=views)
            revision = self._apply(parsed_id, definition, changes, base_revision, requirements)
            self._record("apply", "revision_committed", parsed_id.value, revision.number, message=f"Committed assembly revision r{revision.number}.")
            payload = assembly_report(parsed_id.value, revision, revision.requirements.get("assertions", []))
            self._record(
                "apply",
                "rendering",
                parsed_id.value,
                revision.number,
                message="Rendering requested assembly views." if views else "Skipping images; exact checks only.",
                requested_views=views,
            )
            renderer_name, images = self._render(revision, views)
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            self._record(
                "apply",
                "completed",
                parsed_id.value,
                revision.number,
                status=payload["status"],
                message=f"Assembly revision r{revision.number} is {payload['status']}.",
                result=payload,
                images=images,
                shape=revision.build.shape,
            )
            return OperationResult(payload, images)
        except Mcp3dError as error:
            self._record("apply", "failed", assembly_id, status="error", message=error.message, result=error.as_dict())
            return OperationResult(error.as_dict(), is_error=True)

    def analyze(
        self,
        *,
        assembly_id: str,
        revision: int | None,
        requests: list[dict[str, Any]] | None,
    ) -> OperationResult:
        """Inspect a solved assembly revision without changing any history."""
        self._record("analyze", "started", assembly_id, revision, message="Inspecting an existing assembly revision.")
        try:
            parsed_id = AssemblyId.parse(assembly_id)
            selected = self.store.get_assembly_revision(parsed_id, revision)
            requests = requests or []
            views = requested_views(requests)
            if views is None:
                views = list(DEFAULT_ANALYZE_VIEWS)
            assertions = [item for request in requests if request.get("kind") == "assert" for item in request.get("criteria", [])]
            payload = assembly_report(parsed_id.value, selected, assertions)
            self._record(
                "analyze",
                "rendering",
                parsed_id.value,
                selected.number,
                message="Rendering requested assembly views." if views else "Skipping images; exact checks only.",
                requested_views=views,
            )
            renderer_name, images = self._render(selected, views)
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            self._record(
                "analyze",
                "completed",
                parsed_id.value,
                selected.number,
                status=payload["status"],
                message=f"Inspection of assembly r{selected.number} is {payload['status']}.",
                result=payload,
                images=images,
                shape=selected.build.shape,
            )
            return OperationResult(payload, images)
        except Mcp3dError as error:
            self._record("analyze", "failed", assembly_id, revision, status="error", message=error.message, result=error.as_dict())
            return OperationResult(error.as_dict(), is_error=True)

    def get_revision(self, assembly_id: AssemblyId, revision: int | None) -> AssemblyRevision:
        """Expose immutable revision lookup to future assembly workflows."""
        return self.store.get_assembly_revision(assembly_id, revision)

    def _apply(
        self,
        assembly_id: AssemblyId,
        definition: dict[str, Any] | None,
        changes: list[dict[str, Any]] | None,
        base_revision: int | None,
        requirements: dict[str, Any] | None,
    ) -> AssemblyRevision:
        if definition is not None and changes is not None:
            raise Mcp3dError("AMBIGUOUS_EDIT", "Supply either a complete assembly definition or changes, not both.")
        existing = self.store.get_assembly(assembly_id)
        if existing is None:
            if definition is None or changes is not None:
                raise Mcp3dError("ASSEMBLY_DEFINITION_REQUIRED", "A new assembly requires a complete definition.")
            if base_revision is not None:
                raise Mcp3dError("REVISION_CONFLICT", "A new assembly cannot specify base_revision.")
            candidate, inherited_requirements, assembly = copy.deepcopy(definition), {}, Assembly(assembly_id)
        else:
            head = existing.revisions[-1]
            if base_revision != head.number:
                raise Mcp3dError("REVISION_CONFLICT", f"Expected base_revision {head.number}; received {base_revision!r}.")
            if definition is not None:
                candidate = copy.deepcopy(definition)
            elif changes is not None:
                candidate = apply_changes(head.definition, changes)
            else:
                raise Mcp3dError("EDIT_REQUIRED", "Supply an assembly definition or changes when revising an assembly.")
            inherited_requirements, assembly = copy.deepcopy(head.requirements), existing
        if requirements is not None:
            if not isinstance(requirements, dict):
                raise Mcp3dError("INVALID_REQUIREMENTS", "requirements must be an object when supplied.")
            inherited_requirements = copy.deepcopy(requirements)
        parsed_definition = parse_definition(candidate, self.store.get_revision)
        build = self.composer.compile(parsed_definition, self.store.get_revision)
        revision = AssemblyRevision(len(assembly.revisions) + 1, parsed_definition, inherited_requirements, build)
        assembly.revisions.append(revision)
        self.store.save_assembly(assembly)
        return revision

    def _render(self, revision: AssemblyRevision, views: list[str]) -> tuple[str, list[RenderedImage]]:
        if not views:
            return "none", []
        return self.renderer.render_shape(revision.build.shape, views)

    def _record(
        self,
        action: str,
        phase: str,
        assembly_id: str | None,
        revision: int | None = None,
        *,
        status: str = "working",
        message: str,
        requested_views: list[str] | None = None,
        result: dict[str, Any] | None = None,
        images: list[RenderedImage] | None = None,
        shape: Any | None = None,
    ) -> None:
        """Publish optional UI-neutral assembly lifecycle facts."""
        if self.observer is not None:
            self.observer.record(
                OperationMilestone(
                    action=action,
                    phase=phase,
                    part_id=None,
                    assembly_id=assembly_id,
                    revision=revision,
                    status=status,
                    message=message,
                    requested_views=tuple(requested_views) if requested_views is not None else None,
                    result=result,
                    images=tuple(images or ()),
                    shape=shape,
                )
            )


def assembly_report(assembly_id: str, revision: AssemblyRevision, assertions: list[dict[str, Any]]) -> dict[str, Any]:
    """Build stable inspection evidence for an immutable assembly revision."""
    shape = revision.build.shape
    box = shape.bounding_box()
    dimensions_mm = [round(value, 6) for value in (box.size.X, box.size.Y, box.size.Z)]
    scale = length_scale_mm(revision.definition.units)
    dimensions = [round(value / scale, 6) for value in dimensions_mm]
    checks = [assembly_check(revision, criterion, dimensions) for criterion in assertions]
    solved = revision.build.diagnostics["status"] == "fully_constrained"
    status = "verified" if solved and all(check["status"] == "pass" for check in checks) else "needs_definition"
    return {
        "status": status,
        "assembly_id": assembly_id,
        "revision": revision.number,
        "units": revision.definition.units,
        "summary": {
            "instance_count": len(revision.definition.instances),
            "solid_count": len(shape.solids()),
            "bounding_box": dimensions,
            "bounding_box_mm": dimensions_mm,
            "volume": round(shape.volume / scale**3, 6),
            "volume_mm3": round(shape.volume, 6),
        },
        "solver": revision.build.diagnostics,
        "checks": checks,
        "instances": [
            {
                **instance.as_dict(length_scale_mm(revision.definition.units)),
                "resolved_pose": revision.build.poses[instance.identifier].as_dict(),
            }
            for instance in revision.definition.instances
        ],
        "mates": [mate.as_dict() for mate in revision.definition.mates],
        "definition": revision.definition.as_dict(),
    }


def assembly_check(revision: AssemblyRevision, criterion: dict[str, Any], dimensions: list[float]) -> dict[str, Any]:
    """Evaluate the deliberately small exact-check vocabulary for assemblies."""
    if not isinstance(criterion, dict):
        return {"id": None, "kind": None, "status": "not_evaluated", "reason": "Assertions must be objects."}
    kind, identifier = criterion.get("kind"), criterion.get("id", criterion.get("kind"))
    if kind == "fully_constrained":
        actual, expected = revision.build.diagnostics["status"] == "fully_constrained", criterion.get("expected", True)
    elif kind == "instance_count":
        actual, expected = len(revision.definition.instances), criterion.get("expected")
    elif kind == "bounding_box":
        actual, expected = dimensions, criterion.get("expected")
    else:
        return {"id": identifier, "kind": kind, "status": "not_evaluated", "reason": "Unsupported assembly assertion."}
    if kind == "bounding_box":
        passed = isinstance(expected, list) and actual == [float(value) for value in expected]
    else:
        passed = actual == expected
    return {"id": identifier, "kind": kind, "status": "pass" if passed else "fail", "expected": expected, "actual": actual}
