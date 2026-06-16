export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col w-full bg-it-light-surface">
      {children}
    </div>
  )
}
