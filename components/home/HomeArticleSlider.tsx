"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export type ArticleSlide = { slug: string; title: string; cover: string };

export function HomeArticleSlider({ slides }: { slides: ArticleSlide[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const w = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s) => (
          <article
            key={s.slug}
            className="relative w-[min(100%,340px)] shrink-0 snap-center overflow-hidden rounded-[20px] shadow-md"
          >
            <Link href={`/${s.slug}`} className="group block">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={s.cover}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/90">Article</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{s.title}</h3>
                  <span className="mt-3 inline-block text-sm font-semibold text-emerald-300 underline-offset-4 group-hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous articles"
          className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm hover:border-agdil-green hover:text-agdil-green"
          onClick={() => scrollByDir(-1)}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next articles"
          className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm hover:border-agdil-green hover:text-agdil-green"
          onClick={() => scrollByDir(1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 1000 1000" aria-hidden>
      <path
        fill="currentColor"
        d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 1000 1000" aria-hidden>
      <path
        fill="currentColor"
        d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"
      />
    </svg>
  );
}
