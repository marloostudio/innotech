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
        {/* Top section — logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 py-16">
          {/* Logo + tagline + address — spans 2 cols on lg */}
          <div className="col-span-2 space-y-4">
            <div>
              <Link href="/" className="font-bold text-xl">
                {siteConfig.name}
              </Link>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                {siteConfig.company.tagline}
              </p>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{siteConfig.company.address}</p>
              <p className="pt-2">{siteConfig.company.email}</p>
              <p>{siteConfig.company.phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Footer Navigation — all columns preserved */}
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
