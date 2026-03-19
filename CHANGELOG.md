# Changelog

All notable changes to the InnoTech project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (major.minor.patch).

- **Major** (x.0.0): Breaking or major product/design changes.
- **Minor** (0.x.0 or 1.x.0): New features, sections, or significant improvements; backward compatible.
- **Patch** (0.0.x or 1.0.x): Bug fixes, copy tweaks, small UI fixes.

---

## [1.5] – 2026-03-19 03:02 UTC

### Summary
Improved navigation usability and page-section rhythm across the site, alongside refined AutoDuck/SafeGuard/RADARLink product copy and clearer onboarding/support messaging, plus an updated `/products` hero layout with a more reliable full-height image panel.

### Highlights
- Updated AutoDuck naming and CTA copy across navigation and product pages
- Refreshed SafeGuard wording and RADARLink labels for clearer product messaging
- Added “24/7 365” depot automation label in AutoDuck feature copy
- Improved mega menu and dropdown usability with clearer panel boundaries, anchored navbar subtitles, and more reliable hover stability
- Updated the `/products` hero with a full-height/full-width right image panel and refined top spacing for the hero text
- Refined footer "Follow" social block spacing for improved row alignment
- Rolled out consistent breadcrumbs and one-line navigation descriptors across key pages
- Applied section rhythm (light/dark variants) across homepage, products, solutions, About, Blog, and Contact, including cleaned-up `/products` grid backgrounds and card/button hover polish
- Enhanced the `/changelog` release history experience with UTC timestamp rendering
- Updated the Home FAQ onboarding answer for clearer training and support

### Added
- **Page-Level Section Rhythm Guide** (`docs/DESIGN_STYLE.md`) – New Section 10 guidance for recommended section `variant`/`alt` per page type.
- **Breadcrumb strip** (`components/breadcrumb-strip.tsx`) – Added breadcrumb navigation across Products, Solutions, Industries, Resources, Company, and Contact.
- **Navigation descriptors and structure** (`lib/nav-mega.ts`, `components/site/navbar.tsx`) – Added one-line dropdown descriptors and contextual subtitles (including moving Case Studies under Resources).
- **/changelog release history page** (`app/changelog/`) – Added searchable, accordion-based release history for easier browsing of updates.
- **Product pages** (`components/sections/products-hero-image-slider.tsx`, `public/images/products/hero/`) – Added products hero media assets and a dot-only slider component for future hero variations.

### Changed
- **AutoDuck product naming + CTAs** – Renamed AutoLock to AutoDuck across product navigation and site copy; updated “Talk to an Engineer” → “Talk to our experts” (`app/products/page.tsx`, `app/products/autolock/*`, `app/demo/page.tsx`, `lib/content/autolock.ts`).
- **AutoDuck naming across site content** – Replaced AutoLock references with AutoDuck in case studies, investor copy, legal trademarks, whitepapers, and product feature detail pages (`app/case-studies/page.tsx`, `app/company/investors/page.tsx`, `app/legal/terms/page.tsx`, `app/resources/whitepapers/page.tsx`, `app/products/autolock/access-control/page.tsx`, `app/products/autolock/autonomous-charging/page.tsx`, `app/products/autolock/fleet-orchestration/page.tsx`, `app/products/autolock/process-automation/page.tsx`).
- **SafeGuard feature wording** – Replaced “Real-time threat detection” with “Real-time hazard detection” in product copy (`app/products/page.tsx`, `lib/content/safeguard.ts`, `app/products/safeguard/page.tsx`).
- **RADARLink and industry content** – Updated “V2V and V2I communication” → “V2V and V2X communication” (`app/products/page.tsx`, `lib/content/industries-detailed.ts`).
- **Solutions detail copy updates** – Updated how-it-works and related product lists to reference AutoDuck instead of AutoLock (`lib/content/solutions-detailed.ts`).
- **AutoDuck feature detail labels** – Added “24/7 365” to the depot automation feature label on the Products page (`app/products/page.tsx`).
- **Products page section messaging** – Updated Integrated Platform, Scalable Solutions, and Enterprise Grade copy blocks on `/products` (`app/products/page.tsx`).
- **Product pages** – Refined the `/products` grid section styling with a true white (`light-bg`) background and subtle card shadow + hover-shadow feedback, including consistent hover for the primary “Compare Product Lines” CTA (`app/products/page.tsx`).
- **SEO and metadata wording** – Updated site description/keywords to focus on AMRs and industrial robots (`app/layout.tsx`, `lib/site.ts`).
- **Changelog timestamp formatting** – Updated changelog UI formatting and parsing so timestamps render in UTC consistently (`components/changelog-accordion.tsx`, `lib/changelog.ts`).
- **Navbar mega menu and dropdown boundaries** (`components/site/navbar.tsx`) – Visible boundary for all dropdown panels: full border using `var(--it-border)`, strong bottom shadow (`0 8px 32px rgba(0,0,0,0.5)`), background `#0d1526`, and `backdrop-blur-sm`. Mega menus (Products, Solutions, Industries) also have a subtle top-edge highlight (1px `rgba(77, 159, 255, 0.15)`). Simple dropdowns (Resources, Company) use the same border, shadow, background, and backdrop. Replaces previous `border-t-2` / PANEL_BG styling.
- **Product pages** – Updated the `/products` hero image panel to be full-height/full-width with improved alignment and top spacing (`app/products/page.tsx`).
- **Homepage** – Applied section rhythm variants and removed legacy Testimonial and Performance Metrics sections from the home page to improve content focus and scannable flow (`app/page.tsx`).
- **Design tokens** – Increased global font sizing for section ribbon/pill badges via the `it-ribbon-badge` utility so labels read more clearly across the site (`app/globals.css`, `components/section-header.tsx`, `app/resources/blog/page.tsx`).
- **Navigation restructure and dropdown descriptors** (`lib/nav-mega.ts`, `lib/nav.ts`) – Moved Case Studies under Resources and standardized one-line descriptors across Resources and Company dropdowns.
- **Section rhythm across key pages** (`app/page.tsx`, `app/products/safeguard/page.tsx`, `app/products/autolock/page.tsx`, `components/solution-detail.tsx`, `app/company/our-story/page.tsx`, `app/resources/blog/page.tsx`, `app/contact/page.tsx`) – Applied light/dark section variants consistently across main content blocks for improved contrast and flow.
- **Home FAQ onboarding answer** (`lib/content/home.ts`) – Updated the training and support answer to clarify on-site training, detailed documentation, and ongoing support.
- **Blog hero typography and Contact CTA readability** (`app/resources/blog/page.tsx`, `app/contact/page.tsx`) – Refined blog hero typography and updated the “Prefer to Talk?” section styling for clearer readability.

### Fixed

- **Navbar subtitle layout shift** (`components/site/navbar.tsx`) – Anchored navbar subtitles in a fixed-height container so labels don’t jump on hover.
- **Navbar mega menu hover stability** (`components/site/navbar.tsx`) – Prevented mega menu panels from closing randomly while moving the cursor across panel options.
- **Footer** (`components/site/footer.tsx`) – Refined spacing/vertical rhythm for the footer “Follow” social block so it aligns with other footer column headings.
- **Products** (`app/products/page.tsx`) – Simplified `/products` hero media rendering so the right image reliably fills the column (static full-height image panel).
- **Blog** – Updated Tailwind arbitrary shadow class formatting on the Blog page to avoid lint warnings while preserving existing visuals (`app/resources/blog/page.tsx`).

## [1.4.8] – 2026-03-05 22:15 UTC

### Summary

Improved layout consistency across key pages, refined section styling for a smoother visual flow, and added a dedicated changelog page that is easy to scan. Navigation was restructured for clearer information architecture: Case Studies moved under Resources, top-level items gained contextual subtitles, and all mega menus and dropdowns now use consistent card-style layouts with one-line descriptors and unified hover behaviour.

### Highlights

- Added a new design rhythm guide for page section flow
- Refined homepage section balance across light and dark backgrounds
- Updated blog hero typography
- Updated product and solution page layout consistency
- Improved About page timeline and story presentation
- Refined Contact page CTA styling
- Changelog page: search and filters in sidebar; sticky sidebar while scrolling; collapsed rows show only version, date, and time for faster scanning
- Changelog page: summary and details appear when you expand a release; optional technical details in a collapsible section
- Navigation restructure: Case Studies moved into Resources dropdown; top-level nav shows Products, Solutions, Industries, Resources, Company with contextual subtitles when open
- Solutions mega menu: "Dynamic Safety" renamed to "Safety & Monitoring"; left-border accents (blue, teal, violet) per category
- Industries mega menu: two-column card grid with one-line descriptors; Charge Depot removed (content merged into Automated Depots); featured card removed; "See all industries" footer
- Resources and Company dropdowns: one-line descriptors for every item; Case Studies as second item under Resources; Product Docs with divider; Partners and Careers badges (Coming soon / We're hiring)
- Nav hover consistency: 150ms ease-out, surface-raised background, and description text brightening across all mega menus and dropdowns
- Navbar subtitle no longer shifts layout on hover: fixed-height container and opacity/transform reveal so labels stay anchored

### Added

- **Page-Level Section Rhythm Guide** (`docs/DESIGN_STYLE.md`) – New Section 10 documents recommended `variant` (and `alt`) per page type: Homepage, Product pages (SafeGuard, AutoDuck), Solution pages (SolutionDetail), About / Our Story, Blog, and Contact. Ensures consistent dark→light→dark rhythm across the site.
- **Breadcrumb strip** (`components/breadcrumb-strip.tsx`) – New component and rollout across pillar and key sub-pages: Products, Solutions, Industries, Resources (including Blog, FAQ, Case Studies, Docs), Company, Contact, Technology, Case Studies, Demo, Accessibility, Careers (and Open Roles). Uses `max-w-screen-2xl`, dark-theme tokens, DM Sans. Blog and FAQ show Resources → Blog / FAQ; product pages show Products → [Product]; careers show Company → Careers → Open Roles where applicable.
- **Navigation descriptors and structure** (`lib/nav-mega.ts`, `components/site/navbar.tsx`) – One-line descriptors for all Resources and Company dropdown items; Case Studies added to Resources (second item); contextual subtitles under each top-level nav item (e.g. "What we build", "Problems we solve") shown when menu is open; Industries items given descriptors (e.g. "Fleet charging and monitoring for delivery operations"); Military "Defence applications" with Coming soon badge; SimpleDropdown and Industries mega menu render descriptors; mobile drawer Resources and Company expandable with same items.

### Fixed

- **Navbar subtitle layout shift** (`components/site/navbar.tsx`) – Top-level nav items (Products, Solutions, Industries, Resources, Company) no longer push the label upward on hover. Subtitle is always in the DOM inside a fixed-height container (`h-[44px]`); visibility toggled with `opacity` and `translate-y` (default `opacity-0 -translate-y-1`, hover/open `opacity-100 translate-y-0`) and `transition-all duration-150` so the label stays anchored and no layout shift occurs.

### Changed

- **Navbar and nav-mega** (`components/site/navbar.tsx`, `lib/nav-mega.ts`) – Case Studies removed from top-level nav and placed in Resources dropdown. Solutions category "Dynamic Safety" renamed to "Safety & Monitoring"; Solutions accent colours set per column (blue, teal, violet). Industries: Charge Depot removed; "Automated Depot" → "Automated Depots" with descriptor; two-column card grid with left-border accents and descriptors; featured "Operating in extreme environments?" card removed; "See all industries" footer link. Company dropdown: Board & Advisors → `/company/board-advisors`, Investor Relations → `/company/investors`, Partners → `/company/partners` with "Coming soon" badge; all items given descriptors. Products mega: taglines and feature labels aligned to spec (e.g. AutoDuck "Robotic Charging", "Fleet Orchestrat."); 3px left-border accents. All interactive nav items: hover uses `var(--it-surface-raised)`, 150ms ease-out, description text brightens (muted → secondary); no underlines. CaseStudiesDropdown removed. NavMegaKey type no longer includes `case-studies`.
- **Footer and main nav data** (`lib/nav.ts`) – "Dynamic Safety" → "Safety & Monitoring" in mainNav and footerNav; Case Studies moved under Resources in mainNav; Resources children aligned with nav-mega (Blog & Insights, Case Studies, Whitepapers, etc.).
- **Homepage** (`app/page.tsx`) – Section rhythm applied: Feature Grid and Tech Overview `light-bg`; Industry Grid dark (`it-section-mid`, no variant); Testimonial and FAQ `dark` (+ `alt` on Testimonial); Stats `light-bg`; CTA Banner unchanged (dark with gradient). Comments aligned to rhythm guide.
- **Product pages** (`app/products/safeguard/page.tsx`, `app/products/autolock/page.tsx`) – Features block wrapped in `<Section variant="light-bg">` with `SectionHeader theme="light"`; Industries Using [X] remains `it-section-mid`; CTA Banner unchanged.
- **Solution pages** (`components/solution-detail.tsx`) – Key Benefits section uses `<Section variant="light-bg">` and light-theme benefit cards; How It Works remains `it-section-alt`; Related Solutions (Powered By) changed from `it-section-mid` to `it-section-alt`.
- **About / Our Story** (`app/company/our-story/page.tsx`) – Hero and breadcrumbs use dark tokens and `it-section`; story prose `<Section variant="dark">`; Timeline `<Section variant="light-bg">` with `SectionHeader theme="light"` and light-theme timeline content; CTA Banner unchanged.
- **Blog** (`app/resources/blog/page.tsx`) – Hero `<Section variant="dark">`; article card grid wrapped in `<Section variant="light-bg">`; hero title font set to DM Sans (no Inter).
- **Contact** (`app/contact/page.tsx`) – CTA / Schedule section (“Prefer to Talk?”) changed from light to `<Section variant="dark">` with dark text and button styling; Hero and form area unchanged.
- **Changelog page** (`app/changelog/`, `lib/changelog.ts`, `components/changelog-accordion.tsx`, `changelog-layout.tsx`, `changelog-sidebar.tsx`) – New `/changelog` route: release history parsed from CHANGELOG.md with optional `### Summary` and `### Highlights` for user-facing display. Parser groups changes by area (Homepage, Product Pages, etc.), strips file paths from main view, and collects paths for an optional “Technical details” collapsible. Search and filter by type (Added/Changed/Fixed) live in the sidebar; sidebar is sticky on desktop (`lg:sticky lg:top-24 lg:self-start`). Accordion trigger when closed shows only version, date, and optional Git push time; summary and body (highlights, grouped details, technical) appear in expanded content. Page uses no hero; title block (badge, H1, H2, description) is at top of main column. Section container uses `max-w-screen-2xl mx-auto px-8` to match header width. “Expand all” / “Collapse all” buttons above the list.
- **PillarHero** (`components/sections/pillar-hero.tsx`) – Optional `primaryCta` / `secondaryCta` and new `compact` prop for minimal heroes (reduced height, no CTA block); new `align` prop (`center` | `left`). Changelog no longer uses PillarHero; title moved into layout.
- **Footer** (`components/site/footer.tsx`) – Version number (e.g. v1.4.8) now links to `/changelog`; added Changelog link in bottom legal row.

---

## [1.4.7] – 2026-03-05

### Changed

- **Design tokens** (`app/globals.css`) – Card hover border opacity increased: `--it-card-hover-border` from `0.45` to `0.55` so hover states on cards are more noticeable. Other quick-win tokens (`--it-section-2`, `--it-text-secondary`, `--it-text-muted`, `--it-surface-raised`, `.it-heading-bright`) were already in place from earlier token refinements.

---

## [1.4.6] – 2025-03-05

### Changed

- **Feature grid** (`components/sections/feature-grid.tsx`) – Cards, icon container, title, and description now switch between light and dark tokens based on section variant (`isLightSection`). On dark sections cards use `it-card`, raised surface, and blue hover border/shadow; on light sections they keep light surface and shadow.
- **Industry grid** (`components/sections/industry-grid.tsx`) – Industry cards and “View All Industries” button are variant-aware: light sections use light surface/border/text; dark sections use `--it-surface-raised`, `--it-card-hover-border`/shadow, and dark text. Added `cn` import.
- **Stats** (`components/sections/stats.tsx`) – Title, stat values, labels, notes, and footer paragraph use `isLightSection` to choose light vs dark text tokens; dark sections use `it-heading-bright` for the title and `text-it-blue` for values.
- **Tech overview** (`components/sections/tech-overview.tsx`) – TabsList, TabsTrigger, Card, CardTitle, CardDescription, check icon, and feature list text are conditional on `isLightSection`. Dark sections use `--it-surface`, `--it-surface-raised`, `--it-blue-subtle`, and dark text tokens. Added `cn` import.
- **Testimonial** (`components/sections/testimonial.tsx`) – Card and all content (title, client, Challenge/Solution badges and copy, note) use `isLightSection` for light vs dark tokens. Removed default `className` fallback on `Section`; card uses raised surface and dark borders/shadows on dark sections. Added `cn` import.

---

## [1.4.5] – 2025-03-05

### Changed

- **Design tokens** (`app/globals.css`) – Refined dark-theme tokens: `--it-surface-raised` (#1a2540 → #1c2a48), `--it-text-secondary` and `--it-text-muted` (slightly lighter for readability), `--it-section-2` and `--it-mid-section-bg` (#0f1a2e → #121d33). Card hover: stronger blue border and shadow (`--it-card-hover-border`, `--it-card-hover-shadow`).
- **Section component** (`components/page-shell.tsx`) – Section alternation: `variant="light-bg"` / `variant="light-bg-2"` now use utility classes `it-section-light` and `it-section-light-alt` (with edge borders) instead of inline background; dark sections continue to use `it-section` / `it-section-alt`. Light sections no longer receive inline `background` so the utility classes control gradient and borders.
- **CTA banner** (`components/sections/cta-banner.tsx`) – Replaced `bg-it-bg border-t border-it-border` with utility class `it-cta-banner` for subtle radial blue-tinted gradient at the bottom edge and top border, giving a clearer visual “destination” at the bottom of each page.
- **SectionHeader** (`components/section-header.tsx`) – Section headings on dark backgrounds now use the `it-heading-bright` utility (pure white with subtle blue text-shadow) instead of `text-it-text-primary` for stronger visual hierarchy against body text.

### Added

- **Design tokens & utilities** (`app/globals.css`) – New tokens: `--it-cta-gradient` (dark-to-navy with blue tint for CTA banner), `--it-light-edge-top` / `--it-light-edge-bottom` (light section edges), `--it-placeholder-dark` / `--it-placeholder-light` (image placeholder gradients). New utility classes: `.it-cta-banner` (gradient background, top border), `.it-section-light` and `.it-section-light-alt` (light section with edge borders), `.it-section-divider` (gradient horizontal rule between dark sections), `.it-heading-bright` (pure white headings with subtle blue glow on dark backgrounds).

---

## [1.4.4] – 2025-03-05

### Fixed

- **Navbar dropdown close timing** – Added a 300ms delay before closing the nav dropdown when the cursor leaves the nav/dropdown area so users have time to move the cursor into the dropdown panel. Closing is cancelled if the cursor re-enters the nav or dropdown within the delay (`components/site/navbar.tsx`).

---

## [1.4.4] – 2025-03-05

### Added

- **Image folder structure** – `public/images/` with subfolders `team/`, `hero/`, `products/`, `company/`, `og/` for site assets. `public/images/README.md` documents the hierarchy and naming convention for team member photos (e.g. `fred-daneshgaran.jpg`); team photos go in `public/images/team/`.
- **Design style guide** – `docs/DESIGN_STYLE.md`: in-depth documentation of the design system (tokens, typography, colour palettes, surfaces, hero gradients, motion, utility classes, component conventions) with reference to `app/globals.css` as the token source.

### Changed

- **Team page – hero subtitle** – "Passionate experts building the future of autonomous operations" → "Passionate experts building the future of intelligent infrastructure".

---

## [1.4.3] – 2025-03-05

### Changed

- **Footer tagline** – Updated company tagline under InnoTech Systems: "Autonomous infrastructure for the future of mobility." → "Intelligent Infrastructure for Autonomous Mobility" (`lib/site.ts`).
- **Team page – roster and structure** – Executive Leadership: removed Kash Olia; kept Fred Daneshgaran only. Removed all "Dr." from names (Fred Daneshgaran, Marina Mondin). Removed from Engineering & Operations: Behzad Zarifkar, Fausto Lizzio, Antonio Marangi, Jason May, Ramtin Haddadzadeh. Moved Marina Mondin from Advisors to Engineering & Operations; moved Claudio DonGiovanni from Consultants to Advisors. Removed Consultants section and all consultant entries (Amir Riahi, Andrea Bottega, Paolo Trabuio).
- **Team page – titles** – Nayer Shahri → Business Development and Finance; Marina Mondin → AI and ML; Lara Daneshgaran and Shiva Omidzadeh → Robotics Application Engineer; Claudio DonGiovanni → Hardware Design.
- **Team page – Advisors subtitle** – "AI, ML, and technology strategy" → "AI, ML and Hardware".
- **Social – Twitter logos removed** – Twitter/X icon and link removed from footer "Follow" section and from team cards (`components/site/footer.tsx`, `components/site/team-card.tsx`). TeamCard no longer renders Twitter link; footer shows LinkedIn and YouTube only.
- **Team page – LinkedIn links** – Set real LinkedIn URLs for Fred Daneshgaran, Lara Daneshgaran, Marina Mondin, Nayer Shahri, and Piergiorgio lanza. Shiva Omidzadeh has no LinkedIn (link cleared so no icon is shown).

---

## [1.4.2] – 2025-03-05

### Changed

- **Technology That Powers Innovation (home)** – Tab styling updated to align with design tokens: active tab uses 3px left-border accent in `--it-light-blue`, subtle blue background (`--it-light-blue-subtle`), and medium font weight; inactive tabs use `--it-light-text-muted`; tab list uses light shadow and 150ms transition for state changes.
- **Final CTA (home)** – Removed "robotics" from description: "Schedule a consultation with our robotics experts..." → "Schedule a consultation with our experts to discuss your automation goals." (`lib/content/home.ts`).

---

## [1.4.1] – 2025-03-05

### Changed

- **Hero (home) – eyebrow ribbon** – Removed the blue status dot before “AUTONOMOUS SYSTEMS · ROBOTICS · AI” in the hero ribbon (`components/sections/hero-v2.tsx`).
- **Hero (home) – subhead copy** – Updated description: “robotic monitoring” → “robotic safety monitoring”, “electric fleets” → “intelligent fleets”.
- **Navbar dropdowns** – Dropdowns no longer auto-close after a delay. They stay open until the cursor leaves both the nav bar and the open dropdown panel; cursor-over-dropdown is treated as “inside” the nav region so the menu does not close when hovering the panel. Ref is forwarded from mega menus (Products, Solutions, Industries) and simple dropdowns (Case Studies, Resources, Company) for accurate hit-testing.

---

## [1.4.1] – 2025-03-05

### Changed

- **Serving Critical Industries (home)** – Section subtitle updated to “Advanced AI, computer vision and telecommunication for autonomous charging, safe robot-human collaboration and V2X”. “View All Industries” CTA button removed (home no longer passes `showCta` to `IndustryGrid`).
- **Serving Critical Industries – industry list** – Removed Agriculture and Healthcare. Added Autonomous Driving (subtitle: “Automated hands-free charging”). Warehousing subtitle set to “Dynamic safety zoning for human-robot collaboration”. Aerospace & Defense subtitle set to “Reliable and ultra-precise drone tracking”.

---

## [1.4.1] – 2025-03-05

### Changed

- **Product naming and copy** – SafeGuard: tagline updated to “Safety and Hazard Detection”; submenu features set to Hazard Detection, Dynamic Zoning, Asset and Human Monitoring, Real-Time Alerting. AutoLock renamed to **AutoDuck** across nav, product content, and site copy; tagline “Autonomous charging & fleet control” → “Autonomous Charging and Fleet Management”; CTA “View AutoDuck”. **Radar Link** renamed to **RADARLink** site-wide (nav, product pages, whitepapers, legal, case studies, industries/solutions content; slugs and URLs unchanged). RADARLink tagline/descriptions: “V2X, localization and drone tracking” → “V2X, Microlocalization and Drone Tracking”, then “Micro-localization” / “Microlocalization” replaced with **Cm-level Localization and Tracking** (product dropdown, solutions link, RADARLink content, case studies, our story, industries). “Drone Tracking & ID” → “Drone Tracking” in Product and Solutions menus. “Real-Time Analytics” → “Real-Time Asset Tracking” for RADARLink feature name (slug `real-time-analytics` retained). Design rules (`.cursorrules`, `.cursor/rules/design-and-naming.mdc`) updated to reflect AutoDuck, RADARLink, and Cm-level Localization and Tracking.

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

- **Whitepapers page** – Layout aligned with standard wrapper: hero and content use `max-w-7xl mx-auto px-6 lg:px-8`; blue hero gradient removed in favour of `var(--it-bg)`. Added dummy whitepaper cards (SafeGuard, AutoDuck, Radar Link, Congregate Detection, Mining) with 3px left-border accents, topic labels, and “Request PDF” links to showcase how whitepapers will appear.
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
- **Navigation mega menu data** (`lib/nav-mega.ts`) – Structured content for Products (3 columns: SafeGuard, AutoDuck, Radar Link with accents and CTAs), Solutions (3 categories with solution links), Industries (list + featured callout), Resources dropdown, Company dropdown, and Case Studies “coming soon” dropdown.

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

[Unreleased]: https://github.com/your-org/Innotech/compare/v1.4.6...HEAD
[1.4.6]: https://github.com/your-org/Innotech/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/your-org/Innotech/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/your-org/Innotech/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/your-org/Innotech/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/your-org/Innotech/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/your-org/Innotech/compare/v1.4.0...v1.4.1
[1.1.0]: https://github.com/your-org/Innotech/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/your-org/Innotech/compare/v0.2.0...v1.0.0
[0.2.0]: https://github.com/your-org/Innotech/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/your-org/Innotech/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/your-org/Innotech/releases/tag/v0.1.0
