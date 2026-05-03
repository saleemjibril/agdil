import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { formatPrice, productThumbImage, productsForCategoryPath } from "@/lib/commerce/catalog";

type Props = { params: Promise<{ slug: string[] }> };

function prettify(parts: string[]) {
  return parts
    .map((part) =>
      part
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    )
    .join(" / ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = prettify(slug);
  return {
    title: `Product Category: ${label}`,
    description: `Marketplace products in ${label}.`,
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const products = productsForCategoryPath(slug);
  if (products.length === 0) notFound();

  return (
    <PageShell title={prettify(slug)} description="Legacy product-category route mapped to marketplace products." wide>
      <ul className="grid gap-4 sm:grid-cols-2">
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
    </PageShell>
  );
}
