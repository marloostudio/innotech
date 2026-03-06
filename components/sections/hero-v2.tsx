"use client"

import Link from "next/link"

/**
 * Hero Style Version 2 — Headline style guide implementation.
 * Used on the home page only. system-ui typography and spec colors.
 */
export interface HeroV2Cta {
  label: string
  href: string
}

export interface HeroV2Props {
  primaryCta: HeroV2Cta
  secondaryCta: HeroV2Cta
  /** Optional background (e.g. HeroCanvas) */
  background?: React.ReactNode
}

const fontStack = "system-ui, -apple-system, sans-serif"

export function HeroV2({ primaryCta, secondaryCta, background }: HeroV2Props) {
  return (
    <section className="relative w-full min-h-[60vh] pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {background && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {background}
        </div>
      )}

      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(60vh-6rem)] px-6 text-center"
        style={{ maxWidth: 880, margin: "0 auto" }}
      >
        {/* Eyebrow / Tag Line */}
        <div
          className="inline-flex items-center gap-2 mb-7"
          style={{
            padding: "5px 14px",
            border: "1px solid rgba(56, 182, 255, 0.15)",
            background: "rgba(56, 182, 255, 0.03)",
            borderRadius: 20,
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: fontStack,
              fontSize: "11.5px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(56, 182, 255, 0.8)",
            }}
          >
            AUTONOMOUS SYSTEMS · ROBOTICS · AI
          </span>
        </div>

        {/* H1 — Line 1: Intelligent Infrastructure */}
        <h1
          className="mb-5"
          style={{
            fontFamily: fontStack,
            fontSize: "clamp(30px, 5vw, 58px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Intelligent Infrastructure
          <br />
          {/* Line 2: for Autonomous Mobility (gradient) */}
          <span
            style={{
              background: "linear-gradient(135deg, #38B6FF 0%, #7B5AFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            for Autonomous Mobility
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: fontStack,
            fontSize: "clamp(15px, 1.6vw, 18px)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.42)",
            maxWidth: 540,
            margin: "0 auto 40px",
          }}
        >
          Autonomous charging, robotic safety monitoring, and V2X systems that keep
          intelligent fleets running 24/7 — without human intervention.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={primaryCta.href}>
            <span
              className="inline-block cursor-pointer transition-all duration-250"
              style={{
                fontFamily: fontStack,
                fontSize: 14,
                fontWeight: 600,
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #38B6FF, #5A8AFF)",
                border: "none",
                borderRadius: 8,
                padding: "13px 30px",
                boxShadow: "0 0 24px rgba(56, 182, 255, 0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 32px rgba(56, 182, 255, 0.32)"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 24px rgba(56, 182, 255, 0.18)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {primaryCta.label}
            </span>
          </Link>
          <Link href={secondaryCta.href}>
            <span
              className="inline-block cursor-pointer transition-all duration-250"
              style={{
                fontFamily: fontStack,
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.6)",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 8,
                padding: "13px 30px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(56, 182, 255, 0.25)"
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.08)"
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"
              }}
            >
              {secondaryCta.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
