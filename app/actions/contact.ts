"use server"

import { getServerDemoLeadContext, mergeClientDemoLeadContext } from "@/lib/email/demo-lead-context"
import { sendContactNotifications } from "@/lib/email/contact-notifications"
import { contactPayloadSchema } from "@/lib/validation/contact"

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error: "validation" | "server" | "config" }

function str(fd: FormData, key: string) {
  const v = fd.get(key)
  return typeof v === "string" ? v : ""
}

export async function submitContact(formData: FormData): Promise<SubmitContactResult> {
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

  const parsed = contactPayloadSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: "validation" }
  }

  try {
    const serverCtx = await getServerDemoLeadContext(parsed.data.email, { formPath: "/contact" })
    const leadContext = mergeClientDemoLeadContext(serverCtx, {
      pageUrl,
      documentReferrer,
    })
    await sendContactNotifications(parsed.data, leadContext)
  } catch (e) {
    console.error("[contact] email:", e)
    return { ok: false, error: "server" }
  }

  return { ok: true }
}
