# Website updates — owner overview

Short notes for **site owner / marketing** (not a technical changelog). Dates match when changes were **implemented and deployed** (release history). Assumes the latest build is live.

---

## April 20, 2026

- **Careers —** Removed fake sample job postings; the site now says you are **not hiring right now** and points people to **Contact** if they still want to reach out.
- **Open roles page —** Title and description updated so they match that “not actively hiring” message.
- **Contact page —** Working **contact form** (validation and server-side handling).
- **Automate 2026 —** New **event landing page** with show details and an **interest form** for leads.
- **Thank-you page —** After a successful submission, visitors can land on a dedicated **thank-you** page.
- **Home page —** New **Automate 2026** strip **under the hero** (dates, location, booth) with a link to the full event page.
- **Email to visitors —** Submitters receive a **confirmation** that their message was received (contact and Automate flows).
- **Email to your team —** Internal **copies of leads** can be sent to any inbox you choose via the **`LEADS_NOTIFY_EMAIL`** setting (no code change needed to switch addresses).
- **Sending domain —** Outbound mail uses **Resend**; the “From” address should use a **domain verified** in Resend so delivery stays reliable.
- **Google Tag Manager —** You can turn on **GTM** with a container ID in settings, then manage tags in Google’s tool without redeploying for every small change.
- **SEO —** **`sitemap.xml`** lists public pages; **`robots.txt`** tells search engines where the sitemap is.
- **Canonical URL —** Production should set the public site URL so sitemap links match your real domain (your technical contact handles this).
- **This document —** Owner-facing summary of the above (for your records).

---

## One-line “what’s new” (optional)

> We updated careers messaging, launched contact and Automate interest forms with confirmations, added an Automate highlight on the home page, improved SEO discovery, and enabled optional analytics via Google Tag Manager.

---

*For developer-facing version history, see `CHANGELOG.md` and git commits.*
