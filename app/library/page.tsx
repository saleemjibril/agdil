import Link from "next/link";
import LibraryClient from "@/components/library/LibraryClient";
import { PageMotion } from "@/components/PageMotion";

export default function LibraryPage() {
  return (
    <PageMotion>
    <>
      {/* ── Hero Banner ── */}
      <section
        className="relative flex min-h-[350px] flex-col items-center justify-end bg-cover bg-center pb-[50px] pt-[300px] max-lg:justify-end max-lg:pb-[60px] max-lg:pt-[190px]"
        style={{
          backgroundImage: `url(/uploads/2025/01/Library.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-[1] flex w-full flex-col items-center">
          <h1 className="text-center text-[70px] font-bold leading-tight text-white" style={{ fontFamily: '"Gilroy Bold", sans-serif' }}>
            Get the best SMEs Resources
          </h1>
          <p className="mt-4 max-w-[77%] text-center font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-[150%] text-white max-md:max-w-full">
            Explore our curated learning paths from foundational short modules to in-depth courses designed for agrifood
            enterprises seeking growth, Impact, and sustainability
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#short-courses"
              className="rounded-[5px] border border-agdil-green bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:border-agdil-green hover:bg-transparent"
            >
              View Short Materials
            </Link>
            <Link
              href="#long-courses"
              className="rounded-[10px] border border-white bg-transparent px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:bg-agdil-green hover:text-white"
            >
              Take Long Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── Interactive sections (client) ── */}
      <LibraryClient />
    </>
    </PageMotion>
  );
}
