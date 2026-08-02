"""Part identity validation and trusted artifact location derivation."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re

from .errors import Mcp3dError


_PART_ID = re.compile(r"[A-Za-z0-9][A-Za-z0-9_-]{0,63}\Z")


@dataclass(frozen=True)
class PartId:
    """A stable external identifier that is also safe to use in local paths."""

    value: str

    @classmethod
    def parse(cls, value: object) -> "PartId":
        if not isinstance(value, str) or not _PART_ID.fullmatch(value):
            raise Mcp3dError(
                "INVALID_PART_ID",
                "part_id must be 1-64 letters, numbers, underscores, or hyphens, starting with a letter or number.",
                ["Use an identifier such as 'mounting_plate' or 'bracket-01'."],
            )
        return cls(value)

    def __str__(self) -> str:
        return self.value


@dataclass(frozen=True)
class AssemblyId:
    """A stable external assembly identifier safe for local paths."""

    value: str

    @classmethod
    def parse(cls, value: object) -> "AssemblyId":
        if not isinstance(value, str) or not _PART_ID.fullmatch(value):
            raise Mcp3dError(
                "INVALID_ASSEMBLY_ID",
                "assembly_id must be 1-64 letters, numbers, underscores, or hyphens, starting with a letter or number.",
                ["Use an identifier such as 'motor_fixture' or 'door-hinge'."],
            )
        return cls(value)

    def __str__(self) -> str:
        return self.value


@dataclass(frozen=True)
class ArtifactLocation:
    """A verified location for one immutable revision's durable files."""

    root: Path
    part_id: PartId
    revision: int

    @classmethod
    def for_revision(cls, root: Path, part_id: PartId, revision: int) -> "ArtifactLocation":
        if revision < 1:
            raise ValueError("revision must be positive")
        trusted_root = root.resolve()
        directory = (trusted_root / part_id.value / f"r{revision}").resolve()
        try:
            directory.relative_to(trusted_root)
        except ValueError as error:  # Defensive: PartId currently makes this unreachable.
            raise Mcp3dError("ARTIFACT_PATH_INVALID", "Artifact location must remain inside the configured artifact root.") from error
        return cls(trusted_root, part_id, revision)

    @property
    def directory(self) -> Path:
        return self.root / self.part_id.value / f"r{self.revision}"

    def file(self, extension: str) -> Path:
        return self.directory / f"{self.revision}.{extension}"


@dataclass(frozen=True)
class AssemblyArtifactLocation:
    """A verified, assembly-specific location for durable assembly exports."""

    root: Path
    assembly_id: AssemblyId
    revision: int

    @classmethod
    def for_revision(cls, root: Path, assembly_id: AssemblyId, revision: int) -> "AssemblyArtifactLocation":
        if revision < 1:
            raise ValueError("revision must be positive")
        trusted_root = root.resolve()
        directory = (trusted_root / "assemblies" / assembly_id.value / f"r{revision}").resolve()
        try:
            directory.relative_to(trusted_root)
        except ValueError as error:  # Defensive: AssemblyId currently makes this unreachable.
            raise Mcp3dError("ARTIFACT_PATH_INVALID", "Assembly artifact location must remain inside the configured artifact root.") from error
        return cls(trusted_root, assembly_id, revision)

    @property
    def directory(self) -> Path:
        return self.root / "assemblies" / self.assembly_id.value / f"r{self.revision}"

    def file(self, extension: str) -> Path:
        return self.directory / f"{self.revision}.{extension}"
