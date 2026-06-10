import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact/contact-form"

import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with InnoTech Systems to discuss your automation needs. Request a demo, schedule a consultation, or reach our support team."
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Contact" }]} />
      <section
        id="request-proposal"
        className="relative w-full pt-14 md:pt-16 pb-12 md:pb-16 scroll-mt-28"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
            <div className="max-w-xl pt-1">
              <Badge
                variant="outline"
                className="mb-3 border-it-border text-it-text-secondary font-normal"
              >
                Contact
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                See It Running in Your Environment.
              </h1>
              <p
                className="text-lg md:text-xl text-pretty mb-6 max-w-[680px]"
                style={{ color: "var(--it-text-muted)" }}
              >
                Book a demo, request a site assessment, or reach our engineering team — every conversation is scoped to your operation.
              </p>

              <div
                className="rounded-xl border px-5 py-4 max-w-lg"
                style={{
                  borderColor: "var(--it-blue-border)",
                  background: "var(--it-blue-subtle)",
                  boxShadow: "var(--it-shadow-glow-blue)",
                }}
              >
                <p className="text-sm font-medium text-it-text-secondary mb-3">
                  Prefer to talk?
                </p>
                <p className="inline-flex items-center gap-2.5 text-sm md:text-base">
                  <Mail className="w-4 h-4 shrink-0 text-it-blue" strokeWidth={1.5} aria-hidden />
                  <Link
                    href={`mailto:${siteConfig.company.email}`}
                    className="underline hover:text-it-text-secondary text-it-text-primary"
                  >
                    {siteConfig.company.email}
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 max-w-xl lg:max-w-none lg:justify-self-end contact-form-light">
              <Card className="overflow-hidden border border-it-light-border bg-it-light-surface shadow-(--it-light-shadow-md)">
                <CardContent className="pt-5 pb-5 px-5 sm:px-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
