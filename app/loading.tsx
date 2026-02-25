export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--it-bg)" }}
    >
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: "var(--it-light-blue)",
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
