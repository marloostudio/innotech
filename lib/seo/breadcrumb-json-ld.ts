import { siteUrl } from "@/lib/site"

export type BreadcrumbItem = {
  label: string
  href?: string
}

const HOME_CRUMB: BreadcrumbItem = { label: "Home", href: "/" }

/** Prepends Home when the trail does not already start there. */
export function withHomeCrumb(items: readonly BreadcrumbItem[]): BreadcrumbItem[] {
  if (items.length === 0) return [HOME_CRUMB]
  const first = items[0]
  if (first.href === "/" || first.label === "Home") return [...items]
  return [HOME_CRUMB, ...items]
}

/**
 * BreadcrumbList structured data for Google Search.
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export function buildBreadcrumbListJsonLd(items: readonly BreadcrumbItem[]): Record<string, unknown> {
  const trail = withHomeCrumb(items)

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      }

      if (item.href) {
        entry.item = item.href.startsWith("http") ? item.href : `${siteUrl}${item.href}`
      }

      return entry
    }),
  }
}
