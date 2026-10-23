"use client";

import { useState } from "react";
import { submitToAppsScript } from "@/lib/appsScript";

export function ProductEnquiryForm({ productName }: { productName: string }) {
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
        formType: "Product Enquiry",
        product: productName,
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        quantity: String(data.get("quantity") ?? ""),
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
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
      {/* Header */}
      <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50/80 to-sky-50/50 px-5 py-4">
        <h2 className="text-base font-extrabold tracking-tight text-slate-900">
          Request a Quotation
        </h2>
        <p className="mt-0.5 text-[13px] text-slate-600">
          Get pricing, availability and lead time for{" "}
          <span className="font-semibold text-slate-800">{productName}</span>.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Full Name *
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Rajesh Kumar"
              className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Work Email *
            <input
              required
              name="email"
              type="email"
              placeholder="e.g. rajesh@company.com"
              className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Phone Number
            <input
              name="phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
            Quantity Required
            <input
              name="quantity"
              type="text"
              placeholder="e.g. 2 Units"
              className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
          Requirement / Message *
          <textarea
            required
            name="message"
            rows={3}
            placeholder="Describe your test specification, IEC standard requirements, or any customisation needed..."
            className="mt-1 block w-full resize-y rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:from-brand-500 hover:to-cyan-500 hover:shadow-md disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>

          {sent && (
            <p className="text-xs font-semibold text-emerald-600">
              ✓ Enquiry received — our team will follow up promptly!
            </p>
          )}

          {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
        </div>
      </form>
    </div>
  );
}
