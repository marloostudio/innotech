"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { HeroScrollIndicator } from "@/components/sections/hero-scroll-indicator"
import { safeguardProduct } from "@/lib/content/safeguard"

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

export function SafeGuardHero() {
  const prefersReducedMotion = useReducedMotion()
  const motionInitial = prefersReducedMotion ? "visible" : "hidden"

  return (
    <section className="it-hero-safeguard relative pt-3 pb-8 lg:pt-4 lg:pb-10 lg:flex lg:flex-col lg:justify-center">
      <PageShell className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center mx-6 lg:mx-10">
          <motion.div
            className="w-full space-y-6 text-center lg:text-left min-w-0 mt-[6%] lg:mt-0"
            variants={heroContainerVariants}
            initial={motionInitial}
            animate="visible"
          >
            <motion.div className="inline-block mx-auto lg:mx-0 mb-2" variants={heroTextItemVariants}>
              <span className="inline-flex items-center rounded-full px-3 py-1 it-ribbon-badge font-medium bg-(--it-safeguard-subtle) text-it-safeguard">
                Product
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-6xl font-bold tracking-tight text-balance"
              variants={heroTextItemVariants}
            >
              {safeguardProduct.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground text-balance"
              variants={heroTextItemVariants}
            >
              {safeguardProduct.hero.subtitle}
            </motion.p>
            <motion.p
              className="text-lg text-it-text-primary text-pretty"
              variants={heroTextItemVariants}
            >
              {safeguardProduct.hero.description}
            </motion.p>
            <motion.div
              className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start pt-2"
              variants={heroTextItemVariants}
            >
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            variants={heroImageVariants}
            initial={motionInitial}
            animate="visible"
          >
            <ImagePlaceholder
              src={safeguardProduct.hero.image}
              alt={safeguardProduct.hero.imageAlt}
              aspectRatio="1/1"
              objectFit="contain"
              transparentBackground
              className="border-0 overflow-visible"
              imageClassName="scale-[0.945]"
            />
          </motion.div>
        </div>
      </PageShell>

      <HeroScrollIndicator targetId="safeguard-overview" accent="safeguard" />
    </section>
  )
}
