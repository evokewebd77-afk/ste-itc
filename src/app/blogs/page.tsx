import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Engineering Articles & Blogs",
  description:
    "Technical articles, guides, and standards updates on IEC test instruments from Standard Test Equipment.",
};

export default function BlogsPage() {
  return (
    <PageShell title="Engineering Insights &amp; Articles" crumb="Blogs">
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 sm:p-16 text-center shadow-xs">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-200/50">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              d="M4 5h16v14H4z"
              strokeLinejoin="round"
            />
            <path d="M8 9h8M8 13h5" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="mt-5 text-xl font-bold text-slate-900">
          Technical Articles Coming Soon
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
          Our engineering staff is preparing deep-dive technical guides on IEC 60529 IP test chamber protocols, IEC 61032 probe calibrations, and LM-79 photometric measurement techniques.
        </p>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex rounded-full bg-brand-600 px-7 py-3 text-xs font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500"
          >
            Browse Testing Catalogue
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
