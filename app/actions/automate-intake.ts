"use server"

import { getServerDemoLeadContext, mergeClientDemoLeadContext } from "@/lib/email/demo-lead-context"
import { sendAutomateIntakeNotifications } from "@/lib/email/automate-intake-notifications"
import { createSupabaseAnonServerClient, getSupabaseAnonCredential } from "@/lib/supabase/anon-server"
import { automateIntakePayloadSchema } from "@/lib/validation/automate-intake"

export type SubmitAutomateIntakeResult =
  | { ok: true }
  | { ok: false; error: "validation" | "server" | "config" }

const FORM_SLUG = "automate-2026" as const
const FORM_PATH = "/events/automate-2026" as const

function str(fd: FormData, key: string) {
  const v = fd.get(key)
  return typeof v === "string" ? v : ""
}

function parseFormData(fd: FormData) {
  return {
    name: fd.get("name"),
    email: fd.get("email"),
    company: fd.get("company"),
    jobTitle: fd.get("jobTitle"),
    organization: fd.get("organization"),
    role: fd.get("role"),
    interest: fd.get("interest"),
  }
}

export async function submitAutomateIntake(formData: FormData): Promise<SubmitAutomateIntakeResult> {
  const honeypot = formData.get("website")
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true }
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !getSupabaseAnonCredential()) {
    return { ok: false, error: "config" }
  }

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "config" }
  }

  const raw = parseFormData(formData)
  const parsed = automateIntakePayloadSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: "validation" }
  }

  const pageUrl = str(formData, "context_page_url").slice(0, 4000) || null
  const documentReferrer = str(formData, "context_client_referrer").slice(0, 4000) || null

  const supabase = createSupabaseAnonServerClient()
  const { error } = await supabase.from("automate_intake_leads").insert({
    form_slug: FORM_SLUG,
    full_name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    job_title: parsed.data.jobTitle,
    organization_type: parsed.data.organization,
    role_slug: parsed.data.role,
    interest: parsed.data.interest,
  })

  if (error) {
    console.error("[automate-intake]", error.message)
    return { ok: false, error: "server" }
  }

  try {
    const serverCtx = await getServerDemoLeadContext(parsed.data.email, { formPath: FORM_PATH })
    const leadContext = mergeClientDemoLeadContext(serverCtx, {
      pageUrl,
      documentReferrer,
    })
    await sendAutomateIntakeNotifications(parsed.data, leadContext)
  } catch (e) {
    console.error("[automate-intake] email:", e)
    return { ok: false, error: "server" }
  }

  return { ok: true }
}
