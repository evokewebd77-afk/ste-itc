import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

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
  description:
    "Premier supplier of high-quality testing instruments and measuring equipment since 2009 - test probes & pins, EMI shielding material, IP test apparatus, spring hammer, luminary test apparatus and laboratory test apparatus from Mohali, India.",
  keywords: [
    "test probes",
    "test pins",
    "IEC 61032",
    "IEC 60529",
    "IP test apparatus",
    "EMI shielding material",
    "spring hammer test",
    "testing instruments",
    "measuring equipment",
    "Standard Test Equipment",
  ],
  openGraph: {
    title: "Standard Test Equipment | Testing Instruments & Measuring Equipment",
    description:
      "High-quality testing instruments and measuring equipment serving diverse industries across India since 2009.",
    url: "https://www.standardtestequipment.net",
    siteName: "Standard Test Equipment",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
