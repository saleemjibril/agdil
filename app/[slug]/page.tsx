import { notFound } from "next/navigation";
import { listSlugs, readMarkdown } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { PageMotion } from "@/components/PageMotion";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function allDynamicSlugs(): string[] {
  const seen = new Set<string>();
  for (const s of listSlugs("articles")) seen.add(s);
  for (const s of listSlugs("team")) seen.add(s);
  return [...seen];
}

export function generateStaticParams() {
  return allDynamicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  for (const dir of ["articles", "team"] as const) {
    if (!listSlugs(dir).includes(slug)) continue;
    try {
      const { meta } = readMarkdown(`${dir}/${slug}.md`);
      return { title: meta.title, description: meta.description };
    } catch {
      /* continue */
    }
  }
  return {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  for (const dir of ["articles", "team"] as const) {
    if (!listSlugs(dir).includes(slug)) continue;
    const { meta, body } = readMarkdown(`${dir}/${slug}.md`);
    return (
      <PageMotion>
        <PageShell title={meta.title} description={meta.description}>
          <MarkdownBody>{body}</MarkdownBody>
        </PageShell>
      </PageMotion>
    );
  }
  notFound();
}
