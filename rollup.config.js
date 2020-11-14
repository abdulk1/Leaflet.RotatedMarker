import buble from "@rollup/plugin-buble";
import { terser } from "rollup-plugin-terser";
export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "esm",
    },
    plugins: [buble(), terser()],
  },
];
