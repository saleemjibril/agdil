import Link from "next/link";
import { PageMotion } from "@/components/PageMotion";
import { footerColumns, footerLegalLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <PageMotion initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full px-16 py-16 md:px-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col, idx) => (
              <div key={col.title}>
                <h3 className="text-[18px] font-bold text-neutral-900">{col.title}</h3>
                <div className="mt-4 h-[1px] w-full bg-neutral-200" />
                <ul className="mt-6 space-y-4">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}`}>
                      <Link href={l.href} className="text-[16px] text-neutral-800 transition-colors hover:text-agdil-green">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  {/* Social Icons for Get Involved */}
                  {col.title === "Get Involved" && (
                    <div className="mt-6 flex gap-2">
                      <Link href="#" className="flex h-10 w-10 items-center justify-center rounded bg-agdil-green text-white hover:bg-agdil-green-dark">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65684 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.33333 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3432 21.1283 22 16.9913 22 12Z" />
                        </svg>
                      </Link>
                      <Link href="#" className="flex h-10 w-10 items-center justify-center rounded bg-agdil-green text-white hover:bg-agdil-green-dark">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </Link>
                      <Link href="#" className="flex h-10 w-10 items-center justify-center rounded bg-agdil-green text-white hover:bg-agdil-green-dark">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
                        </svg>
                      </Link>
                    </div>
                  )}
                  {/* Contact Info for Our Impact */}
                  {col.title === "Our Impact" && (
                    <div className="mt-8 space-y-4">
                      <li>
                        <Link href="mailto:info@ikore.org" className="text-[16px] text-neutral-800 transition-colors hover:text-agdil-green">
                          info@ikore.org
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:09121443907" className="text-[16px] text-neutral-800 transition-colors hover:text-agdil-green">
                          09121443907
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
            <p className="text-center text-[16px] text-neutral-800 sm:text-left">
              © {new Date().getFullYear()} AgDil. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-10 text-[16px]">
              {footerLegalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-800 underline transition-colors hover:text-agdil-green">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </PageMotion>
  );
}
