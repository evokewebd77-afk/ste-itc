import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy",
  description:
    "Cancellation and refund policy of Standard Test Equipment - terms and procedures for equipment orders and services.",
};

const sections = [
  {
    heading: "Refund & Order Cancellation Eligibility",
    body: "We strive to ensure complete customer satisfaction with every instrument supplied. To be eligible for return or order cancellation, requests must be communicated within 30 days of invoice receipt, accompanied by technical feedback regarding test fixture discrepancies.",
  },
  {
    heading: "Refund Procedure",
    body: `To initiate a cancellation or refund inquiry, please email our support team at ${siteInfo.email} with your order reference number, product serial number, and reason for return.`,
  },
  {
    heading: "Processing & Settlement Method",
    body: "Approved refunds are processed within 15 to 30 business days of product inspection at our Mohali testing works. Credits are issued using the original method of commercial payment.",
  },
  {
    heading: "Policy Modifications",
    body: "Standard Test Equipment reserves the right to amend or update this policy in accordance with commercial sales laws and trade standards.",
  },
];

export default function CancellationRefundPage() {
  return (
    <PageShell
      title="Cancellation &amp; Refund Policy"
      crumb="Cancellation and Refund"
    >
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
        <article className="space-y-6">
          <p className="leading-relaxed text-slate-700 text-sm sm:text-base">
            At Standard Test Equipment, we are committed to delivering verified, high-accuracy instruments to testing laboratories and manufacturers across India. This policy outlines our return and refund guidelines.
          </p>

          <div className="space-y-6 pt-2">
            {sections.map((section) => (
              <section key={section.heading} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                <h2 className="text-base font-bold text-brand-800">
                  {section.heading}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-700 text-sm">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            For any queries regarding this policy, please reach us at{" "}
            <a href={`mailto:${siteInfo.email}`} className="font-bold text-brand-700 underline">
              {siteInfo.email}
            </a>{" "}
            or call <span className="font-bold">{siteInfo.phone}</span>.
          </div>
        </article>
      </div>
    </PageShell>
  );
}
