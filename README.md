# Hunter Baucum — Portfolio Website

A modern, dark-themed portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Features 3D star fields, smooth page transitions, and a fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## Live Sections

| Route | Description |
|-------|-------------|
| `/` | Hero with 3D star background, typewriter tagline, and floating particles |
| `/experience` | Timeline of professional roles at AAA, Cognizant, and WOS |
| `/projects` | Project cards with hover-expand detail, starry backdrop, and tech badges |
| `/accomplishments` | Certifications, leadership highlights, and career milestones |
| `/about` | Bio, education, and profile photo |

---

## Tech Stack

**Framework & Language** — Next.js 15 (App Router, Turbopack), React 19, TypeScript 5

**Styling** — Tailwind CSS 4, CSS custom properties (oklch color palette), `tw-animate-css`

**Animation** — Framer Motion, GSAP, custom scroll-reveal / parallax / typewriter / magnetic-button components

**3D** — Three.js via `@react-three/fiber` + `@react-three/drei` (star field, floating orb)

**UI Primitives** — Radix UI (Dialog, Tabs, Tooltip, Avatar, Progress), shadcn/ui (new-york style), Lucide icons

**SEO** — JSON-LD structured data, Open Graph / Twitter meta, sitemap, robots.txt

**Theme** — Dark-only with a lavender + teal green accent palette

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & layouts
│   ├── (routes)/           # About, Experience, Projects, Accomplishments
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home (Hero section)
│   └── metadata.ts         # SEO metadata factory
├── components/
│   ├── 3d/                 # Three.js star background (lazy-loaded)
│   ├── animations/         # Scroll-reveal, parallax, typewriter, tilt, wave, etc.
│   ├── common/             # Floating socials, scroll-to-top, optimized image
│   ├── layout/             # Navbar, Footer, PageWrapper with route transitions
│   ├── sections/           # Hero, About, Experience, Projects, Achievements, Skills
│   ├── seo/                # JSON-LD component
│   └── ui/                 # shadcn primitives + custom badges, shooting stars
├── data/                   # Static data: projects, experience, achievements, skills
├── hooks/                  # useRouteChange, useSmoothScroll
├── lib/                    # Constants, utils (cn helper)
└── types/                  # Global TypeScript definitions
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or your preferred package manager)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Cazador0/Hunter-portfolio-website.git
cd Hunter-portfolio-website

# Install dependencies
npm install

# Start the dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking (no emit) |
| `npm run format` | Prettier formatting |

---

## Configuration

**Theme colors** are defined as CSS custom properties in `src/app/globals.css` using oklch. The palette centers on:

- **Teal** `oklch(0.71 0.11 180)` — primary accent
- **Lavender** `oklch(0.84 0.05 290)` — secondary accent
- **Dark background** `oklch(0.15 0.02 260)`

**Site metadata** (name, links, description) lives in `src/lib/constants.ts` under `SITE_CONFIG`.

**Navigation items** are configured in the same file under `NAV_ITEMS`.

---

## Deployment

The site is optimized for **Vercel** out of the box (Next.js defaults). To deploy elsewhere, run `npm run build` and serve the `.next` output with `npm run start`, or export as static if your hosting requires it.

Key production optimizations already in place:

- Console statements removed in production builds
- CSS optimization enabled via `experimental.optimizeCss`
- Image formats set to AVIF/WebP with responsive device sizes
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Font caching with immutable `Cache-Control`

---

## Adding Content

**New project** — add an entry to `src/data/projects.ts` following the `Project` interface.

**New experience** — add an entry to `src/data/experience.ts`.

**New achievement or certification** — add to `src/data/achievements.ts`.

**New skill icon** — add to the `skills` array in `src/components/sections/skills-showcase.tsx`.

---

## License

This is a personal portfolio for Hunter Baucum. All rights reserved.
