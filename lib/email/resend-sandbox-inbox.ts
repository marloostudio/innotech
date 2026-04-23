/** Resend test / unverified: optional inbox for submitter copy + team backup. */
export function getResendSandboxInbox(): string | undefined {
  return process.env.RESEND_SANDBOX_INBOX?.trim() || undefined
}
