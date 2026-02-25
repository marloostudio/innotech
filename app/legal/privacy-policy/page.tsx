import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — InnoTech Systems",
  description: "Privacy policy for InnoTech Systems website and how we handle your personal data.",
}

const sectionTitleClass = "text-2xl font-bold mt-10 mb-3"
const bodyClass = "text-[var(--it-light-text-muted)] font-[var(--font-dm-sans)] leading-relaxed mb-4"
const anchorClass = "underline hover:opacity-90"

export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
      style={{ background: "var(--it-light-bg)" }}
    >
      <p
        className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}
      >
        Legal
      </p>
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
      >
        Privacy Policy
      </h1>

      <section>
        <h2 className={sectionTitleClass} style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
          Who we are
        </h2>
        <p className={bodyClass}>
          Our website address is:{" "}
          <a href="https://innotech-sys.com" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
            https://innotech-sys.com
          </a>.
        </p>
      </section>

      <section>
        <h2 className={sectionTitleClass} style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
          What personal data we collect and why we collect it
        </h2>
        <p className={bodyClass}>
          When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection.
        </p>
        <p className={bodyClass}>
          An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{" "}
          <a href="https://automattic.com/privacy/" className={anchorClass} style={{ color: "var(--it-light-blue)" }} target="_blank" rel="noopener noreferrer">
            https://automattic.com/privacy/
          </a>
          . After approval of your comment, your profile picture is visible to the public in the context of your comment.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }}>
          Media
        </h3>
        <p className={bodyClass}>
          If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }}>
          Contact forms
        </h3>
        <p className={bodyClass}>
          Data you submit through contact forms is used only to respond to your enquiry and is not used for marketing unless you have given consent.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }}>
          Cookies
        </h3>
        <p className={bodyClass}>
          If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
        </p>
        <p className={bodyClass}>
          If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
        </p>
        <p className={bodyClass}>
          When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
        </p>
        <p className={bodyClass}>
          If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }}>
          Embedded content from other websites
        </h3>
        <p className={bodyClass}>
          Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
        </p>
        <p className={bodyClass}>
          These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans)" }}>
          Analytics
        </h3>
        <p className={bodyClass}>
          We may use analytics services to understand how visitors use our site. Data collected is used in aggregate and in accordance with this policy and our cookie notice.
        </p>
      </section>

      <section>
        <h2 className={sectionTitleClass} style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
          How long we retain your data
        </h2>
        <p className={bodyClass}>
          If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
        </p>
        <p className={bodyClass}>
          For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
        </p>
      </section>

      <section>
        <h2 className={sectionTitleClass} style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
          What rights you have over your data
        </h2>
        <p className={bodyClass}>
          If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
        </p>
      </section>

      <section>
        <h2 className={sectionTitleClass} style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
          Where we send your data
        </h2>
        <p className={bodyClass}>
          Visitor comments may be checked through an automated spam detection service.
        </p>
      </section>

      <p className="text-sm mt-12 pt-8 border-t border-it-light-border" style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Last updated: February 2025. For questions,{" "}
        <Link href="/contact" className={anchorClass} style={{ color: "var(--it-light-blue)" }}>
          contact us
        </Link>.
      </p>
    </main>
  )
}
