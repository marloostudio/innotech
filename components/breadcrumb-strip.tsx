import Link from "next/link"
import { ChevronRight } from "lucide-react"

import {
  buildBreadcrumbListJsonLd,
  withHomeCrumb,
  type BreadcrumbItem,
} from "@/lib/seo/breadcrumb-json-ld"
import { JsonLdScript } from "@/lib/seo/json-ld-script"

export type { BreadcrumbItem }

interface BreadcrumbStripProps {
  items: BreadcrumbItem[]
  /** Emit BreadcrumbList JSON-LD (default: true). */
  jsonLd?: boolean
}

/**
 * Full-width breadcrumb strip under the nav. Uses semantic `<ol>/<li>`, `aria-current="page"`,
 * and optional BreadcrumbList JSON-LD for crawlers.
 */
export function BreadcrumbStrip({ items, jsonLd = true }: BreadcrumbStripProps) {
  if (items.length === 0) return null

  const trail = withHomeCrumb(items)
  const breadcrumbJsonLd = jsonLd ? buildBreadcrumbListJsonLd(items) : null

  return (
    <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
      {breadcrumbJsonLd ? <JsonLdScript data={breadcrumbJsonLd} /> : null}
      <div className="max-w-screen-2xl mx-auto px-8 py-4">
        <nav aria-label="Breadcrumb">
          <ol
            className="flex flex-wrap items-center gap-2 text-sm text-it-text-muted"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {trail.map((item, i) => {
              const isLast = i === trail.length - 1
              const showLink = item.href != null && !isLast

              return (
                <li key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
                  {i > 0 ? (
                    <ChevronRight className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden />
                  ) : null}
                  {showLink ? (
                    <Link href={item.href!} className="hover:text-it-text-primary transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-it-text-primary" : undefined} aria-current={isLast ? "page" : undefined}>
                      {item.label}
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
