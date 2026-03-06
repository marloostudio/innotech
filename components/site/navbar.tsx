"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ChevronDown, ExternalLink, Mail, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  productsMegaColumns,
  solutionsMegaCategories,
  industriesMegaItems,
  resourcesDropdownItems,
  companyDropdownItems,
  type NavMegaKey,
} from "@/lib/nav-mega"

// ── Colour tokens ─────────────────────────────────────────
const NAV_LINK_COLOR  = "rgba(255,255,255,0.85)"      // neutral white at 85% — more legible on dark
const NAV_LINK_HOVER  = "rgba(255,255,255,1)"
const NAV_UNDERLINE   = "var(--it-blue)"
const BAR_BG_IDLE     = "rgba(7,12,24,0.35)"          // always-on faint dark layer so text is readable over any page bg
const BAR_BG_SCROLLED = "rgba(7,12,24,0.94)"
const BAR_BORDER      = "var(--it-border)"
const PANEL_BG        = "var(--it-surface)"
const CTA_BG          = "var(--it-blue)"
const CTA_HOVER       = "var(--it-blue-hover)"
const CTA_TEXT        = "var(--it-bg)"

// ── "simple dropdown" nav items (these anchor to their own trigger button) ──
const SIMPLE_KEYS: NavMegaKey[] = ["resources", "company"]

const navItems: { key: NavMegaKey; label: string; href: string; subtitle?: string }[] = [
  { key: "products",   label: "Products",   href: "/products",   subtitle: "What we build" },
  { key: "solutions",  label: "Solutions",  href: "/solutions",  subtitle: "Problems we solve" },
  { key: "industries", label: "Industries",  href: "/industries", subtitle: "Where we deploy" },
  { key: "resources",  label: "Resources",   href: "/resources",  subtitle: "Insights and guides" },
  { key: "company",    label: "Company",     href: "/company",     subtitle: "About InnoTech" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled,    setScrolled]    = React.useState(false)
  const [openMenu,    setOpenMenu]    = React.useState<NavMegaKey>(null)
  const [mobileOpen,  setMobileOpen]  = React.useState(false)
  const navRegionRef = React.useRef<HTMLDivElement | null>(null)
  const dropdownPanelRef = React.useRef<HTMLDivElement | null>(null)
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20))

  const hasMenu   = (key: NavMegaKey) => key !== null
  const isSimple  = (key: NavMegaKey) => SIMPLE_KEYS.includes(key as string as NavMegaKey)
  const isMega    = (key: NavMegaKey) => hasMenu(key) && !isSimple(key)

  const isActive  = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const closeMenus = () => setOpenMenu(null)
  const toggleMenu = (key: NavMegaKey) => setOpenMenu((prev) => (prev === key ? null : key))

  // Delay before closing so the cursor has time to move into the dropdown (design: dropdowns 200ms; we use 300ms for comfort)
  const DROPDOWN_CLOSE_DELAY_MS = 300

  React.useEffect(() => {
    if (!openMenu) return

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX
      const y = event.clientY
      const buffer = 48

      const withinRect = (rect: DOMRect) =>
        x >= rect.left - buffer && x <= rect.right + buffer &&
        y >= rect.top - buffer && y <= rect.bottom + buffer

      const inNav = navRegionRef.current && withinRect(navRegionRef.current.getBoundingClientRect())
      const inDropdown = dropdownPanelRef.current && withinRect(dropdownPanelRef.current.getBoundingClientRect())

      if (inNav || inDropdown) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
        return
      }

      if (closeTimeoutRef.current) return
      closeTimeoutRef.current = setTimeout(() => {
        closeTimeoutRef.current = null
        setOpenMenu(null)
      }, DROPDOWN_CLOSE_DELAY_MS)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
    }
  }, [openMenu])

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full"
        initial={false}
        animate={{
          height:             scrolled ? 64 : 72,
          backgroundColor:    scrolled ? BAR_BG_SCROLLED : BAR_BG_IDLE,
          borderBottomWidth:  scrolled ? 1 : 0,
          borderBottomColor:  BAR_BORDER,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          backdropFilter:       "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          ref={navRegionRef}
          className="max-w-screen-2xl mx-auto px-8 h-full flex items-center justify-between"
        >

          {/* ── Logo ──────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => { closeMenus(); setMobileOpen(false) }}
            aria-label="InnoTech Systems Home"
          >
            <span
              className="font-bold tracking-wide uppercase"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: scrolled ? "1rem" : "1.125rem",
                color: "var(--it-text-primary)",
              }}
            >
              Inno
            </span>
            <span
              className="font-bold tracking-wide uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: scrolled ? "1rem" : "1.125rem",
                color: CTA_BG,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CTA_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = CTA_BG)}
            >
              Tech
            </span>
            <span
              className="w-px self-center"
              style={{ height: 18, backgroundColor: BAR_BORDER }}
              aria-hidden
            />
            <span
              className="text-xs uppercase tracking-wider font-light text-slate-400"
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            >
              Systems
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 flex-1 max-w-3xl mx-8"
            role="navigation"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const active       = isActive(item.href)
              const isOpen       = openMenu === item.key
              const hasDropdown  = hasMenu(item.key)
              const simpleDrop   = isSimple(item.key)

              return (
                <div key={item.key ?? item.href} className="relative flex items-center">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.key)}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      className={cn(
                        "flex flex-col items-center gap-0 py-2 px-3 rounded transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
                      )}
                      style={{
                        color: active || isOpen ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-0.5" style={{ fontSize: "0.9375rem" }}>
                        {item.label}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-0.5"
                        >
                          <ChevronDown size={14} strokeWidth={1.5} />
                        </motion.span>
                      </span>
                      {item.subtitle && isOpen && (
                        <span
                          className="block text-[10px] uppercase tracking-wider mt-0.5"
                          style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                        >
                          {item.subtitle}
                        </span>
                      )}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: NAV_UNDERLINE }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className={cn(
                        "relative flex items-center py-2 px-3 rounded transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
                      )}
                      style={{
                        fontSize: "0.9375rem",
                        color: active ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = NAV_LINK_HOVER)}
                      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = NAV_LINK_COLOR }}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: NAV_UNDERLINE }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}

                  {/* ── Simple dropdowns anchored to their own button ── */}
                  <AnimatePresence>
                    {isOpen && simpleDrop && item.key === "resources" && (
                      <SimpleDropdown ref={dropdownPanelRef} items={resourcesDropdownItems} width={320} align="left" onClose={closeMenus} />
                    )}
                    {isOpen && simpleDrop && item.key === "company" && (
                      <SimpleDropdown ref={dropdownPanelRef} items={companyDropdownItems} width={320} align="left" onClose={closeMenus} />
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* ── Right buttons ─────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-3 py-2 rounded border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
              style={{
                fontSize: "0.9375rem",
                color: NAV_LINK_COLOR,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontWeight: 500,
                borderColor: BAR_BORDER,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = NAV_LINK_HOVER
                e.currentTarget.style.borderColor = "var(--it-blue)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = NAV_LINK_COLOR
                e.currentTarget.style.borderColor = BAR_BORDER
              }}
            >
              <Mail size={18} strokeWidth={1.5} aria-hidden />
              Contact
            </Link>
            <Link href="/demo">
              <motion.span
                className="inline-flex items-center justify-center gap-2 font-medium px-5 py-2.5 rounded-md"
                style={{
                  fontSize: "0.875rem",
                  backgroundColor: CTA_BG,
                  color: CTA_TEXT,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
                whileHover={{
                  backgroundColor: CTA_HOVER,
                  scale: 1.02,
                  boxShadow: "0 0 16px var(--it-blue-glow)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar size={18} strokeWidth={1.5} aria-hidden />
                Book a Demo
              </motion.span>
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            type="button"
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
            style={{ color: NAV_LINK_COLOR }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── Full-width mega menus (Products / Solutions / Industries) ── */}
        <AnimatePresence>
          {openMenu === "products"   && isMega("products")   && <ProductsMegaMenu   ref={dropdownPanelRef} key="products"   onClose={closeMenus} />}
          {openMenu === "solutions"  && isMega("solutions")  && <SolutionsMegaMenu  ref={dropdownPanelRef} key="solutions"  onClose={closeMenus} />}
          {openMenu === "industries" && isMega("industries") && <IndustriesMegaMenu ref={dropdownPanelRef} key="industries" onClose={closeMenus} />}
        </AnimatePresence>
      </motion.header>

      {/* ── Dim overlay (reduced blur + opacity) ──────────────── */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed inset-0 z-40 lg:block hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.18)", backdropFilter: "blur(2px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenus}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Mega menu panels (full-width, anchored to header bottom)
// ─────────────────────────────────────────────────────────────

const ProductsMegaMenu = React.forwardRef<HTMLDivElement, { onClose: () => void }>(function ProductsMegaMenu({ onClose }, ref) {
  return (
    <motion.div
      ref={ref}
      className="absolute left-0 right-0 top-full z-50 border-t-2"
      style={{ backgroundColor: PANEL_BG, borderTopColor: CTA_BG }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="menu"
    >
      <div className="max-w-screen-2xl mx-auto px-8 py-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3
              className="text-lg font-semibold uppercase tracking-widest mb-1"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", color: "var(--it-text-secondary)" }}
            >
              Products
            </h3>
            <p className="text-sm" style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              Browse our three core product lines
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 border-t border-[var(--it-border)] pt-6">
          {productsMegaColumns.map((col, i) => (
            <motion.div
              key={col.id}
              className="min-w-[220px] px-6 border-r border-[var(--it-border)] last:border-r-0"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.2 }}
            >
              <div className="pl-3 mb-4 border-l-[3px]" style={{ borderLeftColor: col.accentColor }}>
                <h4 className="font-semibold uppercase tracking-widest" style={{ fontSize: "14px", fontFamily: "var(--font-inter), 'Inter', sans-serif", color: "var(--it-text-secondary)" }}>
                  {col.name}
                </h4>
                <p className="mt-0.5" style={{ fontSize: "12.5px", color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                  {col.tagline}
                </p>
              </div>
              <ul className="space-y-1.5 mb-4">
                {col.features.map((f) => (
                  <li key={f}>
                    <span className="transition-colors" style={{ fontSize: "12.5px", color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                      — {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={col.href}
                onClick={onClose}
                className="font-mono uppercase tracking-wider inline-block rounded px-2 py-1 -mx-2 transition-[background-color,opacity] duration-150 ease-out no-underline"
                style={{ fontSize: "14px", color: col.accentColor, fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"; e.currentTarget.style.opacity = "1" }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.opacity = "0.9" }}
              >
                {col.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[var(--it-border)] pt-3 mt-4 text-center">
          <Link href="/products" onClick={onClose} className="text-sm rounded px-2 py-1 inline-block transition-[background-color,color] duration-150 ease-out no-underline" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"; e.currentTarget.style.color = "var(--it-text-primary)" }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--it-text-muted)" }}>
            See all products
          </Link>
        </div>
      </div>
    </motion.div>
  )
})

const SolutionsMegaMenu = React.forwardRef<HTMLDivElement, { onClose: () => void }>(function SolutionsMegaMenu({ onClose }, ref) {
  return (
    <motion.div
      ref={ref}
      className="absolute left-0 right-0 top-full z-50 border-t-2"
      style={{ backgroundColor: PANEL_BG, borderTopColor: "var(--it-solutions)" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="menu"
    >
      <div className="max-w-screen-2xl mx-auto px-8 py-6">
        <h3
          className="text-lg font-semibold uppercase tracking-widest mb-1"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", color: "var(--it-text-secondary)" }}
        >
          Solutions
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          Browse by the problem you&apos;re solving
        </p>
        <div className="grid grid-cols-3 gap-0 border-t border-[var(--it-border)] pt-6">
          {solutionsMegaCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="px-6 border-r border-[var(--it-border)] last:border-r-0"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.2 }}
            >
              <div className="pl-3 mb-4 border-l-[3px]" style={{ borderLeftColor: cat.accentColor }}>
                <h4 className="font-semibold uppercase tracking-widest" style={{ fontSize: "14px", fontFamily: "var(--font-inter), 'Inter', sans-serif", color: "var(--it-text-secondary)" }}>
                  {cat.name}
                </h4>
              </div>
              <ul className="space-y-2">
                {cat.solutions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={onClose}
                      className="block py-2 px-3 -mx-3 rounded border border-transparent no-underline transition-[background-color,border-color,color] duration-150 ease-out"
                      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", backgroundColor: "transparent" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"
                        e.currentTarget.style.borderColor = "var(--it-solutions-border)"
                        const desc = e.currentTarget.querySelector("[data-solution-desc]") as HTMLElement
                        if (desc) desc.style.color = "var(--it-text-secondary)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.borderColor = "transparent"
                        const desc = e.currentTarget.querySelector("[data-solution-desc]") as HTMLElement
                        if (desc) desc.style.color = "var(--it-text-muted)"
                      }}
                    >
                      <span className="block" style={{ fontSize: "14px", color: "var(--it-text-primary)" }}>{s.name}</span>
                      <span data-solution-desc style={{ fontSize: "12.5px", color: "var(--it-text-muted)" }}>{s.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[var(--it-border)] pt-3 mt-4 text-right">
          <Link href="/contact" onClick={onClose} className="text-sm rounded px-2 py-1 inline-block transition-[background-color,color] duration-150 ease-out no-underline" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"; e.currentTarget.style.color = "var(--it-text-primary)" }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--it-text-muted)" }}>
            Not sure which solution fits? → Talk to an engineer
          </Link>
        </div>
      </div>
    </motion.div>
  )
})

const INDUSTRIES_AMBER = "var(--it-industries)"

const IndustriesMegaMenu = React.forwardRef<HTMLDivElement, { onClose: () => void }>(function IndustriesMegaMenu({ onClose }, ref) {
  const leftColumn = industriesMegaItems.filter((_, i) => i % 2 === 0)
  const rightColumn = industriesMegaItems.filter((_, i) => i % 2 === 1)
  const renderIndustryCard = (item: (typeof industriesMegaItems)[0]) => (
    <div
      key={item.href + item.name}
      className={cn(
        "border-l-[3px] pl-3 py-2 border-t border-[var(--it-border)] first:border-t-0",
        item.comingSoon && "opacity-70"
      )}
      style={{ borderLeftColor: item.comingSoon ? "var(--it-border)" : INDUSTRIES_AMBER }}
    >
      {item.comingSoon ? (
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium" style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              {item.name}
            </span>
            <span className="text-[10px] rounded px-1.5 py-0.5" style={{ background: "rgba(255,255,255,0.06)", color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              Coming soon
            </span>
          </div>
          {item.descriptor && (
            <span className="block text-xs" style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              {item.descriptor}
            </span>
          )}
        </div>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="block group rounded-md -mx-1 px-1 py-1 transition-[background-color,color] duration-150 ease-out no-underline"
          style={{ color: "var(--it-text-primary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"
            const desc = e.currentTarget.querySelector("[data-industry-descriptor]") as HTMLElement
            if (desc) desc.style.color = "var(--it-text-secondary)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            const desc = e.currentTarget.querySelector("[data-industry-descriptor]") as HTMLElement
            if (desc) desc.style.color = "var(--it-text-muted)"
          }}
        >
          <span className="text-sm font-medium flex items-center gap-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: INDUSTRIES_AMBER }} aria-hidden />
            {item.name}
          </span>
          {item.descriptor && (
            <span data-industry-descriptor className="block text-xs mt-0.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              {item.descriptor}
            </span>
          )}
        </Link>
      )}
    </div>
  )
  return (
    <motion.div
      ref={ref}
      className="absolute left-0 right-0 top-full z-50 border-t-2"
      style={{ backgroundColor: PANEL_BG, borderTopColor: INDUSTRIES_AMBER }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="menu"
    >
      <div className="max-w-screen-2xl mx-auto px-8 py-6">
        <h3 className="text-lg font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif", color: "var(--it-text-secondary)" }}>
          Industries
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          Configured for environments where failure is not an option
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-[var(--it-border)] pt-6">
          <div className="min-w-0">
            {leftColumn.map(renderIndustryCard)}
          </div>
          <div className="min-w-0">
            {rightColumn.map(renderIndustryCard)}
          </div>
        </div>
        <div className="border-t border-[var(--it-border)] pt-3 mt-4 text-center">
          <Link href="/industries" onClick={onClose} className="text-sm rounded px-2 py-1 inline-block transition-[background-color,color] duration-150 ease-out no-underline" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"; e.currentTarget.style.color = "var(--it-text-primary)" }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--it-text-muted)" }}>
            See all industries
          </Link>
        </div>
      </div>
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// Small dropdowns — now rendered inside each nav item's
// div.relative so they always anchor directly below the trigger
// ─────────────────────────────────────────────────────────────

const SimpleDropdown = React.forwardRef<HTMLDivElement, {
  items: typeof resourcesDropdownItems
  width: number
  align?: "left" | "right"
  onClose: () => void
}>(function SimpleDropdown({ items, width, align = "left", onClose }, ref) {
  return (
    <motion.div
      ref={ref}
      className={cn("absolute top-full z-50 mt-1 rounded-lg border py-2", align === "right" ? "right-0" : "left-0")}
      style={{ backgroundColor: PANEL_BG, borderColor: BAR_BORDER, width, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      role="menu"
    >
      {items.map((item) => (
        <React.Fragment key={item.href + item.title}>
          {item.dividerAbove && <div className="border-t my-2" style={{ borderColor: BAR_BORDER }} />}
          <Link
            href={item.href}
            onClick={onClose}
            className="flex flex-col items-start gap-0.5 px-4 py-2.5 rounded mx-1 no-underline transition-[background-color,color] duration-150 ease-out"
            style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--it-surface-raised)"
              e.currentTarget.style.color = "var(--it-text-primary)"
              const desc = e.currentTarget.querySelector("[data-dropdown-descriptor]") as HTMLElement
              if (desc) desc.style.color = "var(--it-text-secondary)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "var(--it-text-secondary)"
              const desc = e.currentTarget.querySelector("[data-dropdown-descriptor]") as HTMLElement
              if (desc) desc.style.color = "var(--it-text-muted)"
            }}
          >
            <span className="flex items-center justify-between w-full">
              <span className="text-sm font-medium">{item.title}</span>
              <span className="flex items-center gap-1.5 shrink-0 ml-2">
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] rounded px-1.5 py-0.5",
                      item.badge === "Coming soon"
                        ? "border"
                        : "border"
                    )}
                    style={
                      item.badge === "Coming soon"
                        ? { backgroundColor: "rgba(255,255,255,0.06)", color: "var(--it-text-dim)", borderColor: BAR_BORDER }
                        : { backgroundColor: "rgba(0, 212, 170, 0.125)", color: "var(--it-safeguard)", borderColor: "rgba(0, 212, 170, 0.25)" }
                    }
                  >
                    {item.badge}
                  </span>
                )}
                {item.external && <ExternalLink size={12} strokeWidth={1.5} className="opacity-60" />}
              </span>
            </span>
            {item.descriptor && (
              <span data-dropdown-descriptor className="text-xs" style={{ color: "var(--it-text-muted)" }}>{item.descriptor}</span>
            )}
          </Link>
        </React.Fragment>
      ))}
    </motion.div>
  )
})

// ─────────────────────────────────────────────────────────────
// Mobile drawer (unchanged structure, colour tokens updated)
// ─────────────────────────────────────────────────────────────

function MobileDrawer({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = React.useState<NavMegaKey>(null)
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-60 bg-black/50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose} aria-hidden
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-60 w-full max-w-md shadow-xl flex flex-col"
            style={{ background: "var(--it-bg)" }}
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog" aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--it-border)" }}>
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <span className="font-bold tracking-wide uppercase" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>Inno</span>
                <span className="font-bold tracking-wide uppercase" style={{ color: CTA_BG, fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>Tech</span>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Systems</span>
              </Link>
              <button
                type="button" onClick={onClose}
                className="p-2 rounded focus-visible:ring-2 focus-visible:ring-it-blue"
                style={{ color: "var(--it-text-muted)" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
              {/* Products */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "products" ? null : "products")} className="w-full text-left text-lg py-3 flex items-center justify-between" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Products
                  <motion.span animate={{ rotate: expanded === "products" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "products" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {productsMegaColumns.map((col) => (
                          <Link key={col.id} href={col.href} onClick={onClose} className="block text-sm py-1.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{col.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Solutions */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "solutions" ? null : "solutions")} className="w-full text-left text-lg py-3 flex items-center justify-between" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Solutions
                  <motion.span animate={{ rotate: expanded === "solutions" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "solutions" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {solutionsMegaCategories.flatMap((c) => c.solutions).slice(0, 6).map((s) => (
                          <Link key={s.href} href={s.href} onClick={onClose} className="block text-sm py-1.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{s.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Industries */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "industries" ? null : "industries")} className="w-full text-left text-lg py-3 flex items-center justify-between" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Industries
                  <motion.span animate={{ rotate: expanded === "industries" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "industries" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {industriesMegaItems.filter((i) => !i.comingSoon).map((i) => (
                          <Link key={i.href + i.name} href={i.href} onClick={onClose} className="block text-sm py-1.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{i.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Resources (includes Case Studies) */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "resources" ? null : "resources")} className="w-full text-left text-lg py-3 flex items-center justify-between" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Resources
                  <motion.span animate={{ rotate: expanded === "resources" ? 180 : 0 }}><ChevronDown size={20} strokeWidth={1.5} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "resources" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {resourcesDropdownItems.map((item) => (
                          <Link key={item.href + item.title} href={item.href} onClick={onClose} className="block text-sm py-1.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{item.title}{item.badge ? ` (${item.badge})` : ""}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Company */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "company" ? null : "company")} className="w-full text-left text-lg py-3 flex items-center justify-between" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Company
                  <motion.span animate={{ rotate: expanded === "company" ? 180 : 0 }}><ChevronDown size={20} strokeWidth={1.5} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "company" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {companyDropdownItems.map((item) => (
                          <Link key={item.href + item.title} href={item.href} onClick={onClose} className="block text-sm py-1.5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{item.title}{item.badge ? ` (${item.badge})` : ""}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
            <div className="p-6 border-t" style={{ borderColor: "var(--it-border)" }}>
              <Link href="/demo" onClick={onClose} className="flex items-center justify-center gap-2 w-full text-center text-base font-semibold py-3 rounded-lg" style={{ backgroundColor: CTA_BG, color: CTA_TEXT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                <Calendar size={20} strokeWidth={1.5} aria-hidden />
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
