import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import {
  ImagePlaceholder,
  type ImagePlaceholderAspectRatio,
} from "@/components/ui/image-placeholder"
import { HeroScrollIndicator, type HeroScrollAccent } from "@/components/sections/hero-scroll-indicator"

export interface PillarHeroCta {
  label: string
  href: string
}

export type HeroSectionClass = "it-hero-safeguard" | "it-hero-solutions"

export interface PillarHeroImage {
  label: string
  aspectRatio?: ImagePlaceholderAspectRatio
}

export interface PillarHeroProps {
  /** Optional badge above the title (e.g. "Products", "Solutions") */
  badge?: string
  /** Main page title — single H1 per page for SEO */
  h1: string
  /** Supporting headline — H2 for hierarchy and SEO */
  h2?: string
  /** Short description paragraph, visible above the fold */
  description?: string
  /** Optional primary CTA; omit for minimal hero */
  primaryCta?: PillarHeroCta
  /** Optional secondary CTA; omit for minimal hero */
  secondaryCta?: PillarHeroCta
  /** Optional tertiary CTA as text link (e.g. "Contact Sales Directly") */
  tertiaryCta?: PillarHeroCta
  /** Optional hero section class: SafeGuard page vs Drone/V2X (solutions) pages */
  heroClass?: HeroSectionClass
  /** Optional background (e.g. canvas effect) rendered behind hero content */
  background?: React.ReactNode
  /** Reduced height and no CTA block; use with minimal content pages */
  compact?: boolean
  /** Text alignment: "center" (default) or "left" */
  align?: "center" | "left"
  /** Optional hero image placeholder on the right (large screens) */
  heroImage?: PillarHeroImage
}

function heroClassToAccent(heroClass?: HeroSectionClass): HeroScrollAccent {
  if (heroClass === "it-hero-safeguard") return "safeguard"
  if (heroClass === "it-hero-solutions") return "solutions"
  return "default"
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
  background,
  compact,
  align = "center",
  heroImage,
}: PillarHeroProps) {
  const showCtas = (primaryCta ?? secondaryCta) && !compact
  const isLeft = align === "left" || Boolean(heroImage)
  const contentSpacing = compact ? "space-y-3" : "space-y-6"
  const contentAlign = isLeft
    ? `max-w-4xl ${contentSpacing} text-center lg:text-left mr-auto`
    : `max-w-4xl ${contentSpacing} mx-auto text-center`

  const heroContent = (
    <>
      {badge && (
        <Badge variant="outline" className="mb-2 border-[var(--it-border)] text-[var(--it-text-secondary)]">
          {badge}
        </Badge>
      )}
      <h1 className={compact ? "text-3xl md:text-4xl font-bold tracking-tight text-balance" : "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"}>
        {h1}
      </h1>
      {h2 ? (
        <h2
          className={compact ? "text-lg md:text-xl font-semibold text-balance" : "text-xl md:text-2xl lg:text-3xl font-semibold text-balance"}
          style={{ color: "var(--it-text-muted)" }}
        >
          {h2}
        </h2>
      ) : null}
      {description?.trim() ? (
        <p
          className={compact ? `text-base text-pretty max-w-3xl ${isLeft ? "" : "mx-auto"}` : `text-lg text-pretty max-w-3xl ${isLeft ? "" : "mx-auto"}`}
          style={{ color: "var(--it-text-muted)" }}
        >
          {description}
        </p>
      ) : null}
      {showCtas && (primaryCta || secondaryCta) && (
        <div className={`flex flex-col sm:flex-row items-center gap-4 pt-4 ${isLeft ? "justify-center lg:justify-start" : "justify-center"}`}>
          {primaryCta && (
            <Link href={primaryCta.href}>
              <Button size="lg" className="w-full sm:w-auto" style={{ background: "var(--it-blue)", color: "var(--it-bg)" }}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[var(--it-border)] text-[var(--it-text-primary)] hover:bg-[var(--it-surface)]">
                {secondaryCta.label}
              </Button>
            </Link>
          )}
        </div>
      )}
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
    </>
  )

  return (
    <section
      style={!heroClass && !background ? { background: "var(--it-bg)", color: "var(--it-text-primary)" } : { color: "var(--it-text-primary)" }}
      className={[
        "relative w-full min-h-0",
        compact ? "pt-16 md:pt-20 pb-12 md:pb-16" : "pt-24 md:pt-28 pb-20 md:pb-28",
        background ? "min-h-[85vh]" : "",
        heroClass,
      ].filter(Boolean).join(" ")}
    >
      {background && <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>}
      <PageShell className="relative z-10">
        {heroImage ? (
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className={contentAlign}>{heroContent}</div>
            <div className="w-full min-w-0">
              <ImagePlaceholder
                aspectRatio={heroImage.aspectRatio ?? "16/9"}
                alt={heroImage.label}
                label={heroImage.label}
              />
            </div>
          </div>
        ) : (
          <div className={contentAlign}>{heroContent}</div>
        )}
      </PageShell>
      {!compact && <HeroScrollIndicator accent={heroClassToAccent(heroClass)} />}
    </section>
  )
}
