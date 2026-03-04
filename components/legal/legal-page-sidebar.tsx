import Link from "next/link"

export type LegalPageSlug = "terms" | "privacy" | "cookie"

interface LegalPageSidebarProps {
  currentPage: LegalPageSlug
}

const relatedLinks: { slug: LegalPageSlug; href: string; label: string }[] = [
  { slug: "privacy", href: "/legal/privacy-policy", label: "Privacy Policy" },
  { slug: "terms", href: "/legal/terms", label: "Terms of Service" },
  { slug: "cookie", href: "/legal/cookie-policy", label: "Cookie Policy" },
]

export function LegalPageSidebar({ currentPage }: LegalPageSidebarProps) {
  return (
    <aside
      className="hidden lg:block shrink-0 w-52 pt-8"
      aria-label="Related pages"
    >
      <nav
        className="sticky top-24 space-y-1.5"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--it-light-text-primary)" }}
        >
          Related
        </p>
        {relatedLinks.map(({ slug, href, label }) => {
          const isActive = currentPage === slug
          return (
            <Link
              key={slug}
              href={href}
              className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
              style={{
                color: isActive ? "var(--it-light-text-primary)" : "var(--it-light-text-muted)",
                fontWeight: isActive ? 500 : 400,
              }}
            >
              {label}
            </Link>
          )
        })}
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-3 mt-6"
          style={{ color: "var(--it-light-text-primary)" }}
        >
          Company
        </p>
        <Link
          href="/about"
          className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
          style={{ color: "var(--it-light-text-muted)" }}
        >
          About Us
        </Link>
        <Link
          href="/company/our-story"
          className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
          style={{ color: "var(--it-light-text-muted)" }}
        >
          Our Story
        </Link>
        <Link
          href="/company/careers"
          className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
          style={{ color: "var(--it-light-text-muted)" }}
        >
          Careers
        </Link>
        <Link
          href="/contact"
          className="block text-sm py-1 leading-snug transition-colors duration-150 hover:opacity-90"
          style={{ color: "var(--it-light-text-muted)" }}
        >
          Contact
        </Link>
      </nav>
    </aside>
  )
}
