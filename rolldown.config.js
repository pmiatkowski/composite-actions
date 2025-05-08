import {defineConfig} from "rolldown";

export default defineConfig([
  {
    input: "actions/ai-reviewer/src/use-ai-review.js",
    output: {
      file: "dist/use-ai-review.js",
      format: "esm",
    },
    external: ["@google/genai"],
    platform: "node",
  },
//   {
//     input: "actions/ai-jsdoc/src/use-ai-jsdoc.js",
//     output: {
//       file: "dist/use-ai-jsdoc.js",
//       format: "cjs",
//     },
//     external: ["@google/genai"],
//     platform: "node",
//   }
]);