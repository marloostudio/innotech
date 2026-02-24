import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Request a Demo — See InnoTech in Action",
  description: "Schedule a personalized demo of InnoTech's autonomous infrastructure solutions."
}

const whatToExpect = [
  {
    icon: LucideIcons.Calendar,
    title: "Schedule a Call",
    description: "Pick a time that works for you to meet with our solutions team"
  },
  {
    icon: LucideIcons.MessageSquare,
    title: "Discuss Your Needs",
    description: "We'll learn about your operations and specific challenges"
  },
  {
    icon: LucideIcons.Monitor,
    title: "See a Live Demo",
    description: "Watch our products in action with a personalized walkthrough"
  },
  {
    icon: LucideIcons.FileText,
    title: "Get a Custom Proposal",
    description: "Receive a tailored solution proposal for your operation"
  }
]

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Request a Demo</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              See InnoTech in Action
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Schedule a personalized demo of our autonomous infrastructure solutions
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <PageShell>
        <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatToExpect.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </div>
            )
          })}
        </div>
      </PageShell>

      <Separator />

      {/* Form */}
      <PageShell>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder="e.g., Fleet Manager, CTO, Operations Director"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium mb-2">
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a product</option>
                    <option value="safeguard">SafeGuard - Safety Monitoring</option>
                    <option value="autolock">AutoLock - Autonomous Charging</option>
                    <option value="radar-link">Radar Link - V2X Communication</option>
                    <option value="all">All Products</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your operation, fleet size, challenges, etc."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ background: "var(--it-blue)", color: "var(--it-bg)" }}
                >
                  Request Demo
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our{' '}
                  <Link href="/legal/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>Prefer to talk? Call us at <strong>1-800-INNOTECH</strong></p>
            <p className="mt-2">
              Or email <Link href="mailto:sales@innotech-systems.com" className="underline">sales@innotech-systems.com</Link>
            </p>
          </div>
        </div>
      </PageShell>
    </>
  )
}
