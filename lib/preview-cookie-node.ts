import { createHmac, timingSafeEqual } from "node:crypto"

import { PREVIEW_COOKIE_NAME, PREVIEW_HMAC_MESSAGE, PREVIEW_SESSION_SECRET } from "@/lib/site-access"

export { PREVIEW_COOKIE_NAME }

export function createPreviewCookieValue(): string {
  return createHmac("sha256", PREVIEW_SESSION_SECRET).update(PREVIEW_HMAC_MESSAGE).digest("hex")
}

export function verifyPreviewCookieNode(value: string | undefined): boolean {
  if (!value) return false
  try {
    const expected = createPreviewCookieValue()
    return timingSafeEqual(Buffer.from(value, "utf8"), Buffer.from(expected, "utf8"))
  } catch {
    return false
  }
}
