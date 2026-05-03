import Link from "next/link";
import { PageMotion } from "@/components/PageMotion";
import { footerColumns, footerLegalLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <PageMotion initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-neutral-900">{col.title}</p>
                <div className="mt-3 h-px w-8 bg-agdil-green/40" />
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}`}>
                      <Link href={l.href} className="text-sm text-neutral-600 hover:text-agdil-green">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
            <p className="text-center text-sm text-neutral-600 sm:text-left">
              © {new Date().getFullYear()} AgDil. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLegalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-600 hover:text-agdil-green">
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
