import { notFound } from "next/navigation";
import { listSlugs, readMarkdown } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { PageMotion } from "@/components/PageMotion";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listSlugs("grants").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = readMarkdown(`grants/${slug}.md`);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!listSlugs("grants").includes(slug)) notFound();
  const { meta, body } = readMarkdown(`grants/${slug}.md`);
  return (
    <PageMotion>
      <PageShell title={meta.title} description={meta.description}>
        <MarkdownBody>{body}</MarkdownBody>
      </PageShell>
    </PageMotion>
  );
}
