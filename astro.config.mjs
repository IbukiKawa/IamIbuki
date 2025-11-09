// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://main.d1d7i8gxj6sut0.amplifyapp.com/",
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});