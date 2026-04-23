import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

/**
 * Disallow everything by default, then allow only marketing-public paths.
 * Aligns with middleware + password gate for humans.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
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
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
