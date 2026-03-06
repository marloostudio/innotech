import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type BreadcrumbItem = {
  label: string
  href?: string
}

interface BreadcrumbStripProps {
  items: BreadcrumbItem[]
}

/**
 * Full-width breadcrumb strip under the nav. Uses design tokens (--it-bg, --it-border, --it-text-muted, --it-text-primary).
 * Items: last without href = current page; others are links.
 */
export function BreadcrumbStrip({ items }: BreadcrumbStripProps) {
  if (items.length === 0) return null
  return (
    <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
      <div className="max-w-screen-2xl mx-auto px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-it-text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <span key={i} className="inline-flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden />}
                {item.href != null && !isLast ? (
                  <Link href={item.href} className="hover:text-it-text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-it-text-primary" : undefined}>{item.label}</span>
                )}
              </span>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
