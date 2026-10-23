import React from 'react';

/**
 * Reusable card component for informational sections on product pages.
 * Provides a subtle gradient background, rounded corners and a heading.
 */
export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-cyan-500 to-brand-200" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50/80 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="h-5 w-1 rounded-full bg-brand-600" />
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-800">
            {title}
          </h3>
        </div>
        <div className="mt-4 text-[13px] leading-relaxed text-slate-700">{children}</div>
      </div>
    </div>
  );
}
