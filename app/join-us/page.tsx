import SMEAssessmentForm from "@/components/join/SMEAssessmentForm";
import { PageMotion } from "@/components/PageMotion";

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
