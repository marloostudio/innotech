import { siteConfig, siteUrl } from "@/lib/site"

/** Organization + WebSite graph for site-wide SERP context. */
export function buildSiteGraphJsonLd(): Record<string, unknown>[] {
  const logoUrl = `${siteUrl}${siteConfig.brand.logoSrc}`

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.company.name,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    email: siteConfig.company.email,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter, siteConfig.social.github].filter(Boolean),
  }

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  }

  return [organization, website]
}

export function buildSiteGraphDocument(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": buildSiteGraphJsonLd(),
  }
}
