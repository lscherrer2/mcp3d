"""Assembly-specific serialization for neutral export and portable handoff."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Callable

from ..identity import AssemblyId, PartId
from ..immutability import thaw
from ..models import Revision
from .domain import AssemblyRevision


@dataclass(frozen=True)
class AssemblyExportSnapshot:
    """Assembly-owned data needed by neutral artifact writers."""

    revision: int
    shape: Any
    units: str
    definition: dict[str, Any]
    solver: dict[str, Any]


def export_snapshot(revision: AssemblyRevision) -> AssemblyExportSnapshot:
    """Detach the assembly handoff representation from aggregate internals."""
    return AssemblyExportSnapshot(
        revision=revision.number,
        shape=revision.build.shape,
        units=revision.definition.units,
        definition=revision.definition.as_dict(),
        solver=thaw(revision.build.diagnostics),
    )


def package_manifest(
    assembly_id: AssemblyId,
    snapshot_data: AssemblyExportSnapshot,
    snapshot: dict[str, str],
    part_revisions: list[tuple[PartId, Revision]],
    write_part_geometry: Callable[[PartId, Revision], dict[str, str]],
) -> dict[str, Any]:
    """Serialize an assembly handoff without coupling storage to its schema."""
    parts: list[dict[str, Any]] = []
    for part_id, part_revision in part_revisions:
        prefix = f"parts/{part_id.value}/r{part_revision.number}"
        parts.append(
            {
                "part_id": part_id.value,
                "revision": part_revision.number,
                "recipe": f"{prefix}/recipe.json",
                "artifacts": write_part_geometry(part_id, part_revision),
            }
        )
    return {
        "format": "mcp3d-assembly-package/v1",
        "assembly_id": assembly_id.value,
        "revision": snapshot_data.revision,
        "units": snapshot_data.units,
        "definition": snapshot_data.definition,
        "solver": snapshot_data.solver,
        "snapshot": snapshot,
        "parts": parts,
    }
