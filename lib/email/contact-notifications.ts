import { Resend } from "resend"

import { industryLabel, interestLabel } from "@/lib/content/contact-form"
import type { DemoLeadContext } from "@/lib/email/demo-lead-context"
import { getLeadsNotifyEmail } from "@/lib/email/leads-notify"
import { buildLeadMarketingContextHtml, buildLeadMarketingContextText } from "@/lib/email/lead-marketing-section"
import { escapeHtml } from "@/lib/email/escape-html"
import { getResendFrom } from "@/lib/email/resend-from"
import { getResendSandboxInbox } from "@/lib/email/resend-sandbox-inbox"
import {
  C_ACCENT,
  C_BORDER,
  C_MUTED,
  C_TEXT,
  dataRowHtml,
  FONT,
  layoutEmailHtml,
  layoutSubmitterEmailHtml,
} from "@/lib/email/transactional-email-layout"
import { siteConfig } from "@/lib/site"
import type { ContactPayload } from "@/lib/validation/contact"

export async function sendContactNotifications(payload: ContactPayload, leadContext: DemoLeadContext) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set; skipping notification emails")
    return
  }

  const from = getResendFrom()
  const teamTo = getLeadsNotifyEmail()
  const sandboxInbox = getResendSandboxInbox()
  const submitterTo = sandboxInbox ?? payload.email
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com").replace(/\/$/, "")

  const resend = new Resend(apiKey)

  const fullName = payload.fullName.trim()
  const ind = industryLabel(payload.industry)
  const intr = interestLabel(payload.interest)
  const phoneDisplay = payload.phone?.trim() ? payload.phone.trim() : "—"
  const messageDisplay = payload.message.trim() ? payload.message.trim() : "—"
  const displayHost = siteUrl.replace(/^https?:\/\//, "")

  const footerLine = `${escapeHtml(siteConfig.company.name)} · <a href="${escapeHtml(siteUrl)}" style="color:${C_ACCENT};text-decoration:none;">${escapeHtml(displayHost)}</a>`

  const detailRows = [
    dataRowHtml("Name", escapeHtml(fullName)),
    dataRowHtml(
      "Email",
      `<a href="mailto:${escapeHtml(payload.email)}" style="color:${C_ACCENT};text-decoration:none;font-weight:500;">${escapeHtml(
        payload.email
      )}</a>`
    ),
    dataRowHtml("Company", escapeHtml(payload.company)),
    dataRowHtml("Phone", escapeHtml(phoneDisplay)),
    dataRowHtml("Industry", escapeHtml(ind)),
    dataRowHtml("Area of interest", escapeHtml(intr)),
  ].join("")

  const contextHtml = buildLeadMarketingContextHtml(leadContext)
  const ownerBodyInner = `<p style="margin:0 0 18px;font-family:${FONT};font-size:15px;line-height:1.55;color:${C_TEXT};">
      A new <strong>contact</strong> enquiry was submitted. Use <strong>Reply</strong> to answer from your inbox.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#f8fafc;">
      <tbody>
        ${detailRows}
      </tbody>
    </table>
    <p style="margin:20px 0 8px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${C_MUTED};">Message</p>
    <div style="font-family:${FONT};font-size:14px;line-height:1.55;color:${C_TEXT};background-color:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;white-space:pre-wrap;">${escapeHtml(
      messageDisplay
    )}</div>
    ${contextHtml}
    <p style="margin:20px 0 0;font-family:${FONT};font-size:12px;color:${C_MUTED};">Form path: <a href="${escapeHtml(
    `${siteUrl}/contact`
  )}" style="color:${C_ACCENT};text-decoration:none;">${escapeHtml(`${displayHost}/contact`)}</a></p>`

  const ownerHtml = layoutEmailHtml({
    kicker: "Internal · Website",
    title: "New contact enquiry",
    body: ownerBodyInner,
    footerHtml: footerLine,
  })

  const ownerText = [
    "New contact form submission",
    "",
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Phone: ${phoneDisplay}`,
    `Industry: ${ind}`,
    `Area of interest: ${intr}`,
    "",
    "Message:",
    messageDisplay,
    "",
    "— Marketing & technical context —",
    buildLeadMarketingContextText(leadContext),
    "",
    `Form page: ${siteUrl}/contact`,
  ].join("\n")

  const first = fullName.split(/\s+/)[0] ?? "there"

  const submitterSandboxNote = sandboxInbox
    ? `<div style="background-color:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;margin:0 0 22px;font-family:${FONT};font-size:13px;line-height:1.5;color:#1e40af;">
        <strong>Test / sandbox</strong> — this confirmation was sent to the Resend test inbox. It was meant for: <strong>${escapeHtml(
          payload.email
        )}</strong>
      </div>`
    : ""

  const submitterBodyInner = `${submitterSandboxNote}
    <p style="margin:0 0 16px;font-family:${FONT};">Hi ${escapeHtml(first)},</p>
    <p style="margin:0 0 16px;font-family:${FONT};color:${C_TEXT};">Thanks for reaching out to <strong>${escapeHtml(
      siteConfig.name
    )}</strong>. We received your message and our team will get back to you within <strong>24 hours</strong> on business days.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:8px 0 0;border-collapse:separate;">
      <tr>
        <td style="font-family:${FONT};font-size:15px;color:${C_TEXT};padding:6px 0 6px 0;vertical-align:top;width:28px;">✓</td>
        <td style="font-family:${FONT};font-size:15px;line-height:1.5;color:#334155;padding:4px 0 8px 0;">We’ve shared your details with the right people based on your industry and topic.</td>
      </tr>
      <tr>
        <td style="font-family:${FONT};font-size:15px;color:${C_TEXT};padding:6px 0 6px 0;vertical-align:top;">✓</td>
        <td style="font-family:${FONT};font-size:15px;line-height:1.5;color:#334155;padding:4px 0 0 0;">If your request is time-sensitive, reply to the follow-up you receive and reference your company name.</td>
      </tr>
    </table>`

  const submitterHtml = layoutSubmitterEmailHtml({
    siteUrl,
    headline: `We’re on it, ${first}`,
    body: submitterBodyInner,
  })

  const submitterTextPrefix = sandboxInbox
    ? [
        `Sandbox / test: intended recipient was ${payload.email} (delivered to test inbox).`,
        "",
      ]
    : []

  const submitterText = [
    ...submitterTextPrefix,
    `Hi ${first},`,
    "",
    "Thanks for reaching out to InnoTech Systems. We received your message and our team will get back to you within 24 hours.",
    "",
    "— InnoTech Systems",
    siteUrl,
  ].join("\n")

  const [ownerResult, submitterResult] = await Promise.all([
    resend.emails.send({
      from,
      to: [teamTo],
      replyTo: payload.email,
      subject: `Contact request: ${payload.company}`,
      html: ownerHtml,
      text: ownerText,
    }),
    resend.emails.send({
      from,
      to: [submitterTo],
      subject: "We received your message — InnoTech Systems",
      html: submitterHtml,
      text: submitterText,
    }),
  ])

  let teamNotifyOk = !ownerResult.error
  if (ownerResult.error) {
    console.error(
      "[contact] Resend (team → " + teamTo + "):",
      ownerResult.error.message
    )
  }

  if (ownerResult.error && sandboxInbox) {
    const teamFallbackCallout = `<div style="background-color:#fff7ed;border:1px solid #fdba74;border-radius:8px;padding:12px 14px;margin:0 0 20px;font-family:${FONT};font-size:13px;line-height:1.5;color:#9a3412;">
        <strong>Backup copy — primary team inbox failed to receive.</strong>
        This message was sent to your Resend test inbox while delivery to
        <strong>${escapeHtml(teamTo)}</strong> failed. Verify an email domain in Resend
        and ensure <code style="font-size:12px;">LEADS_NOTIFY_EMAIL</code> (or the default) is deliverable.
      </div>`
    const ownerHtmlFallback = layoutEmailHtml({
      kicker: "Internal · Website",
      title: "New contact enquiry (backup copy)",
      body: teamFallbackCallout + ownerBodyInner,
      footerHtml: footerLine,
    })
    const ownerTextFallback = [
      "BACKUP: Primary team address could not receive. Intended for: " + teamTo,
      "",
      ...ownerText.split("\n").filter((l) => l !== "New contact form submission"),
    ].join("\n")
    const fallback = await resend.emails.send({
      from,
      to: [sandboxInbox],
      replyTo: payload.email,
      subject: `[Team backup] Contact request: ${payload.company}`,
      html: ownerHtmlFallback,
      text: ownerTextFallback,
    })
    if (!fallback.error) {
      teamNotifyOk = true
      console.warn(
        "[contact] Team copy delivered to RESEND_SANDBOX_INBOX because primary to",
        teamTo,
        "failed."
      )
    } else {
      console.error("[contact] Resend (team backup):", fallback.error.message)
    }
  }

  if (!teamNotifyOk) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        ownerResult.error?.message ?? "Failed to send team notification for contact form"
      )
    }
  }
  if (submitterResult.error) {
    console.error("[contact] Resend (submitter):", submitterResult.error.message)
  }
}
