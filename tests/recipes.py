"""Reusable recipe fixtures for MCP, compiler, and application tests."""

FEATURE_GRAPH_RECIPE = {
    "units": "mm",
    "parameters": {"length": 100, "width": 60, "height": 6, "hole_diameter": 5.5},
    "operations": [
        {"id": "base", "kind": "box", "length": "$length", "width": "$width", "height": "$height"},
    ],
}


TANGENT_RELIEF_RECIPE = {
    "units": "mm",
    "parameters": {"length": 100, "width": 60, "height": 20, "tilt": 20, "radius": 6, "cut_depth": -30},
    "operations": [
        {"id": "base", "kind": "box", "length": "$length", "width": "$width", "height": "$height"},
        {
            "id": "relief_plane",
            "kind": "datum_plane",
            "definition": {"kind": "rotate_about", "support": "base.top_face", "axis": "base.edge.x_min", "angle": "$tilt"},
        },
        {
            "id": "relief_sketch",
            "kind": "sketch",
            "plane": "relief_plane",
            "external": [{"id": "projected_base_edge", "source": "base.edge.x_min"}],
            "geometry": [
                {"id": "guide_a", "kind": "line", "start": [0, 0], "end": [40, 0]},
                {"id": "guide_b", "kind": "line", "start": [40, 0], "end": [40, 40]},
                {
                    "id": "blend",
                    "kind": "tangent_arc",
                    "guides": ["guide_a", "guide_b"],
                    "radius": "$radius",
                    "solution": {"span": "short"},
                },
            ],
            "profile": {
                "kind": "path",
                "segments": [
                    {"kind": "line", "start": [0, 0], "end": {"ref": "blend.start"}},
                    {"kind": "entity", "source": "blend"},
                    {"kind": "line", "start": {"ref": "blend.end"}, "end": [40, 40]},
                    {"kind": "line", "start": [40, 40], "end": [0, 0]},
                ],
            },
        },
        {"id": "relief_cut", "kind": "extrude", "sketch": "relief_sketch", "amount": "$cut_depth", "operation": "cut"},
    ],
}
