import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { OnThisPageNav } from "@/components/legal/on-this-page-nav"
import { LegalPageSidebar } from "@/components/legal/legal-page-sidebar"

export const metadata: Metadata = {
  title: "Privacy Policy — InnoTech Systems",
  description: "Privacy policy for InnoTech Systems website and how we handle your personal data.",
}

const sectionTitleClass = "text-2xl font-bold mt-10 mb-3 scroll-mt-32"
const subsectionTitleClass = "text-lg font-semibold mt-6 mb-2"
const bodyClass = "text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)] leading-relaxed mb-4"
const anchorClass = "underline hover:opacity-90"
const textPrimaryStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }
const textPrimaryDmStyle = { color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }
const tableWrapClass = "my-6 overflow-x-auto rounded-lg border border-[var(--it-light-border)]"
const tableClass = "w-full border-collapse text-left text-sm"
const thClass = "font-semibold py-3 px-4 border-b border-r border-[var(--it-light-border)] last:border-r-0 bg-[var(--it-light-surface-2)]"
const tdClass = "py-3 px-4 border-b border-[var(--it-light-border)] text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)]"

const sections = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "what-personal-data-we-collect", label: "2. What Personal Data We Collect" },
  { id: "legal-bases", label: "3. Legal Bases for Processing (GDPR)" },
  { id: "how-we-use-your-data", label: "4. How We Use Your Personal Data" },
  { id: "cookies-and-tracking", label: "5. Cookies and Tracking Technologies" },
  { id: "who-we-share-your-data-with", label: "6. Who We Share Your Data With" },
  { id: "international-data-transfers", label: "7. International Data Transfers" },
  { id: "your-rights", label: "8. Your Rights" },
  { id: "data-retention", label: "9. Data Retention" },
  { id: "data-security", label: "10. Data Security" },
  { id: "childrens-privacy", label: "11. Children's Privacy" },
  { id: "third-party-links", label: "12. Third-Party Links" },
  { id: "changes-to-this-policy", label: "13. Changes to This Policy" },
  { id: "contact-us", label: "14. Contact Us" },
]

export default function PrivacyPolicyPage() {
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
            <span style={{ color: "var(--it-light-text-primary)" }}>Privacy Policy</span>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-2xl mx-auto px-8 pt-16 pb-32 flex gap-12 lg:gap-16">
        <OnThisPageNav sections={sections} />
        <main className="min-w-0 flex-1 max-w-[680px]">
          <p className="mb-4">
            <span className="legal-ribbon">Legal</span>
          </p>
          <h1 className="text-4xl font-bold mb-4" style={textPrimaryStyle}>
            Privacy Policy
          </h1>
          <p className={`${bodyClass} mb-2`}>
            <strong style={textPrimaryStyle}>Effective Date:</strong> February 1, 2025<br />
            <strong style={textPrimaryStyle}>Last Updated:</strong> February 2025
          </p>
          <p className={bodyClass}>
            InnoTech Systems (&quot;InnoTech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains what personal data we collect, how we use it, who we share it with, and what rights you have over it.
          </p>
          <p className={bodyClass}>
            This policy applies to all personal data collected through our website at{" "}
            <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
              https://innotech-sys.com
            </a>{" "}
            (&quot;Site&quot;), including contact forms, demo requests, and any other interactions with our online presence.
          </p>
          <p className={bodyClass}>
            Please read this policy carefully. By using the Site, you acknowledge that you have read and understood how we handle your personal data. For information about cookies specifically, see our{" "}
            <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
              Cookie Policy
            </Link>.
          </p>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="who-we-are">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              1. Who We Are
            </h2>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>InnoTech Systems</strong> is an autonomous infrastructure company that develops charging, safety monitoring, and vehicle communication systems for industrial and commercial applications.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Registered Address:</strong><br />
              InnoTech Systems<br />
              2834 Paraiso Way<br />
              La Crescenta-Montrose, CA 91214<br />
              United States
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Data Controller Contact:</strong><br />
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <a href="https://innotech-sys.com/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">https://innotech-sys.com/contact</a>
            </p>
            <p className={bodyClass}>
              For the purposes of applicable data protection law — including the EU General Data Protection Regulation (GDPR) and the UK GDPR — InnoTech Systems is the <strong>data controller</strong> in respect of personal data collected through this Site.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="what-personal-data-we-collect">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              2. What Personal Data We Collect
            </h2>
            <p className={bodyClass}>
              We collect personal data in the following ways:
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              2.1 Data You Provide Directly
            </h3>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Contact Form Submissions</strong><br />
              When you submit an enquiry through our contact form, we collect: first and last name; business email address; company name; phone number (if provided); industry and area of interest (if selected); and the content of your message. This data is used solely to respond to your enquiry. It is not used for marketing unless you have separately opted in.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Demo and Consultation Requests</strong><br />
              When you request a product demonstration or site assessment, we collect the same fields as above, plus vehicle types or operational context you describe, and facility or deployment information you share voluntarily. This data is used to scope and prepare your demonstration. It may be shared with members of our sales and engineering teams who are involved in your consultation.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Email Correspondence</strong><br />
              If you contact us directly by email, we retain the content of that correspondence and any personal data contained within it for the purpose of handling your request and maintaining a record of our communication.
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              2.2 Data Collected Automatically
            </h3>
            <p className={bodyClass}>
              When you visit the Site, we and our third-party service providers automatically collect certain technical and behavioural data, including:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>IP address</strong> — used for security monitoring and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device type (desktop, tablet, mobile)</li>
              <li>Pages visited and time spent on each page</li>
              <li><strong>Referring URL</strong> — the page or link that brought you to our Site</li>
              <li>Date and time of visit</li>
            </ul>
            <p className={bodyClass}>
              This data is collected through cookies and analytics technologies. See our{" "}
              <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
                Cookie Policy
              </Link>{" "}
              for full details of the tools we use, including Google Analytics, Google Tag Manager, the Meta Pixel, and the LinkedIn Insight Tag.
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              2.3 Data from Third Parties
            </h3>
            <p className={bodyClass}>
              We may receive data about you from third-party sources, including: <strong>LinkedIn</strong> — aggregate demographic data about visitors who arrive via LinkedIn campaigns; <strong>Meta (Facebook)</strong> — aggregate audience and campaign performance data; <strong>Google</strong> — campaign and conversion data from Google Ads and Analytics. This data is received in aggregate or pseudonymised form and is used to measure the performance of our advertising campaigns.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="legal-bases">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              3. Legal Bases for Processing (GDPR)
            </h2>
            <p className={bodyClass}>
              If you are located in the European Economic Area (EEA), the United Kingdom, or another jurisdiction with similar data protection laws, we process your personal data on the following legal bases:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass} style={textPrimaryDmStyle}>Processing Activity</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Responding to contact form and demo requests</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — we have a legitimate interest in responding to business enquiries</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Sending follow-up sales communications where you have enquired</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — follow-up is reasonably expected when a business enquiry is submitted</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Website analytics (Google Analytics)</td>
                    <td className={tdClass}><strong>Consent</strong> — collected via cookie banner</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Marketing and advertising cookies (Meta Pixel, LinkedIn Insight Tag)</td>
                    <td className={tdClass}><strong>Consent</strong> — collected via cookie banner</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Security monitoring and fraud prevention</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — we have a legitimate interest in protecting our systems and users</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Compliance with legal obligations</td>
                    <td className={tdClass}><strong>Legal obligation</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={bodyClass}>
              Where we rely on <strong>consent</strong> as the legal basis, you may withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. To withdraw consent for cookies, use the Cookie Settings link in the Site footer.
            </p>
            <p className={bodyClass}>
              Where we rely on <strong>legitimate interests</strong>, you have the right to object to that processing. See Section 8 for how to exercise your rights.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="how-we-use-your-data">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              4. How We Use Your Personal Data
            </h2>
            <p className={bodyClass}>
              We use the personal data we collect for the following purposes:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>Responding to enquiries</strong> — to reply to messages submitted via contact forms or email</li>
              <li><strong>Scoping and delivering demos</strong> — to prepare and conduct product demonstrations and site assessments</li>
              <li><strong>Sales follow-up</strong> — to follow up on business enquiries where you have expressed interest in our products or services</li>
              <li><strong>Improving the Site</strong> — to understand how visitors use our Site and to improve content, structure, and performance</li>
              <li><strong>Advertising measurement</strong> — to measure the reach and effectiveness of campaigns on Google, LinkedIn, and Meta</li>
              <li><strong>Security</strong> — to detect, prevent, and respond to fraud, abuse, or security threats</li>
              <li><strong>Legal compliance</strong> — to comply with applicable laws, regulations, and lawful requests from public authorities</li>
            </ul>
            <p className={bodyClass}>
              We do not use your personal data for automated decision-making or profiling that produces legal or similarly significant effects on you.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="cookies-and-tracking">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              5. Cookies and Tracking Technologies
            </h2>
            <p className={bodyClass}>
              We use cookies and similar tracking technologies including Google Tag Manager, Google Analytics (GA4), the Meta Pixel, and the LinkedIn Insight Tag. These are described in full in our{" "}
              <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
                Cookie Policy
              </Link>
              , including the specific cookies set, their purposes, and their duration.
            </p>
            <p className={bodyClass}>
              You can manage your cookie preferences at any time via the <strong>Cookie Settings</strong> link in the footer of the Site. Analytics and marketing cookies will only be placed after you have given consent through the cookie banner.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="who-we-share-your-data-with">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              6. Who We Share Your Data With
            </h2>
            <p className={bodyClass}>
              We do not sell your personal data. We may share your data with the following categories of recipients:
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              6.1 Internal Teams
            </h3>
            <p className={bodyClass}>
              Your enquiry and contact data may be shared with members of our sales, engineering, and customer success teams for the purpose of responding to your request.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              6.2 Service Providers
            </h3>
            <p className={bodyClass}>
              We use third-party service providers to help operate the Site and deliver our services. These providers process data only on our behalf and under our instruction:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass} style={textPrimaryDmStyle}>Provider</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Service</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Vercel</td>
                    <td className={tdClass}>Website hosting and deployment</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Google (Analytics, Tag Manager)</td>
                    <td className={tdClass}>Analytics and tag management</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Meta (Facebook)</td>
                    <td className={tdClass}>Advertising measurement</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>LinkedIn</td>
                    <td className={tdClass}>Advertising measurement and audience insights</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              6.3 Legal and Regulatory Authorities
            </h3>
            <p className={bodyClass}>
              We may disclose personal data to law enforcement, regulatory bodies, or other authorities where required by law, or where we believe disclosure is necessary to protect the rights, property, or safety of InnoTech Systems, our customers, or the public.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              6.4 Business Transfers
            </h3>
            <p className={bodyClass}>
              If InnoTech Systems is involved in a merger, acquisition, asset sale, or similar transaction, personal data may be transferred as part of that transaction. We will notify you via a notice on the Site if your data is transferred and becomes subject to a different privacy policy.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="international-data-transfers">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              7. International Data Transfers
            </h2>
            <p className={bodyClass}>
              InnoTech Systems is based in the United States. If you are accessing the Site from the EEA, the UK, or another jurisdiction with data transfer restrictions, your personal data may be transferred to and processed in the United States, which may not provide the same level of data protection as your home jurisdiction.
            </p>
            <p className={bodyClass}>
              Where we transfer data from the EEA or UK to the United States or other third countries, we rely on appropriate safeguards, which may include: <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission; <strong>UK International Data Transfer Agreements (IDTAs)</strong> where applicable; and transfers to organisations that participate in recognised adequacy frameworks.
            </p>
            <p className={bodyClass}>
              Our third-party providers (Google, Meta, LinkedIn) have their own international transfer mechanisms documented in their respective privacy policies.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="your-rights">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              8. Your Rights
            </h2>
            <p className={bodyClass}>
              Depending on your location, you have the following rights in relation to your personal data:
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Rights under GDPR (EEA and UK residents)
            </h3>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass} style={textPrimaryDmStyle}>Right</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}><strong>Right of access</strong></td>
                    <td className={tdClass}>Request a copy of the personal data we hold about you</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to rectification</strong></td>
                    <td className={tdClass}>Request correction of inaccurate or incomplete data</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to erasure</strong></td>
                    <td className={tdClass}>Request deletion of your personal data where we have no lawful reason to retain it</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to restriction</strong></td>
                    <td className={tdClass}>Request that we limit how we use your data in certain circumstances</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to data portability</strong></td>
                    <td className={tdClass}>Request your data in a structured, machine-readable format</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to object</strong></td>
                    <td className={tdClass}>Object to processing based on legitimate interests or for direct marketing purposes</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to withdraw consent</strong></td>
                    <td className={tdClass}>Withdraw consent at any time where consent is the legal basis for processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              Rights under California Law (CCPA/CPRA)
            </h3>
            <p className={bodyClass}>
              California residents have additional rights under the California Consumer Privacy Act and California Privacy Rights Act, including: the right to know what personal information is collected, used, shared, or sold; the right to delete personal information; the right to opt out of the sale or sharing of personal information; and the right to non-discrimination for exercising privacy rights.
            </p>
            <p className={bodyClass}>
              <strong>We do not sell or share personal information for cross-context behavioural advertising</strong> as defined under California law, except where you have consented to marketing cookies via the cookie banner.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              How to Exercise Your Rights
            </h3>
            <p className={bodyClass}>
              To exercise any of the rights listed above, contact us at:
            </p>
            <p className={bodyClass}>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <strong>Web:</strong>{" "}
              <a href="https://innotech-sys.com/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">https://innotech-sys.com/contact</a>
            </p>
            <p className={bodyClass}>
              We will respond to all requests within <strong>30 days</strong>. We may need to verify your identity before processing certain requests. We will not charge a fee for reasonable requests.
            </p>
            <p className={bodyClass}>
              If you are located in the EEA or UK and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority. For EU residents, a list of supervisory authorities is available at{" "}
              <a href="https://edpb.europa.eu" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>. For UK residents, the relevant authority is the Information Commissioner&apos;s Office at{" "}
              <a href="https://ico.org.uk" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="data-retention">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              9. Data Retention
            </h2>
            <p className={bodyClass}>
              We retain personal data only for as long as necessary for the purposes set out in this policy, unless a longer retention period is required by law.
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass} style={textPrimaryDmStyle}>Data Type</th>
                    <th className={thClass} style={textPrimaryDmStyle}>Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Contact form and demo request data</td>
                    <td className={tdClass}>3 years from last interaction, or until deletion is requested</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Email correspondence</td>
                    <td className={tdClass}>3 years from last interaction</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Analytics data (Google Analytics)</td>
                    <td className={tdClass}>14 months (configured in GA4 settings)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Marketing audience data (Meta, LinkedIn)</td>
                    <td className={tdClass}>As determined by each platform&apos;s data retention policies</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Security and access logs</td>
                    <td className={tdClass}>12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={bodyClass}>
              After the applicable retention period, data is securely deleted or anonymised so it can no longer be associated with you.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="data-security">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              10. Data Security
            </h2>
            <p className={bodyClass}>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or disclosure. These measures include: encryption of data in transit using TLS; access controls limiting data access to authorised personnel only; regular review of our security practices and third-party providers; and secure hosting infrastructure through Vercel.
            </p>
            <p className={bodyClass}>
              While we take reasonable precautions, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we will notify you and relevant authorities promptly in the event of a data breach that poses a risk to your rights and freedoms, as required by law.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="childrens-privacy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              11. Children&apos;s Privacy
            </h2>
            <p className={bodyClass}>
              Our Site and services are directed at business professionals and are not intended for use by anyone under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected information from a child, please contact us at{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="third-party-links">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              12. Third-Party Links
            </h2>
            <p className={bodyClass}>
              The Site may contain links to third-party websites, including partner sites, industry resources, and social media platforms. These sites operate under their own privacy policies, which we encourage you to review. We are not responsible for the content or privacy practices of any third-party website.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="changes-to-this-policy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              13. Changes to This Policy
            </h2>
            <p className={bodyClass}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, the technologies we use, or applicable law. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page. Where required by law, we will notify you more prominently or seek your consent.
            </p>
            <p className={bodyClass}>
              We encourage you to review this policy periodically. Your continued use of the Site after changes are posted constitutes your acknowledgment of the updated policy.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="contact-us">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              14. Contact Us
            </h2>
            <p className={bodyClass}>
              For any questions, concerns, or requests relating to this Privacy Policy or the personal data we hold about you, please contact:
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>InnoTech Systems</strong><br />
              2834 Paraiso Way<br />
              La Crescenta-Montrose, CA 91214<br />
              United States
            </p>
            <p className={bodyClass}>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <strong>Web:</strong>{" "}
              <a href="https://innotech-sys.com/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">https://innotech-sys.com/contact</a>
            </p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-it-light-border" style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
            © 2025 InnoTech Systems. All rights reserved.
          </p>
        </main>
        <LegalPageSidebar currentPage="privacy" />
      </div>
    </div>
  )
}
