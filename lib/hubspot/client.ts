import { getHubSpotAccessToken, getHubSpotApiBaseUrl } from "@/lib/hubspot/config"
import { hubSpotDebugApiRequest, hubSpotDebugApiResponse } from "@/lib/hubspot/debug"

export class HubSpotApiError extends Error {
  readonly status: number
  readonly body: unknown

  constructor(message: string, status: number, body: unknown) {
    super(message)
    this.name = "HubSpotApiError"
    this.status = status
    this.body = body
  }
}

type HubSpotRequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"
  body?: unknown
  signal?: AbortSignal
}

export async function hubSpotRequest<T>(path: string, options: HubSpotRequestOptions = {}): Promise<T> {
  const token = getHubSpotAccessToken()
  if (!token) {
    throw new Error("HUBSPOT_SERVICE_KEY is not set")
  }

  const { method = options.body !== undefined ? "POST" : "GET", body, signal } = options

  hubSpotDebugApiRequest(method, path, body)

  const res = await fetch(`${getHubSpotApiBaseUrl()}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })

  const text = await res.text()
  let parsed: unknown = null
  if (text) {
    try {
      parsed = JSON.parse(text)
    } catch {
      parsed = text
    }
  }

  if (!res.ok) {
    hubSpotDebugApiResponse(method, path, res.status, parsed)
    const apiMessage =
      typeof parsed === "object" &&
      parsed !== null &&
      "message" in parsed &&
      typeof (parsed as { message: unknown }).message === "string"
        ? (parsed as { message: string }).message
        : res.statusText
    throw new HubSpotApiError(`HubSpot API ${res.status}: ${apiMessage}`, res.status, parsed)
  }

  hubSpotDebugApiResponse(method, path, res.status, parsed)
  return parsed as T
}
