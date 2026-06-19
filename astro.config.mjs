import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// For GitHub Pages project sites, set these before publishing:
// site: 'https://YOUR_GITHUB_USERNAME.github.io'
// base: '/YOUR_REPOSITORY_NAME'
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 4323,
    host: true,
  },
});
