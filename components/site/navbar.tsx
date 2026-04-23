"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Mail, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { productsMegaColumns } from "@/lib/nav-mega"
import { SiteLogo } from "@/components/site/site-logo"

// ── Colour tokens ─────────────────────────────────────────
const NAV_LINK_COLOR  = "rgba(255,255,255,0.85)"      // neutral white at 85% — more legible on dark
const NAV_LINK_HOVER  = "rgba(255,255,255,1)"
const NAV_UNDERLINE   = "var(--it-blue)"
const BAR_BG_IDLE     = "rgba(7,12,24,0.35)"          // always-on faint dark layer so text is readable over any page bg
const BAR_BG_SCROLLED = "rgba(7,12,24,0.94)"
const BAR_BORDER      = "var(--it-border)"
const CTA_BG          = "var(--it-blue)"
const CTA_HOVER       = "var(--it-blue-hover)"
const CTA_TEXT        = "var(--it-bg)"

const navItems: { label: string; href: string; descriptor?: string }[] = [
  ...productsMegaColumns.map((p) => ({
    label: p.name,
    href: p.href,
    descriptor: p.tagline,
  })),
  { label: "Company", href: "/company", descriptor: "Story, team & leadership" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20))

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

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
          className={cn(
            "max-w-screen-2xl mx-auto px-8 h-full",
            "flex items-center justify-between",
            "lg:grid lg:grid-cols-[minmax(11rem,auto)_minmax(0,1fr)_auto] lg:items-center lg:justify-normal lg:gap-x-6 xl:gap-x-8",
          )}
        >

          {/* ── Logo (fixed-width slot so centered nav doesn’t shift when logo height changes on scroll) ── */}
          <div className="flex shrink-0 items-center justify-start min-w-[11rem] sm:min-w-[12rem] lg:min-w-[13rem]">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMobileOpen(false)}
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
              const active = isActive(item.href)

              return (
                <div key={item.href} className="relative flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative flex flex-col items-center px-2 xl:px-3 rounded transition-colors duration-150",
                      scrolled ? "py-1.5" : "py-2",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]",
                    )}
                    style={{
                      color: active ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = NAV_LINK_HOVER
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.color = NAV_LINK_COLOR
                    }}
                  >
                    <div
                      className={cn(
                        "flex flex-col items-center justify-center text-center",
                        scrolled ? "min-h-10" : "min-h-11",
                      )}
                    >
                      <span className="inline-flex items-center justify-center" style={{ fontSize: "0.9375rem" }}>
                        {item.label}
                      </span>
                      {item.descriptor ? (
                        <span
                          data-nav-descriptor
                          className={cn(
                            "block text-[9px] xl:text-[10px] leading-none whitespace-nowrap max-w-[14rem] xl:max-w-[17rem] truncate text-center transition-all duration-150 ease-out",
                            "max-h-0 opacity-0 overflow-hidden -translate-y-1",
                            "group-hover:max-h-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-0.5",
                            "group-focus-visible:max-h-4 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:mt-0.5",
                          )}
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

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
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
              <Link
                href="/company"
                onClick={onClose}
                className="block py-3 border-b"
                style={{ borderColor: "var(--it-border)" }}
              >
                <span className="block text-lg font-medium" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                  Company
                </span>
                <span className="block text-sm mt-1" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                  Story, team &amp; leadership
                </span>
              </Link>
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
