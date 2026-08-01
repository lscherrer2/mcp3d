import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../src/mcp3d/dashboard/static",
    emptyOutDir: true,
  },
});
