import Link from "next/link"
import { Linkedin, Mail, Youtube } from "lucide-react"

import { SiteLogo } from "@/components/site/site-logo"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--it-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12 border-b border-it-border">
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-it-blue rounded shrink-0">
              <SiteLogo heightClass="h-12 sm:h-14" />
            </Link>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="inline-flex items-center gap-2 text-sm transition-colors duration-150 hover:opacity-90"
              style={{ color: "var(--it-text-secondary)" }}
            >
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
              {siteConfig.company.email}
            </a>
            <div className="flex items-center gap-3 sm:ml-auto">
              <span className="text-sm font-semibold" style={{ color: "var(--it-text-primary)" }}>
                Follow
              </span>
              <div className="flex items-center gap-3">
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
          <p className="text-sm max-w-md mt-6" style={{ color: "var(--it-text-muted)" }}>
            {siteConfig.company.tagline}
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--it-border)" }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm" style={{ color: "var(--it-text-muted)" }}>
          <div className="space-y-1">
            <p className="text-[11px]">© {currentYear} {siteConfig.name}. All rights reserved.</p>
            <Link
              href="/changelog"
              className="font-mono text-[11px] transition-colors duration-150 hover:text-it-text-primary block"
              style={{ fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace", color: "inherit" }}
              title="View changelog"
            >
              v{siteConfig.version}
            </Link>
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
        <p className="text-xs pb-6" style={{ color: "var(--it-text-muted)" }}>
          Powered by{" "}
          <a
            href="https://marloo.net"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 text-it-text-muted hover:text-it-text-primary"
          >
            Marloo Creative Studio
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
