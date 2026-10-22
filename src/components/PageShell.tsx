import Link from "next/link";

export function PageShell({
  title,
  crumb,
  children,
}: {
  title: string;
  crumb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Page Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-ink-950 via-brand-950 to-ink-900 text-white border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, rgba(6, 182, 212, 0.15), transparent 45%), radial-gradient(circle at 85% 50%, rgba(14, 165, 233, 0.12), transparent 40%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-cyan-300 uppercase tracking-wider">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-400">/</span>
            <span className="text-slate-100">{crumb}</span>
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">{children}</div>
    </div>
  );
}
