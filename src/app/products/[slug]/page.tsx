import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getCategory,
  getProduct,
  getRelatedProducts,
  productImages,
  products,
  siteInfo,
} from "@/lib/data";
import { CategoryIcon } from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";
import { ProductEnquiryForm } from "@/components/ProductEnquiryForm";
import { InfoCard } from "@/components/InfoCard";

type Params = { slug: string };

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

  return {
    title: product.name,
    description: product.description,
  };
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
  const enquirySubject = encodeURIComponent(`Quotation Request: ${product.name}`);
  const enquiryBody = encodeURIComponent(
    `Hello Standard Test Equipment,\n\nI would like to receive pricing and availability for:\n${product.name}\n\nCompany Name:\nLocation:\nQuantity:\n\nThank you.`,
  );
  const whatsappMsg = encodeURIComponent(
    `Hello Standard Test Equipment, I would like to enquire about: ${product.name}`,
  );

  const keyFeatures = product.keyFeatures ?? [];
  const whatItDoes = product.whatItDoes ?? [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200 bg-white">
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
            <span className="truncate font-semibold text-slate-800">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ─── Main Product Section ─── */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">

          {/* ── Left: Image Column ── */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Product Image */}
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-radial-glow opacity-40" />
              {image ? (
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative text-brand-600">
                  <CategoryIcon
                    slug={product.categorySlug}
                    className="h-28 w-28 drop-shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "IEC Compliant", sub: "Tested to Standard", color: "text-brand-700" },
                { label: "In Stock", sub: "Ready to Ship", color: "text-emerald-600" },
                { label: "Made in India", sub: "Mohali, Punjab", color: "text-slate-800" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center shadow-xs"
                >
                  <p className={`text-[11px] font-bold ${badge.color}`}>{badge.label}</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">{badge.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Info Column ── */}
          <div className="flex flex-col gap-5">
            {/* Header Block */}
            <div>
              {category && (
                <Link
                  href={`/category/${category.slug}`}
                  className="mb-2 inline-block rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60 transition hover:bg-brand-100"
                >
                  {category.name}
                </Link>
              )}

              <h1 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                {product.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-600">
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock
                </span>
                <span className="text-slate-300">•</span>
                <span>
                  Code:&nbsp;
                  <span className="font-mono font-bold text-slate-800">
                    STE-{product.slug.slice(0, 8).toUpperCase()}
                  </span>
                </span>
                <span className="text-slate-300">•</span>
                <span>Manufacturer Warranty</span>
              </div>
            </div>

            {/* Overview Card */}
            <InfoCard title="Product Overview">
              {product.description}
            </InfoCard>

            {/* Technical Specifications Card */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50 via-white to-white px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M8 4v4m8 2v4m-5 2v4" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-800">
                      Technical Specifications
                    </h2>
                    <p className="mt-0.5 text-[11px] text-slate-500">Product details at a glance</p>
                  </div>
                </div>
              </div>
              {product.specs && product.specs.length > 0 ? (
                <dl className="divide-y divide-slate-100 px-3 py-1 sm:px-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-[1fr_1.5fr] gap-3 rounded-lg px-2 py-3 text-[13px] transition-colors even:bg-slate-50/70 hover:bg-brand-50/70 sm:px-3"
                    >
                      <dt className="font-medium text-slate-500">{spec.label}</dt>
                      <dd className="break-words font-semibold text-slate-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="px-5 py-4">
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Detailed specifications are available on request. Contact our
                    engineering team for a complete datasheet and calibration details.
                  </p>
                </div>
              )}
            </div>

            {/* Price & CTA Card */}
            <div className="rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-sky-50/60 shadow-xs">
              <div className="flex items-baseline justify-between gap-3 border-b border-brand-100/80 px-5 py-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  Catalogue Price
                </p>
                <p className="text-[11px] font-medium text-slate-500">
                  Ex. Tax / GST extra
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-2xl font-extrabold tracking-tight text-brand-800">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-1 text-[12px] text-slate-600">
                  Includes standard calibration &amp; inspection report
                </p>

                {/* CTA Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`tel:${siteInfo.phoneHref}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-brand-500"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call to Order
                  </a>
                  <a
                    href={`https://wa.me/${siteInfo.whatsappHref}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#20ba5a]"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.19-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" /></svg>
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${siteInfo.email}?subject=${enquirySubject}&body=${enquiryBody}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2 text-[13px] font-bold text-slate-700 shadow-xs transition hover:border-brand-400 hover:text-brand-700"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><path d="m3.5 8 8.5 6 8.5-6" /></svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Additional Info Sections ─── */}
        <div className="mt-10 space-y-8">
          {/* What It Does */}
          {whatItDoes.length > 0 && (
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
          )}

          {/* Key Features */}
          {keyFeatures.length > 0 && (
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-700">
                Key Features
              </h2>
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
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                      {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Enquiry Form */}
          <section>
            <div className="mx-auto max-w-3xl">
              <ProductEnquiryForm productName={product.name} />
            </div>
          </section>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="border-t border-slate-200 pt-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                    Related Equipment
                  </p>
                  <h2 className="mt-0.5 text-lg font-extrabold text-slate-900 sm:text-xl">
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
          )}
        </div>
      </div>
    </div>
  );
}
