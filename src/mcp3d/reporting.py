"""Exact inspection checks and model-facing revision reports."""

from __future__ import annotations

from typing import Any

from .errors import Mcp3dError
from .models import Revision


ALLOWED_VIEWS = {"isometric", "top", "front", "right"}
DEFAULT_APPLY_VIEWS = ("isometric",)
DEFAULT_ANALYZE_VIEWS = ("isometric", "top", "front", "right")


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
    dimensions = [round(value, 6) for value in (box.size.X, box.size.Y, box.size.Z)]
    checks = [check(revision, item, dimensions) for item in assertions]
    return {
        "status": "verified" if all(item["status"] == "pass" for item in checks) else "needs_revision",
        "part_id": part_id,
        "revision": revision.number,
        "units": "mm",
        "summary": {
            "bounding_box_mm": dimensions,
            "volume_mm3": round(revision.shape.volume, 6),
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
        "recipe": revision.recipe,
    }


def check(revision: Revision, criterion: dict[str, Any], dimensions: list[float]) -> dict[str, Any]:
    """Evaluate one exact assertion without changing the revision."""
    kind, identifier = criterion.get("kind"), criterion.get("id", criterion.get("kind"))
    if kind == "solid_valid":
        actual, expected = revision.shape.is_valid and len(revision.shape.solids()) == 1, criterion.get("expected", True)
    elif kind == "bounding_box":
        actual, expected = dimensions, criterion.get("expected")
    elif kind == "hole_count":
        actual = sum(
            len(item.get("centers", []))
            for item in revision.recipe.get("features", [])
            if item.get("kind") == "through_holes"
        )
        expected = criterion.get("expected")
    else:
        return {"id": identifier, "kind": kind, "status": "not_evaluated", "reason": "Unsupported assertion."}
    passed = actual == expected if kind != "bounding_box" else actual == [float(value) for value in expected]
    return {"id": identifier, "kind": kind, "status": "pass" if passed else "fail", "expected": expected, "actual": actual}
