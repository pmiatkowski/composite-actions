import {defineConfig} from "rolldown";
import { builtinModules } from "module";

export default defineConfig([
  {
    input: "actions/ai-reviewer/src/use-ai-review.js",
    output: {
      file: "actions/ai-reviewer/dist/use-ai-review.js",
      format: "cjs",
      inlineDynamicImports: true,
      minify: true,
    },
    platform: "node",
    external: [], // Only exclude Node.js built-in modules
  },
]);