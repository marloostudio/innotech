import type { DemoLeadContext } from "@/lib/email/demo-lead-context"
import { escapeHtml } from "@/lib/email/escape-html"
import { C_ACCENT, C_BORDER, C_MUTED, dataRowHtml, FONT } from "@/lib/email/transactional-email-layout"

function ctxVal(text: string | null | undefined): string {
  const t = text?.trim()
  return t ? escapeHtml(t) : "—"
}

function ctxUrlHref(href: string | null | undefined): string {
  const h = href?.trim()
  if (!h) return "—"
  const safe = escapeHtml(h)
  return `<a href="${safe}" style="color:${C_ACCENT};text-decoration:none;word-break:break-all;">${safe}</a>`
}

function sectionTitleHtml(id: string, text: string) {
  return `<p id="${escapeHtml(
    id
  )}" style="margin:24px 0 10px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${C_MUTED};border-bottom:1px solid ${C_BORDER};padding-bottom:6px;">${escapeHtml(
    text
  )}</p>`
}

export function buildLeadMarketingContextHtml(c: DemoLeadContext): string {
  const clientRows = [
    dataRowHtml("Form URL (browser)", ctxUrlHref(c.clientPageUrl)),
    dataRowHtml("Previous page (document.referrer)", ctxUrlHref(c.clientDocumentReferrer)),
  ].join("")

  const leadRows = [dataRowHtml("Lead email domain (DNS)", ctxVal(c.leadEmailDomain))].join("")

  const networkRows = [
    dataRowHtml("Client IP (est.)", ctxVal(c.clientIp)),
    dataRowHtml("Reverse DNS (IP)", ctxVal(c.reverseDns)),
    dataRowHtml("X-Forwarded-For chain", ctxVal(c.ipForwardChain)),
    dataRowHtml("Host / SNI", ctxVal(c.host)),
    dataRowHtml("X-Forwarded-Host", ctxVal(c.forwardedHost)),
    dataRowHtml("Protocol (forwarded)", ctxVal(c.forwardedProto)),
    dataRowHtml("Form endpoint", ctxUrlHref(c.formEndpoint)),
    dataRowHtml("HTTP Referer (request)", ctxUrlHref(c.serverReferer)),
    dataRowHtml("Origin (request)", ctxVal(c.origin)),
  ].join("")

  const geoRows = [
    dataRowHtml("Country (Vercel edge)", ctxVal(c.country)),
    dataRowHtml("Region", ctxVal(c.region)),
    dataRowHtml("City (approx.)", ctxVal(c.city)),
  ].join("")

  const uaInner = c.userAgent ? escapeHtml(c.userAgent) : `—`

  return `
    ${sectionTitleHtml("mkt", "Session & UTM (browser)")}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#fafbfc;">
      <tbody>${clientRows}</tbody>
    </table>
    ${sectionTitleHtml("dns", "Lead & DNS")}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#fafbfc;">
      <tbody>${leadRows}</tbody>
    </table>
    ${sectionTitleHtml("net", "Network & delivery")}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#fafbfc;">
      <tbody>${networkRows}</tbody>
    </table>
    ${sectionTitleHtml("geo", "Geo (Vercel)")}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid ${C_BORDER};border-radius:8px;overflow:hidden;background-color:#fafbfc;">
      <tbody>${geoRows}</tbody>
    </table>
    <p style="margin:0 0 6px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${C_MUTED};">User-Agent</p>
    <div style="font-family:ui-monospace,monospace;font-size:11px;line-height:1.45;color:#334155;background-color:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:10px 12px;word-break:break-word;white-space:pre-wrap;">${uaInner}</div>
    <p style="margin:12px 0 0;font-family:${FONT};font-size:12px;color:${C_MUTED};">Vercel: ${ctxVal(
    c.vercelId
  )} &nbsp;·&nbsp; <span style="color:#64748b;">Accept-Language</span> ${ctxVal(
    c.acceptLanguage
  )}</p>`
}

export function buildLeadMarketingContextText(c: DemoLeadContext): string {
  const lines = [
    "— Session & marketing (browser) —",
    `Form URL: ${c.clientPageUrl || "—"}`,
    `Previous page (document.referrer): ${c.clientDocumentReferrer || "—"}`,
    "",
    "— Lead & DNS —",
    `Lead email domain: ${c.leadEmailDomain || "—"}`,
    "",
    "— Network & delivery —",
    `Client IP: ${c.clientIp || "—"}`,
    `Reverse DNS: ${c.reverseDns || "—"}`,
    `X-Forwarded-For: ${c.ipForwardChain || "—"}`,
    `Host: ${c.host || "—"}`,
    `X-Forwarded-Host: ${c.forwardedHost || "—"}`,
    `Protocol: ${c.forwardedProto || "—"}`,
    `Form endpoint: ${c.formEndpoint || "—"}`,
    `HTTP Referer: ${c.serverReferer || "—"}`,
    `Origin: ${c.origin || "—"}`,
    "",
    "— Geo (Vercel) —",
    `Country: ${c.country || "—"}`,
    `Region: ${c.region || "—"}`,
    `City: ${c.city || "—"}`,
    "",
    `User-Agent: ${c.userAgent || "—"}`,
    `Vercel ID: ${c.vercelId || "—"}`,
    `Accept-Language: ${c.acceptLanguage || "—"}`,
  ]
  return lines.join("\n")
}
