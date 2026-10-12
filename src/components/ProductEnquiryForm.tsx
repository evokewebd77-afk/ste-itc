"use client";

import { useState } from "react";
import { siteInfo } from "@/lib/data";

export function ProductEnquiryForm({ productName }: { productName: string }) {
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
    const quantity = String(data.get("quantity") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Quotation Request: ${productName}`);
    const body = encodeURIComponent(
      `Product: ${productName}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuantity: ${quantity}\n\nRequirement / Message:\n${message}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
      setSent(true);
      setSubmitting(false);
      form.reset();
    }, 400);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs">
      <div className="border-b border-slate-100 bg-gradient-to-br from-brand-50/80 to-sky-50/50 px-6 py-5">
        <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
          Request a Quotation
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Get pricing, availability and lead time for{" "}
          <span className="font-semibold text-slate-700">{productName}</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
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
            Work Email *
            <input
              required
              name="email"
              type="email"
              placeholder="e.g. rajesh@company.com"
              className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
            Phone Number
            <input
              name="phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
            Quantity Required
            <input
              name="quantity"
              type="text"
              placeholder="e.g. 2 Units"
              className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          Requirement / Message *
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Describe your test specification, IEC standard requirements, or any customisation needed..."
            className="resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition duration-300 hover:from-brand-500 hover:to-cyan-500 hover:shadow-lg disabled:opacity-70"
          >
            <span>{submitting ? "Opening Email Client..." : "Submit Enquiry"}</span>
          </button>

          {sent && (
            <p className="text-xs font-semibold text-emerald-600">
              ✓ Your email client is launched. Our engineers will follow up promptly!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
