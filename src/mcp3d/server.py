"""Thin FastMCP adapter over part, session, and assembly workflows."""

from __future__ import annotations

from typing import Any

from fastmcp import FastMCP
from fastmcp.tools.base import ToolResult
from fastmcp.utilities.types import Image

from .application import AssemblyService, PartService, SessionService
from .application.store import InMemoryPartStore
from .dashboard import DashboardProjection, start_dashboard_from_environment
from .errors import Mcp3dError
from .models import OperationResult
from .tool_docs import (
    ANALYZE_DESCRIPTION,
    APPLY_DESCRIPTION,
    ASSEMBLY_ANALYZE_DESCRIPTION,
    ASSEMBLY_APPLY_DESCRIPTION,
    EXPORT_DESCRIPTION,
    MODEL_GUIDE,
    SERVER_INSTRUCTIONS,
    SESSION_LIST_ASSEMBLIES_DESCRIPTION,
    SESSION_LIST_PARTS_DESCRIPTION,
    SESSION_PREVIEW_PARTS_DESCRIPTION,
)


mcp = FastMCP("mcp3d", instructions=SERVER_INSTRUCTIONS)
dashboard_projection = DashboardProjection()
part_store = InMemoryPartStore()
parts = PartService(store=part_store, observer=dashboard_projection)
session = SessionService(store=part_store)
assemblies = AssemblyService(store=part_store, observer=dashboard_projection)


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


@mcp.tool(name="session.list_parts", description=SESSION_LIST_PARTS_DESCRIPTION)
def list_session_parts() -> dict[str, Any]:
    """List the isolated part histories available in this local MCP session."""
    return session.list_parts()


@mcp.tool(name="session.preview_parts", description=SESSION_PREVIEW_PARTS_DESCRIPTION)
def preview_session_parts(
    parts: list[dict[str, Any]] | None = None,
    render: dict[str, Any] | None = None,
) -> ToolResult:
    """Render independent part revisions together without creating assembly state."""
    return _mcp_result(session.preview_parts(parts=parts, render=render))


@mcp.tool(name="assembly.apply", description=ASSEMBLY_APPLY_DESCRIPTION)
def apply_assembly(
    assembly_id: str,
    definition: dict[str, Any] | None = None,
    changes: list[dict[str, Any]] | None = None,
    base_revision: int | None = None,
    requirements: dict[str, Any] | None = None,
    render: dict[str, Any] | None = None,
) -> ToolResult:
    """Create or revise a revision-pinned assembly of independent parts."""
    return _mcp_result(
        assemblies.apply(
            assembly_id=assembly_id,
            definition=definition,
            changes=changes,
            base_revision=base_revision,
            requirements=requirements,
            render=render,
        )
    )


@mcp.tool(name="assembly.analyze", description=ASSEMBLY_ANALYZE_DESCRIPTION)
def analyze_assembly(
    assembly_id: str,
    revision: int | None = None,
    requests: list[dict[str, Any]] | None = None,
) -> ToolResult:
    """Inspect an immutable assembly revision without changing it."""
    return _mcp_result(assemblies.analyze(assembly_id=assembly_id, revision=revision, requests=requests))


@mcp.tool(name="session.list_assemblies", description=SESSION_LIST_ASSEMBLIES_DESCRIPTION)
def list_session_assemblies() -> dict[str, Any]:
    """List the independent assembly histories available in this local session."""
    return assemblies.list_assemblies()


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
    dashboard = start_dashboard_from_environment(dashboard_projection)
    try:
        mcp.run(transport="stdio")
    finally:
        if dashboard is not None:
            dashboard.close()
