import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProductsExplorer } from "@/components/ProductsExplorer";

export const metadata: Metadata = {
  title: "All Products Catalogue",
  description:
    "Browse the complete catalogue of testing instruments and measuring equipment from Standard Test Equipment - test probes, EMI shielding material, IP test apparatus, spring hammer, luminary and laboratory test apparatus.",
};

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-5">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Link href="/" className="transition hover:text-brand-600">
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">All Products</span>
          </nav>
        </div>
      </div>

      {/* Hero Intro Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-ink-950 via-brand-950 to-ink-900 text-white py-12 sm:py-16 px-4 border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-block rounded-md bg-cyan-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30 mb-3">
            Official Equipment Catalogue
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Testing Instruments &amp; Measuring Equipment
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Engineered and calibrated in Mohali, Punjab to rigorous IEC, ISO, and ASTM test standards. Filter by category, keywords, or sorting preferences below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <Suspense
          fallback={
            <div className="py-20 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-brand-600 border-r-transparent" />
              <p className="mt-3 text-sm text-slate-500 font-medium">Loading instrument catalogue...</p>
            </div>
          }
        >
          <ProductsExplorer />
        </Suspense>
      </div>
    </div>
  );
}
