"""Immutable assembly definitions and solved revision state."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from ..identity import AssemblyId, PartId
from ..recipe import length_scale_mm
from .frames import Frame


@dataclass(frozen=True)
class PartRevisionRef:
    """A concrete, pinned reference to a successful part revision."""

    part_id: PartId
    revision: int

    def as_dict(self) -> dict[str, Any]:
        return {"part_id": self.part_id.value, "revision": self.revision}


@dataclass(frozen=True)
class AssemblyInstance:
    """One named occurrence of a pinned part revision in an assembly."""

    identifier: str
    part: PartRevisionRef
    grounded: bool = False
    initial_pose: Frame | None = None

    def as_dict(self, length_scale_mm: float = 1.0) -> dict[str, Any]:
        result = {"id": self.identifier, **self.part.as_dict()}
        if self.grounded:
            result["grounded"] = True
        if self.initial_pose is not None:
            # Initial placement deliberately supports translation only in the
            # first assembly slice. Keep the persisted form round-trippable.
            result["initial_pose"] = {
                "translation": [value / length_scale_mm for value in self.initial_pose.origin_mm]
            }
        return result


@dataclass(frozen=True)
class MateEndpoint:
    """An assembly-owned reference to a named connector on an instance."""

    instance: str
    connector: str

    def as_dict(self) -> dict[str, str]:
        return {"instance": self.instance, "connector": self.connector}


@dataclass(frozen=True)
class FastenedMate:
    """A zero-degree-of-freedom relationship between two connector frames."""

    identifier: str
    first: MateEndpoint
    second: MateEndpoint
    orientation: str = "opposed"

    def as_dict(self) -> dict[str, Any]:
        return {
            "id": self.identifier,
            "kind": "fastened",
            "between": [self.first.as_dict(), self.second.as_dict()],
            "orientation": self.orientation,
        }


@dataclass(frozen=True)
class AssemblyDefinition:
    """Declarative assembly state before mate solving."""

    units: str
    instances: tuple[AssemblyInstance, ...]
    mates: tuple[FastenedMate, ...]

    def as_dict(self) -> dict[str, Any]:
        scale = length_scale_mm(self.units)
        return {
            "units": self.units,
            "instances": [instance.as_dict(scale) for instance in self.instances],
            "mates": [mate.as_dict() for mate in self.mates],
        }


@dataclass
class AssemblyBuildResult:
    """Solved assembly evidence retained with an immutable assembly revision."""

    shape: Any
    poses: dict[str, Frame]
    diagnostics: dict[str, Any]


@dataclass
class AssemblyRevision:
    """One successfully solved, immutable assembly revision."""

    number: int
    definition: AssemblyDefinition
    requirements: dict[str, Any]
    build: AssemblyBuildResult


@dataclass
class Assembly:
    """In-memory history for one named assembly."""

    assembly_id: AssemblyId
    revisions: list[AssemblyRevision] = field(default_factory=list)
