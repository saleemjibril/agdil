import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MarketplaceStoreGrid } from "@/components/marketplace/MarketplaceStoreGrid";
import { listStoresByVendorSlug } from "@/lib/commerce/catalog";

type Props = { params: Promise<{ slug: string }> };

function prettify(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Vendor: ${prettify(slug)}`,
    description: "Legacy vendor route mapped to marketplace store profile(s).",
  };
}

export default async function VendorPage({ params }: Props) {
  const { slug } = await params;
  const stores = listStoresByVendorSlug(slug);

  return (
    <PageShell title={prettify(slug)} description="Vendor page migrated from WordPress." wide>
      {stores.length > 0 ? (
        <MarketplaceStoreGrid stores={stores} />
      ) : (
        <p className="text-neutral-700">No direct vendor profile match found in the current marketplace dataset.</p>
      )}
    </PageShell>
  );
}
