"""Parse and deterministically solve grounded fastened-mate assemblies."""

from __future__ import annotations

from collections import deque
import copy
from math import acos, degrees, sqrt
from typing import Any, Callable

from build123d import Compound

from ..errors import Mcp3dError
from ..identity import PartId
from ..models import Revision
from ..recipe import RecipeValues, parse_units
from .domain import (
    AssemblyBuildResult,
    AssemblyDefinition,
    AssemblyInstance,
    FastenedMate,
    MateEndpoint,
    PartRevisionRef,
)
from .frames import Frame


RevisionResolver = Callable[[PartId, int | None], Revision]


def parse_definition(value: object, resolve_revision: RevisionResolver) -> AssemblyDefinition:
    """Validate external assembly JSON and pin every part reference."""
    if not isinstance(value, dict) or set(value) - {"units", "instances", "mates"}:
        raise Mcp3dError("INVALID_ASSEMBLY", "assembly definition accepts only units, instances, and mates.")
    units = parse_units(value.get("units", "mm"))
    values = RecipeValues({}, units)
    raw_instances = value.get("instances")
    if not isinstance(raw_instances, list) or not raw_instances:
        raise Mcp3dError("INSTANCES_REQUIRED", "An assembly needs a non-empty instances list.")
    instances: list[AssemblyInstance] = []
    identifiers: set[str] = set()
    for index, raw_instance in enumerate(raw_instances):
        if not isinstance(raw_instance, dict) or set(raw_instance) - {"id", "part_id", "revision", "grounded", "initial_pose"}:
            raise Mcp3dError("INVALID_INSTANCE", f"instances[{index}] has unsupported fields.")
        identifier = raw_instance.get("id")
        if not isinstance(identifier, str) or not identifier or identifier in identifiers:
            raise Mcp3dError("INVALID_INSTANCE", "Every assembly instance needs a unique, non-empty id.")
        part_id = PartId.parse(raw_instance.get("part_id"))
        requested_revision = raw_instance.get("revision")
        if requested_revision is not None and (isinstance(requested_revision, bool) or not isinstance(requested_revision, int)):
            raise Mcp3dError("INVALID_REVISION", f"instances[{index}].revision must be a positive integer when supplied.")
        resolved = resolve_revision(part_id, requested_revision)
        grounded = raw_instance.get("grounded", False)
        if not isinstance(grounded, bool):
            raise Mcp3dError("INVALID_INSTANCE", f"instances[{index}].grounded must be true or false.")
        instances.append(
            AssemblyInstance(
                identifier,
                PartRevisionRef(part_id, resolved.number),
                grounded,
                _parse_initial_pose(raw_instance.get("initial_pose"), values, identifier),
            )
        )
        identifiers.add(identifier)
    mates = _parse_mates(value.get("mates", []), identifiers)
    return AssemblyDefinition(units, tuple(instances), mates)


def apply_changes(definition: AssemblyDefinition, changes: object) -> dict[str, Any]:
    """Apply semantic assembly edits to a JSON definition before revalidation."""
    if not isinstance(changes, list) or not changes:
        raise Mcp3dError("CHANGES_REQUIRED", "Assembly revisions need a non-empty changes list.")
    candidate = copy.deepcopy(definition.as_dict())
    for index, change in enumerate(changes):
        if not isinstance(change, dict) or not isinstance(change.get("op"), str):
            raise Mcp3dError("INVALID_CHANGE", f"changes[{index}] needs an op.")
        operation = change["op"]
        if operation == "add_instance":
            instance = change.get("instance")
            if not isinstance(instance, dict):
                raise Mcp3dError("INVALID_CHANGE", "add_instance needs an instance object.")
            candidate["instances"].append(copy.deepcopy(instance))
        elif operation == "remove_instance":
            identifier = _change_identifier(change, "instance")
            _find(candidate["instances"], identifier, "instance")
            if any(endpoint["instance"] == identifier for mate in candidate["mates"] for endpoint in mate["between"]):
                raise Mcp3dError("INSTANCE_IN_USE", f"Remove mates referencing instance {identifier!r} before removing it.")
            candidate["instances"] = [item for item in candidate["instances"] if item["id"] != identifier]
        elif operation == "replace_part":
            identifier = _change_identifier(change, "instance")
            instance = _find(candidate["instances"], identifier, "instance")
            if "part_id" not in change:
                raise Mcp3dError("INVALID_CHANGE", "replace_part needs part_id and optional revision.")
            instance["part_id"] = change["part_id"]
            if "revision" in change:
                instance["revision"] = change["revision"]
            else:
                instance.pop("revision", None)
        elif operation == "add_mate":
            mate = change.get("mate")
            if not isinstance(mate, dict):
                raise Mcp3dError("INVALID_CHANGE", "add_mate needs a mate object.")
            candidate["mates"].append(copy.deepcopy(mate))
        elif operation == "remove_mate":
            identifier = _change_identifier(change, "mate")
            _find(candidate["mates"], identifier, "mate")
            candidate["mates"] = [item for item in candidate["mates"] if item["id"] != identifier]
        elif operation in {"ground", "unground"}:
            identifier = _change_identifier(change, "instance")
            _find(candidate["instances"], identifier, "instance")["grounded"] = operation == "ground"
        else:
            raise Mcp3dError("UNSUPPORTED_CHANGE", f"Unsupported assembly change {operation!r}.")
    return candidate


def _parse_initial_pose(value: object, values: RecipeValues, identifier: str) -> Frame | None:
    if value is None:
        return None
    if not isinstance(value, dict) or set(value) != {"translation"}:
        raise Mcp3dError("INVALID_INSTANCE", f"instances {identifier!r}.initial_pose supports only a translation vector.")
    return Frame.from_axes(values.point3(value["translation"], f"{identifier}.initial_pose.translation"), (1, 0, 0), (0, 0, 1))


def _parse_mates(value: object, instance_ids: set[str]) -> tuple[FastenedMate, ...]:
    if not isinstance(value, list):
        raise Mcp3dError("INVALID_MATE", "mates must be a list when supplied.")
    mates: list[FastenedMate] = []
    identifiers: set[str] = set()
    for index, raw_mate in enumerate(value):
        if not isinstance(raw_mate, dict) or set(raw_mate) - {"id", "kind", "between", "orientation"}:
            raise Mcp3dError("INVALID_MATE", f"mates[{index}] has unsupported fields.")
        identifier = raw_mate.get("id")
        if not isinstance(identifier, str) or not identifier or identifier in identifiers:
            raise Mcp3dError("INVALID_MATE", "Every mate needs a unique, non-empty id.")
        if raw_mate.get("kind") != "fastened":
            raise Mcp3dError("UNSUPPORTED_MATE", "The initial assembly workflow supports fastened mates only.")
        endpoints = raw_mate.get("between")
        if not isinstance(endpoints, list) or len(endpoints) != 2:
            raise Mcp3dError("INVALID_MATE", f"Mate {identifier!r} needs exactly two endpoints.")
        parsed = tuple(_parse_endpoint(endpoint, instance_ids, identifier) for endpoint in endpoints)
        if parsed[0].instance == parsed[1].instance:
            raise Mcp3dError("INVALID_MATE", f"Mate {identifier!r} must connect two distinct instances.")
        orientation = raw_mate.get("orientation", "opposed")
        if orientation not in {"aligned", "opposed"}:
            raise Mcp3dError("INVALID_MATE", f"Mate {identifier!r}.orientation must be aligned or opposed.")
        mates.append(FastenedMate(identifier, parsed[0], parsed[1], orientation))
        identifiers.add(identifier)
    return tuple(mates)


def _parse_endpoint(value: object, instance_ids: set[str], mate_id: str) -> MateEndpoint:
    if not isinstance(value, dict) or set(value) != {"instance", "connector"}:
        raise Mcp3dError("INVALID_MATE", f"Mate {mate_id!r} endpoints need instance and connector.")
    instance, connector = value.get("instance"), value.get("connector")
    if not isinstance(instance, str) or instance not in instance_ids or not isinstance(connector, str) or not connector:
        raise Mcp3dError("INVALID_MATE", f"Mate {mate_id!r} references an invalid instance or connector.")
    return MateEndpoint(instance, connector)


def _change_identifier(change: dict[str, Any], key: str) -> str:
    identifier = change.get(key)
    if not isinstance(identifier, str) or not identifier:
        raise Mcp3dError("INVALID_CHANGE", f"{change['op']} needs a non-empty {key} id.")
    return identifier


def _find(values: list[dict[str, Any]], identifier: str, kind: str) -> dict[str, Any]:
    for value in values:
        if value.get("id") == identifier:
            return value
    raise Mcp3dError(f"{kind.upper()}_NOT_FOUND", f"No {kind} named {identifier!r} exists in this assembly.")


class AssemblyComposer:
    """Solve grounded fastened mates and materialize a display compound."""

    def compile(self, definition: AssemblyDefinition, resolve_revision: RevisionResolver) -> AssemblyBuildResult:
        revisions = {instance.identifier: resolve_revision(instance.part.part_id, instance.part.revision) for instance in definition.instances}
        connectors = self._resolve_connectors(definition, revisions)
        poses, diagnostics = self._solve(definition, connectors)
        shape = Compound(children=[revisions[instance.identifier].shape.moved(poses[instance.identifier].location()) for instance in definition.instances])
        return AssemblyBuildResult(shape, poses, diagnostics)

    @staticmethod
    def _resolve_connectors(definition: AssemblyDefinition, revisions: dict[str, Revision]) -> dict[tuple[str, str], Frame]:
        result: dict[tuple[str, str], Frame] = {}
        for mate in definition.mates:
            for endpoint in (mate.first, mate.second):
                key = (endpoint.instance, endpoint.connector)
                if key not in result:
                    connector = revisions[endpoint.instance].mate_connectors.get(endpoint.connector)
                    if connector is None:
                        raise Mcp3dError("CONNECTOR_NOT_FOUND", f"No connector {endpoint.connector!r} exists on instance {endpoint.instance!r}.")
                    result[key] = connector
        return result

    def _solve(self, definition: AssemblyDefinition, connectors: dict[tuple[str, str], Frame]) -> tuple[dict[str, Frame], dict[str, Any]]:
        instances = {instance.identifier: instance for instance in definition.instances}
        adjacency: dict[str, list[tuple[FastenedMate, bool]]] = {identifier: [] for identifier in instances}
        for mate in definition.mates:
            adjacency[mate.first.instance].append((mate, True))
            adjacency[mate.second.instance].append((mate, False))
        poses: dict[str, Frame] = {}
        free_components: list[list[str]] = []
        residuals: list[dict[str, Any]] = []
        for root in instances:
            if root in poses:
                continue
            group = self._connected(root, adjacency)
            grounded = sorted(identifier for identifier in group if instances[identifier].grounded)
            positioned = sorted(identifier for identifier in group if instances[identifier].initial_pose is not None)
            if grounded:
                mate_driven = [identifier for identifier in positioned if identifier not in grounded]
                if mate_driven:
                    raise Mcp3dError(
                        "INITIAL_POSE_CONFLICT",
                        "An initial_pose cannot be set on a mate-driven instance in a grounded component.",
                        ["Move the initial_pose to a grounded instance or remove it; fastened mates determine child placement."],
                        {"instances": mate_driven},
                    )
                for identifier in grounded:
                    poses[identifier] = instances[identifier].initial_pose or Frame.identity()
                queue: deque[str] = deque(grounded)
            else:
                if len(positioned) > 1:
                    raise Mcp3dError(
                        "INITIAL_POSE_CONFLICT",
                        "A free rigid component can have only one initial_pose anchor.",
                        ["Keep one initial_pose or ground the component; fastened mates determine every other instance pose."],
                        {"instances": positioned},
                    )
                seed = positioned[0] if positioned else root
                poses[seed] = instances[seed].initial_pose or Frame.identity()
                free_components.append(sorted(group))
                queue = deque([seed])
            while queue:
                current = queue.popleft()
                for mate, current_is_first in adjacency[current]:
                    neighbor, expected = self._neighbor_pose(mate, current_is_first, poses[current], connectors)
                    if neighbor not in poses:
                        poses[neighbor] = expected
                        queue.append(neighbor)
                    elif not self._same_pose(poses[neighbor], expected):
                        raise Mcp3dError(
                            "MATE_UNSATISFIABLE",
                            f"Mate {mate.identifier!r} conflicts with the existing placement of instance {neighbor!r}.",
                            ["Check grounding, connector axes, and mate orientation; the previous assembly revision remains unchanged."],
                            {"mate": mate.identifier, "instance": neighbor},
                        )
        for mate in definition.mates:
            residuals.append({"id": mate.identifier, "kind": "fastened", "status": "pass", "position_error_mm": 0.0, "orientation_error_deg": 0.0})
        return poses, {
            "status": "needs_definition" if free_components else "fully_constrained",
            "mate_count": len(definition.mates),
            "free_components": free_components,
            "remaining_dof": 6 * len(free_components),
            "mate_residuals": residuals,
        }

    @staticmethod
    def _connected(root: str, adjacency: dict[str, list[tuple[FastenedMate, bool]]]) -> set[str]:
        found, queue = {root}, deque([root])
        while queue:
            current = queue.popleft()
            for mate, current_is_first in adjacency[current]:
                neighbor = mate.second.instance if current_is_first else mate.first.instance
                if neighbor not in found:
                    found.add(neighbor)
                    queue.append(neighbor)
        return found

    @staticmethod
    def _neighbor_pose(
        mate: FastenedMate,
        current_is_first: bool,
        current_pose: Frame,
        connectors: dict[tuple[str, str], Frame],
    ) -> tuple[str, Frame]:
        relation = Frame.identity() if mate.orientation == "aligned" else Frame.opposed()
        if current_is_first:
            source, target = mate.first, mate.second
            desired_connector = current_pose.compose(connectors[(source.instance, source.connector)]).compose(relation)
        else:
            source, target = mate.second, mate.first
            desired_connector = current_pose.compose(connectors[(source.instance, source.connector)]).compose(relation.inverse())
        return target.instance, desired_connector.compose(connectors[(target.instance, target.connector)].inverse())

    @staticmethod
    def _same_pose(first: Frame, second: Frame) -> bool:
        position_error = sqrt(sum((a - b) ** 2 for a, b in zip(first.origin_mm, second.origin_mm, strict=True)))
        if position_error > 1e-6:
            return False
        return all(_angle(first_axis, second_axis) <= 1e-6 for first_axis, second_axis in zip((first.x_axis, first.y_axis, first.z_axis), (second.x_axis, second.y_axis, second.z_axis), strict=True))


def _angle(first: tuple[float, float, float], second: tuple[float, float, float]) -> float:
    dot = max(-1.0, min(1.0, sum(a * b for a, b in zip(first, second, strict=True))))
    return degrees(acos(dot))
