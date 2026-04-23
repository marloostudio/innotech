"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SiteGateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = searchParams.get("return") || "/"
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setPending(true)
    try {
      const res = await fetch("/api/preview-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include",
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        setError(data?.error ?? "Could not sign in")
        setPending(false)
        return
      }
      const safe =
        returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/"
      router.push(safe)
      router.refresh()
    } catch {
      setError("Network error")
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-it-border bg-[var(--it-surface)] p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-it-text-primary">Restricted area</h1>
          <p className="text-sm text-it-text-muted">
            Enter the preview password to continue. Public pages (home, selected products, demo, and contact) stay open.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preview-password">Password</Label>
            <Input
              id="preview-password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[var(--it-bg)] border-it-border"
              required
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Checking…" : "Continue"}
          </Button>
        </form>
        <p className="text-center text-xs text-it-text-muted">
          <Link href="/" className="text-it-blue hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function SiteGatePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center text-it-text-muted text-sm">Loading…</div>
      }
    >
      <SiteGateForm />
    </Suspense>
  )
}
