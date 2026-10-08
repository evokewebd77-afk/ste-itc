import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategory,
  getProductsByCategory,
  getProductsBySubcategory,
  getSubcategory,
  subcategories,
} from "@/lib/data";
import { CategoryIcon } from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...categories.map((c) => ({ slug: c.slug })),
    ...subcategories.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug) ?? getSubcategory(slug);
  if (!category) return { title: "Category" };

  return {
    title: category.name,
    description: category.name + " - products from Standard Test Equipment",
  };
}

function Sidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="lg:w-72 lg:shrink-0">
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Categories Directory
        </h2>
        <ul className="mt-4 space-y-1.5">
          {categories.map((cat) => {
            const isActive = activeSlug === cat.slug;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className={`flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition ${
                    isActive
                      ? "bg-brand-600 font-bold text-white shadow-xs shadow-brand-600/30"
                      : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  <span className="leading-snug">{cat.name}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {cat.count ?? 0}
                  </span>
                </Link>
                {cat.slug === "testing-apparatus-luminary-test" && (
                  <ul className="ml-3 mt-1.5 space-y-1 border-l-2 border-brand-100 pl-3">
                    {subcategories
                      .filter((s) => s.parentId === cat.slug)
                      .map((sub) => {
                        const isSubActive = activeSlug === sub.slug;
                        return (
                          <li key={sub.slug}>
                            <Link
                              href={`/category/${sub.slug}`}
                              className={`block rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition ${
                                isSubActive
                                  ? "bg-brand-50 font-bold text-brand-700"
                                  : "text-slate-500 hover:text-brand-700"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const category = getCategory(slug);
  const subcategory = getSubcategory(slug);
  if (!category && !subcategory) notFound();

  const parent = subcategory
    ? getCategory(subcategory.parentId)
    : undefined;

  const products = subcategory
    ? getProductsBySubcategory(slug)
    : getProductsByCategory(slug);

  const childSubs = subcategories.filter((s) => s.parentId === slug);

  const title = subcategory ? subcategory.name : category!.name;
  const description = subcategory
    ? `Products under ${subcategory.name} from Standard Test Equipment, Mohali, India.`
    : category!.description;

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
            {parent && (
              <>
                <Link
                  href={`/category/${parent.slug}`}
                  className="transition hover:text-brand-600"
                >
                  {parent.name}
                </Link>
                <span aria-hidden="true" className="text-slate-300">/</span>
              </>
            )}
            <span className="font-bold text-slate-900">{title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Sidebar activeSlug={slug} />

          <div className="min-w-0 flex-1">
            {/* Category Hero Banner */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-600 text-white shadow-md">
                  <CategoryIcon
                    slug={subcategory?.parentId ?? slug}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                    IEC Tested Apparatus Range
                  </span>
                  <h1 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
                    {title}
                  </h1>
                  {description && (
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Subcategory Filter Pills */}
            {childSubs.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Subcategories
                </h2>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {childSubs.map((sub) => {
                    const count = getProductsBySubcategory(sub.slug).length;
                    return (
                      <Link
                        key={sub.slug}
                        href={`/category/${sub.slug}`}
                        className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {sub.name} <span className="text-slate-400">({count})</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="mt-8">
                <div className="flex items-center justify-between pb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Available Instruments ({products.length})
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <CategoryIcon slug={slug} className="h-6 w-6" />
                </div>
                <p className="mt-4 text-base font-bold text-slate-800">
                  No products in this category yet
                </p>
                <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                  We are continuously expanding our catalogue. Contact our Mohali engineering office for custom manufacturing or lead times.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-brand-600 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-brand-700"
                >
                  Contact Our Engineers
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
