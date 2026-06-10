import type { Metadata } from "next"

import { siteConfig, siteUrl } from "@/lib/site"

const defaultOgImage = {
  url: "/images/brand/innotech-logo.png",
  width: 1024,
  height: 300,
  alt: siteConfig.brand.logoAlt,
} as const

type PageMetadataInput = {
  title: string
  description: string
  /** Pathname, e.g. `/company` or `/events/automate-2026` */
  path: string
}

/** Shared metadata for indexable marketing pages (title, description, canonical, OG). */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  const canonical = `${siteUrl}${normalizedPath || "/"}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: siteConfig.name,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  }
}

export { defaultOgImage }
