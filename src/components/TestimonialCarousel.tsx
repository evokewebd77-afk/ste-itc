"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  content: string;
};

const SLIDE_MS = 4400;

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
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
      className="relative mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setRunId((n) => n + 1);
      }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-4 shadow-xl backdrop-blur-sm">
        <div
          className="flex transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${index * (100 / 1)}%)`,
          }}
        >
          {items.map((t, i) => (
            <div key={t.name} className="w-full shrink-0 px-2 md:px-4">
              <figure
                className={`relative mx-auto flex max-w-3xl flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-500 ${
                  i === index
                    ? "border-brand-400/70 bg-white shadow-xl shadow-brand-500/10 scale-[1.01]"
                    : "border-slate-200/80 bg-white/90 hover:border-brand-300/70"
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-amber-400" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-600 text-sm font-bold text-white shadow-md">
                      {t.initials}
                    </div>
                    <div>
                      <figcaption className="text-base font-bold text-slate-900">
                        {t.name}
                      </figcaption>
                      <p className="text-sm text-slate-600">{t.role}</p>
                    </div>
                  </div>
                  <svg
                    className="h-10 w-10 text-brand-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.586l2.293 2.293a1 1 0 0 0 1.707-.707V8a1 1 0 0 0-1-1H7Zm6 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.586l2.293 2.293a1 1 0 0 0 1.707-.707V8a1 1 0 0 0-1-1h-4Z" />
                  </svg>
                </div>

                <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700">
                  “{t.content}”
                </blockquote>

                <div className="mt-6 flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .587l3.668 7.431 8.332 1.212-6.001 5.851 1.416 8.262L12 18.896l-7.415 3.897 1.416-8.262-6.001-5.851 8.332-1.212z" />
                    </svg>
                  ))}
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex flex-col items-center gap-3">
        <div className="flex w-full max-w-md gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-200"
            >
              <span
                key={`${i}-${runId}`}
                style={
                  i === index
                    ? { animationPlayState: paused ? "paused" : "running" }
                    : undefined
                }
                className={`absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-brand-400 ${
                  i === index
                    ? "animate-[slide-progress_4.4s_linear_forwards]"
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
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-brand-600 shadow-sm shadow-brand-600/30"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
