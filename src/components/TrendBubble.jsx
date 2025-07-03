export default function TrendBubble({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl bg-white px-4 py-2 shadow-lg text-sm font-medium flex gap-2 items-center ${className}`}
    >
      {children}
    </div>
  )
}
