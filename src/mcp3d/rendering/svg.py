"""Portable technical and labelled-sketch SVG/PNG rendering."""

from __future__ import annotations

import html
from io import BytesIO
import re
from typing import Any

from build123d import ExportSVG, LineType, Unit
import resvg_py

from ..models import RenderedImage, Revision, SketchRecord


def render_technical_views(shape: Any, views: list[str]) -> list[RenderedImage]:
    """Render deterministic technical projections when PyVista is unavailable."""
    images = []
    for view in views:
        images.append(RenderedImage(view, rasterize_svg(part_svg(shape, view))))
    return images


def render_sketch(revision: Revision, sketch: SketchRecord) -> RenderedImage:
    """Render a plane-normal technical image with solver/dimension annotations."""
    exporter = ExportSVG(unit=Unit.MM, margin=3)
    if sketch.external:
        exporter.add_layer("external", line_type=LineType.DASHED)
        for edge in sketch.external.values():
            exporter.add_shape(edge, "external")
    if sketch.entities:
        exporter.add_layer("geometry")
        for edge in sketch.entities.values():
            exporter.add_shape(edge, "geometry")
    if sketch.profile is not None:
        exporter.add_layer("profile")
        exporter.add_shape(sketch.plane.to_local_coords(sketch.profile), "profile")
    document = annotate_sketch_svg(svg_document(exporter), sketch)
    return RenderedImage(f"sketch:{sketch.identifier}", rasterize_svg(document))


def annotate_sketch_svg(document: str, sketch: SketchRecord) -> str:
    """Overlay upright, human/vision-readable evidence onto Build123d SVG output."""
    match = re.search(r'viewBox="([^\"]+)"', document)
    if match is None:
        return document
    min_x, min_y, width, height = (float(value) for value in match.group(1).split())
    status = sketch.solver.get("status") if sketch.solver else "explicit geometry"
    color = "#8b1e1e" if status == "conflicting" else "#155a2a" if status == "fully_constrained" else "#274c77"
    title = f"Sketch: {sketch.identifier}"
    status_text = f"Status: {status}"
    if sketch.solver:
        status_text += f" · DOF {sketch.solver['dof']} · residual {sketch.solver['max_normalized_residual']:g}× tol"
    annotation_height = 10.5 + max(0, len(sketch.dimension_labels) - 2) * 1.75
    label_lines = [(title, 1.8), (status_text, 1.4), *((label, 1.45) for label in sketch.dimension_labels)]
    annotation_width = max((len(text) * font_size * 0.75 for text, font_size in label_lines), default=0.0) + 3.0
    expanded_min_y = min_y - annotation_height
    expanded_width, expanded_height = max(width + 3.0, annotation_width), height + annotation_height
    document = re.sub(
        r'<svg width="[^"]+" height="[^"]+" viewBox="[^"]+"',
        f'<svg width="{expanded_width:g}mm" height="{expanded_height:g}mm" viewBox="{min_x:g} {expanded_min_y:g} {expanded_width:g} {expanded_height:g}"',
        document,
        count=1,
    )
    text_items = [
        f'<text x="{min_x + 1.2:g}" y="{expanded_min_y + 2.3:g}" font-size="1.8" font-weight="bold">{html.escape(title)}</text>',
        f'<text x="{min_x + 1.2:g}" y="{expanded_min_y + 4.5:g}" font-size="1.4">{html.escape(status_text)}</text>',
    ]
    legend_y = expanded_min_y + 6.4
    for label in sketch.dimension_labels:
        text_items.append(f'<text x="{min_x + 1.2:g}" y="{legend_y:g}" font-size="1.45">{html.escape(label)}</text>')
        legend_y += 1.75
    for entity_id, edge in sketch.entities.items():
        center = edge.center()
        label_x, label_y = center.X + 0.8, -center.Y - 0.8
        if getattr(edge.geom_type, "name", str(edge.geom_type)).upper() == "CIRCLE":
            bounds = edge.bounding_box()
            label_x, label_y = bounds.max.X + 0.8, -bounds.max.Y - 0.8
        text_items.append(f'<text x="{label_x:g}" y="{label_y:g}" font-size="1.45" fill="#0b3d67">{html.escape(entity_id)}</text>')
    for point_id, point in sketch.points.items():
        text_items.append(
            f'<circle cx="{point[0]:g}" cy="{-point[1]:g}" r="0.3" fill="#b34100"/>'
            f'<text x="{point[0] + 0.55:g}" y="{-point[1] - 0.55:g}" font-size="1.2" fill="#b34100">{html.escape(point_id)}</text>'
        )
    overlay = f'<g id="mcp3d-annotations" fill="{color}" font-family="sans-serif">{"".join(text_items)}</g>'
    return document.replace("</svg>", f"  {overlay}\n</svg>")


def rasterize_svg(document: str) -> bytes:
    """Rasterize an SVG document in memory with the bundled renderer."""
    return resvg_py.svg_to_bytes(
        svg_string=document,
        width=1024,
        dpi=96,
        background="#ffffff",
        skip_system_fonts=False,
    )


def part_svg(shape: Any, view: str) -> str:
    """Build an orthographic SVG document with visible and hidden geometry."""
    directions = {
        "isometric": ((1, -1, 1), (0, 0, 1)),
        "top": ((0, 0, 1), (0, 1, 0)),
        "front": ((0, -1, 0), (0, 0, 1)),
        "right": ((1, 0, 0), (0, 0, 1)),
    }
    box = shape.bounding_box()
    center, span = box.center(), max(box.size.X, box.size.Y, box.size.Z) * 3
    direction, up = directions[view]
    center_values = (center.X, center.Y, center.Z)
    origin = tuple(center_values[index] + direction[index] * span for index in range(3))
    visible, hidden = shape.project_to_viewport(origin, viewport_up=up, look_at=center)
    exporter = ExportSVG(unit=Unit.MM, margin=2)
    exporter.add_layer("visible")
    exporter.add_shape(visible, "visible")
    if hidden:
        exporter.add_layer("hidden", line_type=LineType.DASHED)
        exporter.add_shape(hidden, "hidden")
    return svg_document(exporter)


def svg_document(exporter: ExportSVG) -> str:
    """Serialize Build123d SVG output without creating a temporary file."""
    buffer = BytesIO()
    exporter.write(buffer)
    return buffer.getvalue().decode("utf-8")
