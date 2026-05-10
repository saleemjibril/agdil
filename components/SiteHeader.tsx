import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { siteImages } from "@/lib/assets";
import { mainNav, siteConfig } from "@/lib/site";

function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // Special handling for /marketplace (siteNav has /store-listing)
  if (href === "/marketplace") return pathname.startsWith("/store-listing") || pathname.startsWith("/marketplace");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Adjust mainNav to match screenshot labels and URLs where necessary
  const headerNav = mainNav.map(item => {
    if (item.label === "Marketplace") return { ...item, href: "/marketplace" }; // Use /marketplace for consistency with screenshot
    if (item.label === "Market Intellingence") return { ...item, label: "Market Intelligence", href: "/market-intelligence" }; // Correct typo and path
    if (item.label === "Events") return { ...item, href: "/events" }; // Ensure correct path for events
    return item;
  });

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white shadow-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={siteImages.logo}
              alt={siteConfig.shortName}
              width={120} // Increased logo size
              height={120} // Increased logo size
              className="h-20 w-auto" // Adjusted for larger size
              priority
            />
          </Link>
        </div>

        {/* Right section: Navigation Links, Cart, and Join Us button */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
            {headerNav.map((item) => {
              const active = navLinkIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-green-600 text-sm font-semibold relative
                    ${active ? 'text-green-600' : ''}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform translate-y-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/cart"
            className="relative p-2 border border-gray-300 rounded-md flex items-center justify-center"
            aria-label="Shopping cart"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              0
            </span>
          </Link>
          <Link
            href="/become-a-part-of-us"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Join Us
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
      </nav>

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
              {headerNav.map((item) => {
                const active = navLinkIsActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-semibold transition ${
                      active
                        ? "text-agdil-green underline decoration-2 underline-offset-4 decoration-agdil-green"
                        : "text-neutral-800 hover:text-agdil-green"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/cart" className="text-sm font-semibold text-neutral-800" onClick={() => setOpen(false)}>
                Cart
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
