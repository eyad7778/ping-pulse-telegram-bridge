// @lovable.dev/vite-tanstack-config already includes tanstackStart, react, tailwindcss,
// tsconfig paths, and nitro (build-only) — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
