import Link from "next/link";
import { getProduct } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { probeSpecs, sharedProbeNote } from "@/lib/probeSpecs";

export const metadata = pageMetadata({
  title: "Test Standards & Clauses",
  description:
    "Guide to IEC 61032, IEC 60529, IEC 61010-1 and related clauses for test probes, ingress protection apparatus and laboratory test equipment. No standard PDFs or drawings are reproduced.",
  path: "/standards",
});

function ProductLink({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) return null;
  return (
    <Link
      href={`/products/${slug}`}
      className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 transition hover:text-brand-900"
    >
      {product.name}
    </Link>
  );
}

const standardGroups = [
  {
    code: "IEC 60529",
    title: "Degrees of protection provided by enclosures (IP code)",
    slugs: [
      "ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032",
      "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032",
      "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032",
      "ip4x-test-probe-d-as-per-iec-60529-and-61032",
      "rain-test-chamber-ip-x1-x2-as-per-iec-60529",
      "sand-and-dust-chamber-as-per-iec-60529",
      "stainless-steel-ipx7-ipx8-immersion-water-tank-as-per-iec-60529",
      "water-jet-nozzle-ipx5-x6-fig-6",
      "ip-x3-x4-spray-nozzle-iec-60529",
      "flow-meter-iec-60529",
    ],
  },
  {
    code: "IEC 60068-2-75",
    title: "Environmental testing - impact tests using spring hammers",
    slugs: [
      "spring-hammer-test-apparatus-as-per-iec-60068-2-75",
      "universal-spring-hammer-0-14-1-joule-as-per-iec-60068-2-75",
    ],
  },
  {
    code: "IEC 60695-10-2",
    title: "Ball pressure test for insulating materials",
    slugs: ["ball-pressure-test-apparatus"],
  },
  {
    code: "IEC 62368-1",
    title: "Audio/video, information and communication technology equipment",
    slugs: [
      "dielectric-strength-tester-as-per-iec-62368",
      "wedge-probe-fig-ee-1-as-per-iec-60950-1",
    ],
  },
  {
    code: "IEC 60335-1",
    title: "Household and similar electrical appliances - cl. 15.2 spillage",
    slugs: ["spillage-tester-as-per-iec-60335-1"],
  },
];

export default function StandardsPage() {
  const iec61032 = Object.entries(probeSpecs).filter(([, spec]) =>
    spec.standard.startsWith("IEC 61032"),
  );
  const iec61010 = Object.entries(probeSpecs).filter(([, spec]) =>
    spec.standard.startsWith("IEC 61010-1"),
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-slate-500">
            <Link href="/" className="transition hover:text-brand-600">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">Standards</span>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Test Standards &amp; Clauses
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            This index names the standards, clauses and figures used by our products.
            We do not reproduce standard PDFs or dimensioned drawings. Dimensions,
            materials, test forces and tolerances are stated in the tables on each
            product page and in its downloadable datasheet.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-[13px] leading-relaxed text-amber-900">
          <strong>Document note:</strong> confirm the applicable edition and acceptance
          criteria in the current standard before carrying out a test.
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="border-b border-slate-100 px-5 py-4">
            <h2 className="text-lg font-extrabold text-slate-900">IEC 61032 test probes</h2>
            <p className="mt-1 text-[13px] text-slate-600">
              Protection of persons against access to hazardous parts in equipment.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-[13px]">
              <thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-3">Figure / probe</th>
                  <th className="px-5 py-3">Product</th>
                  <th className="px-5 py-3">Use</th>
                  <th className="px-5 py-3">Force</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {iec61032.map(([slug, spec]) => (
                  <tr key={slug} className="align-top">
                    <td className="px-5 py-3 font-mono font-bold text-slate-700">
                      {spec.figure} / {spec.probeCode}
                    </td>
                    <td className="px-5 py-3"><ProductLink slug={slug} /></td>
                    <td className="px-5 py-3 text-slate-600">{spec.usedIn[0]?.test}</td>
                    <td className="px-5 py-3 text-slate-600">{spec.testForce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-slate-100 px-5 py-4 text-[12px] leading-relaxed text-slate-600">
            {sharedProbeNote}
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="border-b border-slate-100 px-5 py-4">
            <h2 className="text-lg font-extrabold text-slate-900">IEC 61010-1 test pins</h2>
            <p className="mt-1 text-[13px] text-slate-600">
              Safety requirements for measurement, control and laboratory equipment.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-[13px]">
              <thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-3">Clause</th>
                  <th className="px-5 py-3">Product</th>
                  <th className="px-5 py-3">Opening checked</th>
                  <th className="px-5 py-3">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {iec61010.map(([slug, spec]) => (
                  <tr key={slug} className="align-top">
                    <td className="px-5 py-3 font-mono font-bold text-slate-700">
                      {spec.usedIn[0]?.clause}
                    </td>
                    <td className="px-5 py-3"><ProductLink slug={slug} /></td>
                    <td className="px-5 py-3 text-slate-600">{spec.usedIn[0]?.test}</td>
                    <td className="px-5 py-3 text-slate-600">{spec.testForce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {standardGroups.map((group) => (
            <section
              key={group.code}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-brand-50 px-3 py-1 font-mono text-[12px] font-bold text-brand-700 ring-1 ring-brand-200/60">
                  {group.code}
                </span>
                <h2 className="text-[15px] font-extrabold text-slate-900">{group.title}</h2>
              </div>
              <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-slate-700">
                {group.slugs.map((slug) => (
                  <li key={slug} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <ProductLink slug={slug} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <h2 className="text-[15px] font-extrabold text-slate-900">Need the clause list for a different standard?</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
            Send us the product name and applicable standard. Our engineering team will
            confirm the clause, figure and dimension set before quotation.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-brand-600 px-5 py-2 text-[13px] font-bold text-white transition hover:bg-brand-500"
          >
            Contact Our Engineers
          </Link>
        </section>
      </div>
    </div>
  );
}
