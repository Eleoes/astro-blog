import { defineConfig } from 'astro/config';
// manually import and configure UI framework components such as React, Svelte, etc., Tailwind here.
// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
});