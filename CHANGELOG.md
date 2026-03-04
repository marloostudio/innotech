# Changelog

All notable changes to the InnoTech project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (major.minor.patch).

- **Major** (x.0.0): Breaking or major product/design changes.
- **Minor** (0.x.0 or 1.x.0): New features, sections, or significant improvements; backward compatible.
- **Patch** (0.0.x or 1.0.x): Bug fixes, copy tweaks, small UI fixes.

---

## [1.4.0] – 2025-03-04

### Added

- **Cookie Policy page** (`/legal/cookie-policy`) – Full Cookie Policy with Effective/Last Updated dates, five sections (What Are Cookies, Cookies We Use, Third-Party Cookies, Managing Your Preferences, Contact). Matches legal layout (breadcrumb, On this page nav, Related/Company sidebar); links to Privacy Policy and third-party cookie policies (Google, Meta, LinkedIn).
- **Legal pages – unified layout** – Terms, Privacy Policy, and Cookie Policy use a shared legal layout: full-width white background, `max-w-screen-2xl` container, breadcrumb under nav (Home → Legal → [page]), Legal ribbon label above H1, left “On this page” sticky sidebar with jump links and scroll-highlighted active section, right “Related” (Privacy Policy, Terms of Service, Cookie Policy) + “Company” (About Us, Our Story, Careers, Contact) sidebar.
- **OnThisPageNav** (`components/legal/on-this-page-nav.tsx`) – Client component for the legal left sidebar: section list with anchor links, Intersection Observer for active-section highlight (bold/primary colour), sticky positioning; “On this page” heading larger and bold.
- **LegalPageSidebar** (`components/legal/legal-page-sidebar.tsx`) – Shared right sidebar for legal pages: Related links (Privacy, Terms, Cookie) with current page emphasised, Company links (About Us, Our Story, Careers, Contact); accepts `currentPage` to highlight the active item.
- **Legal ribbon** – `.legal-ribbon` in `app/globals.css`: inline label (e.g. “Legal”) with 3px blue left border, light blue background, IBM Plex Mono uppercase; used above H1 on all legal pages.
- **Terms & Conditions – full content** – Replaced prior content with full Terms: Effective/Last Updated dates, 15 numbered sections (About InnoTech, Use of Site, Intellectual Property, Personal Data & Privacy, Enquiries/Demos, Third-Party Links, Analytics, Disclaimers, Limitation of Liability, Indemnification, Governing Law, Changes, Severability, Entire Agreement, Contact), horizontal rules between sections, bullet lists and link styling.
- **Cookie Policy – full content** – Replaced “coming soon” with full Cookie Policy: Effective/Last Updated, 10 sections (What Are Cookies, Who Sets Cookies, Categories with Strictly Necessary / Functional / Analytics / Marketing tables, Cookie Duration, Google Tag Manager, Your Cookie Choices with banner/browser/opt-out, Do Not Track, International Transfers, Changes, Contact); tables for cookie names, providers, purposes, durations and third-party opt-out links.
- **Team page – new members and Consultants section** – Added Lara Daneshgaran (SW & Computer Engr., ML/AI, Autonomous Robotics), Shiva Omidzadeh (Autonomous Robotics, Electrical and Systems Engineering), Amir Riahi, Claudio DonGiovanni, Andrea Bottega, Paolo Trabuio (Consultants), and Piergiorgio Lanza (Advisor, Machine Vision and AI). New dedicated “Consultants” section; consultants moved out of Engineering & Operations.
- **TeamCard expertise line** – Optional `expertise` prop on `TeamCard`; when set, role/title and expertise (e.g. “Consultant” vs “Microcontroller Programming, …”) render on separate lines for advisors, engineers with specialties, and consultants.
- **Team cards – social placeholders** – All team entries (leadership, advisors, engineering, consultants) now show LinkedIn and X (Twitter) icons with `#` placeholder links.
- **Section variant `light-bg-2`** (`components/page-shell.tsx`) – Off-white section background using `var(--it-light-surface-2)` for alternating light sections (e.g. Testimonial, FAQ when used on off-white).
- **Resources FAQ page** – `/resources/faq` now uses the shared `Faq` component with dedicated items from `lib/content/faq.ts` (resources-focused questions). Same layout and behaviour as home FAQ (smaller title, full-width Contact us, no bold hover).

### Changed

- **Whitepapers page** – Layout aligned with standard wrapper: hero and content use `max-w-7xl mx-auto px-6 lg:px-8`; blue hero gradient removed in favour of `var(--it-bg)`. Added dummy whitepaper cards (SafeGuard, AutoLock, Radar Link, Congregate Detection, Mining) with 3px left-border accents, topic labels, and “Request PDF” links to showcase how whitepapers will appear.
- **Breadcrumb wrapper – uniform with header** – Resources (whitepapers, playbooks, videos) and Company (values, partners, investors, board-advisors) pages now use the same breadcrumb container as the navbar: `max-w-screen-2xl mx-auto px-8 py-4` so the breadcrumb strip is full width within the same wrapper as the header. Team, our-story, careers, and legal pages already used this wrapper.
- **Footer** – Version number moved below the copyright line (“© {year} InnoTech Systems. All rights reserved.”) on its own line; copyright and version wrapped in a block with `space-y-1`. Copyright text size reduced to `text-[11px]`.
- **Technology That Powers Innovation** – White background and dark headline (`TechOverview` variant `light-bg`; header theme `light` when variant is light-bg).
- **Real Results from Real Implementations** – Off-white background and dark headline (`Testimonial` variant `light-bg-2`).
- **FAQ section** – Title size reduced (`text-2xl md:text-3xl lg:text-4xl`). Description smaller with tighter line height (`text-base md:text-lg leading-snug`). Contact us button full width in left column. Question triggers: removed bold on hover (opacity-only hover). FAQ used on home and `/resources/faq` with same component and behaviour; each page keeps its own question set.
- **Performance Metrics** – White background (`Stats` variant `light-bg`).
- **Ready to Transform Your Operations?** – CTA banner content width increased to `max-w-4xl` so the headline is less likely to wrap.
- **Home page** – Removed the Product Overview (16/9) image placeholder section above the FAQ.
- **Comprehensive Automation Solutions** – Image placeholders in cards no longer show a dashed border (`border-0` on `ImagePlaceholder` in `FeatureGrid`).
- **Serving Critical Industries** – White background via optional `IndustryGrid` variant (`variant="light-bg"` on home). `IndustryGrid` accepts `variant?: SectionVariant`; when set, uses `Section` and dark headline text on light background.
- **Industry cards (Serving Critical Industries)** – Title placed to the right of the icon in a single row (flex layout). Industry title size increased to `text-2xl`.
- **Team page – card layout and styling** – All profile cards use the same full-size card layout (no compact variant). Engineering & Operations and Consultants use 4-column grids at `lg`. TeamCard compact avatar size increased (~2×; `h-14 w-14` → `h-24 w-24`). Left blue accent border removed from compact-style cards. “Our Culture” heading enlarged (`text-2xl lg:text-3xl`, heading font token).
- **Careers page – Open Positions** – Section uses light/white background (`bg-it-light-surface`). Title and description in left 1/3 column, role cards in right 2/3; “Don’t see the right role?” and Get in Touch sit under the Open Positions headline in the left column. Cards use dark surface and text tokens for contrast; SectionHeader and supporting text use light theme for readability. Position card top padding reduced (`pt-4`); Apply button widened (`px-6`). Open Positions section moved above Why InnoTech.
- **Careers page – hero and CTA** – Hero copy merged to “Ready to Make an Impact?” and “Join us in building the future of autonomous operations.” Final CTA block (“Ready to Make an Impact?” with Contact Us / View All Positions) removed.
- **Careers page – Why InnoTech padding** – Why InnoTech block wrapped in `Section variant="dark"` for consistent top and bottom padding.
- **Section padding – site-wide** – Company page intro and Explore InnoTech blocks wrapped in `Section`; Our Values uses `Section variant="light"` instead of a raw `<section>`. Technology, Resources, Industries, Solutions, Contact, blog, case-studies (resources and root), our-story, products, demo, and team pages: custom Section padding (`py-8`, `pt-24 pb-20`, `py-20 md:py-28`) removed in favour of the default `py-20 md:py-28`. Raw `<section>` blocks on our-story (Story + Timeline), case-studies (grid + CTA), and products (grid + Why InnoTech) replaced with `Section`. PageShell remains layout-only (max-width/centering); Section is the single source for section vertical padding.
- **Breadcrumbs** – Removed the `Home` item from all breadcrumb trails on legal, company, solutions, industries, resources, and detail pages; breadcrumbs now start at the relevant section root (e.g. Legal, Company, Solutions).
- **Smooth scroll** – `scroll-behavior: smooth` on `html` in `app/globals.css` for in-page anchor navigation (e.g. legal sidebar jump links).
- **Legal pages – wrapper and breadcrumb** – Legal pages (Terms, Privacy, Cookie) use `max-w-screen-2xl mx-auto px-8` to align with the header; breadcrumb strip under the nav shows Home → Legal → [current page] with light-theme styling.
- **Privacy Policy page – full content** – Replaced with full Privacy Policy: Effective/Last Updated, 14 sections (Who We Are, What Personal Data We Collect, Legal Bases for Processing, How We Use Your Data, Cookies and Tracking, Who We Share Your Data With, International Data Transfers, Your Rights, Data Retention, Data Security, Children's Privacy, Third-Party Links, Changes, Contact Us). Tables for legal bases, service providers, GDPR rights, and retention; links to Cookie Policy.
- **Legal pages – top padding** – Main content container on Terms, Privacy Policy, and Cookie Policy uses `pt-16 pb-32` instead of `py-32` so content sits closer to the header.
- **Cookie Policy – layout** – Main content column uses `min-w-0 flex-1` (no max-width) so wrapper and right sidebar alignment match the Terms page.
- **Legal sidebars – section titles** – "On this page", "Related", and "Company" use the same style: `text-sm font-semibold uppercase tracking-wider`, colour `var(--it-light-text-primary)`, so they are dark and slightly bolder than their sub-items in both left and right sidebars.
- **Terms page – subsection indent** – Numbered subsections (e.g. 2.1, 2.2, 3.2, 3.3) and their content are wrapped in `pl-4` blocks so the entire subsection (heading and paragraphs/lists) is indented under main section numbers.

### Fixed

- (Nothing yet.)

---

## [1.1.0] – 2025-02-25

### Added

- **Hero Style v2** (`components/sections/hero-v2.tsx`) – Home-only hero with style guide: eyebrow “AUTONOMOUS SYSTEMS · ROBOTICS · AI” with status dot, H1 “Intelligent Infrastructure” / “for Autonomous Mobility” (gradient), subhead, primary/secondary CTAs (Request a Demo, Explore Solutions). system-ui typography and spec colours; accepts optional `background` (e.g. HeroCanvas).
- **HeroCanvas** (`components/sections/hero-canvas.tsx`) – Canvas-based background: 3D-style particles, connections, signals, and grid robots (blue-white + orange accent). Used as hero background on home. Gradient and vignette overlays for readability.
- **PillarHero optional background** – `background?: React.ReactNode` prop; when set, renders behind content with `min-h-[85vh]` (other pages unchanged).

### Changed

- **Home page** – Uses `HeroV2` with `HeroCanvas` background; no PillarHero or hero content from `lib/content/home.ts` for hero block. Hero height set to 60vh so content below (trust section) is visible above the fold. Removed 21/9 image placeholder below hero.
- **Trust section** – Title set to “Trusted by innovative companies worldwide”. Logo strip is a continuous marquee: logos repeated 4×, slow right-to-left scroll (60s loop, `logo-scroll` keyframe at -25% for seamless loop).
- **Comprehensive Automation Solutions** – `FeatureGrid` with `imageOnLeft` and `hideIcon`: image on left edge-to-edge (top, bottom, left); no icon in cards; card uses `py-0` when image left; content column has `py-6`.
- **Footer** – Displays app version (e.g. v1.0.0) next to copyright; version from `lib/site.ts` (`APP_VERSION` / `siteConfig.version`), IBM Plex Mono, 11px.

### Fixed

- (No fixes in this release.)

---

## [1.0.0] – 2025-02-25

### Added

- **TeamCard compact variant** (`components/site/team-card.tsx`) – Optional `compact` prop for a horizontal, space-efficient layout: small avatar/initials, name and title in one row, 3px left-border accent. Used on `/company/team` for Engineering & Operations.
- **Footer version** – App version (semver) shown in footer; version sourced from `lib/site.ts` (`APP_VERSION` / `siteConfig.version`).

### Changed

- **Team page layout** (`app/company/team/page.tsx`) – Reduced scroll: shorter hero (`py-10 lg:py-14`, smaller title); single main section containing Executive Leadership and Advisors side-by-side (two columns on lg), Engineering & Operations in a dense grid using compact TeamCards, and Our Culture as one short paragraph with a top border. Removed four separate `Section` blocks and full `SectionHeader` usage in favour of compact subsection titles.
- **Section padding and containers** – Team page now uses `Section` with `className="py-12 lg:py-16"` for the main content block. `PageShell` and `CtaBanner` horizontal padding standardised to `px-6 lg:px-8` (was `px-4 sm:px-6 lg:px-8`) site-wide to match design rules (px-6 or px-8).
- **Changelog versioning** – Standard semver (major.minor.patch) with clear Added/Changed/Fixed sections per release.

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

[Unreleased]: https://github.com/your-org/Innotech/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/your-org/Innotech/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/your-org/Innotech/compare/v0.2.0...v1.0.0
[0.2.0]: https://github.com/your-org/Innotech/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/your-org/Innotech/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/your-org/Innotech/releases/tag/v0.1.0
