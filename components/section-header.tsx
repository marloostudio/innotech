import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  /** Small label above the title; alias for badge */
  label?: string
  badge?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ 
  title, 
  description, 
  label,
  badge,
  centered = true,
  className 
}: SectionHeaderProps) {
  const displayBadge = badge ?? label
  return (
    <div className={cn(
      "space-y-4 mb-12",
      centered && "text-center",
      className
    )}>
      {displayBadge && (
        <div className={cn("inline-block", centered && "mx-auto")}>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {displayBadge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
