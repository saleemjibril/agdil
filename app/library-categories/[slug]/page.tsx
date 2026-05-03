import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string }> };

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = labelFromSlug(slug);
  return {
    title: `Library Category: ${label}`,
    description: `Resources under ${label}.`,
  };
}

export default async function LibraryCategoryPage({ params }: Props) {
  const { slug } = await params;
  const label = labelFromSlug(slug);

  return (
    <PageShell title={label} description="This category page has been migrated and is ready for content mapping." wide>
      <p className="text-neutral-700">
        Next step: connect this category route to filtered items from your library source.
      </p>
    </PageShell>
  );
}
