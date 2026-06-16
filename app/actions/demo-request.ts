"use server"

import { getServerDemoLeadContext, mergeClientDemoLeadContext } from "@/lib/email/demo-lead-context"
import { sendDemoRequestNotifications } from "@/lib/email/demo-request-notifications"
import { pushLeadToHubSpot } from "@/lib/hubspot/lead-feed"
import { demoRequestPayloadSchema } from "@/lib/validation/demo-request"

export type SubmitDemoRequestResult =
  | { ok: true }
  | { ok: false; error: "validation" | "server" | "config" }

function str(fd: FormData, key: string) {
  const v = fd.get(key)
  return typeof v === "string" ? v : ""
}

export async function submitDemoRequest(formData: FormData): Promise<SubmitDemoRequestResult> {
  const honeypot = formData.get("website")
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true }
  }

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "config" }
  }

  const raw = {
    fullName: str(formData, "fullName"),
    email: str(formData, "email"),
    company: str(formData, "company"),
    phone: str(formData, "phone"),
    industry: str(formData, "industry"),
    interest: str(formData, "interest"),
    message: str(formData, "message"),
  }

  const pageUrl = str(formData, "context_page_url").slice(0, 4000) || null
  const documentReferrer = str(formData, "context_client_referrer").slice(0, 4000) || null

  const parsed = demoRequestPayloadSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: "validation" }
  }

  try {
    const serverCtx = await getServerDemoLeadContext(parsed.data.email, { formPath: "/demo" })
    const leadContext = mergeClientDemoLeadContext(serverCtx, {
      pageUrl,
      documentReferrer,
    })
    const [, hubspotResult] = await Promise.allSettled([
      sendDemoRequestNotifications(parsed.data, leadContext),
      pushLeadToHubSpot({ source: "demo-request", payload: parsed.data, context: leadContext }),
    ])
    if (hubspotResult.status === "rejected") {
      console.error("[demo-request] hubspot:", hubspotResult.reason)
    } else if (!hubspotResult.value.ok && !hubspotResult.value.skipped) {
      console.error("[demo-request] hubspot:", hubspotResult.value.error)
    }
  } catch (e) {
    console.error("[demo-request] email:", e)
    return { ok: false, error: "server" }
  }

  return { ok: true }
}
