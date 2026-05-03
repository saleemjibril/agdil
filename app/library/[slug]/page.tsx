import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { listSlugs, readMarkdown } from "@/lib/markdown";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listSlugs("library").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = readMarkdown(`library/${slug}.md`);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default async function LibraryDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!listSlugs("library").includes(slug)) notFound();
  const { meta, body } = readMarkdown(`library/${slug}.md`);

  return (
    <PageShell title={meta.title} description={meta.description} wide>
      <MarkdownBody>{body}</MarkdownBody>
    </PageShell>
  );
}
