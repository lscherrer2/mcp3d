"""Optimistic revision commits reject concurrent stale-base updates."""

from __future__ import annotations

from threading import Barrier, Thread
import unittest

from mcp3d.application import AssemblyService, PartService
from mcp3d.application.store import InMemoryPartStore
from mcp3d.assembly.composer import AssemblyComposer
from mcp3d.cad import FeatureGraphCompiler
from mcp3d.identity import AssemblyId


class _BarrierCompiler:
    def __init__(self, barrier: Barrier) -> None:
        self._barrier = barrier
        self._compiler = FeatureGraphCompiler()

    def compile(self, recipe: object):  # type: ignore[no-untyped-def]
        self._barrier.wait(timeout=5)
        return self._compiler.compile(recipe)  # type: ignore[arg-type]


class _BarrierAssemblyComposer:
    def __init__(self, barrier: Barrier) -> None:
        self._barrier = barrier
        self._composer = AssemblyComposer()

    def compile(self, definition: object, resolve_revision: object):  # type: ignore[no-untyped-def]
        self._barrier.wait(timeout=5)
        return self._composer.compile(definition, resolve_revision)  # type: ignore[arg-type]


class RevisionConcurrencyTests(unittest.TestCase):
    def test_concurrent_stale_part_updates_leave_one_committed_revision(self) -> None:
        store = InMemoryPartStore()
        created = PartService(store=store).apply(
            part_id="concurrent_plate",
            recipe={"operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}]},
            patch=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(created.is_error, created.data)

        barrier = Barrier(2)
        services = [PartService(store=store, compiler=_BarrierCompiler(barrier)) for _ in range(2)]
        results = []

        def revise(service: PartService, length: int) -> None:
            results.append(
                service.apply(
                    part_id="concurrent_plate",
                    recipe={"operations": [{"id": "base", "kind": "box", "length": length, "width": 8, "height": 2}]},
                    patch=None,
                    base_revision=1,
                    requirements=None,
                    render={"views": []},
                )
            )

        threads = [Thread(target=revise, args=(service, length)) for service, length in zip(services, (12, 14), strict=True)]
        for thread in threads:
            thread.start()
        for thread in threads:
            thread.join(timeout=10)
            self.assertFalse(thread.is_alive())

        self.assertEqual(sum(not result.is_error for result in results), 1)
        failures = [result for result in results if result.is_error]
        self.assertEqual(failures[0].data["code"], "REVISION_CONFLICT")
        self.assertEqual(store.get_revision(next(iter(store.parts)), None).number, 2)

    def test_concurrent_stale_assembly_updates_leave_one_committed_revision(self) -> None:
        store = InMemoryPartStore()
        PartService(store=store).apply(
            part_id="assembly_part",
            recipe={"operations": [{"id": "base", "kind": "box", "length": 10, "width": 8, "height": 2}]},
            patch=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        base_definition = {"instances": [{"id": "part", "part_id": "assembly_part", "grounded": True}], "mates": []}
        created = AssemblyService(store=store).apply(
            assembly_id="concurrent_fixture",
            definition=base_definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(created.is_error, created.data)

        barrier = Barrier(2)
        services = [AssemblyService(store=store, composer=_BarrierAssemblyComposer(barrier)) for _ in range(2)]
        results = []

        def revise(service: AssemblyService) -> None:
            results.append(
                service.apply(
                    assembly_id="concurrent_fixture",
                    definition={"instances": [{"id": "part", "part_id": "assembly_part", "grounded": True}], "mates": []},
                    changes=None,
                    base_revision=1,
                    requirements=None,
                    render={"views": []},
                )
            )

        threads = [Thread(target=revise, args=(service,)) for service in services]
        for thread in threads:
            thread.start()
        for thread in threads:
            thread.join(timeout=10)
            self.assertFalse(thread.is_alive())

        self.assertEqual(sum(not result.is_error for result in results), 1)
        self.assertEqual([result.data["code"] for result in results if result.is_error], ["REVISION_CONFLICT"])
        self.assertEqual(store.get_assembly_revision(AssemblyId.parse("concurrent_fixture"), None).number, 2)
