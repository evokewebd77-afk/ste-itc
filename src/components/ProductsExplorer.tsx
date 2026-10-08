"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "default" | "name-asc" | "name-desc" | "price-asc" | "price-desc";

export function ProductsExplorer() {
  const params = useSearchParams();
  const initialQuery = params.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list = products;

    if (category !== "all") {
      list = list.filter((p) => p.categorySlug === category);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    switch (sort) {
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        list = [...list].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return list;
  }, [query, category, sort]);

  const hasFilters = query.trim() !== "" || category !== "all" || sort !== "default";

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setSort("default");
  };

  return (
    <div>
      {/* Control Filter Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Search Box */}
          <div className="relative">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Search Catalogue
            </label>
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search probe, IP chamber, hammer..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              />
              <svg
                className="absolute left-3.5 top-3 h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            >
              <option value="all">All Categories ({products.length} Products)</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.count ?? 0})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Sort By
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            >
              <option value="default">Default Catalogue Order</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="name-desc">Alphabetical (Z - A)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filters Bar */}
        {hasFilters && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <span>Filtering results</span>
            </div>
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-bold text-brand-600 hover:text-brand-800 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600">
          Showing <span className="text-brand-700 font-bold">{filtered.length}</span> of {products.length} instruments
        </p>
      </div>

      {/* Grid of Products */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <p className="mt-4 text-base font-bold text-slate-800">No matching instruments found</p>
          <p className="mt-1 text-xs text-slate-500">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-700"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
