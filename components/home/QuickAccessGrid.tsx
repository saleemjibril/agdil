import Image from "next/image";
import Link from "next/link";
import type { QuickAccessTile } from "@/lib/home";

function partitionQuickAccess(tiles: QuickAccessTile[]) {
  const featureTile = tiles.find((t) => t.layout === "featureWide");
  const rest = tiles.filter((t) => t.layout !== "featureWide");
  return {
    firstSix: rest.slice(0, 6),
    eventTile: rest[6] ?? null,
    featureTile: featureTile ?? null,
  };
}

function QuickAccessCardVertical({ tile }: { tile: QuickAccessTile }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[20px] border-[0.5px] border-agdil-green bg-white shadow-[0_5px_20px_0_rgba(148,163,184,0.2)] transition hover:shadow-md">
      <div className="relative min-h-[170px] w-full shrink-0 rounded-[10px] bg-neutral-100">
        <Image
          src={tile.image}
          alt=""
          fill
          className="rounded-[10px] object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-neutral-900">{tile.title}</h3>
        <p className="mt-1 flex-1 font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-neutral-700">{tile.body}</p>
        <Link
          href={tile.href}
          className="mt-5 inline-flex w-fit font-[family-name:var(--font-manrope)] rounded-lg bg-agdil-green px-4 py-2.5 text-sm font-medium text-white hover:bg-agdil-green-dark"
        >
          {tile.cta}
        </Link>
      </div>
    </div>
  );
}

function QuickAccessCardFeatureWide({ tile }: { tile: QuickAccessTile }) {
  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden rounded-[20px] border-[0.5px] border-agdil-green bg-white shadow-[0_5px_20px_0_rgba(148,163,184,0.2)] transition hover:shadow-md md:flex-row">
      <div className="relative h-52 w-full shrink-0 bg-neutral-100 md:h-full md:min-h-[350px] md:w-1/2">
        <Image
          src={tile.image}
          alt=""
          fill
          className="rounded-[10px] object-cover object-right"
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-5 md:p-6 lg:p-8">
        <h3 className="text-lg font-bold text-neutral-900 md:text-xl">{tile.title}</h3>
        <p className="mt-1 font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-neutral-700">{tile.body}</p>
        <Link
          href={tile.href}
          className="mt-5 inline-flex w-fit font-[family-name:var(--font-manrope)] rounded-lg bg-agdil-green px-4 py-2.5 text-sm font-medium text-white hover:bg-agdil-market-green-dark"
        >
          {tile.cta}
        </Link>
      </div>
    </div>
  );
}

export function QuickAccessGrid({ tiles }: { tiles: QuickAccessTile[] }) {
  const { firstSix, eventTile, featureTile } = partitionQuickAccess(tiles);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
      {firstSix.map((tile) => (
        <QuickAccessCardVertical key={tile.title} tile={tile} />
      ))}

      {featureTile ? (
        <div className="md:col-span-2 md:flex md:min-h-0 md:items-stretch">
          <QuickAccessCardFeatureWide tile={featureTile} />
        </div>
      ) : null}

      {eventTile ? (
        <div className="md:col-span-1 md:flex md:min-h-0 md:items-stretch">
          <QuickAccessCardVertical tile={eventTile} />
        </div>
      ) : null}
    </div>
  );
}
