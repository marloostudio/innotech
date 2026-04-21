import { HeroV2 } from "@/components/sections/hero-v2"
import { HeroCanvas } from "@/components/sections/hero-canvas"
import { ExhibitionTeaser } from "@/components/sections/exhibition-teaser"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"

import {
  trustLogos,
  solutionsOverview,
  industriesServed,
  technologyPillars,
  faqItems,
  finalCta
} from "@/lib/content/home"

export default function HomePage() {
  return (
    <>
      {/* Hero Style v2 — home only */}
      <HeroV2
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore Solutions", href: "/products" }}
        background={<HeroCanvas />}
      />
      <ExhibitionTeaser />
      {/* Logo Cloud → dark alt (it-section-mid) */}
      <LogoCloud title="Trusted by innovative companies worldwide" logos={trustLogos} />
      {/* Feature Grid → light-bg */}
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
        columns={2}
        variant="light-bg"
        showImagePlaceholder
        imageOnLeft
        hideIcon
      />
      {/* Industry Grid → dark (it-section-mid) */}
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
      <Faq items={faqItems} variant="dark" />
      {/* CTA Banner → dark with gradient (it-cta-banner) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
