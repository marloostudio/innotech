import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/page-shell"

interface CtaBannerProps {
  // Primary shape (new)
  title?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  // Legacy shape (keep working)
  headline?: string
  ctaText?: string
  ctaHref?: string
  // Shared
  description?: string
}

export function CtaBanner({
  title,
  primaryCta,
  secondaryCta,
  headline,
  ctaText,
  ctaHref,
  description,
}: CtaBannerProps) {
  const resolvedHeadline = title ?? headline ?? ""
  const primaryLabel = primaryCta?.label ?? ctaText ?? ""
  const primaryHref = primaryCta?.href ?? ctaHref ?? "#"

  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          {resolvedHeadline}
        </h2>
        <p className="text-lg md:text-xl opacity-90 text-pretty">
          {description}
        </p>
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          {primaryLabel && (
            <Link href={primaryHref}>
              <Button
                size="lg"
                variant="secondary"
                className="text-primary"
              >
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                {secondaryCta.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Section>
  )
}
