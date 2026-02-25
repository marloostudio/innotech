"use client"

import Link from "next/link"
import { Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react"

import { footerNav } from "@/lib/nav"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--it-surface)" }}>
      {/* This inner div constrains all content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1 — 1/3 InnoTech + 2/3 links (2 rows × 3 cols) */}
        <div className="py-12 border-b border-it-border">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* 1/3 — logo, tagline, address, email */}
            <div className="lg:w-1/3 min-w-0 text-sm space-y-1" style={{ color: 'var(--it-text-secondary)' }}>
              <Link href="/" className="font-bold text-xl block" style={{ color: 'var(--it-text-primary)' }}>
                {siteConfig.name}
              </Link>
              <p className="text-sm max-w-xs mb-4" style={{ color: 'var(--it-text-muted)' }}>
                {siteConfig.company.tagline}
              </p>
              <p className="whitespace-pre-line pt-1 flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden />
                <span>{siteConfig.company.address}</span>
              </p>
              <p className="pt-1 flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
                <a href={`mailto:${siteConfig.company.email}`} className="transition-colors duration-150 hover:opacity-90" style={{ color: 'inherit' }}>
                  {siteConfig.company.email}
                </a>
              </p>
            </div>
            {/* 2/3 — links in 2 rows × 3 columns */}
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 sm:gap-x-10">
              {footerNav.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--it-text-primary)' }}>{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm transition-colors duration-150"
                          style={{ color: 'var(--it-text-muted)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--it-text-primary)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--it-text-muted)' }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="space-y-3">
                <h3 className="font-semibold text-base" style={{ color: 'var(--it-text-primary)' }}>Follow</h3>
                <div className="flex items-center gap-3">
                  <Link
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:opacity-90"
                    style={{ color: 'var(--it-text-muted)' }}
                  >
                    <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:opacity-90"
                    style={{ color: 'var(--it-text-muted)' }}
                  >
                    <Twitter className="h-5 w-5" strokeWidth={1.5} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCWS8SE_2VAz1hkRKlhlu_Iw?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:opacity-90"
                    style={{ color: 'var(--it-text-muted)' }}
                  >
                    <Youtube className="h-5 w-5" strokeWidth={1.5} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--it-border)" }} />

        {/* Bottom bar — copyright + legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm" style={{ color: 'var(--it-text-muted)' }}>
          <p className="text-xs">
            © {currentYear} {siteConfig.name}. All rights reserved.
            <span className="ml-2 font-mono text-[11px]" style={{ fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }} title="Semantic version">
              v{siteConfig.version}
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1">
            <Link href="/sitemap.xml" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Sitemap
            </Link>
            <span aria-hidden="true" style={{ color: 'var(--it-text-muted)' }}>/</span>
            <Link href="/legal/privacy-policy" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Privacy Policy
            </Link>
            <span aria-hidden="true" style={{ color: 'var(--it-text-muted)' }}>/</span>
            <Link href="/legal/terms" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Terms of Service
            </Link>
            <span aria-hidden="true" style={{ color: 'var(--it-text-muted)' }}>/</span>
            <Link href="/legal/cookie-policy" className="transition-colors duration-150 hover:text-it-text-primary text-it-text-secondary">
              Cookie Policy
            </Link>
          </div>
        </div>
        <p className="text-xs pb-6" style={{ color: 'var(--it-text-muted)' }}>
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
