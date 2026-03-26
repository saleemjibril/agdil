"use client";

import { marketPrices } from "@/lib/home";

/** Matches live ticker strip (screenshot ref ~#369919). */
const TICKER_GREEN = "#369919";

type Item = (typeof marketPrices)[number];

export function MarketPricesTicker({ items }: { items: readonly Item[] }) {
  const loop = [...items, ...items];

  return (
    <div className="flex w-full min-h-[4.5rem] overflow-hidden border-2 border-[#369919] md:min-h-[5rem]">
      <div
        className="flex w-[7.5rem] shrink-0 flex-col items-center justify-center px-2 py-3 text-center sm:w-36 md:w-44 md:px-4"
        style={{ backgroundColor: TICKER_GREEN }}
      >
        <span className="text-[13px] font-bold leading-snug text-white sm:text-sm md:text-[15px]">
          Latest Market
          <br />
          Prices
        </span>
      </div>
      <div className="relative min-w-0 flex-1 overflow-hidden border-l-2 border-[#369919] bg-white">
        <div className="flex h-full items-center py-2">
          <div className="flex w-max animate-market-prices-ticker items-center gap-10 whitespace-nowrap px-4 md:gap-14 md:px-6">
            {loop.map((row, i) => (
              <span
                key={`${row.label}-${row.range}-${i}`}
                className="inline-flex shrink-0 items-baseline gap-2 text-sm text-neutral-900 md:text-base"
              >
                <span>{row.label}</span>
                <span className="font-medium tabular-nums" style={{ color: TICKER_GREEN }}>
                  {row.range}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
