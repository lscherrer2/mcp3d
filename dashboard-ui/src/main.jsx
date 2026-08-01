import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { InteractiveModel } from "./InteractiveModel";
import "./styles.css";

const POLL_INTERVAL_MS = 650;

function initialTheme() {
  const stored = window.localStorage.getItem("mcp3d-dashboard-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function dimensions(summary) {
  const values = summary?.bounding_box_mm;
  return Array.isArray(values) ? values.map((value) => `${value} mm`).join(" × ") : "Awaiting geometry";
}

function time(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date(value));
}

function label(value) {
  return value.replaceAll("_", " ");
}

function subject(event) {
  return event?.assembly_id ?? event?.part_id;
}

function Metric({ label: title, value }) {
  return <div className="metric"><span>{title}</span><strong>{value ?? "—"}</strong></div>;
}

function RenderPane({ event, selectedImage, setSelectedImage, theme, setTheme, connection }) {
  const images = event?.images ?? [];
  const image = selectedImage && images.some((item) => item.id === selectedImage.id) ? selectedImage : images[0];
  const mesh = event?.mesh;
  const summary = event?.details?.summary;

  return (
    <section className="viewer-panel" aria-label="Current part render">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Live viewport</p>
          <h1>{subject(event) ?? "No model selected"}</h1>
        </div>
        <div className="revision-mark">{event?.revision ? `r${event.revision}` : "IDLE"}</div>
      </div>
      <div className="viewport">
        <div className="viewport-corner top-left" />
        <div className="viewport-corner top-right" />
        <div className="viewport-corner bottom-left" />
        <div className="viewport-corner bottom-right" />
        {mesh ? (
          <InteractiveModel mesh={mesh} theme={theme} />
        ) : image ? (
          <img src={image.url} alt={`${image.name} view of ${subject(event)}`} />
        ) : (
          <div className="empty-viewport">
            <span className="empty-glyph">⌗</span>
            <p>Waiting for the first CAD action</p>
            <small>Apply a part or assembly revision and its inspection render will appear here.</small>
          </div>
        )}
      </div>
      <div className="viewer-footer">
        {mesh ? <div className="control-hint">Drag to orbit · right-drag to pan · scroll to zoom</div> : (
          <div className="view-tabs" aria-label="Available current renders">
            {images.map((item) => (
              <button key={item.id} className={image?.id === item.id ? "active" : ""} onClick={() => setSelectedImage(item)}>
                {item.name}
              </button>
            ))}
          </div>
        )}
        <div className="viewer-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>{theme === "dark" ? "Light" : "Dark"}
          </button>
          <div className="status-line"><span className="status-dot" /> {connection === "live" ? event?.details?.renderer ?? "observer ready" : connection}</div>
        </div>
      </div>
      <div className="metrics">
        <Metric label="Envelope" value={dimensions(summary)} />
        <Metric label="Volume" value={summary?.volume_mm3 != null ? `${summary.volume_mm3} mm³` : null} />
        <Metric label="Solid" value={summary ? (summary.valid_solid ? "Valid" : "Needs review") : null} />
        <Metric label="View" value={mesh ? "Interactive" : event?.details?.views?.length ?? 0} />
      </div>
    </section>
  );
}

function EventCard({ event, newest }) {
  const checks = event.details?.checks ?? [];
  const operations = event.details?.operations ?? [];
  const hasFailure = event.status === "error" || checks.some((check) => check.status === "fail");
  return (
    <article className={`event-card ${event.status} ${newest ? "newest" : ""}`}>
      <div className="event-spine"><span /></div>
      <div className="event-topline">
        <span className="event-kind">{event.action}</span>
        <time>{time(event.timestamp)}</time>
      </div>
      <h2>{label(event.phase)}</h2>
      <p>{event.message}</p>
      <div className="event-meta">
        <span>{subject(event) ?? "unassigned"}</span>
        {event.revision && <span>r{event.revision}</span>}
        <span className={hasFailure ? "pill error" : "pill"}>{event.status}</span>
      </div>
      {operations.length > 0 && (
        <div className="operation-row" aria-label="Operations in revision">
          {operations.slice(0, 5).map((operation) => <span key={`${operation.id}-${operation.kind}`}>{operation.id}</span>)}
          {operations.length > 5 && <span>+{operations.length - 5}</span>}
        </div>
      )}
      {checks.length > 0 && (
        <div className="checks">
          {checks.map((check) => <span key={check.id} className={check.status === "pass" ? "pass" : "fail"}>{check.status === "pass" ? "✓" : "!"} {check.kind}</span>)}
        </div>
      )}
      {event.details?.artifacts && <p className="artifact-note">CAD deliverables written</p>}
    </article>
  );
}

function ActivityRail({ events }) {
  return (
    <aside className="activity-rail" aria-label="CAD session activity">
      <header className="activity-heading">
        <div>
          <p className="eyebrow">Session trace</p>
          <h1>Actions & revisions</h1>
        </div>
        <span className="event-count">{events.length}</span>
      </header>
      <div className="trace-rule"><span /></div>
      <div className="event-list">
        {events.length ? events.map((event, index) => <EventCard key={event.id} event={event} newest={index === 0} />) : (
          <div className="empty-trace"><strong>No actions yet</strong><span>Tool calls will appear here as the CAD session progresses.</span></div>
        )}
      </div>
    </aside>
  );
}

function App() {
  const [snapshot, setSnapshot] = useState({ events: [], latest_render: null, generated_at: null });
  const [selectedImage, setSelectedImage] = useState(null);
  const [connection, setConnection] = useState("connecting");
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("mcp3d-dashboard-theme", theme);
  }, [theme]);

  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      try {
        const response = await fetch("/api/snapshot", { cache: "no-store" });
        if (!response.ok) throw new Error("dashboard response failed");
        const next = await response.json();
        if (!cancelled) {
          setSnapshot(next);
          setConnection("live");
        }
      } catch {
        if (!cancelled) setConnection("reconnecting");
      }
    }
    refresh();
    const interval = window.setInterval(refresh, POLL_INTERVAL_MS);
    return () => { cancelled = true; window.clearInterval(interval); };
  }, []);

  const latestRender = useMemo(() => snapshot.latest_render, [snapshot.latest_render]);
  return (
    <main className="dashboard-shell">
      <div className="workbench">
        <RenderPane
          event={latestRender}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          theme={theme}
          setTheme={setTheme}
          connection={connection}
        />
        <ActivityRail events={snapshot.events} />
      </div>
      <footer>Memory-only session trace · updates every {POLL_INTERVAL_MS} ms · renders expire with the session</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
