"""Tests for the feature-graph recipe parsing seam."""

from __future__ import annotations

import unittest

from mcp3d.errors import Mcp3dError
from mcp3d.recipe import FeatureGraphRecipe, apply_replace_patch, parse_recipe


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

    def test_malformed_patch_operations_raise_structured_errors(self) -> None:
        recipe = {"parameters": {"size": 10}, "operations": []}
        cases = [
            (["not an operation"], "INVALID_PATCH"),
            ([{"op": "replace", "path": "/parameters/not-an-index/0", "value": 1}], "INVALID_PATCH"),
            ([{"op": "replace", "path": "/operations/nope", "value": 1}], "INVALID_PATCH"),
            ([{"op": "replace", "path": "/parameters/~2size", "value": 1}], "INVALID_PATCH"),
        ]
        for patch, code in cases:
            with self.subTest(patch=patch), self.assertRaises(Mcp3dError) as raised:
                apply_replace_patch(recipe.copy(), patch)  # type: ignore[arg-type]
            self.assertEqual(raised.exception.code, code)
