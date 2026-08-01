"""Tests for the feature-graph recipe parsing seam."""

from __future__ import annotations

import unittest

from mcp3d.errors import Mcp3dError
from mcp3d.recipe import FeatureGraphRecipe, parse_recipe


class RecipeParserTests(unittest.TestCase):
    def test_parses_and_round_trips_a_feature_graph(self) -> None:
        raw = {
            "units": "mm",
            "parameters": {"length": 10},
            "operations": [{"id": "base", "kind": "box", "length": "$length", "width": 8, "height": 6}],
        }
        recipe = parse_recipe(raw)

        self.assertIsInstance(recipe, FeatureGraphRecipe)
        self.assertEqual(recipe.operations[0].identifier, "base")
        self.assertEqual(recipe.operations[0].kind, "box")
        self.assertEqual(recipe.to_dict(), {**raw, "parameters": {"length": 10.0}})

    def test_rejects_recipes_without_operations_duplicate_ids_and_unknown_parameters(self) -> None:
        cases = [
            ({"base": {"kind": "box"}}, "FEATURE_GRAPH_REQUIRED"),
            (
                {"operations": [{"id": "base", "kind": "box", "length": 1, "width": 1, "height": 1}, {"id": "base", "kind": "sketch"}]},
                "INVALID_FEATURE_ID",
            ),
            (
                {"operations": [{"id": "base", "kind": "box", "length": "$missing", "width": 1, "height": 1}]},
                "PARAMETER_NOT_FOUND",
            ),
        ]
        for raw, code in cases:
            with self.subTest(code=code), self.assertRaisesRegex(Mcp3dError, ".*") as raised:
                parse_recipe(raw)
            self.assertEqual(raised.exception.code, code)
