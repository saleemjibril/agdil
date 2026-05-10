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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Home",
  description: "Empowering MSMEs with resources, market access, funding support, and business growth tools.",
  path: "/",
});

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
      <section className="relative overflow-hidden border-b border-emerald-100 bg-white">
        <div className="mx-auto flex min-h-[60vh] flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:gap-12 md:py-0 md:px-24">
          <div className="relative z-[1] flex flex-1 flex-col justify-center text-center md:text-left">
            <h1 className="text-[2.5em] font-black leading-[1.05] tracking-tight text-neutral-900 md:text-[3em] md:leading-[1.05em]">
              Empowering MSMEs to<br className="hidden md:block"/> Succeed & Provide Safe,<br className="hidden md:block"/> Nutritious Foods
            </h1>
            <p className="mt-6 mx-auto md:mx-0 max-w-[90%] md:max-w-[70%] font-[family-name:var(--font-manrope)] text-[1em] md:text-[1.15em] leading-[1.6em] text-neutral-600">
              Access expert resources, connect with mentors, and
              join a thriving community focused on helping small
              and medium-sized businesses thrive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                href="/get-business-funds"
                className="rounded-md border border-agdil-green bg-agdil-green px-6 py-3 font-semibold text-white shadow-sm hover:bg-agdil-green-dark"
              >
                Get Funding
              </Link>
              <Link
                href="/store-listing"
                className="rounded-md border border-agdil-green bg-transparent px-6 py-3 font-semibold text-agdil-green hover:bg-emerald-50"
              >
                Marketplace
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] w-full flex-1 md:min-h-[min(60vh,500px)]">
            <HeroImageCarousel slides={heroSlides} />
            <Image
              src="/uploads/2024/10/Frame-9.png"
              alt=""
              width={140}
              height={145}
              className="pointer-events-none absolute -left-2 bottom-6 z-[4] hidden drop-shadow-md md:block"
            />
            <Image
              src="/uploads/2024/10/Frame-10.png"
              alt=""
              width={125}
              height={135}
              className="pointer-events-none absolute -right-1 top-8 z-[4] hidden drop-shadow-md md:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-4 md:py-6" aria-label="Latest market prices">
        <div className="">
          <MarketPricesTicker items={marketPrices} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-full px-6 md:px-24">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Quick Access</h2>
          <div className="mt-10">
            <QuickAccessGrid tiles={quickAccessTiles} />
          </div>
        </div>
      </section>

      <section id="we-do" className="bg-white py-10 md:py-16">
        <div className="mx-auto w-full px-6 md:px-24">
          <div className="relative flex min-h-[auto] flex-col md:flex-row md:min-h-[350px] items-stretch overflow-hidden rounded-[24px] bg-[#f2ff72]">
            <div className="relative -ml-0 md:-ml-14 flex w-full md:w-[42%] items-center justify-center p-8 md:p-0">
              <div className="absolute inset-0 z-0 w-full bg-gradient-to-b from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-white md:via-white"></div>
              <Image
                src="/uploads/2024/10/Globe_Map-1.png"
                alt=""
                width={420}
                height={420}
                className="relative z-10 h-auto w-full max-w-[300px] md:max-w-[420px]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 md:py-9 md:pr-12 md:pl-0 text-center md:text-left">
              <div className="max-w-xl mx-auto md:mx-0">
                <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-neutral-900">What We Do</h2>
                <div className="mt-6 space-y-4 font-[family-name:var(--font-manrope)] text-[16px] md:text-[17px] leading-[1.55] tracking-tight text-neutral-800">
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
                  className="mt-6 inline-flex rounded-md bg-[#2da10c] px-5 py-2.5 font-[family-name:var(--font-manrope)] text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-agdil-green-dark"
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

      <section id="partners" className="mt-[70px] bg-[#EFF0FA] py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-24">
          <div className="flex flex-col items-center gap-8 md:gap-12 text-center md:flex-row md:justify-between md:text-left">
            <h2 className="shrink-0 text-[32px] md:text-[42px] font-bold tracking-tight text-neutral-900">
              Our Trusted Partners
            </h2>
            <div className="flex flex-1 flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 lg:gap-14">
              <div className="relative h-12 w-24 md:h-20 md:w-44">
                <Image
                  src="/brands/gain.png"
                  alt="GAIN"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-10 w-32 md:h-14 md:w-44">
                <Image
                  src="/brands/smedan.png"
                  alt="SMEDAN"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-14 md:h-18 md:w-20">
                <Image
                  src="/brands/cac.png"
                  alt="CAC"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-14 md:h-18 md:w-20">
                <Image
                  src="/brands/nafdac.png"
                  alt="NAFDAC"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-full px-6 md:px-24">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">
            Business Formalization and Compliance Support
          </h2>
          <p className="mx-auto mt-4 max-w-[90%] md:max-w-[59%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
            We provide guidance on business registration, regulatory requirements, and compliance with food safety and
            quality standards.
          </p>
          <div className="mt-12">
            <FormalizationSupportCards cards={formalizationCards} />
          </div>
        </div>
      </section>

      <section id="team" className="relative overflow-hidden border-t border-emerald-100 py-14 md:py-20">
        <div className="absolute inset-0 bg-[#00610E] mx-auto w-full px-6 md:px-24" aria-hidden />
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
        <div className="relative z-[1] mx-auto w-full px-6 md:px-24">
          <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-[90%] md:max-w-[52%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-white">
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
        <div className="mx-auto w-full px-6 md:px-24">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Inspiring SME Success Stories</h2>
          <p className="mx-auto mt-4 max-w-[90%] md:max-w-[49%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
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
        <div className="mx-auto w-full px-6 md:px-24">
          <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">Our Latest Resources</h2>
          <p className="mx-auto mt-4 max-w-[90%] md:max-w-[50%] text-center font-[family-name:var(--font-manrope)] text-[16px] leading-[24px] text-neutral-600">
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
