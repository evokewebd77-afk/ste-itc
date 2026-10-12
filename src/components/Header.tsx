"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories, siteInfo } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
          {/* Left status badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span className="font-medium text-slate-200 tracking-wide">
              IEC &amp; ISO Standards Compliant Testing Equipment
            </span>
            <span className="hidden text-slate-500 lg:inline">|</span>
            <span className="hidden text-slate-300 lg:inline">
              Serving Industries Since 2009
            </span>
          </div>

          {/* Right quick contact links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteInfo.phoneHref}`}
              className="flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-cyan-400"
            >
              <svg
                className="h-3.5 w-3.5 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{siteInfo.phone}</span>
            </a>

            <a
              href={`mailto:${siteInfo.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 transition hover:text-cyan-400"
            >
              <svg
                className="h-3.5 w-3.5 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{siteInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-xl bg-slate-50 p-1.5 ring-1 ring-slate-200/60 transition group-hover:ring-brand-500/40">
            <Image
              src={siteInfo.logo}
              alt="Standard Test Equipment"
              width={190}
              height={54}
              className="h-11 sm:h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-700">
              Standard Testing Equipments
            </span>
            <span className="block text-[10px] text-slate-400 font-medium">
              Precision Instruments
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-50 text-brand-700 font-bold"
                    : "text-slate-700 hover:bg-brand-50/70 hover:text-brand-700"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-600" />
                )}
              </Link>
            );
          })}

          {/* Categories Mega Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 group-hover:bg-brand-50 group-hover:text-brand-700"
            >
              Categories
              <svg
                className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-brand-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Panel */}
            <div className="invisible pointer-events-none absolute right-0 top-full z-50 w-[380px] translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 pt-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15">
                <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-cyan-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                        Equipment Catalogue
                      </p>
                      <h4 className="text-base font-bold text-white">
                        Specialized Categories
                      </h4>
                    </div>
                    <Link
                      href="/products"
                      className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white hover:text-brand-800"
                    >
                      View All →
                    </Link>
                  </div>
                </div>

                <ul className="max-h-[380px] overflow-y-auto p-2">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/category/${cat.slug}`}
                        className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                      >
                        <span className="line-clamp-1">{cat.name}</span>
                        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 font-semibold group-hover/item:bg-brand-100 group-hover/item:text-brand-800">
                          {cat.count ?? 0}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition duration-300 hover:from-brand-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-brand-500/35 hover:-translate-y-0.5 sm:inline-flex"
          >
            <span>Request a Quote</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.6a.75.75 0 1 1 1.1-1l5.5 5.5a.75.75 0 0 1 0 1.1l-5.5 5.5a.75.75 0 1 1-1.1-1l4.15-4.25H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-brand-600 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="grid gap-1.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  pathname === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between px-4 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Categories
                </span>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold text-brand-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span>{cat.name}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                      {cat.count ?? 0}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 pt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white shadow-md hover:bg-brand-700"
              >
                Request a Quote
              </Link>
              <a
                href={`tel:${siteInfo.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Call: {siteInfo.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
