"use client"

import { useState } from "react"
import type { ChangelogEntry } from "@/lib/changelog"
import { ChangelogAccordion } from "@/components/changelog-accordion"
import { ChangelogSidebar } from "@/components/changelog-sidebar"
import { Badge } from "@/components/ui/badge"

interface ChangelogLayoutProps {
  entries: ChangelogEntry[]
}

export function ChangelogLayout({ entries }: ChangelogLayoutProps) {
  const [categoryFilter, setCategoryFilter] = useState<
    "all" | "added" | "changed" | "fixed"
  >("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_16rem] gap-8 lg:gap-10 items-start">
      <div className="min-w-0 order-2 lg:order-1">
        <header className="text-left space-y-3 mb-8">
          <Badge variant="outline" className="border-it-border text-it-text-secondary">
            Changelog
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-it-text-primary" style={{ fontFamily: "var(--font-chakra)" }}>
            Release history
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-balance text-it-text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Versions and notable changes
          </h2>
          <p className="text-base text-pretty max-w-3xl text-it-text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
            What&apos;s new across the site: design updates, new features, and improvements, grouped by area with optional technical details.
          </p>
        </header>
        <ChangelogAccordion
          entries={entries}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
      </div>
      <div className="order-1 lg:order-2">
        <ChangelogSidebar
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
      </div>
    </div>
  )
}
