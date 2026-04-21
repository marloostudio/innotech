/**
 * Inbox for the internal copy of form submissions (Contact + Automate).
 *
 * Set `LEADS_NOTIFY_EMAIL` in `.env.local` or Vercel (server-only). Submitter
 * confirmations still go to the visitor’s email; this only routes the team alert.
 */
export function getLeadsNotifyEmail(): string {
  return (
    process.env.LEADS_NOTIFY_EMAIL?.trim() || "info@innotech-sys.com"
  )
}
