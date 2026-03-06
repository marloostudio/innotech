"use client"

import { useMemo, useState } from "react"
import { Calendar, ChevronDown, ChevronRight, ChevronUp, Clock, Code2, Tag } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import type { ChangelogEntry, ParsedChange } from "@/lib/changelog"
import { cn } from "@/lib/utils"

export type ChangelogCategoryFilter = "all" | "added" | "changed" | "fixed"

const AREA_ORDER = [
  "Homepage",
  "Product Pages",
  "Solution Pages",
  "About / Our Story",
  "Blog",
  "Contact",
  "Design System",
  "Components",
  "Navigation",
  "Legal",
  "Company / Team",
  "Careers",
  "Resources",
  "FAQ",
  "Breadcrumbs",
  "Hero",
  "Footer",
  "General",
]

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function formatDateTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function entryMatchesCategory(entry: ChangelogEntry, category: ChangelogCategoryFilter): boolean {
  if (category === "all") return true
  if (category === "added" && entry.added.length > 0) return true
  if (category === "changed" && entry.changed.length > 0) return true
  if (category === "fixed" && entry.fixed.length > 0) return true
  return false
}

function entryMatchesSearch(entry: ChangelogEntry, query: string): boolean {
  if (!query.trim()) return true
  const q = query.trim().toLowerCase()
  const dateStr = formatDate(entry.date).toLowerCase()
  if (entry.version.toLowerCase().includes(q)) return true
  if (dateStr.includes(q)) return true
  const summary = (entry.summary ?? "").toLowerCase()
  if (summary.includes(q)) return true
  const allText = [
    ...(entry.highlights ?? []),
    ...entry.added,
    ...entry.changed,
    ...entry.fixed,
  ].join(" ").replace(/\*\*/g, " ").toLowerCase()
  return allText.includes(q)
}

function bulletAccent(variant: "added" | "changed" | "fixed") {
  return variant === "added"
    ? "var(--it-safeguard)"
    : variant === "changed"
      ? "var(--it-blue)"
      : "var(--it-autolock)"
}

/** One-line bullet for highlights and details (user-facing only) */
function UserBullet({ text, variant }: { text: string; variant: ParsedChange["variant"] }) {
  return (
    <li className="flex gap-3 text-sm text-it-text-secondary leading-snug">
      <span
        className="shrink-0 mt-1.5 h-1 w-1 rounded-full"
        style={{ background: bulletAccent(variant) }}
        aria-hidden
      />
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    </li>
  )
}

const CATEGORY_OPTIONS: { value: ChangelogCategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "added", label: "Added" },
  { value: "changed", label: "Changed" },
  { value: "fixed", label: "Fixed" },
]

function ReleaseCard({ entry }: { entry: ChangelogEntry }) {
  const [technicalOpen, setTechnicalOpen] = useState(false)
  const byArea = entry.parsed?.byArea
  const sortedAreas = useMemo(() => {
    if (!byArea) return []
    const keys = Array.from(byArea.keys())
    return keys.sort((a, b) => {
      const ai = AREA_ORDER.indexOf(a)
      const bi = AREA_ORDER.indexOf(b)
      if (ai !== -1 && bi !== -1) return ai - bi
      if (ai !== -1) return -1
      if (bi !== -1) return 1
      return a.localeCompare(b)
    })
  }, [byArea])
  const hasTechnical =
    (entry.parsed?.technicalPaths?.length ?? 0) > 0 ||
    entry.added.length + entry.changed.length + entry.fixed.length > 0

  return (
    <AccordionItem
      value={`${entry.version}-${entry.date}`}
      className={cn(
        "border-it-border border-b last:border-b-0",
        "border-l-[3px] border-l-it-blue pl-4"
      )}
    >
      <AccordionTrigger
        className={cn(
          "py-4 hover:no-underline hover:opacity-90",
          "text-it-text-primary [&[data-state=open]>svg]:rotate-180"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-1 gap-x-4 text-left">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              <Tag className="h-4 w-4 text-it-blue shrink-0" strokeWidth={1.5} />
              v{entry.version}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm text-it-text-muted"
              style={{ fontFamily: "var(--font-ibm-mono)" }}
              title="Release date"
            >
              <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
              {formatDate(entry.date)}
            </span>
            {entry.gitPushedAt && (
              <span
                className="inline-flex items-center gap-1.5 text-sm text-it-text-muted"
                style={{ fontFamily: "var(--font-ibm-mono)" }}
                title="Git push / tag date"
              >
                <Clock className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                Pushed {formatDateTime(entry.gitPushedAt)}
              </span>
            )}
          </div>
          <p className="text-sm text-it-text-secondary font-normal mt-1 sm:mt-0 max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {entry.summary}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-it-text-secondary pb-6">
        <div className="space-y-6">
          {/* Highlights */}
          {entry.highlights && entry.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-it-text-muted mb-2" style={{ fontFamily: "var(--font-ibm-mono)" }}>
                Highlights
              </h4>
              <ul className="pl-0 list-none space-y-1.5">
                {entry.highlights.slice(0, 6).map((text, i) => (
                  <UserBullet key={i} text={text} variant="changed" />
                ))}
              </ul>
            </div>
          )}

          {/* Details by area */}
          {sortedAreas.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-it-text-muted mb-3" style={{ fontFamily: "var(--font-ibm-mono)" }}>
                What changed
              </h4>
              <div className="space-y-4">
                {sortedAreas.map((area) => {
                  const items = byArea!.get(area)!
                  return (
                    <div key={area}>
                      <p className="text-sm font-medium text-it-text-primary mb-1.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {area}
                      </p>
                      <ul className="pl-0 list-none space-y-1">
                        {items.map((p, i) => (
                          <UserBullet key={i} text={p.userFacing} variant={p.variant} />
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Technical details (collapsible) */}
          {hasTechnical && (
            <Collapsible open={technicalOpen} onOpenChange={setTechnicalOpen}>
              <CollapsibleTrigger
                className={cn(
                  "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-150",
                  "text-it-text-muted hover:text-it-blue",
                  technicalOpen && "text-it-blue"
                )}
                style={{ fontFamily: "var(--font-ibm-mono)" }}
              >
                {technicalOpen ? (
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
                <Code2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                View technical details
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-3 pl-5 border-l border-it-border space-y-3">
                  {entry.parsed?.technicalPaths && entry.parsed.technicalPaths.length > 0 && (
                    <div>
                      <p className="text-xs text-it-text-muted mb-1.5">Files</p>
                      <ul className="text-xs text-it-text-dim font-mono space-y-0.5 list-none">
                        {entry.parsed.technicalPaths.map((path, i) => (
                          <li key={i}>{path}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="space-y-2">
                    {entry.added.length > 0 && (
                      <div>
                        <span className="text-xs text-it-text-muted">Added</span>
                        <ul className="mt-1 space-y-0.5 text-xs text-it-text-dim list-none pl-0">
                          {entry.added.map((raw, i) => (
                            <li key={i} className="flex gap-2">
                              <span style={{ color: "var(--it-safeguard)" }}>+</span>
                              <span dangerouslySetInnerHTML={{ __html: raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {entry.changed.length > 0 && (
                      <div>
                        <span className="text-xs text-it-text-muted">Changed</span>
                        <ul className="mt-1 space-y-0.5 text-xs text-it-text-dim list-none pl-0">
                          {entry.changed.map((raw, i) => (
                            <li key={i} className="flex gap-2">
                              <span style={{ color: "var(--it-blue)" }}>~</span>
                              <span dangerouslySetInnerHTML={{ __html: raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {entry.fixed.length > 0 && (
                      <div>
                        <span className="text-xs text-it-text-muted">Fixed</span>
                        <ul className="mt-1 space-y-0.5 text-xs text-it-text-dim list-none pl-0">
                          {entry.fixed.map((raw, i) => (
                            <li key={i} className="flex gap-2">
                              <span style={{ color: "var(--it-autolock)" }}>!</span>
                              <span dangerouslySetInnerHTML={{ __html: raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

interface ChangelogAccordionProps {
  entries: ChangelogEntry[]
  /** When provided, filter is controlled by parent (e.g. sidebar); inline filter buttons are hidden */
  categoryFilter?: ChangelogCategoryFilter
  onCategoryFilterChange?: (value: ChangelogCategoryFilter) => void
  /** When provided with onSearchQueryChange, search is controlled and the search field is not rendered here (e.g. moved to sidebar) */
  searchQuery?: string
  onSearchQueryChange?: (value: string) => void
}

export function ChangelogAccordion({
  entries,
  categoryFilter: controlledCategoryFilter,
  onCategoryFilterChange,
  searchQuery: controlledSearchQuery,
  onSearchQueryChange,
}: ChangelogAccordionProps) {
  const [internalSearchQuery, setInternalSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [internalCategoryFilter, setInternalCategoryFilter] = useState<ChangelogCategoryFilter>("all")
  const isFilterControlled = controlledCategoryFilter !== undefined && onCategoryFilterChange != null
  const categoryFilter = isFilterControlled ? controlledCategoryFilter! : internalCategoryFilter
  const setCategoryFilter = isFilterControlled ? onCategoryFilterChange! : setInternalCategoryFilter
  const isSearchControlled = controlledSearchQuery !== undefined && onSearchQueryChange != null
  const searchQuery = isSearchControlled ? controlledSearchQuery! : internalSearchQuery

  const filteredEntries = useMemo(() => {
    return entries.filter(
      (entry) =>
        entryMatchesCategory(entry, categoryFilter) && entryMatchesSearch(entry, searchQuery)
    )
  }, [entries, categoryFilter, searchQuery])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {!isFilterControlled && (
          <div className="flex flex-wrap gap-2">
            {CATEGORY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCategoryFilter(opt.value)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                  "border",
                  categoryFilter === opt.value
                    ? "bg-it-blue-subtle border-it-blue text-it-blue"
                    : "border-it-border bg-transparent text-it-text-secondary hover:text-it-text-primary hover:border-it-border"
                )}
                aria-pressed={categoryFilter === opt.value}
                aria-label={`Filter by ${opt.label}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
        {filteredEntries.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setOpenItems(filteredEntries.map((e) => `${e.version}-${e.date}`))}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                "border border-it-border bg-transparent text-it-text-secondary hover:text-it-text-primary hover:border-it-border"
              )}
              aria-label="Expand all releases"
            >
              <ChevronDown className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              Expand all
            </button>
            <button
              type="button"
              onClick={() => setOpenItems([])}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                "border border-it-border bg-transparent text-it-text-secondary hover:text-it-text-primary hover:border-it-border"
              )}
              aria-label="Collapse all releases"
            >
              <ChevronUp className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              Collapse all
            </button>
          </div>
        )}
      </div>

      {filteredEntries.length === 0 ? (
        <p className="text-it-text-muted text-sm py-8 text-center">
          No releases match your search or filter. Try a different term or show All.
        </p>
      ) : (
        <Accordion
          type="multiple"
          className="w-full"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {filteredEntries.map((entry) => (
            <ReleaseCard key={`${entry.version}-${entry.date}`} entry={entry} />
          ))}
        </Accordion>
      )}
    </div>
  )
}
