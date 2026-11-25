import type { MetadataRoute } from "next";
import { categories, productImages, products, subcategories } from "@/lib/data";
import { optimizedImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = "2026-11-25";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/standards",
    "/about",
    "/contact",
    "/delivery",
    "/privacy",
    "/terms-conditions",
    "/cancellation-and-refund",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${SITE_URL}/category/${category.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...subcategories.map((subcategory) => ({
      url: `${SITE_URL}/category/${subcategory.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...products.map((product) => {
      const image = productImages[product.slug];
      return {
        url: `${SITE_URL}/products/${product.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        images: image
          ? [optimizedImageUrl(image)]
          : [`${SITE_URL}/Logo_y5mqli-removebg-preview.png`],
      };
    }),
  ];
}
