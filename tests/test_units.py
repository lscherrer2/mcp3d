"""Length-unit conversion while retaining millimeters inside the CAD kernel."""

from __future__ import annotations

import unittest

from mcp3d.application import PartService
from mcp3d.cad import FeatureGraphCompiler
from mcp3d.errors import Mcp3dError
from mcp3d.recipe import parse_recipe


class UnitConversionTests(unittest.TestCase):
    def test_inch_recipe_compiles_to_millimeters_and_reports_in_inches(self) -> None:
        recipe = {
            "units": "inches",
            "parameters": {"length": 2},
            "operations": [{"id": "base", "kind": "box", "length": "$length", "width": 1, "height": 0.5}],
        }
        parsed = parse_recipe(recipe)
        self.assertEqual(parsed.units, "in")
        self.assertEqual(parsed.to_dict()["units"], "in")

        built = FeatureGraphCompiler().compile(parsed)
        size = built.shape.bounding_box().size
        self.assertEqual((size.X, size.Y, size.Z), (50.8, 25.4, 12.7))

        result = PartService().apply(
            part_id="inch_box",
            recipe=recipe,
            patch=None,
            base_revision=None,
            requirements={"assertions": [{"kind": "bounding_box", "expected": [2, 1, 0.5]}]},
            render={"views": []},
        )
        self.assertFalse(result.is_error)
        self.assertEqual(result.data["units"], "in")
        self.assertEqual(result.data["summary"]["bounding_box"], [2.0, 1.0, 0.5])
        self.assertEqual(result.data["summary"]["bounding_box_mm"], [50.8, 25.4, 12.7])
        self.assertEqual(result.data["checks"][0]["status"], "pass")

    def test_rejects_unknown_length_unit(self) -> None:
        with self.assertRaisesRegex(Mcp3dError, "Supported length units") as raised:
            parse_recipe({"units": "ft", "operations": [{"id": "base", "kind": "box", "length": 1, "width": 1, "height": 1}]})
        self.assertEqual(raised.exception.code, "UNSUPPORTED_UNITS")

    def test_plane_connector_point_uses_two_local_declared_unit_coordinates(self) -> None:
        built = FeatureGraphCompiler().compile(parse_recipe(
            {
                "units": "cm",
                "operations": [{"id": "base", "kind": "box", "length": 10, "width": 6, "height": 2}],
                "mate_connectors": [{"id": "top", "on": {"plane": "base.top_face", "point": [5, 3]}}],
            }
        ))

        self.assertEqual(built.mate_connectors["top"].origin_mm, (50.0, 30.0, 20.0))

    def test_normalizes_british_spelling_aliases_to_official_units(self) -> None:
        aliases = {"millimetres": "mm", "centimetres": "cm", "metres": "m"}
        for alias, expected in aliases.items():
            with self.subTest(alias=alias):
                recipe = parse_recipe({"units": alias, "operations": [{"id": "base", "kind": "box", "length": 1, "width": 1, "height": 1}]})
                self.assertEqual(recipe.units, expected)
                self.assertEqual(recipe.to_dict()["units"], expected)
