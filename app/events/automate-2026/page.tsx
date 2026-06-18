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
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { HeroScrollIndicator } from "@/components/sections/hero-scroll-indicator"

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

      <Automate2026HeroSection />
      <Automate2026IntakeSection intakeAnchorId="interest-intake" />
    </>
  )
}

function Automate2026HeroSection() {
  return (
    <section
      className="relative w-full pt-8 md:pt-12 pb-0 lg:pb-8 overflow-hidden"
      style={{
        background: "var(--it-hero-gradient)",
        color: "var(--it-text-primary)",
      }}
    >
      <PageShell className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-12 xl:gap-x-16 items-start">
          <div className="min-w-0 pt-1">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {automateEvent.hero.titleLines[0]}
              <br />
              <span className="text-it-blue">{automateEvent.hero.titleLines[1]}</span>
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
            <AutomateExhibitionCard variant="dark" className="mt-6 pl-0 md:pl-0" />
          </div>
          <div className="w-full min-w-0 rounded-lg border border-it-border overflow-hidden bg-it-surface-raised lg:col-start-2">
            <ImagePlaceholder
              src={automateEvent.orchestrationImage.src}
              aspectRatio="4/3"
              alt={automateEvent.orchestrationImage.alt}
            />
          </div>
        </div>
      </PageShell>
      <HeroScrollIndicator targetId="interest-intake" />
    </section>
  )
}

function Automate2026IntakeSection({
  intakeAnchorId,
  formIdPrefix = "intake",
}: {
  intakeAnchorId?: string
  formIdPrefix?: string
}) {
  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{
        background: "var(--it-hero-gradient)",
        color: "var(--it-text-primary)",
      }}
    >
      <PageShell className="relative z-10">
        <div
          {...(intakeAnchorId ? { id: intakeAnchorId } : {})}
          className="w-full lg:w-3/5 min-w-0 mx-auto scroll-mt-28"
        >
          <AutomateIntakeForm idPrefix={formIdPrefix} />
        </div>
      </PageShell>
    </section>
  )
}
