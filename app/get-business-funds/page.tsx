import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Business Funds",
  description: "Explore funding support options and readiness resources for your business.",
  path: "/get-business-funds",
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/get-business-funds.md" />
    </PageMotion>
  );
}
