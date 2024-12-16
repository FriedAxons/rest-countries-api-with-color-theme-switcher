import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rest-countries-api-with-color-theme-switcher/",
  build: {
    outDir: "dist",
  },
});
