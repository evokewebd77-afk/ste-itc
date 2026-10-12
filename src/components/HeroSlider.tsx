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

const SLIDE_MS = 5500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [runId, setRunId] = useState(0);
  const banners = siteInfo.banners;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [banners.length, paused, runId]);

  return (
    <div className="relative w-full">
      {/* Soft ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-brand-500/20 blur-2xl opacity-40" />

      {/* Main Slider Unit */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 shadow-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setRunId((n) => n + 1);
        }}
      >
        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-20 rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-sm">
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
                className={`object-contain drop-shadow-xl ${
                  i === index ? "animate-[ken-burns_5.5s_ease-out_forwards]" : ""
                }`}
                priority={i === 0}
              />
            </div>
          </div>
        ))}

        {/* Bottom Caption */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 pt-10 sm:p-5 sm:pt-12">
          <p
            key={index}
            className="animate-[caption-in_0.5s_ease-out] text-sm sm:text-base font-bold text-white line-clamp-1"
          >
            {slideTitles[index] || "High-Accuracy Testing Solution"}
          </p>

          {/* Timed progress bars */}
          <div className="mt-3 flex gap-1.5">
            {banners.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/20"
              >
                <span
                  key={`${i}-${runId}`}
                  style={
                    i === index
                      ? { animationPlayState: paused ? "paused" : "running" }
                      : undefined
                  }
                  className={`absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 to-brand-400 ${
                    i === index
                      ? "animate-[slide-progress_5.5s_linear_forwards]"
                      : i < index
                        ? "scale-x-100"
                        : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {banners.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 bg-cyan-400"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
