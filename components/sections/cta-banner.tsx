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
      style={{
        background: "var(--it-bg)",
        borderTop: "1px solid var(--it-border)",
      }}
      className="w-full py-20 md:py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-3xl mx-auto" style={{ color: "var(--it-text-primary)" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {resolvedHeadline}
          </h2>
          <p className="text-lg md:text-xl opacity-90 text-pretty" style={{ color: "var(--it-text-secondary)" }}>
            {description}
          </p>
          <div className="pt-4 flex flex-row flex-wrap items-center justify-center gap-3">
            {primaryLabel && (
              <Link href={primaryHref}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-[var(--it-bg)]"
                  style={{ background: "var(--it-blue)" }}
                >
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="border-[var(--it-border)] text-[var(--it-text-primary)] hover:bg-[var(--it-surface)]">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
