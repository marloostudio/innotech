"use client"

import { useEffect, useState } from "react"

export interface OnThisPageSection {
  id: string
  label: string
}

interface OnThisPageNavProps {
  sections: OnThisPageSection[]
}

export function OnThisPageNav({ sections }: OnThisPageNavProps) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null)

  useEffect(() => {
    const sectionIds = sections.map((s) => s.id)

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = new Set(
          entries.filter((e) => e.isIntersecting).map((e) => (e.target as HTMLElement).id)
        )
        setActiveId((prev) => {
          const next = sectionIds.find((id) => intersecting.has(id))
          return next ?? prev
        })
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <aside
      className="hidden lg:block shrink-0 w-52 pt-8"
      aria-label="On this page"
    >
      <nav
        className="sticky top-24 space-y-1.5"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--it-light-text-primary)" }}
        >
          On this page
        </p>
        {sections.map(({ id, label }) => {
          const isActive = activeId === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
              style={{
                color: isActive ? "var(--it-light-text-primary)" : "var(--it-light-text-muted)",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
