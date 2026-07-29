"""Model-facing documentation for the MCP interface.

Keep this material next to the server rather than only in a repository README:
MCP clients receive tool descriptions and can read the guide resource at run
time, which is where an agent needs the information.
"""

from textwrap import dedent


def _doc(value: str) -> str:
    return dedent(value).strip()


SERVER_INSTRUCTIONS = _doc(
    """
    Design one manufacturing-ready CAD part at a time, in millimetres. Prefer
    the v1 feature graph (`recipe.operations`) for new work. Treat every call
    as a revisioned engineering decision: model, inspect the returned images
    and exact checks, repair the recipe if needed, and export only a verified
    revision.

    Start a new part with `part.apply(part_id, recipe=...)`. Revise it with the
    head revision number and either a new complete recipe or JSON Patch. Build
    from named, semantically meaningful operations; never rely on B-rep edge
    indexes. For manufacturing profiles, use `require_fully_constrained: true`
    and inspect `render_sketch` before moving on. Choose exact assertions when
    a requirement is measurable. `part.analyze` is the normal visual/metric
    review loop and `part.export` writes only the requested immutable revision.

    The full field reference, examples, operation ordering rules, and repair
    guidance are available as the `mcp3d://guide` resource. Read it before
    authoring an unfamiliar feature type.
    """
)


APPLY_DESCRIPTION = _doc(
    """
    Create a new immutable revision or revise the head revision of one
    manufacturing CAD part. This is the primary modeling tool.

    ALWAYS use the v1 `recipe.operations` feature graph for new designs unless
    you intentionally need the legacy box/through-hole recipe. All dimensions
    are millimetres. A successful result includes the solid summary, exact
    checks, sketch solver diagnostics, named sketch state, and the requested
    rendered views.

    CREATE A PART
      - Provide a new, stable `part_id` and a complete `recipe`.
      - Do not provide `base_revision` or `patch`.
      - A preferred recipe begins `{ "units":"mm", "parameters": {...},
        "operations":[...] }`.

    REVISE A PART
      - Read the latest returned revision number. Supply it as `base_revision`.
      - Provide exactly one of:
        1. a replacement complete `recipe`, or
        2. RFC 6902-style JSON Patch `patch`, currently only
           `{ "op":"replace", "path":"/...", "value":... }`.
      - Prefer parameters for dimensions, then patch a parameter value (for
        example `/parameters/boss_width`) rather than patching many geometry
        coordinates. A failed revision is transactional: the previous valid
        revision remains the head.

    RENDER RESPONSE
      - `render` controls only the inspection images returned by THIS call; it
        is not saved in the recipe or revision. Omit it for one economical
        isometric image: `{"render":{"views":["isometric"]}}` is the default.
      - Supply exactly `{"views":[...]}`. Supported canonical views are
        `"isometric"`, `"top"`, `"front"`, and `"right"`; the server returns
        only those images, in that order, after removing duplicates.
      - Use `{"views":[]}` when exact checks and the structured report are
        enough. This starts no renderer and returns `views:[]` with
        `renderer:"none"`.
      - For extra orthographic views after a topology-changing edit, use
        `part.analyze` rather than routinely returning four images on apply.
        Custom cameras are not supported yet; use the canonical views.

    RECIPE CONTRACT
      - `units` must be `"mm"`. Numeric fields may be a number or `$name`,
        referring to `parameters.name`.
      - Put measurable acceptance criteria in `requirements`, for example
        `{"assertions":[{"kind":"solid_valid"}, {"kind":"bounding_box",
        "expected":[80,50,6]}]}`. Checks are returned after every apply; a
        failed check produces `needs_revision` without discarding valid geometry.
      - Every operation and sketch entity has a unique, durable `id`.
      - Operations are evaluated in array order. Begin with exactly one `box`
        solid. Datum planes and sketches may follow; solid features need an
        existing base. The final result must be exactly one valid solid.
      - Use names (`base.top_face`, `boss_sketch`, `hole_cut`) as references;
        never assume topology ordering or numeric edge identifiers.

    CORE OPERATION SHAPES
      - Base: `{id, kind:"box", length, width, height}`.
      - Datum plane: `{id, kind:"datum_plane", definition:{kind:"explicit",
        origin:[x,y,z], x_dir:[x,y,z], normal:[x,y,z]}}`, or `offset_from_face`
        with `{support:"base.top_face", offset}`, or `rotate_about` with
        `{support:"base.top_face", axis:"base.edge.x_min", angle}`.
      - Sketch: `{id, kind:"sketch", plane:"base.top_face"|"XY"|datum_id,
        geometry?, constraint_graph?, profile?, require_fully_constrained?}`.
        Geometry is authored in that plane's LOCAL 2D `[x,y]` coordinates.
      - Add/cut feature: `{id, kind:"extrude", sketch:sketch_id,
        amount:positive_or_negative_mm, operation:"add"|"cut"}`.
      - Other profile features: `revolve` adds `axis:"x"|"y"|"z"` or
        `{origin,direction}`, plus optional `angle`; `loft` uses
        `{sections:[closed_sketch_ids...], ruled?, operation}`; `sweep` uses
        `{section:closed_sketch_id, path:"path_sketch.path_entity",
        is_frenet?, operation}`.
      - Finishing: `fillet` needs `{radius, selector}`; `chamfer` needs
        `{length, length2?, selector}`; `shell` needs `{wall, openings}`;
        `draft` needs `{selector, neutral_plane, angle}`.
      - Patterns copy a prior EXTRUDE/REVOLVE/LOFT/SWEEP tool, not the full
        part. `linear_pattern` needs `{source, count, step:[dx,dy,dz]}` or
        `{source, count, direction:[x,y,z], spacing}`. `polar_pattern` needs
        `{source, count, center:[x,y,z], axis:[x,y,z], angle?}`. `count`
        includes the already-created source feature.

    SKETCHES AND CONSTRAINTS
      - Direct geometry supports `line` (`{id,kind:"line",start:[x,y],
        end:[x,y]}`) and deterministic `tangent_arc` with two named guides,
        a positive radius, and `solution:{span:"short"|"long"}`.
        To project a supported base edge into a sketch, use
        `external:[{id:"projected_edge",source:"base.edge.x_min"}]`; it can
        guide tangency and constraints but is not part of the profile unless
        you explicitly recreate the needed profile geometry.
      - A `constraint_graph` is the preferred way to create fully constrained
        production sketches. Define points before lines/circles. Points use
        `{id,kind:"point",position:[x,y]}`; lines reference point IDs; circles
        reference a center point and radius. Supported relations are `fixed`,
        `coincident`, `horizontal`, `vertical`, `parallel`, `perpendicular`,
        `angle`, `distance`, `equal_length`, `radius`, `diameter`,
        `equal_radius`, `midpoint`, and branch-explicit `tangent_line_circle`.
      - Constraint references: point IDs, `line.start`, `line.end`, and
        `circle.center` are valid point references. Relations usually use
        `target`, or `a` and `b`; distance/radius/diameter use `value`; angle
        uses `value_deg` (or `value`). Tangency needs `line`, `circle`, and
        side `"positive"` or `"negative"`.
      - A sketch `profile` must make one closed face: use
        `{kind:"polygon",points:[[x,y],...]}` or `{kind:"path",
        segments:[{kind:"entity",source:"line_or_circle_id"}, ...]}`. A path
        may also contain explicit line segments and endpoint refs such as
        `{ref:"blend.start"}`. An open profile cannot extrude/revolve/loft.
      - Set `require_fully_constrained:true` for a manufacturing-driving
        profile. If diagnostics report DOF > 0, add dimensions/relations or a
        fixed anchor before continuing. Initial positions deliberately choose
        the solver's local branch; they are not dimensions.

    SELECTORS FOR FINISHING
      Use a geometric selector with an explicit expected cardinality, never an
      edge index. Examples:
        `{geom_type:"line", at_extreme:{axis:"z",which:"max"}, expect:4}`
        selects four line edges wholly on the top extreme.
        `{normal_to:[0,0,1], at_extreme:{axis:"z",which:"max"}, expect:1}`
        selects one top planar face for a shell opening.
      `parallel_to` filters edges; `normal_to` filters faces;
      `at_extreme` accepts x/y/z and min/max. Add `mode:"touches"` only when
      an item merely touching—not lying in—the extreme plane is intended.
      `SELECTOR_EMPTY` and `SELECTOR_AMBIGUOUS` mean the selector must be
      repaired, not that the server guessed a different target.

    RELIABLE AGENT WORKFLOW
      1. Put recurring dimensions in `parameters`; give operations semantic IDs.
      2. Apply a small complete feature graph, with `solid_valid` and any exact
         bounding-box requirements in `requirements.assertions`.
      3. Inspect the economical default isometric apply image and each sketch
         solver report. Use
         `part.analyze` with `render_sketch` after nontrivial constraints and
         canonical part views after a topology-changing feature.
      4. On an error, use its `code`, `message`, `recovery`, and details to
         modify the minimal relevant recipe field, then submit a new revision.
      5. Export STEP for the CAD workflow and STL only when a mesh is needed.

    Read resource `mcp3d://guide` for complete examples before using an
    unfamiliar operation.
    """
)


ANALYZE_DESCRIPTION = _doc(
    """
    Inspect an existing revision without changing it. Use this after each
    nontrivial modeling step to give the model visual and exact evidence before
    it decides whether to revise.

    `part_id` is required. Omit `revision` to inspect the head, or provide an
    immutable revision number. `requests` is a list; combine any of:

      - `{kind:"render", views:["isometric","top","front","right"]}`
        for selected shaded/technical part views.
      - `{kind:"render_sketch", sketch:"sketch_id"}` for a plane-normal,
        labelled sketch image. It includes named geometry, points, declared
        dimensions, projected external geometry, solver status, DOF, and
        residual evidence.
      - `{kind:"assert", criteria:[...]}` for exact checks. Supported criteria
        are `{kind:"solid_valid"}`, `{kind:"bounding_box",
        expected:[x,y,z]}`, and legacy `{kind:"hole_count", expected:n}`.

    With no render request the server returns the four canonical part views.
    An explicit `{kind:"render", views:[]}` suppresses part images while
    preserving the structured report and any requested sketch images.
    The report includes valid-solid status, bounding box, volume, solver
    diagnostics, and the renderer actually used. A failed assertion means
    `needs_revision`; it does not alter the part. Use the measured `actual`
    values and visual evidence to make the next `part.apply` revision.
    """
)


EXPORT_DESCRIPTION = _doc(
    """
    Export an immutable existing part revision for downstream CAD/manufacturing
    work. `part_id` is required; omit `revision` for the head. `formats` is
    `["step"]`, `["stl"]`, or both (default: STEP).

    Export only after `part.apply`/`part.analyze` reports a valid single solid
    and the relevant dimensional/sketch evidence has been reviewed. The result
    returns exact local artifact paths. STEP preserves B-rep CAD geometry;
    STL is a tessellated manufacturing/printing mesh. Export never changes the
    revision and never regenerates a design.
    """
)


MODEL_GUIDE = _doc(
    """
    # mcp3d model guide

    This server creates one revisioned, manufacturable CAD part. It is a CAD
    feature graph, not a freeform mesh generator: each operation is named,
    ordered, inspectable, and exportable.

    ## The normal loop

    1. Create with `part.apply` using `units:"mm"`, named parameters, and a
       v1 `operations` graph.
    2. Read `status`, `summary`, checks, and each sketch's solver report.
    3. Inspect the default isometric image, or select `render:{views:[...]}`
       on apply when a specific orthographic view is needed. Request
       `render_sketch` for any important constrained sketch.
    4. Revise from the returned revision number until checks and images agree.
    5. Export verified STEP and, where needed, STL.

    Use semantic operation names such as `base`, `mounting_boss`,
    `mount_hole`, and `top_round`. Put dimensions likely to change in
    `parameters`, then patch only those values. Never select topology by index.

    ## Minimal feature-graph example

    ```json
    {
      "units": "mm",
      "parameters": {"length": 80, "width": 50, "height": 6},
      "operations": [
        {"id": "base", "kind": "box", "length": "$length", "width": "$width", "height": "$height"},
        {
          "id": "pocket_sketch", "kind": "sketch", "plane": "base.top_face",
          "profile": {"kind": "polygon", "points": [[20,15],[60,15],[60,35],[20,35]]}
        },
        {"id": "pocket", "kind": "extrude", "sketch": "pocket_sketch", "amount": -3, "operation": "cut"}
      ]
    }
    ```

    This is suitable for a simple shape. For production-critical geometry,
    replace unconstrained polygon points with a constraint graph and set
    `require_fully_constrained:true`.

    ## Fully constrained rectangle example

    ```json
    {
      "id": "boss_sketch", "kind": "sketch", "plane": "base.top_face",
      "require_fully_constrained": true,
      "constraint_graph": {
        "geometry": [
          {"id":"p0","kind":"point","position":[20,15]},
          {"id":"p1","kind":"point","position":[52,16]},
          {"id":"p2","kind":"point","position":[50,36]},
          {"id":"p3","kind":"point","position":[19,35]},
          {"id":"bottom","kind":"line","start":"p0","end":"p1"},
          {"id":"right","kind":"line","start":"p1","end":"p2"},
          {"id":"top","kind":"line","start":"p2","end":"p3"},
          {"id":"left","kind":"line","start":"p3","end":"p0"}
        ],
        "constraints": [
          {"id":"anchor","kind":"fixed","target":"p0"},
          {"id":"bottom_h","kind":"horizontal","target":"bottom"},
          {"id":"right_v","kind":"vertical","target":"right"},
          {"id":"top_h","kind":"horizontal","target":"top"},
          {"id":"left_v","kind":"vertical","target":"left"},
          {"id":"width","kind":"distance","a":"p0","b":"p1","value":30},
          {"id":"height","kind":"distance","a":"p1","b":"p2","value":20}
        ]
      },
      "profile": {"kind":"path","segments":[
        {"kind":"entity","source":"bottom"}, {"kind":"entity","source":"right"},
        {"kind":"entity","source":"top"}, {"kind":"entity","source":"left"}
      ]}
    }
    ```

    A fully constrained report has `status:"fully_constrained"` and `dof:0`.
    A report with remaining DOF is a prompt to add relations/dimensions, not a
    reason to trust the current seed coordinates. A conflicting graph reports
    the unsatisfied relation IDs and commits no revision.

    ## Feature reference

    - `box`: first and only base solid.
    - `datum_plane`: `explicit`, `offset_from_face`, or `rotate_about`; sketches
      use its local XY coordinates.
    - `sketch`: direct line/tangent-arc geometry and/or a constraint graph plus
      a closed `polygon` or `path` profile.
    - `extrude`: profile + signed amount; add/cut is explicit.
    - `revolve`: profile + an x/y/z or explicit axis + optional angle.
    - `loft`: two or more closed sketch profiles.
    - `sweep`: one profile and a named sketch curve path.
    - `fillet`, `chamfer`, `shell`, `draft`: use exact-cardinality geometric
      selectors at the operation where they are applied.
    - `linear_pattern`, `polar_pattern`: replicate a previously made feature
      tool; count includes the original tool.

    ## Robust selection and repair

    Select edges/faces from their geometry and location, for example:

    ```json
    {"geom_type":"line", "at_extreme":{"axis":"z","which":"max"}, "expect":4}
    ```

    If selection is ambiguous, narrow it with `parallel_to` (edge) or
    `normal_to` (face), retain `expect`, and inspect the part. Do not loosen
    `expect` merely to make an operation pass.

    Errors are designed as repair instructions. `OPEN_PROFILE` means repair the
    profile loop; `SKETCH_UNSATISFIED` means revise the listed constraints;
    `UNDER_CONSTRAINED_SKETCH` means add relations/dimensions; selector errors
    mean change the selector; `BUILD_FAILED` often means feature dimensions or
    topology are infeasible. The prior revision remains safe after every error.
    """
)
