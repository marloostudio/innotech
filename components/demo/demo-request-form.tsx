"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useTransition } from "react"
import { toast } from "sonner"

import { submitDemoRequest } from "@/app/actions/demo-request"
import { contactIndustryOptions, contactInterestOptions } from "@/lib/content/contact-form"

const inputBase =
  "w-full px-4 py-3 rounded-lg border bg-it-surface border-it-border text-it-text-primary placeholder:text-it-text-muted focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-[box-shadow,border-color] duration-150"

const labelClass = "block text-sm font-medium mb-2 text-it-text-primary"

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
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="sr-only" aria-hidden>
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Jane Doe"
            className={inputBase}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className={inputBase}
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@company.com"
            className={inputBase}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your Company Name"
            className={inputBase}
            required
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            defaultValue=""
            className={inputBase}
            aria-label="Industry — choose one"
          >
            <option value="">Choose an industry…</option>
            {contactIndustryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className={inputBase}
            aria-label="Area of interest — choose one"
          >
            <option value="">Choose a topic…</option>
            {contactInterestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your automation needs, challenges, or questions..."
          className={`${inputBase} resize-y min-h-[96px]`}
          required
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
