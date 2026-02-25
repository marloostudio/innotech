# InnoTech – Features & Track Record

Feature list and high-level track record of changes. For versioned, detailed changes see **[CHANGELOG.md](./CHANGELOG.md)**. For current structure and audit see **[SITE_AUDIT.md](./SITE_AUDIT.md)**.

---

## Technology Stack

| Category        | Technology |
|----------------|------------|
| Framework       | Next.js 16 (App Router) |
| Language        | TypeScript 5.7 |
| Styling         | Tailwind CSS v4 (`@theme inline` in `app/globals.css`) |
| UI Components   | shadcn/ui (Radix UI) |
| Icons           | lucide-react |
| Fonts           | Chakra Petch, DM Sans, IBM Plex Mono (next/font) |
| Forms           | react-hook-form, zod, @hookform/resolvers |
| Analytics       | @vercel/analytics |
| Theme / Toasts  | next-themes, sonner |
| Animations      | framer-motion |
| Charts          | recharts |
| Linting         | ESLint, eslint-config-next |

---

## Design Tokens (InnoTech)

- **Source:** `app/globals.css` (`:root` and `@theme inline`).
- **Brand tokens (`--it-*`):** Surfaces (bg, surface, surface-raised), borders, text (primary, secondary, muted, dim), blue (default, hover, subtle, border, glow), product colours (safeguard, autolock, solutions, industries with -subtle/-border), semantic (success, warning, danger, info), shadows. Mapped as `--color-it-*` for Tailwind (e.g. `bg-it-surface`, `text-it-text-primary`).
- **Navbar and nav-mega** use only these variables (no hardcoded hex).

---

## Site Structure & Pages

### Main routes

- **/** – Home: HeroV2 + HeroCanvas (particle/robot background), trust marquee (“Trusted by innovative companies worldwide”), Comprehensive Automation Solutions (image-left, no icons), industries, tech, testimonial, stats, FAQ, CTA. No hero image placeholder; hero height 60vh.
- **/products** – Product catalog; **/solutions** – Solutions overview and detail; **/industries** – Industries overview and detail.
- **/technology** – Technology overview.
- **/resources** – Resources hub; **/resources/blog**, **/resources/case-studies**, **/resources/whitepapers**, **/resources/playbooks**, **/resources/videos**, **/resources/faq**, **/resources/docs**.
- **/about** – Redirects to **/company**.
- **/company** – Company hub; **/company/team** (compact layout: Leadership + Advisors side-by-side, Engineering & Operations with compact cards, Culture summary), **/company/our-story**, **/company/careers**, **/company/careers/open-roles**, **/company/values**, **/company/board-advisors**, **/company/investors**, **/company/partners**.
- **/contact** – Contact form and info; **/demo** – Demo request.
- **/case-studies** – Case studies index.
- **/legal/privacy-policy**, **/legal/cookie-policy**, **/legal/terms** – Legal pages.
- **/accessibility** – Accessibility statement.

### Product sub-routes

- **/products/radar-link** – v2x-communication, micro-localization, drone-tracking, real-time-analytics.
- **/products/safeguard** – threat-detection, compliance-monitoring, real-time-alerting, predictive-maintenance.
- **/products/autolock** – autonomous-charging, fleet-orchestration, process-automation, access-control.

### Industries

- Logistics, Autonomous Fleets, **/industries/autonomous-fleets/charge-depot**, Automated Depot, Port, Airport & Shopping Mall, Mining, Military (coming soon).

### App Router UX

- **app/loading.tsx** – Root loading UI. **app/error.tsx** – Error boundary. **app/not-found.tsx** – 404 page.

---

## Components

### Layout & site

- **Navbar** – Sticky bar; scroll behaviour (transparent → blurred bar, 64→56px); Framer Motion. Colours via `var(--it-*)`. Products / Solutions / Industries mega menus; Case Studies / Resources / Company dropdowns; Contact + Book a Demo. Mobile: hamburger → full-screen drawer. Data: `lib/nav-mega.ts`.
- **Footer** – Multi-column links and social links from `lib/nav`. Displays app version (e.g. v1.1.0) next to copyright; version from `lib/site.ts` (`APP_VERSION` / `siteConfig.version`).
- **PageShell / Section** – Layout and section wrappers; horizontal padding `px-6 lg:px-8` site-wide. Section provides vertical padding and optional alternating backgrounds.
- **SectionHeader** – Reusable section title, description, badge.
- **TeamCard** (`components/site/team-card.tsx`) – Team member card (avatar, name, title, optional bio and social links). Optional **compact** variant: horizontal layout with small avatar/initials and 3px left-border accent for dense grids (e.g. Engineering list on `/company/team`).

### Sections (home & content pages)

- **HeroV2** – Home-only hero (style guide): eyebrow, H1 with gradient second line, subhead, CTAs; accepts optional `background` (e.g. HeroCanvas). 60vh height.
- **HeroCanvas** – Client component: canvas particle/robot grid background; gradient and vignette overlays. Used as hero background on home.
- **PillarHero** – Above-the-fold hero for pillar pages (H1, H2, description, CTAs); optional `background` prop. Used on Products, Solutions, Industries, Case Studies, Resources, Company, Contact (not home).
- **LogoCloud** – Configurable title (e.g. “Trusted by innovative companies worldwide”); logos in a horizontal marquee (4× repeat, slow right-to-left scroll, seamless loop via `logo-scroll` keyframe in globals.css).
- **FeatureGrid** – Optional `showImagePlaceholder`, `imageOnLeft` (image left, edge-to-edge top/bottom/left), `hideIcon`. Used on home for Comprehensive Automation Solutions.
- Hero (legacy), IndustryGrid, TechOverview.
- Testimonial, Stats, Faq.
- **CtaBanner** – Accepts `title` / `primaryCta` / `secondaryCta` or legacy `headline` / `ctaText` / `ctaHref`; shared `description`.
- **SolutionDetail**, **IndustryDetail**, **ProductFeatureDetail** – Content-driven detail pages (H1 from content).

### UI (shadcn/ui)

- Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Navigation Menu, Popover, Select, Separator, Sheet, Tabs, Textarea, Toaster (Sonner), Tooltip, Chart (recharts), and other installed primitives.

---

## Theming & UX

- **Light / dark** – CSS variables in `globals.css`; `ThemeProvider` in root layout (system/light/dark).
- **Toasts** – Sonner `Toaster` in root layout; `toast()` from `sonner`.
- **Design rules** – `.cursor/rules/design-and-naming.mdc` (dark theme, fonts, motion, naming).

---

## Content & Config

- **lib/site.ts** – `APP_VERSION` (semver), site name, description, company info (phone, email, address), social links. Bump version here and in CHANGELOG when releasing.
- **lib/nav.ts** – Header and footer navigation structure.
- **lib/nav-mega.ts** – Mega menu and dropdown content (Products, Solutions, Industries, Resources, Company, Case Studies); accent colours use `--it-*` tokens.
- **lib/content/** – Home, products, solutions, industries content models for pages.

---

## Track Record of Applied Changes

| Version   | Change |
|-----------|--------|
| **Unreleased** | (Nothing yet.) |
| **1.1.0** | Hero Style v2 (HeroV2) and HeroCanvas on home; trust marquee (“Trusted by innovative companies worldwide”, 4× logos, R→L scroll); Comprehensive Automation Solutions with image-left and no icons; footer version; PillarHero optional background; hero 60vh, no hero image placeholder. |
| **1.0.0** | Team page compact layout; TeamCard compact variant; footer version; changelog semver. Section/PageShell padding px-6 lg:px-8. |
| **0.2.0** | InnoTech design tokens (`--it-*`), tokenised navbar/nav-mega. Legal and accessibility routes; company sub-pages; resources; industries (military, charge-depot). loading/error/not-found. CtaBanner dual API. SITE_AUDIT.md. |
| **0.1.1** | Navbar rebuild (Framer Motion, mega menus, mobile drawer). PillarHero and pillar heroes. ThemeProvider and Toaster in layout. ESLint, CHANGELOG, FEATURES, NEXT_RECOMMENDATIONS. |
| **0.1.0** | Initial Next.js 16 app: App Router, pages, sections, shadcn/ui, content layer, docs. |

For full detail see **[CHANGELOG.md](./CHANGELOG.md)**.
