"""Solid-producing and topology-modifying feature implementations."""

from __future__ import annotations

from typing import Any

from build123d import (
    Axis,
    Plane,
    chamfer,
    draft,
    extrude,
    fillet,
    loft,
    offset,
    revolve,
    sweep,
)

from ..errors import Mcp3dError
from ..models import SketchRecord
from ..recipe import FeatureOperation, RecipeValues
from .topology import select_topology


def build_profile_feature(operation: FeatureOperation, sketches: dict[str, SketchRecord], values: RecipeValues) -> Any:
    """Build an uncombined solid tool from a profile feature operation."""
    identifier, kind = operation.identifier, operation.kind
    if kind in {"extrude", "revolve"}:
        sketch_id = operation.get("sketch")
        if sketch_id not in sketches or sketches[sketch_id].profile is None:
            raise Mcp3dError("PROFILE_REQUIRED", f"{kind.title()} {identifier!r} needs a named sketch with a closed profile.")
        profile = sketches[sketch_id].profile
        if kind == "extrude":
            amount = values.length(operation.get("amount"), f"{identifier}.amount")
            if amount == 0:
                raise Mcp3dError("INVALID_DIMENSION", f"{identifier}.amount cannot be zero.")
            return extrude(profile, amount=amount)
        axis = resolve_axis(operation.get("axis"), values, identifier)
        angle = values.angle(operation.get("angle", 360), f"{identifier}.angle")
        if angle == 0 or abs(angle) > 360:
            raise Mcp3dError("INVALID_DIMENSION", f"{identifier}.angle must be non-zero and no more than 360 degrees.")
        return revolve(profile, axis=axis, revolution_arc=angle)
    if kind == "loft":
        section_ids = operation.get("sections")
        if not isinstance(section_ids, list) or len(section_ids) < 2:
            raise Mcp3dError("PROFILE_REQUIRED", f"Loft {identifier!r} needs two or more named sketch sections.")
        profiles = []
        for sketch_id in section_ids:
            if sketch_id not in sketches or sketches[sketch_id].profile is None:
                raise Mcp3dError("PROFILE_REQUIRED", f"Loft {identifier!r} references sketch {sketch_id!r} without a closed profile.")
            profiles.append(sketches[sketch_id].profile)
        return loft(profiles, ruled=bool(operation.get("ruled", False)))
    section_id = operation.get("section")
    if section_id not in sketches or sketches[section_id].profile is None:
        raise Mcp3dError("PROFILE_REQUIRED", f"Sweep {identifier!r} needs a named section sketch with a closed profile.")
    path = operation.get("path")
    if isinstance(path, str):
        path_sketch_id, _, entity_id = path.partition(".")
    elif isinstance(path, dict):
        path_sketch_id, entity_id = path.get("sketch"), path.get("entity")
    else:
        path_sketch_id = entity_id = None
    if path_sketch_id not in sketches or entity_id not in sketches[path_sketch_id].entities:
        raise Mcp3dError("PATH_REQUIRED", f"Sweep {identifier!r} needs path 'sketch.entity' referring to a sketch curve.")
    path_edge = sketches[path_sketch_id].plane.from_local_coords(sketches[path_sketch_id].entities[entity_id])
    return sweep(sketches[section_id].profile, path=path_edge, is_frenet=bool(operation.get("is_frenet", False)))


def combine_tool(shape: Any, tool: Any, mode: Any, identifier: str) -> Any:
    """Fuse or cut a produced feature tool into the current solid."""
    if mode == "add":
        return shape.fuse(tool)
    if mode == "cut":
        return shape.cut(tool)
    raise Mcp3dError("UNSUPPORTED_FEATURE", f"{identifier!r}.operation must be 'add' or 'cut', not {mode!r}.")


def apply_finishing_feature(shape: Any, operation: FeatureOperation, planes: dict[str, Any], values: RecipeValues) -> Any:
    """Apply fillet/chamfer/shell/draft to the current solid."""
    identifier, kind = operation.identifier, operation.kind
    if kind == "fillet":
        edges = select_topology(shape, operation.get("selector"), "edge", identifier)
        return fillet(edges, values.length(operation.get("radius"), f"{identifier}.radius"))
    if kind == "chamfer":
        edges = select_topology(shape, operation.get("selector"), "edge", identifier)
        length2 = operation.get("length2")
        return chamfer(
            edges,
            values.length(operation.get("length"), f"{identifier}.length"),
            values.length(length2, f"{identifier}.length2") if length2 is not None else None,
        )
    if kind == "shell":
        openings = select_topology(shape, operation.get("openings"), "face", identifier)
        wall = values.length(operation.get("wall"), f"{identifier}.wall")
        if wall <= 0:
            raise Mcp3dError("INVALID_DIMENSION", f"{identifier}.wall must be positive.")
        return offset(shape, amount=-wall, openings=openings)
    faces = select_topology(shape, operation.get("selector"), "face", identifier)
    return draft(
        faces,
        resolve_plane(operation.get("neutral_plane"), planes, values, identifier),
        values.angle(operation.get("angle"), f"{identifier}.angle"),
    )


def apply_pattern(shape: Any, operation: FeatureOperation, tools: dict[str, tuple[Any, str]], values: RecipeValues) -> Any:
    """Replicate a named uncombined feature tool, including its source instance."""
    identifier, source = operation.identifier, operation.get("source")
    if source not in tools:
        raise Mcp3dError("PATTERN_SOURCE_NOT_FOUND", f"Pattern {identifier!r} must reference an earlier solid feature tool.")
    tool, mode = tools[source]
    count_value = values.scalar(operation.get("count"), f"{identifier}.count")
    if count_value != int(count_value) or count_value < 2:
        raise Mcp3dError("INVALID_PATTERN", f"{identifier}.count must be an integer of at least 2 (including the source).")
    count = int(count_value)
    if operation.kind == "linear_pattern":
        if operation.get("step") is not None:
            step = values.point3(operation.get("step"), f"{identifier}.step")
        else:
            direction = values.vector3(operation.get("direction"), f"{identifier}.direction")
            spacing = values.length(operation.get("spacing"), f"{identifier}.spacing")
            magnitude = sum(component * component for component in direction) ** 0.5
            if magnitude == 0 or spacing == 0:
                raise Mcp3dError("INVALID_PATTERN", f"{identifier} needs a non-zero direction and spacing.")
            step = tuple(component / magnitude * spacing for component in direction)
        copies = [tool.translate(tuple(component * index for component in step)) for index in range(1, count)]
    else:
        center = values.point3(operation.get("center", [0, 0, 0]), f"{identifier}.center")
        direction = values.vector3(operation.get("axis", [0, 0, 1]), f"{identifier}.axis")
        span = values.angle(operation.get("angle", 360), f"{identifier}.angle")
        if sum(component * component for component in direction) == 0 or span == 0:
            raise Mcp3dError("INVALID_PATTERN", f"{identifier} needs a non-zero axis and angle.")
        increment = span / count if abs(span) == 360 else span / (count - 1)
        axis = Axis(center, direction)
        copies = [tool.rotate(axis, increment * index) for index in range(1, count)]
    return shape.fuse(*copies) if mode == "add" else shape.cut(*copies)


def resolve_axis(value: Any, values: RecipeValues, identifier: str) -> Axis:
    """Resolve an x/y/z shorthand or explicit origin/direction revolution axis."""
    if isinstance(value, str):
        directions = {"x": (1, 0, 0), "y": (0, 1, 0), "z": (0, 0, 1)}
        if value.lower() in directions:
            return Axis((0, 0, 0), directions[value.lower()])
    if isinstance(value, dict):
        origin = values.point3(value.get("origin", [0, 0, 0]), f"{identifier}.axis.origin")
        direction = values.vector3(value.get("direction"), f"{identifier}.axis.direction")
        if sum(component * component for component in direction) > 0:
            return Axis(origin, direction)
    raise Mcp3dError("AXIS_REQUIRED", f"{identifier}.axis must be 'x', 'y', 'z', or an origin/direction object.")


def resolve_plane(value: Any, planes: dict[str, Any], values: RecipeValues, identifier: str) -> Any:
    """Resolve a known datum or explicit neutral plane for draft."""
    if isinstance(value, str) and value in planes:
        return planes[value]
    if isinstance(value, dict):
        return Plane(
            values.point3(value.get("origin"), f"{identifier}.neutral_plane.origin"),
            x_dir=values.vector3(value.get("x_dir", [1, 0, 0]), f"{identifier}.neutral_plane.x_dir"),
            z_dir=values.vector3(value.get("normal"), f"{identifier}.neutral_plane.normal"),
        )
    raise Mcp3dError("REFERENCE_NOT_FOUND", f"{identifier}.neutral_plane must be a known datum plane or explicit plane.")
