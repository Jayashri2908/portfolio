# Portfolio — Build Plan & Status

Rebuild of Jayashri Utrankar's portfolio from an incomplete dark template into a
finished, CV-accurate, static single page.

## Goals

1. Content matches `Jayashri_Utrankar_CV-2.pdf` exactly — no fictional template
   copy, metrics, or testimonials.
2. Visual language follows the approved Tron reference (`previews/tron.html`),
   not its copy.
3. No backend: contact is a `mailto:` compose form plus direct links.
4. No stock photos or portrait; project visuals are CSS/SVG diagrams.
5. One page, dark-only, statically prerendered, responsive, reduced-motion aware.
6. No invented domain; canonical origin comes from `NEXT_PUBLIC_SITE_URL`.

## Design system

| Token        | Value                                            |
| ------------ | ------------------------------------------------ |
| Background   | `#000000`                                        |
| Panel        | `#05090b`                                        |
| Line         | `#0d2b30`                                        |
| Cyan accent  | `#00F0FF`                                        |
| Orange accent| `#FF6B1A`                                        |
| Text         | `#E4F7FF`                                        |
| Muted        | `#7d9199`                                        |

- Display: **Orbitron**; labels/data: **JetBrains Mono**; body: **Inter**.
- Shared utilities: fixed 48px grid, scanlines, vignette, `corner-frame`,
  neon text glow, gradient dividers, marquee ticker.
- Accent alternates per section (`cyan` → `orange` → `cyan` …) to structure
  the page without introducing new colors.

## Page map

| # | Section        | Content source                                      |
| - | -------------- | --------------------------------------------------- |
| — | Hero           | Name, role, CGPA 8.66, LeetCode 300+, 3 projects, 1 paper + 1 copyright |
| 01| About          | Bio, location, current role, focus, spoken languages |
| 02| Experience     | Wilo MLE internship (Jan 2026 – Present) + Visionary Club leadership |
| 03| Projects       | Upscaler-AI (flagship), FDP Platform, Baldness Detection |
| 04| Research       | ICSCDS 2025 paper, Copyright LD-20250174733         |
| 05| Capabilities   | Skill groups, LeetCode, languages, education, certs, hackathons |
| 06| Contact        | `mailto` form, copy email, LinkedIn/GitHub/LeetCode, CV |
| — | Footer         | Index, IST clock, CV, copyright                     |

## Content corrections applied

| Template / draft                    | Final site                              |
| ----------------------------------- | --------------------------------------- |
| CGPA 8.55                           | **8.66**                                |
| 150+ LeetCode                       | **300+**                                |
| Wilo Jan 2026 – Apr 2026            | **Jan 2026 – Present**                  |
| 3 publications                      | **1 paper + 1 copyright**               |
| Ashoka Cancer Hospital internship   | Removed (not in CV)                     |
| Services / Now / marquee sections   | Removed                                 |
| Fabricated project metrics and copy | Replaced with CV bullets                |
| `jayashri.dev` references           | Removed; env-driven canonical URL       |
| Portrait / stock imagery            | CSS/SVG project diagrams                |
| Phone number                        | Omitted from public site                |

## Technical decisions

- Next 14.2.35 + React 18, Tailwind 3, Framer Motion 11.
- All routes statically prerendered; no runtime server dependency.
- `next/og` replaced with a static `public/og.png` because `ImageResponse`
  failed at Windows prerender time (`TypeError: Invalid URL`).
- Preloader is session-scoped (`sessionStorage: ju-boot`), skipped under
  reduced motion, and no longer depends on `AnimatePresence`/rAF timing.
- Dead template components and unused dependencies removed:
  `three`, `@types/three`, `embla-carousel-react`,
  `class-variance-authority`, `tailwindcss-animate`, plus 21 obsolete
  components.
- Contact form has no network side effects: it builds a `mailto:` URL with the
  entered name, email, and message. Copy-email uses the Clipboard API.

## Verification checklist

- [x] `npm run build` completes; `/`, `/icon.svg`, `/robots.txt`,
      `/sitemap.xml` prerendered.
- [x] `/resume.pdf`, `/og.png`, `/robots.txt`, `/sitemap.xml`, `/icon.svg`
      return 200 with correct content types.
- [x] No console errors, page errors, hydration warnings, or broken images.
- [x] Every in-page anchor resolves; nav links land each section 80px below the
      header.
- [x] Mobile menu opens, sets `aria-expanded`, locks body scroll, closes on
      link click/Escape, and restores scroll.
- [x] `mailto:` submission includes encoded subject/body; page does not navigate.
- [x] Copy-email writes the exact address and shows confirmation.
- [x] No horizontal overflow at 390px or 1440px.
- [x] External links reachable: FDP platform 200, DOI resolves, GitHub 200
      (LinkedIn/LeetCode answer 403 to automated clients by design).
- [x] CV download links point at `/resume.pdf` (4 links, `download` set).
- [x] Metadata, canonical, JSON-LD, OG/Twitter image, sitemap, robots present.
- [x] Reduced motion disables preloader and looping animations.

## Remaining work

- Upgrade to Next 16 + React 19 to clear the `next` critical advisory and the
  bundled PostCSS high advisory; requires a compatibility pass.
- Set `NEXT_PUBLIC_SITE_URL` in the deployment project (or rely on
  `VERCEL_URL`).
- Commit and deploy. Working tree is currently uncommitted.
- Optional: replace generic GitHub profile links on Upscaler-AI and Baldness
  Detection with repository URLs once public.
- Optional: add a real focus trap to the mobile menu (Escape, focus return, and
  scroll lock are already handled).
