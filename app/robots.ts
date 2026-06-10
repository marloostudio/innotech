import type { MetadataRoute } from "next"

import { getRobotsAllowPatterns } from "@/lib/site-access"
import { siteUrl } from "@/lib/site"

/**
 * Disallow everything by default, then allow only marketing-public paths
 * (aligned with `isPublicCrawlablePath` / `ROBOTS_ALLOWED_MARKETING_PATHS`).
 * Company: `/company/values` is preview-only (see site-gate + proxy).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/", "/company/values"],
      allow: getRobotsAllowPatterns(),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
