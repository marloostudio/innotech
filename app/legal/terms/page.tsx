import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { OnThisPageNav } from "@/components/legal/on-this-page-nav"
import { LegalPageSidebar } from "@/components/legal/legal-page-sidebar"

export const metadata: Metadata = {
  title: "Terms & Conditions — InnoTech Systems",
  description: "Terms and conditions for use of the InnoTech Systems website and services.",
}

const sectionTitleClass = "text-2xl font-bold mt-10 mb-3 scroll-mt-32"
const subsectionTitleClass = "text-lg font-semibold mt-6 mb-2"
const subsectionBlockClass = "pl-4"
const bodyClass = "text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)] leading-relaxed mb-4"
const anchorClass = "underline hover:opacity-90"
const textPrimaryStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }
const textPrimaryDmStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }

const sections = [
  { id: "about-innotech-systems", label: "1. About InnoTech Systems" },
  { id: "use-of-the-site", label: "2. Use of the Site" },
  { id: "intellectual-property", label: "3. Intellectual Property" },
  { id: "personal-data-and-privacy", label: "4. Personal Data and Privacy" },
  { id: "enquiries-demos-and-commercial-engagements", label: "5. Enquiries, Demos, and Commercial Engagements" },
  { id: "third-party-links-and-embedded-content", label: "6. Third-Party Links and Embedded Content" },
  { id: "analytics-and-third-party-services", label: "7. Analytics and Third-Party Services" },
  { id: "disclaimers", label: "8. Disclaimers" },
  { id: "limitation-of-liability", label: "9. Limitation of Liability" },
  { id: "indemnification", label: "10. Indemnification" },
  { id: "governing-law-and-jurisdiction", label: "11. Governing Law and Jurisdiction" },
  { id: "changes-to-these-terms", label: "12. Changes to These Terms" },
  { id: "severability", label: "13. Severability" },
  { id: "entire-agreement", label: "14. Entire Agreement" },
  { id: "contact-us", label: "15. Contact Us" },
]

export default function TermsPage() {
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
            <span style={{ color: "var(--it-light-text-primary)" }}>Terms of Service</span>
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
            Terms &amp; Conditions
          </h1>
          <p className={`${bodyClass} mb-2`}>
            <strong style={textPrimaryStyle}>Effective Date:</strong> February 1, 2025<br />
            <strong style={textPrimaryStyle}>Last Updated:</strong> February 2025
          </p>
          <p className={bodyClass}>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the InnoTech Systems website located at{" "}
            <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
              https://innotech-sys.com
            </a>{" "}
            (&quot;Site&quot;) and any related services, content, or communications provided by InnoTech Systems (&quot;InnoTech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="about-innotech-systems">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              1. About InnoTech Systems
            </h2>
            <p className={bodyClass}>
              InnoTech Systems is an autonomous infrastructure company headquartered in the United States.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Registered Address:</strong><br />
              InnoTech Systems<br />
              2834 Paraiso Way<br />
              La Crescenta-Montrose, CA 91214<br />
              United States
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Contact:</strong><br />
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <Link href="/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>https://innotech-sys.com/contact</Link>
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="use-of-the-site">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              2. Use of the Site
            </h2>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                2.1 Permitted Use
              </h3>
              <p className={bodyClass}>
                You may access and use the Site for lawful purposes related to evaluating, researching, or inquiring about InnoTech Systems&apos; products and services. You agree not to:
              </p>
              <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
                <li>Use the Site in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
                <li>Introduce viruses, trojans, worms, or other malicious or harmful material</li>
                <li>Use automated tools, scrapers, or bots to collect data from the Site without our prior written consent</li>
                <li>Reproduce, duplicate, copy, or resell any part of the Site in contravention of these Terms</li>
              </ul>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                2.2 Account Access
              </h3>
              <p className={bodyClass}>
                Certain areas of the Site (such as the documentation portal) may require registration or login credentials. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. Notify us immediately at{" "}
                <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a>{" "}
                if you suspect unauthorised access.
              </p>
            </div>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="intellectual-property">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              3. Intellectual Property
            </h2>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                3.1 Ownership
              </h3>
              <p className={bodyClass}>
                All content on the Site — including but not limited to text, graphics, logos, product names, technical descriptions, diagrams, photographs, and software — is the property of InnoTech Systems or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                3.2 Trademarks
              </h3>
              <p className={bodyClass}>
                &quot;InnoTech Systems,&quot; &quot;SafeGuard,&quot; &quot;AutoLock,&quot; &quot;RADARLink,&quot; and related product names are trademarks or service marks of InnoTech Systems. You may not use these marks without prior written permission.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                3.3 Limited Licence
              </h3>
              <p className={bodyClass}>
                We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Site solely for the purpose of evaluating or engaging with InnoTech Systems&apos; products and services. This licence does not include the right to:
              </p>
              <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
                <li>Modify, adapt, or create derivative works from Site content</li>
                <li>Commercially exploit any content from the Site</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="personal-data-and-privacy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              4. Personal Data and Privacy
            </h2>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.1 Data We Collect
              </h3>
              <p className={bodyClass}>
                When you interact with the Site, we may collect:
              </p>
              <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
                <li><strong style={textPrimaryStyle}>Contact form submissions</strong> — name, email address, company name, phone number, and message content, used solely to respond to your enquiry</li>
                <li><strong style={textPrimaryStyle}>Device and usage data</strong> — IP address, browser type, operating system, pages visited, and time on site, collected automatically for analytics and security purposes</li>
                <li><strong style={textPrimaryStyle}>Communications</strong> — any information you provide when contacting our team via email or the Site</li>
              </ul>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.2 How We Use Your Data
              </h3>
              <p className={bodyClass}>
                We use collected data to: respond to enquiries and service requests; improve the performance and content of the Site; detect and prevent fraud, spam, or security threats; and comply with legal obligations. We do not sell your personal data to third parties. We do not use contact form submissions for marketing purposes unless you have explicitly opted in.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.3 Cookies
              </h3>
              <p className={bodyClass}>
                The Site uses cookies for functionality and analytics purposes. A full breakdown of the cookies we use, their purpose, and their duration is available in our{" "}
                <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>Cookie Policy</Link>. You may manage your cookie preferences at any time via the Cookie Settings option in the Site footer.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.4 Data Retention
              </h3>
              <p className={bodyClass}>
                Contact form and enquiry data is retained for as long as necessary to respond to your request and for a reasonable period thereafter for record-keeping purposes. We will honour any request to delete your data where we are not legally required to retain it.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.5 Your Rights
              </h3>
              <p className={bodyClass}>
                Depending on your location, you may have the right to: access the personal data we hold about you; request correction of inaccurate or incomplete data; request deletion of your personal data; object to or restrict certain processing activities; or request a portable copy of your data. To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a>.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                4.6 Data Security
              </h3>
              <p className={bodyClass}>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. In the event of a data breach that affects your personal data, we will take prompt steps to contain the breach, assess risk, and notify affected individuals and relevant regulators as required by law. For full details on how we handle personal data, refer to our{" "}
                <Link href="/legal/privacy-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="enquiries-demos-and-commercial-engagements">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              5. Enquiries, Demos, and Commercial Engagements
            </h2>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                5.1 Site is Informational
              </h3>
              <p className={bodyClass}>
                The Site provides information about InnoTech Systems&apos; products, services, and capabilities. Nothing on the Site constitutes a binding offer, quotation, or contract for the supply of products or services. All commercial engagements are governed by separate written agreements negotiated between InnoTech Systems and the customer.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                5.2 Demo Requests
              </h3>
              <p className={bodyClass}>
                Submitting a demo request through the Site initiates a sales conversation only. It does not constitute a commitment by InnoTech Systems to provide a demonstration, proposal, or service within any specified timeframe.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                5.3 Accuracy of Information
              </h3>
              <p className={bodyClass}>
                We make reasonable efforts to ensure that information on the Site is accurate and up to date. However, we make no warranty that the Site is free of errors or that specifications, capabilities, or availability described are final. Product capabilities are subject to change. Always confirm current specifications directly with our team.
              </p>
            </div>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="third-party-links-and-embedded-content">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              6. Third-Party Links and Embedded Content
            </h2>
            <p className={bodyClass}>
              The Site may contain links to third-party websites or embed content from external sources (such as videos or maps). These third parties operate under their own terms and privacy policies. InnoTech Systems is not responsible for the content, accuracy, or practices of any third-party site. Visiting third-party links is at your own risk.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="analytics-and-third-party-services">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              7. Analytics and Third-Party Services
            </h2>
            <p className={bodyClass}>
              We may use third-party analytics services (such as Vercel Analytics) to understand how visitors use the Site. These services may collect anonymised usage data as described in our Privacy Policy. We do not use your data for automated decision-making or profiling in a way that significantly affects your rights or interests.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="disclaimers">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              8. Disclaimers
            </h2>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                8.1 No Warranties
              </h3>
              <p className={bodyClass}>
                The Site and all content on it are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. To the fullest extent permitted by law, InnoTech Systems disclaims all implied warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>
            <div className={subsectionBlockClass}>
              <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
                8.2 Availability
              </h3>
              <p className={bodyClass}>
                We do not guarantee that the Site will be available at all times or that access will be uninterrupted or error-free. We reserve the right to suspend, withdraw, or modify the Site at any time without notice.
              </p>
            </div>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="limitation-of-liability">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              9. Limitation of Liability
            </h2>
            <p className={bodyClass}>
              To the fullest extent permitted by applicable law, InnoTech Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of, or inability to use, the Site — including but not limited to loss of data, loss of revenue, or loss of business opportunity — even if InnoTech Systems has been advised of the possibility of such damages.
            </p>
            <p className={bodyClass}>
              Our total liability to you in connection with your use of the Site shall not exceed one hundred US dollars (USD $100).
            </p>
            <p className={bodyClass}>
              Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="indemnification">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              10. Indemnification
            </h2>
            <p className={bodyClass}>
              You agree to defend, indemnify, and hold harmless InnoTech Systems and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to your use of the Site or your violation of these Terms.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="governing-law-and-jurisdiction">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              11. Governing Law and Jurisdiction
            </h2>
            <p className={bodyClass}>
              These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Los Angeles County, California.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="changes-to-these-terms">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              12. Changes to These Terms
            </h2>
            <p className={bodyClass}>
              We reserve the right to update or modify these Terms at any time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page. Your continued use of the Site after any such changes constitutes your acceptance of the updated Terms. We recommend reviewing this page periodically.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="severability">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              13. Severability
            </h2>
            <p className={bodyClass}>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision will be modified to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="entire-agreement">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              14. Entire Agreement
            </h2>
            <p className={bodyClass}>
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and InnoTech Systems with respect to your use of the Site and supersede all prior agreements, representations, and understandings.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="contact-us">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              15. Contact Us
            </h2>
            <p className={bodyClass}>
              For questions, concerns, or requests relating to these Terms, please contact:
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>InnoTech Systems</strong><br />
              2834 Paraiso Way<br />
              La Crescenta-Montrose, CA 91214<br />
              United States
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Email:</strong>{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <strong style={textPrimaryStyle}>Web:</strong>{" "}
              <Link href="/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>https://innotech-sys.com/contact</Link>
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <p className="text-sm" style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
            © 2025 InnoTech Systems. All rights reserved.
          </p>
        </main>
        <LegalPageSidebar currentPage="terms" />
      </div>
    </div>
  )
}
