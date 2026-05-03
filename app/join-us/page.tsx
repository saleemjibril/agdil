import SMEAssessmentForm from "@/components/join/SMEAssessmentForm";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join Us",
  description: "Get involved with AGDIL programs and communities for MSME growth.",
  path: "/join-us",
});

export default function JoinUsPage() {
  return (
    <PageMotion>
    <div className="bg-[#f2f5f4]">
      <section className="px-5 pb-[60px] pt-[40px] max-md:pb-[40px] max-md:pt-[24px]">
        <SMEAssessmentForm />
      </section>
    </div>
    </PageMotion>
  );
}
