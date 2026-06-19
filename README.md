# My APIs Template

Create a polished "how to work with me" page styled like API documentation.

This template is adapted from Mona's APIs. It is intentionally static, simple, and easy to personalize: edit one Astro page, replace the portrait, and publish to GitHub Pages.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4323`.

## Customize

Most content lives in `src/pages/index.astro` near the top of the file.

Start with:

- `profile` for name, role, links, and location
- `bio` for the intro section
- `capabilities`, `defaults`, `limitations`, and `patching` for the spec sheet
- `trust` for the Authentication section
- `endpoints` for concrete collaboration patterns
- `channels` and `comms` for communication preferences
- `spotlight` for optional writing, talks, projects, or press

Replace `public/portrait.jpg` with your own image. Replace `public/favicon.png` with your own favicon if you want one.

## Publish To GitHub Pages

1. Create a new public GitHub repository from this template.
2. In GitHub, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. If your repo is a project site, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/YOUR_REPOSITORY_NAME',
  integrations: [tailwind()],
});
```

5. Push to `main`. The included workflow publishes `dist/` to GitHub Pages.

## Build

```bash
npm run build
npm run preview
```

## Notes

- This template does not include auth, analytics, or cloud-specific deployment config.
- Keep the page human. Short, specific, plain-language copy works best.
