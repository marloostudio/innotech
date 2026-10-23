# Website updates — owner overview

Short notes for **site owner / marketing** (not a technical changelog). Each entry states its release status when known; a repository update does not by itself confirm a production deployment.

## October 21, 2026 — repository update

- **Safety wording —** The home FAQ and SafeGuard page now say the products are designed to meet the listed standards. They state that official third-party certification is in progress and the products are not yet safety certified. The SafeGuard card is titled **Functional Safety Architecture**.
- **Automate 2026 —** Removed the home page announcement and sitewide event banner. The event page remains available as an archive.
- **Release status —** These changes were pushed to the repository in commit `71ec740`; production deployment has not been verified here.

Earlier entries below record the messaging and promotions that existed at the time. They do not describe the current home page.

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
