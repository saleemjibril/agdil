import { MarketplaceStoreGrid } from "@/components/marketplace/MarketplaceStoreGrid";
import { listStoresForMarketplace } from "@/lib/commerce/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Invest in agrifood businesses — browse vendor stores and products on the AGDIL marketplace.",
};

export default function Page() {
  const stores = listStoresForMarketplace();

  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        className="relative flex flex-col items-center justify-end bg-cover bg-center pb-[50px] pt-[200px] max-lg:pb-[60px] max-lg:pt-[190px]"
        style={{ backgroundImage: "url(/uploads/2025/08/Agrifood-extension.png)" }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-[1] flex w-full flex-col items-center">
          <h1
            className="text-center text-[70px] font-bold leading-tight text-white max-md:text-[40px]"
            style={{ fontFamily: '"Gilroy Bold", sans-serif' }}
          >
            Invest in an Agrifood Business
          </h1>
          <p className="mt-4 max-w-[77%] text-center font-[family-name:var(--font-manrope)] text-[20px] font-normal leading-[150%] text-white max-md:max-w-full max-md:px-4">
            Join our passionate community at Agrifood D&amp;I Resource Center and make a meaningful
            impact on the success of Micro, Small, and Medium Enterprises (MSMEs).
          </p>
        </div>
      </section>

      {/* ── Store Listing ── */}
      <section className="py-[100px] px-[20px]">
        <div className="mx-auto max-w-[1240px]">
          <MarketplaceStoreGrid stores={stores} />
        </div>
      </section>
    </>
  );
}
