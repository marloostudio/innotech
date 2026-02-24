import Link from "next/link"

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--it-bg)" }}
    >
      <p
        className="font-mono text-xs tracking-widest uppercase mb-4"
        style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-ibm-mono)" }}
      >
        404
      </p>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}
      >
        Page Not Found
      </h1>
      <p
        className="text-base mb-8 max-w-md"
        style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md text-sm font-medium transition-all duration-150"
        style={{ background: "var(--it-blue)", color: "var(--it-bg)" }}
      >
        Back to Home
      </Link>
    </main>
  )
}
