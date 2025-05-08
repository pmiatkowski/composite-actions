import {defineConfig} from "rolldown";

export default defineConfig([
  {
    input: "actions/ai-reviewer/src/index.js",
    output: {
      file: "actions/ai-reviewer/dist/index.js",
      format: "es",
      inlineDynamicImports: true,
      minify: true,
    },
    platform: "node",
    external: [],
  },
  {
    input: "actions/ai-sync-docs/src/index.js",
    output: {
      file: "actions/ai-sync-docs/dist/index.js",
      format: "es",
      inlineDynamicImports: true,
      minify: true,
    },
    platform: "node",
    external: [],
  },
]);