// @ts-check

import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import svelte from "@astrojs/svelte"
import { resolve } from "node:path"
const __dirname = new URL(".", import.meta.url).pathname

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    integrations: [mdx(), svelte()],
    vite: {
      resolve: {
        alias: {
          "@": resolve(__dirname, "src"),
        },
      },
      ssr: {
        noExternal: ["@acab/reset.css"],
      },
    },
  },
)
