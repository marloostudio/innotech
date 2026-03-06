# InnoTech Systems — Design Style Guide

This document describes the current design system: tokens, typography, colours, surfaces, motion, and component patterns. The single source of truth for tokens is **`app/globals.css`**.

---

## 1. Design philosophy

- **Dark-first:** The site is dark-themed only. Base background is a deep navy; no white or light page backgrounds except for intentional contrast (e.g. some sections, contact form, legal pages).
- **Token-driven:** All colours, spacing, and typography use CSS variables. No raw hex or magic numbers in components.
- **Product-aligned:** Brand blue (RADARLink), teal (SafeGuard), orange (AutoLock), violet (Solutions), amber (Industries) are used for accents, borders, and hero tints.
- **Accessible:** Focus rings use brand blue; contrast levels are chosen for readability on dark and light surfaces.

---

## 2. Global style token file

**Location:** `app/globals.css`

Tokens are defined in **`:root`** and optionally overridden in **`.dark`**. Tailwind v4 uses **`@theme inline`** to map those variables into utility classes (e.g. `--it-blue` → `text-it-blue`, `bg-it-surface`).

---

## 3. Typography

### Font stack (loaded in `app/layout.tsx`)

| Role        | Font           | CSS variable     | Usage |
|------------|----------------|------------------|--------|
| Body / UI  | DM Sans        | `--font-dm-sans` | Body copy, nav links, buttons, labels |
| Headings   | Inter          | `--font-inter`   | h1–h4 (exposed in globals as `--font-chakra`) |
| Mono       | IBM Plex Mono  | `--font-ibm-mono`| Metadata, tags, slugs, eyebrow labels |

**Rule:** Nav link labels use DM Sans, not the heading font. Chakra Petch is specified in project design rules for headings but the codebase currently uses Inter; both are sans-serif and can be swapped via the same variable.

### Base styles (from `globals.css`)

- **body:** `font-family: var(--font-dm-sans)`, 16px, line-height 1.65.
- **h1–h4:** `font-family: var(--font-chakra)` (Inter). h1: tight letter-spacing (-0.025em), line-height 1.1. h2: -0.02em, 1.2.
- **Body copy width:** Max 680px for prose (`.prose p`, `.max-w-prose p`).

---

## 4. Colour system

### Dark palette (primary theme)

All values live in `:root` in `app/globals.css`.

**Surfaces**

| Token               | Hex / value      | Use |
|---------------------|------------------|-----|
| `--it-bg`           | `#0b1221`        | Page background (deep navy) |
| `--it-surface`      | `#111827`        | Cards, panels, default section fill |
| `--it-surface-raised`| `#1a2540`        | Elevated cards, hover states |

**Borders**

| Token               | Value      |
|---------------------|------------|
| `--it-border`       | `#1e3050`  |
| `--it-border-subtle`| `#131e30`  |

**Text**

| Token                 | Value      | Use |
|-----------------------|------------|-----|
| `--it-text-primary`   | `#eaf2ff`  | Headlines, primary content |
| `--it-text-secondary` | `#c8d8f0`  | Subheads, emphasis |
| `--it-text-muted`     | `#7a90b0`  | Supporting copy, captions |
| `--it-text-dim`       | `#4a6080`  | Placeholders, disabled |

**Brand & products**

| Token        | Hex / value   | Use |
|--------------|---------------|-----|
| `--it-blue`  | `#4d9fff`     | Primary CTA, links, RADARLink accent |
| `--it-blue-hover` | `#7bb8ff` | Hover state |
| `--it-blue-subtle` | `rgba(77,159,255,0.08)` | Subtle blue tint |
| `--it-blue-border` | `rgba(77,159,255,0.25)` | Blue borders |
| `--it-blue-glow`   | `rgba(77,159,255,0.2)`  | Glow effects |
| `--it-safeguard`   | `#00d4aa`     | SafeGuard (teal) |
| `--it-autolock`    | `#ff6b35`     | AutoLock (orange) |
| `--it-solutions`   | `#b47dff`     | Solutions (violet) |
| `--it-industries`  | `#f59e0b`     | Industries (amber) |

Each product has `-subtle` and `-border` variants (e.g. `--it-safeguard-subtle`, `--it-safeguard-border`).

**Semantic**

| Token          | Use |
|----------------|-----|
| `--it-success`  | Success states (teal) |
| `--it-warning`  | Warnings (amber) |
| `--it-danger`   | Errors, destructive (pink) |
| `--it-info`     | Informational (sky blue) |

**Shadows**

| Token                | Use |
|----------------------|-----|
| `--it-shadow-sm`     | Light depth |
| `--it-shadow-md`     | Cards, dropdowns |
| `--it-shadow-lg`     | Modals, raised panels |
| `--it-shadow-glow-blue` | Blue glow (e.g. buttons) |

### Light palette (contrast sections)

Used on alternating sections, contact form, careers open roles, legal pages.

**Surfaces:** `--it-light-bg`, `--it-light-surface`, `--it-light-surface-2`, `--it-light-border`, `--it-light-border-subtle`

**Text:** `--it-light-text-primary`, `--it-light-text-secondary`, `--it-light-text-muted`, `--it-light-text-dim`

**Accents:** `--it-light-blue`, `--it-light-blue-hover`, `--it-light-blue-subtle`, `--it-light-blue-border`, and product variants (`--it-light-safeguard`, etc.)

**Shadows:** `--it-light-shadow-sm`, `--it-light-shadow-md`, `--it-light-shadow-lg`

### Section alternation (dark pages)

| Token                 | Hex / value | Use |
|-----------------------|-------------|-----|
| `--it-section-1`      | `#0b1221`   | Primary page background |
| `--it-section-2`      | `#0f1a2e`   | Alternate section (step up) |
| `--it-section-3`      | `#111827`   | Card/panel surface |
| `--it-section-raised` | `#1a2540`   | Elevated content |
| `--it-mid-section-bg` | `#0f1a2e`   | Mid-page “powered by” style sections |

### Card system

| Token                     | Use |
|---------------------------|-----|
| `--it-card-default-bg`     | Default card background |
| `--it-card-default-border`| Default card border |
| `--it-card-hover-bg`       | Card hover background |
| `--it-card-hover-border`   | Card hover border (blue tint) |
| `--it-card-hover-shadow`   | Card hover shadow |
| `--it-card-accent-blue`    | 3px left-accent (blue) |
| `--it-card-accent-safeguard` | Left-accent teal |
| `--it-card-accent-autolock`  | Left-accent orange |
| `--it-card-accent-solutions` | Left-accent violet |

**Rule:** Cards use 3px left-border accents only; no full coloured card backgrounds.

---

## 5. Hero gradients

Defined in `globals.css`; use as `background: var(--token)`.

| Token                  | Use |
|------------------------|-----|
| `--it-hero-gradient`   | Default hero (blue radial + navy gradient) |
| `--it-hero-gradient-light` | Light-theme hero |
| `--it-hero-safeguard`  | SafeGuard product hero tint |
| `--it-hero-autolock`   | AutoLock product hero tint |
| `--it-hero-solutions`  | Solutions hero tint |

---

## 6. Spacing and layout

- **Section spacing:** `--section-space-y: 5rem` (mobile), `--section-space-y-md: 7rem` (md and up).
- **Containers:** Page sections use `max-w-screen-xl` or `max-w-7xl`, `mx-auto`, `px-6` or `px-8`.
- **Border radius:** `--radius: 0.625rem`; Tailwind uses `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl` derived from it.

---

## 7. Motion and animation

- **No** looping animations, parallax, or autoplay video (unless muted).
- **Hover:** ~150ms.
- **Dropdowns / menus:** ~200ms.
- **Section reveals:** 300–400ms.
- **Focus ring:** 2px solid `--it-blue`, 2px offset (keyboard nav).

---

## 8. Utility classes (in `globals.css`)

Apply these in components instead of ad-hoc backgrounds.

**Hero**

- `.it-hero` — default dark hero gradient
- `.it-hero-safeguard`, `.it-hero-autolock`, `.it-hero-solutions` — product-tinted heroes
- `.it-hero-light` — light hero

**Sections**

- `.it-section` — primary dark section
- `.it-section-alt` — alternate dark section (with borders)
- `.it-section-mid` — mid-page dark section (bordered)

**Cards**

- `.it-card` — default card surface and hover (lift + shadow + blue border)
- `.it-card-accent-blue`, `.it-card-accent-teal`, `.it-card-accent-orange`, `.it-card-accent-violet` — 3px left-accent only (combine with `.it-card` or similar)

**Chips**

- `.it-chip-dark` — dark value/outcome chip with hover (blue border + subtle fill)

**Eyebrow**

- `.eyebrow` — small uppercase label (IBM Plex Mono, 11px, letter-spacing, `--it-blue`)

**Legal**

- `.legal-ribbon` — “Legal” style label (mono, uppercase, light blue background, 3px left border)

---

## 9. Component conventions

- **Icons:** Lucide React; stroke width **1.5** (never default 2).
- **CTAs:** One primary CTA per section maximum.
- **Body copy:** Max width 680px where applicable.
- **Footer:** Full-width background; inner content in `max-w-7xl mx-auto px-6` or `px-8`.
- **Framer Motion:** Variants defined outside the component; use tokens for durations (150ms hover, 200ms menus, 300–400ms reveals).

---

## 10. Page-Level Section Rhythm Guide

Use this as the reference when setting `variant` (and where applicable `alt`) on each page’s section components.

**Homepage** (`app/page.tsx`)

| Section       | Variant / treatment |
|---------------|----------------------|
| Hero          | dark (HeroV2 + HeroCanvas — keep as-is) |
| Logo Cloud    | dark alt (`it-section-mid` — keep as-is) |
| Feature Grid  | `light-bg` |
| Industry Grid | dark (`it-section-mid` — no variant so component uses own section) |
| Tech Overview | `light-bg` |
| Testimonial   | `dark` + `alt` |
| Stats         | `dark` |
| FAQ           | `dark` |
| CTA Banner    | dark with gradient (`it-cta-banner`) |
| Footer        | dark (keep as-is) |

**Product pages** (SafeGuard, AutoLock — `app/products/safeguard/page.tsx`, `app/products/autolock/page.tsx`)

| Section              | Variant / treatment |
|----------------------|----------------------|
| Pillar Hero          | dark (product-tinted — keep as-is) |
| Feature Grid (features) | `light-bg` |
| Industries Using [X]  | dark (`it-section-mid`) |
| CTA Banner           | dark with gradient (`it-cta-banner`) |
| Footer               | dark (keep as-is) |

**Solution pages** (Autonomous Charging, V2X, etc. — `SolutionDetail`)

| Section              | Variant / treatment |
|----------------------|----------------------|
| Hero                 | dark |
| Key Benefits         | `light-bg` (one light section) |
| How It Works         | dark alt (`it-section-alt`) |
| Industry Applications | dark |
| Related Solutions    | dark alt (`it-section-alt`) |
| CTA Banner           | dark with gradient (`it-cta-banner`) |
| Footer               | dark (keep as-is) |

**About / Our Story** (`app/company/our-story/page.tsx`)

| Section     | Variant / treatment |
|-------------|----------------------|
| Hero        | dark |
| Story prose | dark |
| Timeline    | `light-bg` (one light section) |
| CTA Banner  | dark with gradient (`it-cta-banner`) |
| Footer      | dark (keep as-is) |

**Blog** (`app/resources/blog/page.tsx`)

| Section      | Variant / treatment |
|--------------|----------------------|
| Hero         | dark |
| Article Grid | `light-bg` (whole card grid on light) |
| Footer       | dark (keep as-is) |

**Contact** (`app/contact/page.tsx`)

| Section               | Variant / treatment |
|-----------------------|----------------------|
| Hero                  | dark |
| Form area             | light (already correct) |
| CTA / Schedule section | dark |
| Footer                | dark (keep as-is) |

---

## 11. Tailwind integration

In `@theme inline`, CSS variables are mapped to Tailwind colour utilities, e.g.:

- `bg-it-bg`, `bg-it-surface`, `text-it-text-primary`, `border-it-border`
- `text-it-blue`, `bg-it-safeguard`, `border-it-card-accent-blue`
- Light: `bg-it-light-surface`, `text-it-light-text-primary`, etc.

Use these instead of raw hex in class names. For inline styles, use `var(--it-*)` directly.

---

## 12. File reference

| File | Purpose |
|------|--------|
| `app/globals.css` | All design tokens, utility classes, base typography, hero gradients, section/card system |
| `app/layout.tsx` | Font loading (DM Sans, IBM Plex Mono, Inter) and CSS variable names |
| `.cursorrules` / `.cursor/rules/design-and-naming.mdc` | Design and naming rules (dark only, fonts, no raw hex, cards, CTAs, product names) |

For the definitive list of token names and hex values, always refer to **`app/globals.css`**.
