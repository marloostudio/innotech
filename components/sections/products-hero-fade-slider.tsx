"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export type ProductsHeroFadeSlide = {
  src: string
  alt: string
}

export function ProductsHeroFadeSlider({
  slides,
  intervalMs = 6000,
}: {
  slides: ProductsHeroFadeSlide[]
  /** Auto-advance interval; set to 0 to disable auto-advance */
  intervalMs?: number
}) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const intervalRef = React.useRef<number | null>(null)

  const advance = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const stop = React.useCallback(() => {
    if (!intervalRef.current) return
    window.clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  const start = React.useCallback(() => {
    if (intervalRef.current) return
    if (slides.length <= 1) return
    if (!intervalMs) return
    intervalRef.current = window.setInterval(advance, intervalMs)
  }, [advance, intervalMs, slides.length])

  const restart = React.useCallback(() => {
    stop()
    start()
  }, [start, stop])

  React.useEffect(() => {
    start()
    return () => stop()
  }, [start, stop])

  if (slides.length === 0) return null

  const dotsEl = (
    <div className="flex gap-2" role="tablist" aria-label="Slide controls">
      {slides.map((_, idx) => {
        const isActive = idx === activeIndex
        return (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            role="tab"
            aria-selected={isActive}
            onClick={() => {
              setActiveIndex(idx)
              restart()
            }}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              isActive ? "bg-it-blue" : "bg-it-blue-subtle",
            )}
          />
        )
      })}
    </div>
  )

  return (
    <div
      className="flex h-full w-full min-h-0 flex-col"
      aria-roledescription="carousel"
      aria-label="Project showcase"
    >
      <div className="relative min-h-0 flex-1 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              idx === activeIndex ? "opacity-100" : "opacity-0",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${slides.length}`}
            aria-hidden={idx !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        {slides.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
            {dotsEl}
          </div>
        )}
      </div>
    </div>
  )
}

