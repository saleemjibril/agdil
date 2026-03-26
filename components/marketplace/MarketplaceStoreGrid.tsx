import Image from "next/image";
import Link from "next/link";
import type { Store } from "@/lib/commerce/catalog";
import { storeAvatarImage, storeBannerImage } from "@/lib/commerce/catalog";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.43a16 16 0 006.48 6.48l1.25-1.25a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68a2 2 0 011.72 2.03z"
        stroke="#34A203"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={active ? "text-agdil-green" : "text-neutral-400"}
    >
      <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={active ? "text-agdil-green" : "text-neutral-400"}
    >
      <rect x="1" y="2" width="18" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="18" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="16" width="18" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MarketplaceStoreGrid({ stores }: { stores: Store[] }) {
  return (
    <>
      {/* Toolbar */}
      <div className="mb-8 flex items-center justify-between rounded-[6px] bg-white px-6 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]">
        <p className="font-[family-name:var(--font-manrope)] text-[16px] text-neutral-700">
          Total stores showing: <span className="font-semibold text-neutral-900">{stores.length}</span>
        </p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-[5px] bg-agdil-green px-4 py-2 font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Filter
          </button>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-manrope)] text-[14px] text-neutral-600">Sort by:</span>
            <select
              className="rounded-[5px] border border-neutral-200 bg-white px-3 py-2 font-[family-name:var(--font-manrope)] text-[14px]"
              defaultValue="most_recent"
              aria-label="Sort stores"
            >
              <option value="most_recent">Most Recent</option>
              <option value="total_orders">Most Popular</option>
              <option value="random">Random</option>
              <option value="top_rated">Top Rated</option>
              <option value="most_reviewed">Most Reviewed</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button aria-label="Grid view" className="p-1"><GridIcon active /></button>
            <button aria-label="List view" className="p-1"><ListIcon active={false} /></button>
          </div>
        </div>
      </div>

      {/* Store cards */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <li
            key={store.slug}
            className="overflow-hidden rounded-[10px] border-t-[3px] border-agdil-green bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]"
          >
            {/* Banner + overlay content */}
            <div className="relative min-h-[240px]">
              <Image
                src={storeBannerImage(store)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Open badge */}
              {store.status !== "closed" && (
                <span className="absolute right-3 top-3 rounded-full bg-agdil-green px-3 py-1 text-[11px] font-bold text-white">
                  Open
                </span>
              )}

              {/* Text content */}
              <div className="absolute bottom-4 left-4 right-20 z-[1]">
                <h2 className="text-[18px] font-bold leading-tight text-white">
                  <Link href={`/store/${store.slug}`} className="hover:underline">
                    {store.name}
                  </Link>
                </h2>
                {store.address && (
                  <p className="mt-2 whitespace-pre-line text-[13px] leading-[18px] text-white/90">
                    {store.address}
                  </p>
                )}
                {store.phone && (
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] text-white/90">
                    <PhoneIcon /> {store.phone}
                  </p>
                )}
              </div>

              {/* Avatar */}
              <div className="absolute bottom-4 right-4 z-[1]">
                <Link
                  href={`/store/${store.slug}`}
                  className="relative block h-[56px] w-[56px] overflow-hidden rounded-full border-2 border-white bg-neutral-50 shadow-md"
                >
                  <Image
                    src={storeAvatarImage(store)}
                    alt={store.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center gap-3 px-4 py-3">
              <Link
                href={`/store/${store.slug}`}
                className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-agdil-green text-agdil-green hover:bg-agdil-green hover:text-white"
                title="Visit Store"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
              <button className="rounded-[5px] bg-agdil-green px-4 py-1.5 font-[family-name:var(--font-manrope)] text-[13px] font-semibold text-white hover:bg-agdil-green-dark">
                Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
