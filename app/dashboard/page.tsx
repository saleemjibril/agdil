import { MarkdownPage } from "@/components/MarkdownPage";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dashboard",
  description: "User dashboard for AGDIL platform members.",
  path: "/dashboard",
  noIndex: true,
});

export default function Page() {
  return (
    <PageMotion>
      <MarkdownPage path="pages/dashboard.md" />
    </PageMotion>
  );
}
