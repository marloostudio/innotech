import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { legalBreadcrumbWrapClass, legalContentRowClass, legalMainClass } from "@/components/legal/legal-layout"
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
const blockquoteClass = "my-6 border-l-[3px] pl-4 py-1 text-sm italic"

const sections = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "scope-of-this-policy", label: "2. Scope of This Policy" },
  { id: "what-personal-data-we-collect", label: "3. What Personal Data We Collect" },
  { id: "how-we-use-your-data", label: "4. How We Use Your Personal Data" },
  { id: "legal-bases", label: "5. Legal Bases for Processing" },
  { id: "cookies-and-tracking", label: "6. Cookies and Tracking Technologies" },
  { id: "email-and-marketing", label: "7. Email and Marketing Communications" },
  { id: "who-we-share-your-data-with", label: "8. Who We Share Your Data With" },
  { id: "international-data-transfers", label: "9. International Data Transfers" },
  { id: "your-rights", label: "10. Your Rights" },
  { id: "data-retention", label: "11. Data Retention" },
  { id: "data-security", label: "12. Data Security" },
  { id: "childrens-privacy", label: "13. Children's Privacy" },
  { id: "third-party-links", label: "14. Third-Party Links" },
  { id: "changes-to-this-policy", label: "15. Changes to This Policy" },
  { id: "contact-us", label: "16. Contact Us" },
]

export default function PrivacyPolicyPage() {
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
            <span style={{ color: "var(--it-light-text-primary)" }}>Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className={`${bodyClass} mb-2`}>
            <strong style={textPrimaryStyle}>Effective Date:</strong> February 1, 2025<br />
            <strong style={textPrimaryStyle}>Last Updated:</strong> June 17, 2026
          </p>
          <p className={bodyClass}>
            InnoTech Systems (&quot;InnoTech,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains what personal data we collect, how we use it, who we share it with, how long we keep it, and what rights you have over it.
          </p>
          <p className={bodyClass}>
            This policy applies to all personal data collected through our website at{" "}
            <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
              https://innotech-sys.com
            </a>{" "}
            (the &quot;Site&quot;), including our contact form, demo and consultation requests, event registration forms, and any other interactions with our online presence.
          </p>
          <p className={bodyClass}>
            Please read this policy carefully. For information about cookies specifically, see our{" "}
            <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
              Cookie Policy
            </Link>
            . For the terms governing your use of the Site, see our{" "}
            <Link href="/legal/terms" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
              Terms of Service
            </Link>
            .
          </p>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="who-we-are">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              1. Who We Are
            </h2>
            <p className={bodyClass}>
              InnoTech Systems is an autonomous infrastructure company that develops charging, safety monitoring, and vehicle communication systems for industrial and commercial applications.
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
              Email:{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              Web:{" "}
              <a href="https://innotech-sys.com/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">https://innotech-sys.com/contact</a>
            </p>
            <p className={bodyClass}>
              For the purposes of applicable data protection law — including the EU General Data Protection Regulation (GDPR) and the UK GDPR — InnoTech Systems is the <strong>data controller</strong> in respect of personal data collected through this Site.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="scope-of-this-policy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              2. Scope of This Policy
            </h2>
            <p className={bodyClass}>
              This policy governs personal data collected through the <strong>Site</strong> only.
            </p>
            <p className={bodyClass}>
              It does <strong>not</strong> govern personal or operational data processed through InnoTech products, hardware, or services (including our charging, safety monitoring, and vehicle communication systems), which — where applicable — are covered by separate product documentation, customer agreements, and data processing terms. If you are a customer or operator of an InnoTech product, please refer to the agreement and any product-specific privacy notice provided to you.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="what-personal-data-we-collect">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              3. What Personal Data We Collect
            </h2>
            <p className={bodyClass}>
              We collect personal data in the following ways.
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              3.1 Data You Provide Directly
            </h3>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Contact Form Submissions</strong><br />
              When you submit an enquiry through our contact form, we collect:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Full name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Phone number (if provided)</li>
              <li>Industry (as selected in the form)</li>
              <li>Area of interest (as selected in the form)</li>
              <li>The content of your message</li>
            </ul>
            <p className={bodyClass}>
              This data is used to respond to your enquiry and for related business follow-up. See Sections 4 and 5 for the purposes and legal bases.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Demo and Consultation Requests</strong><br />
              When you request a product demonstration or consultation, we collect:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Full name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Phone number (if provided)</li>
              <li>Industry (as selected in the form)</li>
              <li>Area of interest (as selected in the form)</li>
              <li>Any message you choose to provide</li>
            </ul>
            <p className={bodyClass}>
              This data is used to schedule, prepare, and conduct your demonstration or consultation, and for related sales follow-up. It may be shared internally with members of our sales, engineering, and solutions teams involved in your request.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Event Registration and Intake (including Automate 2026)</strong><br />
              When you express interest in, or register through, our event pages (including the Automate 2026 intake form), we collect:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Full name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Job title (if provided)</li>
              <li>Organization type (as selected in the form)</li>
              <li>Your role within the organization (as selected in the form)</li>
              <li>Any message or specific areas of interest you choose to provide</li>
            </ul>
            <p className={bodyClass}>
              This data is used to manage event communications, coordinate your participation, follow up on your interest in our products and solutions, and maintain a record of your engagement. It is processed through our email, CRM, and database systems as described in Section 8.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Email Correspondence</strong><br />
              If you contact us directly by email, we retain the content of that correspondence, and any personal data within it, to handle your request and maintain a record of our communication.
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>Anti-Spam Field</strong><br />
              Our forms include a hidden anti-spam (&quot;honeypot&quot;) field. It is not visible to you and is not intended to be completed. If it is completed (which typically indicates an automated submission), the submission may be silently discarded. We do not use this field to collect personal data.
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              3.2 Technical and Session Data Sent With Form Submissions
            </h3>
            <p className={bodyClass}>
              When you submit <strong>any</strong> form on the Site (contact, demo/consultation, or event intake), our hosting infrastructure and web application process additional technical information beyond the fields you type. This enrichment applies to every form submission on the Site and may include:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>The page URL you were on when you submitted, which may include marketing parameters such as UTM tags</li>
              <li>The referring page or site your browser reported</li>
              <li>Your approximate public IP address (including, where present, the forwarded-for address chain) and, where available, a reverse DNS name for that address</li>
              <li>Your browser or client user-agent string</li>
              <li>Language preferences (Accept-Language)</li>
              <li>The hostname, protocol, and origin used to reach the Site</li>
              <li>A request identifier generated by our hosting provider</li>
              <li>Approximate location signals (such as country, region, or city) derived at the network edge by our hosting provider</li>
              <li>The domain portion of the business email you submit, from which we may infer a likely company website (we do not infer a website from free or personal email providers)</li>
            </ul>
            <p className={bodyClass}>
              We use this information to deliver form notifications reliably, reduce abuse and fraud, route enquiries internally, and understand which campaigns or pages drive enquiries. We apply data-minimization and retention controls to this technical data (see Section 11) and do not use it to make automated decisions that produce legal or similarly significant effects on you.
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              3.3 Data Collected Automatically When You Browse the Site
            </h3>
            <p className={bodyClass}>
              When you browse the Site, we and our service providers may automatically collect certain technical and behavioural data through cookies and similar technologies, including:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>IP address (used for security monitoring and approximate geographic location)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device type (desktop, tablet, mobile)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URL</li>
              <li>Date and time of visit</li>
              <li>Variant assignment for any on-site A/B testing</li>
            </ul>
            <p className={bodyClass}>
              The specific technologies we use — including Google Tag Manager, Google Analytics (GA4), HubSpot tracking, Vercel Analytics, the Meta Pixel, and the LinkedIn Insight Tag — and the cookies they set are described in Sections 6 and 8 and in full in our{" "}
              <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
                Cookie Policy
              </Link>
              .
            </p>

            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              3.4 Data We Receive From Third Parties
            </h3>
            <p className={bodyClass}>
              We may receive data about you from third-party sources, generally in aggregate or pseudonymised form, including:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>LinkedIn</strong> — aggregate demographic and campaign data about visitors who arrive via LinkedIn campaigns</li>
              <li><strong>Meta (Facebook)</strong> — aggregate audience and campaign performance data</li>
              <li><strong>Google</strong> — campaign and conversion data from Google Ads and Analytics</li>
            </ul>
            <p className={bodyClass}>
              This data is used to measure the performance of our advertising campaigns.
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
              <li><strong>Responding to enquiries</strong> — replying to messages submitted via the contact, demo, or event forms, including sending email confirmations and internal lead notifications</li>
              <li><strong>Scoping and delivering demos and consultations</strong> — preparing and conducting product demonstrations and related follow-up</li>
              <li><strong>CRM and sales pipeline management</strong> — creating and maintaining records of your enquiry or event interest in our customer relationship management (CRM) system so our team can provide timely, relevant follow-up</li>
              <li><strong>Event coordination and follow-up</strong> — managing registrations, interest, and communications related to industry events such as Automate 2026</li>
              <li><strong>Sales follow-up</strong> — following up on business enquiries where you have expressed interest in our products or services</li>
              <li><strong>Improving and optimizing the Site</strong> — understanding how visitors use the Site (including A/B testing) and improving its content, structure, and performance</li>
              <li><strong>Advertising measurement</strong> — measuring the reach and effectiveness of campaigns on Google, LinkedIn, and Meta</li>
              <li><strong>Security and fraud prevention</strong> — detecting, preventing, and responding to fraud, abuse, or security threats</li>
              <li><strong>Legal compliance</strong> — complying with applicable laws, regulations, and lawful requests from public authorities</li>
            </ul>
            <p className={bodyClass}>
              We do not use your personal data for automated decision-making or profiling that produces legal or similarly significant effects on you.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="legal-bases">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              5. Legal Bases for Processing (GDPR / UK GDPR)
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
                    <td className={tdClass}>Responding to contact, demo, and event enquiries</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — responding to business enquiries; and/or <strong>pre-contractual steps</strong> where a demonstration, consultation, or event participation has been requested</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Processing technical and session data submitted with a form (IP, referrer, user agent, campaign URL, edge geo, etc.)</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — operating the Site, securing submissions, routing enquiries, and measuring campaign effectiveness</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>CRM contact creation, enrichment, and internal sales pipeline management (HubSpot)</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — efficient management of business enquiries and development of our sales pipeline; <strong>pre-contractual steps</strong> where a demo, consultation, or event participation has been requested</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Storage and management of event interest/registration data (Supabase)</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — coordinating event participation and responding to expressed interest in our products and solutions</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Sending follow-up sales communications where you have enquired</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — follow-up is reasonably expected when a business enquiry is submitted (subject to your right to object and to opt out of marketing at any time)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Core site analytics and performance measurement (including Vercel Analytics and A/B testing)</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> for core site operation and optimization; <strong>Consent</strong> for any non-essential analytics or marketing cookies — see Section 6</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Marketing and advertising cookies/pixels (Meta Pixel, LinkedIn Insight Tag) and non-essential analytics (Google Analytics, HubSpot tracking)</td>
                    <td className={tdClass}><strong>Consent</strong> — obtained via our cookie consent mechanism in the EEA/UK before such technologies are loaded</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Security monitoring and fraud prevention</td>
                    <td className={tdClass}><strong>Legitimate interests</strong> — protecting our systems and users</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Compliance with legal obligations</td>
                    <td className={tdClass}><strong>Legal obligation</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={bodyClass}>
              Where we rely on <strong>consent</strong>, you may withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal. To withdraw consent for cookies, use the <strong>Cookie Settings</strong> link in the Site footer.
            </p>
            <p className={bodyClass}>
              Where we rely on <strong>legitimate interests</strong>, you have the right to object to that processing. See Section 10 for how to exercise your rights.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="cookies-and-tracking">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              6. Cookies and Tracking Technologies
            </h2>
            <p className={bodyClass}>
              We use cookies and similar technologies to operate and secure the Site, analyze usage, optimize content (including A/B testing), and measure the effectiveness of our marketing campaigns. The primary technologies we use are:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>Google Tag Manager</strong> — a tag container that may load Google Analytics (GA4), the Meta Pixel, and the LinkedIn Insight Tag</li>
              <li><strong>HubSpot tracking scripts</strong> — visitor identification, behaviour analysis, and CRM integration</li>
              <li><strong>Vercel Analytics</strong> — anonymous, aggregate pageview and performance measurement (generally cookieless)</li>
              <li><strong>First-party cookies</strong> for A/B testing and functional purposes</li>
              <li>During the pre-launch period, a <strong>preview authentication cookie</strong> used to restrict access to non-public pages</li>
            </ul>
            <p className={bodyClass}>
              Full details of the specific cookies set, their providers, purposes, durations, and categories are in our{" "}
              <Link href="/legal/cookie-policy" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
                Cookie Policy
              </Link>
              .
            </p>
            <p className={bodyClass}>
              <strong style={textPrimaryStyle}>How consent works depends on your location:</strong>
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>EEA and UK visitors:</strong> Non-essential analytics and marketing cookies are placed <strong>only after you have given consent</strong> through our cookie banner. You may change your choices at any time via the <strong>Cookie Settings</strong> link in the footer. Strictly necessary cookies are always active.</li>
              <li><strong>United States (including California) visitors:</strong> We may place analytics and advertising cookies on an <strong>opt-out</strong> basis. You can opt out of advertising-related &quot;sharing&quot; via the <strong>&quot;Do Not Sell or Share My Personal Information&quot;</strong> link in the footer, and we honor <strong>Global Privacy Control (GPC)</strong> signals where technically feasible. See Section 10.</li>
            </ul>
            <blockquote className={blockquoteClass} style={{ borderColor: "var(--it-light-blue)", color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
              <strong>Implementation note (remove before public launch):</strong> Consent gating and the Cookie Settings link must be live in code before the cookie-based statements above are accurate. Do not publish this section as written until the consent management mechanism is deployed, or revise the language to match the Site&apos;s actual behaviour in the interim.
            </blockquote>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="email-and-marketing">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              7. Email and Marketing Communications
            </h2>
            <p className={bodyClass}>
              When we send you email — including confirmations, responses to your enquiry, and any sales follow-up — we do so in reliance on the legal bases in Section 5 and in accordance with applicable email and anti-spam laws.
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Marketing emails include a clear <strong>unsubscribe</strong> mechanism and our postal address, consistent with the U.S. CAN-SPAM Act. You can opt out of marketing communications at any time, without affecting transactional messages necessary to handle your request.</li>
              <li>Where we send commercial electronic messages to recipients in Canada, we do so in accordance with Canada&apos;s Anti-Spam Legislation (CASL), relying on express or implied consent (including implied consent arising from a business enquiry, which is time-limited under CASL), and we include the sender identification and unsubscribe mechanism CASL requires.</li>
            </ul>
            <p className={bodyClass}>
              To stop receiving marketing communications, use the unsubscribe link in any marketing email or contact us at{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a>.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="who-we-share-your-data-with">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              8. Who We Share Your Data With
            </h2>
            <p className={bodyClass}>
              We do <strong>not</strong> sell your personal data. We may share it with the following categories of recipients.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              8.1 Internal Teams
            </h3>
            <p className={bodyClass}>
              Your enquiry, demo, and event data may be shared with members of our sales, engineering, solutions, and customer success teams for the purpose of responding to and following up on your request.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              8.2 Service Providers (Processors)
            </h3>
            <p className={bodyClass}>
              We use third-party service providers to operate the Site and deliver our services. These providers process data only on our behalf and under our instructions, subject to data processing agreements.
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
                    <td className={tdClass}><strong>Vercel</strong></td>
                    <td className={tdClass}>Website hosting, content delivery, edge routing, and serverless functions</td>
                    <td className={tdClass}>United States (corporate); processing region: <strong>[CONFIRM: actual deployment region, e.g., Canada]</strong></td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Resend</strong></td>
                    <td className={tdClass}>Delivery of transactional email (confirmations to you and lead notifications to our team)</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>HubSpot</strong></td>
                    <td className={tdClass}>Customer relationship management (CRM), contact and lead management, sales pipeline, and website visitor analytics/tracking</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Supabase</strong></td>
                    <td className={tdClass}>Secure database storage for event registration and interest records</td>
                    <td className={tdClass}><strong>[CONFIRM: Supabase project region]</strong></td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Google</strong> (Analytics, Tag Manager)</td>
                    <td className={tdClass}>Analytics and tag management (Google Analytics is loaded via Google Tag Manager)</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Meta (Facebook)</strong></td>
                    <td className={tdClass}>Advertising measurement (loaded via Google Tag Manager)</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>LinkedIn</strong></td>
                    <td className={tdClass}>Advertising measurement and audience insights (loaded via Google Tag Manager)</td>
                    <td className={tdClass}>United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              8.3 Legal and Regulatory Authorities
            </h3>
            <p className={bodyClass}>
              We may disclose personal data to law enforcement, regulators, or other authorities where required by law, or where we believe disclosure is necessary to protect the rights, property, or safety of InnoTech Systems, our customers, or the public.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              8.4 Business Transfers
            </h3>
            <p className={bodyClass}>
              If InnoTech Systems is involved in a merger, acquisition, asset sale, or similar transaction, personal data may be transferred as part of that transaction. We will notify you via a notice on the Site if your data becomes subject to a different privacy policy.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="international-data-transfers">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              9. International Data Transfers
            </h2>
            <p className={bodyClass}>
              InnoTech Systems is based in the United States, and several of our service providers are located in the United States or other countries.
            </p>
            <p className={bodyClass}>
              If you submit personal data to us from the EEA, the UK, or another jurisdiction with data-transfer restrictions, that data is provided directly to a U.S.-based controller. Where we subsequently share your data with service providers located outside your home jurisdiction, those onward disclosures are subject to appropriate safeguards, which may include:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission</li>
              <li><strong>UK International Data Transfer Agreements (IDTAs)</strong> or the UK Addendum, where applicable</li>
              <li>Reliance on a recognised <strong>adequacy framework</strong> (such as the EU–U.S. Data Privacy Framework) where a given provider is certified</li>
            </ul>
            <p className={bodyClass}>
              We assess the transfer mechanisms used by our providers and apply supplementary measures where appropriate. <strong>[CONFIRM: which providers rely on Data Privacy Framework certification versus SCCs, and document a transfer impact assessment.]</strong> Our providers (including Google, Meta, LinkedIn, Vercel, HubSpot, and Supabase) also maintain their own international transfer mechanisms, documented in their respective privacy policies.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="your-rights">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              10. Your Rights
            </h2>
            <p className={bodyClass}>
              Depending on your location, you have the following rights in relation to your personal data.
            </p>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              10.1 Rights Under GDPR / UK GDPR (EEA and UK residents)
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
                    <td className={tdClass}>Object to processing based on legitimate interests, or to direct marketing at any time</td>
                  </tr>
                  <tr>
                    <td className={tdClass}><strong>Right to withdraw consent</strong></td>
                    <td className={tdClass}>Withdraw consent at any time where consent is the legal basis for processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              10.2 Rights Under California Law (CCPA / CPRA)
            </h3>
            <p className={bodyClass}>
              California residents have the right to:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li><strong>Know</strong> what personal information is collected, used, shared, or disclosed</li>
              <li><strong>Delete</strong> personal information, subject to legal exceptions</li>
              <li><strong>Correct</strong> inaccurate personal information</li>
              <li><strong>Opt out</strong> of the &quot;sale&quot; or &quot;sharing&quot; of personal information for cross-context behavioural advertising</li>
              <li><strong>Limit</strong> the use of sensitive personal information (we do not use sensitive personal information for purposes that trigger this right)</li>
              <li><strong>Non-discrimination</strong> for exercising your privacy rights</li>
            </ul>
            <p className={bodyClass}>
              We do <strong>not</strong> sell personal information. We may &quot;<strong>share</strong>&quot; personal information for cross-context behavioural advertising through advertising cookies and pixels (the Meta Pixel and LinkedIn Insight Tag, loaded via Google Tag Manager). You can opt out of such sharing by:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Using the <strong>&quot;Do Not Sell or Share My Personal Information&quot;</strong> link in the Site footer, and/or</li>
              <li>Enabling a <strong>Global Privacy Control (GPC)</strong> signal in your browser, which we honor where technically feasible.</li>
            </ul>
            <h3 className={subsectionTitleClass} style={textPrimaryDmStyle}>
              10.3 How to Exercise Your Rights
            </h3>
            <p className={bodyClass}>
              To exercise any of these rights, contact us at:
            </p>
            <p className={bodyClass}>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a><br />
              <strong>Web:</strong>{" "}
              <a href="https://innotech-sys.com/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">https://innotech-sys.com/contact</a>
            </p>
            <p className={bodyClass}>
              We will respond within the timeframes required by applicable law — generally within <strong>45 days</strong> under the CCPA/CPRA (extendable by a further 45 days where permitted) and within <strong>one month</strong> under the GDPR/UK GDPR (extendable by up to two further months for complex requests). We may need to verify your identity before processing certain requests, and we will tell you if we need an extension. You may also use an authorised agent to submit a request on your behalf, subject to verification. We will not charge a fee for reasonable requests or discriminate against you for exercising your rights.
            </p>
            <p className={bodyClass}>
              If you are in the EEA or UK and are not satisfied with our response, you have the right to lodge a complaint with your local supervisory authority. For EU residents, a list is available at{" "}
              <a href="https://edpb.europa.eu" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>. For UK residents, the relevant authority is the Information Commissioner&apos;s Office at{" "}
              <a href="https://ico.org.uk" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="data-retention">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              11. Data Retention
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
                    <td className={tdClass}>Contact, demo, and event intake data, including associated HubSpot CRM records and notes</td>
                    <td className={tdClass}>3 years from last interaction, or until deletion is requested</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Event registration and interest data stored in our database (Supabase)</td>
                    <td className={tdClass}>3 years from last interaction, or until the relevant event concludes plus a reasonable follow-up period, whichever is longer; or until deletion is requested</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Email correspondence</td>
                    <td className={tdClass}>3 years from last interaction</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Transactional email records (Resend)</td>
                    <td className={tdClass}>As necessary to deliver and audit messages, then deleted or governed by the provider&apos;s retention policy</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Technical/session enrichment data stored with submissions</td>
                    <td className={tdClass}>Minimized and retained no longer than necessary for fraud prevention and attribution <strong>[CONFIRM: specific period, e.g., 12–24 months]</strong></td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Analytics data (Google Analytics)</td>
                    <td className={tdClass}>14 months (configured in GA4)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Marketing audience data (Meta, LinkedIn)</td>
                    <td className={tdClass}>As determined by each platform&apos;s retention policies</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Security and access logs (including Vercel logs)</td>
                    <td className={tdClass}>12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={bodyClass}>
              After the applicable retention period, data is securely deleted or anonymised so it can no longer be associated with you. When you request erasure, we action the request across our systems, including Resend, HubSpot, Supabase, our hosting logs, and internal mailboxes holding forwarded enquiry data, subject to legal retention exceptions.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="data-security">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              12. Data Security
            </h2>
            <p className={bodyClass}>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or disclosure. These measures include:
            </p>
            <ul className={`${bodyClass} list-disc pl-6 space-y-1`} style={{ color: "var(--it-light-text-muted)" }}>
              <li>Encryption of data in transit using TLS (including between the Site, our service providers, and email infrastructure)</li>
              <li>Access controls limiting data access to authorised personnel only</li>
              <li>Anti-spam and abuse controls on our forms</li>
              <li>Regular review of our security practices and third-party providers</li>
              <li>Secure hosting infrastructure through Vercel</li>
            </ul>
            <p className={bodyClass}>
              While we take reasonable precautions, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we will notify you and the relevant authorities promptly in the event of a data breach that poses a risk to your rights and freedoms, as required by applicable law.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="childrens-privacy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              13. Children&apos;s Privacy
            </h2>
            <p className={bodyClass}>
              The Site and our services are directed at business professionals and are not intended for use by anyone under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected information from a child, please contact us at{" "}
              <a href="mailto:info@innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>info@innotech-sys.com</a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="third-party-links">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              14. Third-Party Links
            </h2>
            <p className={bodyClass}>
              The Site may contain links to third-party websites, including partner sites, industry resources, and social media platforms. These sites operate under their own privacy policies, which we encourage you to review. We are not responsible for the content or privacy practices of any third-party website.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="changes-to-this-policy">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              15. Changes to This Policy
            </h2>
            <p className={bodyClass}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, the technologies we use, or applicable law. When we make material changes, we will update the &quot;Last Updated&quot; date above. Where required by law, we will notify you more prominently or seek your consent. We encourage you to review this policy periodically.
            </p>
          </section>

          <hr className="my-8 border-t" style={{ borderColor: "var(--it-light-border)" }} />

          <section id="contact-us">
            <h2 className={sectionTitleClass} style={textPrimaryStyle}>
              16. Contact Us
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
            © 2026 InnoTech Systems. All rights reserved.
          </p>
        </main>
        <LegalPageSidebar currentPage="privacy" />
      </div>
    </div>
  )
}
