import { readMarkdown } from "@/lib/markdown";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageShell } from "@/components/PageShell";
import { CacRegistrationForm } from "@/components/CacRegistrationForm";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CAC Registration Form",
  description: "Start CAC registration support and submit required business details.",
  path: "/cac-registration-form",
});

export default function Page() {
  const { meta, body } = readMarkdown("pages/cac-registration-form.md");
  return (
    <PageMotion>
    <PageShell title={meta.title} description={meta.description}>
      <MarkdownBody>{body}</MarkdownBody>
      <div className="mt-10">
        <CacRegistrationForm />
      </div>
    </PageShell>
    </PageMotion>
  );
}
