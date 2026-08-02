"""Dashboard observation tests without a browser or persistent render files."""

from __future__ import annotations

import json
from pathlib import Path
import struct
from tempfile import TemporaryDirectory
from unittest import TestCase
from unittest.mock import patch
from urllib.request import urlopen

from mcp3d.application import AssemblyService, OperationMilestone, PartService
from mcp3d.application.store import InMemoryPartStore
from mcp3d.dashboard import DashboardProjection, DashboardServer
from mcp3d.models import RenderedImage, RenderedMesh
from mcp3d.rendering import render_interactive_mesh
from tests.recipes import FEATURE_GRAPH_RECIPE


class DashboardProjectionTests(TestCase):
    def test_package_deliverable_is_retained_in_dashboard_details(self) -> None:
        projection = DashboardProjection()
        projection.record(OperationMilestone(
            action="package",
            phase="completed",
            part_id=None,
            assembly_id="fixture",
            revision=1,
            status="ok",
            message="Package complete.",
            result={"package": "/tmp/fixture.zip"},
        ))

        self.assertEqual(projection.snapshot()["events"][0]["details"], {"package": "/tmp/fixture.zip"})

    def test_assembly_service_publishes_assembly_activity(self) -> None:
        projection = DashboardProjection()
        store = InMemoryPartStore()
        parts = PartService(store=store)
        for part_id, recipe in (
            (
                "dashboard_plate",
                {
                    "operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}],
                    "mate_connectors": [{"id": "top", "on": {"plane": "base.top_face", "point": [5, 4]}}],
                },
            ),
            (
                "dashboard_cover",
                {
                    "operations": [{"id": "base", "kind": "box", "length": 6, "width": 4, "height": 1}],
                    "mate_connectors": [
                        {"id": "bottom", "frame": {"origin": [3, 2, 0], "x_axis": [1, 0, 0], "z_axis": [0, 0, -1]}}
                    ],
                },
            ),
        ):
            self.assertFalse(parts.apply(part_id=part_id, recipe=recipe, patch=None, base_revision=None, requirements=None, render={"views": []}).is_error)

        result = AssemblyService(store=store, observer=projection).apply(
            assembly_id="dashboard_fixture",
            definition={
                "instances": [
                    {"id": "plate", "part_id": "dashboard_plate", "grounded": True},
                    {"id": "cover", "part_id": "dashboard_cover"},
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

        self.assertFalse(result.is_error)
        events = list(reversed(projection.snapshot()["events"]))
        self.assertEqual([event["phase"] for event in events], ["started", "solving", "revision_committed", "rendering", "completed"])
        self.assertTrue(all(event["assembly_id"] == "dashboard_fixture" for event in events))

    def test_retains_a_bounded_timeline_and_memory_only_images(self) -> None:
        projection = DashboardProjection(max_events=2, max_images=1)
        first = projection.record(OperationMilestone(
            action="apply",
            phase="completed",
            part_id="bracket",
            revision=1,
            status="verified",
            message="First revision complete.",
            images=(RenderedImage("isometric", b"first"),),
        ))
        second = projection.record(OperationMilestone(
            action="analyze",
            phase="completed",
            part_id="bracket",
            revision=1,
            status="verified",
            message="Inspection complete.",
            images=(RenderedImage("top", b"second"),),
        ))
        projection.record(OperationMilestone(action="export", phase="completed", part_id="bracket", revision=1, status="ok", message="Export complete."))

        snapshot = projection.snapshot()
        self.assertEqual([event["action"] for event in snapshot["events"]], ["export", "analyze"])
        self.assertEqual(projection.image(f"{first.identifier}-0"), None)
        self.assertEqual(projection.image(f"{second.identifier}-0"), b"second")
        self.assertEqual(snapshot["latest_render"]["images"][0]["name"], "top")

    def test_http_adapter_serves_static_ui_snapshot_and_png_bytes(self) -> None:
        projection = DashboardProjection(mesh_renderer=lambda _: RenderedMesh(b"mesh-bytes", 3, 1))
        projection.record(OperationMilestone(
            action="apply",
            phase="completed",
            part_id="plate",
            revision=1,
            status="verified",
            message="Ready.",
            images=(RenderedImage("isometric", b"\x89PNG\r\n\x1a\nimage"),),
            shape=object(),
        ))
        dashboard = DashboardServer(projection, port=0).start()
        try:
            with urlopen(f"{dashboard.url}/api/snapshot") as response:
                snapshot = json.loads(response.read())
            image_url = snapshot["latest_render"]["images"][0]["url"]
            mesh_url = snapshot["latest_render"]["mesh"]["url"]
            with urlopen(f"{dashboard.url}{image_url}") as response:
                image = response.read()
                content_type = response.headers["Content-Type"]
            with urlopen(f"{dashboard.url}{mesh_url}") as response:
                mesh = response.read()
                mesh_content_type = response.headers["Content-Type"]
            with urlopen(dashboard.url) as response:
                page = response.read().decode("utf-8")
            self.assertEqual(image, b"\x89PNG\r\n\x1a\nimage")
            self.assertEqual(content_type, "image/png")
            self.assertEqual(mesh, b"mesh-bytes")
            self.assertEqual(mesh_content_type, "application/vnd.mcp3d.mesh")
            self.assertIn("mcp3d", page)
        finally:
            dashboard.close()

    def test_part_service_publishes_lifecycle_without_creating_artifacts(self) -> None:
        projection = DashboardProjection()
        with TemporaryDirectory() as directory, patch.dict("os.environ", {"MCP3D_RENDERER": "technical"}):
            artifact_root = Path(directory) / "artifacts"
            service = PartService(artifact_root=artifact_root, observer=projection)
            result = service.apply(
                part_id="observed_plate",
                recipe=FEATURE_GRAPH_RECIPE,
                patch=None,
                base_revision=None,
                requirements=None,
                render={"views": ["isometric"]},
            )

            phases = [event["phase"] for event in reversed(projection.snapshot()["events"])]
            self.assertEqual(phases, ["started", "compiling", "revision_committed", "rendering", "completed"])
            self.assertEqual(len(result.images), 1)
            self.assertEqual(projection.snapshot()["latest_render"]["images"][0]["name"], "isometric")
            self.assertIsNotNone(projection.snapshot()["latest_render"]["mesh"])
            self.assertEqual(projection.snapshot()["events"][2]["details"]["operations"], [{"id": "base", "kind": "box"}])
            self.assertFalse(artifact_root.exists())

    def test_part_service_publishes_an_interactive_mesh_without_png_views(self) -> None:
        projection = DashboardProjection()
        with patch.dict("os.environ", {"MCP3D_RENDERER": "technical"}):
            result = PartService(observer=projection).apply(
                part_id="mesh_only_plate",
                recipe=FEATURE_GRAPH_RECIPE,
                patch=None,
                base_revision=None,
                requirements=None,
                render={"views": []},
            )
        self.assertEqual(result.images, [])
        latest = projection.snapshot()["latest_render"]
        self.assertEqual(latest["details"]["renderer"], "none")
        self.assertIsNotNone(latest["mesh"])

    def test_mesh_payload_is_compact_and_self_describing(self) -> None:
        from build123d import Box

        mesh = render_interactive_mesh(Box(10, 8, 6))
        vertex_count, triangle_count = struct.unpack("<II", mesh.data[:8])
        self.assertEqual((vertex_count, triangle_count), (mesh.vertex_count, mesh.triangle_count))
        self.assertGreater(mesh.vertex_count, 0)
        self.assertGreater(mesh.triangle_count, 0)
        self.assertEqual(len(mesh.data), 8 + mesh.vertex_count * 12 + mesh.triangle_count * 12)
