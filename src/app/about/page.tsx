import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Standard Test Equipment has been a premier supplier of high-quality testing instruments and measuring equipment since 2009, serving diverse industries across India.",
};

const reasons = [
  {
    title: "Decades of Experience",
    body: "With over 15 years in the precision testing equipment domain, our expertise is second to none. Our engineering team possesses in-depth knowledge of international standards, mechanical tolerances, and sensor electronics.",
  },
  {
    title: "Uncompromising Quality Assurance",
    body: "Every instrument undergoes strict pre-dispatch inspection and is verified against relevant IEC, ISO and national standards for repeat accuracy and rugged field durability.",
  },
  {
    title: "Customer-Centric Engineering Support",
    body: "We understand that every quality control laboratory has unique test fixtures and constraints. Our dedicated application support engineers help you select, calibrate, and deploy the right equipment.",
  },
  {
    title: "Direct Competitive Manufacturer Pricing",
    body: "By developing, assembling, and calibrating instruments in-house at Mohali, Punjab, we provide direct manufacturer pricing without distributor markups.",
  },
];

export default function AboutPage() {
  return (
    <PageShell title="About Standard Test Equipment" crumb="About Us">
      <article className="space-y-12">
        {/* Main Introduction Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
          <div className="inline-block rounded-md bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60 mb-4">
            Established 2009 • Mohali, India
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Engineering Precision For Critical Industrial Testing
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
            Standard Test Equipment has established itself as a premier manufacturer and supplier of high-quality testing instruments and measuring equipment, serving quality control divisions, R&amp;D laboratories, and manufacturing plants across India. Since our inception in 2009, we have been steadfastly committed to instruments known for pinpoint accuracy, compliance, and long-term durability.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
            Headquartered in the JLPL Industrial Area of Mohali, Punjab, we specialize in IEC 60529 IP ingress testing chambers, IEC 61032 finger and pin test probes, EMI shielding conductive fabrics and tapes, spring hammer impact testers, and photometric luminary analysis apparatus.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-brand-200/70 bg-gradient-to-br from-brand-50 to-white p-8 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Our Mission
            </span>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Reliable Accuracy for Every Quality Laboratory
            </h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
              To equip industries with dependable, internationally compliant testing apparatus that ensures the safety, performance, and certification readiness of their manufactured products.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-950 via-brand-950 to-ink-900 p-8 text-white shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our Vision
            </span>
            <h3 className="mt-2 text-xl font-bold text-white">
              India&apos;s Foremost Precision Testing Partner
            </h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              To continuously innovate testing instrumentation, adopting advanced digital sensing and computerized reporting to lead Indian testing standards on the global stage.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Standard Test Equipment?
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition hover:border-brand-400 hover:shadow-md"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-xs font-bold text-white shadow-xs">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-bold text-slate-900 text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="/products"
            className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500"
          >
            Explore Product Catalogue
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-2xs transition hover:border-brand-400 hover:text-brand-700"
          >
            Request Quotation
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
