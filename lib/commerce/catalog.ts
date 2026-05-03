import catalog from "@/data/catalog.json";
import { siteImages } from "@/lib/assets";

export type Product = (typeof catalog.products)[number];
export type Store = (typeof catalog.stores)[number];

export function productDetailImage(p: Product): string {
  return p.image ?? siteImages.brandMark;
}

export function productThumbImage(p: Product): string {
  return p.thumb ?? p.image ?? siteImages.brandMark;
}

/** JSON catalogue for Phase 1. Replace with WooCommerce REST / GraphQL when `WOO_BASE_URL` is configured. */
export function listProducts(): Product[] {
  return catalog.products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return catalog.products.find((p) => p.slug === slug);
}

export function listStores(): Store[] {
  return catalog.stores;
}

export function listStoresByVendorSlug(vendorSlug: string): Store[] {
  const norm = vendorSlug.trim().toLowerCase();
  if (!norm) return [];
  return catalog.stores.filter((s) => {
    const slug = s.slug.toLowerCase();
    const compactName = s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return slug === norm || compactName === norm || slug.startsWith(norm);
  });
}

const PRODUCT_CATEGORY_MAP: Record<string, string[]> = {
  "fresh-food": ["crop"],
  "processed-food": ["crop"],
  tubers: ["crop"],
};

export function productsForCategoryPath(parts: string[]): Product[] {
  const key = parts.map((p) => p.trim().toLowerCase()).filter(Boolean).join("/");
  const mapped = PRODUCT_CATEGORY_MAP[key] ?? PRODUCT_CATEGORY_MAP[parts.at(-1)?.toLowerCase() ?? ""];
  if (!mapped) return [];
  const allowed = new Set(mapped);
  return catalog.products.filter((p) => allowed.has((p.category ?? "").toLowerCase()));
}

/** Dokan store listing order from static export (store-listing/index.html). */
const STORE_LISTING_ORDER = [
  "07067880083",
  "hauwa-s-spice-corner",
  "fadehan-foods-snacks",
  "nkechi-s-treats-hub",
  "yemkem-agro-ventures",
] as const;

export function listStoresForMarketplace(): Store[] {
  const bySlug = Object.fromEntries(catalog.stores.map((s) => [s.slug, s]));
  return STORE_LISTING_ORDER.map((slug) => bySlug[slug]).filter((s): s is Store => Boolean(s));
}

export function storeBannerImage(s: Store): string {
  return s.banner ?? siteImages.brandMark;
}

export function storeAvatarImage(s: Store): string {
  return s.avatar ?? siteImages.brandMark;
}

export function getStoreBySlug(slug: string): Store | undefined {
  return catalog.stores.find((s) => s.slug === slug);
}

export function productsForStore(storeSlug: string): Product[] {
  return catalog.products.filter((p) => p.storeSlug === storeSlug);
}

export function formatPrice(amount: number): string {
  return `${catalog.symbol}${amount.toLocaleString("en-NG")}`;
}
