import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { DemoRequestForm } from "@/components/demo/demo-request-form"
import { PageShell } from "@/components/page-shell"
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
      <section
        className="relative w-full pt-16 md:pt-20 pb-16 md:pb-20"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="max-w-xl pt-1 text-left justify-self-start">
              <Badge
                variant="outline"
                className="mb-4 border-it-border text-it-text-secondary font-normal"
              >
                Request a Demo
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-balance"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                See InnoTech in Action
              </h1>
              <p
                className="text-lg md:text-xl text-pretty mb-8 max-w-[680px]"
                style={{ color: "var(--it-text-muted)" }}
              >
                Schedule a personalized demo of our autonomous infrastructure solutions
              </p>

              <div
                className="rounded-xl border px-5 py-4 md:px-6 md:py-5 max-w-lg"
                style={{
                  borderColor: "var(--it-blue-border)",
                  background: "var(--it-blue-subtle)",
                  boxShadow: "var(--it-shadow-glow-blue)",
                }}
              >
                <p className="text-sm font-medium text-it-text-secondary mb-4">
                  Prefer to talk?
                </p>
                <div className="text-left">
                  <p className="flex items-center gap-2.5 text-sm md:text-base">
                    <Mail className="w-4 h-4 shrink-0 text-it-blue" strokeWidth={1.5} aria-hidden />
                    <Link
                      href={`mailto:${demoNotifyEmail}`}
                      className="underline hover:text-it-text-secondary text-it-text-primary"
                    >
                      {demoNotifyEmail}
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full min-w-0 max-w-xl lg:max-w-none lg:justify-self-end">
              <Card className="overflow-hidden it-card it-card-accent-blue border-it-border shadow-(--it-shadow-md)">
                <CardContent className="pt-6 pb-6 px-5 sm:px-7">
                  <DemoRequestForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
