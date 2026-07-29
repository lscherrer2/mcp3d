"""Choose a configured part renderer and expose a small rendering interface."""

from __future__ import annotations

import os

from ..errors import Mcp3dError
from ..models import RenderedImage, Revision, SketchRecord
from .pyvista import render_pyvista_views
from .svg import render_sketch, render_technical_views


class RenderService:
    """Render canonical part views and labelled sketch evidence."""

    def render_part(self, revision: Revision, views: list[str]) -> tuple[str, list[RenderedImage]]:
        requested = os.environ.get("MCP3D_RENDERER", "pyvista").lower()
        if requested == "technical":
            return "technical", render_technical_views(revision, views)
        if requested not in {"pyvista", "auto"}:
            raise Mcp3dError("INVALID_RENDERER", "MCP3D_RENDERER must be 'pyvista', 'auto', or 'technical'.")
        try:
            return "pyvista", render_pyvista_views(revision, views)
        except Exception:
            return "technical", render_technical_views(revision, views)

    def render_sketch(self, revision: Revision, sketch: SketchRecord) -> RenderedImage:
        return render_sketch(revision, sketch)
