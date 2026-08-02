"""Concrete in-memory design history store.

This is intentionally a concrete module, not a speculative repository
interface. A persistence adapter becomes worthwhile only when persistence is
introduced as a real second implementation.
"""

from __future__ import annotations

from dataclasses import replace
from threading import RLock

from ..assembly.domain import Assembly, AssemblyRevision
from ..errors import Mcp3dError
from ..identity import AssemblyId, PartId
from ..models import Part, Revision


class InMemoryPartStore:
    """Own mutable part and assembly histories for one local server process."""

    def __init__(self) -> None:
        self.parts: dict[PartId, Part] = {}
        self.assemblies: dict[AssemblyId, Assembly] = {}
        self._lock = RLock()

    def get(self, part_id: PartId) -> Part | None:
        with self._lock:
            return self.parts.get(part_id)

    def save(self, part: Part) -> None:
        with self._lock:
            self.parts[part.part_id] = part

    def list(self) -> list[Part]:
        """Return the session's part histories in stable identifier order."""
        with self._lock:
            return [self.parts[part_id] for part_id in sorted(self.parts, key=lambda item: item.value)]

    def get_revision(self, part_id: PartId, revision: int | None) -> Revision:
        """Resolve one immutable part revision for all application workflows."""
        with self._lock:
            part = self.parts.get(part_id)
            if part is None:
                raise Mcp3dError("PART_NOT_FOUND", f"No part named {part_id.value!r} exists in this server session.")
            if revision is None:
                return part.revisions[-1]
            if revision < 1 or revision > len(part.revisions):
                raise Mcp3dError("REVISION_NOT_FOUND", f"No revision {revision} exists for {part_id.value!r}.")
            return part.revisions[revision - 1]

    def commit_part_revision(self, part_id: PartId, base_revision: int | None, revision: Revision) -> Revision:
        """Atomically append only if the caller's revision head is still current."""
        with self._lock:
            part = self.parts.get(part_id)
            current = part.revisions[-1].number if part is not None else None
            if current != base_revision:
                if current is None:
                    raise Mcp3dError("REVISION_CONFLICT", "A new part cannot specify base_revision.")
                raise Mcp3dError("REVISION_CONFLICT", f"Expected base_revision {current}; received {base_revision!r}.")
            if part is None:
                part = Part(part_id)
                self.parts[part_id] = part
            committed = replace(revision, number=current + 1 if current is not None else 1)
            part.revisions.append(committed)
            return committed

    def get_assembly(self, assembly_id: AssemblyId) -> Assembly | None:
        """Look up one assembly history without changing it."""
        with self._lock:
            return self.assemblies.get(assembly_id)

    def save_assembly(self, assembly: Assembly) -> None:
        """Commit an already-solved assembly history."""
        with self._lock:
            self.assemblies[assembly.assembly_id] = assembly

    def list_assemblies(self) -> list[Assembly]:
        """Return assembly histories in stable identifier order."""
        with self._lock:
            return [self.assemblies[assembly_id] for assembly_id in sorted(self.assemblies, key=lambda item: item.value)]

    def get_assembly_revision(self, assembly_id: AssemblyId, revision: int | None) -> AssemblyRevision:
        """Resolve an immutable assembly revision."""
        with self._lock:
            assembly = self.assemblies.get(assembly_id)
            if assembly is None:
                raise Mcp3dError("ASSEMBLY_NOT_FOUND", f"No assembly named {assembly_id.value!r} exists in this server session.")
            if revision is None:
                return assembly.revisions[-1]
            if revision < 1 or revision > len(assembly.revisions):
                raise Mcp3dError("REVISION_NOT_FOUND", f"No revision {revision} exists for assembly {assembly_id.value!r}.")
            return assembly.revisions[revision - 1]

    def commit_assembly_revision(self, assembly_id: AssemblyId, base_revision: int | None, revision: AssemblyRevision) -> AssemblyRevision:
        """Atomically append only if the caller's assembly head is still current."""
        with self._lock:
            assembly = self.assemblies.get(assembly_id)
            current = assembly.revisions[-1].number if assembly is not None else None
            if current != base_revision:
                if current is None:
                    raise Mcp3dError("REVISION_CONFLICT", "A new assembly cannot specify base_revision.")
                raise Mcp3dError("REVISION_CONFLICT", f"Expected base_revision {current}; received {base_revision!r}.")
            if assembly is None:
                assembly = Assembly(assembly_id)
                self.assemblies[assembly_id] = assembly
            committed = replace(revision, number=current + 1 if current is not None else 1)
            assembly.revisions.append(committed)
            return committed
