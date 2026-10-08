import type { MetadataRoute } from "next";
import { categories, products, subcategories } from "@/lib/data";

const BASE_URL = "https://www.standardtestequipment.net";
const LAST_MODIFIED = "2026-10-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/contact",
    "/blogs",
    "/delivery",
    "/privacy",
    "/terms-conditions",
    "/cancellation-and-refund",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${BASE_URL}/category/${category.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...subcategories.map((subcategory) => ({
      url: `${BASE_URL}/category/${subcategory.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...products.map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
