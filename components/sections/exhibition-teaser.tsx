import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { automateEvent } from "@/lib/content/exhibition-automate"

const landingHref = "/events/automate-2026" as const

export function ExhibitionTeaser() {
  const { name, year, dateRange, city, booth, venue, hero } = automateEvent

  return (
    <section
      className="w-full border-t border-it-border it-section-alt py-12 md:py-16"
      aria-labelledby="exhibition-teaser-heading"
    >
      <PageShell>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div
            className="max-w-2xl space-y-4 border-l-[3px] pl-6"
            style={{ borderLeftColor: "var(--it-blue)" }}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-it-text-muted">
              {hero.eyebrow}
            </p>
            <h2
              id="exhibition-teaser-heading"
              className="text-2xl font-bold tracking-tight text-balance text-it-text-primary md:text-3xl"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {name} {year} — {venue}, {city}
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-it-text-secondary">
              Meet our team for live demos of SafeGuard™, AutoDuck, and RADARLink™ on the show floor.
            </p>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              <li className="flex items-center gap-2 text-sm text-it-text-secondary">
                <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
                {dateRange}
              </li>
              <li className="flex items-center gap-2 text-sm text-it-text-secondary">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
                {city}
              </li>
              <li className="text-sm text-it-text-secondary">
                Booth <span className="text-it-text-primary font-medium">{booth}</span>
              </li>
            </ul>
          </div>
          <div className="shrink-0 lg:pt-1">
            <Link href={landingHref} className="inline-block">
              <Button
                size="lg"
                variant="secondary"
                className="bg-it-blue text-it-bg transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-it-bg hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]"
              >
                Automate {year} details
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} aria-hidden />
              </Button>
            </Link>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
