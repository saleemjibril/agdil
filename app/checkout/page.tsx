import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Checkout",
  description: "Checkout page for AGDIL marketplace orders.",
  path: "/checkout",
  noIndex: true,
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/checkout.md" />
    </PageMotion>
  );
}
