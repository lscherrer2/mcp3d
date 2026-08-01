"""Compile durable part-local mate connector declarations."""

from __future__ import annotations

from typing import Any

from ..assembly import Frame
from ..errors import Mcp3dError
from ..recipe import MateConnectorDefinition, RecipeValues


def compile_mate_connectors(
    definitions: tuple[MateConnectorDefinition, ...],
    planes: dict[str, Any],
    values: RecipeValues,
) -> dict[str, Frame]:
    """Resolve recipe connector declarations after all part references exist."""
    connectors: dict[str, Frame] = {}
    for definition in definitions:
        frame = definition.fields.get("frame")
        if frame is not None:
            connectors[definition.identifier] = _explicit_frame(definition.identifier, frame, values)
        else:
            connectors[definition.identifier] = _plane_frame(definition.identifier, definition.fields, planes, values)
    return connectors


def _explicit_frame(identifier: str, definition: Any, values: RecipeValues) -> Frame:
    if not isinstance(definition, dict) or set(definition) != {"origin", "x_axis", "z_axis"}:
        raise Mcp3dError("INVALID_CONNECTOR", f"Mate connector {identifier!r}.frame needs origin, x_axis, and z_axis.")
    return Frame.from_axes(
        values.point3(definition["origin"], f"{identifier}.frame.origin"),
        values.vector3(definition["x_axis"], f"{identifier}.frame.x_axis"),
        values.vector3(definition["z_axis"], f"{identifier}.frame.z_axis"),
    )


def _plane_frame(identifier: str, fields: Any, planes: dict[str, Any], values: RecipeValues) -> Frame:
    definition = fields.get("on")
    if not isinstance(definition, dict) or set(definition) - {"plane", "point"} or "plane" not in definition:
        raise Mcp3dError("INVALID_CONNECTOR", f"Mate connector {identifier!r}.on needs plane and optional local point.")
    plane_id = definition["plane"]
    if not isinstance(plane_id, str) or plane_id not in planes:
        raise Mcp3dError("REFERENCE_NOT_FOUND", f"Mate connector {identifier!r} references unknown plane {plane_id!r}.")
    point = values.point2(definition.get("point", [0, 0]), f"{identifier}.on.point")
    plane = planes[plane_id]
    origin = plane.from_local_coords((point[0], point[1], 0))
    x_axis = fields.get("x_axis", tuple(plane.x_dir))
    return Frame.from_axes(
        (origin.X, origin.Y, origin.Z),
        values.vector3(x_axis, f"{identifier}.x_axis"),
        tuple(plane.z_dir),
    )
