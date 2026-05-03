import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Learn how AGDIL collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/privacy-policy.md" />
    </PageMotion>
  );
}
