"use client"

import { useCallback, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const heroEase = [0.22, 1, 0.36, 1] as const

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: heroEase, delay: 0.55 },
  },
}

export type HeroScrollAccent = "default" | "safeguard" | "autolock" | "solutions"

const accentHoverClasses: Record<HeroScrollAccent, string> = {
  default: "hover:border-it-blue hover:text-it-blue",
  safeguard: "hover:border-(--it-safeguard-border) hover:text-it-safeguard",
  autolock: "hover:border-(--it-autolock-border) hover:text-it-autolock",
  solutions: "hover:border-it-solutions hover:text-it-solutions",
}

interface HeroScrollIndicatorProps {
  /** Optional element id to scroll to; otherwise scrolls to the next <section> or element with an id */
  targetId?: string
  accent?: HeroScrollAccent
}

export function HeroScrollIndicator({ targetId, accent = "default" }: HeroScrollIndicatorProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const motionInitial = prefersReducedMotion ? "visible" : "hidden"

  const handleClick = useCallback(() => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    const heroSection = buttonRef.current?.closest("section")
    if (!heroSection) return

    let el: Element | null = heroSection.nextElementSibling
    while (el) {
      if (el.tagName === "SECTION" || el.id) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
      el = el.nextElementSibling
    }
  }, [targetId])

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      className={`absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full border border-it-border/60 bg-(--it-surface)/40 p-2 text-it-text-muted transition-colors duration-150 ${accentHoverClasses[accent]}`}
      variants={scrollIndicatorVariants}
      initial={motionInitial}
      animate="visible"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="size-5" strokeWidth={1.5} aria-hidden />
    </motion.button>
  )
}
