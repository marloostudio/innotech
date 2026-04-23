import type { Metadata } from "next"
import { Lock } from "lucide-react"
import Link from "next/link"

import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"
import { blogPostListings } from "@/lib/content/blog-posts"
import { caseStudyListings } from "@/lib/content/case-studies-data"
import { marketingCaseStudyListings } from "@/lib/content/case-studies-hub"
import { discoverAppPageRoutes } from "@/lib/discover-app-routes"
import {
  getRouteAccessKind,
  PASSWORD_GATED_HUB_PATH_PREFIXES,
  type RouteAccessKind,
} from "@/lib/site-access"
import { buildRouteTree, type RouteTreeNode } from "@/lib/site-routes"

/** Paths that match `isPublicCrawlablePath` (marketing-public); keep in sync with `lib/site-access.ts`. */
const CRAWLER_ALLOWLIST_PATHS = [
  "/",
  "/products",
  "/products/autoduck",
  "/products/radar-link",
  "/products/safeguard",
  "/demo",
  "/contact",
] as const

export const metadata: Metadata = {
  title: "Site pages index",
  description:
    "Internal reference: route tree, crawler allowlist vs password-gated hubs, sitemap count, and blog/case-study anchors.",
  robots: { index: false, follow: false },
}

function AccessBadge({ kind }: { kind: RouteAccessKind }) {
  if (kind === "marketing-public") {
    return (
      <span className="inline-flex items-center rounded-full border border-emerald-900/55 bg-emerald-950/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-950 dark:border-emerald-800/70 dark:bg-emerald-950/35 dark:text-emerald-800">
        Public · crawler OK
      </span>
    )
  }
  if (kind === "system") {
    return (
      <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-800 dark:text-sky-300">
        System
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-red-900/55 bg-red-950/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-950 dark:border-red-800/70 dark:bg-red-950/35 dark:text-red-800">
      <Lock className="size-3 shrink-0" strokeWidth={2.5} aria-hidden />
      Password
    </span>
  )
}

function RouteTreeList({ node }: { node: RouteTreeNode }) {
  if (node.children.length === 0) return null

  return (
    <ul className="mt-2 space-y-2 border-l border-it-light-border pl-4">
      {node.children.map((child) => {
        const kind = getRouteAccessKind(child.path)
        const blocked = kind === "password"
        const available = kind === "marketing-public"
        return (
          <li
            key={child.path}
            className={cn(
              blocked && "text-red-950 dark:text-red-800",
              available && "text-emerald-950 dark:text-emerald-800",
              !blocked && !available && "text-it-light-text-secondary",
            )}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Link
                href={child.path}
                className={cn(
                  "font-medium transition-colors",
                  blocked &&
                    "text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700",
                  available &&
                    "text-emerald-950 hover:text-emerald-900 dark:text-emerald-800 dark:hover:text-emerald-700",
                  !blocked &&
                    !available &&
                    "text-it-light-text-primary hover:text-it-light-blue",
                )}
              >
                {child.label}
              </Link>
              <AccessBadge kind={kind} />
              <code
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded border",
                  blocked &&
                    "text-red-950/95 bg-red-950/10 border-red-900/50 dark:text-red-800/95 dark:bg-red-950/25 dark:border-red-800/60",
                  available &&
                    "text-emerald-950/95 bg-emerald-950/10 border-emerald-900/50 dark:text-emerald-800/95 dark:bg-emerald-950/25 dark:border-emerald-800/60",
                  !blocked &&
                    !available &&
                    "text-it-light-text-muted bg-it-light-surface-2 border-it-light-border",
                )}
              >
                {child.path}
              </code>
            </div>
            <RouteTreeList node={child} />
          </li>
        )
      })}
    </ul>
  )
}

export default function CurrentPagesIndexPage() {
  const diskRoutes = discoverAppPageRoutes()
  const tree = buildRouteTree(diskRoutes)

  let nMarketing = 0
  let nSystem = 0
  let nPassword = 0
  for (const path of diskRoutes) {
    const k = getRouteAccessKind(path)
    if (k === "marketing-public") nMarketing++
    else if (k === "system") nSystem++
    else nPassword++
  }

  const nSitemap = diskRoutes.filter((path) => getRouteAccessKind(path) === "marketing-public").length

  return (
    <Section variant="light-bg">
      <SectionHeader
        theme="light"
        label="Internal"
        title="Site pages & access"
        description="Only the crawler allowlist below is reachable without the preview cookie. Product detail URLs under AutoDuck, RADARLink, and SafeGuard are gated. Password-gated hubs (blog, case studies) use noindex. Likely bots get 403 off the allowlist."
      />

      <div className="max-w-3xl mx-auto space-y-10 text-center">
        <p className="text-sm text-it-light-text-muted text-pretty">
          <strong className="text-it-light-text-primary">{diskRoutes.length}</strong> <code className="text-xs">page.tsx</code>{" "}
          routes · <strong className="text-emerald-950 dark:text-emerald-800">{nMarketing}</strong> marketing-public ·{" "}
          <strong className="text-it-light-text-primary">{nSystem}</strong> system ·{" "}
          <strong className="text-red-950 dark:text-red-800">{nPassword}</strong> password ·{" "}
          <strong className="text-emerald-950 dark:text-emerald-800">{nSitemap}</strong> URLs in sitemap
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/10 p-4 text-sm text-center">
            <p className="font-semibold text-emerald-950 dark:text-emerald-800 mb-2">Crawler &amp; anonymous allowlist</p>
            <p className="text-it-light-text-muted text-xs mb-3 leading-snug text-pretty">
              Same paths as the sitemap. No preview password; bots may fetch these URLs only.
            </p>
            <ul className="flex flex-col items-center gap-1.5 font-mono text-xs text-emerald-950 dark:text-emerald-800">
              {CRAWLER_ALLOWLIST_PATHS.map((path) => (
                <li key={path}>
                  <code className="rounded bg-emerald-950/10 px-1 py-0.5 border border-emerald-900/30 dark:bg-emerald-950/20 dark:border-emerald-800/40">
                    {path}
                  </code>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/40 bg-red-950/10 p-4 text-sm text-center">
            <p className="font-semibold text-red-950 dark:text-red-800 mb-2 flex flex-wrap items-center justify-center gap-2">
              Password-gated hubs
              <AccessBadge kind="password" />
            </p>
            <p className="text-it-light-text-muted text-xs mb-3 leading-snug text-pretty">
              From <code className="text-[11px]">PASSWORD_GATED_HUB_PATH_PREFIXES</code> — 403 for crawlers, preview login for humans,{" "}
              <code className="text-[11px]">noindex</code> on the page.
            </p>
            <ul className="flex flex-col items-center gap-1.5 font-mono text-xs text-red-950 dark:text-red-800">
              {PASSWORD_GATED_HUB_PATH_PREFIXES.map((path) => (
                <li key={path}>
                  <code className="rounded bg-red-950/10 px-1 py-0.5 border border-red-900/30 dark:bg-red-950/20 dark:border-red-800/40">
                    {path}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-it-light-text-primary mb-2">Route tree</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 text-emerald-950 dark:text-emerald-800">
            <Link
              href="/"
              className="font-medium text-emerald-950 hover:text-emerald-900 dark:text-emerald-800 dark:hover:text-emerald-700 transition-colors"
            >
              Home
            </Link>
            <AccessBadge kind={getRouteAccessKind("/")} />
            <code className="text-xs text-emerald-950/95 bg-emerald-950/10 px-1.5 py-0.5 rounded border border-emerald-900/50 dark:text-emerald-800/95 dark:bg-emerald-950/25 dark:border-emerald-800/60">
              /
            </code>
          </div>
          <div className="flex justify-center">
            <div className="text-left">
              <RouteTreeList node={tree} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-it-light-text-primary mb-2">
            Blog posts <span className="text-sm font-normal text-it-light-text-muted">(listing)</span>
          </h2>
          <p className="text-sm text-it-light-text-muted mb-3 text-pretty">
            <Link
              href="/resources/blog"
              className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 underline-offset-4 hover:underline"
            >
              /resources/blog
            </Link>{" "}
            — <AccessBadge kind="password" /> section; anchors below.
          </p>
          <ul className="space-y-3">
            {blogPostListings.map((post) => (
              <li key={post.id} className="text-red-950 dark:text-red-800">
                <Link
                  href={`/resources/blog#blog-post-${post.id}`}
                  className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 transition-colors"
                >
                  {post.title}
                </Link>
                <span className="block text-xs text-red-950/80 dark:text-red-800/90 mt-0.5">
                  #{post.id} · {post.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-it-light-text-primary mb-2">
            Case studies <span className="text-sm font-normal text-it-light-text-muted">(resources)</span>
          </h2>
          <p className="text-sm text-it-light-text-muted mb-3 text-pretty">
            <Link
              href="/resources/case-studies"
              className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 underline-offset-4 hover:underline"
            >
              /resources/case-studies
            </Link>{" "}
            — <AccessBadge kind="password" />
          </p>
          <ul className="space-y-3">
            {caseStudyListings.map((study) => (
              <li key={study.id} className="text-red-950 dark:text-red-800">
                <Link
                  href={`/resources/case-studies#case-study-${study.id}`}
                  className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 transition-colors"
                >
                  {study.title}
                </Link>
                <span className="block text-xs text-red-950/80 dark:text-red-800/90 mt-0.5">({study.industry})</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-it-light-text-primary mb-2">
            Case studies <span className="text-sm font-normal text-it-light-text-muted">(hub)</span>
          </h2>
          <p className="text-sm text-it-light-text-muted mb-3 text-pretty">
            <Link
              href="/case-studies"
              className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 underline-offset-4 hover:underline"
            >
              /case-studies
            </Link>{" "}
            — <AccessBadge kind="password" />
          </p>
          <ul className="space-y-3">
            {marketingCaseStudyListings.map((study) => (
              <li key={study.id} className="text-red-950 dark:text-red-800">
                <Link
                  href={`/case-studies#marketing-case-${study.id}`}
                  className="font-medium text-red-950 hover:text-red-900 dark:text-red-800 dark:hover:text-red-700 transition-colors"
                >
                  {study.title}
                </Link>
                <span className="block text-xs text-red-950/80 dark:text-red-800/90 mt-0.5">({study.industry})</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-it-light-border bg-it-light-surface-2/50 p-4 text-sm text-it-light-text-secondary space-y-3 text-center">
          <p>
            <strong className="text-it-light-text-primary">Legend</strong>
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-left max-w-2xl mx-auto">
            <li>
              <AccessBadge kind="marketing-public" /> — Home, <code className="text-xs">/products</code>, and the{" "}
              <strong className="font-medium text-it-light-text-primary">three product hub URLs only</strong>{" "}
              (<code className="text-xs">/products/autoduck</code>, <code className="text-xs">/products/radar-link</code>,{" "}
              <code className="text-xs">/products/safeguard</code> — no deeper product paths), <code className="text-xs">/demo</code>,{" "}
              <code className="text-xs">/contact</code>. In sitemap; robots allow; no password.
            </li>
            <li>
              <AccessBadge kind="system" /> — Gate page, APIs, <code className="text-xs">/robots.txt</code>,{" "}
              <code className="text-xs">/sitemap.xml</code>, static assets. No password.
            </li>
            <li>
              <AccessBadge kind="password" /> — Everything else, including{" "}
              <code className="text-xs">/resources/blog</code>, <code className="text-xs">/resources/case-studies</code>, and{" "}
              <code className="text-xs">/case-studies</code> (listings and hash anchors). Humans need password{" "}
              <code className="text-xs">inno2020</code> (or <code className="text-xs">SITE_PREVIEW_PASSWORD</code>); crawlers get{" "}
              <strong>403</strong>. Those hubs use <code className="text-xs">noindex</code> as well.
            </li>
          </ul>
          <p className="text-xs text-it-light-text-muted text-pretty max-w-2xl mx-auto">
            Cookie signing uses <code className="text-xs">PREVIEW_SESSION_SECRET</code> in production. Default password is{" "}
            <code className="text-xs">inno2020</code>.
          </p>
        </div>
      </div>
    </Section>
  )
}
