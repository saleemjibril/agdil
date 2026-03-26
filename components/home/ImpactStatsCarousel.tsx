"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

export function ImpactStatsCarousel({ stats }: { stats: readonly Stat[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ perView: 1, cardW: 200, gap: 24 });
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const gap = 24;
    const measure = () => {
      const w = el.clientWidth;
      const perView = w >= 1024 ? 4 : w >= 640 ? 2 : 1;
      const cardW = (w - (perView - 1) * gap) / perView;
      setDims({ perView, cardW: Math.max(140, cardW), gap });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, stats.length - dims.perView);
  const step = dims.cardW + dims.gap;

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (stats.length <= dims.perView || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, [dims.perView, maxIndex, stats.length]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ gap: `${dims.gap}px`, transform: `translateX(-${index * step}px)` }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex shrink-0 flex-col items-center px-1 text-center"
            style={{ width: dims.cardW }}
          >
            <p className="impact-stat-value text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.8rem]">
              {s.value}
            </p>
            <p className="mt-2 max-w-[14rem] font-[family-name:var(--font-manrope)] text-xs leading-snug text-neutral-900 sm:text-sm md:max-w-[16rem]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      {maxIndex > 0 ? (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, d) => (
            <button
              key={d}
              type="button"
              aria-label={`Impact stats slide ${d + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                d === index ? "bg-agdil-green" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              onClick={() => setIndex(d)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
