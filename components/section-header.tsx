import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  /** "dark" = light text (default, for dark sections); "light" = dark text (for light cards/panels) */
  theme?: "dark" | "light"
  title: string
  description?: string
  /** Small label above the title; alias for badge */
  label?: string
  badge?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  theme = "dark",
  title,
  description,
  label,
  badge,
  centered = true,
  className,
}: SectionHeaderProps) {
  const displayBadge = badge ?? label
  const isDark = theme === "dark"
  return (
    <div
      className={cn(
        "space-y-4 mb-12",
        centered && "text-center",
        className
      )}
    >
      {displayBadge && (
        <div className={cn("inline-block", centered && "mx-auto")}>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 it-ribbon-badge font-medium",
              isDark
                ? "bg-it-blue-subtle text-it-blue"
                : "bg-(--it-light-blue-subtle) text-it-light-blue"
            )}
          >
            {displayBadge}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance",
          isDark ? "it-heading-bright" : "text-it-light-text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl text-pretty",
            centered && "mx-auto",
            isDark ? "text-it-text-muted" : "text-it-light-text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
