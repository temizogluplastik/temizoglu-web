import { defineConfig } from 'astro/config';

// https://astro.build/config
// Tailwind, PostCSS uzerinden islenir (postcss.config.mjs). Astro/Vite bunu
// yerlesik olarak destekler; legacy @astrojs/tailwind entegrasyonuna gerek yok.
export default defineConfig({
  site: 'https://temizogluplastik.com',
});
