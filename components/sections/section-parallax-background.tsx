"use client"

import { cn } from "@/lib/utils"

type BackgroundAnchor = "left" | "right" | "center"
type BackgroundBlend = "none" | "abstract"

interface SectionParallaxBackgroundProps {
  src: string
  alt?: string
  /** Image layer opacity (0–1) */
  imageOpacity?: number
  /** Flat wash opacity (0–1) — used only when overlayVariant is "flat" */
  overlayOpacity?: number
  /** Keeps the sketch on one side so foreground content stays readable */
  anchor?: BackgroundAnchor
  overlayVariant?: "flat" | "content-safe"
  /** Soft-light blend for wireframe assets on light sections */
  blend?: BackgroundBlend
}

const anchorImageClass: Record<BackgroundAnchor, string> = {
  left: "object-contain object-left-bottom",
  right: "object-contain object-right-bottom",
  center: "object-contain object-center",
}

const anchorPanelClass: Record<BackgroundAnchor, string> = {
  left: "left-0 w-[62%] md:w-[54%]",
  right: "right-0 w-[62%] md:w-[54%]",
  center: "inset-x-0 mx-auto w-full max-w-4xl",
}

const contentSafeOverlay: Record<BackgroundAnchor, string> = {
  right:
    "linear-gradient(to right, var(--it-light-bg) 0%, var(--it-light-bg) 46%, color-mix(in oklab, var(--it-light-bg) 96%, transparent) 68%, color-mix(in oklab, var(--it-light-bg) 72%, transparent) 100%)",
  left:
    "linear-gradient(to left, var(--it-light-bg) 0%, var(--it-light-bg) 46%, color-mix(in oklab, var(--it-light-bg) 96%, transparent) 68%, color-mix(in oklab, var(--it-light-bg) 72%, transparent) 100%)",
  center:
    "radial-gradient(ellipse 90% 80% at 50% 50%, color-mix(in oklab, var(--it-light-bg) 86%, transparent) 0%, var(--it-light-bg) 100%)",
}

const abstractContentOverlay =
  "linear-gradient(to right, var(--it-light-bg) 0%, var(--it-light-bg) 42%, color-mix(in oklab, var(--it-light-bg) 72%, transparent) 62%, color-mix(in oklab, var(--it-light-bg) 28%, transparent) 100%)"

export function SectionParallaxBackground({
  src,
  alt = "",
  imageOpacity = 0.16,
  overlayOpacity = 0.4,
  anchor = "right",
  overlayVariant = "content-safe",
  blend = "none",
}: SectionParallaxBackgroundProps) {
  const isAbstract = blend === "abstract"

  const imageStyle: React.CSSProperties = isAbstract
    ? {
        opacity: imageOpacity,
        mixBlendMode: "multiply",
        filter: "invert(1) grayscale(1) contrast(0.88)",
      }
    : { opacity: imageOpacity }

  return (
    <div className="absolute inset-0 h-full w-full">
      <div
        className={cn(
          isAbstract
            ? "absolute -inset-[8%] opacity-100"
            : cn("absolute bottom-0 top-[6%]", anchorPanelClass[anchor]),
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full",
            isAbstract
              ? "object-cover object-[85%_55%]"
              : anchorImageClass[anchor],
          )}
          style={imageStyle}
        />
      </div>

      {overlayVariant === "content-safe" ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: isAbstract ? abstractContentOverlay : contentSafeOverlay[anchor],
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, var(--it-light-bg) 0%, transparent 14%, transparent 86%, var(--it-light-bg) 100%)",
            }}
          />
          {isAbstract ? (
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 78% 62%, color-mix(in oklab, var(--it-light-safeguard) 10%, transparent), transparent 70%)",
              }}
            />
          ) : (
            anchor !== "center" && (
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 w-[45%] opacity-50",
                  anchor === "right" ? "right-0" : "left-0",
                )}
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklab, var(--it-light-safeguard) 8%, transparent), transparent 65%)",
                }}
              />
            )
          )}
        </>
      ) : (
        <div
          className="absolute inset-0 bg-it-light-bg"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  )
}
