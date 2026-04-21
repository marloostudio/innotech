import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDays,
  CalendarPlus,
  Check,
  MapPin,
  MapPinned,
  Mic,
  Radio,
  Shield,
  Zap,
} from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell, Section } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { AutomateIntakeForm } from "@/components/events/automate-intake-form"
import { AutomateShowLogo } from "@/components/events/automate-show-logo"
import {
  accentBorderClass,
  automateEvent,
  type AutomateAccent,
} from "@/lib/content/exhibition-automate"

export const metadata: Metadata = {
  title: "Automate 2026",
  description:
    "Meet InnoTech Systems at Automate 2026 in Detroit—SafeGuard, AutoDuck, RADARLink, and live fleet demos.",
}

const useCaseAccent: AutomateAccent[] = [
  "blue",
  "safeguard",
  "autolock",
  "solutions",
  "blue",
  "safeguard",
  "autolock",
  "solutions",
]

function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `InnoTech Systems — ${automateEvent.name} ${automateEvent.year}`,
    dates: automateEvent.calendarDatesAllDay,
    details: `Trade show — ${automateEvent.venue}, ${automateEvent.city}. ${automateEvent.booth}.`,
    location: `${automateEvent.venue}, ${automateEvent.city}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function Automate2026Page() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: `${automateEvent.name} ${automateEvent.year}` }]} />

      {/* Hero + interest intake */}
      <section
        className="relative w-full pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: "var(--it-hero-gradient)",
          color: "var(--it-text-primary)",
        }}
      >
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="max-w-xl pt-1">
              <Badge
                variant="outline"
                className="mb-4 border-it-border text-it-text-secondary font-normal"
              >
                {automateEvent.hero.eyebrow}
              </Badge>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                {automateEvent.hero.titleLines[0]}
                <span className="text-it-blue"> {automateEvent.hero.titleLines[1]}</span>
              </h1>
              <p
                className="text-lg md:text-xl text-pretty mb-5"
                style={{ color: "var(--it-text-muted)" }}
              >
                {automateEvent.hero.subtitle}
              </p>
              <a
                href="https://www.automateshow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 focus-visible:ring-offset-it-bg"
              >
                <AutomateShowLogo variant="onDark" size="sm" />
              </a>

              <div
                className="mb-8 rounded-xl border px-5 py-4 md:px-6 md:py-5 max-w-lg"
                style={{
                  borderColor: "var(--it-blue-border)",
                  background: "var(--it-blue-subtle)",
                  boxShadow: "var(--it-shadow-glow-blue)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays
                    className="w-5 h-5 shrink-0 text-it-blue md:w-6 md:h-6"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span
                    className="text-xs md:text-sm font-mono uppercase tracking-widest text-it-text-secondary"
                  >
                    Exhibition dates
                  </span>
                </div>
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-it-blue leading-none"
                  style={{ fontFamily: "var(--font-chakra)" }}
                >
                  {automateEvent.dateRange}
                </p>
                <div
                  className="mt-4 pt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base border-t"
                  style={{ borderColor: "var(--it-blue-border)" }}
                >
                  <span className="inline-flex items-center gap-2 text-it-text-secondary">
                    <MapPin className="w-4 h-4 shrink-0 text-it-text-muted" strokeWidth={1.5} aria-hidden />
                    {automateEvent.venue}, {automateEvent.city}
                  </span>
                  <span className="text-it-text-dim" aria-hidden>
                    ·
                  </span>
                  <span className="font-mono text-it-blue">{automateEvent.booth}</span>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button
                    variant="outline"
                    size="default"
                    className="w-full border-it-blue-border text-it-text-primary hover:bg-it-blue-subtle sm:w-auto"
                    asChild
                  >
                    <a
                      href={googleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarPlus className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                      Add to your calendar
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-it-blue-border text-it-text-primary hover:bg-it-blue-subtle sm:w-auto"
                    asChild
                  >
                    <Link href="#session">
                      <Mic className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                      Session details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div
              id="interest-intake"
              className="w-full min-w-0 max-w-xl lg:max-w-none lg:justify-self-end contact-form-light scroll-mt-28"
            >
              <AutomateIntakeForm />
            </div>
          </div>
        </PageShell>
      </section>

      {/* Pillars */}
      <Section variant="dark">
        <div className="max-w-[680px] mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            {automateEvent.pillars.headline}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {automateEvent.pillars.intro}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {automateEvent.pillars.products.map((p) => (
            <Card
              key={p.name}
              className={`bg-background border-l-[3px] shadow-sm ${accentBorderClass[p.accent]}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {p.accent === "safeguard" && (
                    <Shield className="w-6 h-6 text-it-safeguard" strokeWidth={1.5} aria-hidden />
                  )}
                  {p.accent === "autolock" && (
                    <Zap className="w-6 h-6 text-it-autolock" strokeWidth={1.5} aria-hidden />
                  )}
                  {p.accent === "blue" && (
                    <Radio className="w-6 h-6 text-it-blue" strokeWidth={1.5} aria-hidden />
                  )}
                  <Badge variant="secondary" className="font-normal">
                    {p.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                  {p.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={p.href}>Explore {p.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Execution / AutoDuck */}
      <Section variant="light" alt>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-[680px]">
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--it-text-dim)" }}
            >
              {automateEvent.execution.headline}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {automateEvent.execution.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              {automateEvent.execution.body}
            </p>
            <Button size="lg" asChild>
              <Link href={automateEvent.execution.cta.href}>{automateEvent.execution.cta.label}</Link>
            </Button>
          </div>
          <div className="w-full rounded-lg border border-it-border overflow-hidden bg-it-surface-raised">
            <ImagePlaceholder
              aspectRatio="4/3"
              alt="AutoDuck orchestration"
              label="Orchestration preview"
            />
          </div>
        </div>
      </Section>

      {/* Use cases grid */}
      <Section variant="dark">
        <div className="max-w-[680px] mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4"
            style={{ fontFamily: "var(--font-chakra)" }}
          >
            {automateEvent.useCasesIntro.headline}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {automateEvent.useCasesIntro.sub}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {automateEvent.useCases.map((uc, i) => (
            <Card
              key={uc.title}
              className={`bg-background border-l-[3px] shadow-sm ${accentBorderClass[useCaseAccent[i]!]}`}
            >
              <CardHeader>
                <CardTitle className="text-base leading-snug">{uc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                  {uc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Booth & wayfinding */}
      <Section id="find-us" variant="light-bg" className="scroll-mt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href="https://www.automateshow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-light-blue"
              >
                <AutomateShowLogo variant="onLight" size="sm" />
              </a>
              <div className="flex items-center gap-2 text-it-light-blue">
                <MapPinned className="w-5 h-5 shrink-0" strokeWidth={1.5} aria-hidden />
                <span className="text-sm font-mono uppercase tracking-wider text-it-light-text-muted">
                  Exhibition
                </span>
              </div>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6 text-it-light-text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {automateEvent.findUs.title}
            </h2>
            <p className="text-lg text-it-light-text-secondary text-pretty leading-relaxed mb-8">
              {automateEvent.findUs.intro}
            </p>
            <div
              className="rounded-xl border border-it-light-border bg-it-light-surface px-6 py-6 md:px-8 md:py-8 border-l-[3px] border-l-it-light-blue shadow-(--it-light-shadow-sm)"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-it-light-text-muted mb-2">
                Booth number
              </p>
              <p
                className="text-4xl md:text-5xl font-bold tracking-tight text-it-light-blue leading-none mb-4"
                style={{ fontFamily: "var(--font-chakra)" }}
              >
                {automateEvent.booth}
              </p>
              <p className="text-sm text-it-light-text-secondary text-pretty leading-relaxed mb-3">
                {automateEvent.findUs.hallOrZone}
              </p>
              <p className="text-sm font-medium text-it-light-text-primary inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-it-light-text-muted" strokeWidth={1.5} aria-hidden />
                {automateEvent.venue}, {automateEvent.city}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href={automateEvent.findUs.boothMapCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {automateEvent.findUs.boothMapCta.label}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-it-light-border text-it-light-text-primary sm:w-auto"
                asChild
              >
                <a
                  href={automateEvent.findUs.floorPlanCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {automateEvent.findUs.floorPlanCta.label}
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3
              className="text-lg font-semibold text-it-light-text-primary mb-4"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              How to find us
            </h3>
            <ul className="space-y-4">
              {automateEvent.findUs.directions.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-it-light-text-secondary text-pretty leading-relaxed"
                >
                  <span
                    className="mt-0.5 shrink-0 rounded-full p-1"
                    style={{ backgroundColor: "var(--it-light-blue-subtle)" }}
                  >
                    <Check className="w-4 h-4 text-it-light-blue" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Live CTA band */}
      <section
        className="py-20 md:py-28 it-cta-banner"
        style={{ background: "var(--it-cta-gradient)" }}
      >
        <PageShell>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 text-it-text-primary"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {automateEvent.liveCta.headline}
            </h2>
            <p className="text-lg md:text-xl text-pretty text-it-text-secondary mb-4">
              {automateEvent.liveCta.sub}
            </p>
            <p className="text-sm font-mono text-it-text-muted mb-10">
              {automateEvent.dateRange} · {automateEvent.booth} · {automateEvent.venue}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href={automateEvent.liveCta.primary.href}>{automateEvent.liveCta.primary.label}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={automateEvent.liveCta.secondary.href}>{automateEvent.liveCta.secondary.label}</Link>
              </Button>
            </div>
            <div className="mt-10">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={googleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-it-text-secondary"
                >
                  <CalendarPlus className="w-4 h-4" strokeWidth={1.5} aria-hidden />
                  Add to Google Calendar
                </a>
              </Button>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Session */}
      <Section id="session" variant="light">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-2 text-it-blue mb-4">
              <Mic className="w-5 h-5" strokeWidth={1.5} aria-hidden />
              <span className="text-sm font-mono uppercase tracking-wider">Conference session</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4"
              style={{ fontFamily: "var(--font-chakra)" }}
            >
              {automateEvent.session.title}
            </h2>
            <p className="text-muted-foreground mb-2">{automateEvent.session.speaker}</p>
            <p className="text-sm text-muted-foreground mb-6">
              {automateEvent.session.when} · {automateEvent.session.room}
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              {automateEvent.session.blurb}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/contact">Meet us at the show</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer">
                  Add show dates to calendar
                </a>
              </Button>
            </div>
          </div>
          <Card className="border-it-light-border bg-it-light-surface border-l-[3px] border-l-it-light-blue shadow-(--it-light-shadow-sm)">
            <CardHeader>
              <CardTitle className="text-it-light-text-primary text-lg">Plan your visit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-it-light-text-secondary text-sm leading-relaxed">
              <p>
                Swap <span className="font-mono text-it-light-text-primary">Booth</span>,{" "}
                <span className="font-mono text-it-light-text-primary">session time</span>, and{" "}
                <span className="font-mono text-it-light-text-primary">speaker</span> in{" "}
                <code className="font-mono text-xs bg-it-light-surface-2 px-1.5 py-0.5 rounded">
                  lib/content/exhibition-automate.ts
                </code>{" "}
                before you publish.
              </p>
              <p className="text-it-light-text-muted">
                Official show information: see the{" "}
                <a
                  href="https://www.automateshow.com/"
                  className="text-it-light-blue underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automate
                </a>{" "}
                site for registration and schedules.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
