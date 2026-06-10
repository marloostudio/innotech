import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { PageShell } from "@/components/page-shell"
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
        <Link
          href={landingHref}
          className="group/link flex w-full flex-col items-center justify-center gap-2 text-center outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 focus-visible:ring-offset-it-section-2 md:gap-2.5"
        >
          <div className="relative inline-flex items-center justify-center">
            <p
              className="text-2xl md:text-3xl font-bold tracking-tight text-it-text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              See Us Live
            </p>
            <ArrowRight
              className="pointer-events-none absolute left-full ml-2 h-6 w-6 shrink-0 text-it-light-cta-foreground opacity-0 drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 md:h-7 md:w-7"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <p className="flex justify-center text-center text-[16px] md:text-[18px] text-it-text-secondary transition-colors duration-150 group-hover/link:text-it-text-primary">
            <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
              <span
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-it-blue-border bg-it-blue-subtle shadow-(--it-shadow-glow-blue) transition-colors duration-150 group-hover/link:border-it-blue group-hover/link:bg-it-blue/15"
                aria-hidden
              >
                <CalendarDays className="h-4 w-4 text-it-blue" strokeWidth={1.5} />
              </span>
              <span>
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
            </span>
          </p>
        </Link>
      </PageShell>
    </section>
  )
}
