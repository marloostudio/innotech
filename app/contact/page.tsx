import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with InnoTech Systems to discuss your automation needs. Request a demo, schedule a consultation, or reach our support team."
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: siteConfig.company.phone,
    action: "Call us"
  },
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
      <PillarHero
        badge="Contact"
        h1="See It Running in Your Environment."
        h2="Book a live demo, request a site assessment, or start a conversation with our engineering team."
        description="We don't run generic product walkthroughs. Every demo is scoped to your operation — your vehicle types, your facility layout, your scheduling constraints. Tell us what you're working with and we'll show you exactly where InnoTech fits."
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "Request a Proposal", href: "#request-proposal" }}
        tertiaryCta={{ label: "Contact Sales Directly", href: `mailto:${siteConfig.company.email}` }}
      />

      <Section
        id="request-proposal"
        className="py-8 text-[var(--it-light-text-primary)]"
        style={{ background: "var(--it-light-bg)" }}
      >
        <div className="grid lg:grid-cols-3 gap-8 contact-form-light">
          {/* Contact Form */}
          <Card
            className="lg:col-span-2 border border-it-light-border bg-it-light-surface"
            style={{ boxShadow: "var(--it-light-shadow-md)" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-it-light-text-primary">
                Request a Demo or Consultation
              </CardTitle>
              <CardDescription className="text-base text-it-light-text-secondary">
                Fill out the form below and our team will get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" placeholder="Your Company Name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                      <SelectItem value="warehousing">Warehousing & Logistics</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="manufacturing">General Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="What are you interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amr">Autonomous Mobile Robots</SelectItem>
                      <SelectItem value="manipulators">Robotic Manipulators</SelectItem>
                      <SelectItem value="inspection">Inspection Systems</SelectItem>
                      <SelectItem value="software">Software Platforms</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your automation needs, challenges, or questions..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>

                <p className="text-sm text-it-light-text-muted text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
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
                        <p className="text-sm text-it-light-text-muted mt-1">
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

      <Section className="py-20 md:py-28 text-[var(--it-light-text-primary)]" style={{ background: "var(--it-light-surface-2)" }}>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-it-light-text-primary">Prefer to Talk?</h2>
          <p className="text-lg text-it-light-text-muted">
            Schedule a call with one of our automation experts to discuss your needs in detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.company.phone}
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

