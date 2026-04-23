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
                className="inline-block shrink-0 rounded transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue"
              >
                <SiteLogo heightClass="h-12 sm:h-14" />
              </Link>
              <p className="text-sm mt-3" style={{ color: "var(--it-text-muted)" }}>
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
                PRODUCTS
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5" role="list">
                {productsMegaColumns.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.href}
                      className="group flex w-full items-center justify-start gap-0 text-sm uppercase tracking-wide text-it-text-muted transition-[color,gap] duration-150 hover:text-white focus-visible:text-white group-hover:gap-x-1 focus-visible:gap-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 rounded-sm"
                    >
                      <span className="min-w-0 shrink truncate">{p.name}</span>
                      <span
                        className="inline-block max-w-0 shrink-0 overflow-hidden opacity-0 transition-[max-width,opacity] duration-200 ease-out group-hover:max-w-[1.25em] group-hover:opacity-100 group-focus-visible:max-w-[1.25em] group-focus-visible:opacity-100 text-base font-normal leading-none"
                        aria-hidden
                      >
                        →
                      </span>
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
                GET IN TOUCH
              </h2>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm w-fit text-it-text-muted transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue focus-visible:ring-offset-2 rounded-sm"
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mt-6"
                style={{
                  color: "var(--it-text-secondary)",
                  fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif",
                }}
              >
                FOLLOW
              </p>
              <div className="mt-2 flex items-center gap-3">
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-it-text-muted transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCWS8SE_2VAz1hkRKlhlu_Iw?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-it-text-muted transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded-sm"
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
            <p className="text-[11px]" style={{ color: "var(--it-text-muted)" }}>
              © {currentYear} {siteConfig.name}. All rights reserved.{" "}
              <Link
                href="/changelog"
                className="font-mono text-[11px] align-baseline text-inherit transition-colors duration-150 hover:text-white focus-visible:text-white"
                style={{ fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace", color: "inherit" }}
                title="View changelog"
              >
                v{siteConfig.version}
              </Link>
            </p>
            <p className="text-[11px]" style={{ color: "var(--it-text-muted)" }}>
              Powered by{" "}
              <a
                href="https://marloo.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit transition-colors duration-150 hover:text-white focus-visible:text-white"
                style={{ color: "inherit" }}
              >
                Marloo Creative Studio
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-1.5 gap-y-1 text-[11px] leading-snug uppercase tracking-wide">
            <Link
              href="/sitemap.xml"
              className="font-normal text-it-text-secondary transition-[color,font-weight] duration-150 hover:font-bold hover:text-it-text-primary focus-visible:font-bold"
            >
              Sitemap
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link
              href="/changelog"
              className="font-normal text-it-text-secondary transition-[color,font-weight] duration-150 hover:font-bold hover:text-it-text-primary focus-visible:font-bold"
            >
              Changelog
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link
              href="/legal/privacy-policy"
              className="font-normal text-it-text-secondary transition-[color,font-weight] duration-150 hover:font-bold hover:text-it-text-primary focus-visible:font-bold"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link
              href="/legal/terms"
              className="font-normal text-it-text-secondary transition-[color,font-weight] duration-150 hover:font-bold hover:text-it-text-primary focus-visible:font-bold"
            >
              Terms of Service
            </Link>
            <span aria-hidden="true" style={{ color: "var(--it-text-muted)" }}>/</span>
            <Link
              href="/legal/cookie-policy"
              className="font-normal text-it-text-secondary transition-[color,font-weight] duration-150 hover:font-bold hover:text-it-text-primary focus-visible:font-bold"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
