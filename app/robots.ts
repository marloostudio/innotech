import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

/**
 * Disallow everything by default, then allow only marketing-public paths
 * (same idea as `isPublicCrawlablePath` in lib/site-access).
 * Company: explicit paths only — `/company/values` is preview-only (see site-gate + middleware).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/", "/company/values"],
      allow: [
        "/",
        "/$",
        "/products$",
        "/products/$",
        "/products/autoduck$",
        "/products/autoduck/$",
        "/products/radar-link$",
        "/products/radar-link/$",
        "/products/safeguard$",
        "/products/safeguard/$",
        "/demo$",
        "/demo/$",
        "/contact$",
        "/contact/$",
        "/company$",
        "/company/$",
        "/company/our-story$",
        "/company/our-story/$",
        "/company/team$",
        "/company/team/$",
        "/company/board-advisors$",
        "/company/board-advisors/$",
        "/company/careers$",
        "/company/careers/$",
        "/company/careers/open-roles$",
        "/company/careers/open-roles/$",
        "/company/partners$",
        "/company/partners/$",
        "/company/investors$",
        "/company/investors/$",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
