import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start an Agrifood Business",
  description: "Step-by-step guidance to launch and formalize your agrifood business.",
  path: "/start-an-agrifood-business",
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/start-an-agrifood-business.md" />
    </PageMotion>
  );
}
