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

- **/** – Home (PillarHero, solutions, industries, tech, testimonial, stats, FAQ, CTA).
- **/products** – Product catalog; **/solutions** – Solutions overview and detail; **/industries** – Industries overview and detail.
- **/technology** – Technology overview.
- **/resources** – Resources hub; **/resources/blog**, **/resources/case-studies**, **/resources/whitepapers**, **/resources/playbooks**, **/resources/videos**, **/resources/faq**, **/resources/docs**.
- **/about** – Redirects to **/company**.
- **/company** – Company hub; **/company/team**, **/company/our-story**, **/company/careers**, **/company/careers/open-roles**, **/company/values**, **/company/board-advisors**, **/company/investors**, **/company/partners**.
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
- **Footer** – Multi-column links and social links from `lib/nav`.
- **PageShell / Section** – Layout and section wrappers.
- **SectionHeader** – Reusable section title, description, badge.

### Sections (home & content pages)

- **PillarHero** – Above-the-fold hero for pillar pages (H1, H2, description, CTAs); used on Home, Products, Solutions, Industries, Case Studies, Resources, Company, Contact.
- Hero (legacy), LogoCloud, FeatureGrid, IndustryGrid, TechOverview.
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

- **lib/site.ts** – Site name, description, company info (phone, email, address), social links.
- **lib/nav.ts** – Header and footer navigation structure.
- **lib/nav-mega.ts** – Mega menu and dropdown content (Products, Solutions, Industries, Resources, Company, Case Studies); accent colours use `--it-*` tokens.
- **lib/content/** – Home, products, solutions, industries content models for pages.

---

## Track Record of Applied Changes

| Version   | Change |
|-----------|--------|
| **0.2.0** | InnoTech design tokens (`--it-*`), tokenised navbar/nav-mega. Legal and accessibility routes; company sub-pages (values, board-advisors, investors, partners, open-roles); resources (whitepapers, playbooks, videos, faq, docs); industries (military, charge-depot). loading/error/not-found. CtaBanner dual API. SITE_AUDIT.md as source of truth. next.config `ignoreBuildErrors: false`. |
| **0.1.1** | Navbar rebuild (v0 spec, Framer Motion, mega menus, mobile drawer). PillarHero and pillar page heroes. ThemeProvider and Toaster in layout. ESLint, CHANGELOG, FEATURES, NEXT_RECOMMENDATIONS. |
| **0.1.0** | Initial Next.js 16 app: App Router, pages, sections, shadcn/ui, content layer, docs. |

For full detail see **[CHANGELOG.md](./CHANGELOG.md)**.
