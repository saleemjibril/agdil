"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";

type TeamMember = { slug: string; image: string; title: string };

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const gap = 24;

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, members.length - perView);
  const cardW =
    containerRef.current
      ? (containerRef.current.clientWidth - (perView - 1) * gap) / perView
      : 400;

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const step = cardW + gap;

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ gap: `${gap}px`, transform: `translateX(-${index * step}px)` }}
        >
          {members.map((m) => (
            <div key={m.slug} className="shrink-0" style={{ width: cardW }}>
              <Link href={`/${m.slug}`} className="group block">
                <div className="relative aspect-[351/270] w-full overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-contain object-bottom p-2 transition group-hover:scale-[1.02]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow transition hover:bg-white disabled:opacity-30"
          >
            <svg className="h-4 w-4" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow transition hover:bg-white disabled:opacity-30"
          >
            <svg className="h-4 w-4" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, d) => (
              <button
                key={d}
                type="button"
                aria-label={`Go to slide ${d + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  d === index ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                onClick={() => setIndex(d)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
