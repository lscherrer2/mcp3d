"""Compiler-level Build123d tests without MCP or revision state."""

from __future__ import annotations

import unittest

from mcp3d.cad import FeatureGraphCompiler


class FeatureCompilerTests(unittest.TestCase):
    def test_shell_and_linear_pattern_build_valid_solids(self) -> None:
        compiler = FeatureGraphCompiler()
        shell = compiler.compile(
            {
                "units": "mm",
                "operations": [
                    {"id": "base", "kind": "box", "length": 60, "width": 40, "height": 20},
                    {"id": "open_top", "kind": "shell", "wall": 2, "openings": {"normal_to": [0, 0, 1], "at_extreme": {"axis": "z", "which": "max"}, "expect": 1}},
                ],
            }
        )
        self.assertTrue(shell.shape.is_valid)
        self.assertEqual(len(shell.shape.solids()), 1)
        patterned = compiler.compile(
            {
                "units": "mm",
                "operations": [
                    {"id": "base", "kind": "box", "length": 50, "width": 40, "height": 10},
                    {"id": "slot_sketch", "kind": "sketch", "plane": "base.top_face", "profile": {"kind": "polygon", "points": [[5, 5], [8, 5], [8, 10], [5, 10]]}},
                    {"id": "slot", "kind": "extrude", "sketch": "slot_sketch", "amount": -12, "operation": "cut"},
                    {"id": "slots", "kind": "linear_pattern", "source": "slot", "count": 3, "step": [15, 0, 0]},
                ],
            }
        )
        self.assertTrue(patterned.shape.is_valid)
        self.assertLess(patterned.shape.volume, 50 * 40 * 10)
