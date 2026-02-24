"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--it-bg)" }}
    >
      <p
        className="font-mono text-xs tracking-widest uppercase mb-4"
        style={{ color: "var(--it-danger)", fontFamily: "var(--font-ibm-mono)" }}
      >
        Error
      </p>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}
      >
        Something went wrong
      </h1>
      <p
        className="text-base mb-8 max-w-md"
        style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}
      >
        An unexpected error occurred. Try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 rounded-md text-sm font-medium border transition-all duration-150"
          style={{ borderColor: "var(--it-border)", color: "var(--it-text-secondary)" }}
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-md text-sm font-medium transition-all duration-150"
          style={{ background: "var(--it-blue)", color: "var(--it-bg)" }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
