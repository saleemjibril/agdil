import Image from "next/image";
import JoinForm from "@/components/join/JoinForm";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Become a Part of Us",
  description: "Join AGDIL as an MSME, partner, investor, donor, or volunteer.",
  path: "/become-a-part-of-us",
});

export default function BecomeAPartOfUsPage() {
  return (
    <PageMotion>
    <div>
      {/* ── Section 1: Who Can Join? ── */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[130px] pt-[130px] max-md:pb-[60px] max-md:pt-[60px]">
        <h2
          className="mb-10 text-center text-[32px] font-bold leading-tight max-md:text-2xl"
          style={{
            fontFamily: '"Gilroy Bold", sans-serif',
            color: "var(--e-global-color-text, #212327)",
          }}
        >
          Who Can Join?
        </h2>

        <div className="flex gap-8 max-md:flex-col">
          {/* Left – Image */}
          <div className="w-[45%] shrink-0 max-md:w-full">
            <Image
              src="/uploads/2025/03/Pexels-Photo-by-Selman-Urluca.png"
              alt="Agrifood farmer"
              width={554}
              height={605}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          {/* Right – Text content */}
          <div className="flex-1">
            <h4
              className="text-[20px] font-bold leading-tight"
              style={{ color: "var(--e-global-color-text, #212327)" }}
            >
              MSMEs
            </h4>
            <p className="mt-2 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              Are you an agrifood entrepreneur or business owner looking for
              funding, mentorship, and growth opportunities? Join us to access
              market, expert guidance, and learning resources.
            </p>

            <h4
              className="mt-6 text-[20px] font-bold leading-tight"
              style={{ color: "var(--e-global-color-text, #212327)" }}
            >
              Investors
            </h4>
            <p className="mt-2 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              Looking for promising MSMEs to invest in? Gain access to vetted
              businesses, market insights, and co-investment opportunities.
            </p>

            <h4
              className="mt-6 text-[20px] font-bold leading-tight"
              style={{ color: "var(--e-global-color-text, #212327)" }}
            >
              Partners &amp; Donors
            </h4>
            <p className="mt-2 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              Want to support economic growth and empower small businesses?
              Partner with us to fund initiatives, offer training, and drive
              social impact.
            </p>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              Join our passionate community of volunteers at Agrifood D&amp;I
              Resource Center and make a meaningful impact on the success of
              Micro, Small, and Medium Enterprises (MSMEs). As a volunteer,
              you&apos;ll have the opportunity to share your skills, knowledge,
              and expertise with entrepreneurs who are striving to overcome
              challenges and grow their businesses
            </p>

            <h4
              className="mt-6 text-[20px] font-bold leading-tight"
              style={{ color: "var(--e-global-color-text, #212327)" }}
            >
              Why Join Us?
            </h4>
            <ul className="mt-2 list-inside list-disc font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              <li>Access to funding and investment opportunities</li>
              <li>Networking with industry experts and partners</li>
              <li>Training, mentorship, and capacity-building programs</li>
              <li>
                Opportunities to contribute to economic and social development
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 2: Join Our Network ── */}
      <section className="min-h-[678px] bg-[#F3F4F6]">
        <div className="flex max-md:flex-col">
          {/* Left column */}
          <div className="flex w-1/2 flex-col justify-center py-16 pl-[190px] pr-[100px] max-lg:pl-[60px] max-lg:pr-[40px] max-md:w-full max-md:px-5 max-md:pb-0 max-md:pt-[30px]">
            <div className="flex flex-col gap-[5px]">
              <p
                className="text-[18px] font-[900] uppercase"
                style={{ fontFamily: '"Gilroy Bold", sans-serif' }}
              >
                <span className="text-agdil-green">Who Joins us</span>
              </p>
              <h2
                className="text-[32px] font-bold leading-tight max-md:text-2xl"
                style={{
                  color: "var(--e-global-color-text, #212327)",
                }}
              >
                Join Our Network and Create Impact
              </h2>
            </div>

            <p className="mt-4 font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327]">
              We welcome MSMEs (Micro, Small, and Medium Enterprises),
              Investors, and Partners/Donors to be part of our growing
              ecosystem. By joining, you gain access to exclusive opportunities,
              resources, and a network dedicated to sustainable growth and
              innovation.
            </p>

            <a
              href="#get-started"
              className="mt-6 inline-block w-fit rounded bg-agdil-green px-[25px] py-[12px] text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Join the Community
            </a>
          </div>

          {/* Right column – countryside image */}
          <div
            className="relative w-1/2 bg-cover bg-center max-md:min-h-[300px] max-md:w-full"
            style={{
              backgroundImage:
                "url(/uploads/2025/03/countryside-workers-out-field-1.png)",
            }}
          />
        </div>
      </section>

      {/* ── Section 3: Get Started (Form) ── */}
      <section
        id="get-started"
        className="bg-[#F3F4F6] px-5 pb-[100px] pt-[100px] max-md:pb-[50px] max-md:pt-[50px]"
      >
        <h2
          className="text-center text-[32px] font-bold leading-tight max-md:text-2xl"
          style={{
            color: "var(--e-global-color-text, #212327)",
          }}
        >
          Get Started
        </h2>
        <p className="mx-auto mt-3 max-w-[59%] text-center font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[30px] text-[#212327] max-md:max-w-full">
          Fill out the form below to join us. Select your category, provide your
          details, and our team will reach out with the next steps.
        </p>

        <div className="mt-10">
          <JoinForm />
        </div>
      </section>
    </div>
    </PageMotion>
  );
}
