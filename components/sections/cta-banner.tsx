import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

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
    <section
      className="w-full py-20 md:py-28 bg-it-bg border-t border-it-border"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto text-it-text-primary">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {resolvedHeadline}
          </h2>
          <p className="text-lg md:text-xl text-pretty text-it-text-secondary">
            {description}
          </p>
          <div className="pt-4 flex flex-row flex-wrap items-center justify-center gap-3">
            {secondaryCta && (
              <Link href={secondaryCta.href} className="inline-block order-first">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-it-border text-it-text-primary hover:bg-it-surface hover:border-(--it-blue-border) transition-all duration-150 ease-out hover:-translate-y-0.5 focus-visible:ring-it-blue"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
            {primaryLabel && (
              <Link href={primaryHref} className="inline-block">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-it-blue text-it-bg transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-it-bg hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]"
                >
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
