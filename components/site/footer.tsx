"use client"

import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

import { footerNav } from "@/lib/nav"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: "var(--it-surface)" }}>
      {/* This inner div constrains all content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1 — logo + tagline + address + social */}
        <div className="py-12 border-b border-[var(--it-border)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Link href="/" className="font-bold text-xl" style={{ color: 'var(--it-text-primary)' }}>
                {siteConfig.name}
              </Link>
              <p className="text-sm mt-2 max-w-xs" style={{ color: 'var(--it-text-muted)' }}>
                {siteConfig.company.tagline}
              </p>
            </div>
            <div className="text-sm space-y-1" style={{ color: 'var(--it-text-secondary)' }}>
              <p>{siteConfig.company.address}</p>
              <p className="pt-2">{siteConfig.company.email}</p>
              <p>{siteConfig.company.phone}</p>
            </div>
            <div className="flex items-center gap-4">
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
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:opacity-90"
                style={{ color: 'var(--it-text-muted)' }}
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2 — footer navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-sm" style={{ color: 'var(--it-text-primary)' }}>{section.title}</h3>
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
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--it-border)" }} />

        {/* Bottom bar — copyright + legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm" style={{ color: 'var(--it-text-muted)' }}>
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy-policy" className="transition-colors duration-150 hover:opacity-90" style={{ color: 'var(--it-text-secondary)' }}>
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="transition-colors duration-150 hover:opacity-90" style={{ color: 'var(--it-text-secondary)' }}>
              Terms of Service
            </Link>
            <Link href="/legal/cookie-policy" className="transition-colors duration-150 hover:opacity-90" style={{ color: 'var(--it-text-secondary)' }}>
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
            className="transition-colors duration-150 hover:opacity-90"
            style={{ color: "var(--it-text-muted)" }}
          >
            Marloo Creative Studio
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
