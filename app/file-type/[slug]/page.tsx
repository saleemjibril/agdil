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
    title: `File Type: ${label}`,
    description: `Library resources filtered by file type: ${label}.`,
  };
}

export default async function FileTypePage({ params }: Props) {
  const { slug } = await params;
  const label = labelFromSlug(slug);

  return (
    <PageShell title={label} description="This file-type archive route has been added." wide>
      <p className="text-neutral-700">
        Next step: connect this route to library items filtered by file type.
      </p>
    </PageShell>
  );
}
