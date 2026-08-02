"""MCP-level contract tests: tools, resources, content, and revision workflow."""

from __future__ import annotations

from base64 import b64decode
import unittest
from unittest.mock import patch

from fastmcp import Client
from mcp3d import mcp
from tests.recipes import FEATURE_GRAPH_RECIPE, TANGENT_RELIEF_RECIPE


class McpContractTests(unittest.IsolatedAsyncioTestCase):
    async def test_model_facing_tool_docs_and_guide_resource(self) -> None:
        async with Client(mcp) as client:
            tools = {tool.name: tool for tool in await client.list_tools()}
            self.assertEqual(
                set(tools),
                {
                    "part.apply",
                    "part.analyze",
                    "part.export",
                    "session.list_parts",
                    "session.preview_parts",
                    "assembly.apply",
                    "assembly.analyze",
                    "assembly.export",
                    "assembly.package",
                    "session.list_assemblies",
                },
            )
            self.assertIn("constraint_graph", tools["part.apply"].description)
            self.assertIn("base_revision", tools["part.apply"].description)
            self.assertIn("RENDER RESPONSE", tools["part.apply"].description)
            self.assertIn("render_sketch", tools["part.analyze"].description)
            self.assertIn("STEP", tools["part.export"].description)
            self.assertIn("independent", tools["session.preview_parts"].description)
            self.assertIn("fastened", tools["assembly.apply"].description)
            self.assertIn("fully_constrained", tools["assembly.analyze"].description)
            self.assertIn("snapshot", tools["assembly.export"].description)
            self.assertIn("portable", tools["assembly.package"].description)
            resources = await client.list_resources()
            self.assertEqual([str(resource.uri) for resource in resources], ["mcp3d://guide"])
            guide = await client.read_resource("mcp3d://guide")
            self.assertIn("Fully constrained rectangle example", guide[0].text)

    async def test_export_failures_are_mcp_errors_with_structured_recovery(self) -> None:
        async with Client(mcp) as client:
            for tool_name, arguments, code in (
                ("part.export", {"part_id": "missing_part"}, "PART_NOT_FOUND"),
                ("assembly.export", {"assembly_id": "missing_assembly"}, "ASSEMBLY_NOT_FOUND"),
                ("assembly.package", {"assembly_id": "missing_assembly"}, "ASSEMBLY_NOT_FOUND"),
            ):
                with self.subTest(tool_name=tool_name):
                    result = await client.call_tool(tool_name, arguments, raise_on_error=False)
                    self.assertTrue(result.is_error)
                    self.assertEqual(result.structured_content["code"], code)

    async def test_create_verify_revise_and_analyze_a_feature_graph_part(self) -> None:
        async with Client(mcp) as client:
            created = await client.call_tool(
                "part.apply",
                {
                    "part_id": "test_plate",
                    "recipe": FEATURE_GRAPH_RECIPE,
                    "requirements": {
                        "assertions": [
                            {"kind": "bounding_box", "expected": [100, 60, 6]},
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
                {"part_id": "invalid_render", "recipe": FEATURE_GRAPH_RECIPE, "render": {"views": ["underside"]}},
                raise_on_error=False,
            )
            self.assertTrue(invalid.is_error)
            self.assertEqual(invalid.structured_content["code"], "UNSUPPORTED_VIEW")

            created = await client.call_tool(
                "part.apply",
                {"part_id": "invalid_render", "recipe": FEATURE_GRAPH_RECIPE, "render": {"views": []}},
            )
            self.assertFalse(created.is_error)
            self.assertEqual(created.structured_content["revision"], 1)
            self.assertEqual(created.structured_content["views"], [])
            self.assertEqual(created.structured_content["renderer"], "none")
            self.assertEqual(len([item for item in created.content if item.type == "image"]), 0)

    async def test_recipe_without_operations_is_rejected(self) -> None:
        async with Client(mcp) as client:
            result = await client.call_tool(
                "part.apply",
                {"part_id": "old_recipe", "recipe": {"units": "mm", "base": {"kind": "box", "length": 1, "width": 1, "height": 1}}},
                raise_on_error=False,
            )
        self.assertTrue(result.is_error)
        self.assertEqual(result.structured_content["code"], "FEATURE_GRAPH_REQUIRED")

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

    async def test_session_can_list_and_preview_independent_parts_without_changing_them(self) -> None:
        plate_recipe = {"operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}]}
        bracket_recipe = {"operations": [{"id": "base", "kind": "box", "length": 6, "width": 4, "height": 3}]}
        with patch.dict("os.environ", {"MCP3D_RENDERER": "technical"}):
            async with Client(mcp) as client:
                for part_id, recipe in (("multi_part_plate", plate_recipe), ("multi_part_bracket", bracket_recipe)):
                    result = await client.call_tool("part.apply", {"part_id": part_id, "recipe": recipe, "render": {"views": []}})
                    self.assertFalse(result.is_error)

                revised_plate = await client.call_tool(
                    "part.apply",
                    {
                        "part_id": "multi_part_plate",
                        "base_revision": 1,
                        "recipe": {"operations": [{"id": "base", "kind": "box", "length": 12, "width": 8, "height": 2}]},
                        "render": {"views": []},
                    },
                )
                self.assertFalse(revised_plate.is_error)
                self.assertEqual(revised_plate.structured_content["revision"], 2)

                listed = await client.call_tool("session.list_parts", {})
                listed_parts = {item["part_id"]: item["head_revision"] for item in listed.structured_content["parts"]}
                self.assertEqual(listed_parts["multi_part_plate"], 2)
                self.assertEqual(listed_parts["multi_part_bracket"], 1)

                preview = await client.call_tool(
                    "session.preview_parts",
                    {
                        "parts": [{"part_id": "multi_part_plate"}, {"part_id": "multi_part_bracket"}],
                        "render": {"views": ["isometric"]},
                    },
                )
                self.assertFalse(preview.is_error)
                self.assertEqual(preview.structured_content["summary"]["part_count"], 2)
                self.assertEqual(preview.structured_content["summary"]["solid_count"], 2)
                self.assertEqual([item["part_id"] for item in preview.structured_content["parts"]], ["multi_part_plate", "multi_part_bracket"])
                self.assertEqual(preview.structured_content["parts"][0]["display_translation_mm"], [0.0, 0.0, 0.0])
                self.assertGreater(preview.structured_content["parts"][1]["display_translation_mm"][0], 12)
                self.assertEqual(len([item for item in preview.content if item.type == "image"]), 1)

                original = await client.call_tool("part.analyze", {"part_id": "multi_part_plate", "requests": [{"kind": "render", "views": []}]})
                self.assertEqual(original.structured_content["summary"]["bounding_box_mm"], [12.0, 8.0, 2.0])

    async def test_assembly_tools_pin_part_revisions_and_expose_solved_evidence(self) -> None:
        plate = {
            "operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}],
            "mate_connectors": [{"id": "top", "on": {"plane": "base.top_face", "point": [5, 4]}}],
        }
        cover = {
            "operations": [{"id": "base", "kind": "box", "length": 6, "width": 4, "height": 1}],
            "mate_connectors": [
                {"id": "bottom", "frame": {"origin": [3, 2, 0], "x_axis": [1, 0, 0], "z_axis": [0, 0, -1]}}
            ],
        }
        async with Client(mcp) as client:
            for part_id, recipe in (("assembly_mcp_plate", plate), ("assembly_mcp_cover", cover)):
                created = await client.call_tool("part.apply", {"part_id": part_id, "recipe": recipe, "render": {"views": []}})
                self.assertFalse(created.is_error)
            assembled = await client.call_tool(
                "assembly.apply",
                {
                    "assembly_id": "assembly_mcp_fixture",
                    "definition": {
                        "units": "mm",
                        "instances": [
                            {"id": "plate", "part_id": "assembly_mcp_plate", "grounded": True},
                            {"id": "cover", "part_id": "assembly_mcp_cover"},
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
                    "requirements": {"assertions": [{"kind": "fully_constrained"}]},
                    "render": {"views": []},
                },
            )
            self.assertFalse(assembled.is_error)
            self.assertEqual(assembled.structured_content["status"], "verified")
            self.assertEqual(assembled.structured_content["definition"]["instances"][0]["revision"], 1)
            self.assertEqual(assembled.structured_content["solver"]["mate_residuals"][0]["status"], "pass")

            listed = await client.call_tool("session.list_assemblies", {})
            self.assertIn("assembly_mcp_fixture", {entry["assembly_id"] for entry in listed.structured_content["assemblies"]})
            inspected = await client.call_tool(
                "assembly.analyze",
                {"assembly_id": "assembly_mcp_fixture", "requests": [{"kind": "render", "views": []}]},
            )
            self.assertFalse(inspected.is_error)
            self.assertEqual(inspected.structured_content["summary"]["solid_count"], 2)
