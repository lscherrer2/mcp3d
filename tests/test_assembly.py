"""Assembly revisions retain exact part references and rigid mate evidence."""

from __future__ import annotations

import unittest

from mcp3d.application import AssemblyService, PartService
from mcp3d.application.store import InMemoryPartStore


class AssemblyServiceTests(unittest.TestCase):
    def setUp(self) -> None:
        self.store = InMemoryPartStore()
        self.parts = PartService(store=self.store)
        self.assemblies = AssemblyService(store=self.store)

    def _apply_part(self, part_id: str, recipe: dict) -> None:
        result = self.parts.apply(
            part_id=part_id,
            recipe=recipe,
            patch=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(result.is_error, result.data)

    @staticmethod
    def _base_recipe(length: int = 10) -> dict:
        return {
            "units": "mm",
            "operations": [{"id": "base", "kind": "box", "length": length, "width": 8, "height": 2}],
            "mate_connectors": [{"id": "top_mount", "on": {"plane": "base.top_face", "point": [length / 2, 4]}}],
        }

    @staticmethod
    def _cover_recipe() -> dict:
        return {
            "units": "mm",
            "operations": [{"id": "base", "kind": "box", "length": 6, "width": 4, "height": 1}],
            "mate_connectors": [
                {
                    "id": "bottom_mount",
                    "frame": {"origin": [3, 2, 0], "x_axis": [1, 0, 0], "z_axis": [0, 0, -1]},
                }
            ],
        }

    def _create_two_parts(self) -> None:
        self._apply_part("plate", self._base_recipe())
        self._apply_part("cover", self._cover_recipe())

    @staticmethod
    def _definition() -> dict:
        return {
            "units": "mm",
            "instances": [
                {"id": "plate", "part_id": "plate", "grounded": True},
                {"id": "cover", "part_id": "cover"},
            ],
            "mates": [
                {
                    "id": "mount_cover",
                    "kind": "fastened",
                    "between": [
                        {"instance": "plate", "connector": "top_mount"},
                        {"instance": "cover", "connector": "bottom_mount"},
                    ],
                }
            ],
        }

    def test_fastened_mate_pins_part_revisions_and_reports_solved_placement(self) -> None:
        self._create_two_parts()
        result = self.assemblies.apply(
            assembly_id="enclosure",
            definition=self._definition(),
            changes=None,
            base_revision=None,
            requirements={"assertions": [{"kind": "fully_constrained"}, {"kind": "instance_count", "expected": 2}]},
            render={"views": []},
        )

        self.assertFalse(result.is_error, result.data)
        self.assertEqual(result.data["status"], "verified")
        self.assertEqual(result.data["definition"]["instances"], [
            {"id": "plate", "part_id": "plate", "revision": 1, "grounded": True},
            {"id": "cover", "part_id": "cover", "revision": 1},
        ])
        self.assertEqual(result.data["solver"]["status"], "fully_constrained")
        self.assertEqual(result.data["solver"]["remaining_dof"], 0)
        self.assertEqual(result.data["solver"]["mate_residuals"][0]["status"], "pass")
        self.assertEqual(result.data["summary"]["solid_count"], 2)
        self.assertEqual(result.data["summary"]["bounding_box_mm"], [10.0, 8.0, 3.0])
        self.assertEqual(result.data["instances"][1]["resolved_pose"]["origin_mm"], [2.0, 2.0, 2.0])

    def test_assembly_revisions_remain_pinned_and_failed_revision_is_not_committed(self) -> None:
        self._create_two_parts()
        created = self.assemblies.apply(
            assembly_id="enclosure",
            definition=self._definition(),
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(created.is_error, created.data)

        revised_part = self.parts.apply(
            part_id="plate",
            recipe=self._base_recipe(length=12),
            patch=None,
            base_revision=1,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(revised_part.is_error, revised_part.data)

        pinned = self.assemblies.analyze(assembly_id="enclosure", revision=1, requests=[{"kind": "render", "views": []}])
        self.assertEqual(pinned.data["definition"]["instances"][0]["revision"], 1)
        self.assertEqual(pinned.data["summary"]["bounding_box_mm"], [10.0, 8.0, 3.0])

        advanced = self.assemblies.apply(
            assembly_id="enclosure",
            definition=None,
            changes=[{"op": "replace_part", "instance": "plate", "part_id": "plate", "revision": 2}],
            base_revision=1,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(advanced.is_error, advanced.data)
        self.assertEqual(advanced.data["revision"], 2)
        self.assertEqual(advanced.data["summary"]["bounding_box_mm"], [12.0, 8.0, 3.0])

        failed = self.assemblies.apply(
            assembly_id="enclosure",
            definition=None,
            changes=[{"op": "replace_part", "instance": "cover", "part_id": "missing"}],
            base_revision=2,
            requirements=None,
            render={"views": []},
        )
        self.assertTrue(failed.is_error)
        self.assertEqual(failed.data["code"], "PART_NOT_FOUND")
        self.assertEqual(self.store.get_assembly(self.store.list_assemblies()[0].assembly_id).revisions[-1].number, 2)

    def test_ungrounded_component_is_explicitly_reported_as_free(self) -> None:
        self._apply_part("plate", self._base_recipe())
        result = self.assemblies.apply(
            assembly_id="floating",
            definition={
                "units": "in",
                "instances": [{"id": "plate", "part_id": "plate", "initial_pose": {"translation": [1, 0, 0]}}],
                "mates": [],
            },
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )

        self.assertFalse(result.is_error, result.data)
        self.assertEqual(result.data["status"], "needs_definition")
        self.assertEqual(result.data["solver"]["free_components"], [["plate"]])
        self.assertEqual(result.data["solver"]["remaining_dof"], 6)
        self.assertEqual(result.data["definition"]["instances"][0]["initial_pose"], {"translation": [1.0, 0.0, 0.0]})
        self.assertEqual(result.data["instances"][0]["resolved_pose"]["origin_mm"], [25.4, 0.0, 0.0])

        grounded = self.assemblies.apply(
            assembly_id="floating",
            definition=None,
            changes=[{"op": "ground", "instance": "plate"}],
            base_revision=1,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(grounded.is_error, grounded.data)
        self.assertEqual(grounded.data["instances"][0]["resolved_pose"]["origin_mm"], [25.4, 0.0, 0.0])

    def test_free_mated_component_uses_its_one_explicit_initial_pose_as_anchor(self) -> None:
        self._create_two_parts()
        definition = self._definition()
        definition["instances"][0].pop("grounded")
        definition["instances"][1]["initial_pose"] = {"translation": [20, 30, 40]}

        result = self.assemblies.apply(
            assembly_id="floating_pair",
            definition=definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )

        self.assertFalse(result.is_error, result.data)
        self.assertEqual(result.data["solver"]["free_components"], [["cover", "plate"]])
        self.assertEqual(result.data["instances"][1]["resolved_pose"]["origin_mm"], [20.0, 30.0, 40.0])

    def test_rejects_ambiguous_or_mate_driven_initial_poses_without_committing(self) -> None:
        self._create_two_parts()
        grounded_definition = self._definition()
        grounded_definition["instances"][1]["initial_pose"] = {"translation": [20, 30, 40]}
        mate_driven = self.assemblies.apply(
            assembly_id="invalid_poses",
            definition=grounded_definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertTrue(mate_driven.is_error)
        self.assertEqual(mate_driven.data["code"], "INITIAL_POSE_CONFLICT")
        self.assertEqual(self.store.list_assemblies(), [])

        free_definition = self._definition()
        free_definition["instances"][0].pop("grounded")
        free_definition["instances"][0]["initial_pose"] = {"translation": [0, 0, 0]}
        free_definition["instances"][1]["initial_pose"] = {"translation": [20, 30, 40]}
        ambiguous = self.assemblies.apply(
            assembly_id="invalid_poses",
            definition=free_definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertTrue(ambiguous.is_error)
        self.assertEqual(ambiguous.data["code"], "INITIAL_POSE_CONFLICT")

    def test_aligned_mate_and_invalid_mate_references_are_handled_transactionally(self) -> None:
        self._create_two_parts()
        aligned_definition = self._definition()
        aligned_definition["mates"][0]["orientation"] = "aligned"
        aligned = self.assemblies.apply(
            assembly_id="aligned_fixture",
            definition=aligned_definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertFalse(aligned.is_error, aligned.data)
        self.assertEqual(aligned.data["instances"][1]["resolved_pose"]["z_axis"], [0.0, 0.0, -1.0])

        missing_definition = self._definition()
        missing_definition["mates"][0]["between"][1]["connector"] = "missing"
        missing = self.assemblies.apply(
            assembly_id="missing_connector_fixture",
            definition=missing_definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )
        self.assertTrue(missing.is_error)
        self.assertEqual(missing.data["code"], "CONNECTOR_NOT_FOUND")
        self.assertEqual([assembly.assembly_id.value for assembly in self.store.list_assemblies()], ["aligned_fixture"])

    def test_conflicting_grounded_placements_do_not_commit_an_assembly_revision(self) -> None:
        self._create_two_parts()
        definition = self._definition()
        definition["instances"][1]["grounded"] = True
        result = self.assemblies.apply(
            assembly_id="conflicting_ground",
            definition=definition,
            changes=None,
            base_revision=None,
            requirements=None,
            render={"views": []},
        )

        self.assertTrue(result.is_error)
        self.assertEqual(result.data["code"], "MATE_UNSATISFIABLE")
        self.assertEqual(self.store.list_assemblies(), [])
