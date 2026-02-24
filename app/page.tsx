import { PillarHero } from "@/components/sections/pillar-hero"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Testimonial } from "@/components/sections/testimonial"
import { Stats } from "@/components/sections/stats"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"

import {
  heroContent,
  trustLogos,
  solutionsOverview,
  industriesServed,
  technologyPillars,
  caseStudyTeaser,
  statsPlaceholder,
  faqItems,
  finalCta
} from "@/lib/content/home"

export default function HomePage() {
  return (
    <>
      <PillarHero {...heroContent} />
      <LogoCloud logos={trustLogos} />
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
      />
      <IndustryGrid 
        title="Serving Critical Industries"
        description="Proven solutions across manufacturing, logistics, healthcare, and beyond"
        industries={industriesServed}
        showCta
      />
      <TechOverview 
        title="Technology That Powers Innovation"
        description="Advanced AI, autonomous navigation, and enterprise integration in one platform"
        pillars={technologyPillars}
      />
      <Testimonial {...caseStudyTeaser} />
      <Stats stats={statsPlaceholder} />
      <Faq items={faqItems} />
      <CtaBanner {...finalCta} />
    </>
  )
}
