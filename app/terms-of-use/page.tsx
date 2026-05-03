import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms and conditions governing use of the AGDIL platform.",
  path: "/terms-of-use",
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/terms-of-use.md" />
    </PageMotion>
  );
}
