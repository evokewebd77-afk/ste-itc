"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteInfo } from "@/lib/data";

const slideTitles = [
  "Photometric & Spectroradiometer Systems",
  "Precision Test Probes & IEC Pin Probes",
  "Ingress Protection (IPX1 - IPX8) Apparatus",
  "EMI Shielding & Conductive Materials",
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const banners = siteInfo.banners;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(id);
  }, [banners.length]);

  return (
    <div className="relative w-full">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-brand-500/30 blur-xl opacity-50" />

      {/* Main Slider Unit */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 shadow-2xl backdrop-blur-md">
        {/* Top tech badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
            Featured Instrument
          </span>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-20 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md">
          0{index + 1} / 0{banners.length}
        </div>

        {/* Slide Images */}
        {banners.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-in-out ${
              i === index
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Testing Instrument ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority={i === 0}
              />
            </div>
          </div>
        ))}

        {/* Bottom Title Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-5">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Industry Benchmark
          </p>
          <p className="text-sm sm:text-base font-bold text-white line-clamp-1">
            {slideTitles[index] || "High-Accuracy Testing Solution"}
          </p>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="mt-4 flex items-center justify-between px-2">
        {/* Indicator Dots */}
        <div className="flex gap-2">
          {banners.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setIndex((i) => (i - 1 + banners.length) % banners.length)
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % banners.length)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
