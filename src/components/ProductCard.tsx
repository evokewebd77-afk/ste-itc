import Link from "next/link";
import Image from "next/image";
import {
  formatPrice,
  getCategory,
  productImages,
  type Product,
} from "@/lib/data";
import { PhotoPending } from "@/components/PhotoPending";
import { optimizedImageUrl, productImageAlt } from "@/lib/images";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categorySlug);
  const image = productImages[product.slug];
  const standard =
    product.standard ??
    product.specs?.find((s) => s.label === "Standard")?.value;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/15"
    >
      {/* Visual Product Box */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-x border-t border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
        {image ? (
          <>
            <Image
              src={optimizedImageUrl(image, product.slug)}
              alt={productImageAlt(product.slug, product.name, product.categorySlug)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent" />
          </>
        ) : (
          <PhotoPending compact />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category & Standard */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="inline-block max-w-[65%] truncate rounded-full bg-gradient-to-r from-brand-50 to-cyan-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60">
            {category?.name ?? "Equipment"}
          </span>
          {standard ? (
            <span className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {standard}
            </span>
          ) : null}
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-brand-600">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-slate-500">
          {product.description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Ex Tax
            </p>
            <p className="text-base font-extrabold text-brand-700 group-hover:text-brand-600">
              {product.priceOnRequest ? "Price on request" : formatPrice(product.price)}
            </p>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-brand-700 transition group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-cyan-600 group-hover:text-white">
            Details
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.6a.75.75 0 1 1 1.1-1l5.5 5.5a.75.75 0 0 1 0 1.1l-5.5 5.5a.75.75 0 1 1-1.1-1l4.15-4.25H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
