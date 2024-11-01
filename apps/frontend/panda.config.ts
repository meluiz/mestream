import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	watch: true,
	minify: true,
	preflight: true,
	gitignore: true,
	outdir: "pandacss",
	jsxFramework: "react",
	presets: ["@mestream/panda-preset"],
	include: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
	hash: {
		cssVar: false,
		className: true,
	},
});
