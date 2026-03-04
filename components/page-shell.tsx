import { cn } from "@/lib/utils"

interface PageShellProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "article" | "main"
  id?: string
}

export function PageShell({
  children,
  className,
  as: Component = "div",
  id,
}: PageShellProps) {
  return (
    <Component id={id} className={cn("w-full max-w-7xl mx-auto px-6 lg:px-8", className)}>
      {children}
    </Component>
  )
}

export type SectionVariant = "white" | "light" | "dark" | "hero" | "accent" | "light-bg" | "light-bg-2"

/* Dark theme only: all section variants use dark surfaces except light-bg (white) and light-bg-2 (off-white) */
const bgMap: Record<SectionVariant, string> = {
  white: "var(--it-section-1)",
  light: "var(--it-section-2)",
  dark: "var(--it-bg)",
  hero: "var(--it-bg)",
  accent: "", /* CTA band: no default; use className (e.g. bg-primary) */
  "light-bg": "var(--it-light-surface)",
  "light-bg-2": "var(--it-light-surface-2)",
}

interface SectionProps {
  variant?: SectionVariant
  /** When true, uses it-section-alt for alternating stripe; otherwise it-section (primary) */
  alt?: boolean
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  style?: React.CSSProperties
}

export function Section({ variant = "white", alt = false, children, className, containerClassName, id, style: styleProp }: SectionProps) {
  const bg = variant ? bgMap[variant] : undefined
  const baseStyle = bg ? { background: bg } : {}
  const style = styleProp ? { ...baseStyle, ...styleProp } : baseStyle
  return (
    <section
      id={id}
      className={cn(alt ? "it-section-alt" : "it-section", "py-20 md:py-28", className)}
      style={Object.keys(style).length ? style : undefined}
    >
      <PageShell className={containerClassName}>
        {children}
      </PageShell>
    </section>
  )
}
