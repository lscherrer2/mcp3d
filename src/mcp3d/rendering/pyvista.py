"""Shaded Build123d rendering through the PyVista adapter."""

from __future__ import annotations

from io import BytesIO
from typing import Any

from ..models import RenderedImage, Revision


def render_pyvista_views(revision: Revision, views: list[str]) -> list[RenderedImage]:
    """Render a tessellated B-rep with shaded faces and feature edges."""
    import numpy as np
    import pyvista as pv

    box = revision.shape.bounding_box()
    maximum_dimension = max(box.size.X, box.size.Y, box.size.Z)
    tolerance = min(max(maximum_dimension / 500, 0.05), 0.5)
    vertices, triangles = revision.shape.tessellate(tolerance)
    points = np.asarray([(vertex.X, vertex.Y, vertex.Z) for vertex in vertices], dtype=np.float64)
    faces = np.asarray([[3, *triangle] for triangle in triangles], dtype=np.int64).ravel()
    mesh = pv.PolyData(points, faces, deep=True)
    edges = mesh.extract_feature_edges(
        boundary_edges=True,
        non_manifold_edges=True,
        feature_edges=True,
        manifold_edges=False,
        feature_angle=30,
    )
    images: list[RenderedImage] = []
    for view in views:
        plotter = pv.Plotter(off_screen=True, window_size=(1024, 768))
        buffer = BytesIO()
        try:
            plotter.set_background("white")
            plotter.add_mesh(
                mesh,
                color="#c7d7e8",
                smooth_shading=True,
                ambient=0.28,
                diffuse=0.75,
                specular=0.08,
            )
            plotter.add_mesh(edges, color="#1d2730", line_width=1.2)
            set_camera(plotter, mesh, view)
            plotter.screenshot(buffer, transparent_background=False, return_img=False)
        finally:
            plotter.close()
        images.append(RenderedImage(view, buffer.getvalue()))
    return images


def set_camera(plotter: Any, mesh: Any, view: str) -> None:
    """Set a stable orthographic CAD camera for a canonical view name."""
    import numpy as np

    directions = {
        "isometric": ((1, -1, 1), (0, 0, 1)),
        "top": ((0, 0, 1), (0, 1, 0)),
        "front": ((0, -1, 0), (0, 0, 1)),
        "right": ((1, 0, 0), (0, 0, 1)),
    }
    direction, requested_up = directions[view]
    direction = np.asarray(direction, dtype=float)
    direction /= np.linalg.norm(direction)
    requested_up = np.asarray(requested_up, dtype=float)
    right = np.cross(direction, requested_up)
    right /= np.linalg.norm(right)
    up = np.cross(right, direction)
    up /= np.linalg.norm(up)
    center = np.asarray(mesh.center)
    span = max(mesh.bounds[1] - mesh.bounds[0], mesh.bounds[3] - mesh.bounds[2], mesh.bounds[5] - mesh.bounds[4])
    plotter.enable_parallel_projection()
    plotter.camera.position = center + direction * span * 3
    plotter.camera.focal_point = center
    plotter.camera.up = up
    plotter.camera.parallel_scale = span * 1.25
    plotter.reset_camera_clipping_range()
