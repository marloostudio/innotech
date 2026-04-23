"use server"

import { sendDemoRequestNotifications } from "@/lib/email/demo-request-notifications"
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
    name: str(formData, "name"),
    email: str(formData, "email"),
    company: str(formData, "company"),
    role: str(formData, "role"),
    product: str(formData, "product"),
    message: str(formData, "message"),
  }

  const parsed = demoRequestPayloadSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: "validation" }
  }

  try {
    await sendDemoRequestNotifications(parsed.data)
  } catch (e) {
    console.error("[demo-request] email:", e)
    return { ok: false, error: "server" }
  }

  return { ok: true }
}
