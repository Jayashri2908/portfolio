# Portfolio Build Plan — Jayashri Dilip Utrankar

## 1. Overview

A modern, dark-themed developer portfolio showcasing AI/ML and full-stack work, leveraging 3D visuals and smooth animations to reflect the candidate's React Three Fiber, Framer Motion, and Tailwind CSS experience.

**Primary goal:** Recruiter-friendly showcase of projects, research, and skills with a memorable visual identity.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 15 (App Router)** | SSR/SSG, SEO, image optimization, fast |
| Language | **TypeScript** | Type safety, matches resume |
| Styling | **Tailwind CSS v4** | Already used in internship |
| Animations | **Framer Motion** | Already used; perfect for scroll/transitions |
| 3D | **React Three Fiber + drei** | Already used; fits personal brand |
| Smooth Scroll | **Lenis** | Buttery scroll feel |
| Icons | **Lucide React** + **Simple Icons** | Lightweight, consistent |
| Forms | **React Hook Form** + **Zod** | Contact form validation |
| Email | **Resend** or **Formspree** | Contact form submission |
| Deployment | **Vercel** | Free, GitHub integration, edge network |
| Analytics | **Vercel Analytics** | Privacy-friendly, no cookies |
| Linting | **ESLint** + **Prettier** | Code quality |
| Content | **MDX** (optional) | Easy blog/case studies later |

---

## 3. Design System

### 3.1 Visual Identity
- **Theme:** Dark-first with optional light mode toggle
- **Accent gradient:** `from-indigo-500 via-purple-500 to-pink-500` (or custom purple/cyan)
- **Typography:**
  - Headings: **Inter** or **Space Grotesk** (geometric, modern)
  - Body: **Inter**
  - Mono (code): **JetBrains Mono**
- **Background effects:**
  - Subtle grid/dot pattern
  - Animated gradient blobs
  - Optional: floating 3D geometry in hero

### 3.2 Color Palette
```
--background:    #0a0a0f  (near-black)
--surface:       #111118  (cards)
--border:        #1f1f2e
--foreground:    #e4e4e7
--muted:         #71717a
--primary:       #6366f1  (indigo-500)
--accent:        #a855f7  (purple-500)
--highlight:     #ec4899  (pink-500)
--success:       #10b981
```

### 3.3 Component Patterns
- **Glassmorphism cards** — `backdrop-blur` + low-opacity background
- **Hover lift** — `hover:scale-[1.02] transition-transform`
- **Glow borders** — gradient borders on featured items
- **Skeleton loaders** — prevent CLS
- **Reduced motion** — respect `prefers-reduced-motion`

---

## 4. Site Structure (File Tree)

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, theme
│   ├── page.tsx                # Single-page composition
│   ├── globals.css             # Tailwind v4 imports + custom CSS
│   ├── not-found.tsx
│   └── api/
│       └── contact/route.ts    # Contact form endpoint
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, theme toggle
│   │   ├── Footer.tsx          # Social links, copyright
│   │   └── SmoothScroll.tsx    # Lenis wrapper
│   ├── sections/
│   │   ├── Hero.tsx            # 3D + name + CTAs
│   │   ├── About.tsx
│   │   ├── Experience.tsx      # Timeline
│   │   ├── Projects.tsx        # Card grid
│   │   ├── ProjectCard.tsx
│   │   ├── Research.tsx        # Publications + copyright
│   │   ├── Skills.tsx          # Grouped tech badges
│   │   ├── Education.tsx       # Timeline
│   │   ├── Certifications.tsx
│   │   ├── Involvement.tsx
│   │   └── Contact.tsx
│   ├── three/
│   │   ├── HeroScene.tsx       # R3F canvas
│   │   ├── FloatingGeometry.tsx
│   │   └── ParticleField.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ResumeButton.tsx
│   └── motion/
│       ├── FadeIn.tsx          # Reveal-on-scroll wrapper
│       ├── Stagger.tsx
│       └── TextReveal.tsx
├── lib/
│   ├── data.ts                 # All resume content as data
│   ├── utils.ts                # cn(), helpers
│   └── seo.ts
├── public/
│   ├── resume.pdf              # Downloadable resume
│   ├── og-image.png            # Social preview
│   └── models/                 # Optional .glb files
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Sections — Detailed Specs

### 5.1 Navbar
- Logo (initials "JU" or custom mark)
- Links: About · Experience · Projects · Research · Contact
- Theme toggle (sun/moon)
- "Resume" button → downloads `Jayashri_Resume.pdf`
- Hidden on mobile, replaced with hamburger

### 5.2 Hero
- Full viewport height
- **3D scene background:** floating torus knot, sphere, or wireframe geometry (R3F)
- Headline: *"Hi, I'm Jayashri"* with gradient text
- Subhead: *"B.Tech CSE '27 · ML & Full-Stack Developer"*
- CTAs: **View Projects** (scroll) · **Get in Touch** (mailto/contact)
- Social icons: GitHub, LinkedIn, LeetCode, Email
- Scroll-down indicator (animated chevron)

### 5.3 About
- Two-column on desktop:
  - Left: 2–3 paragraph bio
  - Right: Quick stats card (CGPA 8.55 · 150+ LeetCode · 3 publications)
- Highlight: 2–3 sentences about passion for AI/ML + full-stack

### 5.4 Experience
- **Vertical timeline** (alternating left/right on desktop)
- Card content:
  - Company logo placeholder + name (Wilo Mather and Platt Pumps)
  - Role: ML and Full-Stack Intern
  - Duration: Jan 2026 – Apr 2026
  - 3 bullet points (verbatim from resume, trimmed)
  - Tech tags: React, Three.js, Framer Motion, Tailwind, React Router v7

### 5.5 Projects (Featured)
- **Grid: 1 large featured + 2 smaller**, or 3 equal
- Each card:
  - Thumbnail (use generated mockup or gradient placeholder)
  - Title + tagline
  - 3 short bullet points
  - Tech badges
  - Links: GitHub · Live demo (if available)
- Projects to include:
  1. **Upscaler-AI** (flagship) — Docker, Real-ESRGAN, GFPGAN, WebSockets
  2. **FDP Management Platform** — React, TypeScript, Firebase, vu-fdp.vercel.app
  3. **ML-Based Baldness Detection** — Python, OpenCV, ML
- Optional: "View all" modal or detail page

### 5.6 Research & Publications
- Two cards/sections:
  1. **Conference paper** — DOI link, citation
  2. **Copyright** — Certificate No: LD-20250174733
- Style: academic card with hover

### 5.7 Skills
- Grouped categories with icons:
  - **Languages** — Java, C, C++, Python, SQL, JavaScript, TypeScript
  - **AI/ML & Data** — PyTorch, OpenCV, Scikit-learn, RAG, Hugging Face, LangChain
  - **Web & Tools** — React, Tailwind, Three.js, Docker, WebSockets, n8n, Git
- Visual: animated badges that pop in on scroll
- "150+ LeetCode problems" highlighted

### 5.8 Education
- Compact timeline or 3 stacked cards
- B.Tech, 12th, 10th — only top entry gets full detail by default, others collapsed

### 5.9 Certifications & Involvement
- **Certifications:** 2 cards (IBM SkillsBuild, AWS Cloud Architecting) with badge
- **Involvement:** Visionary Club role, brief bullet points

### 5.10 Contact
- Heading: *"Let's build something"*
- Form fields: Name, Email, Message (with Zod validation)
- Submit → POST to `/api/contact` → email via Resend
- Below form: direct email link, LinkedIn, GitHub
- Toast notification on success

### 5.11 Footer
- © 2026 Jayashri Dilip Utrankar
- Social icon row
- "Built with Next.js · Designed by me" tagline

---

## 6. Animations & Interactions

| Element | Animation |
|---------|-----------|
| Page load | Staggered fade-in of nav, hero text, 3D scene |
| Scroll reveal | Each section fades up on enter viewport (Framer Motion `whileInView`) |
| Project cards | Hover: lift + glow border + slight rotate |
| 3D hero | Slow auto-rotate, mouse parallax |
| Theme toggle | Smooth cross-fade |
| Buttons | Hover scale, magnetic cursor effect (subtle) |
| Text | Optional: typewriter or character reveal for hero name |

**Accessibility:** respect `prefers-reduced-motion`, full keyboard nav, focus rings, ARIA labels.

---

## 7. Performance & SEO

- **Lighthouse targets:** Performance 95+, Accessibility 95+, SEO 100
- Use Next.js `<Image>` and dynamic imports for 3D scene
- Metadata API for `<title>`, `<meta>`, OG tags
- Generate `og-image.png` (1200×630) with name + title
- `sitemap.xml` and `robots.txt`
- Preload critical fonts

---

## 8. Content Data Structure (`lib/data.ts`)

```ts
export const projects = [
  {
    title: "Upscaler-AI",
    tagline: "AI-Powered Image Processing System",
    bullets: [...],
    tech: ["Docker", "Real-ESRGAN", "GFPGAN", "WebSockets", "n8n"],
    github: "...",
    demo: null,
    featured: true,
  },
  ...
];

export const experience = [...];
export const skills = { languages: [...], aiml: [...], web: [...] };
export const publications = [...];
```

This keeps content separate from components — easy to update.

---

## 9. Build Phases

### Phase 1 — Foundation (Day 1)
- [ ] `npx create-next-app@latest` with TS, Tailwind v4, App Router
- [ ] Configure fonts (Inter, JetBrains Mono) via `next/font`
- [ ] Set up theme system + dark/light toggle
- [ ] Create `lib/data.ts` with all resume content
- [ ] Set up layout, navbar, footer

### Phase 2 — Sections (Day 2)
- [ ] Hero with 3D scene (R3F)
- [ ] About, Experience timeline
- [ ] Projects grid
- [ ] Skills, Education, Certifications

### Phase 3 — Research, Contact, Polish (Day 3)
- [ ] Research & Publications section
- [ ] Contact form + API route
- [ ] Smooth scroll, scroll reveal animations
- [ ] Mobile responsiveness pass
- [ ] Accessibility audit

### Phase 4 — Deploy (Day 4)
- [ ] Add `og-image`, `sitemap`, `robots`
- [ ] Lighthouse pass
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Custom domain (optional)

---

## 10. Optional Enhancements (Future)

- Blog with MDX
- Project detail pages with case studies
- View counters (Vercel KV)
- i18n (English/Hindi/Marathi)
- Visitor map
- Custom 3D model (e.g., animated pump from Wilo)

---

## 11. Open Questions for You

1. **Domain name** — do you have one (e.g., jayashri.dev) or use the Vercel subdomain for now?
2. **Color accent** — happy with indigo/purple/pink, or prefer something else (cyan/teal/orange)?
3. **3D hero** — keep it subtle (floating geometry) or feature a hero piece tied to your work (e.g., a 3D pump model)?
4. **Single page vs multi-page** — single scrolling page (recommended) or separate `/projects` etc. routes?
5. **Blog** — include MDX blog now, or skip for v1?
6. **Light mode** — needed, or dark-only?
