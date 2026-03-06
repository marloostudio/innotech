"use client"

import Link from "next/link"
import { ExternalLink, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { ChangelogCategoryFilter } from "@/components/changelog-accordion"

const CATEGORY_OPTIONS: { value: ChangelogCategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "added", label: "Added" },
  { value: "changed", label: "Changed" },
  { value: "fixed", label: "Fixed" },
]

const RELATED_LINKS = [
  { href: "https://keepachangelog.com/en/1.1.0/", label: "Keep a Changelog", external: true },
  { href: "https://semver.org/spec/v2.0.0.html", label: "Semantic Versioning", external: true },
  { href: "/contact", label: "Contact", external: false },
  { href: "/resources", label: "Resources", external: false },
]

interface ChangelogSidebarProps {
  categoryFilter: ChangelogCategoryFilter
  onCategoryFilterChange: (value: ChangelogCategoryFilter) => void
  searchQuery?: string
  onSearchQueryChange?: (value: string) => void
}

export function ChangelogSidebar({
  categoryFilter,
  onCategoryFilterChange,
  searchQuery = "",
  onSearchQueryChange,
}: ChangelogSidebarProps) {
  return (
    <aside
      className="w-full lg:w-56 xl:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start"
      aria-label="Changelog filters and links"
    >
      <nav className="space-y-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {/* Search */}
        {onSearchQueryChange && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-it-text-muted mb-3">
              Search
            </p>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-it-text-muted pointer-events-none"
                strokeWidth={1.5}
                aria-hidden
              />
              <Input
                type="search"
                placeholder="Versions and changes..."
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                className="pl-9 h-10 bg-it-surface border-it-border text-it-text-primary placeholder:text-it-text-muted focus-visible:ring-it-blue/30 focus-visible:border-it-blue w-full"
                aria-label="Search changelog"
              />
            </div>
          </div>
        )}

        {/* Filter by type */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-it-text-muted mb-3">
            Filter by type
          </p>
          <div className="flex flex-col gap-1.5">
            {CATEGORY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onCategoryFilterChange(opt.value)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150",
                  categoryFilter === opt.value
                    ? "bg-it-blue-subtle border border-it-blue text-it-blue"
                    : "border border-transparent text-it-text-secondary hover:text-it-text-primary hover:bg-it-surface"
                )}
                aria-pressed={categoryFilter === opt.value}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Related */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-it-text-muted mb-3">
            Related
          </p>
          <ul className="space-y-1">
            {RELATED_LINKS.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-it-text-secondary hover:text-it-blue transition-colors duration-150 py-1"
                  >
                    {item.label}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-it-text-secondary hover:text-it-blue transition-colors duration-150 py-1"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
