"use client";

import { animate } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SectionAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section")) as HTMLElement[];
    if (sections.length === 0) return;

    const controls: Array<{ stop: () => void }> = [];
    const animated = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (animated.has(el)) return;

          animated.add(el);
          const control = animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.35, ease: "easeOut" }
          );
          controls.push(control);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(18px)";
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      controls.forEach((control) => control.stop());
    };
  }, [pathname]);

  return null;
}
