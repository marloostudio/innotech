import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"

export interface PillarHeroCta {
  label: string
  href: string
}

export type HeroSectionClass = "it-hero-safeguard" | "it-hero-solutions"

export interface PillarHeroProps {
  /** Optional badge above the title (e.g. "Products", "Solutions") */
  badge?: string
  /** Main page title — single H1 per page for SEO */
  h1: string
  /** Supporting headline — H2 for hierarchy and SEO */
  h2: string
  /** Short description paragraph, visible above the fold */
  description: string
  primaryCta: PillarHeroCta
  secondaryCta: PillarHeroCta
  /** Optional tertiary CTA as text link (e.g. "Contact Sales Directly") */
  tertiaryCta?: PillarHeroCta
  /** Optional hero section class: SafeGuard page vs Drone/V2X (solutions) pages */
  heroClass?: HeroSectionClass
}

/**
 * Hero section for pillar pages. Renders H1, H2, description, and CTAs
 * in an above-the-fold, SEO-friendly layout.
 */
export function PillarHero({
  badge,
  h1,
  h2,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  heroClass,
}: PillarHeroProps) {
  return (
    <section
      style={!heroClass ? { background: "var(--it-bg)", color: "var(--it-text-primary)" } : { color: "var(--it-text-primary)" }}
      className={["relative w-full pt-24 md:pt-28 pb-14 md:pb-20 min-h-0", heroClass].filter(Boolean).join(" ")}
    >
      <PageShell>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {badge && (
            <Badge variant="outline" className="mb-2 border-[var(--it-border)] text-[var(--it-text-secondary)]">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {h1}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-balance" style={{ color: "var(--it-text-muted)" }}>
            {h2}
          </h2>
          <p className="text-lg text-pretty max-w-3xl mx-auto" style={{ color: "var(--it-text-muted)" }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href={primaryCta.href}>
              <Button size="lg" className="w-full sm:w-auto" style={{ background: "var(--it-blue)", color: "var(--it-bg)" }}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Button>
            </Link>
            <Link href={secondaryCta.href}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[var(--it-border)] text-[var(--it-text-primary)] hover:bg-[var(--it-surface)]">
                {secondaryCta.label}
              </Button>
            </Link>
          </div>
          {tertiaryCta && (
            <p className="pt-2 text-sm" style={{ color: "var(--it-text-muted)" }}>
              <Link
                href={tertiaryCta.href}
                className="underline underline-offset-4 hover:text-[var(--it-text-primary)] transition-colors"
                style={{ color: "var(--it-text-muted)" }}
              >
                {tertiaryCta.label}
              </Link>
            </p>
          )}
        </div>
      </PageShell>
    </section>
  )
}
