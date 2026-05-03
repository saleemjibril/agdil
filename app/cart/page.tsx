import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cart",
  description: "Review selected marketplace items before checkout.",
  path: "/cart",
  noIndex: true,
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/cart.md" />
    </PageMotion>
  );
}
