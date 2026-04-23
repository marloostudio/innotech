"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useTransition } from "react"
import { toast } from "sonner"

import { submitDemoRequest } from "@/app/actions/demo-request"

const inputBase =
  "w-full px-4 py-3 rounded-lg border bg-it-surface border-it-border text-it-text-primary placeholder:text-it-text-muted focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-[box-shadow,border-color] duration-150"

export function DemoRequestForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (typeof window !== "undefined") {
      fd.set("context_page_url", window.location.href)
      fd.set("context_client_referrer", document.referrer || "")
    }

    startTransition(async () => {
      const result = await submitDemoRequest(fd)
      if (result.ok) {
        form.reset()
        router.push("/thank-you?source=demo")
        return
      }
      if (result.error === "validation") {
        toast.error("Please check the form fields and try again.")
        return
      }
      if (result.error === "config") {
        toast.error("This form is not configured yet. Please email us directly.")
        return
      }
      toast.error("Something went wrong. Please try again or email us directly.")
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="sr-only" aria-hidden>
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-it-text-primary">
          Name *
        </label>
        <input type="text" id="name" name="name" className={inputBase} required autoComplete="name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-it-text-primary">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputBase}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2 text-it-text-primary">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={inputBase}
            required
            autoComplete="organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium mb-2 text-it-text-primary">
          Your Role *
        </label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="e.g., Fleet Manager, CTO, Operations Director"
          className={inputBase}
          required
          autoComplete="organization-title"
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium mb-2 text-it-text-primary">
          Product Interest *
        </label>
        <select id="product" name="product" className={inputBase} required defaultValue="">
          <option value="" disabled>
            Select a product
          </option>
          <option value="safeguard">SafeGuard — Safety Monitoring</option>
          <option value="autoduck">AutoDuck — Autonomous Charging</option>
          <option value="radar-link">RADARLink — V2X Communication</option>
          <option value="all">All Products</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-it-text-primary">
          Tell us about your needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your operation, fleet size, challenges, etc."
          className={`${inputBase} resize-y min-h-[120px]`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 rounded-lg font-semibold transition-all duration-150 hover:opacity-90 disabled:opacity-60"
        style={{
          background: "var(--it-blue)",
          color: "var(--it-bg)",
        }}
      >
        {isPending ? "Sending…" : "Request Demo"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--it-text-muted)" }}>
        By submitting this form, you agree to our{" "}
        <Link href="/legal/privacy-policy" className="underline hover:text-it-text-secondary">
          Privacy Policy
        </Link>
      </p>
    </form>
  )
}
