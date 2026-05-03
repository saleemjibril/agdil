import type { Metadata } from "next";
import { siteImages } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path, noIndex = false }: SeoInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: siteImages.logo }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteImages.logo],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
