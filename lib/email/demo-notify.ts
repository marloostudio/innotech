/**
 * Inbox for demo request alerts (Request a Demo page).
 *
 * Override with `DEMO_REQUEST_NOTIFY_EMAIL` in `.env.local` or Vercel (server-only).
 * Default: kristin@innotech-sys.com
 */
export function getDemoRequestNotifyEmail(): string {
  return process.env.DEMO_REQUEST_NOTIFY_EMAIL?.trim() || "kristin@innotech-sys.com"
}
