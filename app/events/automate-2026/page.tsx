import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, CalendarPlus, MapPin, MapPinned } from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell, Section } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { AutomateIntakeForm } from "@/components/events/automate-intake-form"
import { automateEvent } from "@/lib/content/exhibition-automate"
import { buildAutomateEventJsonLd } from "@/lib/seo/event-json-ld"
import { JsonLdScript } from "@/lib/seo/json-ld-script"
import { buildPageMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Automate 2026",
  description:
    "Meet InnoTech Systems at Automate 2026 in Chicago — SafeGuard, AutoDuck, RADARLink, and live fleet demos at McCormick Place, booth #12053.",
  path: "/events/automate-2026",
})

function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `InnoTech Systems — ${automateEvent.name} ${automateEvent.year}`,
    dates: automateEvent.calendarDatesAllDay,
    details: `Trade show — ${automateEvent.venue}, ${automateEvent.city}. ${automateEvent.booth}, ${automateEvent.hallOrZone}.`,
    location: `${automateEvent.venue}, ${automateEvent.city}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function Automate2026Page() {
  return (
    <>
      <JsonLdScript data={buildAutomateEventJsonLd()} />
      <BreadcrumbStrip items={[{ label: `${automateEvent.name} ${automateEvent.year}` }]} />

      <section
        className="relative w-full pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="min-w-0 pt-1">
              <Badge
                variant="outline"
                className="mb-4 border-it-border text-it-text-secondary font-normal"
              >
                {automateEvent.hero.eyebrow}
              </Badge>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                {automateEvent.hero.titleLines[0]}
                <span className="text-it-blue"> {automateEvent.hero.titleLines[1]}</span>
              </h1>
              <p
                className="text-lg md:text-xl text-pretty mb-5"
                style={{ color: "var(--it-text-muted)" }}
              >
                Meet our team, explore{" "}
                <Link
                  href="/products/safeguard"
                  className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
                >
                  SafeGuard™
                </Link>
                ,{" "}
                <Link
                  href="/products/radar-link"
                  className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
                >
                  RADARLink™
                </Link>
                , and{" "}
                <Link
                  href="/products/autoduck"
                  className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
                >
                  AutoDuck
                </Link>
                , and watch how software-defined safety, autonomous charging, and precision connectivity come together on the show floor.
              </p>
            </div>
            <div className="w-full min-w-0 rounded-lg border border-it-border overflow-hidden bg-it-surface-raised lg:justify-self-end">
              <ImagePlaceholder
                src={automateEvent.orchestrationImage.src}
                aspectRatio="4/3"
                alt={automateEvent.orchestrationImage.alt}
              />
            </div>
          </div>
        </PageShell>
      </section>

      <Section variant="light-bg" className="py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
          <div className="w-full min-w-0 lg:sticky lg:top-28">
            <div className="rounded-xl border border-it-light-border bg-it-light-surface px-5 py-4 md:px-6 md:py-5 shadow-(--it-light-shadow-md)">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays
                  className="w-5 h-5 shrink-0 text-it-light-blue md:w-6 md:h-6"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-it-light-text-muted">
                  Exhibition dates
                </span>
              </div>
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-it-light-blue leading-none"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                {automateEvent.dateRange}
              </p>
              <div className="mt-4 pt-4 space-y-2 text-sm md:text-base border-t border-it-light-border">
                <p className="inline-flex items-center gap-2 text-it-light-text-secondary">
                  <MapPin className="w-4 h-4 shrink-0 text-it-light-text-muted" strokeWidth={1.5} aria-hidden />
                  {automateEvent.venue}, {automateEvent.city}
                </p>
                <p className="text-it-light-text-secondary">
                  Booth <span className="font-mono text-it-light-blue">{automateEvent.booth}</span>
                  <span className="text-it-light-text-muted" aria-hidden>
                    {" "}
                    ·{" "}
                  </span>
                  {automateEvent.hallOrZone}
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  variant="outline"
                  size="default"
                  className="w-full border-it-light-border text-it-light-text-primary hover:bg-it-light-blue-subtle sm:w-auto"
                  asChild
                >
                  <a
                    href={googleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarPlus className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                    Add to your calendar
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="w-full border-it-light-border text-it-light-text-primary hover:bg-it-light-blue-subtle sm:w-auto"
                  asChild
                >
                  <a
                    href={automateEvent.boothMapCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPinned className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                    {automateEvent.boothMapCta.label}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="w-full border-it-light-border text-it-light-text-primary hover:bg-it-light-blue-subtle sm:w-auto"
                  asChild
                >
                  <a
                    href={automateEvent.showWebsiteCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {automateEvent.showWebsiteCta.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div
            id="interest-intake"
            className="w-full min-w-0 scroll-mt-28 contact-form-light"
          >
            <AutomateIntakeForm />
          </div>
        </div>
      </Section>
    </>
  )
}
