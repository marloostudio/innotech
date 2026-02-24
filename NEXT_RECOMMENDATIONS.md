# Next.js Components & Libraries – Review & Recommendations

Review of the InnoTech codebase for additional Next.js components or libraries.

---

## What You Already Have

- **Next.js 16** (App Router), **React 19**, TypeScript
- **next/font** (Chakra Petch, DM Sans, IBM Plex Mono in `app/layout.tsx`)
- **next/link** and **next/navigation** (Link, usePathname) used across pages
- **@vercel/analytics** in root layout
- **next-themes** and **sonner** (ThemeProvider and Toaster are now wired in root layout)
- **shadcn/ui** (Radix-based) + **react-hook-form**, **zod**, **@hookform/resolvers**
- **globals.css** with light/dark design tokens

---

## Fix Applied

**ThemeProvider & Toaster in layout**  
`ThemeProvider` and the Sonner `Toaster` were present but not used in the root layout. The root layout now wraps the app with `ThemeProvider` and renders `<Toaster />`, so:

- Dark mode (and `useTheme()` in Sonner) works correctly.
- Toasts will show when you call `toast()` from `sonner`.

No new libraries were added for this.

---

## Recommended Additions

### 1. ESLint for Next.js (recommended)

Your `package.json` has `"lint": "eslint ."` but **eslint** and **eslint-config-next** are not in dependencies, so the script may fail or not apply Next-specific rules.

**Add:**

```bash
pnpm add -D eslint eslint-config-next
```

Then add an ESLint config (e.g. `eslint.config.mjs` or `eslint.config.js`) that extends `next/core-web-vitals` (or your preferred Next config). This is a **tooling/library** addition, not a new Next component.

---

### 2. Use `next/image` When You Add Images

You don’t use **next/image** yet; there are no image-heavy components in the tree. When you add hero images, logos, or product photos:

- Use the built-in **`next/image`** component (no new dependency).
- It gives automatic optimization, responsive sizing, and lazy loading.

No new library; just use `import Image from 'next/image'` and replace `<img>` where appropriate.

---

### 3. App Router Conventions (no new libraries)

These are **Next.js conventions** that improve UX; they don’t require new packages:

| File | Purpose |
|------|--------|
| `app/loading.tsx` | Root loading UI while the app shell loads |
| `app/error.tsx` | Root error boundary with recovery UI |
| `app/not-found.tsx` | Custom 404 page |
| `app/sitemap.ts` | Optional; dynamic sitemap for SEO |
| `app/robots.ts` | Optional; robots.txt for SEO |

You can add these gradually. Sitemap and robots are built into Next; no extra libraries.

---

### 4. Optional: `next/dynamic`

For heavy client components (e.g. charts, carousels), you can use **next/dynamic** to code-split and optionally disable SSR:

```tsx
import dynamic from 'next/dynamic'
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), { ssr: false })
```

No new dependency; it’s part of Next.js.

---

### 5. Contact Form Backend (when you’re ready)

The contact and demo forms are presentational (no `action` or API). When you want them to submit:

- Add an **App Route** (e.g. `app/api/contact/route.ts`) or a **Server Action**.
- Optionally use an email provider (e.g. **Resend**, **SendGrid**) or another backend – that’s a separate integration, not a Next component.

Your stack already has **react-hook-form** and **zod**; you can add validation and `toast()` from **sonner** for success/error without new UI libraries.

---

### 6. Middleware

You don’t have a **middleware.ts** at the project root. Add one only if you need:

- Auth redirects
- Geo/locale logic
- Rewrites or headers

No new library; create `middleware.ts` at the root when needed.

---

## Summary

| Category | Action |
|----------|--------|
| **Layout** | Done: ThemeProvider + Toaster added in root layout. |
| **Linting** | Add `eslint` + `eslint-config-next` and an ESLint config. |
| **Images** | Use `next/image` when you add images (built-in). |
| **UX** | Optionally add `loading.tsx`, `error.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`. |
| **Dynamic** | Use `next/dynamic` for heavy client components if needed. |
| **Forms** | Add an API route or Server Action + email service when you connect the contact form. |

No further Next.js *components* or *libraries* are required for the current feature set; the main gap was wiring **ThemeProvider** and **Toaster** in the layout, which is now in place.
