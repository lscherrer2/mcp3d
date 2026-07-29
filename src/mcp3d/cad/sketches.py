"""Sketch construction, profile closure, and constraint-solver integration."""

from __future__ import annotations

from typing import Any

from build123d import BuildLine, BuildSketch, ConstrainedArcs, Edge, Face, Plane, Polyline, Sagitta, Wire, make_face

from ..constraints import ConstraintGraphError, ConstraintGraphSolver
from ..errors import Mcp3dError
from ..models import SketchRecord
from ..recipe import RecipeValues


class SketchCompiler:
    """Compile named local-2D sketches into reusable Build123d profiles."""

    def __init__(self, values: RecipeValues) -> None:
        self.values = values

    def compile(self, operation: dict[str, Any], planes: dict[str, Any], references: dict[str, Any]) -> SketchRecord:
        identifier = operation["id"]
        plane_id = operation.get("plane", "XY")
        plane = Plane.XY if plane_id == "XY" else planes.get(plane_id)
        if plane is None:
            raise Mcp3dError("REFERENCE_NOT_FOUND", f"Sketch plane {plane_id!r} does not exist.")
        external = self._external_geometry(operation, plane, references, identifier)
        entities: dict[str, Any] = {}
        points: dict[str, tuple[float, float]] = {}
        solver_report: dict[str, Any] | None = None
        graph = operation.get("constraint_graph")
        if graph is not None:
            entities, points, solver_report = self._constraint_geometry(operation, graph, external, identifier)
        self._direct_geometry(operation, entities, external, identifier)
        profile = self._build_profile(operation.get("profile"), plane, entities, identifier)
        return SketchRecord(
            identifier,
            plane,
            entities,
            external,
            profile,
            points,
            solver_report,
            self._dimension_labels(graph, identifier),
        )

    def _external_geometry(self, operation: dict[str, Any], plane: Any, references: dict[str, Any], sketch_id: str) -> dict[str, Any]:
        external: dict[str, Any] = {}
        for item in operation.get("external", []):
            external_id, source = item.get("id"), item.get("source")
            if not isinstance(external_id, str) or source not in references:
                raise Mcp3dError("REFERENCE_NOT_FOUND", f"Sketch {sketch_id!r} has an invalid external reference.")
            local = plane.to_local_coords(references[source])
            vertices = local.vertices()
            if len(vertices) != 2:
                raise Mcp3dError("UNSUPPORTED_PROJECTION", f"Only straight external edges are supported ({source!r}).")
            start, end = vertices
            external[external_id] = Edge.make_line((start.X, start.Y), (end.X, end.Y))
        return external

    def _constraint_geometry(
        self,
        operation: dict[str, Any],
        graph: Any,
        external: dict[str, Any],
        sketch_id: str,
    ) -> tuple[dict[str, Any], dict[str, tuple[float, float]], dict[str, Any]]:
        if not isinstance(graph, dict):
            raise Mcp3dError("INVALID_CONSTRAINT_GRAPH", f"Sketch {sketch_id!r}.constraint_graph must be an object.")
        external_lines = {}
        for external_id, edge in external.items():
            vertices = edge.vertices()
            external_lines[external_id] = ((vertices[0].X, vertices[0].Y), (vertices[-1].X, vertices[-1].Y))
        try:
            solver = ConstraintGraphSolver(
                graph,
                lambda value: self.values.number(value, f"{sketch_id}.constraint_graph"),
                external_lines=external_lines,
            )
            solution = solver.solve()
        except ConstraintGraphError as error:
            raise Mcp3dError("INVALID_CONSTRAINT_GRAPH", f"Sketch {sketch_id!r}: {error}") from error
        diagnostics = solution.diagnostics
        if diagnostics["status"] == "conflicting":
            raise Mcp3dError(
                "SKETCH_UNSATISFIED",
                f"Sketch {sketch_id!r} has conflicting constraints.",
                ["Inspect render_sketch evidence and relax or correct the listed constraints."],
                {"sketch": sketch_id, "solver": diagnostics},
            )
        if operation.get("require_fully_constrained", False) and diagnostics["status"] != "fully_constrained":
            raise Mcp3dError(
                "UNDER_CONSTRAINED_SKETCH",
                f"Sketch {sketch_id!r} has {diagnostics['dof']} local degree(s) of freedom.",
                ["Add dimensions, relations, or fixed references before using this profile as manufacturing geometry."],
                {"sketch": sketch_id, "solver": diagnostics},
            )
        entities: dict[str, Any] = {}
        for item in graph.get("geometry", []):
            entity_id, kind = item.get("id"), item.get("kind")
            if kind == "line":
                start_id, end_id = solver.lines[entity_id]
                entities[entity_id] = Edge.make_line(solution.points[start_id], solution.points[end_id])
            elif kind == "circle":
                center_id, _ = solver.circles[entity_id]
                center = solution.points[center_id]
                entities[entity_id] = Edge.make_circle(solution.radii[entity_id], Plane((center[0], center[1], 0)))
        return entities, solution.points, diagnostics

    def _direct_geometry(self, operation: dict[str, Any], entities: dict[str, Any], external: dict[str, Any], sketch_id: str) -> None:
        for item in operation.get("geometry", []):
            entity_id, kind = item.get("id"), item.get("kind")
            if not isinstance(entity_id, str) or not entity_id or entity_id in entities or entity_id in external:
                raise Mcp3dError("INVALID_ENTITY_ID", f"Sketch {sketch_id!r} has a duplicate or invalid entity id.")
            if kind == "line":
                entities[entity_id] = Edge.make_line(
                    self.values.point2(item.get("start"), f"{entity_id}.start"),
                    self.values.point2(item.get("end"), f"{entity_id}.end"),
                )
            elif kind == "tangent_arc":
                guides = item.get("guides")
                if not isinstance(guides, list) or len(guides) != 2:
                    raise Mcp3dError("INVALID_TANGENCY", f"{entity_id} needs exactly two named guides.")
                available = {**external, **entities}
                if any(guide not in available for guide in guides):
                    raise Mcp3dError("REFERENCE_NOT_FOUND", f"{entity_id} references an unknown guide.")
                radius = self.values.number(item.get("radius"), f"{entity_id}.radius")
                if radius <= 0:
                    raise Mcp3dError("INVALID_DIMENSION", f"{entity_id}.radius must be positive.")
                span = item.get("solution", {}).get("span", "short")
                if span not in {"short", "long"}:
                    raise Mcp3dError("AMBIGUOUS_SOLUTION", f"{entity_id}.solution.span must be 'short' or 'long'.")
                try:
                    choices = ConstrainedArcs(
                        available[guides[0]],
                        available[guides[1]],
                        radius=radius,
                        sagitta=Sagitta.SHORT if span == "short" else Sagitta.LONG,
                    ).edges()
                except (RuntimeError, ValueError) as error:
                    raise Mcp3dError("TANGENCY_UNSATISFIED", f"Unable to solve tangent arc {entity_id!r}: {error}") from error
                if len(choices) != 1:
                    raise Mcp3dError("AMBIGUOUS_SOLUTION", f"{entity_id!r} has {len(choices)} candidate arcs; add a stronger selector.")
                entities[entity_id] = choices[0]
            else:
                raise Mcp3dError("UNSUPPORTED_SKETCH_ENTITY", f"Sketch entity kind {kind!r} is unsupported.")

    def _build_profile(self, profile: Any, plane: Any, entities: dict[str, Any], sketch_id: str) -> Any | None:
        if profile is None:
            return None
        if not isinstance(profile, dict):
            raise Mcp3dError("UNSUPPORTED_PROFILE", f"Sketch {sketch_id!r} needs an object profile definition.")
        if profile.get("kind") == "polygon":
            points = profile.get("points")
            if not isinstance(points, list) or len(points) < 3:
                raise Mcp3dError("INVALID_PROFILE", f"Sketch {sketch_id!r} needs at least three profile points.")
            local_points = [self.values.point2(point, f"{sketch_id}.profile") for point in points]
            if local_points[0] != local_points[-1]:
                local_points.append(local_points[0])
            with BuildSketch(plane) as sketch:
                with BuildLine():
                    Polyline(*local_points)
                make_face()
            return sketch.sketch
        if profile.get("kind") == "path":
            segments = profile.get("segments")
            if not isinstance(segments, list) or not segments:
                raise Mcp3dError("INVALID_PROFILE", f"Sketch {sketch_id!r} needs one or more path segments.")
            local_edges: list[Any] = []
            for segment in segments:
                kind = segment.get("kind")
                if kind == "line":
                    local_edges.append(
                        Edge.make_line(
                            self._profile_point(segment.get("start"), entities, sketch_id),
                            self._profile_point(segment.get("end"), entities, sketch_id),
                        )
                    )
                elif kind == "entity":
                    source = segment.get("source")
                    if source not in entities:
                        raise Mcp3dError("REFERENCE_NOT_FOUND", f"Profile in {sketch_id!r} references unknown entity {source!r}.")
                    local_edges.append(entities[source])
                else:
                    raise Mcp3dError("UNSUPPORTED_PROFILE", f"Profile segment kind {kind!r} is unsupported.")
            wires = Wire.combine(local_edges)
            if len(wires) != 1 or not wires[0].is_closed:
                raise Mcp3dError("OPEN_PROFILE", f"Sketch {sketch_id!r} path does not form one closed profile.")
            try:
                return plane.from_local_coords(Face.make_surface(wires[0]))
            except RuntimeError as error:
                raise Mcp3dError("INVALID_PROFILE", f"Unable to create a face from sketch {sketch_id!r}: {error}") from error
        raise Mcp3dError("UNSUPPORTED_PROFILE", f"Sketch {sketch_id!r} supports polygon and path profiles.")

    def _profile_point(self, value: Any, entities: dict[str, Any], sketch_id: str) -> tuple[float, float]:
        if isinstance(value, dict) and isinstance(value.get("ref"), str):
            entity_id, _, endpoint = value["ref"].partition(".")
            if entity_id not in entities or endpoint not in {"start", "end"}:
                raise Mcp3dError("REFERENCE_NOT_FOUND", f"Profile in {sketch_id!r} references invalid point {value['ref']!r}.")
            vertices = entities[entity_id].vertices()
            vertex = vertices[0] if endpoint == "start" else vertices[-1]
            return (vertex.X, vertex.Y)
        return self.values.point2(value, f"{sketch_id}.profile")

    def _dimension_labels(self, graph: Any, sketch_id: str) -> list[str]:
        if not isinstance(graph, dict):
            return []
        labels = []
        for position, constraint in enumerate(graph.get("constraints", [])):
            if not isinstance(constraint, dict) or constraint.get("kind") not in {"distance", "radius", "diameter", "angle"}:
                continue
            value = constraint.get("value_deg", constraint.get("value"))
            if value is None:
                continue
            try:
                numeric = self.values.number(value, f"{sketch_id}.constraint")
            except Mcp3dError:
                continue
            kind = constraint["kind"]
            identifier = constraint.get("id", f"constraint_{position + 1}")
            unit = "°" if kind == "angle" else "mm"
            prefix = {"distance": "D", "radius": "R", "diameter": "Ø", "angle": "∠"}[kind]
            labels.append(f"{identifier}: {prefix}{numeric:g} {unit}")
        return labels
