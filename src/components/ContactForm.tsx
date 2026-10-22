"use client";

import { useState } from "react";
import { categories } from "@/lib/data";
import { submitToAppsScript } from "@/lib/appsScript";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitToAppsScript({
        formType: "Contact Form",
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        category: String(data.get("category") ?? ""),
        message: String(data.get("message") ?? ""),
        page: window.location.href,
      });
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-700">
          Your Full Name *
          <input
            required
            name="name"
            type="text"
            placeholder="e.g. Rajesh Kumar"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <label className="grid gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-700">
          Work Email Address *
          <input
            required
            name="email"
            type="email"
            placeholder="e.g. rajesh@company.com"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-700">
          Phone Number / Mobile
          <input
            name="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <label className="grid gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-700">
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

      <label className="grid gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-700">
        Testing Requirements &amp; Standards Needed *
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Please describe your test specification, IEC standard requirements, or quantity..."
          className="resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition duration-300 hover:from-brand-500 hover:to-cyan-500 hover:shadow-lg disabled:opacity-70"
        >
          <span>{submitting ? "Submitting..." : "Submit Quotation Request"}</span>
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
            ✓ Thank you! Your enquiry has been received. Our engineers will follow up promptly!
          </p>
        )}

        {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
      </div>
    </form>
  );
}
