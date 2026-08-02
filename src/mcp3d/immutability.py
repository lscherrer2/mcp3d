"""Small recursive conversion between stored read-only values and JSON data."""

from __future__ import annotations

from collections.abc import Mapping
from types import MappingProxyType
from typing import Any


def freeze(value: Any) -> Any:
    """Recursively make JSON-like revision metadata read-only."""
    if isinstance(value, Mapping):
        return MappingProxyType({key: freeze(item) for key, item in value.items()})
    if isinstance(value, list | tuple):
        return tuple(freeze(item) for item in value)
    if isinstance(value, set | frozenset):
        return frozenset(freeze(item) for item in value)
    return value


def thaw(value: Any) -> Any:
    """Recursively produce JSON-serializable mutable data for a caller."""
    if isinstance(value, Mapping):
        return {key: thaw(item) for key, item in value.items()}
    if isinstance(value, tuple | list | frozenset | set):
        return [thaw(item) for item in value]
    return value
