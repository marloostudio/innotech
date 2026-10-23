# SITE_AUDIT.md

Generated: 2025-02-25 | Project: InnoTech Systems | Source of truth for current setup and features | App version: 1.1.0

---

## 1. Project Setup

### Framework and version
- **Next.js**: 16.1.6 (`package.json`)
- **Router**: App Router (`app/layout.tsx`, `app/page.tsx`, route folders under `app/`)

### TypeScript
- **Yes** — `tsconfig.json` present, `"jsx": "react-jsx"`, TypeScript 5.7.3 in devDependencies

### Tailwind CSS
- **Yes** — tailwindcss ^4.2.0, @tailwindcss/postcss ^4.2.0 (Tailwind v4). Configuration in CSS via `app/globals.css`: `@import 'tailwindcss'`, `@theme inline { ... }`.

### Framer Motion
- **Yes** — framer-motion ^12.34.3

### Lucide React
- **Yes** — lucide-react ^0.564.0

### Other notable dependencies
- @vercel/analytics: 1.6.1
- next-themes: ^0.4.6
- react: 19.2.4, react-dom: 19.2.4
- @radix-ui/* (accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, slot, switch, tabs, toast, toggle, toggle-group, tooltip): various 1.x / 2.x
- class-variance-authority: ^0.7.1, clsx: ^2.1.1, tailwind-merge: ^3.3.1
- zod: ^3.24.1, react-hook-form: ^7.54.1, @hookform/resolvers: ^3.9.1
- sonner: ^1.7.1, recharts: 2.15.0, date-fns: 4.1.0, embla-carousel-react: 8.6.0
- vaul: ^1.1.2, cmdk: 1.1.1, input-otp: 1.4.2, react-day-picker: 9.13.2
- react-resizable-panels: ^2.1.7, tw-animate-css: 1.3.3
- postcss: ^8.5, autoprefixer: ^10.4.20

### Google Fonts
- Loaded in **`app/layout.tsx`** via `next/font/google`: `Chakra_Petch` (300, 600, 700), `DM_Sans` (300, 400, 500, 600), `IBM_Plex_Mono` (400, 500). Variables on `<html>`: `--font-chakra`, `--font-dm-sans`, `--font-ibm-mono`.

### Required fonts
- **Chakra Petch**: Yes (--font-chakra)
- **DM Sans**: Yes (--font-dm-sans)
- **IBM Plex Mono**: Yes (--font-ibm-mono)

### Tailwind and theme (app/globals.css)
- **@theme inline** (Tailwind v4): `--font-sans`, `--font-mono`, `--font-chakra`; `--color-*` for background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, chart-1–5, sidebar-*; `--radius-sm` through `--radius-xl`.
- **InnoTech brand tokens** (in `:root`):  
  **Surfaces:** `--it-bg` (#0b1221), `--it-surface`, `--it-surface-raised`  
  **Borders:** `--it-border`, `--it-border-subtle`  
  **Text:** `--it-text-primary`, `--it-text-secondary`, `--it-text-muted`, `--it-text-dim`  
  **Brand:** `--it-blue`, `--it-blue-hover`, `--it-blue-subtle`, `--it-blue-border`, `--it-blue-glow`  
  **Products:** `--it-safeguard`, `--it-autolock`, `--it-solutions`, `--it-industries` (with -subtle, -border variants)  
  **Semantic:** `--it-success`, `--it-warning`, `--it-danger`, `--it-info`  
  **Shadows:** `--it-shadow-sm`, `--it-shadow-md`, `--it-shadow-lg`, `--it-shadow-glow-blue`  
  **Light theme:** `--it-light-bg`, `--it-light-surface`, `--it-light-surface-2`, `--it-light-border`, `--it-light-text-*`, `--it-light-blue`, etc.  
  **Hero gradients:** `--it-hero-gradient`, `--it-hero-gradient-light`, `--it-hero-safeguard`, `--it-hero-autolock`, `--it-hero-solutions`  
  **Section alternation:** `--it-section-1`, `--it-section-2`, `--it-section-3`, `--it-section-raised`  
  **Mid-section / cards:** `--it-mid-section-bg`, `--it-card-default-bg`, `--it-card-accent-*`, etc.  
- These are mapped in `@theme inline` as `--color-it-*` for Tailwind utilities (e.g. `bg-it-surface`, `text-it-text-primary`).

### Cursor rules
- **Present**: `docs/legacy-cursor/cursorrules.md` (project root), `docs/legacy-cursor/rules/design-and-naming.mdc` — design theme (dark, fonts, colours, icons, motion, naming conventions).

---

## 2. Folder Structure

```
Innotech/
├── docs/legacy-cursor/rules/design-and-naming.mdc
├── docs/legacy-cursor/cursorrules.md
├── .eslintrc.json
├── CHANGELOG.md
├── COMPONENTS_GUIDE.md
├── CONTENT_GUIDE.md
├── FEATURES.md
├── NEXT_RECOMMENDATIONS.md
├── PROJECT_SUMMARY.md
├── README.md
├── SITE_AUDIT.md
├── app/
│   ├── about/page.tsx              (redirect to /company)
│   ├── accessibility/page.tsx
│   ├── case-studies/page.tsx
│   ├── company/page.tsx
│   │   ├── board-advisors/page.tsx
│   │   ├── careers/page.tsx
│   │   │   └── open-roles/page.tsx
│   │   ├── investors/page.tsx
│   │   ├── our-story/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── team/page.tsx
│   │   └── values/page.tsx
│   ├── contact/page.tsx
│   ├── demo/page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── industries/
│   │   ├── airport-shopping-mall/page.tsx
│   │   ├── automated-depot/page.tsx
│   │   ├── autonomous-fleets/page.tsx
│   │   │   └── charge-depot/page.tsx
│   │   ├── logistics/page.tsx
│   │   ├── military/page.tsx
│   │   ├── mining/page.tsx
│   │   ├── page.tsx
│   │   └── port/page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── products/
│   │   ├── autolock/
│   │   │   ├── access-control/page.tsx
│   │   │   ├── autonomous-charging/page.tsx
│   │   │   ├── fleet-orchestration/page.tsx
│   │   │   ├── page.tsx
│   │   │   └── process-automation/page.tsx
│   │   ├── page.tsx
│   │   ├── radar-link/
│   │   │   ├── drone-tracking/page.tsx
│   │   │   ├── micro-localization/page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── real-time-analytics/page.tsx
│   │   │   └── v2x-communication/page.tsx
│   │   └── safeguard/
│   │       ├── compliance-monitoring/page.tsx
│   │       ├── page.tsx
│   │       ├── predictive-maintenance/page.tsx
│   │       ├── real-time-alerting/page.tsx
│   │       └── threat-detection/page.tsx
│   ├── resources/
│   │   ├── blog/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── docs/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── page.tsx
│   │   ├── playbooks/page.tsx
│   │   ├── videos/page.tsx
│   │   └── whitepapers/page.tsx
│   ├── legal/
│   │   ├── cookie-policy/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms/page.tsx
│   ├── solutions/
│   │   ├── charging-autonomous-vehicles/page.tsx
│   │   ├── charging-heavy-duty/page.tsx
│   │   ├── charging-mar/page.tsx
│   │   ├── connectivity-v2i/page.tsx
│   │   ├── connectivity-v2v/page.tsx
│   │   ├── drone-tracking/page.tsx
│   │   ├── micro-localization/page.tsx
│   │   ├── page.tsx
│   │   ├── safety-human-robot/page.tsx
│   │   ├── safety-industrial-robots/page.tsx
│   │   └── safety-mar/page.tsx
│   └── technology/page.tsx
├── components/
│   ├── industry-detail.tsx
│   ├── page-shell.tsx
│   ├── product-feature-detail.tsx
│   ├── section-header.tsx
│   ├── solution-detail.tsx
│   ├── theme-provider.tsx
│   ├── sections/
│   │   ├── cta-banner.tsx
│   │   ├── faq.tsx
│   │   ├── feature-grid.tsx
│   │   ├── hero-canvas.tsx
│   │   ├── hero-v2.tsx
│   │   ├── hero.tsx
│   │   ├── industry-grid.tsx
│   │   ├── logo-cloud.tsx
│   │   ├── pillar-hero.tsx
│   │   ├── stats.tsx
│   │   ├── tech-overview.tsx
│   │   └── testimonial.tsx
│   ├── site/
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── team-card.tsx
│   └── ui/
│       └── (accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb,
│           button, button-group, calendar, card, carousel, chart, checkbox, collapsible,
│           command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
│           hover-card, input, input-group, input-otp, item, kbd, label, menubar,
│           navigation-menu, pagination, popover, progress, radio-group, resizable,
│           scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
│           spinner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group,
│           tooltip, use-mobile)
├── components.json
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   ├── content/
│   │   ├── autolock.ts
│   │   ├── home.ts
│   │   ├── industries-detailed.ts
│   │   ├── industries.ts
│   │   ├── products.ts
│   │   ├── radar-link.ts
│   │   ├── safeguard.ts
│   │   ├── solutions-detailed.ts
│   │   └── solutions.ts
│   ├── nav-mega.ts
│   ├── nav.ts
│   ├── site.ts
│   └── utils.ts
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── public/
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── pnpm-lock.yaml
├── tsconfig.json
└── node_modules/ .next/ (excluded)
```

---

## 3. Pages Inventory

| Route | File | H1 | Metadata |
|-------|------|-----|----------|
| / | app/page.tsx | HeroV2 + HeroCanvas (home only) | layout |
| /about | app/about/page.tsx | — | redirect to /company |
| /accessibility | app/accessibility/page.tsx | Yes | Yes |
| /case-studies | app/case-studies/page.tsx | PillarHero | Yes |
| /company | app/company/page.tsx | PillarHero | Yes |
| /company/board-advisors | app/company/board-advisors/page.tsx | Yes | Yes |
| /company/careers | app/company/careers/page.tsx | Yes | Yes |
| /company/careers/open-roles | app/company/careers/open-roles/page.tsx | Yes | Yes |
| /company/investors | app/company/investors/page.tsx | Yes | Yes |
| /company/our-story | app/company/our-story/page.tsx | Yes | Yes |
| /company/partners | app/company/partners/page.tsx | Yes | Yes |
| /company/team | app/company/team/page.tsx | Yes (compact layout) | Yes |
| /company/values | app/company/values/page.tsx | Yes | Yes |
| /contact | app/contact/page.tsx | PillarHero | Yes |
| /demo | app/demo/page.tsx | Yes | Yes |
| /industries | app/industries/page.tsx | PillarHero | Yes |
| /industries/airport-shopping-mall | app/industries/airport-shopping-mall/page.tsx | IndustryDetail | Yes |
| /industries/automated-depot | app/industries/automated-depot/page.tsx | IndustryDetail | Yes |
| /industries/autonomous-fleets | app/industries/autonomous-fleets/page.tsx | IndustryDetail | Yes |
| /industries/autonomous-fleets/charge-depot | app/industries/autonomous-fleets/charge-depot/page.tsx | Yes (custom) | Yes |
| /industries/logistics | app/industries/logistics/page.tsx | IndustryDetail | Yes |
| /industries/military | app/industries/military/page.tsx | Yes | Yes |
| /industries/mining | app/industries/mining/page.tsx | IndustryDetail | Yes |
| /industries/port | app/industries/port/page.tsx | IndustryDetail | Yes |
| /legal/cookie-policy | app/legal/cookie-policy/page.tsx | Yes | Yes |
| /legal/privacy-policy | app/legal/privacy-policy/page.tsx | Yes | Yes |
| /legal/terms | app/legal/terms/page.tsx | Yes | Yes |
| /products | app/products/page.tsx | PillarHero | Yes |
| /products/autolock | app/products/autolock/page.tsx | Yes (content) | Yes |
| /products/autolock/access-control | app/products/autolock/access-control/page.tsx | ProductFeatureDetail | Yes |
| /products/autolock/autonomous-charging | app/products/autolock/autonomous-charging/page.tsx | ProductFeatureDetail | Yes |
| /products/autolock/fleet-orchestration | app/products/autolock/fleet-orchestration/page.tsx | ProductFeatureDetail | Yes |
| /products/autolock/process-automation | app/products/autolock/process-automation/page.tsx | ProductFeatureDetail | Yes |
| /products/radar-link | app/products/radar-link/page.tsx | Yes (content) | Yes |
| /products/radar-link/drone-tracking | app/products/radar-link/drone-tracking/page.tsx | ProductFeatureDetail | Yes |
| /products/radar-link/micro-localization | app/products/radar-link/micro-localization/page.tsx | ProductFeatureDetail | Yes |
| /products/radar-link/real-time-analytics | app/products/radar-link/real-time-analytics/page.tsx | ProductFeatureDetail | Yes |
| /products/radar-link/v2x-communication | app/products/radar-link/v2x-communication/page.tsx | ProductFeatureDetail | Yes |
| /products/safeguard | app/products/safeguard/page.tsx | Yes (content) | Yes |
| /products/safeguard/compliance-monitoring | app/products/safeguard/compliance-monitoring/page.tsx | ProductFeatureDetail | Yes |
| /products/safeguard/predictive-maintenance | app/products/safeguard/predictive-maintenance/page.tsx | ProductFeatureDetail | Yes |
| /products/safeguard/real-time-alerting | app/products/safeguard/real-time-alerting/page.tsx | ProductFeatureDetail | Yes |
| /products/safeguard/threat-detection | app/products/safeguard/threat-detection/page.tsx | ProductFeatureDetail | Yes |
| /resources | app/resources/page.tsx | PillarHero | Yes |
| /resources/blog | app/resources/blog/page.tsx | Yes | Yes |
| /resources/case-studies | app/resources/case-studies/page.tsx | Yes | Yes |
| /resources/docs | app/resources/docs/page.tsx | Yes | Yes |
| /resources/faq | app/resources/faq/page.tsx | Yes | Yes |
| /resources/playbooks | app/resources/playbooks/page.tsx | Yes | Yes |
| /resources/videos | app/resources/videos/page.tsx | Yes | Yes |
| /resources/whitepapers | app/resources/whitepapers/page.tsx | Yes | Yes |
| /solutions | app/solutions/page.tsx | PillarHero | Yes |
| /solutions/charging-autonomous-vehicles | app/solutions/charging-autonomous-vehicles/page.tsx | SolutionDetail | Yes |
| /solutions/charging-heavy-duty | app/solutions/charging-heavy-duty/page.tsx | SolutionDetail | Yes |
| /solutions/charging-mar | app/solutions/charging-mar/page.tsx | SolutionDetail | Yes |
| /solutions/connectivity-v2i | app/solutions/connectivity-v2i/page.tsx | SolutionDetail | Yes |
| /solutions/connectivity-v2v | app/solutions/connectivity-v2v/page.tsx | SolutionDetail | Yes |
| /solutions/drone-tracking | app/solutions/drone-tracking/page.tsx | SolutionDetail | Yes |
| /solutions/micro-localization | app/solutions/micro-localization/page.tsx | SolutionDetail | Yes |
| /solutions/safety-human-robot | app/solutions/safety-human-robot/page.tsx | SolutionDetail | Yes |
| /solutions/safety-industrial-robots | app/solutions/safety-industrial-robots/page.tsx | SolutionDetail | Yes |
| /solutions/safety-mar | app/solutions/safety-mar/page.tsx | SolutionDetail | Yes |
| /technology | app/technology/page.tsx | Yes | Yes |
| (root layout) | app/layout.tsx | — | Yes |
| (loading) | app/loading.tsx | — | — |
| (error) | app/error.tsx | — | — |
| (not-found) | app/not-found.tsx | — | — |

---

## 4. Components Overview

- **Page/section**: `PageShell`, `Section`, `SectionHeader`; `PillarHero`, `HeroV2`, `HeroCanvas`, `Hero`; `CtaBanner`, `FeatureGrid`, `Faq`, `Stats`, `Testimonial`, `TechOverview`, `IndustryGrid`, `LogoCloud`. `PageShell` and `CtaBanner` use horizontal padding `px-6 lg:px-8`; `Section` provides vertical padding and optional alternating backgrounds.
- **Home hero**: `HeroV2` (home only) — style-guide hero (eyebrow, H1 with gradient line 2, subhead, CTAs); accepts optional `background` (e.g. `HeroCanvas`). `HeroCanvas` — client component: canvas particle/robot grid background with gradient and vignette overlays.
- **PillarHero**: Optional `background?: React.ReactNode` for full-bleed background (e.g. canvas); when set, section uses `min-h-[85vh]`. Other pillar pages (Products, Solutions, etc.) use PillarHero without background.
- **FeatureGrid**: Optional `showImagePlaceholder`, `imageOnLeft` (image on left, edge-to-edge top/bottom/left), `hideIcon`; used on home for “Comprehensive Automation Solutions” with image left and no icons.
- **LogoCloud**: Title configurable (e.g. “Trusted by innovative companies worldwide”). Logos rendered 4× in a horizontal marquee with slow right-to-left scroll (CSS `logo-scroll` 60s, -25% translate for seamless loop).
- **Detail pages**: `IndustryDetail`, `SolutionDetail`, `ProductFeatureDetail` (consume content from `lib/content/` and render H1 from content).
- **Site**: `Navbar` (client, Framer Motion, mega menus, mobile drawer), `Footer`, `TeamCard` (`components/site/team-card.tsx`). **Footer** displays app version (e.g. v1.1.0) next to copyright; version from `lib/site.ts` (`APP_VERSION` / `siteConfig.version`). **TeamCard**: team member card (avatar, name, title, optional bio/social); optional `compact` prop for horizontal, space-efficient layout with 3px left-border accent (used on `/company/team` for Engineering & Operations).
- **CtaBanner**: Accepts both shapes — `title` / `primaryCta` / `secondaryCta` and legacy `headline` / `ctaText` / `ctaHref`; `description` shared.
- **Faq**: Uses `SectionHeader` for title/description; accordion with `FaqItem[]`; supports `variant` and `alt` from `PageShell`.
- **Theme**: `ThemeProvider` (client, next-themes, attribute="class", defaultTheme="system").
- **UI**: Radix-based primitives and composed components in `components/ui/` (accordion, alert, button, card, dialog, form, navigation-menu, sidebar, tabs, etc.; chart uses recharts). `ImagePlaceholder` for placeholder avatars/thumbnails.

---

## 5. Navigation

- **Component**: `components/site/navbar.tsx` (client, Framer Motion).
- **Sticky**: Yes — `sticky top-0 z-50` on `<motion.header>`.
- **Scroll**: Idle `backgroundColor: rgba(7,12,24,0.35)`; scrolled `rgba(7,12,24,0.94)`, border, `backdropFilter: blur(10px)`. Height animates 64px → 56px on scroll.
- **Colours**: Navbar uses constants and CSS variables: link colour `rgba(255,255,255,0.72)` / hover `rgba(255,255,255,1)`, underline `var(--it-blue)`, bar `var(--it-border)`, panel `var(--it-surface)`, CTA `var(--it-blue)` / `var(--it-blue-hover)` / `var(--it-bg)`.
- **Top-level**: Home, Products, Solutions, Industries, Case Studies, Resources, Company; Contact link and "Book a Demo" (→ `/demo`).
- **Mega menus**: Products (SafeGuard, AutoDuck, Radar Link), Solutions (categories), Industries (with Charge Depot sub-item; Military coming soon).
- **Dropdowns**: Case Studies, Resources, Company.
- **Mobile**: Hamburger opens drawer with full nav and "Book a Demo".
- **Fonts**: Chakra Petch (logo), DM Sans (links, CTAs), IBM Plex Mono (product CTA labels in mega).
- **Nav content**: `lib/nav-mega.ts` (product/solution/industry/resource/company items; accent colours use `var(--it-safeguard)`, `var(--it-autolock)`, `var(--it-blue)`, `var(--it-solutions)`, `var(--it-industries)`).

---

## 6. Design Tokens

- **Source**: `app/globals.css` (imported in `app/layout.tsx`).
- **Shad/UI (oklch)**: `:root` and `.dark` set `--background`, `--foreground`, `--card`, `--primary`, `--muted`, `--border`, `--radius`, `--sidebar-*`, etc.; mapped in `@theme inline` as `--color-*`, `--radius-*`.
- **InnoTech (--it-*)**: Base (`--it-bg` #0b1221, `--it-surface`, `--it-surface-raised`), borders, text, blue, safeguard, autolock, solutions, industries, semantic, shadows; light surface set (`--it-light-*`); hero gradients; section alternation (`--it-section-1`–`--it-section-raised`); mid-section and card depth; exposed in `@theme` as `--color-it-*` for utilities.
- **Fonts**: `--font-chakra`, `--font-dm-sans`, `--font-ibm-mono` from layout; `@theme`: `--font-sans`, `--font-mono`, `--font-chakra`.
- **Body**: `style={{ background: 'var(--it-bg)', color: 'var(--it-text-primary)' }}` on `<body>` in layout.
- **Logo cloud marquee**: `@keyframes logo-scroll` in `app/globals.css` (translateX 0 → -25%) for seamless infinite scroll; logos repeated 4× in `LogoCloud`.
- **Hardcoded hex**: InnoTech tokens in globals.css use hex/rgba for values; components reference variables. `components/ui/chart.tsx` uses `#ccc` and `#fff` in recharts Tailwind arbitrary selectors for stroke/fill (third-party chart styling). Hero Style v2 and HeroCanvas use spec colours (e.g. #38B6FF, #060810) for the home hero only.

---

## 7. Route Coverage

All planned areas have corresponding routes:

- **Core**: /, /products, /solutions, /industries, /case-studies, /resources, /company, /contact, /demo, /technology.
- **Products**: /products/safeguard (threat-detection, compliance-monitoring, real-time-alerting, predictive-maintenance), /products/autolock (autonomous-charging, fleet-orchestration, process-automation, access-control), /products/radar-link (v2x-communication, micro-localization, drone-tracking, real-time-analytics).
- **Solutions**: All charging, safety, and connectivity solution routes.
- **Industries**: logistics, autonomous-fleets, autonomous-fleets/charge-depot, automated-depot, port, airport-shopping-mall, mining, military.
- **Resources**: blog, case-studies, whitepapers, playbooks, videos, faq, docs.
- **Company**: our-story, team, values, board-advisors, investors, careers, careers/open-roles, partners.
- **Legal**: /legal/privacy-policy, /legal/cookie-policy, /legal/terms.
- **Other**: /accessibility; /about redirects to /company.

---

## 8. Naming Conventions (design-and-naming.mdc)

| Use | Avoid |
|-----|--------|
| SafeGuard (safety monitoring) | — |
| AutoDuck (autonomous charging + fleet) | — |
| Radar Link (V2X + localization + drone tracking) | — |
| autonomous charging | automated charging |
| Congregate Detection | Congreagate / Congregate as product name |
| Mining | Minning |
| Company (in nav) | Our Company |
| Charge Depot | Overnight Charge Facility |
| Robotic Monitoring System (product name) | predictive monitoring |

Naming conventions are enforced via `docs/legacy-cursor/cursorrules.md` and `docs/legacy-cursor/rules/design-and-naming.mdc`.

---

## 9. Open Items & Recommendations

**Resolved**

- **Footer legal links**: Footer uses `href="/legal/privacy-policy"` and `href="/legal/terms"`; no change needed.
- **Team page section padding**: `/company/team` now uses a single `Section` with compact subsection layout (Leadership + Advisors side-by-side, Engineering & Operations with compact `TeamCard`s, Culture as one paragraph); vertical and horizontal spacing aligned with design rules.

**Minor**

- **Chart component**: `components/ui/chart.tsx` uses `#ccc` and `#fff` in recharts selector strings (e.g. `[stroke='#ccc']`, `[stroke='#fff']`). Optional: replace with theme tokens where recharts supports it for dark/light consistency.

**Optional**

- **H1 on list pages**: `/resources/blog`, `/resources/case-studies`, and `/technology` already have explicit `<h1>` in addition to `SectionHeader`; no action required unless consolidating heading pattern.
- **Navbar colours**: Navbar uses inline `rgba()` constants (e.g. `BAR_BG_IDLE`, `NAV_LINK_COLOR`) rather than CSS variables. Optional: move to `globals.css` as `--nav-*` tokens for consistency with design rules.
