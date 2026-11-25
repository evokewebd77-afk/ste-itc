import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { siteInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.standardtestequipment.net"),
  title: {
    default: "Standard Test Equipment | Testing Instruments & Measuring Equipment",
    template: "%s | Standard Test Equipment",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Standard Test Equipment | Testing Instruments & Measuring Equipment",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Standard Test Equipment",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Logo_y5mqli-removebg-preview.png",
        width: 1200,
        height: 1200,
        alt: "Standard Test Equipment logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Test Equipment | Testing Instruments & Measuring Equipment",
    description: DEFAULT_DESCRIPTION,
    images: ["/Logo_y5mqli-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteInfo.name,
            url: SITE_URL,
            email: siteInfo.email,
            telephone: siteInfo.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteInfo.address.line1} ${siteInfo.address.line2}`,
              addressLocality: "Mohali",
              addressRegion: "Punjab",
              postalCode: "160062",
              addressCountry: "IN",
            },
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
