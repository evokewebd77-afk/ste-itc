import type { Metadata } from "next";

export const SITE_URL = "https://www.standardtestequipment.net";

export const SITE_NAME = "Standard Test Equipment";

export const DEFAULT_DESCRIPTION =
  "Testing instruments and measuring equipment manufactured and supplied from Mohali, India - IEC test probes, IP test apparatus, EMI shielding materials, spring hammers and laboratory test equipment.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/Logo_y5mqli-removebg-preview.png`;
  const imageDescription = imageAlt ?? `${title} from Standard Test Equipment`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 1200, alt: imageDescription }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: imageDescription }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export function absoluteImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}
