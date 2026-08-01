# mcp3d

A local MCP server for parametric, manufacturing-focused CAD workflows.

The server uses [FastMCP](https://gofastmcp.com/) for the Model Context
Protocol and [Build123d](https://build123d.readthedocs.io/) as its modeling
engine.

## Run

```bash
uv run mcp3d
```

It communicates through standard input/output, so diagnostic logging must
always go to standard error.

## Model-facing MCP documentation

The runtime documentation is deliberately more complete than this README:

- Server instructions explain the create → inspect → revise → export loop.
- Each MCP tool has a field-level description with valid operation shapes,
  ordering rules, revision semantics, diagnostics, and repair guidance.
- The `mcp3d://guide` MCP resource supplies the complete model guide, including
  constrained-sketch and feature-graph examples. An agent should read it before
  it uses an unfamiliar feature type.

The authoritative source for the runtime documentation is
[`tool_docs.py`](src/mcp3d/tool_docs.py). This keeps the model-facing guidance
versioned with the actual server implementation.

- `part.apply` creates or revises an immutable single-part revision. A server
  session can hold many independent `part_id` histories.
- `part.analyze` returns structured checks and PNG orthographic/isometric views.
- `part.export` writes STEP and/or STL artifacts.
- `session.list_parts` lists the current independent part heads.
- `session.preview_parts` renders selected independent parts side-by-side for
  comparison only; it does not create assembly or placement state.
- `assembly.apply` creates a revision-pinned arrangement of part occurrences
  using named connector frames, grounding, and rigid fastened mates.
- `assembly.analyze` inspects a saved assembly revision and reports solved
  poses, mate residuals, free components, and exact checks.
- `session.list_assemblies` lists the current assembly heads.

Views use shaded PyVista/VTK rendering with feature edges. If a local machine
cannot create an off-screen OpenGL context, the server automatically falls back
to its technical SVG projection rasterized as PNG and reports the selected
renderer in the tool result.

For known headless environments where VTK may abort before it can raise an
exception, run with `MCP3D_RENDERER=technical` to force the portable technical
renderer. Normal local use remains PyVista-first.

`part.apply` returns one isometric image by default. Use
`render: {"views":["top","front"]}` to request exactly those canonical views,
or `render: {"views":[]}` when structured checks are sufficient. Use
`part.analyze` for additional views after the initial revision.

## Units

Recipes may declare `units` as `mm`, `cm`, `m`, or `in` (`inch` and `inches`
are aliases). All dimensional recipe inputs use that unit; angles remain in
degrees, while direction vectors and counts are unitless. Geometry is evaluated
in millimeters internally. Reports provide declared-unit values in
`summary.bounding_box` and `summary.volume`, while retaining explicit
millimeter fields for downstream tooling.

## Assemblies

Part recipes may expose reusable part-local `mate_connectors`. A connector is
an explicit orthonormal frame or a frame based on a named part plane. An
assembly then references fixed part revisions through occurrence IDs, grounds
one occurrence per rigidly connected component, and joins connectors with
`fastened` mates. A successful assembly report contains the pinned part
revisions, resolved poses, and exact mate residuals.

The first assembly interface intentionally supports rigid placement only.
Revolute, slider, cylindrical, planar, and ball mates—and general numerical
closed-loop solving—remain future additions. `session.preview_parts` remains a
separate display-only option when no assembly relationship is intended.

## Local session dashboard

When `mcp3d` starts, it also serves a local React dashboard at
[`http://127.0.0.1:8765`](http://127.0.0.1:8765). It is a read-only observer
for the active MCP process: the main panel shows the latest retained render and
the sidebar streams apply, revision, inspection, export, and error milestones.
It displays observable CAD activity, not private model reasoning.

All dashboard state is bounded and memory-only: the latest 80 events and 16
render images are retained for the life of the server process, then discarded.
No dashboard images are written to `.mcp3d`.

Set `MCP3D_DASHBOARD_PORT` to choose a different local port, or to `0`/`off`
to disable the dashboard:

```bash
MCP3D_DASHBOARD_PORT=9000 uv run mcp3d
MCP3D_DASHBOARD_PORT=off uv run mcp3d
```

## Implementation architecture

The MCP adapter is deliberately thin. The internal dependency direction is:

```text
server (FastMCP) → application (revisions) → cad / rendering / artifacts
```

- `application/` owns immutable revision creation, transactional updates, and
  in-memory local state.
- `cad/` owns Build123d compilation, its private build context, sketches,
  selectors, datum planes, and feature operations.
- `rendering/` owns PyVista, technical SVG fallback, and labelled sketch
  evidence; it returns neutral in-memory image bytes rather than FastMCP
  objects or filesystem paths.
- `server.py` is the only production module that creates FastMCP `ToolResult`
  and image content blocks.

Rendering and sketch evidence are ephemeral: they are encoded directly into
the MCP response and do not create files in `.mcp3d`. The server creates
`.mcp3d/artifacts/<part>/r<revision>/` only when `part.export` is explicitly
called, and that directory contains the requested STEP and/or STL deliverables.

## Feature graph

`part.apply` also accepts a recipe with named `operations`. The implemented
workflow is:

```text
box → datum planes → sketches / constraint graphs → solid features
    → finishing, shell/draft, and replicated feature tools
```

Sketch geometry is authored in its support plane's local 2D coordinates. A
`tangent_arc` requires two named line guides, a radius, and a deterministic
`solution.span` (`"short"` or `"long"`). Profiles can be polygons or paths
that incorporate named sketch entities. Request a sketch diagnostic with:

```json
{"kind": "render_sketch", "sketch": "relief_sketch"}
```

### Constraint graphs

Alongside direct `line` and deterministic `tangent_arc` geometry, a sketch can
contain a `constraint_graph`. It owns named `point`, `line`, and `circle`
entities; the solver materializes its lines/circles before ordinary sketch
geometry is built. Coordinates are in the sketch plane's local declared units.

```json
{
  "geometry": [
    {"id": "p0", "kind": "point", "position": [0, 0]},
    {"id": "p1", "kind": "point", "position": [40, 3]},
    {"id": "bottom", "kind": "line", "start": "p0", "end": "p1"}
  ],
  "constraints": [
    {"id": "origin", "kind": "fixed", "target": "p0"},
    {"id": "horizontal", "kind": "horizontal", "target": "bottom"},
    {"id": "width", "kind": "distance", "a": "p0", "b": "p1", "value": 40}
  ]
}
```

Supported relations are `fixed`, `coincident`, `horizontal`, `vertical`,
`parallel`, `perpendicular`, `angle`, `distance`, `equal_length`, `radius`,
`diameter`, `equal_radius`, `midpoint`, and branch-explicit
`tangent_line_circle`. A relation can refer to a point directly, a line's
`line.start`/`line.end`, a circle's `circle.center`, or a projected external
line where appropriate. The initial positions select the local solution
branch. `require_fully_constrained: true` rejects a profile with remaining
local degrees of freedom.

The revision report exposes solver status, local DOF/Jacobian rank, residuals
per constraint, locally redundant constraints, and suspected conflict IDs.
`render_sketch` returns a labelled image with entity/point names, dimensions,
and solver status; it is the intended visual review loop before export.

### Solid operations

The feature graph supports:

- Base and reference: `box`, `datum_plane` (`explicit`, `offset_from_face`,
  `rotate_about`), `sketch`
- Profile features: `extrude`, `revolve`, `loft`, `sweep`
- Finishing: `fillet`, `chamfer`, `shell`, `draft`
- Feature-tool replication: `linear_pattern`, `polar_pattern`

`extrude`, `revolve`, `loft`, and `sweep` generate named feature tools with
an `operation` of `"add"` or `"cut"`. Patterns copy that tool—not the whole
current part—and their `count` includes the original source. `sweep.path` is
`"sketch_id.entity_id"`; `loft.sections` is a list of closed-profile sketch
ids.

Finishing operations use geometric queries evaluated at the exact operation,
never B-rep edge indexes. A selector requires an expected cardinality, for
example the four outer top edges of a box:

```json
{
  "geom_type": "line",
  "at_extreme": {"axis": "z", "which": "max"},
  "expect": 4
}
```

Selectors also support `parallel_to` for edges, `normal_to` for faces, and
`at_extreme` with `mode: "touches"` when containment in the extreme plane is
not required. A mismatch fails explicitly as `SELECTOR_EMPTY` or
`SELECTOR_AMBIGUOUS` rather than silently choosing a different edge.
