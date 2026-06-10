import type { Metadata } from "next"
import Link from "next/link"

import { AutomateExhibitionCard } from "@/components/events/automate-exhibition-card"
import { AutomateIntakeForm } from "@/components/events/automate-intake-form"
import { AutomateShowLogo } from "@/components/events/automate-show-logo"
import { automateEvent } from "@/lib/content/exhibition-automate"
import { buildBreadcrumbListJsonLd } from "@/lib/seo/breadcrumb-json-ld"
import { buildAutomateEventJsonLd } from "@/lib/seo/event-json-ld"
import { JsonLdScript } from "@/lib/seo/json-ld-script"
import { buildPageMetadata } from "@/lib/seo/page-metadata"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

export const metadata: Metadata = buildPageMetadata({
  title: "Automate 2026",
  description:
    "Meet InnoTech Systems at Automate 2026 in Chicago — SafeGuard, AutoDuck, RADARLink, and live fleet demos at McCormick Place, booth #12053.",
  path: "/events/automate-2026",
})

export default function Automate2026Page() {
  return (
    <>
      <JsonLdScript data={buildAutomateEventJsonLd()} />
      <JsonLdScript
        data={buildBreadcrumbListJsonLd([{ label: `${automateEvent.name} ${automateEvent.year}` }])}
      />
      <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <a
            href={automateEvent.showWebsiteCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 focus-visible:ring-offset-it-bg"
          >
            <AutomateShowLogo variant="onDark" size="sm" priority />
          </a>
        </div>
      </div>

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
              <AutomateExhibitionCard variant="dark" className="mt-6 lg:hidden" />
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

      <section
        className="py-12 md:py-16"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="hidden w-full min-w-0 lg:block lg:sticky lg:top-28">
              <AutomateExhibitionCard variant="dark" />
            </div>
            <div
              id="interest-intake"
              className="w-full min-w-0 scroll-mt-28 contact-form-light lg:col-start-2"
            >
              <AutomateIntakeForm />
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
