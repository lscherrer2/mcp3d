"""Deep feature-graph compiler that owns Build123d recipe evaluation."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from build123d import Align, Box, Edge, Plane

from ..errors import Mcp3dError
from ..models import BuildResult, SketchRecord
from ..recipe import RecipeValues
from .datums import build_datum_plane
from .features import apply_finishing_feature, apply_pattern, build_profile_feature, combine_tool
from .legacy import compile_legacy
from .sketches import SketchCompiler


@dataclass
class BuildContext:
    """Private mutable state while one feature graph is being compiled."""

    shape: Any | None = None
    planes: dict[str, Any] = field(default_factory=dict)
    references: dict[str, Any] = field(default_factory=dict)
    sketches: dict[str, SketchRecord] = field(default_factory=dict)
    tools: dict[str, tuple[Any, str]] = field(default_factory=dict)
    identifiers: set[str] = field(default_factory=set)


class FeatureGraphCompiler:
    """Compile either supported recipe dialect into one valid Build123d part."""

    def compile(self, recipe: dict[str, Any]) -> BuildResult:
        try:
            if "operations" not in recipe:
                return compile_legacy(recipe)
            return self._compile_feature_graph(recipe)
        except Mcp3dError:
            raise
        except Exception as error:
            raise Mcp3dError(
                "BUILD_FAILED",
                f"The CAD kernel rejected the recipe: {error}",
                ["Inspect the affected sketch/profile or reduce feature dimensions, then revise the recipe."],
            ) from error

    def _compile_feature_graph(self, recipe: dict[str, Any]) -> BuildResult:
        if recipe.get("units", "mm") != "mm":
            raise Mcp3dError("UNSUPPORTED_UNITS", "Feature-graph recipes accept millimetres only; set units to 'mm'.")
        operations = recipe.get("operations")
        if not isinstance(operations, list) or not operations:
            raise Mcp3dError("OPERATIONS_REQUIRED", "A feature-graph recipe needs a non-empty operations list.")
        values = RecipeValues(recipe.get("parameters", {}))
        sketches = SketchCompiler(values)
        context = BuildContext()
        for operation in operations:
            self._apply_operation(operation, context, values, sketches)
        if context.shape is None or not context.shape.is_valid or len(context.shape.solids()) != 1:
            raise Mcp3dError("INVALID_SOLID", "The feature graph did not produce exactly one valid solid.")
        return BuildResult(shape=context.shape, sketches=context.sketches)

    def _apply_operation(
        self,
        operation: dict[str, Any],
        context: BuildContext,
        values: RecipeValues,
        sketches: SketchCompiler,
    ) -> None:
        identifier, kind = operation.get("id"), operation.get("kind")
        if not isinstance(identifier, str) or not identifier or identifier in context.identifiers:
            raise Mcp3dError("INVALID_FEATURE_ID", "Every operation requires a unique, non-empty id.")
        context.identifiers.add(identifier)
        if kind == "box":
            self._build_box(operation, context, values)
        elif kind == "datum_plane":
            context.planes[identifier] = build_datum_plane(operation, context.planes, context.references, values)
        elif kind == "sketch":
            context.sketches[identifier] = sketches.compile(operation, context.planes, context.references)
        elif kind in {"extrude", "revolve", "loft", "sweep"}:
            self._require_base(context, kind)
            tool = build_profile_feature(operation, context.sketches, values)
            mode = operation.get("operation", "add")
            context.shape = combine_tool(context.shape, tool, mode, identifier)
            context.tools[identifier] = (tool, mode)
        elif kind in {"fillet", "chamfer", "shell", "draft"}:
            self._require_base(context, kind)
            context.shape = apply_finishing_feature(context.shape, operation, context.planes, values)
        elif kind in {"linear_pattern", "polar_pattern"}:
            self._require_base(context, kind)
            context.shape = apply_pattern(context.shape, operation, context.tools, values)
        else:
            raise Mcp3dError("UNSUPPORTED_FEATURE", f"Unsupported feature-graph operation kind {kind!r}.")

    @staticmethod
    def _require_base(context: BuildContext, kind: str) -> None:
        if context.shape is None:
            raise Mcp3dError("BASE_REQUIRED", f"A {kind} needs an existing base solid.")

    @staticmethod
    def _build_box(operation: dict[str, Any], context: BuildContext, values: RecipeValues) -> None:
        identifier = operation["id"]
        if context.shape is not None:
            raise Mcp3dError("BASE_ORDER", "A box base must be the first solid-producing operation.")
        length, width, height = (values.number(operation.get(key), f"{identifier}.{key}") for key in ("length", "width", "height"))
        if min(length, width, height) <= 0:
            raise Mcp3dError("INVALID_DIMENSION", "Box dimensions must be positive.")
        context.shape = Box(length, width, height, align=(Align.MIN, Align.MIN, Align.MIN))
        context.planes.update(
            {
                f"{identifier}.top_face": Plane((0, 0, height), x_dir=(1, 0, 0), z_dir=(0, 0, 1)),
                f"{identifier}.bottom_face": Plane.XY,
            }
        )
        context.references.update(
            {
                f"{identifier}.edge.x_min": Edge.make_line((0, 0, height), (length, 0, height)),
                f"{identifier}.edge.x_max": Edge.make_line((0, width, height), (length, width, height)),
                f"{identifier}.edge.y_min": Edge.make_line((0, 0, height), (0, width, height)),
                f"{identifier}.edge.y_max": Edge.make_line((length, 0, height), (length, width, height)),
            }
        )
