import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { legalBreadcrumbWrapClass, legalContentRowClass, legalMainClass } from "@/components/legal/legal-layout"
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
const tableClass = "w-full border-collapse text-left text-sm min-w-[640px]"
const thClass = "font-semibold py-3 px-4 border-b border-r border-it-light-border last:border-r-0 bg-[var(--it-light-surface-2)]"
const tdClass = "py-3 px-4 border-b border-r border-it-light-border last:border-r-0 text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)] align-top"
const blockquoteClass = "my-6 border-l-[3px] pl-4 py-1 text-sm italic"

const sections = [
  { id: "what-are-cookies", label: "1. What Are Cookies" },
  { id: "cookies-we-use", label: "2. Cookies and Similar Technologies We Use" },
  { id: "third-party-cookies", label: "3. Third-Party Cookies and Technologies" },
  { id: "managing-cookies", label: "4. Managing Your Cookie Preferences" },
  { id: "contact", label: "5. Contact" },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen w-full" style={{ background: "#ffffff" }}>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: "var(--it-light-border)" }}>
        <div className={legalBreadcrumbWrapClass}>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/legal/terms" className="transition-colors duration-150 hover:opacity-90" style={{ color: "inherit" }}>
              Legal
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "var(--it-light-text-dim)" }} strokeWidth={1.5} />
            <span style={{ color: "var(--it-light-text-primary)" }}>Cookie Policy</span>
          </div>
        </div>
      </nav>
      <div className={legalContentRowClass}>
        <OnThisPageNav sections={sections} />
        <main className={legalMainClass}>
          <p className="mb-4">
            <span className="legal-ribbon">Legal</span>
          </p>
          <h1 className="text-4xl font-bold mb-4" style={textPrimaryStyle}>
            Cookie Policy
          </h1>
          <p className={`${bodyClass} mb-2`}>
            <strong style={textPrimaryStyle}>Effective Date:</strong> February 1, 2025<br />
            <strong style={textPrimaryStyle}>Last Updated:</strong> June 17, 2026
          </p>
          <p className={bodyClass}>
            This Cookie Policy explains how InnoTech Systems (&quot;InnoTech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies on our website at{" "}
            <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
              https://innotech-sys.com
            </a>{" "}
            (the &quot;Site&quot;). For how we use personal data collected via cookies, see our{" "}
            <Link href="/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
              Privacy Policy
            </Link>
            .
          </p>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="what-are-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              1. What Are Cookies
            </h2>
            <p className={bodyClass}>
              Cookies are small text files stored on your device when you visit a website. They are widely used to make sites work efficiently, remember preferences, and understand how visitors use the site. We may also use similar technologies — such as pixels, tags, software development kits, and local storage — where relevant. In this policy, &quot;cookies&quot; refers to cookies and these similar technologies collectively.
            </p>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="cookies-we-use">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              2. Cookies and Similar Technologies We Use
            </h2>
            <p className={bodyClass}>
              We use cookies for the following purposes:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>Strictly necessary</strong> — essential for the Site to function (security, access control, and basic functionality). These do not require consent.</li>
              <li><strong>Analytics and performance</strong> — help us understand how visitors use the Site so we can improve performance and content.</li>
              <li><strong>Marketing and advertising</strong> — measure the effectiveness of our advertising campaigns and build audience insights.</li>
              <li><strong>Functional / optimization</strong> — remember preferences or enable features such as A/B testing.</li>
            </ul>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Cookie Inventory
            </h3>
            <p className={bodyClass}>
              The table below lists the cookies and similar technologies in use. Durations are approximate and may vary by provider; third-party cookies are governed by the providers&apos; own policies.
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass} style={textPrimaryDmStyle}>Cookie / Technology</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Provider</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Category</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Purpose</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Duration</th>
                    <th className={thClass} style={textPrimaryDmStyle}>More Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">innotech_site_preview</code></td>
                    <td className={tdClass}>InnoTech Systems</td>
                    <td className={tdClass}>Strictly necessary</td>
                    <td className={tdClass}>Maintains authenticated access during the pre-launch review period (httpOnly, secure)</td>
                    <td className={tdClass}>30 days</td>
                    <td className={tdClass}>—</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">it_ab_home_solutions</code></td>
                    <td className={tdClass}>InnoTech Systems</td>
                    <td className={tdClass}>Functional / optimization</td>
                    <td className={tdClass}>Assigns a homepage A/B test variant for performance optimization</td>
                    <td className={tdClass}>30 days</td>
                    <td className={tdClass}>—</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">sidebar_state</code></td>
                    <td className={tdClass}>InnoTech Systems</td>
                    <td className={tdClass}>Functional</td>
                    <td className={tdClass}>Remembers UI sidebar state <strong>[CONFIRM: retain only if this control is exposed to public visitors]</strong></td>
                    <td className={tdClass}>7 days</td>
                    <td className={tdClass}>—</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">__hstc</code>, <code className="font-[var(--font-ibm-mono)] text-xs">hubspotutk</code>, <code className="font-[var(--font-ibm-mono)] text-xs">__hssc</code>, <code className="font-[var(--font-ibm-mono)] text-xs">__hssrc</code> (and similar)</td>
                    <td className={tdClass}>HubSpot</td>
                    <td className={tdClass}>Analytics + marketing</td>
                    <td className={tdClass}>Visitor identification, session tracking, and CRM integration</td>
                    <td className={tdClass}>Up to ~13 months</td>
                    <td className={tdClass}>
                      <a href="https://legal.hubspot.com/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">HubSpot Cookie Policy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">_ga</code>, <code className="font-[var(--font-ibm-mono)] text-xs">_ga_*</code>, <code className="font-[var(--font-ibm-mono)] text-xs">_gid</code></td>
                    <td className={tdClass}>Google (via Google Tag Manager)</td>
                    <td className={tdClass}>Analytics</td>
                    <td className={tdClass}>Distinguishes users and sessions for Google Analytics (GA4)</td>
                    <td className={tdClass}>Up to 2 years / 24 hours</td>
                    <td className={tdClass}>
                      <a href="https://policies.google.com/technologies/cookies" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Google Analytics Cookies</a>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}><code className="font-[var(--font-ibm-mono)] text-xs">_fbp</code>, <code className="font-[var(--font-ibm-mono)] text-xs">_fbc</code></td>
                    <td className={tdClass}>Meta (via Google Tag Manager)</td>
                    <td className={tdClass}>Marketing</td>
                    <td className={tdClass}>Measures ad conversions and builds custom audiences</td>
                    <td className={tdClass}>~90 days</td>
                    <td className={tdClass}>
                      <a href="https://www.facebook.com/policy/cookies/" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Meta Cookie Policy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>LinkedIn Insight cookies (e.g. <code className="font-[var(--font-ibm-mono)] text-xs">li_sugr</code>, <code className="font-[var(--font-ibm-mono)] text-xs">AnalyticsSyncHistory</code>)</td>
                    <td className={tdClass}>LinkedIn (via Google Tag Manager)</td>
                    <td className={tdClass}>Marketing</td>
                    <td className={tdClass}>Ad attribution, audience insights, and conversion tracking</td>
                    <td className={tdClass}>Varies</td>
                    <td className={tdClass}>
                      <a href="https://www.linkedin.com/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">LinkedIn Cookie Policy</a>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Vercel Analytics</td>
                    <td className={tdClass}>Vercel</td>
                    <td className={tdClass}>Analytics</td>
                    <td className={tdClass}>Anonymous, aggregate pageview and performance measurement (generally cookieless)</td>
                    <td className={tdClass}>N/A</td>
                    <td className={tdClass}>
                      <a href="https://vercel.com/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <blockquote className={blockquoteClass} style={{ borderColor: "var(--it-light-blue)", color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
              <strong>Implementation note (remove before public launch):</strong> The statements about consent in Sections 2 and 4 are only accurate once the consent banner and footer controls are live in code. Until then, certain analytics and marketing technologies load as described in our Privacy Policy. Do not publish the consent language as written until the consent management mechanism is deployed, or revise it to match the Site&apos;s actual behaviour in the interim.
            </blockquote>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="third-party-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              3. Third-Party Cookies and Technologies
            </h2>
            <p className={bodyClass}>
              Some cookies on our Site are set by third-party services we use. These third parties may process your data according to their own privacy policies. We do not control how these third parties use cookies; you can manage many of them through your browser settings or the links below. Note that some third-party technologies (especially HubSpot) may serve both analytics and marketing purposes.
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>
                <strong>Google</strong> (via Google Tag Manager and Google Analytics) —{" "}
                <a href="https://policies.google.com/privacy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                {" | "}
                <a href="https://policies.google.com/technologies/cookies" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Google Analytics Cookies</a>
              </li>
              <li>
                <strong>HubSpot</strong> —{" "}
                <a href="https://legal.hubspot.com/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">HubSpot Cookie Policy</a>
              </li>
              <li>
                <strong>Meta (Facebook)</strong> —{" "}
                <a href="https://www.facebook.com/policy/cookies/" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Meta Cookie Policy</a>
              </li>
              <li>
                <strong>LinkedIn</strong> —{" "}
                <a href="https://www.linkedin.com/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">LinkedIn Cookie Policy</a>
              </li>
              <li>
                <strong>Vercel</strong> (hosting and analytics) —{" "}
                <a href="https://vercel.com/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>
              </li>
            </ul>
          </section>

          <hr className="my-8 border-t border-it-light-border" />

          <section id="managing-cookies">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              4. Managing Your Cookie Preferences
            </h2>
            <p className={bodyClass}>
              You can manage your preferences for non-essential cookies through our cookie consent banner and settings, which we are implementing prior to public launch. Once available, a <strong>&quot;Cookie Settings&quot;</strong> link will appear in the Site footer, and you can change or withdraw your choices there at any time.
            </p>
            <p className={bodyClass}>
              You can also control cookies through your browser settings. Please note that blocking or deleting strictly necessary cookies may affect how the Site works.
            </p>
            <p className={bodyClass}>
              How consent works depends on your location:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>EEA and UK visitors:</strong> We place non-essential analytics and marketing cookies only after you have given consent through our cookie banner (once the consent system is active). You may withdraw consent at any time via Cookie Settings.</li>
              <li><strong>United States (including California) visitors:</strong> Analytics and advertising cookies may operate on an opt-out basis. You can opt out of advertising-related &quot;sharing&quot; via the <strong>&quot;Do Not Sell or Share My Personal Information&quot;</strong> link in the footer, and we honor <strong>Global Privacy Control (GPC)</strong> signals where technically feasible. See the &quot;Your Rights&quot; section of our{" "}
                <Link href="/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
                  Privacy Policy
                </Link>{" "}
                for details.</li>
            </ul>
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
            © 2026 InnoTech Systems. All rights reserved.
          </p>
        </main>
        <LegalPageSidebar currentPage="cookie" />
      </div>
    </div>
  )
}
