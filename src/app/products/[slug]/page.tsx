import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getCategory,
  getProduct,
  getRelatedProducts,
  products,
  siteInfo,
} from "@/lib/data";
import { CategoryIcon } from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";

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
  const enquirySubject = encodeURIComponent(`Quotation Request: ${product.name}`);
  const enquiryBody = encodeURIComponent(
    `Hello Standard Test Equipment,\n\nI would like to receive pricing and availability for:\n${product.name}\n\nCompany Name:\nLocation:\nQuantity:\n\nThank you.`,
  );
  const whatsappMsg = encodeURIComponent(
    `Hello Standard Test Equipment, I would like to enquire about: ${product.name}`,
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-5">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Link href="/" className="transition hover:text-brand-600">
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link href="/products" className="transition hover:text-brand-600">
              Products
            </Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link
              href={`/category/${product.categorySlug}`}
              className="transition hover:text-brand-600"
            >
              {category?.name}
            </Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="max-w-[40ch] truncate font-bold text-slate-900">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Product Image & Badges */}
          <div className="flex flex-col">
            <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-slate-200/90 bg-white p-12 shadow-sm">
              <div className="absolute inset-0 bg-radial-glow opacity-60 rounded-3xl" />
              <div className="relative text-brand-700 transition duration-300 hover:scale-105">
                <CategoryIcon
                  slug={product.categorySlug}
                  className="h-44 w-44 drop-shadow-lg"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
                <p className="font-bold text-brand-700">IEC Compliant</p>
                <p className="mt-0.5 text-[10px] text-slate-400">Tested to Standard</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
                <p className="font-bold text-emerald-600">In Stock</p>
                <p className="mt-0.5 text-[10px] text-slate-400">Ready for Dispatch</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
                <p className="font-bold text-slate-800">Made in India</p>
                <p className="mt-0.5 text-[10px] text-slate-400">Mohali Manufacturing</p>
              </div>
            </div>
          </div>

          {/* Product Info & Purchase CTAs */}
          <div>
            {category && (
              <Link
                href={`/category/${category.slug}`}
                className="inline-block rounded-md bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60 transition hover:bg-brand-100"
              >
                {category.name}
              </Link>
            )}

            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available in Stock
              </span>
              <span className="text-slate-300">|</span>
              <span>
                Product Code: <span className="font-mono font-bold text-slate-800">STE-{product.slug.slice(0, 8).toUpperCase()}</span>
              </span>
              <span className="text-slate-300">|</span>
              <span>Direct Manufacturer Warranty</span>
            </div>

            {/* Price Box */}
            <div className="mt-6 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/80 to-sky-50/50 p-6 shadow-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                Official Catalogue Price
              </p>
              <div className="mt-1 flex items-baseline gap-3">
                <p className="text-3xl sm:text-4xl font-extrabold text-brand-800 tracking-tight">
                  {formatPrice(product.price)}
                </p>
                <span className="text-xs font-semibold text-slate-500">
                  (Ex. Tax / GST extra as applicable)
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Includes manufacturer standard calibration and inspection report.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Product Overview
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600 text-sm">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteInfo.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500 hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call to Order</span>
              </a>

              <a
                href={`https://wa.me/${siteInfo.whatsappHref}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#20ba5a]"
              >
                <span>WhatsApp Quote</span>
              </a>

              <a
                href={`mailto:${siteInfo.email}?subject=${enquirySubject}&body=${enquiryBody}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-2xs transition hover:border-brand-500 hover:text-brand-700"
              >
                <span>Email Enquiry</span>
              </a>
            </div>

            {/* Specifications Table */}
            {product.specs && product.specs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Technical Specifications
                </h2>
                <dl className="mt-3 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`grid grid-cols-1 gap-1 px-5 py-3 text-xs sm:text-sm sm:grid-cols-3 sm:gap-4 ${
                        i % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                      }`}
                    >
                      <dt className="font-semibold text-slate-600">
                        {spec.label}
                      </dt>
                      <dd className="font-medium text-slate-900 sm:col-span-2">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-slate-200/80 pt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Related Equipment
                </p>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-slate-900">
                  More from {category?.name}
                </h2>
              </div>
              <Link
                href={`/category/${product.categorySlug}`}
                className="text-xs font-bold text-brand-700 transition hover:text-brand-900"
              >
                View full category →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
