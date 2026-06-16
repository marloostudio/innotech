import { AbExposure } from "@/components/analytics/ab-exposure"
import { HomeSolutionsVariantA } from "@/components/sections/home-solutions-variant-a"
import { HomeSolutionsVariantB } from "@/components/sections/home-solutions-variant-b"
import { HOME_SOLUTIONS_EXPERIMENT, type HomeSolutionsVariant } from "@/lib/ab-testing/home-solutions-experiment"

interface HomeSolutionsAbProps {
  variant: HomeSolutionsVariant
}

export function HomeSolutionsAb({ variant }: HomeSolutionsAbProps) {
  const { id: experimentId } = HOME_SOLUTIONS_EXPERIMENT

  return (
    <div
      data-ab-experiment={experimentId}
      data-ab-variant={variant}
      className="contents"
    >
      <AbExposure experimentId={experimentId} variant={variant} />
      {variant === "a" ? <HomeSolutionsVariantA /> : <HomeSolutionsVariantB />}
    </div>
  )
}
