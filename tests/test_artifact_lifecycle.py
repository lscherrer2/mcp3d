"""Keep transient inspection images separate from durable CAD exports."""

from __future__ import annotations

import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch
from zipfile import ZipFile

from build123d import import_step
from mcp3d.application import AssemblyService, PartService
from mcp3d.application.store import InMemoryPartStore
from mcp3d.artifacts import _write_shape
from mcp3d.identity import ArtifactLocation, PartId
from tests.recipes import FEATURE_GRAPH_RECIPE


class ArtifactLifecycleTests(unittest.TestCase):
    def test_fully_constrained_assembly_exports_snapshot_and_portable_package(self) -> None:
        with TemporaryDirectory() as directory:
            artifact_root = Path(directory) / "artifacts"
            store = InMemoryPartStore()
            parts = PartService(artifact_root=artifact_root, store=store)
            assemblies = AssemblyService(artifact_root=artifact_root, store=store)
            for part_id, recipe in (
                (
                    "package_plate",
                    {
                        "operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}],
                        "mate_connectors": [{"id": "top", "on": {"plane": "base.top_face", "point": [5, 4]}}],
                    },
                ),
                (
                    "package_cover",
                    {
                        "operations": [{"id": "base", "kind": "box", "length": 6, "width": 4, "height": 1}],
                        "mate_connectors": [
                            {"id": "bottom", "frame": {"origin": [3, 2, 0], "x_axis": [1, 0, 0], "z_axis": [0, 0, -1]}}
                        ],
                    },
                ),
            ):
                created = parts.apply(part_id=part_id, recipe=recipe, patch=None, base_revision=None, requirements=None, render={"views": []})
                self.assertFalse(created.is_error, created.data)
            created = assemblies.apply(
                assembly_id="package_fixture",
                definition={
                    "instances": [
                        {"id": "plate", "part_id": "package_plate", "grounded": True},
                        {"id": "cover", "part_id": "package_cover"},
                    ],
                    "mates": [
                        {
                            "id": "join",
                            "kind": "fastened",
                            "between": [
                                {"instance": "plate", "connector": "top"},
                                {"instance": "cover", "connector": "bottom"},
                            ],
                        }
                    ],
                },
                changes=None,
                base_revision=None,
                requirements=None,
                render={"views": []},
            )
            self.assertFalse(created.is_error, created.data)

            exported = assemblies.export(assembly_id="package_fixture", revision=None, formats=["step", "stl"])
            export_dir = artifact_root / "assemblies" / "package_fixture" / "r1"
            self.assertEqual(set(exported["artifacts"]), {"step", "stl"})
            self.assertEqual({path.name for path in export_dir.iterdir()}, {"1.step", "1.stl"})
            imported = import_step(exported["artifacts"]["step"])
            self.assertEqual(len(imported.solids()), 2)
            self.assertEqual([round(value, 6) for value in imported.bounding_box().size], [10.0, 8.0, 3.0])

            packaged = assemblies.package(assembly_id="package_fixture", revision=1, formats=["step"])
            with ZipFile(packaged["package"]) as archive:
                names = set(archive.namelist())
                manifest = json.loads(archive.read("assembly.json"))
            self.assertEqual(
                names,
                {
                    "assembly.json",
                    "snapshot/assembly.step",
                    "parts/package_plate/r1/recipe.json",
                    "parts/package_plate/r1/model.step",
                    "parts/package_cover/r1/recipe.json",
                    "parts/package_cover/r1/model.step",
                },
            )
            self.assertEqual(manifest["assembly_id"], "package_fixture")
            self.assertEqual(manifest["definition"]["instances"][0]["revision"], 1)

            original_package = Path(packaged["package"]).read_bytes()
            with patch("mcp3d.artifacts._archive_shape", side_effect=RuntimeError("native export failed")):
                with self.assertRaisesRegex(RuntimeError, "native export failed"):
                    assemblies.package(assembly_id="package_fixture", revision=1, formats=["step"])
            self.assertEqual(Path(packaged["package"]).read_bytes(), original_package)
            self.assertEqual(list(export_dir.glob(".*.zip")), [])

    def test_multi_format_export_preserves_existing_files_when_native_export_fails(self) -> None:
        with TemporaryDirectory() as directory:
            location = ArtifactLocation.for_revision(Path(directory), PartId.parse("atomic_export"), 1)
            location.directory.mkdir(parents=True)
            location.file("step").write_text("previous step")
            location.file("stl").write_text("previous stl")

            def write_or_fail(_shape: object, destination: Path, format_name: str) -> None:
                if format_name == "stl":
                    raise RuntimeError("native export failed")
                destination.write_text("new step")

            with patch("mcp3d.artifacts._write_shape_file", side_effect=write_or_fail):
                with self.assertRaisesRegex(RuntimeError, "native export failed"):
                    _write_shape(object(), location, ["step", "stl"])

            self.assertEqual(location.file("step").read_text(), "previous step")
            self.assertEqual(location.file("stl").read_text(), "previous stl")
            self.assertEqual(list(location.directory.glob(".*")), [])

    def test_export_cannot_escape_the_configured_artifact_root(self) -> None:
        with TemporaryDirectory() as directory:
            service = PartService(artifact_root=Path(directory) / "artifacts")
            result = service.apply(
                part_id="../escaped",
                recipe=FEATURE_GRAPH_RECIPE,
                patch=None,
                base_revision=None,
                requirements=None,
                render={"views": []},
            )
        self.assertTrue(result.is_error)
        self.assertEqual(result.data["code"], "INVALID_PART_ID")

    def test_rendering_is_ephemeral_and_export_is_durable(self) -> None:
        with TemporaryDirectory() as directory, patch.dict("os.environ", {"MCP3D_RENDERER": "technical"}):
            artifact_root = Path(directory) / "artifacts"
            service = PartService(artifact_root=artifact_root)

            created = service.apply(
                part_id="ephemeral_images",
                recipe=FEATURE_GRAPH_RECIPE,
                patch=None,
                base_revision=None,
                requirements=None,
            )
            self.assertEqual(len(created.images), 1)
            self.assertEqual(created.images[0].name, "isometric")
            self.assertTrue(all(image.data.startswith(b"\x89PNG\r\n\x1a\n") for image in created.images))
            self.assertFalse(artifact_root.exists())

            analyzed = service.analyze(part_id="ephemeral_images", revision=1, requests=[{"kind": "render", "views": ["top"]}])
            self.assertEqual(len(analyzed.images), 1)
            self.assertTrue(analyzed.images[0].data.startswith(b"\x89PNG\r\n\x1a\n"))
            self.assertFalse(artifact_root.exists())

            exported = service.export(part_id="ephemeral_images", revision=1, formats=["step", "stl"])
            export_dir = artifact_root / "ephemeral_images" / "r1"
            self.assertEqual(set(exported["artifacts"]), {"step", "stl"})
            self.assertEqual({path.name for path in export_dir.iterdir()}, {"1.step", "1.stl"})
            self.assertTrue(all(Path(path).is_file() and Path(path).stat().st_size > 0 for path in exported["artifacts"].values()))
