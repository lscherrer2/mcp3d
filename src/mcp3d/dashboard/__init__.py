"""Local browser dashboard adapters for the CAD session observer."""

from .http import DashboardServer, start_dashboard_from_environment
from .projection import DashboardProjection


__all__ = ["DashboardProjection", "DashboardServer", "start_dashboard_from_environment"]
