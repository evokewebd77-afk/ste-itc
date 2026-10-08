import Link from "next/link";
import {
  categories,
  getFeaturedProducts,
  getLatestProducts,
  siteInfo,
} from "@/lib/data";
import { CategoryIcon } from "@/components/icons";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import { HomeProductFilter } from "@/components/HomeProductFilter";

const whyUs = [
  {
    title: "Decades of Experience",
    body: "With over a decade and a half in specialized testing equipment manufacturing, our engineering team brings unparalleled domain depth across complex international test procedures.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Rigorous Quality Assurance",
    body: "Every instrument conforms to stringent quality checks and comes verified to meet applicable IEC, ISO and national standards, ensuring absolute repeatability in your lab.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Customer-Centric Technical Support",
    body: "From selecting the correct probe standard to post-installation calibration advice, our in-house technical experts offer direct guidance every step of the way.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Direct Competitive Manufacturer Pricing",
    body: "By manufacturing and sourcing directly from Mohali, Punjab, we deliver high-spec industrial test equipment with outstanding value, devoid of middleman overheads.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const standards = [
  { code: "IEC 60529", label: "IP Testing (IPX1 - IPX8 & Dust)" },
  { code: "IEC 61032", label: "Protection of Persons & Test Probes" },
  { code: "IEC 60068-2-75", label: "Spring Hammer & Impact Test" },
  { code: "IES LM-79", label: "Photometric & Spectroradiometry" },
];

const stats = [
  { value: "2009", label: "Established & Serving Industry", sub: "15+ Years Track Record" },
  { value: "50+", label: "Precision Testing Instruments", sub: "Catalog & Custom Solutions" },
  { value: "7", label: "Specialized Test Categories", sub: "Probes, Chambers, EMI & More" },
  { value: "100%", label: "IEC & ISO Standards Compliance", sub: "Factory Calibrated & Verified" },
];

export default function Home() {
  const latest = getLatestProducts();
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-[#0a1e3f] to-[#073259] text-white">
        {/* Futuristic grid background & radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 25%, rgba(6, 182, 212, 0.22), transparent 45%), radial-gradient(circle at 80% 65%, rgba(14, 165, 233, 0.2), transparent 45%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
              </span>
              <span>Leading Manufacturer Since 2009</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
              Standard Test{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-transparent">
                Equipment
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
              Premier supplier of high-precision testing instruments and measuring apparatus, serving quality control labs, R&amp;D facilities, and manufacturers across India since 2009.
            </p>

            {/* Key feature pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold text-cyan-200">
              <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
                ✓ IEC 61032 &amp; IEC 60529
              </span>
              <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
                ✓ Factory Calibrated
              </span>
              <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur-xs border border-white/15">
                ✓ Fast Pan-India Dispatch
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:from-brand-400 hover:to-cyan-400 hover:shadow-cyan-400/35 hover:-translate-y-0.5"
              >
                <span>Browse Catalogue</span>
                <svg
                  className="h-4 w-4"
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
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/50"
              >
                Request a Quote
              </Link>

              <a
                href={`tel:${siteInfo.phoneHref}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-white"
              >
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us Toll Free</span>
              </a>
            </div>
          </div>

          {/* Hero Slider */}
          <HeroSlider />
        </div>
      </section>

      {/* Compliance Standards Ticker / Strip */}
      <section className="border-b border-slate-200/80 bg-slate-900 text-slate-200 py-3.5 px-4 overflow-x-auto">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 min-w-max">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Tested To International Standards:
          </span>
          <div className="flex items-center gap-5 sm:gap-8 text-xs font-medium">
            {standards.map((std) => (
              <div key={std.code} className="flex items-center gap-2">
                <span className="font-bold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {std.code}
                </span>
                <span className="text-slate-300 hidden md:inline">{std.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-b border-slate-200/80 bg-white shadow-xs">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-4 rounded-2xl transition hover:bg-slate-50 text-center"
            >
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-700 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-bold text-slate-800">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60">
              Complete Catalogue
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Specialized Product Categories
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              Precision apparatus built to IEC standard specifications for electrical, mechanical and ingress verification.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-bold text-brand-700 transition hover:bg-brand-600 hover:text-white"
          >
            <span>View all products</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/50 transition duration-300 group-hover:from-brand-600 group-hover:to-cyan-600 group-hover:text-white group-hover:scale-105">
                    <CategoryIcon slug={cat.slug} className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-700">
                    {cat.count ?? 0} Products
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold leading-snug text-slate-900 transition group-hover:text-brand-700">
                  {cat.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand-600 transition group-hover:text-cyan-600">
                <span>Explore Range</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}

          {/* Custom Requirement Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-ink-950 via-brand-950 to-brand-900 p-6 text-white shadow-lg">
            <div>
              <span className="inline-block rounded-md bg-cyan-400/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
                Custom Instrumentation
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug">
                Custom Engineering &amp; OEM Solutions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Need customized dimensions, specialized test probes, or tailored chambers for non-standard test specifications? Tell our engineers.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-brand-900 transition hover:bg-cyan-50 hover:shadow-md"
            >
              <span>Get Custom Quote</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Products Filter Section */}
      <section className="border-y border-slate-200/80 bg-slate-100/70 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60">
                Interactive Catalogue
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Filter &amp; Explore Testing Equipment
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                Quickly search across our complete inventory of 50+ instruments, filter by test categories, or sort by specifications.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition hover:text-brand-900"
            >
              <span>View Full Catalogue</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <HomeProductFilter />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 ring-1 ring-amber-200/60">
              Industry Bestsellers
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Featured Testing Apparatus
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Top choice apparatus trusted by testing laboratories and certification agencies across India.
            </p>
          </div>
          <Link
            href="/category/test-probes-and-test-pins"
            className="text-sm font-bold text-brand-700 transition hover:text-brand-900"
          >
            Explore Test Probes &amp; Pins →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-[#0d162a] to-ink-950 py-20 sm:py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-cyan-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
              Why Standard Test Equipment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl tracking-tight text-white">
              Built on Quality, Backed by Engineering Experience
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              At Standard Test Equipment, our mission is to empower testing laboratories, quality control facilities, and manufacturers with instruments that guarantee accuracy, repeatability, and safety.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-cyan-600 text-white shadow-md">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm font-extrabold text-cyan-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-cyan-600 text-white py-14 px-4 shadow-xl">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
              Instant Engineering Assistance
            </span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl text-white">
              Need help choosing the right test apparatus?
            </h2>
            <p className="mt-2 text-sm text-cyan-100">
              Speak directly with our technical team in Mohali, Punjab — call us toll free at{" "}
              <a href={`tel:${siteInfo.phoneHref}`} className="font-bold underline text-white hover:text-cyan-200">
                {siteInfo.phone}
              </a>{" "}
              or message us for a prompt quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${siteInfo.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-md transition hover:bg-cyan-50 hover:scale-105"
            >
              <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xs transition hover:bg-white/20"
            >
              <span>Send An Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
