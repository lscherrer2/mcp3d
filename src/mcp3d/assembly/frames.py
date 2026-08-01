"""Small immutable rigid-frame math used by part connectors and assemblies."""

from __future__ import annotations

from dataclasses import dataclass
from math import sqrt
from typing import Iterable

from build123d import Location, Plane

from ..errors import Mcp3dError


Vector3 = tuple[float, float, float]


def _vector(value: Iterable[float]) -> Vector3:
    values = tuple(float(item) for item in value)
    if len(values) != 3:
        raise Mcp3dError("INVALID_CONNECTOR", "Connector vectors must contain exactly three numeric values.")
    return values  # type: ignore[return-value]


def _dot(first: Vector3, second: Vector3) -> float:
    return sum(a * b for a, b in zip(first, second, strict=True))


def _cross(first: Vector3, second: Vector3) -> Vector3:
    return (
        first[1] * second[2] - first[2] * second[1],
        first[2] * second[0] - first[0] * second[2],
        first[0] * second[1] - first[1] * second[0],
    )


def _scale(vector: Vector3, scalar: float) -> Vector3:
    return tuple(value * scalar for value in vector)  # type: ignore[return-value]


def _add(first: Vector3, second: Vector3) -> Vector3:
    return tuple(a + b for a, b in zip(first, second, strict=True))  # type: ignore[return-value]


def _normalize(vector: Vector3, label: str) -> Vector3:
    magnitude = sqrt(_dot(vector, vector))
    if magnitude < 1e-12:
        raise Mcp3dError("INVALID_CONNECTOR", f"Connector {label} must be non-zero.")
    return _scale(vector, 1 / magnitude)


@dataclass(frozen=True)
class Frame:
    """A right-handed local coordinate frame in canonical millimeters."""

    origin_mm: Vector3
    x_axis: Vector3
    y_axis: Vector3
    z_axis: Vector3

    @classmethod
    def from_axes(cls, origin_mm: Iterable[float], x_axis: Iterable[float], z_axis: Iterable[float]) -> "Frame":
        origin, x, z = _vector(origin_mm), _normalize(_vector(x_axis), "x_axis"), _normalize(_vector(z_axis), "z_axis")
        if abs(_dot(x, z)) > 1e-8:
            raise Mcp3dError("INVALID_CONNECTOR", "Connector x_axis and z_axis must be perpendicular.")
        y = _normalize(_cross(z, x), "axes")
        return cls(origin, x, y, z)

    @classmethod
    def identity(cls) -> "Frame":
        return cls((0.0, 0.0, 0.0), (1.0, 0.0, 0.0), (0.0, 1.0, 0.0), (0.0, 0.0, 1.0))

    @classmethod
    def opposed(cls) -> "Frame":
        """Rotate 180° around local X so two outward-facing frames meet."""
        return cls((0.0, 0.0, 0.0), (1.0, 0.0, 0.0), (0.0, -1.0, 0.0), (0.0, 0.0, -1.0))

    def apply_vector(self, vector: Vector3) -> Vector3:
        return _add(_add(_scale(self.x_axis, vector[0]), _scale(self.y_axis, vector[1])), _scale(self.z_axis, vector[2]))

    def apply_point(self, point: Vector3) -> Vector3:
        return _add(self.origin_mm, self.apply_vector(point))

    def compose(self, other: "Frame") -> "Frame":
        return Frame(
            self.apply_point(other.origin_mm),
            self.apply_vector(other.x_axis),
            self.apply_vector(other.y_axis),
            self.apply_vector(other.z_axis),
        )

    def inverse(self) -> "Frame":
        inverse_x = (self.x_axis[0], self.y_axis[0], self.z_axis[0])
        inverse_y = (self.x_axis[1], self.y_axis[1], self.z_axis[1])
        inverse_z = (self.x_axis[2], self.y_axis[2], self.z_axis[2])
        inverse_origin = (-_dot(inverse_x, self.origin_mm), -_dot(inverse_y, self.origin_mm), -_dot(inverse_z, self.origin_mm))
        return Frame(inverse_origin, inverse_x, inverse_y, inverse_z)

    def location(self) -> Location:
        """Adapt this pure frame to Build123d only when placing a shape."""
        return Location(Plane(self.origin_mm, x_dir=self.x_axis, z_dir=self.z_axis))

    def as_dict(self) -> dict[str, list[float]]:
        return {
            "origin_mm": [round(value, 9) for value in self.origin_mm],
            "x_axis": [round(value, 9) for value in self.x_axis],
            "y_axis": [round(value, 9) for value in self.y_axis],
            "z_axis": [round(value, 9) for value in self.z_axis],
        }
