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
│   ├── page.tsx                  Home: hero, work, experience, capabilities, about, contact
│   ├── work/[slug]/page.tsx      Case studies (statically generated)
│   ├── opengraph-image.tsx       Generated OG images (also per case study)
│   ├── sitemap.ts · robots.ts · manifest.ts · icon.svg
│   └── globals.css               Design tokens + typography utilities
├── components/                   Header, footer, logo, icons, schematic visuals, UI primitives
├── content/                      ← all text lives here (profile, projects, experience)
└── lib/og.tsx                    Shared OG image template
public/safwat-bilal-cv.pdf        Downloadable CV
```

## Editing content
All copy lives in typed files under `src/content/`. Change text there; TypeScript flags any missing fields.
To replace the CV, overwrite `public/safwat-bilal-cv.pdf`.

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
