import type { Metadata } from "next"
import Link from "next/link"
import { PageShell, Section } from "@/components/page-shell"
import { siteConfig } from "@/lib/site"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Request a Demo — See InnoTech in Action",
  description: "Schedule a personalized demo of InnoTech's autonomous infrastructure solutions."
}

const inputBase =
  "w-full px-4 py-3 rounded-lg border bg-it-surface border-it-border text-it-text-primary placeholder:text-it-text-muted focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-[box-shadow,border-color] duration-150"

export default function DemoPage() {
  return (
    <>
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
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-it-text-primary"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={inputBase}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-it-text-primary"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={inputBase}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2 text-it-text-primary"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputBase}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium mb-2 text-it-text-primary"
                  >
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="e.g., Fleet Manager, CTO, Operations Director"
                    className={inputBase}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium mb-2 text-it-text-primary"
                  >
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    className={inputBase}
                    required
                  >
                    <option value="">Select a product</option>
                    <option value="safeguard">SafeGuard — Safety Monitoring</option>
                    <option value="autolock">AutoLock — Autonomous Charging</option>
                    <option value="radar-link">RADARLink — V2X Communication</option>
                    <option value="all">All Products</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-it-text-primary"
                  >
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your operation, fleet size, challenges, etc."
                    className={`${inputBase} resize-y min-h-[120px]`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-150 hover:opacity-90"
                  style={{
                    background: "var(--it-blue)",
                    color: "var(--it-bg)"
                  }}
                >
                  Request Demo
                </button>

                <p className="text-xs text-center" style={{ color: "var(--it-text-muted)" }}>
                  By submitting this form, you agree to our{" "}
                  <Link href="/legal/privacy-policy" className="underline hover:text-it-text-secondary">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-10 text-sm" style={{ color: "var(--it-text-muted)" }}>
            <p>
              Prefer to talk? Call us at <strong className="text-it-text-secondary">1-800-INNOTECH</strong>
            </p>
            <p className="mt-2">
              Or email{" "}
              <Link
                href={`mailto:${siteConfig.company.email}`}
                className="underline hover:text-it-text-secondary"
              >
                {siteConfig.company.email}
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
