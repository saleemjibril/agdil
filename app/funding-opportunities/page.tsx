import Link from "next/link";
import { readMarkdown, listSlugs } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { PageMotion } from "@/components/PageMotion";

export default function Page() {
  const { meta, body } = readMarkdown("pages/funding-opportunities.md");
  const grantSlugs = listSlugs("grants");
  return (
    <PageMotion>
    <PageShell title={meta.title} description={meta.description}>
      <MarkdownBody>{body}</MarkdownBody>
      <h2 className="mt-10 text-xl font-semibold text-neutral-900">Grant listings</h2>
      <ul className="mt-4 space-y-3">
        {grantSlugs.map((slug) => {
          const { meta: g } = readMarkdown(`grants/${slug}.md`);
          return (
            <li key={slug}>
              <Link href={`/grants/${slug}`} className="font-medium text-agdil-green hover:underline">
                {g.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageShell>
    </PageMotion>
  );
}
