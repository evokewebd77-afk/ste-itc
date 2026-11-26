import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getCategory,
  getProduct,
  getProductCode,
  getRelatedProducts,
  productImages,
  products,
  siteInfo,
  type Product,
} from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageViewer } from "@/components/ProductImageViewer";
import { ProductEnquiryForm } from "@/components/ProductEnquiryForm";
import { InfoCard } from "@/components/InfoCard";
import { JsonLd } from "@/components/JsonLd";
import { PhotoPending } from "@/components/PhotoPending";
import { optimizedImageUrl, productImageAlt } from "@/lib/images";
import { sharedProbeNote } from "@/lib/probeSpecs";
import { absoluteImageUrl, pageMetadata, SITE_URL } from "@/lib/seo";

type Params = { slug: string };

const excludedSpecLabels = new Set([
  "Brand",
  "Packaging Type",
  "Pack Type",
  "Minimum Order Quantity",
  "I Deal In",
  "Display Type",
  "Storage Material",
  "Head Material",
  "Metal Pole Diameter",
  "Metal Club Weight",
  "Max Measure Range",
  "Max Strength",
  "Creepage Distances",
  "Finishing",
]);

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };

  const image = productImages[product.slug];
  return pageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
    image: image ? optimizedImageUrl(image, product.slug) : undefined,
    imageAlt: productImageAlt(product.slug, product.name, product.categorySlug),
  });
}

function SpecRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-slate-100 px-3 py-1 sm:px-4">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[1fr_1.5fr] gap-3 rounded-lg px-2 py-3 text-[13px] transition-colors even:bg-slate-50/70 hover:bg-brand-50/70 sm:px-3"
        >
          <dt className="font-medium text-slate-500">{row.label}</dt>
          <dd className="break-words font-semibold text-slate-900">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function CardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50 via-white to-white px-5 py-4">
        <h2 className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-800">
          {title}
        </h2>
        {subtitle ? <p className="mt-0.5 text-[11px] text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </div>
  );
}

function summarySpecs(product: Product): { label: string; value: string }[] {
  return (product.specs ?? []).filter((spec) => !excludedSpecLabels.has(spec.label));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const related = getRelatedProducts(product);
  const image = productImages[product.slug];
  const specs = summarySpecs(product);
  const hasProbeFields = Boolean(product.dimensions?.length || product.materials?.length);
  const enquirySubject = encodeURIComponent(`Quotation Request: ${product.name}`);
  const enquiryBody = encodeURIComponent(
    `Hello Standard Test Equipment,\n\nI would like to receive pricing and availability for:\n${product.name}\n\nCompany Name:\nLocation:\nQuantity:\n\nThank you.`,
  );
  const whatsappMsg = encodeURIComponent(
    `Hello Standard Test Equipment, I would like to enquire about: ${product.name}`,
  );

  // GL Spectis / GL OPTI SPHERE items are made by GL Optic, not by STE, and
  // products without a named standard (e.g. EMI tapes) must not claim IEC.
  const isGlOptic = product.subcategorySlug?.startsWith("gl-") ?? false;
  const hasStandard =
    Boolean(product.standard) ||
    /IEC|IS \d/.test(product.name) ||
    (product.specs ?? []).some(
      (s) => /standard/i.test(s.label) && /IEC|IS \d/.test(s.value),
    );
  const trustBadges = isGlOptic
    ? [
        { label: "GL Optic", sub: "Original Brand", color: "text-brand-700" },
        { label: "Supplied by STE", sub: "Mohali, Punjab", color: "text-slate-800" },
        { label: "Quotation", sub: "On Request", color: "text-cyan-700" },
      ]
    : [
        hasStandard
          ? { label: "Standards-Based", sub: "Built to named standard", color: "text-brand-700" }
          : { label: "Quotation", sub: "On Request", color: "text-brand-700" },
        { label: "Made in India", sub: "Mohali, Punjab", color: "text-slate-800" },
        { label: "Manufacturer", sub: "Direct Supply", color: "text-cyan-700" },
      ];


  const keyFeatures = product.keyFeatures ?? [];
  const whatItDoes = product.whatItDoes ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: getProductCode(product),
    description: product.description,
    category: category?.name,
    image: image ? [absoluteImageUrl(optimizedImageUrl(image, product.slug))] : undefined,
    brand: { "@type": "Brand", name: siteInfo.name },
    offers: product.priceOnRequest
      ? undefined
      : {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/products/${product.slug}`,
        },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <JsonLd data={jsonLd} />

      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 py-3 text-[12px] font-medium text-slate-500">
            <Link href="/" className="whitespace-nowrap transition hover:text-brand-600">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/products" className="whitespace-nowrap transition hover:text-brand-600">
              Products
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href={`/category/${product.categorySlug}`}
              className="whitespace-nowrap transition hover:text-brand-600"
            >
              {category?.name}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="truncate font-semibold text-slate-800">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-200 via-cyan-100 to-slate-200 p-1 shadow-lg shadow-brand-500/10">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.35rem] border border-white bg-white">
                <div className="absolute inset-0 bg-radial-glow opacity-50" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
                {image ? (
                  <ProductImageViewer
                    src={optimizedImageUrl(image, product.slug)}
                    alt={productImageAlt(product.slug, product.name, product.categorySlug)}
                  />
                ) : (
                  <PhotoPending />
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {trustBadges.map((badge, i) => (
                <div
                  key={badge.label}
                  className={`rounded-2xl border px-3 py-2.5 text-center shadow-xs backdrop-blur ${
                    i === 0
                      ? "border-brand-200 bg-gradient-to-br from-brand-50 to-white"
                      : "border-slate-200 bg-white/80"
                  }`}
                >
                  <span
                    className={`mx-auto mb-1 block h-1.5 w-1.5 rounded-full ${
                      i === 0 ? "bg-brand-600" : i === 1 ? "bg-slate-700" : "bg-cyan-600"
                    }`}
                  />
                  <p className={`text-[11px] font-extrabold ${badge.color}`}>{badge.label}</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-cyan-500 to-brand-200" />
              {category ? (
                <Link
                  href={`/category/${category.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-50 to-cyan-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60 transition hover:from-brand-100 hover:to-cyan-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {category.name}
                </Link>
              ) : null}

              <h1 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[11px] font-bold text-white">
                  Code: {getProductCode(product)}
                </span>
                {product.standard ? (
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700 ring-1 ring-brand-200/60">
                    {product.standard}
                  </span>
                ) : null}
              </div>
            </div>

            <InfoCard title="Product Overview">{product.description}</InfoCard>

            {hasProbeFields ? (
              <>
                <InfoCard title="Standard & Figure">
                  <p className="text-[13px] leading-relaxed text-slate-700">
                    {product.definition}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 ring-1 ring-brand-200/60">
                      {product.standard}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      {product.figure}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      Probe {product.probeCode}
                    </span>
                  </div>
                </InfoCard>

                {product.dimensions?.length ? (
                  <CardShell title="Key Dimensions" subtitle="Values and tolerances are stated without reproducing the standard drawing">
                    <div className="overflow-x-auto px-3 py-2 sm:px-4">
                      <table className="w-full min-w-[420px] text-left text-[12px]">
                        <thead>
                          <tr className="border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            <th className="py-2 pr-3">Parameter</th>
                            <th className="py-2 pr-3">Value</th>
                            <th className="py-2">Tolerance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {product.dimensions.map((row) => (
                            <tr key={row.parameter} className="align-top">
                              <td className="py-2.5 pr-3 font-medium text-slate-600">{row.parameter}</td>
                              <td className="py-2.5 pr-3 font-bold text-slate-900">{row.value}</td>
                              <td className="py-2.5 text-slate-600">{row.tolerance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardShell>
                ) : null}

                {product.materials?.length ? (
                  <CardShell title="Materials & Finish">
                    <div className="overflow-x-auto px-3 py-2 sm:px-4">
                      <table className="w-full min-w-[320px] text-left text-[12px]">
                        <thead>
                          <tr className="border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            <th className="py-2 pr-3">Part</th>
                            <th className="py-2">Material</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {product.materials.map((row) => (
                            <tr key={row.part}>
                              <td className="py-2.5 pr-3 font-medium text-slate-600">{row.part}</td>
                              <td className="py-2.5 font-bold text-slate-900">{row.material}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="border-t border-slate-100 px-5 py-3 text-[12px] leading-relaxed text-slate-600">
                      {sharedProbeNote}
                    </p>
                  </CardShell>
                ) : null}

                <InfoCard title="Test Conditions & Supply">
                  <div className="space-y-3 text-[13px] leading-relaxed text-slate-700">
                    {product.testForce ? (
                      <p>
                        <span className="font-bold text-slate-900">Test force: </span>
                        {product.testForce}
                      </p>
                    ) : null}
                    {product.usedIn?.length ? (
                      <div>
                        <p className="font-bold text-slate-900">Used in:</p>
                        <ul className="mt-1 space-y-1">
                          {product.usedIn.map((use) => (
                            <li key={`${use.standard}-${use.clause}`}>
                              {use.standard} {use.clause} - {use.test}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {product.supplied ? (
                      <p>
                        <span className="font-bold text-slate-900">Supplied with: </span>
                        {product.supplied}
                      </p>
                    ) : null}
                  </div>
                </InfoCard>
              </>
            ) : null}

            <CardShell title="Technical Specifications" subtitle="Product details at a glance">
              {specs.length > 0 ? (
                <SpecRows rows={specs} />
              ) : hasProbeFields ? (
                <div className="px-5 py-4">
                  <p className="text-[13px] text-slate-600">
                    The standard-compliant values are listed in the tables above.
                  </p>
                </div>
              ) : (
                <div className="px-5 py-4">
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Detailed specifications are available on request. Contact our
                    engineering team for the applicable clause list and dimensions.
                  </p>
                </div>
              )}
            </CardShell>

            <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-sky-50/70 to-white shadow-md shadow-brand-500/10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl" />
              <div className="relative flex items-baseline justify-between gap-3 border-b border-brand-100/80 px-5 py-3">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand-700">
                  Catalogue Price
                </p>
                <p className="text-[11px] font-medium text-slate-500">Ex. Tax / GST extra</p>
              </div>
              <div className="relative px-5 py-4">
                <p className="text-3xl font-extrabold tracking-tight text-brand-800">
                  {product.priceOnRequest ? "Price on request" : formatPrice(product.price)}
                </p>
                <p className="mt-1 text-[12px] text-slate-600">
                  {product.supplied ?? "Inspection report: confirm with supplier"}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`tel:${siteInfo.phoneHref}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 px-5 py-2.5 text-[13px] font-bold text-white shadow-md shadow-brand-500/20 transition hover:-translate-y-0.5 hover:from-brand-500 hover:to-cyan-500"
                  >
                    Call to Order
                  </a>
                  <a
                    href={`https://wa.me/${siteInfo.whatsappHref}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#20ba5a]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`/products/${product.slug}/datasheet.pdf`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-300 bg-white px-5 py-2.5 text-[13px] font-bold text-brand-700 shadow-xs transition hover:border-brand-500 hover:bg-brand-50"
                  >
                    Download Datasheet
                  </a>
                  <a
                    href={`mailto:${siteInfo.email}?subject=${enquirySubject}&body=${enquiryBody}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-bold text-slate-700 shadow-xs transition hover:border-brand-400 hover:text-brand-700"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {whatItDoes.length > 0 ? (
            <InfoCard title="What It Does">
              <div className="space-y-4">
                {whatItDoes.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42.008l-3.8-3.75a1 1 0 1 1 1.405-1.424l3.09 3.05 6.506-6.56a1 1 0 0 1 1.413.002Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-slate-800">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </InfoCard>
          ) : null}

          {keyFeatures.length > 0 ? (
            <section>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-gradient-to-b from-brand-600 to-cyan-500" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
                  Key Features
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {keyFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42.008l-3.8-3.75a1 1 0 1 1 1.405-1.424l3.09 3.05 6.506-6.56a1 1 0 0 1 1.413.002Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold leading-snug text-slate-800">{item.title}</p>
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <div className="mx-auto max-w-3xl">
              <ProductEnquiryForm productName={product.name} />
            </div>
          </section>

          {related.length > 0 ? (
            <section className="border-t border-slate-200 pt-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                      Related Equipment
                    </p>
                  </div>
                  <h2 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                    More from {category?.name}
                  </h2>
                </div>
                <Link
                  href={`/category/${product.categorySlug}`}
                  className="shrink-0 text-[12px] font-bold text-brand-600 transition hover:text-brand-800"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => (
                  <ProductCard key={item.slug} product={item} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
