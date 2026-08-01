"""Application lifecycle facts and the optional observer seam."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Mapping, Protocol

from ..models import RenderedImage
from ..recipe import FeatureGraphRecipe


@dataclass(frozen=True)
class OperationMilestone:
    """A UI-neutral fact emitted while one CAD operation progresses."""

    action: str
    phase: str
    part_id: str | None
    assembly_id: str | None = None
    revision: int | None = None
    status: str = "working"
    message: str = ""
    requested_views: tuple[str, ...] | None = None
    recipe: FeatureGraphRecipe | None = None
    result: Mapping[str, Any] | None = None
    images: tuple[RenderedImage, ...] = field(default_factory=tuple)
    shape: Any | None = None


class OperationObserver(Protocol):
    """The small application seam for optional operation observation."""

    def record(self, milestone: OperationMilestone) -> None: ...
