import { readMarkdown } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";

export function MarkdownPage({
  path,
  wide,
}: {
  path: string;
  wide?: boolean;
}) {
  const { meta, body } = readMarkdown(path);
  return (
    <PageShell title={meta.title} description={meta.description} wide={wide}>
      <MarkdownBody>{body}</MarkdownBody>
    </PageShell>
  );
}
