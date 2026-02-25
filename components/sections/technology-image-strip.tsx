"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

const slides = [
  { label: "Radar Technology" },
  { label: "Computer Vision" },
  { label: "Robotics Arm" },
  { label: "AI Dashboard" },
]

export function TechnologyImageStrip() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {slides.map((slide) => (
              <CarouselItem key={slide.label} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  alt={slide.label}
                  label={slide.label}
                  variant="light"
                  className="w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-it-light-border text-it-light-text-primary hover:bg-it-light-surface-2" />
          <CarouselNext className="right-0 border-it-light-border text-it-light-text-primary hover:bg-it-light-surface-2" />
        </Carousel>
      </div>
    </section>
  )
}
