import { notFound } from "next/navigation";
import {
  getProduct,
  productImages,
  products,
} from "@/lib/data";
import { buildProductDatasheetPdf } from "@/lib/datasheet";
import { optimizedImageUrl } from "@/lib/images";
import { absoluteImageUrl } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const image = productImages[slug];
  const pdf = buildProductDatasheetPdf(
    product,
    image ? absoluteImageUrl(optimizedImageUrl(image, slug)) : undefined,
  );
  const body: ArrayBuffer = new Uint8Array(pdf).buffer as ArrayBuffer;

  return new Response(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${slug}-datasheet.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
