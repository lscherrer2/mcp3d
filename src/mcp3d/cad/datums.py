"""Named datum-plane construction for the feature graph."""

from __future__ import annotations

from typing import Any

from build123d import Plane

from ..errors import Mcp3dError
from ..recipe import RecipeValues


def build_datum_plane(
    operation: dict[str, Any],
    planes: dict[str, Any],
    references: dict[str, Any],
    values: RecipeValues,
) -> Any:
    """Resolve an explicit, offset, or rotated named datum plane."""
    definition = operation.get("definition")
    identifier = operation["id"]
    if not isinstance(definition, dict):
        raise Mcp3dError("DATUM_DEFINITION_REQUIRED", f"Datum plane {identifier!r} needs a definition.")
    kind = definition.get("kind")
    if kind == "explicit":
        return Plane(
            values.point3(definition.get("origin"), f"{identifier}.origin"),
            x_dir=values.point3(definition.get("x_dir"), f"{identifier}.x_dir"),
            z_dir=values.point3(definition.get("normal"), f"{identifier}.normal"),
        )
    if kind == "offset_from_face":
        support = definition.get("support")
        if support not in planes:
            raise Mcp3dError("REFERENCE_NOT_FOUND", f"Datum support {support!r} does not exist.")
        return planes[support].offset(values.number(definition.get("offset", 0), f"{identifier}.offset"))
    if kind == "rotate_about":
        support, axis = definition.get("support"), definition.get("axis")
        if support not in planes or axis not in references:
            raise Mcp3dError("REFERENCE_NOT_FOUND", "rotate_about needs known support and axis references.")
        plane = planes[support]
        edge = references[axis]
        start, end = edge.vertices()
        local_axis = plane.to_local_coords(end.position - start.position)
        angle = values.number(definition.get("angle"), f"{identifier}.angle")
        return plane.rotated((angle, 0, 0) if abs(local_axis.X) >= abs(local_axis.Y) else (0, angle, 0))
    raise Mcp3dError("UNSUPPORTED_DATUM", f"Datum definition kind {kind!r} is unsupported.")
