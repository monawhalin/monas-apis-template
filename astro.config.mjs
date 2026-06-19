import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://monawhalin.github.io',
  base: '/monas-apis-template',
  integrations: [tailwind()],
  server: {
    port: 4323,
    host: true,
  },
});
