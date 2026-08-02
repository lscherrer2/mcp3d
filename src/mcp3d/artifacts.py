"""Manufacturing exports and portable handoff packages for immutable revisions."""

from __future__ import annotations

import json
import os
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Any
from uuid import uuid4
from zipfile import ZIP_DEFLATED, ZipFile

from build123d import Unit, export_step, export_stl

from .assembly.snapshots import AssemblyExportSnapshot, package_manifest
from .errors import Mcp3dError
from .identity import (
    ArtifactLocation,
    AssemblyArtifactLocation,
    AssemblyId,
    PartId,
)
from .models import Revision


def export_revision(part_id: PartId, revision: Revision, artifact_root: Path, formats: list[str] | None) -> dict[str, Any]:
    """Write requested part STEP/STL files and return their exact local paths."""
    location = ArtifactLocation.for_revision(artifact_root, part_id, revision.number)
    location.directory.mkdir(parents=True, exist_ok=True)
    exported = _write_shape(revision.shape, location, formats)
    return {"status": "ok", "part_id": part_id.value, "revision": revision.number, "artifacts": exported}


def export_assembly_revision(
    assembly_id: AssemblyId,
    snapshot: AssemblyExportSnapshot,
    artifact_root: Path,
    formats: list[str] | None,
) -> dict[str, Any]:
    """Write the solved multi-body assembly geometry as a neutral snapshot."""
    location = AssemblyArtifactLocation.for_revision(artifact_root, assembly_id, snapshot.revision)
    location.directory.mkdir(parents=True, exist_ok=True)
    exported = _write_shape(snapshot.shape, location, formats)
    return {
        "status": "ok",
        "assembly_id": assembly_id.value,
        "revision": snapshot.revision,
        "artifacts": exported,
        "note": "Geometry snapshot: it preserves solved placements, not mate semantics or editable assembly history.",
    }


def package_assembly_revision(
    assembly_id: AssemblyId,
    snapshot: AssemblyExportSnapshot,
    part_revisions: list[tuple[PartId, Revision]],
    artifact_root: Path,
    formats: list[str] | None,
) -> dict[str, Any]:
    """Write a portable assembly ZIP with source recipes and neutral geometry."""
    format_names = _normalized_formats(formats)
    location = AssemblyArtifactLocation.for_revision(artifact_root, assembly_id, snapshot.revision)
    location.directory.mkdir(parents=True, exist_ok=True)
    destination = location.file("zip")
    temporary_destination = _temporary_sibling(destination)
    with TemporaryDirectory(prefix="mcp3d-assembly-package-") as temporary_root:
        root = Path(temporary_root)
        try:
            with ZipFile(temporary_destination, "w", compression=ZIP_DEFLATED) as archive:
                snapshot_artifacts = _archive_shape(archive, snapshot.shape, root, "snapshot/assembly", format_names)

                def write_part_geometry(part_id: PartId, part_revision: Revision) -> dict[str, str]:
                    prefix = f"parts/{part_id.value}/r{part_revision.number}"
                    recipe_path = f"{prefix}/recipe.json"
                    archive.writestr(recipe_path, json.dumps(part_revision.recipe.to_dict(), indent=2, sort_keys=True) + "\n")
                    return _archive_shape(archive, part_revision.shape, root, f"{prefix}/model", format_names)

                manifest = package_manifest(assembly_id, snapshot, snapshot_artifacts, part_revisions, write_part_geometry)
                archive.writestr("assembly.json", json.dumps(manifest, indent=2, sort_keys=True) + "\n")
            os.replace(temporary_destination, destination)
        except Exception:
            temporary_destination.unlink(missing_ok=True)
            raise
    return {
        "status": "ok",
        "assembly_id": assembly_id.value,
        "revision": snapshot.revision,
        "package": str(destination),
        "note": "Portable handoff: assembly definition, pinned part recipes, and neutral geometry snapshots.",
    }


def _normalized_formats(formats: list[str] | None) -> list[str]:
    names = [str(item).lower() for item in (formats or ["step"])]
    unsupported = [name for name in names if name not in {"step", "stl"}]
    if unsupported:
        raise Mcp3dError("UNSUPPORTED_EXPORT", f"Supported exports are STEP and STL, not {unsupported[0]!r}.")
    return list(dict.fromkeys(names))


def _write_shape(shape: Any, location: ArtifactLocation | AssemblyArtifactLocation, formats: list[str] | None) -> dict[str, str]:
    prepared: list[tuple[str, Path, Path]] = []
    try:
        for format_name in _normalized_formats(formats):
            destination = location.file(format_name)
            temporary = _temporary_sibling(destination)
            prepared.append((format_name, temporary, destination))
            _write_shape_file(shape, temporary, format_name)
        for _, temporary, destination in prepared:
            os.replace(temporary, destination)
    except Exception:
        for _, temporary, _ in prepared:
            temporary.unlink(missing_ok=True)
        raise
    exported: dict[str, str] = {}
    for format_name, _, destination in prepared:
        exported[format_name] = str(destination)
    return exported


def _temporary_sibling(destination: Path) -> Path:
    """Choose a same-directory temporary path that preserves the file suffix."""
    return destination.with_name(f".{destination.stem}.{uuid4().hex}{destination.suffix}")


def _archive_shape(archive: ZipFile, shape: Any, root: Path, prefix: str, formats: list[str]) -> dict[str, str]:
    artifacts: dict[str, str] = {}
    for format_name in formats:
        archive_name = f"{prefix}.{format_name}"
        temporary = root / archive_name
        temporary.parent.mkdir(parents=True, exist_ok=True)
        _write_shape_file(shape, temporary, format_name)
        archive.write(temporary, archive_name)
        artifacts[format_name] = archive_name
    return artifacts


def _write_shape_file(shape: Any, destination: Path, format_name: str) -> None:
    if format_name == "step":
        export_step(shape, destination, unit=Unit.MM)
    else:
        export_stl(shape, destination)
