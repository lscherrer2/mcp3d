"""Exact inspection checks and model-facing revision reports."""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from .errors import Mcp3dError
from .immutability import thaw
from .models import Revision


ALLOWED_VIEWS = {"isometric", "top", "front", "right"}
DEFAULT_APPLY_VIEWS = ("isometric",)
DEFAULT_ANALYZE_VIEWS = ("isometric", "top", "front", "right")


def validate_part_requirements(requirements: Any) -> dict[str, Any]:
    """Validate persisted part acceptance criteria before a revision is committed."""
    if not isinstance(requirements, dict) or set(requirements) != {"assertions"}:
        raise Mcp3dError("INVALID_REQUIREMENTS", "requirements must contain only an assertions list.")
    assertions = requirements["assertions"]
    if not isinstance(assertions, list):
        raise Mcp3dError("INVALID_REQUIREMENTS", "requirements.assertions must be a list.")
    for criterion in assertions:
        _validate_part_assertion(criterion)
    return requirements


def validate_assembly_requirements(requirements: Any) -> dict[str, Any]:
    """Validate persisted assembly acceptance criteria before a revision is committed."""
    if not isinstance(requirements, dict) or set(requirements) != {"assertions"}:
        raise Mcp3dError("INVALID_REQUIREMENTS", "requirements must contain only an assertions list.")
    assertions = requirements["assertions"]
    if not isinstance(assertions, list):
        raise Mcp3dError("INVALID_REQUIREMENTS", "requirements.assertions must be a list.")
    for criterion in assertions:
        _validate_assembly_assertion(criterion)
    return requirements


def _validate_part_assertion(criterion: Any) -> None:
    if not isinstance(criterion, Mapping):
        raise Mcp3dError("INVALID_REQUIREMENTS", "Each assertion must be an object.")
    _validate_identifier(criterion)
    kind = criterion.get("kind")
    if kind == "solid_valid":
        _validate_expected_bool(criterion)
    elif kind == "bounding_box":
        _validate_bounding_box(criterion)
    else:
        raise Mcp3dError("INVALID_REQUIREMENTS", f"Unsupported part assertion {kind!r}.")


def _validate_assembly_assertion(criterion: Any) -> None:
    if not isinstance(criterion, dict):
        raise Mcp3dError("INVALID_REQUIREMENTS", "Each assertion must be an object.")
    _validate_identifier(criterion)
    kind = criterion.get("kind")
    if kind == "fully_constrained":
        _validate_expected_bool(criterion)
    elif kind == "instance_count":
        expected = criterion.get("expected")
        if not isinstance(expected, int) or isinstance(expected, bool) or expected < 0:
            raise Mcp3dError("INVALID_REQUIREMENTS", "instance_count.expected must be a non-negative integer.")
    elif kind == "bounding_box":
        _validate_bounding_box(criterion)
    else:
        raise Mcp3dError("INVALID_REQUIREMENTS", f"Unsupported assembly assertion {kind!r}.")


def _validate_identifier(criterion: dict[str, Any]) -> None:
    if not isinstance(criterion.get("kind"), str):
        raise Mcp3dError("INVALID_REQUIREMENTS", "Each assertion requires a string kind.")
    if "id" in criterion and not isinstance(criterion["id"], str):
        raise Mcp3dError("INVALID_REQUIREMENTS", "Assertion ids must be strings when supplied.")


def _validate_expected_bool(criterion: dict[str, Any]) -> None:
    if "expected" in criterion and not isinstance(criterion["expected"], bool):
        raise Mcp3dError("INVALID_REQUIREMENTS", f"{criterion['kind']}.expected must be a boolean.")


def _validate_bounding_box(criterion: dict[str, Any]) -> None:
    expected = criterion.get("expected")
    if not isinstance(expected, list) or len(expected) != 3 or any(
        not isinstance(value, int | float) or isinstance(value, bool) for value in expected
    ):
        raise Mcp3dError("INVALID_REQUIREMENTS", "bounding_box.expected must be a three-number list.")


def apply_views(render: dict[str, Any] | None) -> list[str]:
    """Resolve the optional render setting on `part.apply`."""
    if render is None:
        return list(DEFAULT_APPLY_VIEWS)
    if not isinstance(render, dict) or set(render) - {"views"} or "views" not in render:
        raise Mcp3dError(
            "INVALID_RENDER_REQUEST",
            "render must be an object containing only a views list.",
            ['Use {"views":["isometric"]}, {"views":["top","front"]}, or {"views":[]} for no images.'],
        )
    return validate_views(render["views"])


def requested_views(requests: list[dict[str, Any]]) -> list[str] | None:
    """Resolve selected analyze views, or None when no render request exists."""
    render_requests = [request for request in requests if request.get("kind") == "render"]
    if not render_requests:
        return None
    views: list[Any] = []
    for request in render_requests:
        requested = request.get("views", [])
        if not isinstance(requested, list):
            return validate_views(requested)
        views.extend(requested)
    return validate_views(views)


def validate_views(views: Any) -> list[str]:
    """Validate and de-duplicate a canonical view list."""
    if not isinstance(views, list):
        raise Mcp3dError(
            "INVALID_RENDER_REQUEST",
            "views must be a list of canonical view names.",
            ['Use ["isometric"], ["top","front"], or [] for no part images.'],
        )
    invalid = [view for view in views if not isinstance(view, str) or view not in ALLOWED_VIEWS]
    if invalid:
        raise Mcp3dError(
            "UNSUPPORTED_VIEW",
            f"Supported views are {sorted(ALLOWED_VIEWS)}.",
            ["Choose only canonical views, or use an empty list when no part image is needed."],
            {"invalid": invalid},
        )
    return list(dict.fromkeys(views))


def report(part_id: str, revision: Revision, assertions: list[dict[str, Any]]) -> dict[str, Any]:
    """Build the stable structured report returned from apply/analyze."""
    box = revision.shape.bounding_box()
    dimensions_mm = [round(value, 6) for value in (box.size.X, box.size.Y, box.size.Z)]
    scale = {"mm": 1.0, "cm": 10.0, "m": 1000.0, "in": 25.4}[revision.recipe.units]
    dimensions = [round(value / scale, 6) for value in dimensions_mm]
    volume_mm3 = round(revision.shape.volume, 6)
    checks = [check(revision, item, dimensions) for item in assertions]
    return {
        "status": "verified" if all(item["status"] == "pass" for item in checks) else "needs_revision",
        "part_id": part_id,
        "revision": revision.number,
        "units": revision.recipe.units,
        "summary": {
            "bounding_box": dimensions,
            "volume": round(volume_mm3 / scale**3, 6),
            "bounding_box_mm": dimensions_mm,
            "volume_mm3": volume_mm3,
            "solid_count": len(revision.shape.solids()),
            "valid_solid": revision.shape.is_valid,
        },
        "checks": checks,
        "sketches": [
            {
                "id": sketch.identifier,
                "status": "buildable" if sketch.profile is not None else "construction",
                "entities": sorted(sketch.entities),
                "external_references": sorted(sketch.external),
                "has_closed_profile": sketch.profile is not None,
                "solver": sketch.solver,
                "dimension_labels": sketch.dimension_labels,
            }
            for sketch in revision.sketches.values()
        ],
        "mate_connectors": [
            {"id": identifier, "frame": frame.as_dict()}
            for identifier, frame in revision.mate_connectors.items()
        ],
        "recipe": revision.recipe.to_dict(),
    }


def check(revision: Revision, criterion: dict[str, Any], dimensions: list[float]) -> dict[str, Any]:
    """Evaluate one exact assertion without changing the revision."""
    if not isinstance(criterion, Mapping):
        return {"id": None, "kind": None, "status": "not_evaluated", "reason": "Assertions must be objects."}
    kind, identifier = criterion.get("kind"), criterion.get("id", criterion.get("kind"))
    if kind == "solid_valid":
        actual, expected = revision.shape.is_valid and len(revision.shape.solids()) == 1, criterion.get("expected", True)
    elif kind == "bounding_box":
        actual, expected = dimensions, criterion.get("expected")
    else:
        return {"id": identifier, "kind": kind, "status": "not_evaluated", "reason": "Unsupported assertion."}
    if kind == "bounding_box":
        passed = (
            isinstance(expected, list | tuple)
            and len(expected) == 3
            and all(isinstance(value, int | float) and not isinstance(value, bool) for value in expected)
            and actual == [float(value) for value in expected]
        )
    else:
        passed = actual == expected
    return {"id": identifier, "kind": kind, "status": "pass" if passed else "fail", "expected": thaw(expected), "actual": actual}
