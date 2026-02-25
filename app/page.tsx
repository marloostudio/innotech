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
      {/* PillarHero: dark (unchanged) */}
      <PillarHero {...heroContent} />
      {/* LogoCloud: white */}
      <LogoCloud logos={trustLogos} />
      {/* FeatureGrid: light */}
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
        variant="light"
      />
      {/* IndustryGrid: white */}
      <IndustryGrid 
        title="Serving Critical Industries"
        description="Proven solutions across manufacturing, logistics, healthcare, and beyond"
        industries={industriesServed}
        showCta
      />
      {/* TechOverview: light */}
      <TechOverview 
        title="Technology That Powers Innovation"
        description="Advanced AI, autonomous navigation, and enterprise integration in one platform"
        pillars={technologyPillars}
        variant="light"
        alt
      />
      {/* Testimonial / Case Study: white */}
      <Testimonial {...caseStudyTeaser} variant="white" />
      {/* Stats: light, alternating */}
      <Stats stats={statsPlaceholder} variant="light" alt />
      {/* FAQ: white */}
      <Faq items={faqItems} variant="white" />
      {/* CtaBanner: dark (unchanged) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
