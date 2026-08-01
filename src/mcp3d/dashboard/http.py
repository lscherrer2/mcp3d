"""Localhost-only HTTP adapter for the in-memory CAD session dashboard."""

from __future__ import annotations

from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import mimetypes
import os
from pathlib import Path
import sys
from threading import Thread
from typing import Any
from urllib.parse import unquote, urlsplit

from .projection import DashboardProjection


class DashboardServer:
    """Serve the bundled React observer and its session-local read API."""

    def __init__(self, projection: DashboardProjection, *, host: str = "127.0.0.1", port: int = 8765) -> None:
        self.projection = projection
        self.host = host
        self.port = port
        self._httpd: ThreadingHTTPServer | None = None
        self._thread: Thread | None = None

    @property
    def url(self) -> str:
        return f"http://{self.host}:{self.port}"

    def start(self) -> "DashboardServer":
        """Start the observer in a daemon thread and return its resolved URL."""
        if self._httpd is not None:
            return self
        server = ThreadingHTTPServer((self.host, self.port), self._handler())
        self._httpd = server
        self.port = int(server.server_address[1])
        self._thread = Thread(target=server.serve_forever, name="mcp3d-dashboard", daemon=True)
        self._thread.start()
        return self

    def close(self) -> None:
        """Stop the observer when the stdio server exits or a test completes."""
        if self._httpd is None:
            return
        self._httpd.shutdown()
        self._httpd.server_close()
        if self._thread is not None:
            self._thread.join(timeout=2)
        self._httpd = None
        self._thread = None

    def _handler(self) -> type[BaseHTTPRequestHandler]:
        projection, static_root = self.projection, Path(__file__).with_name("static").resolve()

        class DashboardRequestHandler(BaseHTTPRequestHandler):
            def do_GET(self) -> None:  # noqa: N802
                path = unquote(urlsplit(self.path).path)
                if path == "/api/snapshot":
                    self._json(projection.snapshot())
                    return
                if path.startswith("/api/images/"):
                    self._image(path.removeprefix("/api/images/"))
                    return
                if path.startswith("/api/meshes/"):
                    self._mesh(path.removeprefix("/api/meshes/"))
                    return
                self._static(path)

            def _json(self, payload: dict[str, Any]) -> None:
                body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def _image(self, image_id: str) -> None:
                body = projection.image(image_id)
                if body is None:
                    self.send_error(HTTPStatus.NOT_FOUND, "This in-memory render has expired.")
                    return
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", "image/png")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def _mesh(self, mesh_id: str) -> None:
                body = projection.mesh(mesh_id)
                if body is None:
                    self.send_error(HTTPStatus.NOT_FOUND, "This in-memory mesh has expired.")
                    return
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", "application/vnd.mcp3d.mesh")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def _static(self, path: str) -> None:
                relative = "index.html" if path in {"", "/"} else path.lstrip("/")
                candidate = (static_root / relative).resolve()
                try:
                    candidate.relative_to(static_root)
                except ValueError:
                    self.send_error(HTTPStatus.NOT_FOUND)
                    return
                if not candidate.is_file():
                    self.send_error(HTTPStatus.NOT_FOUND)
                    return
                body = candidate.read_bytes()
                mime_type = mimetypes.guess_type(candidate.name)[0] or "application/octet-stream"
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", mime_type)
                self.send_header("Cache-Control", "no-cache" if candidate.name == "index.html" else "public, max-age=3600")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def log_message(self, format: str, *args: Any) -> None:
                """Never write HTTP access logs to the MCP stdio stream."""

        return DashboardRequestHandler


def start_dashboard_from_environment(projection: DashboardProjection) -> DashboardServer | None:
    """Start the local observer unless explicitly disabled with port 0/off."""
    setting = os.environ.get("MCP3D_DASHBOARD_PORT", "8765").strip().lower()
    if setting in {"0", "off", "false", "disabled"}:
        return None
    try:
        port = int(setting)
        if not 1 <= port <= 65535:
            raise ValueError
    except ValueError:
        print("mcp3d dashboard disabled: MCP3D_DASHBOARD_PORT must be 1-65535 or 0/off.", file=sys.stderr)
        return None
    try:
        dashboard = DashboardServer(projection, port=port).start()
    except OSError as error:
        print(f"mcp3d dashboard unavailable on 127.0.0.1:{port}: {error}", file=sys.stderr)
        return None
    print(f"mcp3d dashboard: {dashboard.url}", file=sys.stderr)
    return dashboard
