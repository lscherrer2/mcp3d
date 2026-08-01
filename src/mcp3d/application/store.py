"""Concrete in-memory design history store.

This is intentionally a concrete module, not a speculative repository
interface. A persistence adapter becomes worthwhile only when persistence is
introduced as a real second implementation.
"""

from __future__ import annotations

from ..assembly.domain import Assembly, AssemblyRevision
from ..errors import Mcp3dError
from ..identity import AssemblyId, PartId
from ..models import Part, Revision


class InMemoryPartStore:
    """Own mutable part and assembly histories for one local server process."""

    def __init__(self) -> None:
        self.parts: dict[PartId, Part] = {}
        self.assemblies: dict[AssemblyId, Assembly] = {}

    def get(self, part_id: PartId) -> Part | None:
        return self.parts.get(part_id)

    def save(self, part: Part) -> None:
        self.parts[part.part_id] = part

    def list(self) -> list[Part]:
        """Return the session's part histories in stable identifier order."""
        return [self.parts[part_id] for part_id in sorted(self.parts, key=lambda item: item.value)]

    def get_revision(self, part_id: PartId, revision: int | None) -> Revision:
        """Resolve one immutable part revision for all application workflows."""
        part = self.get(part_id)
        if part is None:
            raise Mcp3dError("PART_NOT_FOUND", f"No part named {part_id.value!r} exists in this server session.")
        if revision is None:
            return part.revisions[-1]
        if revision < 1 or revision > len(part.revisions):
            raise Mcp3dError("REVISION_NOT_FOUND", f"No revision {revision} exists for {part_id.value!r}.")
        return part.revisions[revision - 1]

    def get_assembly(self, assembly_id: AssemblyId) -> Assembly | None:
        """Look up one assembly history without changing it."""
        return self.assemblies.get(assembly_id)

    def save_assembly(self, assembly: Assembly) -> None:
        """Commit an already-solved assembly history."""
        self.assemblies[assembly.assembly_id] = assembly

    def list_assemblies(self) -> list[Assembly]:
        """Return assembly histories in stable identifier order."""
        return [self.assemblies[assembly_id] for assembly_id in sorted(self.assemblies, key=lambda item: item.value)]

    def get_assembly_revision(self, assembly_id: AssemblyId, revision: int | None) -> AssemblyRevision:
        """Resolve an immutable assembly revision."""
        assembly = self.get_assembly(assembly_id)
        if assembly is None:
            raise Mcp3dError("ASSEMBLY_NOT_FOUND", f"No assembly named {assembly_id.value!r} exists in this server session.")
        if revision is None:
            return assembly.revisions[-1]
        if revision < 1 or revision > len(assembly.revisions):
            raise Mcp3dError("REVISION_NOT_FOUND", f"No revision {revision} exists for assembly {assembly_id.value!r}.")
        return assembly.revisions[revision - 1]
