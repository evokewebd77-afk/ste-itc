import Link from "next/link";
import Image from "next/image";
import {
  formatPrice,
  getCategory,
  productImages,
  type Product,
} from "@/lib/data";
import { CategoryIcon } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categorySlug);
  const image = productImages[product.slug];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/80 hover:shadow-xl hover:shadow-brand-500/10"
    >
      {/* Top Tag & Category */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-block rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/50">
          {category?.name ?? "Equipment"}
        </span>
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
          IEC Standard
        </span>
      </div>

      {/* Visual Product Box */}
      <div className={`relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl ${image ? "bg-white" : "bg-gradient-to-br from-slate-50 via-brand-50/40 to-slate-100 text-brand-700 transition duration-300 group-hover:from-brand-600 group-hover:to-cyan-600 group-hover:text-white"}`}>
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="transition duration-300 group-hover:scale-110">
            <CategoryIcon slug={product.categorySlug} className="h-16 w-16" />
          </div>
        )}
      </div>

      {/* Product Title */}
      <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition group-hover:text-brand-600">
        {product.name}
      </h3>

      {/* Description Snippet */}
      <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-600">
        {product.description}
      </p>

      {/* Price & Action */}
      <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-4">
        <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Ex Tax Price
            </p>
          <p className="text-lg font-extrabold text-brand-700 group-hover:text-brand-600">
            {formatPrice(product.price)}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
          <span>Details</span>
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.6a.75.75 0 1 1 1.1-1l5.5 5.5a.75.75 0 0 1 0 1.1l-5.5 5.5a.75.75 0 1 1-1.1-1l4.15-4.25H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
