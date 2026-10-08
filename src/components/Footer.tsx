import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { categories, siteInfo } from "@/lib/data";

async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();
  const information = [
    { href: "/about", label: "About Us" },
    { href: "/delivery", label: "Delivery Information" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/cancellation-and-refund", label: "Cancellation & Refund" },
  ];

  return (
    <footer className="mt-auto border-t border-slate-800 bg-gradient-to-b from-ink-950 to-[#040810] text-slate-300">
      {/* Top Assistance Banner */}
      <div className="border-b border-white/10 bg-white/5 py-8 px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-600 text-white shadow-md">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Looking for Technical Specifications or Custom Calibration?
              </h4>
              <p className="text-xs text-slate-400">
                Our Mohali-based engineering laboratory provides custom fabrication according to customer standards.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-cyan-400"
            >
              <span>Request Quote</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${siteInfo.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
            >
              <span>{siteInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Identity */}
        <div>
          <div className="inline-block rounded-xl bg-white p-2.5 ring-1 ring-white/20 shadow-sm">
            <Image
              src={siteInfo.footerLogo}
              alt="Standard Test Equipment"
              width={160}
              height={160}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            {siteInfo.name} — Premier manufacturer of IEC 60529, IEC 61032, LM-79, and spring hammer test apparatus since 2009.
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Mohali, Punjab, India</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Information &amp; Policies
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs">
            {information.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Testing Categories
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="line-clamp-1 text-slate-400 transition hover:text-cyan-300"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3.5 text-xs">
            <li className="font-semibold text-white">{siteInfo.name}</li>
            <li className="flex gap-3 text-slate-400">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                {siteInfo.address.line1}
                <br />
                {siteInfo.address.line2}
                <br />
                {siteInfo.address.line3}
              </span>
            </li>
            <li className="flex gap-3 text-slate-400">
              <svg
                className="h-4 w-4 shrink-0 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href={`tel:${siteInfo.phoneHref}`}
                className="transition hover:text-cyan-300"
              >
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex gap-3 text-slate-400">
              <svg
                className="h-4 w-4 shrink-0 text-cyan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href={`mailto:${siteInfo.email}`}
                className="transition hover:text-cyan-300"
              >
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            Copyright © {year} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms-conditions"
              className="transition hover:text-cyan-400"
            >
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="transition hover:text-cyan-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
