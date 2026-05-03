import Link from "next/link";
import type { Metadata } from "next";
import { listSlugs, readMarkdown } from "@/lib/markdown";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string }> };

function prettyLabel(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = prettyLabel(slug);
  return {
    title: `Grant Category: ${label}`,
    description: `Grant opportunities in ${label}.`,
  };
}

export default async function GrantsCategoryPage({ params }: Props) {
  const { slug } = await params;
  const label = prettyLabel(slug);
  const grantSlugs = listSlugs("grants");

  return (
    <PageShell
      title={label}
      description="Grant category page migrated from WordPress. Browse available grant opportunities below."
      wide
    >
      <ul className="space-y-3">
        {grantSlugs.map((grantSlug) => {
          const { meta } = readMarkdown(`grants/${grantSlug}.md`);
          return (
            <li key={grantSlug}>
              <Link href={`/grants/${grantSlug}`} className="font-medium text-agdil-green hover:underline">
                {meta.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {grantSlugs.length === 0 ? (
        <p className="text-neutral-600">No grant records are currently available.</p>
      ) : null}
    </PageShell>
  );
}
