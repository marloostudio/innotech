import { HeroV2 } from "@/components/sections/hero-v2"
import { HeroCanvas } from "@/components/sections/hero-canvas"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Testimonial } from "@/components/sections/testimonial"
import { Stats } from "@/components/sections/stats"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"

import {
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
      {/* Hero Style v2 — home only */}
      <HeroV2
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore Solutions", href: "/products" }}
        background={<HeroCanvas />}
      />
      {/* LogoCloud: white */}
      <LogoCloud title="Trusted by innovative companies worldwide" logos={trustLogos} />
      {/* FeatureGrid: light — solutions grid with 4/3 placeholder per card */}
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
      {/* IndustryGrid: white background */}
      <IndustryGrid 
        title="Serving Critical Industries"
        description="Advanced AI, computer vision and telecommunication for autonomous charging, safe robot-human collaboration and V2X"
        industries={industriesServed}
        variant="light-bg"
      />
      {/* TechOverview: white bg, dark headline */}
      <TechOverview 
        title="Technology That Powers Innovation"
        description="Advanced AI, autonomous navigation, and enterprise integration in one platform"
        pillars={technologyPillars}
        variant="light-bg"
        alt
      />
      {/* Testimonial / Case Study: off-white bg, dark headline */}
      <Testimonial {...caseStudyTeaser} variant="light-bg-2" />
      {/* Stats: white background */}
      <Stats stats={statsPlaceholder} variant="light-bg" alt />
      {/* FAQ: white */}
      <Faq items={faqItems} variant="white" />
      {/* CtaBanner: dark (unchanged) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
