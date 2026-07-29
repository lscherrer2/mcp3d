"""Structured, repairable errors shared across the application."""

from __future__ import annotations

from typing import Any


class Mcp3dError(ValueError):
    """An expected error that an MCP caller can repair from structured details."""

    def __init__(
        self,
        code: str,
        message: str,
        recovery: list[str] | None = None,
        details: dict[str, Any] | None = None,
    ) -> None:
        self.code = code
        self.message = message
        self.recovery = recovery or []
        self.details = details or {}
        super().__init__(message)

    def as_dict(self) -> dict[str, Any]:
        result: dict[str, Any] = {
            "status": "error",
            "code": self.code,
            "message": self.message,
            "recovery": self.recovery,
        }
        if self.details:
            result["details"] = self.details
        return result
