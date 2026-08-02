"""Dashboard-specific projection and bounded retention of operation facts."""

from __future__ import annotations

from collections import OrderedDict, deque
import copy
from dataclasses import dataclass
from datetime import datetime, timezone
from threading import RLock
from typing import Any, Callable

from ..application.observation import OperationMilestone
from ..models import RenderedMesh
from ..rendering.mesh import render_interactive_mesh


@dataclass(frozen=True)
class ActivityEvent:
    """One dashboard-ready milestone retained for the active local session."""

    identifier: int
    timestamp: str
    action: str
    phase: str
    part_id: str | None
    assembly_id: str | None
    revision: int | None
    status: str
    message: str
    details: dict[str, Any]
    image_ids: tuple[str, ...] = ()
    image_names: tuple[str, ...] = ()
    mesh_id: str | None = None
    mesh_metadata: dict[str, int] | None = None


class DashboardProjection:
    """Project CAD lifecycle facts into the dashboard's bounded read model."""

    def __init__(
        self,
        *,
        max_events: int = 80,
        max_images: int = 16,
        max_meshes: int = 4,
        mesh_renderer: Callable[[Any], RenderedMesh] = render_interactive_mesh,
    ) -> None:
        self._max_events = max_events
        self._max_images = max_images
        self._max_meshes = max_meshes
        self._mesh_renderer = mesh_renderer
        self._events: deque[ActivityEvent] = deque()
        self._images: OrderedDict[str, bytes] = OrderedDict()
        self._meshes: OrderedDict[str, bytes] = OrderedDict()
        self._next_identifier = 1
        self._lock = RLock()

    def record(self, milestone: OperationMilestone) -> ActivityEvent:
        """Project one lifecycle fact; dashboard-only mesh failure is non-fatal."""
        mesh = None
        if milestone.shape is not None:
            try:
                mesh = self._mesh_renderer(milestone.shape)
            except Exception:
                mesh = None
        with self._lock:
            identifier = self._next_identifier
            self._next_identifier += 1
            image_ids: list[str] = []
            image_names: list[str] = []
            for index, image in enumerate(milestone.images):
                image_id = f"{identifier}-{index}"
                self._images[image_id] = image.data
                image_ids.append(image_id)
                image_names.append(image.name)
            mesh_id = f"mesh-{identifier}" if mesh is not None else None
            if mesh_id is not None:
                self._meshes[mesh_id] = mesh.data
            event = ActivityEvent(
                identifier=identifier,
                timestamp=datetime.now(timezone.utc).isoformat(timespec="seconds"),
                action=milestone.action,
                phase=milestone.phase,
                part_id=milestone.part_id,
                assembly_id=milestone.assembly_id,
                revision=milestone.revision,
                status=milestone.status,
                message=milestone.message,
                details=self._details(milestone),
                image_ids=tuple(image_ids),
                image_names=tuple(image_names),
                mesh_id=mesh_id,
                mesh_metadata=(
                    {"vertex_count": mesh.vertex_count, "triangle_count": mesh.triangle_count}
                    if mesh is not None
                    else None
                ),
            )
            self._events.append(event)
            self._trim()
            return event

    def snapshot(self) -> dict[str, Any]:
        """Return dashboard timeline metadata and the freshest retained render."""
        with self._lock:
            events = [self._public_event(event) for event in reversed(self._events)]
            latest_render = next((event for event in events if event["images"] or event["mesh"]), None)
            return {
                "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "events": events,
                "latest_render": latest_render,
            }

    def image(self, image_id: str) -> bytes | None:
        with self._lock:
            return self._images.get(image_id)

    def mesh(self, mesh_id: str) -> bytes | None:
        with self._lock:
            return self._meshes.get(mesh_id)

    @staticmethod
    def _details(milestone: OperationMilestone) -> dict[str, Any]:
        details = {
            key: copy.deepcopy(value)
            for key, value in (milestone.result or {}).items()
            if key in {"summary", "checks", "renderer", "views", "artifacts", "package", "code", "recovery"}
        }
        if milestone.requested_views is not None:
            details["requested_views"] = list(milestone.requested_views)
        if milestone.recipe is not None:
            details["operations"] = [
                {"id": operation.identifier, "kind": operation.kind}
                for operation in milestone.recipe.operations
            ]
        return details

    def _public_event(self, event: ActivityEvent) -> dict[str, Any]:
        images = [
            {"id": image_id, "name": name, "url": f"/api/images/{image_id}"}
            for image_id, name in zip(event.image_ids, event.image_names, strict=True)
            if image_id in self._images
        ]
        return {
            "id": event.identifier,
            "timestamp": event.timestamp,
            "action": event.action,
            "phase": event.phase,
            "part_id": event.part_id,
            "assembly_id": event.assembly_id,
            "revision": event.revision,
            "status": event.status,
            "message": event.message,
            "details": event.details,
            "images": images,
            "mesh": (
                {"id": event.mesh_id, "url": f"/api/meshes/{event.mesh_id}", **(event.mesh_metadata or {})}
                if event.mesh_id in self._meshes
                else None
            ),
        }

    def _trim(self) -> None:
        while len(self._events) > self._max_events:
            discarded = self._events.popleft()
            for image_id in discarded.image_ids:
                self._images.pop(image_id, None)
            if discarded.mesh_id is not None:
                self._meshes.pop(discarded.mesh_id, None)
        while len(self._images) > self._max_images:
            self._images.popitem(last=False)
        while len(self._meshes) > self._max_meshes:
            self._meshes.popitem(last=False)
