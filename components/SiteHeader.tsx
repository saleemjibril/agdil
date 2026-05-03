"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { siteImages } from "@/lib/assets";
import { mainNav, siteConfig } from "@/lib/site";

function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={siteImages.logo}
            alt={siteConfig.shortName}
            width={180}
            height={97}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active = navLinkIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "font-semibold text-agdil-green underline decoration-2 underline-offset-8 decoration-agdil-green"
                    : "text-neutral-700 hover:text-agdil-green"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="hidden items-center gap-2 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-800 shadow-sm hover:border-agdil-green/40 md:inline-flex"
            aria-label="Shopping cart"
          >
            <span className="font-medium tabular-nums">₦0.00</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-agdil-green px-1 text-xs font-semibold text-white">
              0
            </span>
          </Link>
          <Link
            href="/become-a-part-of-us"
            className="rounded-md bg-agdil-green px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-agdil-green-dark"
          >
            Join us
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-neutral-700 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="border-t border-neutral-100 bg-white px-4 py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile primary">
              {mainNav.map((item) => {
                const active = navLinkIsActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium transition ${
                      active
                        ? "font-semibold text-agdil-green underline decoration-2 underline-offset-4 decoration-agdil-green"
                        : "text-neutral-800 hover:text-agdil-green"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/cart" className="text-base font-medium text-neutral-800" onClick={() => setOpen(false)}>
                Cart
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
