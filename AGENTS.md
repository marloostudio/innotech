# AGENTS.md — InnoTech Systems

> **Purpose:** Minimum context for agents changing the InnoTech website.  
> **Updated:** 2026-10-21 — safety certification wording and Automate 2026 promotion state.  
> **Stack:** Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion. `pnpm` is recommended in `README.md`; npm scripts also work.

Read this file first. Open detailed documentation only for the task at hand. The repository contains historical notes and archived Cursor rules; neither overrides the current application code.

## Sources of truth

| Topic | Canonical source | Supporting document |
| --- | --- | --- |
| Agent workflow and current guardrails | This file | — |
| Rendered behavior and copy | `app/`, `components/`, `lib/content/` | `CONTENT_GUIDE.md` |
| Company identity, version, canonical URL fallback | `lib/site.ts` | `README.md` |
| Home FAQ | `lib/content/home.ts` → `app/page.tsx` | `CONTENT_GUIDE.md` |
| SafeGuard claims and cards | `lib/content/safeguard.ts` → `app/products/safeguard/page.tsx` | `CONTENT_GUIDE.md` |
| Header, footer, event promotion | `components/site/navbar.tsx`, `components/site/footer.tsx`, `app/page.tsx` | `FEATURES.md` |
| Public, gated, and crawlable routes | `lib/site-access.ts`, `proxy.ts`, `app/robots.ts`, `app/sitemap.ts` | — |
| Design tokens and layout | `app/globals.css`, nearby components | `docs/DESIGN_STYLE.md` |
| Forms and integrations | `app/actions/`, `lib/email/`, `lib/hubspot/`, `.env.example` | `README.md` |
| Change history | `CHANGELOG.md` | `docs/website-owner-updates.md` for owner-facing summaries |

If documentation disagrees with rendered code, verify the current behavior and correct the stale document. Do not treat a historical changelog entry as a current UI requirement.

## Task navigation

| Task | Start here | Check if affected |
| --- | --- | --- |
| Home content or FAQ | `lib/content/home.ts`, `app/page.tsx` | `components/sections/faq.tsx` |
| SafeGuard claim or layout | `lib/content/safeguard.ts`, `app/products/safeguard/page.tsx` | SafeGuard application and feature routes |
| Product/navigation copy | Matching `lib/content/*` module, `lib/nav-mega.ts` | Product route and mobile navbar |
| Retire or restore event promotion | `app/page.tsx`, `components/site/navbar.tsx` | `app/events/automate-2026/page.tsx`, route access |
| Public route or SEO change | Matching page metadata, `lib/site-access.ts` | `app/robots.ts`, `app/sitemap.ts`, `lib/seo/` |
| Form or CRM change | Matching `app/actions/*`, form component | `lib/email/`, `lib/hubspot/`, `.env.example` |
| Visual change | Nearest component, `app/globals.css` | `docs/DESIGN_STYLE.md` |
| Documentation sync | This file and the specific affected doc | Current code before editing prose |

## Current product and event facts

- InnoTech products are **not yet safety certified**. They are designed to meet the cited standards; official third-party certification is in progress. The home FAQ and SafeGuard card must communicate that status clearly. Do not add a certified, compliant, or approved claim without verified client evidence and approved wording.
- The SafeGuard card title is **Functional Safety Architecture**. Its standards list and certification note live in `safeguardBrochureCards`; the manufacturing highlight in the same file must not contradict it.
- The Automate 2026 home announcement and sitewide top bar are retired. Keep `/events/automate-2026` available as an archive; its historical content and intake flow remain unless the user requests a separate change.
- Do not invent performance metrics, client outcomes, certifications, contact details, pricing, or event details. Use the relevant source file or ask for missing facts.

## Working conventions

- Make focused changes in the existing App Router and content patterns. Put shared marketing copy in `lib/content/` when the page already consumes it.
- Match existing CSS tokens and responsive components. Avoid new libraries or a second component/style system for a small change.
- Preserve unrelated working-tree changes. Stage only files belonging to the task. Commit, push, and deploy when the user requests those actions; a Git push alone does not prove that production deployed.
- Keep secrets out of commits and tool output. Use `.env.example` to discover variable names; do not print `.env` or `.env.local`.
- When changing route visibility, keep the access logic, robots rules, and sitemap in agreement. Some pages require the preview gate even though their source routes exist.

## Discovery and documentation tools

Use codebase-memory-mcp for code discovery. Index this repository if needed, then prefer `search_graph` → `trace_path` → `get_code_snippet` → `query_graph` → `get_architecture`. Use text search for copy, configuration, non-code files, or insufficient graph results.

For questions about a library, framework, SDK, API, CLI, or cloud service, resolve the library ID and fetch current Context7 documentation. Ordinary refactoring, business logic, and code review do not require Context7.

## Verification and SSOT close-out

For code changes, run focused checks and then a production build when practical:

```bash
pnpm install
pnpm exec tsc --noEmit
pnpm exec eslint <changed-code-files>
pnpm build
```

`npm ci`, `npx tsc --noEmit`, targeted `npx eslint`, and `npm run build` are valid with the committed npm lockfile. Report checks actually run and any limitation. A successful build must retain `/events/automate-2026` when event promotion changes.

After a durable change, update only the related source-of-truth documents: claims in `CONTENT_GUIDE.md`, current site status in `FEATURES.md`, historical change notes in `CHANGELOG.md`, and owner-facing release status in `docs/website-owner-updates.md` when useful. Keep entries short; avoid rewriting unrelated history. Distinguish implementation, push, and verified deployment in every status report.
