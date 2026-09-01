# Personal Academic Homepage

A minimal, single-page academic homepage for **Tianxiang Gao** (AI × Seismic Geophysics), built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide**.

Live: https://ZDDWLIG.github.io/academic-homepage/

## Editing content

All content lives in `data/` — edit these files and the page updates, no component changes needed:

- `data/profile.ts` — name, bio, links, research interests & directions
- `data/publications.ts` — papers
- `data/experience.ts` — positions
- `data/awards.ts` — awards & honors

> Everything is currently **placeholder** data. Replace it with your real information before publishing.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build & deploy

The site is statically exported (`output: "export"`) and deployed to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

```bash
npm run build   # outputs to out/
```

To regenerate the placeholder assets (avatar, CV):

```bash
node scripts/generate-placeholders.mjs
```

## Notes

- The site is served under the `/academic-homepage/` base path. If you rename the repo, update `basePath` in `next.config.ts` **and** `BASE_PATH` in `lib/site.ts`.
- Swap in a real portrait at `public/` and update `avatar` in `data/profile.ts`.
