"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

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
  {
    title: "IEC & ISO Compliant",
    body: "All instruments are built to meet IEC, ISO and relevant national test standards, with documented traceability for audit readiness.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6l-8-3Z" />
      </svg>
    ),
  },
];

const cardAccents = [
  { strip: "from-brand-500 via-cyan-400 to-cyan-300", visual: "from-brand-50 via-cyan-50 to-slate-100", glow: "bg-brand-400/40" },
  { strip: "from-amber-500 via-amber-400 to-orange-300", visual: "from-amber-50 via-orange-50 to-slate-100", glow: "bg-amber-400/40" },
  { strip: "from-emerald-500 via-teal-400 to-teal-300", visual: "from-emerald-50 via-teal-50 to-slate-100", glow: "bg-emerald-400/40" },
  { strip: "from-violet-500 via-fuchsia-400 to-fuchsia-300", visual: "from-violet-50 via-fuchsia-50 to-slate-100", glow: "bg-violet-400/40" },
  { strip: "from-rose-500 via-pink-400 to-pink-300", visual: "from-rose-50 via-pink-50 to-slate-100", glow: "bg-rose-400/40" },
  { strip: "from-slate-700 via-slate-500 to-slate-400", visual: "from-slate-100 via-slate-50 to-slate-100", glow: "bg-slate-500/40" },
  { strip: "from-cyan-500 via-sky-400 to-brand-300", visual: "from-cyan-50 via-sky-50 to-slate-100", glow: "bg-cyan-400/40" },
];

const testimonials = [
  {
    initials: "JD",
    name: "John Davis",
    role: "Quality Manager, TechCorp",
    content:
      "Their testing equipment has been instrumental in maintaining our quality standards. Their EMI shielding solutions are top-notch and their support team is exceptional.",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    role: "Test Engineer, AutoTech",
    content:
      "The precision and reliability of their test probes have significantly improved our testing accuracy. Fast delivery and excellent customer service.",
  },
  {
    initials: "RJ",
    name: "Robert Johnson",
    role: "R&D Director, AeroSystems",
    content:
      "Outstanding quality and performance. Their impact testing equipment meets all our aerospace requirements. Highly recommended for critical applications.",
  },
  {
    initials: "AP",
    name: "Anil Patel",
    role: "Lab Incharge, Indus Labs",
    content:
      "Consistent quality, prompt calibration support and competitive pricing. STE has been our go-to vendor for IEC-compliant test probes for years.",
  },
  {
    initials: "NK",
    name: "Neha Khanna",
    role: "QA Head, Lumina Lighting",
    content:
      "Their LM-79 apparatus and technical guidance helped us streamline compliance. The team is knowledgeable, responsive and easy to work with.",
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

const popularLinks = [
  { slug: "test-probes-and-test-pins", label: "Test Probes" },
  { slug: "ip-test-apparatus", label: "IP Testing" },
  { slug: "spring-hammer-test-apparatus", label: "Spring Hammer" },
  { slug: "emi-shielding-material", label: "EMI Shielding" },
];

export default function Home() {
  const testimonialsTrack = useRef<HTMLDivElement>(null);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const [testimonialsHovered, setTestimonialsHovered] = useState(false);
  const [testimonialsFocused, setTestimonialsFocused] = useState(false);
  const latest = getLatestProducts();
  const featured = getFeaturedProducts().filter(
    (p) => p.slug !== "test-probe-12-as-per-iec-61032",
  );
  const catalogueCategories = categories.filter((c) => (c.count ?? 0) > 0);

  useEffect(() => {
    if (testimonialsPaused || testimonialsHovered || testimonialsFocused) return;

    const intervalId = window.setInterval(() => {
      const track = testimonialsTrack.current;
      const firstCard = track?.firstElementChild;

      if (!track || !firstCard) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({
          left: firstCard.getBoundingClientRect().width + 24,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [testimonialsFocused, testimonialsHovered, testimonialsPaused]);

  function moveTestimonials(direction: number) {
    const track = testimonialsTrack.current;
    const firstCard = track?.firstElementChild;

    if (track && firstCard) {
      track.scrollBy({
        left: direction * (firstCard.getBoundingClientRect().width + 24),
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-[#0a1e3f] to-[#073259] text-white">
        {/* Grid + soft glow */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(6, 182, 212, 0.16), transparent 50%)",
          }}
        />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-brand-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
              </span>
              <span>Leading Manufacturer Since 2009</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
              Standard Test{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                Equipment
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-cyan-300">Precision in Every Test.</span>{" "}
              <span className="text-white">Confidence in Every Result.</span>
            </p>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              Premier supplier of high-precision testing instruments and measuring apparatus, serving quality control labs, R&amp;D facilities, and manufacturers across India since 2009.
            </p>

            {/* Slim feature list */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-300">
              {["IEC 61032 & IEC 60529", "Factory Calibrated", "Fast Pan-India Dispatch"].map(
                (label) => (
                  <span key={label} className="inline-flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.79a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {label}
                  </span>
                )
              )}
            </div>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition duration-300 hover:from-brand-400 hover:to-cyan-400 hover:-translate-y-0.5"
              >
                <span>Browse Catalogue</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15 hover:border-white/40"
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

            {/* Popular quick links (inline, lightweight) */}
            <div className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-slate-500">
                Popular:
              </span>
              {popularLinks.map((item, i) => (
                <span key={item.slug} className="inline-flex items-center gap-2.5">
                  {i > 0 && <span className="text-slate-600">·</span>}
                  <Link
                    href={`/category/${item.slug}`}
                    className="font-medium text-slate-300 transition hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Hero Slider */}
          <div className="relative">
            <HeroSlider />
          </div>
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogueCategories.map((cat, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/15"
              >
                {/* Accent top strip */}
                <span
                  className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${accent.strip}`}
                />

                {/* Visual banner with icon */}
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accent.visual} m-3 border border-slate-100`}
                >
                  {cat.slug === "emi-shielding-material" ||
                  cat.slug === "test-probes-and-test-pins" ||
                  cat.slug === "testing-apparatus-luminary-test" ||
                  cat.slug === "spring-hammer-test-apparatus" ||
                  cat.slug === "ip-test-apparatus" ||
                  cat.slug === "laboratory-test-apparatus" ? (
                    <Image
                      src={
                        cat.slug === "emi-shielding-material"
                          ? "https://res.cloudinary.com/didtfhfme/image/upload/v1791612418/9d2b8d6b-81d8-43b6-9d56-57d2fee2b015_guvz9h.png"
                          : cat.slug === "test-probes-and-test-pins"
                            ? "https://res.cloudinary.com/didtfhfme/image/upload/v1791612291/d79993d3-3742-412b-88d4-9d24a40da898_bwuusb.png"
                            : cat.slug === "testing-apparatus-luminary-test"
                              ? "https://res.cloudinary.com/didtfhfme/image/upload/v1791612933/6004734b-3d43-4b44-909e-c15ec3184449_vkabi1.png"
                              : cat.slug === "spring-hammer-test-apparatus"
                                ? "https://res.cloudinary.com/didtfhfme/image/upload/v1791613503/8a61ff8c-5d13-409c-85f0-e135defcaf72_evbjmr.png"
                                : cat.slug === "ip-test-apparatus"
                                  ? "https://res.cloudinary.com/didtfhfme/image/upload/v1791613651/47964f1e-2300-41ad-a017-8fb738f840a8_og5fms.png"
                                  : "https://res.cloudinary.com/didtfhfme/image/upload/v1791613737/3fc37b17-719c-4459-8e4b-237a081e8195_jgtupm.png"
                      }
                      alt={
                        cat.slug === "emi-shielding-material"
                          ? "EMI shielding material"
                          : cat.slug === "test-probes-and-test-pins"
                            ? "Test probes and test pins"
                            : cat.slug === "testing-apparatus-luminary-test"
                              ? "Testing apparatus"
                              : cat.slug === "spring-hammer-test-apparatus"
                                ? "Spring hammer test apparatus"
                                : cat.slug === "ip-test-apparatus"
                                  ? "IP test apparatus"
                                  : "Laboratory test apparatus"
                      }
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-grid-pattern-light opacity-70" />
                      <div
                        className={`pointer-events-none absolute -bottom-12 h-28 w-28 rounded-full blur-2xl ${accent.glow}`}
                      />
                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/95 text-brand-700 shadow-lg ring-1 ring-slate-200/70 backdrop-blur transition duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl">
                        <CategoryIcon slug={cat.slug} className="h-9 w-9" />
                      </div>
                    </>
                  )}

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/20">
                    <svg
                      className="h-3 w-3 text-cyan-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    IEC Verified
                  </span>

                  <span className="absolute right-3 top-3 font-mono text-xs font-extrabold tracking-wider text-slate-400/80">
                    0{i + 1}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-5 pb-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-extrabold uppercase leading-snug tracking-wide text-slate-900 transition group-hover:text-brand-700">
                      {cat.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700 ring-1 ring-brand-100">
                      {cat.count ?? 0} Items
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {cat.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Standard Test Equipment
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition group-hover:text-cyan-600">
                      <span>Explore Range</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
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
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block rounded-md bg-cyan-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
              Why Standard Test Equipment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl tracking-tight text-white max-w-3xl">
              Built on Quality, Backed by Engineering Experience
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              At Standard Test Equipment, our mission is to empower testing laboratories, quality control facilities, and manufacturers with instruments that guarantee accuracy, repeatability, and safety.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] ${
                  i < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-cyan-600 text-white shadow-md shadow-brand-600/30">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm font-extrabold text-cyan-400/80">
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

      {/* Testimonials Section */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern-light opacity-40" />
        <div className="pointer-events-none absolute -top-24 -right-32 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/60">
              Customer Reviews
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">
              Trusted by industry leaders and testing laboratories across India for accuracy, reliability and support.
            </p>
          </div>

          <div
            className="mt-10"
            onMouseEnter={() => setTestimonialsHovered(true)}
            onMouseLeave={() => setTestimonialsHovered(false)}
            onFocusCapture={() => setTestimonialsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setTestimonialsFocused(false);
              }
            }}
          >
            <div className="flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => moveTestimonials(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={testimonialsPaused ? "Resume testimonial autoplay" : "Pause testimonial autoplay"}
                aria-pressed={testimonialsPaused}
                onClick={() => setTestimonialsPaused((paused) => !paused)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                {testimonialsPaused ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => moveTestimonials(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div
              ref={testimonialsTrack}
              className="mt-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group relative flex min-h-56 w-full shrink-0 snap-start flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/70 hover:shadow-xl hover:shadow-brand-500/10 sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-amber-400" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-600 text-sm font-bold text-white shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <figcaption className="text-sm font-bold text-slate-900">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>

                <blockquote className="mt-4 text-xs leading-relaxed text-slate-600">
                  “{t.content}”
                </blockquote>

                <div className="mt-5 flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .587l3.668 7.431 8.332 1.212-6.001 5.851 1.416 8.262L12 18.896l-7.415 3.897 1.416-8.262-6.001-5.851 8.332-1.212z" />
                    </svg>
                  ))}
                </div>
              </figure>
              ))}
            </div>
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
