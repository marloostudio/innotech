"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  Car,
  Check,
  Factory,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import {
  buildSafeguardDemoHref,
  safeguardApplicationsSection,
  type SafeguardIndustryApplication,
} from "@/lib/content/safeguard"
import { cn } from "@/lib/utils"

const iconMap: Record<SafeguardIndustryApplication["icon"], LucideIcon> = {
  factory: Factory,
  truck: Truck,
  car: Car,
  warehouse: Warehouse,
}

const panelVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const listItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
}

export function SafeGuardApplications() {
  const { label, title, description, industries, ctaFallback } = safeguardApplicationsSection
  const [activeId, setActiveId] = useState(industries[0].id)

  const activeIndex = industries.findIndex((item) => item.id === activeId)
  const active = industries[activeIndex >= 0 ? activeIndex : 0]
  const ActiveIcon = iconMap[active.icon]

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <SectionHeader label={label} title={title} description={description} />

      {/* Industry selector rail */}
      <div className="space-y-6 lg:space-y-8">
        <div
          className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory scrollbar-none lg:flex-wrap lg:justify-center lg:overflow-visible"
          role="tablist"
          aria-label="Industries using SafeGuard"
        >
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon]
            const isActive = industry.id === activeId

            return (
              <button
                key={industry.id}
                type="button"
                role="tab"
                id={`safeguard-industry-tab-${industry.id}`}
                aria-selected={isActive}
                aria-controls="safeguard-industry-panel"
                onClick={() => setActiveId(industry.id)}
                className={cn(
                  "group relative flex shrink-0 snap-start items-center gap-3 rounded-lg px-4 py-3 text-left",
                  "border border-it-border bg-[var(--it-surface-raised)]",
                  "border-l-[3px] transition-[border-color,background-color,box-shadow,transform] duration-200 ease-out",
                  "hover:-translate-y-0.5 hover:border-[var(--it-safeguard-border)] hover:shadow-[var(--it-shadow-md)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--it-bg)]",
                  isActive
                    ? "border-l-[var(--it-safeguard)] bg-[var(--it-safeguard-subtle)] border-[var(--it-safeguard-border)] shadow-[var(--it-shadow-sm)]"
                    : "border-l-transparent",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs tabular-nums transition-colors duration-150",
                    isActive ? "text-[var(--it-safeguard)]" : "text-it-text-muted",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  className={cn(
                    "w-4 h-4 shrink-0 transition-colors duration-150",
                    isActive ? "text-[var(--it-safeguard)]" : "text-it-blue group-hover:text-[var(--it-safeguard)]",
                  )}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span
                  className={cn(
                    "text-sm font-semibold whitespace-nowrap transition-colors duration-150",
                    isActive ? "text-it-text-primary" : "text-it-text-secondary group-hover:text-it-text-primary",
                  )}
                >
                  {industry.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Spotlight detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id="safeguard-industry-panel"
            role="tabpanel"
            aria-labelledby={`safeguard-industry-tab-${active.id}`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl border border-it-border bg-[var(--it-surface)] border-l-[3px] border-l-[var(--it-safeguard)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--it-border) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--it-border) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
                maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
              }}
            />

            <div
              className="pointer-events-none absolute -right-2 top-4 select-none lg:-right-4 lg:top-2"
              aria-hidden
            >
              <span className="font-chakra text-[7rem] font-bold leading-none text-[var(--it-safeguard)] opacity-[0.07] lg:text-[9rem]">
                {active.stat.value}
              </span>
            </div>

            <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:p-10">
              <div className="space-y-6 min-w-0">
                <div className="flex items-start gap-4">
                  <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-lg bg-[var(--it-safeguard-subtle)]">
                    <ActiveIcon className="w-6 h-6 text-[var(--it-safeguard)]" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-it-text-muted">
                      {active.name}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight font-chakra text-it-text-primary text-balance lg:text-3xl">
                      {active.hook}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-it-text-secondary text-pretty leading-relaxed max-w-prose">
                  {active.pain}
                </p>

                <blockquote className="border-l-[3px] border-l-[var(--it-safeguard)] pl-4 md:pl-5">
                  <p className="text-base text-it-text-primary text-pretty leading-relaxed">
                    {active.outcome}
                  </p>
                </blockquote>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {active.highlights.map((highlight, index) => (
                    <motion.li
                      key={highlight}
                      variants={listItemVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                      className="flex items-start gap-2.5 text-sm text-it-text-secondary"
                    >
                      <Check
                        className="w-4 h-4 shrink-0 mt-0.5 text-[var(--it-safeguard)]"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="text-pretty leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6 lg:items-end lg:text-right lg:min-w-[220px]">
                <div className="rounded-lg border border-[var(--it-safeguard-border)] bg-[var(--it-safeguard-subtle)] px-5 py-4 lg:ml-auto">
                  <p className="font-chakra text-4xl font-bold text-[var(--it-safeguard)] lg:text-5xl">
                    {active.stat.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wide text-it-text-muted mt-1">
                    {active.stat.label}
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-auto lg:items-end">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto cursor-pointer bg-it-blue text-it-bg transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-it-bg hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]"
                  >
                    <Link href={buildSafeguardDemoHref(active)}>
                      Book a {active.name.toLowerCase()} walkthrough
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </Button>

                  {active.industryHref ? (
                    <Link
                      href={active.industryHref}
                      className="inline-flex items-center justify-center lg:justify-end gap-1.5 text-sm text-it-blue hover:text-it-blue-hover transition-colors duration-150"
                    >
                      Explore {active.name.toLowerCase()} solutions
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lead-gen CTA band */}
      <div className="group relative overflow-hidden rounded-xl border border-it-border bg-[var(--it-surface-raised)] border-l-[3px] border-l-it-blue transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--it-shadow-md)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 100% 50%, var(--it-blue-subtle), transparent 70%)",
          }}
        />

        <div className="relative flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="space-y-2 min-w-0 max-w-prose">
            <p className="font-chakra text-xl font-bold text-it-text-primary lg:text-2xl text-balance">
              {ctaFallback.headline}
            </p>
            <p className="text-sm text-it-text-secondary text-pretty leading-relaxed md:text-base">
              {ctaFallback.body}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="cursor-pointer bg-it-blue text-it-bg transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-it-bg hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]"
            >
              <Link href={ctaFallback.primaryHref}>
                {ctaFallback.primaryLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-pointer border-it-border text-it-text-primary hover:bg-it-surface hover:border-(--it-blue-border) transition-all duration-150 ease-out hover:-translate-y-0.5 focus-visible:ring-it-blue"
            >
              <Link href={ctaFallback.secondaryHref}>
                {ctaFallback.secondaryLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
