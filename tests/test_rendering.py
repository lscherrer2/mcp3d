"""Renderer-level tests independent of MCP content conversion."""

from __future__ import annotations

import os
import unittest

from build123d import Box

from mcp3d.models import Revision
from mcp3d.rendering import RenderService


class RenderServiceTests(unittest.TestCase):
    def test_technical_renderer_returns_an_in_memory_canonical_view(self) -> None:
        original = os.environ.get("MCP3D_RENDERER")
        os.environ["MCP3D_RENDERER"] = "technical"
        try:
            revision = Revision(1, {}, {}, Box(10, 8, 6))
            renderer, images = RenderService().render_part(revision, ["isometric"])
            self.assertEqual(renderer, "technical")
            self.assertEqual(images[0].name, "isometric")
            self.assertEqual(images[0].format, "png")
            self.assertTrue(images[0].data.startswith(b"\x89PNG\r\n\x1a\n"))
        finally:
            if original is None:
                os.environ.pop("MCP3D_RENDERER", None)
            else:
                os.environ["MCP3D_RENDERER"] = original
