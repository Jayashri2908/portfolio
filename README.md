# Jayashri Utrankar — Portfolio

Personal portfolio for **Jayashri Dilip Utrankar**, a B.Tech CSE '27 student at
Vishwakarma University working across applied ML and full-stack engineering.

Single-page, dark-only, statically rendered Next.js site with a Tron-inspired
visual system: black surfaces, cyan/orange neon accents, monospace HUD labels,
and CSS/SVG project diagrams instead of stock imagery.

## Stack

| Layer      | Choice                                         |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 14 (App Router, static export via SSG) |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS 3 + custom utilities              |
| Motion     | Framer Motion (`reducedMotion="user"`)         |
| Icons      | lucide-react                                   |
| Fonts      | Orbitron, JetBrains Mono, Inter via `next/font` |

There is **no backend**: no API routes, database, email service, or analytics.
The contact form only composes a `mailto:` URL in the visitor's mail client.

## Content

`lib/data.ts` is the single source of truth for every fact on the site:
profile, experience, projects, publications, skills, education, and
certifications. It was transcribed from `Jayashri_Utrankar_CV-2.pdf`. Update
that file rather than editing copy inside components.

The public site intentionally omits the phone number from the CV. The
downloadable PDF still contains it, because it is the original CV.

## Structure

```
app/
  layout.tsx         fonts, metadata, JSON-LD, grid/scanline overlays
  page.tsx           single-page composition
  globals.css        palette, grid, scanlines, corner frames, reduced motion
  not-found.tsx      themed 404, noindex
  icon.svg           favicon
  robots.ts          /robots.txt
  sitemap.ts         /sitemap.xml
components/
  nav.tsx            sticky nav, scroll progress, section tracking, mobile menu
  hero.tsx           name, positioning, key stats, tech ticker
  about.tsx          01 · bio + quick facts
  experience-timeline.tsx  02 · Wilo internship + leadership
  projects.tsx       03 · featured project + two cards
  project-visuals.tsx      pure CSS/SVG project diagrams
  research.tsx       04 · paper + copyright
  capabilities.tsx   05 · skills, education, certifications, hackathons
  contact.tsx        06 · mailto form, copy-email, direct channels
  footer.tsx         index, local time, CV link
  preloader.tsx      first-visit boot sequence (session-scoped)
  ui/                section heading, panel, tag, button, ticker, fade-in
lib/
  data.ts            all CV-derived content
  site-url.ts        NEXT_PUBLIC_SITE_URL / VERCEL_URL / localhost
  utils.ts           cn()
public/
  resume.pdf         downloadable CV
  og.png             static 1200×630 social preview
```

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: set the canonical origin
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm start
```

## Site URL

`lib/site-url.ts` resolves the canonical origin in this order:

1. `NEXT_PUBLIC_SITE_URL` (set this in Vercel project settings)
2. `VERCEL_URL` during a Vercel build
3. `http://localhost:3000`

The value feeds `metadataBase`, Open Graph URLs, `sitemap.xml`, and
`robots.txt`. No domain is hard-coded.

## Assets

- `public/resume.pdf` — CV download (linked four times across the page).
- `public/og.png` — static Open Graph/Twitter image. It is generated outside
  Next because `next/og` failed during Windows prerendering with
  `TypeError: Invalid URL`.
- `app/icon.svg` — neon diamond favicon.

## Accessibility & motion

- Skip-to-content link, labelled landmarks, `aria-current` on the active nav
  item, focus-visible outlines, Escape closes the mobile menu, and focus
  returns to the menu trigger.
- Color palette keeps text at or above WCAG AA contrast on black.
- `prefers-reduced-motion` disables scan/marquee/preloader animation and
  shortens reveal transitions.
- No images, so there is no image alt text or layout shift to manage; all
  project visuals are decorative and marked `aria-hidden`.

## Deployment

Deploy to Vercel, set `NEXT_PUBLIC_SITE_URL` to the production origin, and
build. Every route is static, so no server runtime is required.

## Security note

`npm audit` reports a critical advisory against the `next` 14 line and a high
advisory for its bundled PostCSS. The supported fix is a major upgrade to
Next 16 + React 19, which has not been applied yet. The affected PostCSS paths
are build-time only, and the site has no user input, API routes, or dynamic
rendering, so exposure is limited — but the upgrade should be scheduled.
