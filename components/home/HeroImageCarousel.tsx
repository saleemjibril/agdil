"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroImageCarousel({ slides }: { slides: readonly string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-2xl md:min-h-[min(52vh,420px)]">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}
      {slides.length > 1 ? (
        <div
          className="absolute bottom-3 left-0 right-0 z-[3] flex justify-center gap-2"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === active ? "bg-white shadow" : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
