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
    body: "With over a decade in the industry, our expertise in testing equipment is unparalleled. Our team is equipped with in-depth knowledge of various testing procedures and machinery.",
  },
  {
    title: "Quality Assurance",
    body: "We only offer products that meet stringent quality checks and come with necessary certifications to ensure they meet international standards.",
  },
  {
    title: "Customer-Centric Approach",
    body: "We pride ourselves on understanding the unique needs of our clients and providing them with the right solutions. Our customer support team is always available to offer assistance and technical guidance.",
  },
  {
    title: "Competitive Pricing",
    body: "While we never compromise on quality, we also ensure that our pricing is competitive, offering the best value for money to our clients.",
  },
];

export default function AboutPage() {
  return (
    <PageShell title="About Standard Test Equipment" crumb="About Us">
      <article className="space-y-12">
        {/* Main Introduction Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
          <div className="inline-block rounded-md bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60 mb-4">
            Established 2009 • Delhi, India
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Engineering Precision For Critical Industrial Testing
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
            Standard Test Equipment has established itself as a premier supplier of high-quality testing instruments and measuring equipment, serving diverse industries across India. Since our inception in 2009, we have been committed to providing products that meet the highest standards of performance, durability, and accuracy. Based in Delhi, we are proud to be a trusted name in the industry, known for delivering precision-engineered instruments.
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
              At Standard Test Equipment, our mission is to equip industries with cutting-edge tools that ensure the accuracy, reliability, and safety of their processes. We believe in building lasting relationships with our clients by delivering only the best quality equipment and providing exceptional after-sales support.
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
              As we move forward, we aim to expand our reach and continue offering innovative testing solutions to new markets and industries. Our focus remains on maintaining the highest level of customer satisfaction by offering advanced technology and reliable service.
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
