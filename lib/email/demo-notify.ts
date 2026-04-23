import { DEFAULT_INTERNAL_INBOX } from "@/lib/email/default-internal-inbox"

/**
 * Inbox for demo request alerts (Request a Demo page).
 *
 * Override with `DEMO_REQUEST_NOTIFY_EMAIL` in `.env.local` or Vercel (server-only).
 * Default: same as Contact (`DEFAULT_INTERNAL_INBOX` — web owner at info@innotech-sys.com).
 */
export function getDemoRequestNotifyEmail(): string {
  return process.env.DEMO_REQUEST_NOTIFY_EMAIL?.trim() || DEFAULT_INTERNAL_INBOX
}
