import Image from "next/image"

import { cn } from "@/lib/utils"
import { automateShowLogoUrl } from "@/lib/content/exhibition-automate"

export type AutomateShowLogoProps = {
  className?: string
  priority?: boolean
  /** Official PNG is white on transparent; on light UI, wraps in a dark band for contrast */
  variant?: "onDark" | "onLight"
  size?: "sm" | "md" | "lg"
}

const sizeClass: Record<NonNullable<AutomateShowLogoProps["size"]>, string> = {
  sm: "h-7 md:h-8",
  md: "h-9 md:h-11",
  lg: "h-10 md:h-14",
}

export function AutomateShowLogo({
  className,
  priority,
  variant = "onDark",
  size = "md",
}: AutomateShowLogoProps) {
  const img = (
    <Image
      src={automateShowLogoUrl}
      alt="Automate — North America’s leading automation trade show"
      width={420}
      height={118}
      sizes="(max-width: 768px) 240px, 320px"
      className={cn("w-auto max-w-full object-contain object-left", sizeClass[size], className)}
      priority={priority}
    />
  )

  if (variant === "onLight") {
    return (
      <div
        className="inline-flex max-w-full rounded-lg border border-it-light-border px-4 py-3 shadow-(--it-light-shadow-sm)"
        style={{ background: "var(--it-bg)" }}
      >
        {img}
      </div>
    )
  }

  return <div className="inline-flex max-w-full">{img}</div>
}
