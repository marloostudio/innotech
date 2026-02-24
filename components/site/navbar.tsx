"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ChevronDown, Lock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  productsMegaColumns,
  solutionsMegaCategories,
  industriesMegaItems,
  industriesMegaFeatured,
  resourcesDropdownItems,
  companyDropdownItems,
  type NavMegaKey,
} from "@/lib/nav-mega"

const NAV_LINK_COLOR = "var(--it-text-muted)"
const NAV_LINK_HOVER = "var(--it-text-primary)"
const NAV_UNDERLINE = "var(--it-blue)"
const BAR_BG_SCROLLED = "rgba(7, 12, 24, 0.85)"
const BAR_BORDER = "var(--it-border)"
const PANEL_BG = "var(--it-surface)"
const CTA_BG = "var(--it-blue)"
const CTA_HOVER = "var(--it-blue-hover)"
const CTA_TEXT = "var(--it-bg)"

const navItems: { key: NavMegaKey; label: string; href: string }[] = [
  { key: null, label: "Home", href: "/" },
  { key: "products", label: "Products", href: "/products" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "case-studies", label: "Case Studies", href: "/case-studies" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "company", label: "Company", href: "/company" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<NavMegaKey>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20))

  const hasMenu = (key: NavMegaKey) => key !== null
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const closeMenus = () => setOpenMenu(null)
  const toggleMenu = (key: NavMegaKey) => setOpenMenu((prev) => (prev === key ? null : key))

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full"
        initial={false}
        animate={{
          height: scrolled ? 56 : 64,
          backgroundColor: scrolled ? BAR_BG_SCROLLED : "transparent",
          borderBottomWidth: scrolled ? 1 : 0,
          borderBottomColor: BAR_BORDER,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => { closeMenus(); setMobileOpen(false) }}
            aria-label="InnoTech Systems Home"
          >
            <span
              className="font-bold tracking-wide uppercase"
              style={{
                fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                fontSize: scrolled ? "0.875rem" : "1rem",
                color: "var(--it-text-primary)",
              }}
            >
              Inno
            </span>
            <span
              className="font-bold tracking-wide uppercase transition-colors duration-200"
              style={{
                fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                fontSize: scrolled ? "0.875rem" : "1rem",
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

          {/* Desktop nav center */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 flex-1 max-w-3xl mx-8"
            role="navigation"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const active = isActive(item.href)
              const isOpen = openMenu === item.key
              const hasDropdown = hasMenu(item.key)
              return (
                <div key={item.key ?? item.href} className="relative flex items-center">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.key)}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      className={cn(
                        "flex items-center gap-0.5 py-2 px-3 rounded text-sm transition-colors duration-150",
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
                      {item.label}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-0.5"
                      >
                        <ChevronDown size={14} strokeWidth={2} />
                      </motion.span>
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
                        "relative flex items-center py-2 px-3 rounded text-sm transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
                      )}
                      style={{
                        color: active ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = NAV_LINK_HOVER}
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
                </div>
              )
            })}
          </nav>

          {/* Right buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="text-sm px-3 py-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
              style={{ color: NAV_LINK_COLOR, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = NAV_LINK_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = NAV_LINK_COLOR)}
            >
              Contact
            </Link>
            <Link href="/demo">
              <motion.span
                className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-md"
                style={{
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
                Book a Demo
              </motion.span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
            style={{ color: NAV_LINK_COLOR }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop mega menus / dropdowns — rendered below bar, same z-50 */}
        <AnimatePresence>
          {openMenu === "products" && <ProductsMegaMenu key="products" onClose={closeMenus} />}
          {openMenu === "solutions" && <SolutionsMegaMenu key="solutions" onClose={closeMenus} />}
          {openMenu === "industries" && <IndustriesMegaMenu key="industries" onClose={closeMenus} />}
          {openMenu === "case-studies" && <CaseStudiesDropdown key="case-studies" onClose={closeMenus} />}
          {openMenu === "resources" && <SimpleDropdown key="resources" items={resourcesDropdownItems} width={240} onClose={closeMenus} />}
          {openMenu === "company" && <SimpleDropdown key="company" items={companyDropdownItems} width={220} onClose={closeMenus} />}
        </AnimatePresence>
      </motion.header>

      {/* Overlay when any desktop menu open */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed inset-0 z-40 lg:block hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenus}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  )
}

function ProductsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
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
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{
                fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                color: "var(--it-text-secondary)",
              }}
            >
              Products
            </h3>
            <p className="text-sm text-[var(--it-text-dim)]" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
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
              <div className="border-l-4 pl-3 mb-4" style={{ borderLeftColor: col.accentColor }}>
                <h4
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                    color: "var(--it-text-secondary)",
                  }}
                >
                  {col.name}
                </h4>
                <p className="text-xs text-[var(--it-text-dim)] mt-0.5" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                  {col.tagline}
                </p>
              </div>
              <ul className="space-y-1.5 mb-4">
                {col.features.map((f) => (
                  <li key={f}>
                    <span className="text-sm text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                      — {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={col.href}
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider inline-block transition-colors hover:opacity-90"
                style={{ color: col.accentColor, fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }}
              >
                {col.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[var(--it-border)] pt-3 mt-4 text-center">
          <Link
            href="/products"
            onClick={onClose}
            className="text-sm text-slate-400 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            See all products
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
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
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{
            fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
            color: "var(--it-text-secondary)",
          }}
        >
          Solutions
        </h3>
        <p className="text-sm text-[var(--it-text-dim)] mb-6" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          Browse by the problem you&apos;re solving, not the product
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
              <div className="border-l-4 pl-3 mb-4" style={{ borderLeftColor: cat.accentColor }}>
                <h4
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                    color: "var(--it-text-secondary)",
                  }}
                >
                  {cat.name}
                </h4>
              </div>
              <ul className="space-y-2">
                {cat.solutions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={onClose}
                      className="block py-2 px-3 -mx-3 rounded border border-transparent hover:border-[var(--it-solutions-border)] transition-colors"
                      style={{
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--it-solutions-subtle)"
                        e.currentTarget.style.borderColor = "var(--it-solutions-border)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.borderColor = "transparent"
                      }}
                    >
                      <span className="text-sm text-white block">{s.name}</span>
                      <span className="text-xs text-slate-400">{s.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[var(--it-border)] pt-3 mt-4 text-right">
          <Link
            href="/contact"
            onClick={onClose}
            className="text-sm text-slate-400 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            Not sure which solution fits? → Talk to an engineer
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function IndustriesMegaMenu({ onClose }: { onClose: () => void }) {
  const { headline, description, ctaLabel, ctaHref, accentColor } = industriesMegaFeatured
  return (
    <motion.div
      className="absolute left-0 right-0 top-full z-50 border-t-2"
      style={{ backgroundColor: PANEL_BG, borderTopColor: accentColor }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="menu"
    >
      <div className="max-w-screen-2xl mx-auto px-8 py-6">
        <h3
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{
            fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
            color: "var(--it-text-secondary)",
          }}
        >
          Industries
        </h3>
        <p className="text-sm text-[var(--it-text-dim)] mb-6" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          Configured for environments where failure is not an option
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-[var(--it-border)] pt-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {industriesMegaItems.map((item) => (
              <div key={item.href + item.name} className={cn(item.isSubItem && "pl-4")}>
                {item.comingSoon ? (
                  <span className="text-sm text-slate-500 flex items-center gap-2">
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{item.name}</span>
                    <span className="text-xs bg-slate-800 text-slate-500 rounded px-1">coming soon</span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                    style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                  >
                    {item.isSubItem && <span className="text-slate-500">└</span>}
                    <span className="w-4 h-4 shrink-0" style={{ color: accentColor }}>
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
                        <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3z" />
                      </svg>
                    </span>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div>
            <div
              className="rounded-lg p-5 border"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.05)",
                borderColor: "rgba(245, 158, 11, 0.2)",
              }}
            >
              <h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                {headline}
              </h4>
              <p className="text-sm text-slate-400 mb-4" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                {description}
              </p>
              <Link
                href={ctaHref}
                onClick={onClose}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: accentColor }}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CaseStudiesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-0 rounded-lg border p-4"
      style={{
        backgroundColor: PANEL_BG,
        borderColor: BAR_BORDER,
        width: 260,
      }}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      role="dialog"
    >
      <div className="flex items-start gap-3 mb-4">
        <Lock size={16} style={{ color: "var(--it-text-dim)", flexShrink: 0 }} />
        <div>
          <p className="text-sm text-slate-300" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Case studies launching soon. Join the list.
          </p>
          <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Get notified when we publish.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="w-full text-left text-xs py-1.5 px-3 rounded border border-[var(--it-border)] text-slate-400 hover:border-[var(--it-blue)] hover:text-white transition-colors"
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
      >
        Notify Me
      </button>
    </motion.div>
  )
}

function SimpleDropdown({
  items,
  width,
  onClose,
}: {
  title?: string
  items: typeof resourcesDropdownItems
  width: number
  onClose: () => void
}) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-0 rounded-lg border py-2"
      style={{
        backgroundColor: PANEL_BG,
        borderColor: BAR_BORDER,
        width,
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      }}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      role="menu"
    >
      {items.map((item) => (
        <React.Fragment key={item.href + item.title}>
          {item.dividerAbove && <div className="border-t border-[var(--it-border)] my-2" />}
          <Link
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded mx-1 transition-colors"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            {item.title}
            {item.badge && (
              <span
                className="text-[10px] rounded px-1 ml-2 border"
                style={{
                  backgroundColor: "rgba(0, 212, 170, 0.125)",
                  color: "var(--it-safeguard)",
                  borderColor: "rgba(0, 212, 170, 0.25)",
                }}
              >
                {item.badge}
              </span>
            )}
            {item.external && <ExternalLink size={12} className="ml-1 opacity-60" />}
          </Link>
        </React.Fragment>
      ))}
    </motion.div>
  )
}

function MobileDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  const [expanded, setExpanded] = React.useState<NavMegaKey>(null)
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-60 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-60 w-full max-w-md bg-[var(--it-bg)] shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--it-border)]">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <span className="font-bold tracking-wide uppercase text-[var(--it-text-primary)]" style={{ fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }}>Inno</span>
                <span className="font-bold tracking-wide uppercase" style={{ color: CTA_BG, fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }}>Tech</span>
                <span className="text-xs uppercase tracking-wider text-slate-400" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>Systems</span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded text-slate-400 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--it-blue)]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
              <Link href="/" onClick={onClose} className={cn("text-lg py-3", isActive("/") ? "text-white" : "text-slate-200")} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>Home</Link>
              {/* Products accordion */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "products" ? null : "products")} className="w-full text-left text-lg py-3 text-slate-200 flex items-center justify-between" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Products
                  <motion.span animate={{ rotate: expanded === "products" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "products" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {productsMegaColumns.map((col) => (
                          <Link key={col.id} href={col.href} onClick={onClose} className="block text-sm text-slate-400 hover:text-white py-1.5" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{col.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Solutions accordion */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "solutions" ? null : "solutions")} className="w-full text-left text-lg py-3 text-slate-200 flex items-center justify-between" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Solutions
                  <motion.span animate={{ rotate: expanded === "solutions" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "solutions" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {solutionsMegaCategories.flatMap((c) => c.solutions).slice(0, 6).map((s) => (
                          <Link key={s.href} href={s.href} onClick={onClose} className="block text-sm text-slate-400 hover:text-white py-1.5" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{s.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Industries accordion */}
              <div>
                <button type="button" onClick={() => setExpanded(expanded === "industries" ? null : "industries")} className="w-full text-left text-lg py-3 text-slate-200 flex items-center justify-between" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>
                  Industries
                  <motion.span animate={{ rotate: expanded === "industries" ? 180 : 0 }}><ChevronDown size={20} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded === "industries" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 space-y-1 pb-2">
                        {industriesMegaItems.filter((i) => !i.comingSoon).map((i) => (
                          <Link key={i.href + i.name} href={i.href} onClick={onClose} className="block text-sm text-slate-400 hover:text-white py-1.5" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{i.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/case-studies" onClick={onClose} className={cn("text-lg py-3", isActive("/case-studies") ? "text-white" : "text-slate-200")} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>Case Studies</Link>
              <Link href="/resources" onClick={onClose} className={cn("text-lg py-3", isActive("/resources") ? "text-white" : "text-slate-200")} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>Resources</Link>
              <Link href="/company" onClick={onClose} className={cn("text-lg py-3", isActive("/company") ? "text-white" : "text-slate-200")} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 500 }}>Company</Link>
            </nav>
            <div className="p-6 border-t border-[var(--it-border)]">
              <Link href="/demo" onClick={onClose} className="block w-full text-center text-base font-semibold py-3 rounded-lg" style={{ backgroundColor: CTA_BG, color: CTA_TEXT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
