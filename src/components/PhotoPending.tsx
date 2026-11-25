export function PhotoPending({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500 ${
        compact ? "text-[10px]" : "text-xs"
      }`}
      role="img"
      aria-label="Product photo coming soon"
    >
      <svg
        className={compact ? "h-6 w-6" : "h-10 w-10"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m4 17 5-4 3.5 2.5L16 13l4 4" />
      </svg>
      <span className="font-semibold uppercase tracking-wider">
        Photo coming soon
      </span>
    </div>
  );
}
