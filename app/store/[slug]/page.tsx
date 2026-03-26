import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  formatPrice,
  getStoreBySlug,
  listStores,
  productThumbImage,
  productsForStore,
} from "@/lib/commerce/catalog";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listStores().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getStoreBySlug(slug);
  if (!s) return {};
  return { title: s.name, description: s.description };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  if (!store) notFound();
  const products = productsForStore(slug);

  return (
    <PageShell title={store.name} description={store.description} wide>
      <h2 className="text-lg font-semibold text-neutral-900">Products from this store</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <li key={p.slug} className="flex gap-4 rounded-lg border border-neutral-200 p-4">
            <Link href={`/product/${p.slug}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-emerald-50">
              <Image src={productThumbImage(p)} alt={p.name} fill className="object-cover" sizes="80px" />
            </Link>
            <div>
              <Link href={`/product/${p.slug}`} className="font-medium text-agdil-green hover:underline">
                {p.name}
              </Link>
              <p className="mt-1 text-sm text-neutral-600">{formatPrice(p.price)}</p>
            </div>
          </li>
        ))}
      </ul>
      {products.length === 0 ? (
        <p className="text-neutral-600">No products in catalogue for this store yet.</p>
      ) : null}
    </PageShell>
  );
}
