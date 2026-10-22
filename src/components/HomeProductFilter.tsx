"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, products, type Product } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export function HomeProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    let list: Product[] = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    // Search query filter
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.categorySlug.toLowerCase().includes(query)
      );
    }

    // Sorting
    switch (sortOption) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        // Prioritize featured products, then latest
        list.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.latest && !b.latest) return -1;
          if (!a.latest && b.latest) return 1;
          return 0;
        });
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortOption]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasActiveFilter = selectedCategory !== "all" || searchQuery.trim() !== "";

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setVisibleCount(8); // reset pagination when switching category
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortOption("featured");
    setVisibleCount(8);
  };

  return (
    <div className="w-full">
      {/* Control Panel: Search & Filter Tabs */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
        {/* Top Controls: Search Bar & Sort Dropdown */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(8);
              }}
              placeholder="Search probes, test apparatus, chambers..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-11 pr-10 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
            <svg
              className="absolute left-4 top-3.5 h-4 w-4 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 hidden sm:inline">
              Sort:
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs font-semibold text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Horizontal scrolling or wrapped) */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Filter by Category
            </span>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-xs font-bold text-brand-600 hover:text-brand-800 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {/* All Products Pill */}
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-brand-600 text-white shadow-sm shadow-brand-600/30 scale-102"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Instruments ({products.length})
            </button>

            {/* Individual Categories */}
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-600 text-white shadow-sm shadow-brand-600/30 scale-102"
                      : "bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  <span className="truncate max-w-[200px]">{cat.name}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {cat.count ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header / Counter */}
      <div className="mt-7 flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-slate-700">
          Showing{" "}
          <span className="font-bold text-brand-700">
            {displayedProducts.length}
          </span>{" "}
          of {filteredProducts.length} matching items
          {selectedCategory !== "all" && (
            <span className="text-slate-500 font-normal">
              {" "}
              in {categories.find((c) => c.slug === selectedCategory)?.name}
            </span>
          )}
        </p>

        <Link
          href="/products"
          className="text-xs font-bold text-brand-600 transition hover:text-brand-800 hover:underline"
        >
          View Full Catalogue →
        </Link>
      </div>

      {/* Product Cards Grid */}
      {displayedProducts.length > 0 ? (
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <h4 className="mt-4 text-base font-bold text-slate-800">
            No instruments match your criteria
          </h4>
          <p className="mt-1 text-sm text-slate-600 max-w-sm mx-auto">
            Try adjusting your search terms or select &ldquo;All Instruments&rdquo; to view the complete catalog.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-5 rounded-full bg-brand-600 px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-brand-500"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* "Load More" / "View All" Button */}
      {filteredProducts.length > visibleCount && (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-xs font-bold text-slate-700 shadow-2xs transition hover:border-brand-500 hover:text-brand-700 hover:shadow-sm"
          >
            <span>Load More ({filteredProducts.length - visibleCount} remaining)</span>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-xs font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500"
          >
            <span>Go to All Products Page</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
