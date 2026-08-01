"""Assembly package.

Only `Frame` is re-exported here so part build models can depend on its small,
pure value type without pulling the assembly solver back into the CAD compiler.
"""

from .frames import Frame


__all__ = ["Frame"]
