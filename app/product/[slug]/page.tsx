import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  formatPrice,
  getProductBySlug,
  getStoreBySlug,
  listProducts,
  productDetailImage,
} from "@/lib/commerce/catalog";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  const og = new URL(productDetailImage(p), siteConfig.url).toString();
  return {
    title: p.name,
    description: `${p.name} — ${formatPrice(p.price)} on AGDIL marketplace.`,
    openGraph: { images: [{ url: og }] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();
  const store = getStoreBySlug(p.storeSlug);

  return (
    <PageShell title={p.name} wide>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-emerald-50">
          <Image
            src={productDetailImage(p)}
            alt={p.name}
            fill
            className="object-contain p-8"
            priority
          />
        </div>
        <div>
          <p className="text-3xl font-bold text-agdil-green">{formatPrice(p.price)}</p>
          {store ? (
            <p className="mt-4 text-neutral-600">
              Sold by{" "}
              <Link href={`/store/${store.slug}`} className="font-medium text-agdil-green hover:underline">
                {store.name}
              </Link>
            </p>
          ) : null}
          <p className="mt-6 text-sm text-neutral-500">
            Add-to-cart and checkout require a commerce API (e.g. headless WooCommerce). This page is a structured
            PDP fed by <code className="rounded bg-neutral-100 px-1">data/catalog.json</code>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cart"
              className="rounded-md bg-agdil-green px-5 py-3 text-sm font-semibold text-white hover:bg-agdil-green-dark"
            >
              View cart (placeholder)
            </Link>
            <Link
              href="/store-listing"
              className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 hover:border-agdil-green"
            >
              Back to marketplace
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
