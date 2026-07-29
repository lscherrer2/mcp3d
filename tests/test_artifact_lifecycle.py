"""Keep transient inspection images separate from durable CAD exports."""

from __future__ import annotations

from pathlib import Path
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch

from mcp3d.application import PartService
from tests.recipes import LEGACY_RECIPE


class ArtifactLifecycleTests(unittest.TestCase):
    def test_rendering_is_ephemeral_and_export_is_durable(self) -> None:
        with TemporaryDirectory() as directory, patch.dict("os.environ", {"MCP3D_RENDERER": "technical"}):
            artifact_root = Path(directory) / "artifacts"
            service = PartService(artifact_root=artifact_root)

            created = service.apply(
                part_id="ephemeral_images",
                recipe=LEGACY_RECIPE,
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
