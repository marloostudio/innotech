"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export type ProductsHeroSlide = {
  src: string
  alt: string
}

export function ProductsHeroImageSlider({ slides }: { slides: ProductsHeroSlide[] }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    update()
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  const goTo = React.useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <div className="relative h-full w-full">
      <Carousel
        opts={{ loop: false }}
        className="h-full w-full"
        setApi={setApi}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.src} className="h-full pl-0">
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide === slides[0]}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((slide, idx) => {
            const isActive = idx === selectedIndex
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive}
                onClick={() => goTo(idx)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  isActive
                    ? "bg-it-blue"
                    : "bg-it-blue-subtle",
                )}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

