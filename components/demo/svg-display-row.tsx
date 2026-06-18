import type { ReactNode } from "react"

interface SvgDisplayRowProps {
  leftColumn?: ReactNode
  imageSrc: string
  imageAlt: string
}

/**
 * Two-column solutions row — stacked cards left, illustration right (below section header).
 */
export function SvgDisplayRow({ leftColumn, imageSrc, imageAlt }: SvgDisplayRowProps) {
  return (
    <div
      className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 lg:items-center bg-it-light-bg"
      aria-label="Solutions preview area"
    >
      <div className="w-full min-w-0">{leftColumn}</div>
      <div className="flex w-full min-w-0 justify-center">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
