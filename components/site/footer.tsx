import Link from "next/link"
import { Linkedin, Youtube } from "lucide-react"

import { SiteLogo } from "@/components/site/site-logo"
import { productsMegaColumns } from "@/lib/nav-mega"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--it-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12 border-b border-it-border">
          <div className="flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-12">
            {/* Column 1 — brand */}
            <div className="min-w-0 flex-1 basis-0 w-full">
              <Link
                href="/"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded shrink-0"
              >
                <SiteLogo heightClass="h-12 sm:h-14" />
              </Link>
              <p className="text-sm mt-6" style={{ color: "var(--it-text-muted)" }}>
                {siteConfig.company.tagline}
              </p>
            </div>

            {/* Column 2 — products */}
            <div className="min-w-0 flex-1 basis-0 w-full">
              <h2
                className="text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "var(--it-text-secondary)",
                  fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                }}
              >
                Products
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5" role="list">
                {productsMegaColumns.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.href}
                      className="text-sm transition-colors duration-150 hover:text-it-text-primary"
                      style={{ color: "var(--it-text-muted)" }}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — contact & social */}
            <div className="min-w-0 flex-1 basis-0 w-full">
              <h2
                className="text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "var(--it-text-secondary)",
                  fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                }}
              >
                Get in Touch
              </h2>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm w-fit transition-colors duration-150 hover:text-it-text-primary"
                  style={{ color: "var(--it-text-muted)" }}
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <p
                className="text-sm font-semibold mt-6"
                style={{ color: "var(--it-text-primary)" }}
              >
                Follow
              </p>
              <div className="mt-2 flex items-center gap-3">
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:opacity-90"
                  style={{ color: "var(--it-text-muted)" }}
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCWS8SE_2VAz1hkRKlhlu_Iw?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:opacity-90"
                  style={{ color: "var(--it-text-muted)" }}
                >
                  <Youtube className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--it-border)" }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 pb-6 text-sm" style={{ color: "var(--it-text-muted)" }}>
          <div className="space-y-1">
            <p className="text-[11px]">© {currentYear} {siteConfig.name}. All rights reserved.</p>
            <p className="text-[11px]" style={{ color: "var(--it-text-muted)" }}>
              Powered by{" "}
              <a
                href="https://marloo.net"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-it-text-primary"
                style={{ color: "inherit" }}
              >
                Marloo Creative Studio
              </a>
              .{" "}
              <span aria-hidden="true">—</span>{" "}
              <Link
                href="/changelog"
                className="font-mono text-[11px] transition-colors duration-150 hover:text-it-text-primary align-baseline"
                style={{ fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace", color: "inherit" }}
                title="View changelog"
              >
                v{siteConfig.version}
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1">
            <Link href="/sitemap.xml" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Sitemap
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link href="/changelog" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Changelog
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link href="/legal/privacy-policy" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Privacy Policy
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link href="/legal/terms" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Terms of Service
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link href="/legal/cookie-policy" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
