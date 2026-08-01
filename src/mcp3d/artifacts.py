"""Manufacturing artifact export for immutable revisions."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from build123d import Unit, export_step, export_stl

from .errors import Mcp3dError
from .identity import ArtifactLocation, PartId
from .models import Revision


def export_revision(part_id: PartId, revision: Revision, artifact_root: Path, formats: list[str] | None) -> dict[str, Any]:
    """Write requested STEP/STL files and return their exact local paths."""
    location = ArtifactLocation.for_revision(artifact_root, part_id, revision.number)
    artifact_dir = location.directory
    artifact_dir.mkdir(parents=True, exist_ok=True)
    exported: dict[str, str] = {}
    for format_name in formats or ["step"]:
        destination = location.file(format_name.lower())
        if format_name == "step":
            export_step(revision.shape, destination, unit=Unit.MM)
        elif format_name == "stl":
            export_stl(revision.shape, destination)
        else:
            raise Mcp3dError("UNSUPPORTED_EXPORT", f"Supported exports are STEP and STL, not {format_name!r}.")
        exported[format_name] = str(destination)
    return {"status": "ok", "part_id": part_id.value, "revision": revision.number, "artifacts": exported}
