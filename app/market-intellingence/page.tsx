import Image from "next/image";
import MarketIntelligenceTable from "@/components/market-intelligence/MarketIntelligenceTable";

export default function MarketIntelligencePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex min-h-[500px] flex-col items-center justify-center bg-cover bg-top px-5 py-[100px]"
        style={{ backgroundImage: "url(/uploads/2025/02/Marjet.png)" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--e-global-color-text, rgba(0,0,0,0.7))" }}
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col items-center">
          <h1
            className="text-center text-[60px] font-bold leading-[65px] text-white max-md:text-[40px] max-md:leading-[46px]"
            style={{ fontFamily: '"Gilroy Bold", sans-serif' }}
          >
            Smart Market Insights for SMEs
          </h1>
          <h2
            className="mt-4 max-w-[77%] text-center font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-[150%] text-white max-md:max-w-full max-md:text-[18px]"
          >
            Gain a competitive edge with the latest market trends, pricing data,
            and insights tailored for SMEs. Our Market Intelligence Hub provides
            up-to-date information on key products, helping you make informed
            business decisions with confidence.
          </h2>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="-mt-[5px] pb-[80px] pt-10">
        <MarketIntelligenceTable />
      </section>

      {/* Infographic Image */}
      <section className="flex justify-center pb-16">
        <Image
          src="/uploads/2026/02/Market-Intelligence-at-a-glance.jpg"
          alt="Market Intelligence at a Glance"
          width={724}
          height={1024}
          className="h-auto w-full max-w-[724px]"
          unoptimized
        />
      </section>
    </main>
  );
}
