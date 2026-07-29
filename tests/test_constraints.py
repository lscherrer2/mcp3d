"""Unit tests for local 2D constraint diagnostics."""

from __future__ import annotations

import unittest

from mcp3d.constraints import ConstraintGraphSolver


class ConstraintGraphTests(unittest.TestCase):
    def test_reports_fully_constrained_solution_and_conflicting_dimension(self) -> None:
        graph = {
            "geometry": [
                {"id": "p0", "kind": "point", "position": [0, 0]},
                {"id": "p1", "kind": "point", "position": [43, 2]},
                {"id": "p2", "kind": "point", "position": [42, 18]},
                {"id": "p3", "kind": "point", "position": [-1, 17]},
                {"id": "bottom", "kind": "line", "start": "p0", "end": "p1"},
                {"id": "right", "kind": "line", "start": "p1", "end": "p2"},
                {"id": "top", "kind": "line", "start": "p2", "end": "p3"},
                {"id": "left", "kind": "line", "start": "p3", "end": "p0"},
            ],
            "constraints": [
                {"id": "origin", "kind": "fixed", "target": "p0"},
                {"id": "bottom_horizontal", "kind": "horizontal", "target": "bottom"},
                {"id": "right_vertical", "kind": "vertical", "target": "right"},
                {"id": "top_horizontal", "kind": "horizontal", "target": "top"},
                {"id": "left_vertical", "kind": "vertical", "target": "left"},
                {"id": "width", "kind": "distance", "a": "p0", "b": "p1", "value": 40},
                {"id": "height", "kind": "distance", "a": "p1", "b": "p2", "value": 20},
            ],
        }
        solved = ConstraintGraphSolver(graph, float).solve()
        self.assertEqual(solved.diagnostics["status"], "fully_constrained")
        self.assertEqual(solved.diagnostics["dof"], 0)
        self.assertAlmostEqual(solved.points["p2"][0], 40, places=4)
        self.assertAlmostEqual(solved.points["p2"][1], 20, places=4)
        conflict = {
            "geometry": [
                {"id": "a", "kind": "point", "position": [0, 0]},
                {"id": "b", "kind": "point", "position": [10, 0]},
                {"id": "line", "kind": "line", "start": "a", "end": "b"},
            ],
            "constraints": [
                {"id": "fix_a", "kind": "fixed", "target": "a"},
                {"id": "fix_b", "kind": "fixed", "target": "b"},
                {"id": "wrong_length", "kind": "distance", "a": "a", "b": "b", "value": 20},
            ],
        }
        diagnostics = ConstraintGraphSolver(conflict, float).solve().diagnostics
        self.assertEqual(diagnostics["status"], "conflicting")
        self.assertEqual(diagnostics["suspected_conflict_ids"], ["wrong_length"])
