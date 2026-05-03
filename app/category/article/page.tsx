import Link from "next/link";
import { listSlugs, readMarkdown } from "@/lib/markdown";
import { PageShell } from "@/components/PageShell";
import { PageMotion } from "@/components/PageMotion";

export default function Page() {
  const slugs = listSlugs("articles");
  return (
    <PageMotion>
    <PageShell
      title="Articles"
      description="Long-form analysis on nutrition, agrifood systems, and Nigeria."
      wide
    >
      <ul className="space-y-4">
        {slugs.map((slug) => {
          const { meta } = readMarkdown(`articles/${slug}.md`);
          return (
            <li key={slug} className="border-b border-neutral-100 pb-4">
              <Link href={`/${slug}`} className="text-lg font-semibold text-agdil-green hover:underline">
                {meta.title}
              </Link>
              {meta.description ? (
                <p className="mt-1 text-sm text-neutral-600">{meta.description}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </PageShell>
    </PageMotion>
  );
}
