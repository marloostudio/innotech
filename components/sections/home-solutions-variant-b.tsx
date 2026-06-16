import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { solutionsOverview } from "@/lib/content/home"

const SOLUTIONS_IMAGE = "/images/home/solutions-variant-b-secondary.png"

function SolutionsCards() {
  return (
    <div className="flex w-full flex-col gap-3">
      {solutionsOverview.map((feature) => (
        <Card
          key={feature.id}
          className="gap-1 border border-it-light-border bg-it-light-surface py-0 shadow-[var(--it-light-shadow-sm)] hover:border-it-light-blue/50 hover:shadow-[var(--it-light-shadow-md)] transition-all duration-200"
        >
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-xl leading-snug text-it-light-text-primary">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-3 pt-0">
            <CardDescription className="text-base leading-relaxed text-it-light-text-secondary">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

/** Variant B — image left, stacked cards right (A/B test layout). */
export function HomeSolutionsVariantB() {
  return (
    <Section variant="light-bg-2" containerClassName="px-10 lg:px-12">
      <SectionHeader
        theme="light"
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
      />
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="w-full min-w-0">
          <ImagePlaceholder
            src={SOLUTIONS_IMAGE}
            alt="SafeGuard live view diagram — field-of-view safety zones with human motion tracking"
            aspectRatio="21/9"
            variant="light"
            objectFit="contain"
            transparentBackground
            className="w-full border-0"
          />
        </div>
        <SolutionsCards />
      </div>
    </Section>
  )
}
