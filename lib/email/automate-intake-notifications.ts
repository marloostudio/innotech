import { Resend } from "resend"

import { automateIntakeForm } from "@/lib/content/exhibition-automate"
import type { DemoLeadContext } from "@/lib/email/demo-lead-context"
import { escapeHtml } from "@/lib/email/escape-html"
import { getLeadsNotifyEmail } from "@/lib/email/leads-notify"
import { buildLeadMarketingContextHtml, buildLeadMarketingContextText } from "@/lib/email/lead-marketing-section"
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
import type { AutomateIntakePayload } from "@/lib/validation/automate-intake"

function orgLabel(value: string) {
  if (!value) return "—"
  return automateIntakeForm.fields.organization.options.find((o) => o.value === value)?.label ?? value
}

function roleLabel(value: string) {
  if (!value) return "—"
  return automateIntakeForm.fields.role.options.find((o) => o.value === value)?.label ?? value
}

export async function sendAutomateIntakeNotifications(
  payload: AutomateIntakePayload,
  leadContext: DemoLeadContext
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[automate-intake] RESEND_API_KEY not set; skipping notification emails")
    return
  }

  const from = getResendFrom()
  const teamTo = getLeadsNotifyEmail()
  const sandboxInbox = getResendSandboxInbox()
  const submitterTo = sandboxInbox ?? payload.email
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com").replace(/\/$/, "")
  const formPath = "/events/automate-2026"
  const displayHost = siteUrl.replace(/^https?:\/\//, "")

  const resend = new Resend(apiKey)

  const name = payload.name.trim()
  const org = orgLabel(payload.organization)
  const role = roleLabel(payload.role)
  const jobTitleDisplay = payload.jobTitle?.trim() ? payload.jobTitle.trim() : "—"
  const interestDisplay = payload.interest.trim()

  const footerLine = `${escapeHtml(siteConfig.company.name)} · <a href="${escapeHtml(siteUrl)}" style="color:${C_ACCENT};text-decoration:none;">${escapeHtml(displayHost)}</a>`

  const detailRows = [
    dataRowHtml("Name", escapeHtml(name)),
    dataRowHtml(
      "Email",
      `<a href="mailto:${escapeHtml(payload.email)}" style="color:${C_ACCENT};text-decoration:none;font-weight:500;">${escapeHtml(
        payload.email
      )}</a>`
    ),
    dataRowHtml("Company", escapeHtml(payload.company)),
    dataRowHtml("Job title", escapeHtml(jobTitleDisplay)),
    dataRowHtml("Organization type", escapeHtml(org)),
    dataRowHtml("Role", escapeHtml(role)),
  ].join("")

  const contextHtml = buildLeadMarketingContextHtml(leadContext)
  const ownerBodyInner = `<p style="margin:0 0 18px;font-family:${FONT};font-size:15px;line-height:1.55;color:${C_TEXT};">
      A new <strong>Automate 2026</strong> interest form was submitted. Use <strong>Reply</strong> to contact them.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#f8fafc;">
      <tbody>
        ${detailRows}
      </tbody>
    </table>
    <p style="margin:20px 0 8px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${C_MUTED};">Interest</p>
    <div style="font-family:${FONT};font-size:14px;line-height:1.55;color:${C_TEXT};background-color:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;white-space:pre-wrap;">${escapeHtml(
      interestDisplay
    )}</div>
    ${contextHtml}
    <p style="margin:20px 0 0;font-family:${FONT};font-size:12px;color:${C_MUTED};">Form path: <a href="${escapeHtml(
    `${siteUrl}${formPath}`
  )}" style="color:${C_ACCENT};text-decoration:none;">${escapeHtml(`${displayHost}${formPath}`)}</a></p>`

  const ownerHtml = layoutEmailHtml({
    kicker: "Internal · Website",
    title: "New Automate 2026 lead",
    body: ownerBodyInner,
    footerHtml: footerLine,
  })

  const ownerText = [
    "New Automate 2026 interest form submission",
    "",
    `Name: ${name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Job title: ${jobTitleDisplay}`,
    `Organization type: ${org}`,
    `Role: ${role}`,
    "",
    "Interest:",
    interestDisplay,
    "",
    "— Marketing & technical context —",
    buildLeadMarketingContextText(leadContext),
    "",
    `Form page: ${siteUrl}${formPath}`,
  ].join("\n")

  const first = name.split(/\s+/)[0] ?? "there"

  const submitterSandboxNote = sandboxInbox
    ? `<div style="background-color:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;margin:0 0 22px;font-family:${FONT};font-size:13px;line-height:1.5;color:#1e40af;">
        <strong>Test / sandbox</strong> — this confirmation was sent to the Resend test inbox. It was meant for: <strong>${escapeHtml(
          payload.email
        )}</strong>
      </div>`
    : ""

  const submitterBodyInner = `${submitterSandboxNote}
    <p style="margin:0 0 16px;font-family:${FONT};">Hi ${escapeHtml(first)},</p>
    <p style="margin:0 0 16px;font-family:${FONT};color:${C_TEXT};">Thanks for your interest in <strong>${escapeHtml(
      siteConfig.name
    )}</strong> — we received your message about <strong>Automate 2026</strong> and our team will follow up shortly.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:8px 0 0;border-collapse:separate;">
      <tr>
        <td style="font-family:${FONT};font-size:15px;color:${C_TEXT};padding:6px 0 6px 0;vertical-align:top;width:28px;">✓</td>
        <td style="font-family:${FONT};font-size:15px;line-height:1.5;color:#334155;padding:4px 0 8px 0;">We’ll review your note and match you with the right product specialist.</td>
      </tr>
      <tr>
        <td style="font-family:${FONT};font-size:15px;color:${C_TEXT};padding:6px 0 6px 0;vertical-align:top;">✓</td>
        <td style="font-family:${FONT};font-size:15px;line-height:1.5;color:#334155;padding:4px 0 0 0;">If your request is time-sensitive, reply to the follow-up you receive and reference your company name.</td>
      </tr>
    </table>`

  const submitterHtml = layoutSubmitterEmailHtml({
    siteUrl,
    headline: `Thanks, ${first}`,
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
    "Thanks for your interest in InnoTech Systems — we received your message about Automate 2026.",
    "Our team will review your note and follow up shortly.",
    "",
    "— InnoTech Systems",
    siteUrl,
  ].join("\n")

  const [ownerResult, submitterResult] = await Promise.all([
    resend.emails.send({
      from,
      to: [teamTo],
      replyTo: payload.email,
      subject: `Automate 2026 lead: ${payload.company}`,
      html: ownerHtml,
      text: ownerText,
    }),
    resend.emails.send({
      from,
      to: [submitterTo],
      subject: "We received your Automate 2026 interest — InnoTech Systems",
      html: submitterHtml,
      text: submitterText,
    }),
  ])

  let teamNotifyOk = !ownerResult.error
  if (ownerResult.error) {
    console.error(
      "[automate-intake] Resend (team → " + teamTo + "):",
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
      title: "New Automate 2026 lead (backup copy)",
      body: teamFallbackCallout + ownerBodyInner,
      footerHtml: footerLine,
    })
    const ownerTextFallback = [
      "BACKUP: Primary team address could not receive. Intended for: " + teamTo,
      "",
      ...ownerText.split("\n").filter((l) => l !== "New Automate 2026 interest form submission"),
    ].join("\n")
    const fallback = await resend.emails.send({
      from,
      to: [sandboxInbox],
      replyTo: payload.email,
      subject: `[Team backup] Automate 2026 lead: ${payload.company}`,
      html: ownerHtmlFallback,
      text: ownerTextFallback,
    })
    if (!fallback.error) {
      teamNotifyOk = true
      console.warn(
        "[automate-intake] Team copy delivered to RESEND_SANDBOX_INBOX because primary to",
        teamTo,
        "failed."
      )
    } else {
      console.error("[automate-intake] Resend (team backup):", fallback.error.message)
    }
  }

  if (!teamNotifyOk) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        ownerResult.error?.message ?? "Failed to send team notification for Automate intake form"
      )
    }
  }
  if (submitterResult.error) {
    console.error("[automate-intake] Resend (submitter):", submitterResult.error.message)
  }
}
