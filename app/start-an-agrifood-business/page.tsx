import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/start-an-agrifood-business.md" />
    </PageMotion>
  );
}
