import {defineConfig} from "rolldown";
import { builtinModules } from "module";
import path from "path";

export default defineConfig([
  {
    input: "actions/ai-reviewer/src/use-ai-review.js",
    output: {
      file: "actions/ai-reviewer/dist/use-ai-review.js",
      format: "esm"
    },
    platform: "node",
    external: [],
  },
]);