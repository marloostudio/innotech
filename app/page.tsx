import type { Metadata } from "next"

import { EventAnnouncementRow } from "@/components/sections/exhibition-teaser"
import { HeroV2 } from "@/components/sections/hero-v2"
import { HeroCanvas } from "@/components/sections/hero-canvas"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"
import { SvgDisplayRow } from "@/components/demo/svg-display-row"
import { HomeSolutionsCards } from "@/components/sections/home-solutions-cards"
import { SectionHeader } from "@/components/section-header"

import {
  industriesServed,
  technologyPillars,
  faqItems,
  finalCta,
  homeImages,
} from "@/lib/content/home"
import { buildPageMetadata } from "@/lib/seo/page-metadata"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.company.tagline,
  description:
    "Autonomous charging, robotic safety monitoring, and V2X systems for intelligent fleets — SafeGuard, AutoDuck, and RADARLink from InnoTech Systems.",
  path: "/",
})

export default function HomePage() {
  return (
    <>
      {/* Hero Style v2 — home only */}
      <HeroV2
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore Solutions", href: "/products" }}
        background={<HeroCanvas />}
      />
      <EventAnnouncementRow />
      <section className="flex w-full flex-1 flex-col bg-it-light-bg">
        <div className="w-full max-w-screen-2xl mx-auto px-8 py-12 lg:py-20">
          <SectionHeader
            theme="light"
            centered={false}
            className="mb-8"
            title="Comprehensive Automation Solutions"
            description="End-to-end robotics and autonomous systems designed for enterprise operations"
          />
          <SvgDisplayRow
            imageSrc={homeImages.isometricIllustration}
            imageAlt="InnoTech isometric illustration of autonomous robotics and fleet systems"
            leftColumn={<HomeSolutionsCards />}
          />
        </div>
      </section>
      {/* Industry Grid → dark (it-section-mid) — Serving Critical Industries */}
      <IndustryGrid
        title="Serving Critical Industries"
        description="Advanced AI, computer vision and telecommunication for autonomous charging, safe robot-human collaboration and V2X"
        industries={industriesServed}
      />
      {/* Tech Overview → light-bg */}
      <TechOverview 
        title="Technology That Powers Innovation"
        description="Advanced AI, autonomous navigation, and enterprise integration in one platform"
        pillars={technologyPillars}
        variant="light-bg"
        alt
      />
      {/* FAQ → dark */}
      <Faq items={faqItems} variant="dark" jsonLd={false} />
      {/* CTA Banner → dark with gradient (it-cta-banner) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
