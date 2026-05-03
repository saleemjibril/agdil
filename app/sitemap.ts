import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { listSlugs } from "@/lib/markdown";
import { listProducts, listStores } from "@/lib/commerce/catalog";

const staticPaths = [
  "/",
  "/about-us",
  "/library",
  "/blog",
  "/event",
  "/funding-opportunities",
  "/market-intellingence",
  "/store-listing",
  "/become-a-part-of-us",
  "/join-us",
  "/get-business-funds",
  "/start-an-agrifood-business",
  "/privacy-policy",
  "/terms-of-use",
  "/cac-registration-form",
  "/credit-worthiness-assessment-form",
  "/cart",
  "/checkout",
  "/dashboard",
  "/category/article",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const slug of listSlugs("articles")) {
    entries.push({ url: `${base}/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 });
  }
  for (const slug of listSlugs("team")) {
    entries.push({ url: `${base}/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 });
  }
  for (const slug of listSlugs("grants")) {
    entries.push({
      url: `${base}/grants/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const slug of listSlugs("events")) {
    entries.push({
      url: `${base}/event/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const slug of listSlugs("courses")) {
    entries.push({
      url: `${base}/courses/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  for (const slug of listSlugs("library")) {
    entries.push({
      url: `${base}/library/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const p of listProducts()) {
    entries.push({
      url: `${base}/product/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }
  for (const s of listStores()) {
    entries.push({
      url: `${base}/store/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  for (const cat of ["access-to-finance", "digital-marketing", "livestock-health", "nutrition", "urban-agriculture"]) {
    entries.push({
      url: `${base}/library-categories/${cat}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  entries.push({
    url: `${base}/course-category/nutrition`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  });
  for (const type of ["interactive-material", "pdf", "template", "video"]) {
    entries.push({
      url: `${base}/file-type/${type}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  for (const cat of ["capital-investment", "grant", "loan"]) {
    entries.push({
      url: `${base}/grants-category/${cat}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
