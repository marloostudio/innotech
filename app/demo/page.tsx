import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { DemoRequestForm } from "@/components/demo/demo-request-form"
import { PageShell, Section } from "@/components/page-shell"
import { getDemoRequestNotifyEmail } from "@/lib/email/demo-notify"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Request a Demo — See InnoTech in Action",
  description: "Schedule a personalized demo of InnoTech's autonomous infrastructure solutions."
}

export default function DemoPage() {
  const demoNotifyEmail = getDemoRequestNotifyEmail()

  return (
    <>
      <BreadcrumbStrip items={[{ label: "Demo" }]} />
      {/* Hero — dark theme, brand gradient */}
      <section
        className="relative w-full pt-24 md:pt-28 pb-14 md:pb-20"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)"
        }}
      >
        <PageShell>
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 border-it-border text-it-text-secondary font-normal"
            >
              Request a Demo
            </Badge>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              See InnoTech in Action
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-balance" style={{ color: "var(--it-text-muted)" }}>
              Schedule a personalized demo of our autonomous infrastructure solutions
            </p>
          </div>
        </PageShell>
      </section>

      {/* Form section — dark surface, card with 3px left accent */}
      <Section variant="dark">
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden it-card it-card-accent-blue border-it-border shadow-(--it-shadow-md)">
            <CardContent className="pt-8 pb-8 px-6 sm:px-8">
              <DemoRequestForm />
            </CardContent>
          </Card>

          <div className="text-center mt-10 text-sm" style={{ color: "var(--it-text-muted)" }}>
            <p>
              Prefer to talk? Call us at <strong className="text-it-text-secondary">1-800-INNOTECH</strong>
            </p>
            <p className="mt-2">
              Or email{" "}
              <Link
                href={`mailto:${demoNotifyEmail}`}
                className="underline hover:text-it-text-secondary"
              >
                {demoNotifyEmail}
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
