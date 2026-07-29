"""A diagnostic-first nonlinear solver for small 2D CAD sketch graphs.

The solver deliberately operates on a narrow, explicit vocabulary.  It solves
coordinates and radii, then lets Build123d materialize the resulting edges.
The input coordinates are also the branch seed: this is local constraint
solving, not a global enumeration of every geometrically valid arrangement.
"""

from __future__ import annotations

from dataclasses import dataclass
from math import atan2, exp, log, pi
from typing import Any, Callable

import numpy as np
from scipy.optimize import least_squares


class ConstraintGraphError(ValueError):
    """The sketch graph is malformed or references unknown geometry."""


@dataclass
class ConstraintSolution:
    points: dict[str, tuple[float, float]]
    radii: dict[str, float]
    diagnostics: dict[str, Any]


class ConstraintGraphSolver:
    """Solve named point, line, and circle geometry with CAD-style constraints."""

    def __init__(
        self,
        graph: dict[str, Any],
        number: Callable[[Any], float],
        *,
        external_lines: dict[str, tuple[tuple[float, float], tuple[float, float]]] | None = None,
    ) -> None:
        self.graph = graph
        self.number = number
        self.external_lines = external_lines or {}
        self.points: dict[str, tuple[float, float]] = {}
        self.lines: dict[str, tuple[str, str]] = {}
        self.circles: dict[str, tuple[str, float]] = {}
        self.constraints = graph.get("constraints", [])
        self._parse_geometry()
        if not isinstance(self.constraints, list):
            raise ConstraintGraphError("constraint_graph.constraints must be a list.")
        self.fixed_points, self.fixed_radii = self._fixed_variables()
        self.point_order = [identifier for identifier in self.points if identifier not in self.fixed_points]
        self.radius_order = [identifier for identifier in self.circles if identifier not in self.fixed_radii]
        self._point_index = {identifier: position * 2 for position, identifier in enumerate(self.point_order)}
        self._radius_index = {
            identifier: len(self.point_order) * 2 + position for position, identifier in enumerate(self.radius_order)
        }
        solver = graph.get("solver", {})
        if solver is not None and not isinstance(solver, dict):
            raise ConstraintGraphError("constraint_graph.solver must be an object when provided.")
        solver = solver or {}
        self.linear_tolerance = self.number(solver.get("linear_tolerance_mm", 1e-5))
        self.angular_tolerance_deg = self.number(solver.get("angular_tolerance_deg", 1e-4))
        self.max_nfev = int(self.number(solver.get("max_nfev", 500)))
        if self.linear_tolerance <= 0 or self.angular_tolerance_deg <= 0 or self.max_nfev < 1:
            raise ConstraintGraphError("Solver tolerances and max_nfev must be positive.")
        self.length_scale = self._characteristic_length()

    def solve(self) -> ConstraintSolution:
        initial = self._initial_vector()
        if self.constraints and len(initial):
            result = least_squares(
                self._normalized_residuals,
                initial,
                method="trf",
                loss="linear",
                max_nfev=self.max_nfev,
                xtol=1e-11,
                ftol=1e-11,
                gtol=1e-11,
            )
            values, jacobian, iterations = result.x, result.jac, result.nfev
        else:
            values, jacobian, iterations = initial, np.empty((len(self._rows(initial)), len(initial))), 0
        rows = self._rows(values)
        reports = self._constraint_reports(rows)
        reports.extend(self._fixed_constraint_reports())
        rank = self._rank(jacobian)
        dof = max(0, len(values) - rank)
        max_normalized = max((item["normalized_residual"] for item in reports), default=0.0)
        status = "conflicting" if max_normalized > 1 else "under_constrained" if dof else "fully_constrained"
        diagnostics = {
            "status": status,
            "dof": dof,
            "variable_count": len(values),
            "equation_rank": rank,
            "max_normalized_residual": round(max_normalized, 9),
            "constraint_residuals": reports,
            "locally_redundant_constraint_ids": self._redundant_ids(jacobian, rows),
            "suspected_conflict_ids": [item["id"] for item in reports if item["status"] == "fail"] if status == "conflicting" else [],
            "branch_selections": {"initial_geometry": "used as the local-solver seed"},
            "iterations": iterations,
        }
        return ConstraintSolution(self._points(values), self._radii(values), diagnostics)

    def _parse_geometry(self) -> None:
        geometry = self.graph.get("geometry")
        if not isinstance(geometry, list) or not geometry:
            raise ConstraintGraphError("constraint_graph.geometry must be a non-empty list.")
        identifiers: set[str] = set()
        for entity in geometry:
            if not isinstance(entity, dict):
                raise ConstraintGraphError("Each constraint-graph geometry item must be an object.")
            identifier, kind = entity.get("id"), entity.get("kind")
            if not isinstance(identifier, str) or not identifier or identifier in identifiers or identifier in self.external_lines:
                raise ConstraintGraphError("Every graph entity needs a unique, non-empty id.")
            identifiers.add(identifier)
            if kind == "point":
                at = entity.get("position", entity.get("at"))
                if not isinstance(at, list | tuple) or len(at) != 2:
                    raise ConstraintGraphError(f"Point {identifier!r} requires an initial [x, y] position.")
                self.points[identifier] = (self.number(at[0]), self.number(at[1]))
            elif kind == "line":
                start, end = entity.get("start"), entity.get("end")
                if start not in self.points or end not in self.points:
                    raise ConstraintGraphError(f"Line {identifier!r} must reference previously-defined point ids.")
                if start == end:
                    raise ConstraintGraphError(f"Line {identifier!r} needs distinct start and end points.")
                self.lines[identifier] = (start, end)
            elif kind == "circle":
                center, radius = entity.get("center"), self.number(entity.get("radius"))
                if center not in self.points or radius <= 0:
                    raise ConstraintGraphError(f"Circle {identifier!r} requires an existing center point and positive radius.")
                self.circles[identifier] = (center, radius)
            else:
                raise ConstraintGraphError(f"Unsupported constraint-graph geometry kind {kind!r}.")

    def _fixed_variables(self) -> tuple[set[str], set[str]]:
        points: set[str] = set()
        radii: set[str] = set()
        for constraint in self.constraints:
            if not isinstance(constraint, dict) or constraint.get("kind") != "fixed":
                continue
            target = constraint.get("target", constraint.get("entity"))
            if target in self.points:
                points.add(target)
            elif target in self.lines:
                start, end = self.lines[target]
                points.update((start, end))
            elif target in self.circles:
                center, _ = self.circles[target]
                points.add(center)
                radii.add(target)
            else:
                raise ConstraintGraphError(f"Fixed constraint references unknown entity {target!r}.")
        return points, radii

    def _initial_vector(self) -> np.ndarray:
        values = [coordinate for identifier in self.point_order for coordinate in self.points[identifier]]
        values.extend(log(self.circles[identifier][1]) for identifier in self.radius_order)
        return np.asarray(values, dtype=float)

    def _points(self, values: np.ndarray) -> dict[str, tuple[float, float]]:
        result = dict(self.points)
        for identifier, index in self._point_index.items():
            result[identifier] = (float(values[index]), float(values[index + 1]))
        return result

    def _radii(self, values: np.ndarray) -> dict[str, float]:
        result = {identifier: radius for identifier, (_, radius) in self.circles.items()}
        for identifier, index in self._radius_index.items():
            result[identifier] = exp(float(values[index]))
        return result

    def _normalized_residuals(self, values: np.ndarray) -> np.ndarray:
        return np.asarray([row[1] for row in self._rows(values)], dtype=float)

    def _rows(self, values: np.ndarray) -> list[tuple[str, float, float, str, float]]:
        """Return (constraint id, scaled residual, physical residual, unit, tolerance)."""
        points, radii = self._points(values), self._radii(values)
        rows: list[tuple[str, float, float, str, float]] = []
        for position, constraint in enumerate(self.constraints):
            if not isinstance(constraint, dict):
                raise ConstraintGraphError("Each constraint must be an object.")
            identifier = constraint.get("id", f"constraint_{position + 1}")
            if not isinstance(identifier, str) or not identifier:
                raise ConstraintGraphError("Constraint ids must be non-empty strings when specified.")
            kind = constraint.get("kind")
            if kind == "fixed":
                continue
            for physical, unit in self._evaluate(kind, constraint, points, radii):
                scale = self.length_scale if unit == "mm" else 1.0
                tolerance = self.linear_tolerance if unit == "mm" else self.angular_tolerance_deg if unit == "deg" else 1e-6
                converted = physical * 180 / pi if unit == "deg" else physical
                rows.append((identifier, physical / scale, converted, unit, tolerance))
        return rows

    def _evaluate(
        self,
        kind: str,
        constraint: dict[str, Any],
        points: dict[str, tuple[float, float]],
        radii: dict[str, float],
    ) -> list[tuple[float, str]]:
        if kind == "coincident":
            first, second = self._point_pair(constraint, points, kind)
            return [(float(first[0] - second[0]), "mm"), (float(first[1] - second[1]), "mm")]
        if kind in {"horizontal", "vertical"}:
            start, end = self._line(self._target(constraint, kind), points)
            return [(float((end - start)[1 if kind == "horizontal" else 0]), "mm")]
        if kind in {"parallel", "perpendicular", "angle"}:
            first, second = self._line_pair(constraint, points, kind)
            a, b = first[1] - first[0], second[1] - second[0]
            lengths = (np.linalg.norm(a), np.linalg.norm(b))
            if min(lengths) < 1e-9:
                return [(1e6, "mm")]
            cross = float(np.cross(a, b) / (lengths[0] * lengths[1]))
            dot = float(np.dot(a, b) / (lengths[0] * lengths[1]))
            if kind == "parallel":
                return [(cross, "ratio")]
            if kind == "perpendicular":
                return [(dot, "ratio")]
            desired = self.number(constraint.get("value_deg", constraint.get("value"))) * pi / 180
            if constraint.get("side") == "cw":
                desired = -desired
            return [(self._wrap_angle(atan2(cross, dot) - desired), "deg")]
        if kind == "distance":
            first, second = self._point_pair(constraint, points, kind)
            return [(float(np.linalg.norm(first - second) - self.number(constraint.get("value"))), "mm")]
        if kind == "equal_length":
            first, second = self._line_pair(constraint, points, kind)
            return [(float(np.linalg.norm(first[1] - first[0]) - np.linalg.norm(second[1] - second[0])), "mm")]
        if kind in {"radius", "diameter"}:
            target = self._target(constraint, kind)
            radius = self._circle(target, points, radii)[1]
            value = self.number(constraint.get("value")) / (2 if kind == "diameter" else 1)
            return [(radius - value, "mm")]
        if kind == "equal_radius":
            first, second = self._circle_pair(constraint, points, radii, kind)
            return [(first[1] - second[1], "mm")]
        if kind == "midpoint":
            point_id, line_id = constraint.get("point"), constraint.get("line")
            point = self._point(point_id, points)
            start, end = self._line(line_id, points)
            delta = point - (start + end) / 2
            return [(float(delta[0]), "mm"), (float(delta[1]), "mm")]
        if kind in {"tangent_line_circle", "tangent"}:
            line_id = constraint.get("line")
            circle_id = constraint.get("circle")
            start, end = self._line(line_id, points)
            center, radius = self._circle(circle_id, points, radii)
            direction = end - start
            length = np.linalg.norm(direction)
            if length < 1e-9:
                return [(1e6, "mm")]
            signed_distance = float(np.cross(direction, center - start) / length)
            side = constraint.get("side", "positive")
            if side in {"positive", "left"}:
                return [(signed_distance - radius, "mm")]
            if side in {"negative", "right"}:
                return [(signed_distance + radius, "mm")]
            raise ConstraintGraphError("A tangent_line_circle constraint needs side 'positive' or 'negative'.")
        raise ConstraintGraphError(f"Unsupported constraint kind {kind!r}.")

    def _target(self, constraint: dict[str, Any], kind: str) -> str:
        target = constraint.get("target", constraint.get("entity"))
        if target is None:
            entities = constraint.get("entities", [])
            target = entities[0] if isinstance(entities, list) and entities else None
        if not isinstance(target, str):
            raise ConstraintGraphError(f"Constraint {kind!r} requires a target entity.")
        return target

    def _point_pair(self, constraint: dict[str, Any], points: dict[str, tuple[float, float]], kind: str) -> tuple[np.ndarray, np.ndarray]:
        first, second = constraint.get("a"), constraint.get("b")
        if first is None:
            entities = constraint.get("entities", [])
            first, second = (entities + [None, None])[:2] if isinstance(entities, list) else (None, None)
        return self._point(first, points), self._point(second, points)

    def _line_pair(self, constraint: dict[str, Any], points: dict[str, tuple[float, float]], kind: str) -> tuple[tuple[np.ndarray, np.ndarray], tuple[np.ndarray, np.ndarray]]:
        first, second = constraint.get("a"), constraint.get("b")
        if first is None:
            entities = constraint.get("entities", [])
            first, second = (entities + [None, None])[:2] if isinstance(entities, list) else (None, None)
        return self._line(first, points), self._line(second, points)

    def _circle_pair(self, constraint: dict[str, Any], points: dict[str, tuple[float, float]], radii: dict[str, float], kind: str) -> tuple[tuple[np.ndarray, float], tuple[np.ndarray, float]]:
        first, second = constraint.get("a"), constraint.get("b")
        if first is None:
            entities = constraint.get("entities", [])
            first, second = (entities + [None, None])[:2] if isinstance(entities, list) else (None, None)
        return self._circle(first, points, radii), self._circle(second, points, radii)

    def _point(self, reference: Any, points: dict[str, tuple[float, float]]) -> np.ndarray:
        if not isinstance(reference, str):
            raise ConstraintGraphError("Point references must be strings.")
        if reference in points:
            return np.asarray(points[reference])
        entity, separator, selector = reference.partition(".")
        if separator and entity in self.lines and selector in {"start", "end"}:
            return np.asarray(points[self.lines[entity][0 if selector == "start" else 1]])
        if separator and entity in self.circles and selector == "center":
            return np.asarray(points[self.circles[entity][0]])
        raise ConstraintGraphError(f"Unknown point reference {reference!r}.")

    def _line(self, reference: Any, points: dict[str, tuple[float, float]]) -> tuple[np.ndarray, np.ndarray]:
        if not isinstance(reference, str):
            raise ConstraintGraphError("Line references must be strings.")
        if reference in self.lines:
            start, end = self.lines[reference]
            return np.asarray(points[start]), np.asarray(points[end])
        if reference in self.external_lines:
            start, end = self.external_lines[reference]
            return np.asarray(start), np.asarray(end)
        raise ConstraintGraphError(f"Unknown line reference {reference!r}.")

    def _circle(self, reference: Any, points: dict[str, tuple[float, float]], radii: dict[str, float]) -> tuple[np.ndarray, float]:
        if not isinstance(reference, str) or reference not in self.circles:
            raise ConstraintGraphError(f"Unknown circle reference {reference!r}.")
        center, _ = self.circles[reference]
        return np.asarray(points[center]), radii[reference]

    def _characteristic_length(self) -> float:
        lengths = []
        for start, end in self.lines.values():
            lengths.append(float(np.linalg.norm(np.asarray(self.points[end]) - np.asarray(self.points[start]))))
        lengths.extend(radius for _, radius in self.circles.values())
        for constraint in self.constraints:
            if isinstance(constraint, dict) and constraint.get("kind") in {"distance", "radius", "diameter"}:
                value = constraint.get("value")
                if isinstance(value, (int, float)) and value > 0:
                    lengths.append(float(value))
        return max(float(np.median(lengths)) if lengths else 1.0, 1.0)

    @staticmethod
    def _rank(jacobian: np.ndarray) -> int:
        return int(np.linalg.matrix_rank(jacobian)) if jacobian.size else 0

    @staticmethod
    def _wrap_angle(value: float) -> float:
        return (value + pi) % (2 * pi) - pi

    @staticmethod
    def _constraint_reports(rows: list[tuple[str, float, float, str, float]]) -> list[dict[str, Any]]:
        grouped: dict[str, tuple[float, float, str, float]] = {}
        for identifier, _, physical, unit, tolerance in rows:
            normalized = abs(physical) / tolerance
            previous = grouped.get(identifier)
            if previous is None or normalized > previous[0]:
                grouped[identifier] = (normalized, abs(physical), unit, tolerance)
        return [
            {
                "id": identifier,
                "status": "pass" if normalized <= 1 else "fail",
                "normalized_residual": round(normalized, 9),
                "residual_mm_or_deg": round(physical, 9),
                "unit": unit,
                "tolerance": tolerance,
            }
            for identifier, (normalized, physical, unit, tolerance) in grouped.items()
        ]

    def _fixed_constraint_reports(self) -> list[dict[str, Any]]:
        reports = []
        for position, constraint in enumerate(self.constraints):
            if isinstance(constraint, dict) and constraint.get("kind") == "fixed":
                reports.append(
                    {
                        "id": constraint.get("id", f"constraint_{position + 1}"),
                        "status": "pass",
                        "normalized_residual": 0.0,
                        "residual_mm_or_deg": 0.0,
                        "unit": "mm",
                        "tolerance": self.linear_tolerance,
                    }
                )
        return reports

    def _redundant_ids(self, jacobian: np.ndarray, rows: list[tuple[str, float, float, str, float]]) -> list[str]:
        if not jacobian.size:
            return []
        full_rank = self._rank(jacobian)
        result = []
        for identifier in dict.fromkeys(row[0] for row in rows):
            keep = [index for index, row in enumerate(rows) if row[0] != identifier]
            reduced = jacobian[keep, :] if keep else np.empty((0, jacobian.shape[1]))
            if self._rank(reduced) == full_rank:
                result.append(identifier)
        return result
