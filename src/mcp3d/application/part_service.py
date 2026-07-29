"""Revision transaction orchestration behind the MCP adapter."""

from __future__ import annotations

import copy
import os
from pathlib import Path
from typing import Any

from ..artifacts import export_revision
from ..cad import FeatureGraphCompiler
from ..errors import Mcp3dError
from ..models import OperationResult, Part, RenderedImage, Revision
from ..recipe import apply_replace_patch
from ..rendering import RenderService
from ..reporting import DEFAULT_ANALYZE_VIEWS, apply_views, report, requested_views
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
    ) -> None:
        root = artifact_root or Path(os.environ.get("MCP3D_ARTIFACT_DIR", ".mcp3d/artifacts"))
        self.artifact_root = root.resolve()
        self.compiler = compiler or FeatureGraphCompiler()
        self.renderer = renderer or RenderService()
        self.store = store or InMemoryPartStore()

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
        try:
            views = apply_views(render)
            revision = self._apply(part_id, recipe, patch, base_revision, requirements)
            # `_apply` validates part_id before compiling a revision.
            payload = report(part_id or "", revision, revision.requirements.get("assertions", []))
            renderer_name, images = self._render_part(revision, views)
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            return OperationResult(payload, images)
        except Mcp3dError as error:
            return OperationResult(error.as_dict(), is_error=True)

    def analyze(self, *, part_id: str, revision: int | None, requests: list[dict[str, Any]] | None) -> OperationResult:
        try:
            selected = self.get_revision(part_id, revision)
            requests = requests or []
            views = requested_views(requests)
            if views is None:
                views = list(DEFAULT_ANALYZE_VIEWS)
            assertions = [item for request in requests if request.get("kind") == "assert" for item in request.get("criteria", [])]
            payload = report(part_id, selected, assertions)
            renderer_name, images = self._render_part(selected, views)
            for sketch_id in [request.get("sketch") for request in requests if request.get("kind") == "render_sketch"]:
                if sketch_id not in selected.sketches:
                    raise Mcp3dError("SKETCH_NOT_FOUND", f"No sketch named {sketch_id!r} exists in this revision.")
                images.append(self.renderer.render_sketch(selected, selected.sketches[sketch_id]))
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            return OperationResult(payload, images)
        except Mcp3dError as error:
            return OperationResult(error.as_dict(), is_error=True)

    def export(self, *, part_id: str, revision: int | None, formats: list[str] | None) -> dict[str, Any]:
        return export_revision(part_id, self.get_revision(part_id, revision), self.artifact_root, formats)

    def _render_part(self, revision: Revision, views: list[str]) -> tuple[str, list[RenderedImage]]:
        """Avoid starting a renderer when the caller intentionally requested no images."""
        if not views:
            return "none", []
        return self.renderer.render_part(revision, views)

    def get_revision(self, part_id: str, revision: int | None) -> Revision:
        part = self.store.get(part_id)
        if part is None:
            raise Mcp3dError("PART_NOT_FOUND", f"No part named {part_id!r} exists in this server session.")
        if revision is None:
            return part.revisions[-1]
        if revision < 1 or revision > len(part.revisions):
            raise Mcp3dError("REVISION_NOT_FOUND", f"No revision {revision} exists for {part_id!r}.")
        return part.revisions[revision - 1]

    def _apply(
        self,
        part_id: str | None,
        recipe: dict[str, Any] | None,
        patch: list[dict[str, Any]] | None,
        base_revision: int | None,
        requirements: dict[str, Any] | None,
    ) -> Revision:
        if recipe is not None and patch is not None:
            raise Mcp3dError("AMBIGUOUS_EDIT", "Supply either a complete recipe or a patch, not both.")
        if not part_id:
            raise Mcp3dError("PART_ID_REQUIRED", "part_id is required for a single-part revision.")
        existing = self.store.get(part_id)
        if existing is None:
            if recipe is None or patch is not None:
                raise Mcp3dError("RECIPE_REQUIRED", "A new part requires a complete recipe.")
            if base_revision is not None:
                raise Mcp3dError("REVISION_CONFLICT", "A new part cannot specify base_revision.")
            candidate, inherited_requirements, part = copy.deepcopy(recipe), {}, Part(part_id)
        else:
            head = existing.revisions[-1]
            if base_revision != head.number:
                raise Mcp3dError("REVISION_CONFLICT", f"Expected base_revision {head.number}; received {base_revision!r}.")
            if recipe is not None:
                candidate = copy.deepcopy(recipe)
            elif patch is not None:
                candidate = apply_replace_patch(copy.deepcopy(head.recipe), patch)
            else:
                raise Mcp3dError("EDIT_REQUIRED", "Supply a recipe or patch when revising a part.")
            inherited_requirements, part = copy.deepcopy(head.requirements), existing
        if requirements is not None:
            inherited_requirements = copy.deepcopy(requirements)
        built = self.compiler.compile(candidate)
        number = len(part.revisions) + 1
        revision = Revision(number, candidate, inherited_requirements, built.shape, built.sketches)
        part.revisions.append(revision)
        self.store.save(part)
        return revision
