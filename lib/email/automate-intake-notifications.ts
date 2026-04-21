import { Resend } from "resend"

import { automateIntakeForm } from "@/lib/content/exhibition-automate"
import { getLeadsNotifyEmail } from "@/lib/email/leads-notify"
import { getResendFrom } from "@/lib/email/resend-from"
import { escapeHtml } from "@/lib/email/escape-html"
import type { AutomateIntakePayload } from "@/lib/validation/automate-intake"

function orgLabel(value: string) {
  return automateIntakeForm.fields.organization.options.find((o) => o.value === value)?.label ?? value
}

function roleLabel(value: string) {
  return automateIntakeForm.fields.role.options.find((o) => o.value === value)?.label ?? value
}

export async function sendAutomateIntakeNotifications(payload: AutomateIntakePayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[automate-intake] RESEND_API_KEY not set; skipping notification emails")
    return
  }

  const from = getResendFrom()
  const notifyTo = getLeadsNotifyEmail()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com").replace(/\/$/, "")

  const resend = new Resend(apiKey)

  const org = orgLabel(payload.organization)
  const role = roleLabel(payload.role)

  const ownerHtml = `
    <p>A new <strong>Automate 2026</strong> interest form was submitted on the website.</p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Company</td><td>${escapeHtml(payload.company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Job title</td><td>${escapeHtml(payload.jobTitle)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Organization type</td><td>${escapeHtml(org)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Role</td><td>${escapeHtml(role)}</td></tr>
    </table>
    <p style="margin-top:16px;"><strong>Interest</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(payload.interest)}</p>
    <p style="margin-top:16px;font-size:12px;color:#888;">Source: ${escapeHtml(siteUrl)}/events/automate-2026</p>
  `

  const ownerText = [
    "New Automate 2026 interest form submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Job title: ${payload.jobTitle}`,
    `Organization type: ${org}`,
    `Role: ${role}`,
    "",
    "Interest:",
    payload.interest,
    "",
    `Page: ${siteUrl}/events/automate-2026`,
  ].join("\n")

  const submitterHtml = `
    <p>Hi ${escapeHtml(payload.name.split(/\s+/)[0] ?? "there")},</p>
    <p>Thanks for your interest in InnoTech Systems — we received your message about <strong>Automate 2026</strong>.</p>
    <p>Our team will review your note and follow up shortly.</p>
    <p style="margin-top:24px;font-size:13px;color:#666;">— InnoTech Systems<br/>
    <a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a></p>
  `

  const submitterText = [
    `Hi ${payload.name.split(/\s+/)[0] ?? "there"},`,
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
      to: [notifyTo],
      replyTo: payload.email,
      subject: `New Automate lead: ${payload.company}`,
      html: ownerHtml,
      text: ownerText,
    }),
    resend.emails.send({
      from,
      to: [payload.email],
      subject: "We received your Automate 2026 interest",
      html: submitterHtml,
      text: submitterText,
    }),
  ])

  if (ownerResult.error) {
    console.error("[automate-intake] Resend (owner):", ownerResult.error.message)
  }
  if (submitterResult.error) {
    console.error("[automate-intake] Resend (submitter):", submitterResult.error.message)
  }
}
