"""Compatibility compiler for the original box plus through-hole recipe."""

from __future__ import annotations

from typing import Any

from build123d import Align, Box, Cylinder, Pos

from ..errors import Mcp3dError
from ..models import BuildResult
from ..recipe import RecipeValues


def compile_legacy(recipe: dict[str, Any]) -> BuildResult:
    """Compile the maintained legacy dialect without involving feature graphs."""
    if recipe.get("units", "mm") != "mm":
        raise Mcp3dError("UNSUPPORTED_UNITS", "Legacy recipes accept millimetres only; set units to 'mm'.")
    values = RecipeValues(recipe.get("parameters", {}))
    base = recipe.get("base")
    if not isinstance(base, dict) or base.get("kind") != "box":
        raise Mcp3dError("UNSUPPORTED_BASE", "Legacy recipes require base.kind = 'box'.")
    length, width, height = (values.number(base.get(key), f"base.{key}") for key in ("length", "width", "height"))
    if min(length, width, height) <= 0:
        raise Mcp3dError("INVALID_DIMENSION", "Box dimensions must be positive.")
    shape = Box(length, width, height, align=(Align.MIN, Align.MIN, Align.MIN))
    seen_ids: set[str] = set()
    for feature in recipe.get("features", []):
        feature_id = feature.get("id")
        if not isinstance(feature_id, str) or not feature_id or feature_id in seen_ids:
            raise Mcp3dError("INVALID_FEATURE_ID", "Every feature needs a unique non-empty id.")
        seen_ids.add(feature_id)
        if feature.get("kind") != "through_holes":
            raise Mcp3dError("UNSUPPORTED_FEATURE", f"Legacy recipes do not support feature kind {feature.get('kind')!r}.")
        diameter = values.number(feature.get("diameter"), f"{feature_id}.diameter")
        centers = feature.get("centers")
        if diameter <= 0 or not isinstance(centers, list) or not centers:
            raise Mcp3dError("INVALID_HOLES", f"{feature_id} needs a positive diameter and non-empty centers.")
        holes = []
        for center in centers:
            if not isinstance(center, list) or len(center) != 2:
                raise Mcp3dError("INVALID_HOLE_CENTERS", f"{feature_id}.centers entries must be [x, y] pairs.")
            x, y = values.number(center[0], f"{feature_id}.x"), values.number(center[1], f"{feature_id}.y")
            if not 0 <= x <= length or not 0 <= y <= width:
                raise Mcp3dError("HOLE_OUTSIDE_BASE", f"Hole center ({x}, {y}) lies outside the box base.")
            holes.append(Pos(x, y, -1) * Cylinder(diameter / 2, height + 2, align=(Align.CENTER, Align.CENTER, Align.MIN)))
        shape = shape.cut(*holes)
    if not shape.is_valid or len(shape.solids()) != 1:
        raise Mcp3dError("INVALID_SOLID", "The legacy recipe did not produce exactly one valid solid.")
    return BuildResult(shape)
