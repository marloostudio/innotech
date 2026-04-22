import { HeroV2 } from "@/components/sections/hero-v2"
import { HeroCanvas } from "@/components/sections/hero-canvas"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"

import {
  solutionsOverview,
  industriesServed,
  technologyPillars,
  faqItems,
  finalCta
} from "@/lib/content/home"
import { siteUrl } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero Style v2 — home only */}
      <HeroV2
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore Solutions", href: "/products" }}
        background={<HeroCanvas />}
      />
      {/* Feature Grid → light-bg */}
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
        columns={2}
        variant="light-bg"
        showImagePlaceholder={false}
        hideIcon
      />
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
      <Faq items={faqItems} variant="dark" pageUrl={`${siteUrl}/`} />
      {/* CTA Banner → dark with gradient (it-cta-banner) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
