import Image from "next/image";
import Link from "next/link";
import type { FormalizationCard } from "@/lib/home";

export function FormalizationSupportCards({ cards }: { cards: readonly FormalizationCard[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {cards.map((card) => {
        const externalLogo = card.logo?.startsWith("http");
        return (
          <article
            key={card.title}
            className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[20px] shadow-md sm:min-h-[360px]"
          >
            <Image
              src={card.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 bg-[#212327]/50"
              aria-hidden
            />
            <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-end px-[30px] pb-10 pt-40 text-center">
              {card.logo ? (
                <div className="relative mx-auto mb-4 h-[125px] w-auto shrink-0 drop-shadow-md">
                  <Image
                    src={card.logo}
                    alt=""
                    width={125}
                    height={125}
                    className="h-[125px] w-auto object-contain"
                    unoptimized={externalLogo}
                  />
                </div>
              ) : null}
              <h3 className="text-[35px] font-bold uppercase leading-tight tracking-wide text-white">
                {card.title}
              </h3>
              <Link
                href={card.href}
                className="mt-5 inline-flex justify-center rounded-md bg-agdil-green px-5 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-medium text-white hover:bg-agdil-green-dark"
              >
                Register Now
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
