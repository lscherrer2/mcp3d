"""The feature-graph recipe grammar and numeric value resolution."""

from __future__ import annotations

import copy
from dataclasses import dataclass
from typing import Any, Mapping

from .errors import Mcp3dError


_OPERATION_KINDS = frozenset(
    {
        "box",
        "datum_plane",
        "sketch",
        "extrude",
        "revolve",
        "loft",
        "sweep",
        "fillet",
        "chamfer",
        "shell",
        "draft",
        "linear_pattern",
        "polar_pattern",
    }
)

_LENGTH_UNIT_SCALES_MM = {
    "mm": 1.0,
    "cm": 10.0,
    "m": 1000.0,
    "in": 25.4,
}
_UNIT_ALIASES = {
    "millimeter": "mm",
    "millimeters": "mm",
    "millimetre": "mm",
    "millimetres": "mm",
    "centimeter": "cm",
    "centimeters": "cm",
    "centimetre": "cm",
    "centimetres": "cm",
    "meter": "m",
    "meters": "m",
    "metre": "m",
    "metres": "m",
    "inch": "in",
    "inches": "in",
}


@dataclass(frozen=True)
class FeatureOperation:
    """One validated operation, opaque outside the recipe/compile seam."""

    identifier: str
    kind: str
    fields: Mapping[str, Any]

    def get(self, name: str, default: Any = None) -> Any:
        return self.fields.get(name, default)

    def to_dict(self) -> dict[str, Any]:
        return {"id": self.identifier, "kind": self.kind, **copy.deepcopy(dict(self.fields))}


@dataclass(frozen=True)
class MateConnectorDefinition:
    """One named, part-local mating frame declaration."""

    identifier: str
    fields: Mapping[str, Any]

    def to_dict(self) -> dict[str, Any]:
        return {"id": self.identifier, **copy.deepcopy(dict(self.fields))}


@dataclass(frozen=True)
class FeatureGraphRecipe:
    """The only recipe model accepted by the CAD compiler."""

    units: str
    parameters: Mapping[str, float]
    operations: tuple[FeatureOperation, ...]
    mate_connectors: tuple[MateConnectorDefinition, ...] = ()

    def to_dict(self) -> dict[str, Any]:
        result = {
            "units": self.units,
            "parameters": dict(self.parameters),
            "operations": [operation.to_dict() for operation in self.operations],
        }
        if self.mate_connectors:
            result["mate_connectors"] = [connector.to_dict() for connector in self.mate_connectors]
        return result


def parse_recipe(value: object) -> FeatureGraphRecipe:
    """Parse external JSON into the one supported feature-graph model."""
    if not isinstance(value, dict):
        raise Mcp3dError("INVALID_RECIPE", "recipe must be an object containing an operations graph.")
    if "operations" not in value:
        raise Mcp3dError(
            "FEATURE_GRAPH_REQUIRED",
            "Recipes must contain a non-empty operations graph.",
            ['Provide {"units":"mm", "parameters": {...}, "operations":[...]}.'],
        )
    units = parse_units(value.get("units", "mm"))
    parameters = _parse_parameters(value.get("parameters", {}))
    raw_operations = value.get("operations")
    if not isinstance(raw_operations, list) or not raw_operations:
        raise Mcp3dError("OPERATIONS_REQUIRED", "A feature-graph recipe needs a non-empty operations list.")
    operations: list[FeatureOperation] = []
    identifiers: set[str] = set()
    for position, raw_operation in enumerate(raw_operations):
        if not isinstance(raw_operation, dict):
            raise Mcp3dError("INVALID_OPERATION", f"operations[{position}] must be an object.")
        identifier, kind = raw_operation.get("id"), raw_operation.get("kind")
        if not isinstance(identifier, str) or not identifier or identifier in identifiers:
            raise Mcp3dError("INVALID_FEATURE_ID", "Every operation requires a unique, non-empty id.")
        if kind not in _OPERATION_KINDS:
            raise Mcp3dError("UNSUPPORTED_FEATURE", f"Unsupported feature-graph operation kind {kind!r}.")
        identifiers.add(identifier)
        fields = {key: copy.deepcopy(field) for key, field in raw_operation.items() if key not in {"id", "kind"}}
        _validate_parameter_references(fields, parameters, f"operations[{position}]")
        operations.append(FeatureOperation(identifier, kind, fields))
    if operations[0].kind != "box":
        raise Mcp3dError("BASE_ORDER", "A feature-graph recipe must start with one box base operation.")
    return FeatureGraphRecipe(units, parameters, tuple(operations), _parse_mate_connectors(value.get("mate_connectors", []), parameters))


def _parse_mate_connectors(value: object, parameters: Mapping[str, float]) -> tuple[MateConnectorDefinition, ...]:
    if not isinstance(value, list):
        raise Mcp3dError("INVALID_CONNECTOR", "mate_connectors must be a list when supplied.")
    connectors: list[MateConnectorDefinition] = []
    identifiers: set[str] = set()
    for index, raw_connector in enumerate(value):
        if not isinstance(raw_connector, dict):
            raise Mcp3dError("INVALID_CONNECTOR", f"mate_connectors[{index}] must be an object.")
        identifier = raw_connector.get("id")
        if not isinstance(identifier, str) or not identifier or identifier in identifiers:
            raise Mcp3dError("INVALID_CONNECTOR", "Every mate connector requires a unique, non-empty id.")
        fields = {key: copy.deepcopy(field) for key, field in raw_connector.items() if key != "id"}
        if set(fields) - {"frame", "on", "x_axis"}:
            raise Mcp3dError("INVALID_CONNECTOR", f"Mate connector {identifier!r} has unsupported fields.")
        if ("frame" in fields) == ("on" in fields):
            raise Mcp3dError("INVALID_CONNECTOR", f"Mate connector {identifier!r} needs exactly one of frame or on.")
        _validate_parameter_references(fields, parameters, f"mate_connectors[{index}]")
        identifiers.add(identifier)
        connectors.append(MateConnectorDefinition(identifier, fields))
    return tuple(connectors)


def parse_units(value: object) -> str:
    """Normalize the length unit declared for recipe dimensions."""
    if not isinstance(value, str):
        raise Mcp3dError("UNSUPPORTED_UNITS", "units must be one of mm, cm, m, or in.")
    normalized = _UNIT_ALIASES.get(value.strip().lower(), value.strip().lower())
    if normalized not in _LENGTH_UNIT_SCALES_MM:
        raise Mcp3dError(
            "UNSUPPORTED_UNITS",
            "Supported length units are mm, cm, m, and in.",
            ['Set units to "mm", "cm", "m", or "in" ("inch" and "inches" are accepted aliases).'],
        )
    return normalized


def length_scale_mm(units: str) -> float:
    """Return the canonical-millimeter scale for a normalized unit name."""
    return _LENGTH_UNIT_SCALES_MM[units]


def _parse_parameters(value: object) -> dict[str, float]:
    if not isinstance(value, dict):
        raise Mcp3dError("INVALID_PARAMETERS", "parameters must be an object of numeric values.")
    result: dict[str, float] = {}
    for name, parameter in value.items():
        if not isinstance(name, str) or not name or isinstance(parameter, bool) or not isinstance(parameter, (int, float)):
            raise Mcp3dError("INVALID_PARAMETERS", "parameters must use non-empty names and numeric values.")
        result[name] = float(parameter)
    return result


def _validate_parameter_references(value: Any, parameters: Mapping[str, float], location: str) -> None:
    if isinstance(value, str) and value.startswith("$"):
        if value[1:] not in parameters:
            raise Mcp3dError("PARAMETER_NOT_FOUND", f"{location} references unknown parameter {value!r}.")
    elif isinstance(value, dict):
        for key, child in value.items():
            _validate_parameter_references(child, parameters, f"{location}.{key}")
    elif isinstance(value, list | tuple):
        for index, child in enumerate(value):
            _validate_parameter_references(child, parameters, f"{location}[{index}]")


class RecipeValues:
    """Resolve recipe values into millimeters, degrees, or unitless scalars."""

    def __init__(self, parameters: Mapping[str, float], units: str) -> None:
        self.parameters = parameters
        self.units = units
        self.length_scale_mm = _LENGTH_UNIT_SCALES_MM[units]

    def scalar(self, value: Any, field_name: str) -> float:
        if isinstance(value, str) and value.startswith("$"):
            value = self.parameters.get(value[1:])
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise Mcp3dError("INVALID_VALUE", f"{field_name} must be a number or a $parameter reference.")
        return float(value)

    def length(self, value: Any, field_name: str) -> float:
        """Resolve a recipe length into the CAD kernel's millimeters."""
        return self.scalar(value, field_name) * self.length_scale_mm

    def angle(self, value: Any, field_name: str) -> float:
        """Resolve a degree value; declared length units never affect angles."""
        return self.scalar(value, field_name)

    def point2(self, value: Any, field_name: str) -> tuple[float, float]:
        if not isinstance(value, list | tuple) or len(value) != 2:
            raise Mcp3dError("INVALID_POINT", f"{field_name} must be a two-coordinate point.")
        return (self.length(value[0], field_name), self.length(value[1], field_name))

    def point3(self, value: Any, field_name: str) -> tuple[float, float, float]:
        if not isinstance(value, list | tuple) or len(value) != 3:
            raise Mcp3dError("INVALID_POINT", f"{field_name} must be a three-coordinate vector.")
        return tuple(self.length(component, field_name) for component in value)  # type: ignore[return-value]

    def vector3(self, value: Any, field_name: str) -> tuple[float, float, float]:
        if not isinstance(value, list | tuple) or len(value) != 3:
            raise Mcp3dError("INVALID_POINT", f"{field_name} must be a three-coordinate vector.")
        return tuple(self.scalar(component, field_name) for component in value)  # type: ignore[return-value]


def apply_replace_patch(recipe: dict[str, Any], patch: list[dict[str, Any]]) -> dict[str, Any]:
    """Apply the intentionally narrow JSON Patch dialect exposed by the recipe model."""
    for operation in patch:
        if operation.get("op") != "replace":
            raise Mcp3dError("UNSUPPORTED_PATCH", "Only JSON Patch 'replace' operations are supported.")
        path = operation.get("path")
        if not isinstance(path, str) or not path.startswith("/"):
            raise Mcp3dError("INVALID_PATCH", "Patch paths must start with '/'.")
        target: Any = recipe
        tokens = path[1:].split("/")
        for token in tokens[:-1]:
            target = target[int(token)] if isinstance(target, list) else target.get(token)
            if target is None:
                raise Mcp3dError("INVALID_PATCH", f"Patch path {path!r} does not exist.")
        final = tokens[-1]
        if isinstance(target, list) and final.isdigit() and int(final) < len(target):
            target[int(final)] = operation.get("value")
        elif isinstance(target, dict) and final in target:
            target[final] = operation.get("value")
        else:
            raise Mcp3dError("INVALID_PATCH", f"Patch path {path!r} does not exist.")
    return recipe
