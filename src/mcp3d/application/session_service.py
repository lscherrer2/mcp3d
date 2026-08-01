"""Independent multi-part session discovery and display-only previewing."""

from __future__ import annotations

from typing import Any

from build123d import Compound, Location

from ..errors import Mcp3dError
from ..identity import PartId
from ..models import OperationResult, RenderedImage, Revision
from ..rendering import RenderService
from ..reporting import apply_views
from .store import InMemoryPartStore


class SessionService:
    """Expose many isolated part histories without introducing assembly state."""

    def __init__(self, *, store: InMemoryPartStore, renderer: RenderService | None = None) -> None:
        self.store = store
        self.renderer = renderer or RenderService()

    def list_parts(self) -> dict[str, Any]:
        """Describe the independent part heads currently held by this server."""
        return {
            "status": "ok",
            "parts": [
                {
                    "part_id": part.part_id.value,
                    "head_revision": part.revisions[-1].number,
                }
                for part in self.store.list()
            ],
        }

    def preview_parts(
        self,
        *,
        parts: list[dict[str, Any]] | None,
        render: dict[str, Any] | None,
    ) -> OperationResult:
        """Render selected independent parts in an ephemeral side-by-side layout."""
        try:
            views = apply_views(render)
            selected = self._resolve_parts(parts)
            display_shape, entries = self._layout(selected)
            box = display_shape.bounding_box()
            payload = {
                "status": "ok",
                "mode": "independent_parts_preview",
                "units": "mm",
                "summary": {
                    "part_count": len(entries),
                    "solid_count": len(display_shape.solids()),
                    "bounding_box_mm": [round(value, 6) for value in (box.size.X, box.size.Y, box.size.Z)],
                    "volume_mm3": round(display_shape.volume, 6),
                },
                "parts": entries,
            }
            renderer_name, images = self._render(display_shape, views)
            payload["views"] = [image.name for image in images]
            payload["renderer"] = renderer_name
            return OperationResult(payload, images)
        except Mcp3dError as error:
            return OperationResult(error.as_dict(), is_error=True)

    def _resolve_parts(self, requested: list[dict[str, Any]] | None) -> list[tuple[PartId, Revision]]:
        if requested is None:
            return [(part.part_id, part.revisions[-1]) for part in self.store.list()]
        if not isinstance(requested, list) or not requested:
            raise Mcp3dError("PARTS_REQUIRED", "parts must be a non-empty list of part references.")
        selected: list[tuple[PartId, Revision]] = []
        seen: set[PartId] = set()
        for index, item in enumerate(requested):
            if not isinstance(item, dict) or set(item) - {"part_id", "revision"}:
                raise Mcp3dError("INVALID_PART_REFERENCE", f"parts[{index}] must contain only part_id and optional revision.")
            part_id = PartId.parse(item.get("part_id"))
            if part_id in seen:
                raise Mcp3dError("DUPLICATE_PART", f"parts includes {part_id.value!r} more than once.")
            revision = item.get("revision")
            if revision is not None and (isinstance(revision, bool) or not isinstance(revision, int)):
                raise Mcp3dError("INVALID_REVISION", f"parts[{index}].revision must be a positive integer when supplied.")
            selected.append((part_id, self.store.get_revision(part_id, revision)))
            seen.add(part_id)
        return selected

    @staticmethod
    def _layout(selected: list[tuple[PartId, Revision]]) -> tuple[Compound, list[dict[str, Any]]]:
        if not selected:
            raise Mcp3dError("PARTS_REQUIRED", "No parts exist in this server session to preview.")
        cursor, gap = 0.0, 20.0
        shapes = []
        entries: list[dict[str, Any]] = []
        for part_id, revision in selected:
            box = revision.shape.bounding_box()
            translation = (cursor - box.min.X, -box.min.Y, -box.min.Z)
            placed = revision.shape.moved(Location(translation))
            shapes.append(placed)
            placed_box = placed.bounding_box()
            entries.append(
                {
                    "part_id": part_id.value,
                    "revision": revision.number,
                    "display_translation_mm": [round(value, 6) for value in translation],
                    "bounding_box_mm": [round(value, 6) for value in (box.size.X, box.size.Y, box.size.Z)],
                    "display_bounding_box_mm": [round(value, 6) for value in (placed_box.size.X, placed_box.size.Y, placed_box.size.Z)],
                    "volume_mm3": round(revision.shape.volume, 6),
                }
            )
            cursor += box.size.X + gap
        return Compound(children=shapes), entries

    def _render(self, shape: Any, views: list[str]) -> tuple[str, list[RenderedImage]]:
        if not views:
            return "none", []
        return self.renderer.render_shape(shape, views)
