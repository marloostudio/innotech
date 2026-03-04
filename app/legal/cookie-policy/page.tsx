import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { OnThisPageNav } from "@/components/legal/on-this-page-nav"
import { LegalPageSidebar } from "@/components/legal/legal-page-sidebar"

export const metadata: Metadata = {
  title: "Cookie Policy — InnoTech Systems",
  description: "How InnoTech Systems uses cookies and similar technologies on our website.",
}

const sectionTitleClass = "text-2xl font-bold mt-10 mb-3 scroll-mt-32"
const subsectionTitleClass = "text-lg font-semibold mt-6 mb-2"
const bodyClass = "text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)] leading-relaxed mb-4"
const anchorClass = "underline hover:opacity-90"
const textPrimaryStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }
const textPrimaryDmStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }
const tableWrapClass = "my-6 overflow-x-auto rounded-lg border border-it-light-border"
const tableClass = "w-full border-collapse text-left text-sm"
const thClass = "font-semibold py-3 px-4 border-b border-r border-it-light-border last:border-r-0 bg-[var(--it-light-surface-2)]"
const tdClass = "py-3 px-4 border-b border-it-light-border text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)]"

const sections = [
  { id: "what-are-cookies", label: "1. What Are Cookies" },
  { id: "cookies-we-use", label: "2. Cookies We Use" },
  { id: "third-party-cookies", label: "3. Third-Party Cookies" },
  { id: "managing-cookies", label: "4. Managing Your Preferences" },
  { id: "contact", label: "5. Contact" },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen w-full" style={{ background: "#ffffff" }}>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: "var(--it-light-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/legal/terms" className="transition-colors duration-150 hover:opacity-90" style={{ color: "inherit" }}>
              Legal
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "var(--it-light-text-dim)" }} strokeWidth={1.5} />
            <span style={{ color: "var(--it-light-text-primary)" }}>Cookie Policy</span>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-2xl mx-auto px-8 pt-16 pb-32 flex gap-12 lg:gap-16">
        <OnThisPageNav sections={sections} />
        <main className="min-w-0 flex-1">
          <p className="mb-4">
            <span className="legal-ribbon">Legal</span>
          </p>
          <h1 className="text-4xl font-bold mb-4" style={textPrimaryStyle}>
            Cookie Policy
          </h1>
          <p className={`${bodyClass} mb-2`}>
            <strong style={textPrimaryStyle}>Effective Date:</strong> February 1, 2025<br />
            <strong style={textPrimaryStyle}>Last Updated:</strong> February 2025
          </p>
          <p className={bodyClass}>
            This Cookie Policy explains how InnoTech Systems (&quot;InnoTech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies on our website at{" "}
            <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
              https://innotech-sys.com
            </a>{" "}
            (&quot;Site&quot;). For how we use personal data collected via cookies, see our{" "}
            <Link href="/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
              Privacy Policy
            </Link>.
          </p>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="what-are-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              1. What Are Cookies
            </h2>
            <p className={bodyClass}>
              Cookies are small text files stored on your device when you visit a website. They are widely used to make sites work efficiently, remember preferences, and understand how visitors use the site. We may also use similar technologies such as pixels, tags, and local storage where relevant.
            </p>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="cookies-we-use">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              2. Cookies We Use
            </h2>
            <p className={bodyClass}>
              We use the following categories of cookies on the Site:
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Strictly necessary
            </h3>
            <p className={bodyClass}>
              These cookies are required for the Site to function (e.g. security, load balancing, cookie consent). They do not require your consent.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Analytics
            </h3>
            <p className={bodyClass}>
              We use <strong>Google Tag Manager</strong> and <strong>Google Analytics (GA4)</strong> to understand how visitors use our Site (e.g. pages visited, session duration). This helps us improve content and experience. Analytics cookies are only placed after you give consent via our cookie banner.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Marketing and advertising
            </h3>
            <p className={bodyClass}>
              We may use the <strong>Meta (Facebook) Pixel</strong> and the <strong>LinkedIn Insight Tag</strong> to measure the reach and effectiveness of our campaigns and to build audience insights. These cookies are only placed after you give consent via the cookie banner.
            </p>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="third-party-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              3. Third-Party Cookies
            </h2>
            <p className={bodyClass}>
              The tools listed above (Google, Meta, LinkedIn) may set their own cookies. Their use of data is governed by their respective privacy policies. We do not control these third-party cookies; you can manage them via your browser settings or the links below:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>
                <a href="https://policies.google.com/technologies/cookies" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Google cookies</a>
              </li>
              <li>
                <a href="https://www.facebook.com/policies/cookies/" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Meta cookies</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">LinkedIn cookies</a>
              </li>
            </ul>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="managing-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              4. Managing Your Preferences
            </h2>
            <p className={bodyClass}>
              You can change your cookie preferences at any time using the <strong>Cookie Settings</strong> link in the footer of the Site. You can also block or delete cookies via your browser settings; note that blocking strictly necessary cookies may affect how the Site works.
            </p>
            <p className={bodyClass}>
              If you are in the EEA or UK, analytics and marketing cookies will only be placed after you have given consent through our cookie banner. You may withdraw consent at any time via Cookie Settings.
            </p>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="contact">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              5. Contact
            </h2>
            <p className={bodyClass}>
              For questions about this Cookie Policy or our use of cookies, contact us at{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a> or via our{" "}
              <Link href="/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>contact page</Link>.
            </p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-it-light-border" style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
            © 2025 InnoTech Systems. All rights reserved.
          </p>
        </main>
        <LegalPageSidebar currentPage="cookie" />
      </div>
    </div>
  )
}
