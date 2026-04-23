import { Resend } from "resend"

import { demoProductLabel } from "@/lib/content/demo-request-form"
import { getDemoRequestNotifyEmail } from "@/lib/email/demo-notify"
import { escapeHtml } from "@/lib/email/escape-html"
import { getResendFrom } from "@/lib/email/resend-from"
import type { DemoRequestPayload } from "@/lib/validation/demo-request"

export async function sendDemoRequestNotifications(payload: DemoRequestPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[demo-request] RESEND_API_KEY not set; skipping notification emails")
    return
  }

  const from = getResendFrom()
  const notifyTo = getDemoRequestNotifyEmail()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com").replace(/\/$/, "")

  const resend = new Resend(apiKey)

  const name = payload.name.trim()
  const productDisplay = demoProductLabel(payload.product)
  const messageDisplay = payload.message.trim() ? payload.message.trim() : "—"

  const ownerHtml = `
    <p>A new <strong>Demo request</strong> was submitted on the website.</p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Company</td><td>${escapeHtml(payload.company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Role</td><td>${escapeHtml(payload.role)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Product interest</td><td>${escapeHtml(productDisplay)}</td></tr>
    </table>
    <p style="margin-top:16px;"><strong>Message</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(messageDisplay)}</p>
    <p style="margin-top:16px;font-size:12px;color:#888;">Source: ${escapeHtml(siteUrl)}/demo</p>
  `

  const ownerText = [
    "New Demo request",
    "",
    `Name: ${name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Role: ${payload.role}`,
    `Product interest: ${productDisplay}`,
    "",
    "Message:",
    messageDisplay,
    "",
    `Page: ${siteUrl}/demo`,
  ].join("\n")

  const first = name.split(/\s+/)[0] ?? "there"
  const submitterHtml = `
    <p>Hi ${escapeHtml(first)},</p>
    <p>Thanks for your demo request to <strong>InnoTech Systems</strong>. We received it and our team will reach out to schedule time with you.</p>
    <p style="margin-top:24px;font-size:13px;color:#666;">— InnoTech Systems<br/>
    <a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a></p>
  `

  const submitterText = [
    `Hi ${first},`,
    "",
    "Thanks for your demo request to InnoTech Systems. We received it and our team will reach out to schedule time with you.",
    "",
    "— InnoTech Systems",
    siteUrl,
  ].join("\n")

  const [ownerResult, submitterResult] = await Promise.all([
    resend.emails.send({
      from,
      to: [notifyTo],
      replyTo: payload.email,
      subject: `Demo request: ${payload.company}`,
      html: ownerHtml,
      text: ownerText,
    }),
    resend.emails.send({
      from,
      to: [payload.email],
      subject: "We received your demo request — InnoTech Systems",
      html: submitterHtml,
      text: submitterText,
    }),
  ])

  if (ownerResult.error) {
    console.error("[demo-request] Resend (owner):", ownerResult.error.message)
    throw new Error(ownerResult.error.message)
  }
  if (submitterResult.error) {
    console.error("[demo-request] Resend (submitter):", submitterResult.error.message)
  }
}
