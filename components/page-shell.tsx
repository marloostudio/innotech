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
    <Component id={id} className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <PageShell className={containerClassName}>
        {children}
      </PageShell>
    </section>
  )
}
