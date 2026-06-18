"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { AutomateExhibitionCard } from "@/components/events/automate-exhibition-card"
import { HeroScrollIndicator } from "@/components/sections/hero-scroll-indicator"
import { PageShell } from "@/components/page-shell"
import { automateEvent } from "@/lib/content/exhibition-automate"

const heroEase = [0.22, 1, 0.36, 1] as const

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

const heroTextItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: heroEase },
  },
}

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: heroEase, delay: 0.1 },
  },
}

export function Automate2026Hero() {
  const prefersReducedMotion = useReducedMotion()
  const motionInitial = prefersReducedMotion ? "visible" : "hidden"

  return (
    <section
      className="relative w-full pt-8 md:pt-12 pb-0 lg:pb-8 overflow-hidden"
      style={{
        background: "var(--it-hero-gradient)",
        color: "var(--it-text-primary)",
      }}
    >
      <PageShell className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-x-12 xl:gap-x-16 items-start">
          <motion.div
            className="min-w-0 pt-1"
            variants={heroContainerVariants}
            initial={motionInitial}
            animate="visible"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-chakra)" }}
              variants={heroTextItemVariants}
            >
              {automateEvent.hero.titleLines[0]}
              <br />
              <span className="text-it-blue">{automateEvent.hero.titleLines[1]}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-pretty mb-5"
              style={{ color: "var(--it-text-muted)" }}
              variants={heroTextItemVariants}
            >
              Meet our team, explore{" "}
              <Link
                href="/products/safeguard"
                className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
              >
                SafeGuard™
              </Link>
              ,{" "}
              <Link
                href="/products/radar-link"
                className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
              >
                RADARLink™
              </Link>
              , and{" "}
              <Link
                href="/products/autoduck"
                className="text-it-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
              >
                AutoDuck
              </Link>
              , and watch how software-defined safety, autonomous charging, and precision connectivity come together on the show floor.
            </motion.p>
            <motion.div variants={heroTextItemVariants}>
              <AutomateExhibitionCard variant="dark" className="mt-6 pl-0 md:pl-0" />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex w-full min-w-0 justify-center lg:col-start-2"
            variants={heroImageVariants}
            initial={motionInitial}
            animate="visible"
          >
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={automateEvent.orchestrationImage.src}
                alt={automateEvent.orchestrationImage.alt}
                className="block h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </PageShell>
      <HeroScrollIndicator targetId="interest-intake" />
    </section>
  )
}
