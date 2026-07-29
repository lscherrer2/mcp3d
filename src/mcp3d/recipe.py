"""Recipe value resolution and minimal revision patch handling."""

from __future__ import annotations

from typing import Any

from .errors import Mcp3dError


class RecipeValues:
    """Resolve numeric recipe values and local coordinate tuples consistently."""

    def __init__(self, parameters: dict[str, Any]) -> None:
        self.parameters = parameters

    def number(self, value: Any, field_name: str) -> float:
        if isinstance(value, str) and value.startswith("$"):
            value = self.parameters.get(value[1:])
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise Mcp3dError("INVALID_VALUE", f"{field_name} must be a number or a $parameter reference.")
        return float(value)

    def point2(self, value: Any, field_name: str) -> tuple[float, float]:
        if not isinstance(value, list | tuple) or len(value) != 2:
            raise Mcp3dError("INVALID_POINT", f"{field_name} must be a two-coordinate point.")
        return (self.number(value[0], field_name), self.number(value[1], field_name))

    def point3(self, value: Any, field_name: str) -> tuple[float, float, float]:
        if not isinstance(value, list | tuple) or len(value) != 3:
            raise Mcp3dError("INVALID_POINT", f"{field_name} must be a three-coordinate vector.")
        return tuple(self.number(component, field_name) for component in value)  # type: ignore[return-value]


def apply_replace_patch(recipe: dict[str, Any], patch: list[dict[str, Any]]) -> dict[str, Any]:
    """Apply the intentionally narrow JSON Patch dialect exposed by v1."""
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
