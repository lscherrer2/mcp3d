"""Concrete in-memory part history store.

This is intentionally a concrete module, not a speculative repository
interface. A persistence adapter becomes worthwhile only when persistence is
introduced as a real second implementation.
"""

from __future__ import annotations

from ..models import Part


class InMemoryPartStore:
    """Own mutable part histories for one local server process."""

    def __init__(self) -> None:
        self.parts: dict[str, Part] = {}

    def get(self, part_id: str) -> Part | None:
        return self.parts.get(part_id)

    def save(self, part: Part) -> None:
        self.parts[part.part_id] = part
