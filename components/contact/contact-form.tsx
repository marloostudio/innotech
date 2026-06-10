"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useTransition } from "react"
import { toast } from "sonner"

import { submitContact } from "@/app/actions/contact"
import { contactIndustryOptions, contactInterestOptions } from "@/lib/content/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const nativeSelectClass =
  "h-9 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50"

export function ContactForm() {
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
      const result = await submitContact(fd)
      if (result.ok) {
        form.reset()
        router.push("/thank-you?source=contact")
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
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full name *</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Jane Doe"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" autoComplete="tel" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@company.com"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" placeholder="Your Company Name" required autoComplete="organization" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="industry">Industry</Label>
          <select
            id="industry"
            name="industry"
            defaultValue=""
            className={nativeSelectClass}
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
        <div className="space-y-1.5">
          <Label htmlFor="interest">Area of Interest</Label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className={nativeSelectClass}
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

      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your automation needs, challenges, or questions..."
          rows={3}
          className="min-h-[96px] resize-y"
          required
        />
      </div>

      <Button type="submit" variant="lightCta" className="w-full" disabled={isPending}>
        {isPending ? "Sending…" : "Submit Request"}
      </Button>

      <p className="text-xs text-it-light-text-muted text-center text-pretty">
        By submitting this form, you agree to our{" "}
        <Link href="/legal/privacy-policy" className="text-it-light-blue underline-offset-4 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/legal/terms" className="text-it-light-blue underline-offset-4 hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </form>
  )
}
