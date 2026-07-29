"""Deterministic, cardinality-checked topology selection."""

from __future__ import annotations

from typing import Any

from ..errors import Mcp3dError


def select_topology(shape: Any, selector: Any, topology: str, identifier: str) -> list[Any]:
    """Select real current edges/faces by geometry and position, never B-rep ID."""
    if not isinstance(selector, dict):
        raise Mcp3dError("SELECTOR_REQUIRED", f"{identifier!r} needs a {topology} selector object with an expected count.")
    expected = selector.get("expect")
    if not isinstance(expected, int) or expected < 1:
        raise Mcp3dError("SELECTOR_EXPECT_REQUIRED", f"{identifier!r}.selector.expect must be a positive integer.")
    candidates = list(shape.edges() if topology == "edge" else shape.faces())
    geom_type = selector.get("geom_type")
    if geom_type is not None:
        candidates = [item for item in candidates if getattr(item.geom_type, "name", str(item.geom_type)).upper() == str(geom_type).upper()]
    direction = selector.get("parallel_to" if topology == "edge" else "normal_to")
    if direction is not None:
        wanted = vector3(direction, f"{identifier}.selector.direction")
        magnitude = sum(component * component for component in wanted) ** 0.5
        if magnitude == 0:
            raise Mcp3dError("INVALID_SELECTOR", "Selector direction cannot be zero.")
        wanted = tuple(component / magnitude for component in wanted)

        def matches_direction(item: Any) -> bool:
            vector = item.tangent_at() if topology == "edge" else item.normal_at()
            actual = (vector.X, vector.Y, vector.Z)
            length = sum(component * component for component in actual) ** 0.5
            return length > 0 and abs(sum(a * b for a, b in zip(actual, wanted, strict=True)) / length) >= float(selector.get("alignment", 0.999))

        candidates = [item for item in candidates if matches_direction(item)]
    extreme = selector.get("at_extreme")
    if extreme is not None:
        if not isinstance(extreme, dict) or extreme.get("axis") not in {"x", "y", "z"} or extreme.get("which") not in {"min", "max"}:
            raise Mcp3dError("INVALID_SELECTOR", "at_extreme needs axis x/y/z and which min/max.")
        coordinate = {"x": "X", "y": "Y", "z": "Z"}[extreme["axis"]]
        which = extreme["which"]
        target = getattr(shape.bounding_box().min if which == "min" else shape.bounding_box().max, coordinate)
        tolerance = float(extreme.get("tolerance", 1e-5))
        touches = extreme.get("mode") == "touches"

        def matches_extreme(item: Any) -> bool:
            box = item.bounding_box()
            near = getattr(box.min if which == "min" else box.max, coordinate)
            other = getattr(box.max if which == "min" else box.min, coordinate)
            return abs(near - target) <= tolerance and (touches or abs(other - target) <= tolerance)

        candidates = [item for item in candidates if matches_extreme(item)]
    if len(candidates) != expected:
        code = "SELECTOR_EMPTY" if not candidates else "SELECTOR_AMBIGUOUS"
        raise Mcp3dError(code, f"{identifier!r} selector expected {expected} {topology}(s), but resolved {len(candidates)}.")
    return candidates


def vector3(value: Any, field_name: str) -> tuple[float, float, float]:
    """Validate a selector direction vector independent of recipe parameters."""
    if not isinstance(value, list | tuple) or len(value) != 3 or any(isinstance(item, bool) or not isinstance(item, (int, float)) for item in value):
        raise Mcp3dError("INVALID_SELECTOR", f"{field_name} must be a three-coordinate numeric vector.")
    return (float(value[0]), float(value[1]), float(value[2]))
