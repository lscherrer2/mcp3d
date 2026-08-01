"""Compact triangle-mesh encoding for the local interactive dashboard."""

from __future__ import annotations

import struct
from typing import Any

from ..models import RenderedMesh


def render_interactive_mesh(shape: Any) -> RenderedMesh:
    """Tessellate a part into a versioned little-endian browser mesh payload.

    Layout: two uint32 counts, then XYZ float32 vertices, then uint32 triangle
    indices. It intentionally avoids an on-disk mesh or a JSON/base64 expansion.
    """
    box = shape.bounding_box()
    maximum_dimension = max(box.size.X, box.size.Y, box.size.Z)
    tolerance = min(max(maximum_dimension / 500, 0.05), 0.5)
    vertices, triangles = shape.tessellate(tolerance)
    data = bytearray(struct.pack("<II", len(vertices), len(triangles)))
    for vertex in vertices:
        data.extend(struct.pack("<fff", vertex.X, vertex.Y, vertex.Z))
    for triangle in triangles:
        data.extend(struct.pack("<III", *triangle))
    return RenderedMesh(bytes(data), len(vertices), len(triangles))
