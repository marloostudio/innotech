/* This component only controls play/pause for the existing CSS marquee animation. */
'use client'

import * as React from 'react'
import { PageShell } from "@/components/page-shell"

interface LogoCloudProps {
  title?: string
  logos: string[]
}

export function LogoCloud({ title = "Trusted by industry leaders", logos }: LogoCloudProps) {
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    let isIntersecting = true

    const applyState = () => {
      el.style.animationPlayState =
        isIntersecting && !mql.matches ? "running" : "paused"
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isIntersecting = entry?.isIntersecting ?? true
        applyState()
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    applyState()

    const onVisibilityChange = () => applyState()
    document.addEventListener("visibilitychange", onVisibilityChange)

    const onReduceChange = () => {
      applyState()
    }
    mql.addEventListener?.("change", onReduceChange)

    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      mql.removeEventListener?.("change", onReduceChange)
    }
  }, [])

  return (
    <section className="it-section-mid py-16 md:py-20">
      <PageShell>
        <div className="space-y-8">
          <p className="text-center text-sm font-medium text-it-text-muted uppercase tracking-wider">
            {title}
          </p>
          <div className="overflow-hidden">
            <div
              ref={marqueeRef}
              className="flex w-max gap-8 items-center logo-cloud-scroll"
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center min-h-12 rounded-lg py-4 px-6 font-semibold text-sm text-it-text-muted border border-[var(--it-border)] bg-[var(--it-surface)]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
