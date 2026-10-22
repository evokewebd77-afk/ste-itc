import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Delivery Information",
  description:
    "Shipping and delivery information for orders from Standard Test Equipment - shipments are generally dispatched within 2 days after receipt of payment.",
};

export default function DeliveryPage() {
  return (
    <PageShell title="Delivery &amp; Logistics Information" crumb="Delivery Information">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Shipments &amp; Transit Logistics</h2>
            <h3 className="mt-4 text-base font-bold text-brand-700">
              Packaging &amp; Instrument Handling
            </h3>
            <p className="mt-3 leading-relaxed text-slate-700 text-sm sm:text-base">
              Precision testing apparatus and probes are generally dispatched within 2 business days after receipt of payment or formal purchase order confirmation. Heavy apparatus such as IP test chambers and spectroradiometer integrating spheres are secured in specialized wooden crate packaging to ensure transit integrity.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700 text-sm sm:text-base">
              Shipping fees include handling, protective foam packaging, and transport insurance. Tracking details and dispatch consignment notes (LR/AWB) are provided promptly upon handover to logistics partners.
            </p>
          </section>

          <section className="rounded-2xl border border-brand-100 bg-brand-50/70 p-6">
            <h2 className="text-base font-bold text-brand-900">
              Questions about your dispatch or shipment?
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Call our logistics desk toll free at <a href={`tel:${siteInfo.phoneHref}`} className="font-bold underline">{siteInfo.phone}</a> or email <a href={`mailto:${siteInfo.email}`} className="font-bold underline">{siteInfo.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </PageShell>
  );
}
