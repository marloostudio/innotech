import type { ReactNode } from "react"

/** Full SVG canvas and left-column crop (from embedded layer bounds). */
const SAFEGUARD_SVG = {
  width: 792,
  height: 612,
  leftColumnWidth: 399,
} as const

interface SvgDisplayRowProps {
  rightColumn?: ReactNode
}

/**
 * SVG display sandbox — edit markup and styles here while previewing at /demo.
 */
export function SvgDisplayRow({ rightColumn }: SvgDisplayRowProps) {
  const { width, height, leftColumnWidth } = SAFEGUARD_SVG

  return (
    <div
      className={`grid w-full grid-cols-1 lg:grid-cols-[9fr_11fr] lg:items-start${rightColumn ? " bg-it-light-bg" : ""}`}
      aria-label="SVG preview area"
    >
      <div
        className={`w-full overflow-hidden${rightColumn ? " bg-it-light-bg" : ""}`}
        style={{ aspectRatio: `${leftColumnWidth} / ${height}` }}
      >
        <img
          src="/images/demo/safeguard.svg"
          alt="SafeGuard product diagram — left column"
          className="block h-full max-w-none"
          style={{ width: `${(width / leftColumnWidth) * 100}%` }}
        />
      </div>
      {rightColumn ? (
        <div className="bg-it-light-bg px-10 py-12 lg:px-12 lg:py-20">{rightColumn}</div>
      ) : (
        <div aria-hidden="true" className="hidden min-h-px lg:block" />
      )}
    </div>
  )
}
