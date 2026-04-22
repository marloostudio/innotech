"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ChevronDown, ExternalLink, Mail, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  productsMegaColumns,
  companyDropdownItems,
  type NavMegaKey,
  type SimpleDropdownItem,
} from "@/lib/nav-mega"
import { SiteLogo } from "@/components/site/site-logo"

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

// ── Dropdown nav keys (plain links use key: null) ──
const SIMPLE_KEYS: NavMegaKey[] = ["company"]

const navItems: {
  key: NavMegaKey
  label: string
  href: string
  subtitle?: string
  descriptor?: string
}[] = [
  ...productsMegaColumns.map((p) => ({
    key: null as NavMegaKey,
    label: p.name,
    href: p.href,
    descriptor: p.tagline,
  })),
  { key: "company", label: "Company", href: "/company", subtitle: "About InnoTech" },
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

  const isActive  = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const closeMenus = () => setOpenMenu(null)
  const toggleMenu = (key: NavMegaKey) => setOpenMenu((prev) => (prev === key ? null : key))

  // Delay before closing so the cursor has time to move from nav into the dropdown.
  // We use hover enter/leave tracking instead of global bounding-rect hit-testing, which can be flaky during transitions.
  const DROPDOWN_CLOSE_DELAY_MS = 500
  const hoverNavRef = React.useRef(false)
  const hoverPanelRef = React.useRef(false)

  const cancelScheduledClose = React.useCallback(() => {
    if (!closeTimeoutRef.current) return
    clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = null
  }, [])

  const scheduleClose = React.useCallback(() => {
    cancelScheduledClose()
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null
      if (!hoverNavRef.current && !hoverPanelRef.current) setOpenMenu(null)
    }, DROPDOWN_CLOSE_DELAY_MS)
  }, [cancelScheduledClose])

  const handleNavMouseEnter = React.useCallback(() => {
    hoverNavRef.current = true
    cancelScheduledClose()
  }, [cancelScheduledClose])

  const handleNavMouseLeave = React.useCallback(() => {
    hoverNavRef.current = false
    scheduleClose()
  }, [scheduleClose])

  const handlePanelMouseEnter = React.useCallback(() => {
    hoverPanelRef.current = true
    cancelScheduledClose()
  }, [cancelScheduledClose])

  const handlePanelMouseLeave = React.useCallback(() => {
    hoverPanelRef.current = false
    scheduleClose()
  }, [scheduleClose])

  React.useEffect(() => {
    return () => cancelScheduledClose()
  }, [cancelScheduledClose])

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
          className={cn(
            "max-w-screen-2xl mx-auto px-8 h-full",
            "flex items-center justify-between",
            "lg:grid lg:grid-cols-[minmax(11rem,auto)_minmax(0,1fr)_auto] lg:items-center lg:justify-normal lg:gap-x-6 xl:gap-x-8",
          )}
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >

          {/* ── Logo (fixed-width slot so centered nav doesn’t shift when logo height changes on scroll) ── */}
          <div className="flex shrink-0 items-center justify-start min-w-[11rem] sm:min-w-[12rem] lg:min-w-[13rem]">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => { closeMenus(); setMobileOpen(false) }}
              aria-label="InnoTech Systems Home"
            >
              <SiteLogo heightClass={scrolled ? "h-10" : "h-12"} priority />
            </Link>
          </div>

          {/* ── Desktop nav (centered in middle grid column when bar is short) ── */}
          <nav
            className="hidden lg:flex lg:w-full lg:max-w-6xl xl:max-w-7xl lg:justify-self-center lg:mx-auto items-center justify-center gap-0.5 xl:gap-1 min-h-0 min-w-0"
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
                        "relative flex flex-col items-center px-3 rounded transition-colors duration-150",
                        scrolled ? "py-1.5" : "py-2",
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
                      <div
                        className={cn(
                          "flex flex-col items-center justify-center",
                          scrolled ? "h-10" : "h-11",
                        )}
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
                        {item.subtitle ? (
                          <span
                            className={cn(
                              "block text-[10px] uppercase tracking-wider mt-0.5 transition-all duration-150",
                              active || isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                            )}
                            style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                          >
                            {item.subtitle}
                          </span>
                        ) : null}
                      </div>
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
                        "relative flex flex-col items-center px-2 xl:px-3 rounded transition-colors duration-150",
                        scrolled ? "py-1.5" : "py-2",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
                      )}
                      style={{
                        color: active ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = NAV_LINK_HOVER
                        const desc = e.currentTarget.querySelector("[data-nav-descriptor]") as HTMLElement | null
                        if (desc) desc.style.color = "var(--it-text-dim)"
                      }}
                      onMouseLeave={(e) => {
                        if (!active) e.currentTarget.style.color = NAV_LINK_COLOR
                        const desc = e.currentTarget.querySelector("[data-nav-descriptor]") as HTMLElement | null
                        if (desc) desc.style.color = "var(--it-text-dim)"
                      }}
                    >
                      <div
                        className={cn(
                          "flex flex-col items-center justify-center text-center",
                          scrolled ? "min-h-10" : "min-h-11",
                        )}
                      >
                        <span style={{ fontSize: "0.9375rem" }}>{item.label}</span>
                        {item.descriptor ? (
                          <span
                            data-nav-descriptor
                            className="block text-[9px] xl:text-[10px] leading-tight mt-0.5 max-w-[10rem] xl:max-w-[11rem] line-clamp-2"
                            style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                          >
                            {item.descriptor}
                          </span>
                        ) : null}
                      </div>
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
                    {isOpen && simpleDrop && item.key === "company" && (
                      <SimpleDropdown
                        ref={dropdownPanelRef}
                        items={companyDropdownItems}
                        width={320}
                        align="left"
                        onClose={closeMenus}
                        onHoverStart={handlePanelMouseEnter}
                        onHoverEnd={handlePanelMouseLeave}
                      />
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* ── Right buttons ─────────────────────────────────── */}
          <div className="hidden lg:flex items-center justify-self-end gap-2 shrink-0">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-3 rounded border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]",
                scrolled ? "py-1.5" : "py-2",
              )}
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
                className={cn(
                  "inline-flex items-center justify-center gap-2 font-medium px-5 rounded-md",
                  scrolled ? "py-2" : "py-2.5",
                )}
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
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Small dropdowns — now rendered inside each nav item's
// div.relative so they always anchor directly below the trigger
// ─────────────────────────────────────────────────────────────

const SimpleDropdown = React.forwardRef<HTMLDivElement, {
  items: SimpleDropdownItem[]
  width: number
  align?: "left" | "right"
  onClose: () => void
  onHoverStart: () => void
  onHoverEnd: () => void
}>(function SimpleDropdown({ items, width, align = "left", onClose, onHoverStart, onHoverEnd }, ref) {
  return (
    <motion.div
      ref={ref}
      className={cn("absolute top-full z-50 mt-1 rounded-none border border-[var(--it-border)] py-2 backdrop-blur-sm", align === "right" ? "right-0" : "left-0")}
      style={{ backgroundColor: "#0d1526", width, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
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

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = React.useState<NavMegaKey>(null)

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
              <Link href="/" onClick={onClose} className="flex items-center shrink-0">
                <SiteLogo heightClass="h-10" />
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
              {productsMegaColumns.map((col) => (
                <Link
                  key={col.id}
                  href={col.href}
                  onClick={onClose}
                  className="block py-3 border-b"
                  style={{ borderColor: "var(--it-border)" }}
                >
                  <span className="block text-lg font-medium" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                    {col.name}
                  </span>
                  <span className="block text-sm mt-1" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                    {col.tagline}
                  </span>
                </Link>
              ))}
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
