import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { ThankYouDataLayer } from "@/components/analytics/thank-you-datalayer"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell, Section } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site"

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
        className="relative w-full pt-20 md:pt-28 pb-12 md:pb-16"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="max-w-xl mx-auto text-center">
            <div
              className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2"
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
              className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              Thank you
            </h1>
            <p className="text-lg md:text-xl text-pretty leading-relaxed" style={{ color: "var(--it-text-muted)" }}>
              {blurb(source)}
            </p>
          </div>
        </PageShell>
      </section>

      <Section variant="dark">
        <div className="max-w-xl mx-auto">
          <Card className="border-it-border bg-it-surface border-l-[3px] border-l-it-blue shadow-(--it-shadow-md)">
            <CardContent className="pt-8 pb-8 px-6 sm:px-8 space-y-6 text-center">
              <p className="text-sm text-it-text-muted text-pretty leading-relaxed">
                If you need anything urgent, email us at{" "}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-it-blue underline-offset-4 hover:underline"
                >
                  {siteConfig.company.email}
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">Back to home</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-it-border" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
