import type { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"

import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with InnoTech Systems to discuss your automation needs. Request a demo, schedule a consultation, or reach our support team."
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: siteConfig.company.email,
    action: "Send email"
  },
  {
    icon: MapPin,
    title: "Office",
    description: siteConfig.company.address,
    action: "Get directions"
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "24/7 Global Support",
    action: "Learn more"
  }
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Contact" }]} />
      {/* Hero → dark */}
      <PillarHero
        badge="Contact"
        h1="See It Running in Your Environment."
        h2="Book a live demo, request a site assessment, or start a conversation with our engineering team."
        description="We don't run generic product walkthroughs. Every demo is scoped to your operation — your vehicle types, your facility layout, your scheduling constraints. Tell us what you're working with and we'll show you exactly where InnoTech fits."
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "Request a Proposal", href: "#request-proposal" }}
        tertiaryCta={{ label: "Contact Sales Directly", href: `mailto:${siteConfig.company.email}` }}
      />

      {/* Form area → light (already correct) */}
      <Section
        id="request-proposal"
        className="bg-it-light-bg text-it-light-text-primary"
      >
        <div className="grid lg:grid-cols-3 gap-8 contact-form-light">
          {/* Contact Form */}
          <Card
            className="lg:col-span-2 border border-it-light-border bg-it-light-surface shadow-(--it-light-shadow-md)"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-it-light-text-primary">
                Request a Demo or Consultation
              </CardTitle>
              <CardDescription className="text-base text-it-light-text-secondary">
                Fill out the form below and our team will get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="border border-it-light-border bg-it-light-surface">
              <CardHeader>
                <CardTitle className="text-it-light-text-primary">Get In Touch</CardTitle>
                <CardDescription className="text-it-light-text-secondary">
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <div key={method.title} className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-0 border-it-light-border">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-it-light-text-primary">{method.title}</p>
                        <p className="text-sm text-it-light-text-muted mt-1 whitespace-pre-line">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="border border-it-light-border bg-it-light-surface">
              <CardHeader>
                <CardTitle className="text-it-light-text-primary">Sales Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-it-light-text-muted">
                  For pricing information, product demos, or to discuss your specific automation requirements.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${siteConfig.company.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteConfig.company.email}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-it-light-border bg-it-light-surface">
              <CardHeader>
                <CardTitle className="text-it-light-text-primary">Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-it-light-text-muted">
                  24/7 support for existing customers. Login to your account for faster service.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${siteConfig.company.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteConfig.company.email}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA / Schedule section → dark */}
      <Section variant="dark">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-it-text-primary">Prefer to Talk?</h2>
          <p className="text-lg text-it-text-muted">
            Schedule a call with one of our automation experts to discuss your needs in detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-it-border text-it-text-primary hover:bg-it-surface hover:border-(--it-blue-border) focus-visible:ring-it-blue"
              asChild
            >
              <a href={`mailto:${siteConfig.company.email}`}>Schedule a Call</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

