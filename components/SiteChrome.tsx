"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const HIDE_CHROME_PREFIX = "/credit-worthiness-assessment-form";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname.startsWith(HIDE_CHROME_PREFIX);

  return (
    <>
      {!hideChrome && <SiteHeader />}
      <main className={hideChrome ? "min-h-screen" : "min-h-[60vh]"}>{children}</main>
      {!hideChrome && <SiteFooter />}
    </>
  );
}
