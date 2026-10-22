import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for the use of the Standard Test Equipment website and services.",
};

const sections = [
  {
    heading: "Use of the Website",
    body: "Our website is intended for commercial, industrial and educational use. By using our website, you agree to comply with standard trade regulations and verify technical instrument specifications with our engineering team before placing orders.",
  },
  {
    heading: "Intellectual Property & Trademarks",
    body: "All content on our website, including text, instrument photographs, graphics, logos, and technical descriptions, is the property of Standard Test Equipment and is protected by applicable copyright and intellectual property laws.",
  },
  {
    heading: "Product Descriptions & Technical Specifications",
    body: "We make every effort to ensure that the instruments and testing apparatus depicted on our website are accurately specified according to IEC and ISO standards. However, ongoing product improvements may result in minor dimensional or aesthetic updates.",
  },
  {
    heading: "Quotations, Orders & Commercial Terms",
    body: "Equipment orders are confirmed upon issuance of formal commercial proforma invoices. Taxes, delivery freight, and transit insurance are billed in accordance with agreed commercial terms.",
  },
  {
    heading: "Calibration & Warranty",
    body: "Standard Test Equipment provides standard manufacturer calibration and warranty coverage against manufacturing defects on all instruments supplied.",
  },
  {
    heading: "Limitation of Liability",
    body: "Standard Test Equipment shall not be liable for indirect or consequential damages resulting from improper installation, non-standard operating conditions, or test apparatus misuse.",
  },
  {
    heading: "Updates to Terms",
    body: "We reserve the right to amend or update these terms and conditions to reflect changes in industrial regulations, manufacturing processes, or operational practices.",
  },
];

export default function TermsPage() {
  return (
    <PageShell title="Terms &amp; Conditions" crumb="Terms &amp; Conditions">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
        <article className="space-y-6">
          <p className="leading-relaxed text-slate-700 text-sm sm:text-base">
            Welcome to Standard Test Equipment. Please review these terms and conditions carefully before utilizing our website, requesting quotations, or procuring testing instruments.
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
            For further legal inquiries or terms clarification, please contact{" "}
            <a href="mailto:steindiamkt@gmail.com" className="font-bold text-brand-700 underline">
              steindiamkt@gmail.com
            </a>.
          </div>
        </article>
      </div>
    </PageShell>
  );
}
