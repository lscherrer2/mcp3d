"""Thin FastMCP adapter over the application-level part workflow."""

from __future__ import annotations

from typing import Any

from fastmcp import FastMCP
from fastmcp.tools.base import ToolResult
from fastmcp.utilities.types import Image

from .application import PartService
from .errors import Mcp3dError
from .models import OperationResult
from .tool_docs import ANALYZE_DESCRIPTION, APPLY_DESCRIPTION, EXPORT_DESCRIPTION, MODEL_GUIDE, SERVER_INSTRUCTIONS


mcp = FastMCP("mcp3d", instructions=SERVER_INSTRUCTIONS)
parts = PartService()


def _mcp_result(result: OperationResult) -> ToolResult:
    """Convert renderer-neutral application output at the outer MCP seam."""
    return ToolResult(
        content=[result.data, *(Image(data=image.data, format=image.format) for image in result.images)],
        structured_content=result.data,
        is_error=result.is_error,
    )


@mcp.tool(name="part.apply", description=APPLY_DESCRIPTION)
def apply_part(
    part_id: str,
    recipe: dict[str, Any] | None = None,
    patch: list[dict[str, Any]] | None = None,
    base_revision: int | None = None,
    requirements: dict[str, Any] | None = None,
    render: dict[str, Any] | None = None,
) -> ToolResult:
    """Create or revise a part through the application workflow."""
    return _mcp_result(
        parts.apply(
            part_id=part_id,
            recipe=recipe,
            patch=patch,
            base_revision=base_revision,
            requirements=requirements,
            render=render,
        )
    )


@mcp.tool(name="part.analyze", description=ANALYZE_DESCRIPTION)
def analyze_part(part_id: str, revision: int | None = None, requests: list[dict[str, Any]] | None = None) -> ToolResult:
    """Inspect an immutable part revision through the application workflow."""
    return _mcp_result(parts.analyze(part_id=part_id, revision=revision, requests=requests))


@mcp.tool(name="part.export", description=EXPORT_DESCRIPTION)
def export_part(part_id: str, revision: int | None = None, formats: list[str] | None = None) -> dict[str, Any]:
    """Export a verified immutable revision."""
    try:
        return parts.export(part_id=part_id, revision=revision, formats=formats)
    except Mcp3dError as error:
        return error.as_dict()


@mcp.resource(
    "mcp3d://guide",
    name="mcp3d_model_guide",
    title="mcp3d CAD model guide",
    description="Complete field reference, examples, operation ordering, selector guidance, and repair workflow for the mcp3d tools.",
    mime_type="text/markdown",
)
def model_guide() -> str:
    """Expose detailed model-facing CAD documentation through MCP resources."""
    return MODEL_GUIDE


def main() -> None:
    """Run the local stdio MCP server."""
    mcp.run(transport="stdio")
