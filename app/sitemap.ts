import type { MetadataRoute } from "next"

import { discoverAppPageRoutes } from "@/lib/discover-app-routes"
import { isPublicCrawlablePath } from "@/lib/site-access"
import { siteUrl } from "@/lib/site"

/** Regenerate sitemap on a fixed interval (helps CDN caching for crawlers). */
export const revalidate = 86400

/**
 * Only marketing-public routes (`isPublicCrawlablePath` in `lib/site-access.ts`).
 * Password-gated pages (e.g. `/company/values`, resource hubs) are excluded automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = discoverAppPageRoutes().filter((path) => {
    const full = path === "" ? "/" : path
    if (full === "/thank-you") return false
    return isPublicCrawlablePath(full)
  })

  return paths.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.9 : 0.7,
  }))
}
