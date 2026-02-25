# Changelog

All notable changes to the InnoTech project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- **TeamCard compact variant** (`components/site/team-card.tsx`) – Optional `compact` prop for a horizontal, space-efficient layout: small avatar/initials, name and title in one row, 3px left-border accent. Used on `/company/team` for Engineering & Operations.

### Changed

- **Team page layout** (`app/company/team/page.tsx`) – Reduced scroll: shorter hero (`py-10 lg:py-14`, smaller title); single main section containing Executive Leadership and Advisors side-by-side (two columns on lg), Engineering & Operations in a dense grid using compact TeamCards, and Our Culture as one short paragraph with a top border. Removed four separate `Section` blocks and full `SectionHeader` usage in favour of compact subsection titles.
- **Section padding and containers** – Team page now uses `Section` with `className="py-12 lg:py-16"` for the main content block. `PageShell` and `CtaBanner` horizontal padding standardised to `px-6 lg:px-8` (was `px-4 sm:px-6 lg:px-8`) site-wide to match design rules (px-6 or px-8).

### Fixed

- **Team page section spacing** – Replaced raw `PageShell` wrappers with `Section` so Executive Leadership, Advisors, Engineering & Operations, and Our Culture have consistent vertical padding (`py-16 md:py-24` from `Section`, overridable via `className`) and proper max-width containers.

---

## [0.2.0] – 2025-02-23

### Added

- **InnoTech design tokens** (`app/globals.css`) – Full `--it-*` token set in `:root`: surfaces (`--it-bg`, `--it-surface`, `--it-surface-raised`), borders, text (primary, secondary, muted, dim), brand blue, product colours (safeguard, autolock, solutions, industries) with subtle/border variants, semantic (success, warning, danger, info), and shadows. Tokens mapped in `@theme inline` as `--color-it-*` for Tailwind utilities.
- **Legal and accessibility routes** – `/legal/privacy-policy`, `/legal/cookie-policy`, `/legal/terms`, `/accessibility` with dedicated pages.
- **Company sub-pages** – `/company/values`, `/company/board-advisors`, `/company/investors`, `/company/partners`, `/company/careers/open-roles`.
- **Resources sub-pages** – `/resources/whitepapers`, `/resources/playbooks`, `/resources/videos`, `/resources/faq`, `/resources/docs`.
- **Industries** – `/industries/military`, `/industries/autonomous-fleets/charge-depot`.
- **App Router UX** – `app/loading.tsx`, `app/error.tsx`, `app/not-found.tsx` for loading state, error boundary, and 404.
- **CtaBanner dual API** – Component accepts both `title` / `primaryCta` / `secondaryCta` and legacy `headline` / `ctaText` / `ctaHref`; all call sites work without prop renames.
- **SITE_AUDIT.md** – Updated as single source of truth: project setup, folder structure, pages inventory (63 routes), components overview, navigation, design tokens, route coverage, naming conventions, and open recommendations. Historical/fixed items removed.

### Changed

- **Navbar and nav-mega** – All colours use CSS variables (`var(--it-text-muted)`, `var(--it-blue)`, `var(--it-surface)`, etc.). No hardcoded hex in `components/site/navbar.tsx` or `lib/nav-mega.ts`.
- **next.config.mjs** – `typescript.ignoreBuildErrors` set to `false` so type errors surface in builds.

### Fixed

- (No fixes in this release.)

---

## [0.1.1] – Pre-token and route expansion

### Added

- **PillarHero component** (`components/sections/pillar-hero.tsx`) – Reusable above-the-fold hero for pillar pages with H1, H2, description, primary/secondary CTAs, optional badge and tertiary text link. SEO-friendly, single-H1-per-page structure.
- **CHANGELOG.md** – Track record of all applied changes.
- **FEATURES.md** – Feature list and project capabilities.
- **NEXT_RECOMMENDATIONS.md** – Next.js components & libraries review and recommendations.
- **ESLint** – `eslint` and `eslint-config-next` (v16.1.6) as dev dependencies; `pnpm lint` now runs Next-aware linting.
- **.eslintrc.json** – ESLint config extending `next/core-web-vitals`.
- **Framer Motion** – `framer-motion` dependency for all navigation animations (scroll, menus, mobile drawer).
- **Navigation mega menu data** (`lib/nav-mega.ts`) – Structured content for Products (3 columns: SafeGuard, AutoLock, Radar Link with accents and CTAs), Solutions (3 categories with solution links), Industries (list + featured callout), Resources dropdown, Company dropdown, and Case Studies “coming soon” dropdown.

### Changed

- **Main navigation bar** – Rebuilt to v0 prompt spec (Feb 2026): full-width sticky bar with scroll behaviour (transparent → `rgba(7,12,24,0.85)` + backdrop blur, height 64px → 56px after 20px scroll, 1px bottom border). Logo: “Inno” (#eaf2ff) + “Tech” (#4d9fff, hover #7bb8ff) + “Systems” (Chakra Petch / DM Sans). Seven nav items: Home, Products, Solutions, Industries, Case Studies, Resources, Company. **Products** mega menu: full-width panel, 3 columns with accent borders and “See all products”. **Solutions** mega menu: 3 categories (Autonomous Charging, Dynamic Safety, Connectivity & Localization) with violet accent and solution cards. **Industries** mega menu: 2 columns (industry list + featured “Operating in extreme environments?” callout), amber accent. **Case Studies** simple dropdown: “Coming soon” state with “Notify Me”. **Resources** and **Company** simple dropdowns (240px / 220px) with dividers and Careers “We're hiring” badge. Desktop overlay (`z-40`) when any menu open; right-side Contact (ghost) and Book a Demo (filled, hover glow). Mobile: hamburger opens full-screen drawer from right with accordions for Products/Solutions/Industries and full-width Book a Demo CTA. All animations via Framer Motion; accessibility (aria, focus-visible rings) preserved.
- **Root layout fonts** – Google Fonts loaded via `next/font`: Chakra Petch, DM Sans, IBM Plex Mono; CSS variables `--font-chakra`, `--font-dm-sans`, `--font-ibm-mono` applied on `html`. `app/globals.css` `@theme` updated so `--font-sans` uses DM Sans and `--font-mono` uses IBM Plex Mono.
- **Pillar page hero sections** – All eight pillar pages (Home `/`, Products `/products`, Solutions `/solutions`, Industries `/industries`, Case Studies `/case-studies`, Resources `/resources`, Company `/company`, Contact `/contact`) now use the new hero content and structure from the InnoTech hero brief (Feb 2026): single H1, H2 subheadline, description paragraph, and primary/secondary (and where applicable tertiary) CTAs. Content is B2B, technical, above-the-fold. Home uses `PillarHero` with content from `lib/content/home.ts`; other pages use `PillarHero` with inline props. PageShell supports an optional `id` prop for in-page anchors (e.g. Case Studies grid, Contact form section).

### Fixed

- **Root layout** – Wired `ThemeProvider` (next-themes) and `Toaster` (sonner) into `app/layout.tsx`. Dark mode and toast notifications now work app-wide; previously both components existed but were not rendered.

---

## [0.1.0] – Initial release

### Added

- Next.js 16 (App Router), React 19, TypeScript.
- Root layout with Navbar, Footer, Vercel Analytics, and Google fonts (Chakra Petch, DM Sans, IBM Plex Mono).
- Home page with Hero, Logo Cloud, Feature Grid, Industry Grid, Tech Overview, Testimonial, Stats, FAQ, and CTA Banner.
- Content-driven pages: Products, Solutions, Industries, Technology, Resources (Blog, Case Studies), About, Company (Team, Our Story, Careers), Contact, Demo.
- Product sub-pages: Radar Link (and feature pages), Safeguard (and feature pages), Autolock (and feature pages).
- Solution and industry detail pages with shared components.
- Site components: sticky Navbar with mobile Sheet menu, Footer with columns and social links.
- Section components: hero, logo-cloud, feature-grid, industry-grid, tech-overview, testimonial, stats, faq, cta-banner.
- shadcn/ui component set (Radix-based): accordion, alert, avatar, badge, button, card, checkbox, dialog, dropdown-menu, form, input, label, navigation-menu, popover, select, separator, sheet, tabs, textarea, toast/sonner, tooltip, and more.
- Theme provider and Sonner toaster components (now used in layout as of [Unreleased]).
- Content layer: `lib/content/` (home, products, solutions, industries) and `lib/site.ts`, `lib/nav.ts`, `lib/utils.ts`.
- Global styles with design tokens and dark mode support (`app/globals.css`).
- Documentation: README.md, CONTENT_GUIDE.md, PROJECT_SUMMARY.md.

---

[Unreleased]: https://github.com/your-org/Innotech/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/your-org/Innotech/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/your-org/Innotech/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/your-org/Innotech/releases/tag/v0.1.0
