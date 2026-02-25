"use client"

import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const aspectRatioMap = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
} as const

const variantBgMap = {
  default: "var(--it-surface-raised)",
  dark: "var(--it-surface)",
  light: "var(--it-light-surface-2)",
} as const

const variantBorderMap = {
  default: "var(--it-border)",
  dark: "var(--it-border)",
  light: "var(--it-light-border)",
} as const

const variantMutedColorMap = {
  default: "var(--it-text-muted)",
  dark: "var(--it-text-muted)",
  light: "var(--it-light-text-muted)",
} as const

export type ImagePlaceholderAspectRatio = keyof typeof aspectRatioMap

export interface ImagePlaceholderProps {
  src?: string
  alt: string
  aspectRatio: ImagePlaceholderAspectRatio
  label?: string
  className?: string
  variant?: "default" | "dark" | "light"
}

export function ImagePlaceholder({
  src,
  alt,
  aspectRatio,
  label,
  className,
  variant = "default",
}: ImagePlaceholderProps) {
  const aspectClass = aspectRatioMap[aspectRatio]
  const bg = variantBgMap[variant]
  const borderColor = variantBorderMap[variant]
  const mutedColor = variantMutedColorMap[variant]

  if (src) {
    return (
      <div className={cn("relative w-full overflow-hidden rounded-[var(--radius-lg)]", aspectClass, className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed",
        aspectClass,
        className
      )}
      style={{
        background: bg,
        borderColor,
      }}
    >
      <ImageIcon className="mb-2 h-8 w-8 shrink-0 opacity-60" style={{ color: mutedColor }} strokeWidth={1.5} />
      {label && (
        <span
          className="text-center text-[12px]"
          style={{ color: mutedColor, fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
