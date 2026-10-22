"use client";

import { useEffect, useState } from "react";

type WhyUsItem = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const SLIDE_MS = 4200;

export function WhyUsCarousel({ items }: { items: WhyUsItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [runId, setRunId] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, runId, total]);

  return (
    <div
      className="relative mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setRunId((n) => n + 1);
      }}
    >
      {/* Carousel track */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
        <div
          className="flex transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${index * (100 / 1)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="w-full shrink-0 px-2 sm:w-[50%] lg:w-[25%]"
            >
              <div
                className={`group relative h-full rounded-2xl border bg-white/10 p-6 backdrop-blur-md transition-all duration-500 ${
                  i === index
                    ? "border-cyan-400/60 shadow-[0_0_0_1px_rgba(34,211,238,0.25)] shadow-cyan-500/20 scale-[1.02]"
                    : "border-white/10 hover:border-cyan-400/40"
                }`}
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
                <p className="mt-3 text-[13px] sm:text-sm leading-relaxed text-slate-200">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress + Dots */}
      <div className="mt-5 flex flex-col items-center gap-3">
        <div className="flex w-full max-w-xs gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show card ${i + 1}`}
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
                className={`absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 ${
                  i === index
                    ? "animate-[slide-progress_4.2s_linear_forwards]"
                    : i < index
                      ? "scale-x-100"
                      : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-cyan-400 shadow-sm shadow-cyan-400/40"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
