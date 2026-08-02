"""Revision transaction orchestration behind the MCP adapter."""

from __future__ import annotations

import copy
import os
from pathlib import Path
from typing import Any

from ..artifacts import export_revision
from ..cad import FeatureGraphCompiler
from ..errors import Mcp3dError
from ..identity import PartId
from ..immutability import thaw
from ..models import OperationResult, RenderedImage, Revision
from ..recipe import FeatureGraphRecipe, apply_replace_patch, parse_recipe
from ..rendering import RenderService
from ..reporting import (
    DEFAULT_ANALYZE_VIEWS,
    apply_views,
    report,
    requested_views,
    validate_part_requirements,
)
from .observation import OperationMilestone, OperationObserver
from .store import InMemoryPartStore


class PartService:
    """Create, inspect, revise, and export one revisioned local CAD part."""

    def __init__(
        self,
        artifact_root: Path | None = None,
        *,
        compiler: FeatureGraphCompiler | None = None,
        renderer: RenderService | None = None,
        store: InMemoryPartStore | None = None,
        observer: OperationObserver | None = None,
    ) -> None:
        root = artifact_root or Path(os.environ.get("MCP3D_ARTIFACT_DIR", ".mcp3d/artifacts"))
        self.artifact_root = root.resolve()
        self.compiler = compiler or FeatureGraphCompiler()
        self.renderer = renderer or RenderService()
        self.store = store or InMemoryPartStore()
        self.observer = observer

    def apply(
        self,
        *,
        part_id: str | None,
        recipe: dict[str, Any] | None,
        patch: list[dict[str, Any]] | None,
        base_revision: int | None,
        requirements: dict[str, Any] | None,
        render: dict[str, Any] | None = None,
    ) -> OperationResult:
        self._record("apply", "started", part_id, message="Received a new CAD revision request.")
        try:
            parsed_part_id = PartId.parse(part_id)
            views = apply_views(render)
            self._record("apply", "compiling", parsed_part_id.value, message="Compiling the feature graph.", requested_views=views)
            revision = self._apply(parsed_part_id, recipe, patch, base_revision, requirements)
            self._record(
                "apply",
                "revision_committed",
                parsed_part_id.value,
                revision.number,
                message=f"Committed revision r{revision.number}.",
                recipe=revision.recipe,
            )
            # `_apply` validates part_id before compiling a revision.
            payload = report(parsed_part_id.value, revision, revision.requirements.get("assertions", []))
            self._record(
                "apply",
                "rendering",
                parsed_part_id.value,
                revision.number,
                message="Rendering requested inspection views." if views else "Skipping images; exact checks only.",
                requested_views=views,
            )
            renderer_name, images = self._render_part(revision, views)
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            self._record(
                "apply",
                "completed",
                parsed_part_id.value,
                revision.number,
                status=payload["status"],
                message=f"Revision r{revision.number} is {payload['status']}.",
                result=payload,
                images=images,
                shape=revision.shape,
            )
            return OperationResult(payload, images)
        except Mcp3dError as error:
            self._record("apply", "failed", part_id, status="error", message=error.message, result=error.as_dict())
            return OperationResult(error.as_dict(), is_error=True)

    def analyze(self, *, part_id: str, revision: int | None, requests: list[dict[str, Any]] | None) -> OperationResult:
        self._record("analyze", "started", part_id, revision, message="Inspecting an existing CAD revision.")
        try:
            parsed_part_id = PartId.parse(part_id)
            selected = self.get_revision(parsed_part_id, revision)
            requests = requests or []
            views = requested_views(requests)
            if views is None:
                views = list(DEFAULT_ANALYZE_VIEWS)
            assertions = [item for request in requests if request.get("kind") == "assert" for item in request.get("criteria", [])]
            payload = report(parsed_part_id.value, selected, assertions)
            self._record(
                "analyze",
                "rendering",
                parsed_part_id.value,
                selected.number,
                message="Rendering requested inspection views." if views else "Skipping part images; exact checks only.",
                requested_views=views,
            )
            renderer_name, images = self._render_part(selected, views)
            for sketch_id in [request.get("sketch") for request in requests if request.get("kind") == "render_sketch"]:
                if sketch_id not in selected.sketches:
                    raise Mcp3dError("SKETCH_NOT_FOUND", f"No sketch named {sketch_id!r} exists in this revision.")
                images.append(self.renderer.render_sketch(selected, selected.sketches[sketch_id]))
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            self._record(
                "analyze",
                "completed",
                parsed_part_id.value,
                selected.number,
                status=payload["status"],
                message=f"Inspection of r{selected.number} is {payload['status']}.",
                result=payload,
                images=images,
                shape=selected.shape,
            )
            return OperationResult(payload, images)
        except Mcp3dError as error:
            self._record("analyze", "failed", part_id, revision, status="error", message=error.message, result=error.as_dict())
            return OperationResult(error.as_dict(), is_error=True)

    def export(self, *, part_id: str, revision: int | None, formats: list[str] | None) -> dict[str, Any]:
        self._record("export", "started", part_id, revision, message="Preparing CAD export.")
        try:
            parsed_part_id = PartId.parse(part_id)
            selected = self.get_revision(parsed_part_id, revision)
            self._record("export", "writing", parsed_part_id.value, selected.number, message="Writing requested CAD deliverables.")
            payload = export_revision(parsed_part_id, selected, self.artifact_root, formats)
            self._record(
                "export",
                "completed",
                parsed_part_id.value,
                selected.number,
                status="ok",
                message=f"Exported revision r{selected.number}.",
                result=payload,
            )
            return payload
        except Mcp3dError as error:
            self._record("export", "failed", part_id, revision, status="error", message=error.message, result=error.as_dict())
            raise

    def _render_part(self, revision: Revision, views: list[str]) -> tuple[str, list[RenderedImage]]:
        """Avoid starting a renderer when the caller intentionally requested no images."""
        if not views:
            return "none", []
        return self.renderer.render_part(revision, views)

    def _record(
        self,
        action: str,
        phase: str,
        part_id: str | None,
        revision: int | None = None,
        *,
        status: str = "working",
        message: str,
        requested_views: list[str] | None = None,
        recipe: FeatureGraphRecipe | None = None,
        result: dict[str, Any] | None = None,
        images: list[RenderedImage] | None = None,
        shape: Any | None = None,
    ) -> None:
        """Publish an optional UI-neutral milestone through the observer seam."""
        if self.observer is not None:
            self.observer.record(
                OperationMilestone(
                    action=action,
                    phase=phase,
                    part_id=part_id,
                    revision=revision,
                    status=status,
                    message=message,
                    requested_views=tuple(requested_views) if requested_views is not None else None,
                    recipe=recipe,
                    result=result,
                    images=tuple(images or ()),
                    shape=shape,
                )
            )

    def get_revision(self, part_id: PartId, revision: int | None) -> Revision:
        return self.store.get_revision(part_id, revision)

    def _apply(
        self,
        part_id: PartId,
        recipe: dict[str, Any] | None,
        patch: list[dict[str, Any]] | None,
        base_revision: int | None,
        requirements: dict[str, Any] | None,
    ) -> Revision:
        if recipe is not None and patch is not None:
            raise Mcp3dError("AMBIGUOUS_EDIT", "Supply either a complete recipe or a patch, not both.")
        existing = self.store.get(part_id)
        if existing is None:
            if recipe is None or patch is not None:
                raise Mcp3dError("RECIPE_REQUIRED", "A new part requires a complete recipe.")
            if base_revision is not None:
                raise Mcp3dError("REVISION_CONFLICT", "A new part cannot specify base_revision.")
            candidate, inherited_requirements = copy.deepcopy(recipe), {}
        else:
            head = existing.revisions[-1]
            if base_revision != head.number:
                raise Mcp3dError("REVISION_CONFLICT", f"Expected base_revision {head.number}; received {base_revision!r}.")
            if recipe is not None:
                candidate = copy.deepcopy(recipe)
            elif patch is not None:
                candidate = apply_replace_patch(head.recipe.to_dict(), patch)
            else:
                raise Mcp3dError("EDIT_REQUIRED", "Supply a recipe or patch when revising a part.")
            inherited_requirements = thaw(head.requirements)
        if requirements is not None:
            inherited_requirements = copy.deepcopy(validate_part_requirements(requirements))
        parsed_recipe = parse_recipe(candidate)
        built = self.compiler.compile(parsed_recipe)
        pending = Revision(0, parsed_recipe, inherited_requirements, built.shape, built.sketches, built.mate_connectors)
        return self.store.commit_part_revision(part_id, base_revision, pending)
