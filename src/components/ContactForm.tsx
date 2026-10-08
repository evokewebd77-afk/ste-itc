"use client";

import { useState } from "react";
import { categories, siteInfo } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const category = String(data.get("category") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Inquiry from ${name} [${category || "General"}]`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEquipment Category: ${category}\n\nTesting Requirement / Message:\n${message}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
      setSent(true);
      setSubmitting(false);
      form.reset();
    }, 400);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          Your Full Name *
          <input
            required
            name="name"
            type="text"
            placeholder="e.g. Rajesh Kumar"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          Work Email Address *
          <input
            required
            name="email"
            type="email"
            placeholder="e.g. rajesh@company.com"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          Phone Number / Mobile
          <input
            name="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          Apparatus of Interest
          <select
            name="category"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          >
            <option value="General Testing Inquiry">General Testing Inquiry</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
        Testing Requirements &amp; Standards Needed *
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Please describe your test specification, IEC standard requirements, or quantity..."
          className="resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition duration-300 hover:from-brand-500 hover:to-cyan-500 hover:shadow-lg disabled:opacity-70"
        >
          <span>{submitting ? "Opening Email Client..." : "Submit Quotation Request"}</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3.1 2.3a.75.75 0 0 0-1.05.86l2 6.3a.75.75 0 0 0 .63.51h7.9l-1.7 4.9a.75.75 0 1 0 1.42.49l3.6-10.4a.75.75 0 0 0-.58-.98H4.5l-1.4-4.68Z" />
          </svg>
        </button>

        {sent && (
          <p className="text-xs font-semibold text-emerald-600">
            ✓ Your email client is launched. Our engineers will follow up promptly!
          </p>
        )}
      </div>
    </form>
  );
}
