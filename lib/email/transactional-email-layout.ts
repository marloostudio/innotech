import { escapeHtml } from "@/lib/email/escape-html"
import { siteConfig } from "@/lib/site"

export const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"
export const C_BG = "#f1f5f9"
export const C_CARD = "#ffffff"
export const C_BORDER = "#e2e8f0"
export const C_MUTED = "#64748b"
export const C_TEXT = "#0f172a"
export const C_INK = "#0f172a"
export const C_ACCENT = "#2563eb"
export const C_ACCENT_DARK = "#1d4ed8"
export const C_HEADER = "#0f172a"
export const C_HEADER_MUTED = "#94a3b8"

export function layoutEmailHtml(options: { title: string; kicker: string; body: string; footerHtml: string }): string {
  const { title, kicker, body, footerHtml: foot } = options

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background-color:${C_BG};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${C_BG};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;border-collapse:separate;">
        <tr>
          <td style="background:linear-gradient(180deg,${C_HEADER} 0%,#1e293b 100%);border-radius:10px 10px 0 0;padding:22px 28px 20px;border:1px solid #334155;border-bottom:0;">
            <p style="margin:0;font-family:${FONT};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${C_HEADER_MUTED};font-weight:600;">${escapeHtml(kicker)}</p>
            <h1 style="margin:6px 0 0;font-family:${FONT};font-size:20px;font-weight:700;color:#f8fafc;line-height:1.3;">${escapeHtml(title)}</h1>
          </td>
        </tr>
        <tr>
          <td style="background-color:${C_CARD};border:1px solid ${C_BORDER};border-top:0;border-radius:0 0 10px 10px;overflow:hidden;">
            <div style="font-family:${FONT};font-size:15px;line-height:1.55;color:${C_TEXT};padding:26px 28px 20px;">${body}</div>
            <div style="font-family:${FONT};font-size:12px;line-height:1.5;color:${C_MUTED};padding:16px 28px 24px;border-top:1px solid #f1f5f9;background-color:#fafbfc;">${foot}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

export function layoutSubmitterEmailHtml(options: { headline: string; body: string; siteUrl: string }): string {
  const { headline, body, siteUrl } = options
  const displayHost = siteUrl.replace(/^https?:\/\//, "")
  const safeHeadline = escapeHtml(headline)
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background-color:${C_BG};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${C_BG};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;border-collapse:separate;">
        <tr>
          <td style="height:4px;background:linear-gradient(90deg,${C_ACCENT} 0%,${C_ACCENT_DARK} 100%);border-radius:10px 10px 0 0;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="background-color:${C_CARD};border:1px solid ${C_BORDER};border-top:0;border-radius:0 0 10px 10px;overflow:hidden;">
            <div style="padding:28px 28px 8px;font-family:${FONT};text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${C_MUTED};">${escapeHtml(
                siteConfig.name
              )}</p>
              <p style="margin:0;font-size:26px;font-weight:700;letter-spacing:-0.02em;color:${C_INK};line-height:1.25;">${safeHeadline}</p>
            </div>
            <div style="font-family:${FONT};font-size:16px;line-height:1.65;color:${C_TEXT};padding:8px 32px 28px;">${body}</div>
            <div style="text-align:center;padding:0 28px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 auto;border-collapse:separate;">
                <tr>
                  <td style="background-color:${C_ACCENT};border-radius:8px;padding:12px 24px;">
                    <a href="${escapeHtml(
                      siteUrl
                    )}" style="font-family:${FONT};font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;display:inline-block;">Visit website</a>
                  </td>
                </tr>
              </table>
            </div>
            <div style="font-family:${FONT};font-size:12px;line-height:1.5;color:${C_MUTED};padding:18px 28px 24px;border-top:1px solid #f1f5f9;background:linear-gradient(180deg,#fafbfc 0%,#f8fafc 100%);text-align:center;">
              <strong style="color:#475569;">${escapeHtml(siteConfig.company.name)}</strong><br/>
              <a href="${escapeHtml(
                siteUrl
              )}" style="color:${C_ACCENT};text-decoration:none;">${escapeHtml(displayHost)}</a>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

export function dataRowHtml(label: string, value: string) {
  return `<tr>
    <td style="font-family:${FONT};font-size:14px;padding:10px 14px 10px 0;color:${C_MUTED};vertical-align:top;width:132px;border-bottom:1px solid #f1f5f9;">${escapeHtml(
      label
    )}</td>
    <td style="font-family:${FONT};font-size:14px;padding:10px 0;border-bottom:1px solid #f1f5f9;color:${C_TEXT};font-weight:500;vertical-align:top;word-break:break-word;">${value}</td>
  </tr>`
}
