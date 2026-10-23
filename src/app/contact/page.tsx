import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Standard Test Equipment - Plot No. 146, JLPL Industrial Area, Sector 82, Mohali, Punjab 160062. Call +91 95017-95146.",
};

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello Standard Test Equipment, I would like to get a quote/details regarding testing instruments."
  );

  return (
    <PageShell title="Contact &amp; Quotations" crumb="Contact Us">
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 min-w-0 space-y-6">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
              Direct Manufacturer Office
            </span>
            <h2 className="mt-1 text-xl font-extrabold text-slate-900">
              {siteInfo.name}
            </h2>

            <ul className="mt-6 space-y-6 text-sm">
              {/* Address */}
              <li className="flex min-w-0 gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Works &amp; Office Address
                  </p>
                  <p className="mt-0.5 text-[13px] sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {siteInfo.address.line1}
                    <br />
                    {siteInfo.address.line2}
                    <br />
                    {siteInfo.address.line3}
                  </p>
                </div>
              </li>

              {/* Telephone */}
              <li className="flex min-w-0 gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Direct Phone / Toll Free
                  </p>
                  <a
                    href={`tel:${siteInfo.phoneHref}`}
                    className="mt-0.5 block font-bold text-brand-700 transition hover:text-brand-800 text-sm"
                  >
                    {siteInfo.phone}
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex min-w-0 gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Instant WhatsApp Chat
                  </p>
                  <a
                    href={`https://wa.me/${siteInfo.whatsappHref}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block font-bold text-emerald-600 transition hover:underline text-sm"
                  >
                    Chat with Engineering
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex min-w-0 gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Official Quotations Email
                  </p>
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="mt-0.5 block font-bold text-brand-700 transition hover:text-brand-800 break-all text-sm"
                  >
                    {siteInfo.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={siteInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
              >
                <span>Open in Google Maps</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Standard Test Equipment location map"
                src="https://www.google.com/maps?q=Plot%20No.%20146%20JLPL%20Industrial%20Area%20Sector%2082%20Mohali%20Punjab%20160062&output=embed"
                className="h-52 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-3 min-w-0">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
              Instant Quotation &amp; Support
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 tracking-tight">
              Request Equipment Quotation
            </h2>
            <p className="mt-2 text-[13px] sm:text-sm text-slate-600 leading-relaxed">
              Submit your inquiry with details of required testing apparatus or compliance standards. Our team responds with technical datasheets and official pricing.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
