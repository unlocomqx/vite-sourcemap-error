/**
 * @type {import('vite').UserConfig}
 */
const svelte = require("@sveltejs/vite-plugin-svelte");
const {defineConfig} = require("vite");

module.exports = defineConfig(({_, mode}) => {
  const isProduction = mode === "production";
  return {
    resolve: {
      alias: {
        "smui-theme": "smui-theme.scss",
      }
    },
    plugins: [
      svelte(),
    ],
    build: {
      minify: isProduction
    },
    clearScreen: false,
  };
});
