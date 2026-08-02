"""Application data retained between revisioned CAD operations."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Mapping

from .assembly import Frame
from .identity import PartId
from .immutability import freeze
from .recipe import FeatureGraphRecipe


@dataclass
class SketchRecord:
    """Named sketch state retained for downstream features and inspection."""

    identifier: str
    plane: Any
    entities: dict[str, Any]
    external: dict[str, Any]
    profile: Any | None = None
    points: dict[str, tuple[float, float]] = field(default_factory=dict)
    solver: dict[str, Any] | None = None
    dimension_labels: list[str] = field(default_factory=list)


@dataclass
class BuildResult:
    """Result of compiling a recipe into a Build123d part."""

    shape: Any
    sketches: dict[str, SketchRecord] = field(default_factory=dict)
    mate_connectors: dict[str, Frame] = field(default_factory=dict)


@dataclass(frozen=True)
class Revision:
    """One immutable, successfully compiled single-part revision."""

    number: int
    recipe: FeatureGraphRecipe
    requirements: Mapping[str, Any]
    shape: Any
    sketches: Mapping[str, SketchRecord] = field(default_factory=dict)
    mate_connectors: Mapping[str, Frame] = field(default_factory=dict)

    def __post_init__(self) -> None:
        """Prevent later revision edits through mutable mapping fields."""
        object.__setattr__(self, "requirements", freeze(self.requirements))
        object.__setattr__(self, "sketches", freeze(self.sketches))
        object.__setattr__(self, "mate_connectors", freeze(self.mate_connectors))


@dataclass
class Part:
    """In-memory history for one named part."""

    part_id: PartId
    revisions: list[Revision] = field(default_factory=list)


@dataclass(frozen=True)
class RenderedImage:
    """A renderer-neutral image held only for the current MCP response."""

    name: str
    data: bytes
    format: str = "png"


@dataclass(frozen=True)
class RenderedMesh:
    """Compact, in-memory triangle mesh retained for an interactive observer."""

    data: bytes
    vertex_count: int
    triangle_count: int


@dataclass
class OperationResult:
    """Application response before the MCP adapter turns it into content blocks."""

    data: dict[str, Any]
    images: list[RenderedImage] = field(default_factory=list)
    is_error: bool = False
