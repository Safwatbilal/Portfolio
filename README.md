# Safwat Bilal: Portfolio

Personal portfolio of **Safwat Bilal**, Frontend Developer (React, Next.js & TypeScript).
Live: [safwatbilal.vercel.app](https://safwatbilal.vercel.app)

## Stack
- Next.js 16 (App Router), fully static (SSG)
- TypeScript
- Tailwind CSS v4 with brand tokens as CSS variables (light/dark)
- IBM Plex Sans / Plex Sans Arabic / Plex Mono via `next/font`
- No UI or icon libraries; no client JS beyond the theme toggle, mobile menu and copy-email button

## Structure
```
src/
├── app/
│   ├── [locale]/page.tsx         Home (en / ar)
│   ├── [locale]/work/[slug]/     Case studies (statically generated)
│   ├── [locale]/layout.tsx       Root layout: lang/dir, fonts, metadata, hreflang
│   ├── sitemap.ts · robots.ts · manifest.ts · icon.svg
│   └── [locale]/globals.css      Design tokens + typography utilities
├── components/                   Header, footer, logo, icons, schematic visuals, UI primitives
├── content/                      ← all text lives here (en.ts, ar.ts, shared.ts)
├── i18n/config.ts                Locales and helpers
├── proxy.ts                      Language redirect for unprefixed URLs
└── lib/og.tsx                    Shared OG image template
public/safwat-bilal-cv.pdf        Downloadable CV
```

## Languages
The site is bilingual: English at `/en`, Arabic (RTL) at `/ar`. `src/proxy.ts` redirects `/` and old `/work/*` links based on the browser language.

## Editing content
- English copy: `src/content/en.ts`. Arabic copy: `src/content/ar.ts`. Both share the `Dictionary` type in `src/content/types.ts`, so a missing translation is a type error.
- Language-independent facts (links, logos, tags, project order): `src/content/shared.ts`.
- To replace the CV, overwrite `public/safwat-bilal-cv.pdf`.

## Project screenshots
Drop images into `public/projects/<slug>/` (`kadnya`, `tredro`, `nebu`, `suttor`). They are picked up at build time and sorted by file name:
- the first image (e.g. `01-dashboard.png`) replaces the schematic on the home page and case study;
- the rest appear in a "Screens" gallery on the case study.

Use 1440×900 (16:10) PNG/WebP captures, and **blur any real customer data** before committing.

## Project logos
`public/logos/<slug>.png` (128×128, transparent).

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Configuration
| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://safwatbilal.vercel.app` | Canonical URLs, sitemap, OG. Set this when moving to a custom domain. |
