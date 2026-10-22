import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/60 shadow-xs mb-6">
          <span className="text-3xl font-extrabold">404</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Instrument or Page Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The requested page or test apparatus may have been renamed or relocated. Please browse our equipment catalogue or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 shadow-2xs transition hover:border-brand-400 hover:text-brand-700"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
