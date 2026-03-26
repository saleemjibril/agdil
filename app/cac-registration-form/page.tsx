import { readMarkdown } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { CacRegistrationForm } from "@/components/CacRegistrationForm";

export default function Page() {
  const { meta, body } = readMarkdown("pages/cac-registration-form.md");
  return (
    <PageShell title={meta.title} description={meta.description}>
      <MarkdownBody>{body}</MarkdownBody>
      <div className="mt-10">
        <CacRegistrationForm />
      </div>
    </PageShell>
  );
}
