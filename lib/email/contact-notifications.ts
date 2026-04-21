import { Resend } from "resend"

import { industryLabel, interestLabel } from "@/lib/content/contact-form"
import { getLeadsNotifyEmail } from "@/lib/email/leads-notify"
import { getResendFrom } from "@/lib/email/resend-from"
import { escapeHtml } from "@/lib/email/escape-html"
import type { ContactPayload } from "@/lib/validation/contact"

export async function sendContactNotifications(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set; skipping notification emails")
    return
  }

  const from = getResendFrom()
  const notifyTo = getLeadsNotifyEmail()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com").replace(/\/$/, "")

  const resend = new Resend(apiKey)

  const fullName = payload.fullName.trim()
  const ind = industryLabel(payload.industry)
  const intr = interestLabel(payload.interest)
  const phoneDisplay = payload.phone?.trim() ? payload.phone.trim() : "—"

  const ownerHtml = `
    <p>A new <strong>Contact</strong> form was submitted on the website.</p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Name</td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Company</td><td>${escapeHtml(payload.company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Phone</td><td>${escapeHtml(phoneDisplay)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Industry</td><td>${escapeHtml(ind)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#555;">Area of interest</td><td>${escapeHtml(intr)}</td></tr>
    </table>
    <p style="margin-top:16px;"><strong>Message</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
    <p style="margin-top:16px;font-size:12px;color:#888;">Source: ${escapeHtml(siteUrl)}/contact</p>
  `

  const ownerText = [
    "New Contact form submission",
    "",
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Phone: ${phoneDisplay}`,
    `Industry: ${ind}`,
    `Area of interest: ${intr}`,
    "",
    "Message:",
    payload.message,
    "",
    `Page: ${siteUrl}/contact`,
  ].join("\n")

  const first = fullName.split(/\s+/)[0] ?? "there"
  const submitterHtml = `
    <p>Hi ${escapeHtml(first)},</p>
    <p>Thanks for reaching out to <strong>InnoTech Systems</strong>. We received your message and our team will get back to you within <strong>24 hours</strong>.</p>
    <p style="margin-top:24px;font-size:13px;color:#666;">— InnoTech Systems<br/>
    <a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a></p>
  `

  const submitterText = [
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
      to: [notifyTo],
      replyTo: payload.email,
      subject: `Contact request: ${payload.company}`,
      html: ownerHtml,
      text: ownerText,
    }),
    resend.emails.send({
      from,
      to: [payload.email],
      subject: "We received your message — InnoTech Systems",
      html: submitterHtml,
      text: submitterText,
    }),
  ])

  if (ownerResult.error) {
    console.error("[contact] Resend (owner):", ownerResult.error.message)
    throw new Error(ownerResult.error.message)
  }
  if (submitterResult.error) {
    console.error("[contact] Resend (submitter):", submitterResult.error.message)
  }
}
