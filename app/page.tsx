import Image from "next/image";
import Link from "next/link";
import { HeroImageCarousel } from "@/components/home/HeroImageCarousel";
import { HomeArticleSlider } from "@/components/home/HomeArticleSlider";
import { ImpactStatsCarousel } from "@/components/home/ImpactStatsCarousel";
import { MarketPricesTicker } from "@/components/home/MarketPricesTicker";
import { FormalizationSupportCards } from "@/components/home/FormalizationSupportCards";
import { QuickAccessGrid } from "@/components/home/QuickAccessGrid";
import {
  formalizationCards,
  heroSlides,
  homeArticleCarousel,
  impactStats,
  marketPrices,
  trustedPartners,
  quickAccessTiles,
  successStories,
  teamHome,
  teamSectionBg,
} from "@/lib/home";
import { readMarkdown } from "@/lib/markdown";
import { PageMotion } from "@/components/PageMotion";

export default function HomePage() {
  const articleSlides = homeArticleCarousel.map(({ slug, cover }) => {
    const { meta } = readMarkdown(`articles/${slug}.md`);
    return { slug, title: meta.title as string, cover };
  });

  const team = teamHome.map(({ slug, image }) => {
    const { meta } = readMarkdown(`team/${slug}.md`);
    return { slug, image, title: meta.title as string };
  });

  return (
    <PageMotion>
    <>
      <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white">
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:gap-12 md:py-16">
          <div className="relative z-[1] flex flex-1 flex-col justify-center">
            <h1 className="text-[36px] font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-[52px] md:leading-[52px]">
              Empowering MSMEs to Succeed &amp; Provide Safe, Nutritious Foods
            </h1>
            <p className="mt-6 max-w-[79%] font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-neutral-600">
              Access expert resources, connect with mentors, and join a thriving community focused on helping small and
              medium-sized businesses thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-business-funds"
                className="rounded-md border border-agdil-green bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-sm font-medium text-white shadow-sm hover:bg-agdil-green-dark"
              >
                Get Funding
              </Link>
              <Link
                href="/store-listing"
                className="rounded-md border border-agdil-green bg-transparent px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-sm font-medium text-agdil-green hover:bg-emerald-50"
              >
                Marketplace
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px] w-full flex-1 md:min-h-[min(52vh,440px)]">
            <HeroImageCarousel slides={heroSlides} />
            <Image
              src="/uploads/2024/10/Frame-9.png"
              alt=""
              width={136}
              height={141}
              className="pointer-events-none absolute -left-2 bottom-4 z-[4] hidden drop-shadow-md md:block"
            />
            <Image
              src="/uploads/2024/10/Frame-10.png"
              alt=""
              width={120}
              height={130}
              className="pointer-events-none absolute -right-1 top-6 z-[4] hidden drop-shadow-md md:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10" aria-label="Latest market prices">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <MarketPricesTicker items={marketPrices} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Quick Access</h2>
          <div className="mt-10">
            <QuickAccessGrid tiles={quickAccessTiles} />
          </div>
        </div>
      </section>

      <section id="we-do" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-visible rounded-[20px] bg-[#F3FF75] shadow-sm md:ml-[100px] lg:ml-[120px]">
            <div className="flex flex-col items-center gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:gap-0 md:py-0 md:pl-0 md:pr-10 lg:pr-12">
              <div className="relative flex w-full shrink-0 items-center justify-center md:w-[51%]" style={{ background: "linear-gradient(270deg, #F3FF75 0%, #FFFFFF 50%)" }}>
                <div className="py-6 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[30%]">
                  <Image
                    src="/uploads/2024/10/Globe_Map-1.png"
                    alt=""
                    width={462}
                    height={463}
                    className="mx-auto h-auto w-[240px] rounded-full border-[10px] border-white sm:w-[280px] md:w-[320px] lg:w-[360px]"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1 text-center md:py-10 md:text-left lg:py-12">
                <h2 className="text-3xl font-bold text-neutral-900">What We Do</h2>
                <div className="mt-5 space-y-4 font-[family-name:var(--font-manrope)] text-[18px] leading-[30px] text-neutral-900">
                  <p>
                    We are a dedicated organization focused on supporting SMEs through a robust network of experts,
                    mentors, and partners. Our mission is to provide small businesses with the tools and resources they
                    need to overcome challenges, foster growth, and drive innovation.
                  </p>
                  <p>
                    Whether it&apos;s access to exclusive resources, mentorship opportunities, or connecting with a
                    like-minded community, we are here to help you succeed.
                  </p>
                </div>
                <Link
                  href="/about-us"
                  className="mt-7 inline-flex rounded-md bg-agdil-green px-5 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-medium text-white hover:bg-agdil-green-dark"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <ImpactStatsCarousel stats={impactStats} />
          </div>
        </div>
      </section>

      <section id="partners" className="mt-[70px] bg-[#EFF0FA] py-10 md:py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-8 px-4 sm:gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
          <h2 className="shrink-0 text-center text-2xl font-bold text-neutral-900 md:w-[50%] md:text-left md:text-3xl">
            Our Trusted Partners
          </h2>
          <div className="grid min-w-0 flex-1 grid-cols-5 items-center justify-items-center gap-x-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-8">
            {trustedPartners.map((partner) => (
              <div key={partner.src} className="relative h-10 w-full sm:h-12 md:h-14">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 22vw, 140px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">
            Business Formalization and Compliance Support
          </h2>
          <p className="mx-auto mt-4 max-w-[59%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
            We provide guidance on business registration, regulatory requirements, and compliance with food safety and
            quality standards.
          </p>
          <div className="mt-12">
            <FormalizationSupportCards cards={formalizationCards} />
          </div>
        </div>
      </section>

      <section id="team" className="relative overflow-hidden border-t border-emerald-100 py-14 md:py-20">
        <div className="absolute inset-0 bg-[#00610E] mx-auto max-w-6xl" aria-hidden />
        <Image
          src={teamSectionBg.base}
          alt=""
          fill
          className="object-cover object-center opacity-90"
          sizes="100vw"
          aria-hidden
        />
        <Image
          src={teamSectionBg.overlay}
          alt=""
          fill
          className="object-cover object-center opacity-70"
          sizes="100vw"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-[52%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-white">
            Our success is driven by a passionate and diverse team of professionals who are committed to the growth and
            empowerment of MSMEs.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.slug}>
                <Link href={`/${m.slug}`} className="group block overflow-hidden transition">
                  <div className="relative aspect-[351/270] w-full ">
                    <Image
                      src={m.image}
                      alt=""
                      fill
                      className="object-contain object-bottom p-2 transition group-hover:scale-[1.02]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  {/* <p className="p-3 text-center text-sm font-semibold text-neutral-800 group-hover:text-agdil-green">
                    {m.title}
                  </p> */}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/join-us"
              className="inline-flex rounded-md border border-agdil-green bg-agdil-green px-[25px] py-[15px] font-[family-name:var(--font-manrope)] text-sm font-medium text-white hover:bg-agdil-green-dark"
            >
              See Our Community
            </Link>
          </p>
        </div>
      </section>

      <section id="success" className="border-t border-emerald-100 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Inspiring SME Success Stories</h2>
          <p className="mx-auto mt-4 max-w-[49%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
            Discover how our community has helped businesses like yours achieve their goals and overcome challenges.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {successStories.map((story) => (
              <blockquote
                key={story.cite}
                className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:flex-row md:items-start"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-neutral-100 md:h-auto md:w-44 md:min-h-[200px]">
                  <Image src={story.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 176px" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-neutral-700">{story.quote}</p>
                  <footer className="mt-4 text-sm font-semibold text-agdil-green">{story.cite}</footer>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-100 bg-neutral-50/50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Our Latest Resources</h2>
          <p className="mx-auto mt-4 max-w-[50%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
            Dive into our latest publications, case studies, and webinars, all designed to give SMEs the insights they
            need to thrive in today&apos;s competitive business landscape.
          </p>
          <div className="mt-10">
            <HomeArticleSlider slides={articleSlides} />
          </div>
          <p className="mt-8 text-center">
            <Link href="/category/article" className="font-semibold text-agdil-green hover:underline">
              View all articles
            </Link>
          </p>
        </div>
      </section>

    </>
    </PageMotion>
  );
}
