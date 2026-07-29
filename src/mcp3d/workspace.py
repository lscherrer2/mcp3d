"""Compatibility imports for pre-refactor internal callers.

New code should use `application.PartService`, `cad.FeatureGraphCompiler`, and
the focused modules beneath them. This shim intentionally contains no CAD,
rendering, or MCP implementation.
"""

from __future__ import annotations

from typing import Any

from fastmcp.tools.base import ToolResult
from fastmcp.utilities.types import Image

from .application import PartService
from .errors import Mcp3dError
from .models import OperationResult
from .recipe import apply_replace_patch


WorkspaceError = Mcp3dError


class PartWorkspace(PartService):
    """Legacy name retained while callers migrate to `PartService`."""

    @staticmethod
    def _legacy_result(result: OperationResult) -> ToolResult:
        return ToolResult(
            content=[result.data, *(Image(data=image.data, format=image.format) for image in result.images)],
            structured_content=result.data,
            is_error=result.is_error,
        )

    def apply(self, **kwargs: Any) -> ToolResult:
        """Preserve the former workspace ToolResult contract during migration."""
        return self._legacy_result(super().apply(**kwargs))

    def analyze(self, **kwargs: Any) -> ToolResult:
        """Preserve the former workspace ToolResult contract during migration."""
        return self._legacy_result(super().analyze(**kwargs))

    def _build(self, recipe: dict[str, Any]):
        return self.compiler.compile(recipe)

    def _get_revision(self, part_id: str, revision: int | None):
        return self.get_revision(part_id, revision)

    @staticmethod
    def _apply_patch(recipe: dict[str, Any], patch: list[dict[str, Any]]) -> dict[str, Any]:
        return apply_replace_patch(recipe, patch)
