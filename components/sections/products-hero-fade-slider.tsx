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

  React.useEffect(() => {
    if (slides.length <= 1) return
    if (!intervalMs) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [intervalMs, slides.length])

  if (slides.length === 0) return null

  return (
    <div className="relative h-full w-full min-h-0 overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          // Keep images mounted for smoother fades.
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            idx === activeIndex ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={idx !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
            unoptimized
          />
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  isActive ? "bg-it-blue" : "bg-it-blue-subtle",
                )}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

