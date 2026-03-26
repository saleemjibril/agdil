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
