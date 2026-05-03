import Image from "next/image";
import Link from "next/link";
import { teamHome, teamSectionBg } from "@/lib/home";
import { TeamCarousel } from "@/components/about/TeamCarousel";
import { readMarkdown } from "@/lib/markdown";
import { PageMotion } from "@/components/PageMotion";

const heroPhotos = [
  "/uploads/2025/11/IMG-20250423-WA0001.jpg",
  "/uploads/2025/11/PXL_20250414_122018268-scaled.jpg",
  "/uploads/2025/11/IMG-20250424-WA0080.jpg",
];

const enterprisePartners = [
  {
    name: "Victory Ayele",
    role: "Industry Partner",
    description: "Partnering with us since 2020, with cutting-edge solutions.",
    image: "/uploads/2025/09/Ayele-Victory-Passport.jpg",
    gradient: "linear-gradient(180deg, #2C242C 0%, #2C242C 100%)",
    textColor: "text-white",
  },
  {
    name: "Favour Jauro",
    role: "Industry Partner",
    description: "With 15+ years of experience in helping businesses scale",
    image: "/uploads/2025/02/my-pix-Favour-Jauro-1.jpg",
    gradient: "linear-gradient(180deg, #FFFFFF 0%, #C1D11F 100%)",
    textColor: "text-neutral-900",
  },
  {
    name: "Abdulqadr Musa",
    role: "Industry Partner",
    description: "With 15+ years of experience in helping businesses scale",
    image: "/uploads/2025/02/WhatsApp-Image-2025-02-25-at-11.17.36_c69e7a41.jpg",
    gradient: "linear-gradient(180deg, #212327 0%, #932B4F 100%)",
    textColor: "text-white",
  },
] as const;

export default function AboutUsPage() {
  const team = teamHome.map(({ slug, image }) => {
    const { meta } = readMarkdown(`team/${slug}.md`);
    return { slug, image, title: meta.title as string };
  });

  return (
    <PageMotion>
    <>
      {/* ── Hero ── */}
      <section className="py-14 md:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <h1 className="text-[38px] font-bold leading-tight text-neutral-900">About Us</h1>
            <p className="mt-5 max-w-[78%] font-[family-name:var(--font-manrope)] text-base leading-relaxed text-neutral-700">
              Agrifood DIL and Resource Center is dedicated to empowering Micro, Small, and Medium Enterprises (MSMEs) by
              providing essential resources, expert mentorship, and a supportive community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/join-us"
                className="rounded-md border border-agdil-green bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-sm font-medium text-white hover:bg-agdil-green-dark"
              >
                Join the Community
              </Link>
              <Link
                href="/library"
                className="rounded-md border border-agdil-green bg-transparent px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-[16px] font-semibold text-agdil-green hover:bg-emerald-50"
              >
                Explore the Toolkit
              </Link>
            </div>
          </div>
          <div className="flex flex-1 gap-3">
            <div className="flex flex-col gap-3">
              <div className="relative h-[212px] w-full overflow-hidden rounded-xl">
                <Image src={heroPhotos[0]} alt="" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative h-[212px] w-full overflow-hidden rounded-xl">
                <Image src={heroPhotos[1]} alt="" fill className="object-cover" sizes="300px" />
              </div>
            </div>
            <div className="relative min-h-[350px] w-full overflow-hidden rounded-xl">
              <Image src={heroPhotos[2]} alt="" fill className="object-cover" sizes="300px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission ── */}
      <section className="bg-[#EFF1FF] py-[70px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <h2 className="text-[38px] font-bold leading-tight text-neutral-900">Our Vission</h2>
            <p className="mt-3 max-w-[94%] font-[family-name:var(--font-manrope)] text-base leading-relaxed text-neutral-700">
              To be a leading digital hub for inclusive and sustainable growth that enables nano, micro, small and medium
              enterprises in the agrifood ecosystem to thrive and build resilience.
            </p>
            <h2 className="mt-8 text-[38px] font-bold leading-tight text-neutral-900">Our Mission</h2>
            <p className="mt-3 max-w-[94%] font-[family-name:var(--font-manrope)] text-base leading-relaxed text-neutral-700">
              To empower Micro, Small, and Medium Enterprises (MSMEs) in the agrifood sector by providing access to
              resources, expert mentorship, and market opportunities.
              <br />
              Through collaboration, capacity building, and innovation, we enable businesses to thrive, create jobs, and
              contribute to food security and economic development
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              src="/uploads/2024/10/Love-group.png"
              alt=""
              width={548}
              height={446}
              className="h-auto w-full max-w-[548px]"
            />
          </div>
        </div>
      </section>

      {/* ── What We DO ── */}
      <section className="bg-agdil-green py-[72px] pb-7">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-12">
          <div className="flex flex-1 justify-center">
            <Image
              src="/uploads/2024/10/Group-14.png"
              alt=""
              width={418}
              height={413}
              className="h-auto w-full max-w-[418px]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[38px] font-bold leading-tight text-white">What We DO</h2>
            <p className="mt-5 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-white">
              We are committed to empowering Micro, Small, and Medium Enterprises (MSMEs) by providing the tools,
              resources, and guidance needed for success. Through our robust network of experts, mentors, and partners, we
              help businesses overcome challenges, foster growth, and drive innovation.
            </p>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-white">
              At Agrifood D&amp;I Resource Center, we offer tailored financial advice, business mentorship, and market
              access opportunities. Our platform connects MSMEs with industry leaders and a like-minded community,
              ensuring that whether you&apos;re starting out, scaling up, or navigating new markets, you have the support
              you need every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Teams ── */}
      <section className="py-[70px]">
        <div className="mx-auto max-w-[1240px] px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-[38px] font-bold leading-tight text-neutral-900">Our Teams</h2>
            <p className="mt-4 max-w-[68%] text-center font-[family-name:var(--font-manrope)] text-base leading-relaxed text-neutral-700">
              Our success is driven by a passionate and diverse team of professionals who are committed to the growth and
              empowerment of MSMEs.
            </p>
          </div>
          <div className="mt-12">
            <TeamCarousel members={team} />
          </div>
        </div>
      </section>

      {/* ── Enterprise Support ── */}
      <section className="mb-[70px]">
        <div className="mx-auto max-w-[1240px] px-4">
          <div className="relative overflow-hidden rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[#00610E]" aria-hidden />
            <Image
              src={teamSectionBg.base}
              alt=""
              fill
              className="object-cover object-center opacity-90"
              sizes="100vw"
              aria-hidden
            />
            {/* <Image
              src={teamSectionBg.overlay}
              alt=""
              fill
              className="object-cover object-center opacity-70"
              sizes="100vw"
              aria-hidden
            /> */}
            <div className="relative z-[1] px-8 py-[59px] sm:px-[50px]">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-[38px] font-bold text-white">Enterprise Support</h2>
                <p className="mt-4 max-w-[52%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-white">
                  Our community of mentors and partners is here to support you on every step of your business journey.
                  From one-on-one mentorship sessions to collaborations with industry experts, we ensure that you get the
                  guidance you need.
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {enterprisePartners.map((partner) => (
                  <article
                    key={partner.name}
                    className="relative flex min-h-[380px] flex-col overflow-hidden rounded-[20px]"
                  >
                    <Image
                      src={partner.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 opacity-50"
                      style={{ backgroundImage: partner.gradient }}
                      aria-hidden
                    />
                    <div className="relative z-[1] flex flex-1 flex-col justify-end gap-5 p-5 pt-[265px]">
                      <div>
                        <h3 className={`text-[20px] font-bold leading-[20px] ${partner.textColor}`}>{partner.name}</h3>
                        <p
                          className={`mt-1 font-[family-name:var(--font-manrope)] text-[14px] leading-[23px] ${partner.textColor}`}
                        >
                          {partner.role}
                        </p>
                      </div>
                      <p
                        className={`font-[family-name:var(--font-manrope)] text-[20px] font-extrabold leading-[30px] ${partner.textColor}`}
                      >
                        {partner.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/join-us"
              className="inline-flex rounded-md border border-agdil-green bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-sm font-medium text-white hover:bg-agdil-green-dark"
            >
              See Our Community
            </Link>
          </div>
        </div>
      </section>
    </>
    </PageMotion>
  );
}
