"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, CalendarDays } from "lucide-react"

import { automateEvent } from "@/lib/content/exhibition-automate"

export const automateEventPath = "/events/automate-2026" as const

export function AutomateEventTopBar() {
  const pathname = usePathname()

  if (
    pathname === "/" ||
    pathname === automateEventPath ||
    pathname.startsWith(`${automateEventPath}/`)
  ) {
    return null
  }

  const { name, year, dateRange, city, booth } = automateEvent

  return (
    <div
      className="event-top-bar w-full border-b border-it-blue-border"
      role="region"
      aria-label={`${name} ${year} event`}
    >
      <Link
        href={automateEventPath}
        className="group/link mx-auto flex w-full max-w-screen-2xl items-center justify-center gap-2.5 px-8 py-3 text-center outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-inset"
      >
        <CalendarDays
          className="hidden h-4 w-4 shrink-0 text-it-blue sm:block"
          strokeWidth={1.5}
          aria-hidden
        />
        <span className="min-w-0 text-xs text-it-text-secondary transition-colors duration-150 group-hover/link:text-it-text-primary sm:text-sm">
          <span className="font-medium text-it-blue">
            Meet us at {name} {year}
          </span>
          <span className="hidden md:inline">
            {" "}
            · {dateRange} · {city} · Booth{" "}
            <span className="font-mono text-it-text-primary">{booth}</span>
          </span>
        </span>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-it-blue opacity-70 transition-opacity duration-150 group-hover/link:opacity-100"
          strokeWidth={1.5}
          aria-hidden
        />
      </Link>
    </div>
  )
}
