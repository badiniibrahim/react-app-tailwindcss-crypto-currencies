import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: { manifest: true, outDir: "./dist" },
    define: {
      "process.env": env,
    },
    optimizeDeps: {
      exclude: ["js-big-decimal"],
    },
    plugins: [react()],
  };
});
