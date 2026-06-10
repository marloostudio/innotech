import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { automateEvent } from "@/lib/content/exhibition-automate"

const landingHref = "/events/automate-2026" as const

/** Compact Automate promo row — sits directly under the home hero. */
export function EventAnnouncementRow() {
  const { name, year, dateRange, city, booth } = automateEvent

  return (
    <section
      className="event-announcement w-full border-y border-it-blue-border py-5 md:py-6"
      aria-label={`${name} ${year} event announcement`}
    >
      <div className="event-announcement-shimmer" aria-hidden />
      <PageShell className="relative">
        <div className="flex flex-col gap-4 border-l-[3px] border-it-blue pl-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:pl-5">
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm md:text-base text-it-text-secondary">
            <span
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-it-blue-border bg-it-blue-subtle shadow-(--it-shadow-glow-blue)"
              aria-hidden
            >
              <CalendarDays className="h-4 w-4 text-it-blue" strokeWidth={1.5} />
            </span>
            <span>
              Join us at{" "}
              <span className="font-medium text-it-blue">
                {name} {year}
              </span>
              {" · "}
              {dateRange}
              {" · "}
              {city}
              {" · "}
              Booth <span className="font-mono text-it-text-primary">{booth}</span>
            </span>
          </p>
          <Button
            asChild
            className="shrink-0 bg-it-blue text-it-bg shadow-(--it-shadow-glow-blue) transition-all duration-150 hover:-translate-y-px hover:bg-it-blue-hover hover:shadow-(--it-shadow-glow-blue)"
          >
            <Link href={landingHref}>
              See event details
              <ArrowRight strokeWidth={1.5} aria-hidden />
            </Link>
          </Button>
        </div>
      </PageShell>
    </section>
  )
}
