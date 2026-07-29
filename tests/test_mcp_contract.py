"""MCP-level contract tests: tools, resources, content, and revision workflow."""

from __future__ import annotations

import unittest
from base64 import b64decode

from fastmcp import Client

from mcp3d import mcp
from tests.recipes import LEGACY_RECIPE, TANGENT_RELIEF_RECIPE


class McpContractTests(unittest.IsolatedAsyncioTestCase):
    async def test_model_facing_tool_docs_and_guide_resource(self) -> None:
        async with Client(mcp) as client:
            tools = {tool.name: tool for tool in await client.list_tools()}
            self.assertEqual(set(tools), {"part.apply", "part.analyze", "part.export"})
            self.assertIn("constraint_graph", tools["part.apply"].description)
            self.assertIn("base_revision", tools["part.apply"].description)
            self.assertIn("RENDER RESPONSE", tools["part.apply"].description)
            self.assertIn("render_sketch", tools["part.analyze"].description)
            self.assertIn("STEP", tools["part.export"].description)
            resources = await client.list_resources()
            self.assertEqual([str(resource.uri) for resource in resources], ["mcp3d://guide"])
            guide = await client.read_resource("mcp3d://guide")
            self.assertIn("Fully constrained rectangle example", guide[0].text)

    async def test_create_verify_revise_and_analyze_a_legacy_part(self) -> None:
        async with Client(mcp) as client:
            created = await client.call_tool(
                "part.apply",
                {
                    "part_id": "test_plate",
                    "recipe": LEGACY_RECIPE,
                    "requirements": {
                        "assertions": [
                            {"kind": "bounding_box", "expected": [100, 60, 6]},
                            {"kind": "hole_count", "expected": 4},
                            {"kind": "solid_valid"},
                        ]
                    },
                },
            )
            self.assertFalse(created.is_error)
            self.assertEqual(created.structured_content["status"], "verified")
            images = [item for item in created.content if item.type == "image"]
            self.assertEqual(len(images), 1)
            self.assertEqual(created.structured_content["views"], ["isometric"])
            self.assertTrue(all(image.mimeType == "image/png" for image in images))
            self.assertTrue(all(b64decode(image.data).startswith(b"\x89PNG\r\n\x1a\n") for image in images))
            revised = await client.call_tool(
                "part.apply",
                {
                    "part_id": "test_plate",
                    "base_revision": 1,
                    "patch": [{"op": "replace", "path": "/parameters/length", "value": 120}],
                    "render": {"views": ["top", "front"]},
                },
            )
            self.assertFalse(revised.is_error)
            self.assertEqual(revised.structured_content["revision"], 2)
            self.assertEqual(revised.structured_content["views"], ["top", "front"])
            self.assertEqual(len([item for item in revised.content if item.type == "image"]), 2)
            analyzed = await client.call_tool(
                "part.analyze",
                {
                    "part_id": "test_plate",
                    "revision": 2,
                    "requests": [
                        {"kind": "render", "views": ["top"]},
                        {"kind": "assert", "criteria": [{"kind": "bounding_box", "expected": [120, 60, 6]}]},
                    ],
                },
            )
            self.assertFalse(analyzed.is_error)
            self.assertEqual(analyzed.structured_content["checks"][0]["status"], "pass")
            self.assertEqual(len([item for item in analyzed.content if item.type == "image"]), 1)

    async def test_apply_can_suppress_images_and_reject_invalid_view_before_committing(self) -> None:
        async with Client(mcp) as client:
            invalid = await client.call_tool(
                "part.apply",
                {"part_id": "invalid_render", "recipe": LEGACY_RECIPE, "render": {"views": ["underside"]}},
                raise_on_error=False,
            )
            self.assertTrue(invalid.is_error)
            self.assertEqual(invalid.structured_content["code"], "UNSUPPORTED_VIEW")

            created = await client.call_tool(
                "part.apply",
                {"part_id": "invalid_render", "recipe": LEGACY_RECIPE, "render": {"views": []}},
            )
            self.assertFalse(created.is_error)
            self.assertEqual(created.structured_content["revision"], 1)
            self.assertEqual(created.structured_content["views"], [])
            self.assertEqual(created.structured_content["renderer"], "none")
            self.assertEqual(len([item for item in created.content if item.type == "image"]), 0)

    async def test_tangent_arc_sketch_workflow_returns_sketch_evidence(self) -> None:
        async with Client(mcp) as client:
            created = await client.call_tool(
                "part.apply",
                {"part_id": "test_tangent_relief", "recipe": TANGENT_RELIEF_RECIPE, "requirements": {"assertions": [{"kind": "solid_valid"}]}},
            )
            self.assertFalse(created.is_error)
            self.assertEqual(created.structured_content["sketches"][0]["status"], "buildable")
            analyzed = await client.call_tool(
                "part.analyze",
                {"part_id": "test_tangent_relief", "requests": [{"kind": "render_sketch", "sketch": "relief_sketch"}]},
            )
            self.assertFalse(analyzed.is_error)
            self.assertIn("sketch:relief_sketch", analyzed.structured_content["views"])
            self.assertEqual(len([item for item in analyzed.content if item.type == "image"]), 5)
