"""Transactional assembly revision orchestration behind the MCP adapter."""

from __future__ import annotations

from collections.abc import Mapping
import copy
import os
from pathlib import Path
from typing import Any

from ..artifacts import export_assembly_revision, package_assembly_revision
from ..assembly.composer import (
    AssemblyComposer,
    apply_changes,
    parse_definition,
)
from ..assembly.domain import AssemblyRevision
from ..assembly.snapshots import export_snapshot
from ..errors import Mcp3dError
from ..identity import AssemblyId, PartId
from ..immutability import thaw
from ..models import OperationResult, RenderedImage, Revision
from ..recipe import length_scale_mm
from ..rendering import RenderService
from ..reporting import (
    DEFAULT_ANALYZE_VIEWS,
    apply_views,
    requested_views,
    validate_assembly_requirements,
)
from .observation import OperationMilestone, OperationObserver
from .store import InMemoryPartStore


class AssemblyService:
    """Create, revise, and inspect pinned, fastened-mate assemblies."""

    def __init__(
        self,
        *,
        store: InMemoryPartStore,
        artifact_root: Path | None = None,
        composer: AssemblyComposer | None = None,
        renderer: RenderService | None = None,
        observer: OperationObserver | None = None,
    ) -> None:
        root = artifact_root or Path(os.environ.get("MCP3D_ARTIFACT_DIR", ".mcp3d/artifacts"))
        self.artifact_root = root.resolve()
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

    def export(self, *, assembly_id: str, revision: int | None, formats: list[str] | None) -> dict[str, Any]:
        """Export a fully constrained assembly as a solved geometry snapshot."""
        self._record("export", "started", assembly_id, revision, message="Preparing assembly geometry export.")
        try:
            parsed_id = AssemblyId.parse(assembly_id)
            selected = self.get_revision(parsed_id, revision)
            self._require_exportable(selected)
            self._record("export", "writing", parsed_id.value, selected.number, message="Writing solved assembly deliverables.")
            payload = export_assembly_revision(parsed_id, export_snapshot(selected), self.artifact_root, formats)
            self._record("export", "completed", parsed_id.value, selected.number, status="ok", message=f"Exported assembly r{selected.number}.", result=payload)
            return payload
        except Mcp3dError as error:
            self._record("export", "failed", assembly_id, revision, status="error", message=error.message, result=error.as_dict())
            raise

    def package(self, *, assembly_id: str, revision: int | None, formats: list[str] | None) -> dict[str, Any]:
        """Create a portable ZIP handoff for a fully constrained assembly."""
        self._record("package", "started", assembly_id, revision, message="Preparing portable assembly handoff.")
        try:
            parsed_id = AssemblyId.parse(assembly_id)
            selected = self.get_revision(parsed_id, revision)
            self._require_exportable(selected)
            self._record("package", "writing", parsed_id.value, selected.number, message="Writing recipes and geometry snapshots into a package.")
            payload = package_assembly_revision(
                parsed_id,
                export_snapshot(selected),
                self._pinned_part_revisions(selected),
                self.artifact_root,
                formats,
            )
            self._record("package", "completed", parsed_id.value, selected.number, status="ok", message=f"Packaged assembly r{selected.number}.", result=payload)
            return payload
        except Mcp3dError as error:
            self._record("package", "failed", assembly_id, revision, status="error", message=error.message, result=error.as_dict())
            raise

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
            candidate, inherited_requirements = copy.deepcopy(definition), {}
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
            inherited_requirements = thaw(head.requirements)
        if requirements is not None:
            inherited_requirements = copy.deepcopy(validate_assembly_requirements(requirements))
        parsed_definition = parse_definition(candidate, self.store.get_revision)
        build = self.composer.compile(parsed_definition, self.store.get_revision)
        pending = AssemblyRevision(0, parsed_definition, inherited_requirements, build)
        return self.store.commit_assembly_revision(assembly_id, base_revision, pending)

    def _render(self, revision: AssemblyRevision, views: list[str]) -> tuple[str, list[RenderedImage]]:
        if not views:
            return "none", []
        return self.renderer.render_shape(revision.build.shape, views)

    @staticmethod
    def _require_exportable(revision: AssemblyRevision) -> None:
        if revision.build.diagnostics["status"] != "fully_constrained":
            raise Mcp3dError(
                "ASSEMBLY_NOT_FULLY_CONSTRAINED",
                "Export requires a fully constrained assembly revision.",
                ["Ground one instance in each connected component and resolve all mate conflicts before exporting."],
                {"status": revision.build.diagnostics["status"], "remaining_dof": revision.build.diagnostics["remaining_dof"]},
            )

    def _pinned_part_revisions(self, assembly: AssemblyRevision) -> list[tuple[PartId, Revision]]:
        """Resolve each unique pinned part once for the package writer."""
        resolved: list[tuple[PartId, Revision]] = []
        seen: set[tuple[PartId, int]] = set()
        for instance in assembly.definition.instances:
            key = (instance.part.part_id, instance.part.revision)
            if key not in seen:
                resolved.append((instance.part.part_id, self.store.get_revision(*key)))
                seen.add(key)
        return resolved

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
        "solver": thaw(revision.build.diagnostics),
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
    if not isinstance(criterion, Mapping):
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
        passed = (
            isinstance(expected, list | tuple)
            and len(expected) == 3
            and all(isinstance(value, int | float) and not isinstance(value, bool) for value in expected)
            and actual == [float(value) for value in expected]
        )
    else:
        passed = actual == expected
    return {"id": identifier, "kind": kind, "status": "pass" if passed else "fail", "expected": thaw(expected), "actual": actual}
