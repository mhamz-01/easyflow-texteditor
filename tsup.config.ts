import { defineConfig } from "tsup";
import sassPlugin from "esbuild-plugin-sass";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: [
    "react",
    "react-dom",
    "@tiptap/react",
    "@tiptap/core",
    "@tiptap/pm",
  ],
  esbuildPlugins: [sassPlugin()],
});
