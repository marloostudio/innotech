/**
 * SVG display sandbox — edit markup and styles here while previewing at /demo.
 */
export function SvgDisplayRow() {
  return (
    <div className="w-full" aria-label="SVG preview area">
      <div className="w-full">
        <img
          src="/images/demo/safeguard.svg"
          alt="SafeGuard product diagram"
          width={792}
          height={612}
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
