import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Phone, Radio, Shield, Zap } from "lucide-react"

import { ThankYouDataLayer } from "@/components/analytics/thank-you-datalayer"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { productsMegaColumns } from "@/lib/nav-mega"
import { siteConfig } from "@/lib/site"

const productIcons = {
  safeguard: Shield,
  autolock: Zap,
  "radar-link": Radio,
} as const

const productIconStyles = {
  safeguard: {
    background: "var(--it-safeguard-subtle)",
    color: "var(--it-safeguard)",
  },
  autolock: {
    background: "var(--it-autolock-subtle)",
    color: "var(--it-autolock)",
  },
  "radar-link": {
    background: "var(--it-blue-subtle)",
    color: "var(--it-blue)",
  },
} as const

const SOURCES = ["contact", "automate", "demo"] as const
type Source = (typeof SOURCES)[number]

function isSource(s: string | undefined): s is Source {
  return s !== undefined && (SOURCES as readonly string[]).includes(s)
}

function blurb(source: Source | undefined) {
  switch (source) {
    case "contact":
      return "Your message is in our inbox. A member of our team will follow up within 24 hours."
    case "automate":
      return "Your interest for Automate 2026 is recorded. Our team will follow up shortly."
    case "demo":
      return "Your demo request is recorded. Our team will reach out to schedule time with you."
    default:
      return "Your information was submitted successfully. Our team will be in touch soon."
  }
}

export const metadata: Metadata = {
  title: "Thank you",
  description: `Confirmation — ${siteConfig.name} received your submission.`,
  robots: { index: false, follow: true },
}

type Props = {
  searchParams: Promise<{ source?: string | string[] }>
}

export default async function ThankYouPage({ searchParams }: Props) {
  const sp = await searchParams
  const raw = sp.source
  const sourceParam = Array.isArray(raw) ? raw[0] : raw
  const source = sourceParam && isSource(sourceParam) ? sourceParam : undefined
  const dataLayerSource = source ?? "general"

  return (
    <>
      <ThankYouDataLayer source={dataLayerSource} />
      <BreadcrumbStrip items={[{ label: "Thank you" }]} />
      <section
        className="relative w-full pt-12 md:pt-16 pb-20 md:pb-28"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12 items-start">
              <div className="max-w-xl text-left">
                <div className="mb-4 flex items-center gap-4 md:gap-6">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2"
                    style={{
                      borderColor: "var(--it-blue-border)",
                      background: "var(--it-blue-subtle)",
                      boxShadow: "var(--it-shadow-glow-blue)",
                    }}
                    aria-hidden
                  >
                    <Check className="h-8 w-8 text-it-blue" strokeWidth={1.5} />
                  </div>
                  <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight text-balance"
                    style={{ fontFamily: "var(--font-chakra)" }}
                  >
                    Thank you
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-pretty leading-relaxed max-w-[680px]" style={{ color: "var(--it-text-muted)" }}>
                  {blurb(source)}
                </p>
              </div>

              <div className="w-full max-w-sm lg:justify-self-end">
                <div
                  className="rounded-xl border border-it-border bg-it-surface px-5 py-4 shadow-(--it-shadow-sm)"
                >
                  <p className="text-base font-semibold text-it-text-secondary mb-3">
                    Need to reach us sooner?
                  </p>
                  <p className="mb-4 inline-flex items-center gap-2 text-sm text-it-text-primary">
                    <Phone className="h-4 w-4 shrink-0 text-it-blue" strokeWidth={1.5} aria-hidden />
                    <span>
                      <span className="font-medium">Call us</span>
                      {" "}directly at{" "}
                      <a href="tel:+17148726407" className="underline hover:text-it-text-secondary">
                        (714) 872-6407
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="it-section-divider mb-6" aria-hidden />
            <h2
              className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-balance text-it-text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              While You Wait
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
            {productsMegaColumns.map((product) => {
              const Icon = productIcons[product.id as keyof typeof productIcons]
              const iconStyle = productIconStyles[product.id as keyof typeof productIconStyles]

              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-xl"
                >
                  <Card
                    className="h-full overflow-hidden border-it-border bg-it-surface gap-4 shadow-(--it-shadow-sm) transition-shadow duration-150 group-hover:shadow-(--it-shadow-md)"
                  >
                    <CardHeader className="grid-cols-1 text-left">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-lg p-3.5" style={{ background: iconStyle.background }}>
                          <Icon className="h-7 w-7" style={{ color: iconStyle.color }} strokeWidth={1.5} aria-hidden />
                        </div>
                        <div className="min-w-0 space-y-2">
                          <CardTitle
                            className="text-xl text-it-text-primary transition-colors duration-150 group-hover:text-it-blue"
                            style={{ fontFamily: "var(--font-chakra)" }}
                          >
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-it-text-muted">
                            {product.tagline}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-right">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-it-blue transition-opacity duration-150 group-hover:opacity-80">
                        {product.ctaLabel}
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
