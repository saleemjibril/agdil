import { notFound } from "next/navigation";
import Image from "next/image";
import { listSlugs } from "@/lib/markdown";
import type { Metadata } from "next";
import { PageMotion } from "@/components/PageMotion";

type Props = { params: Promise<{ slug: string }> };

const eventData: Record<
  string,
  {
    title: string;
    date: string;
    time: string;
    location: string;
    images: string[];
    description: string;
    mapQuery: string;
  }
> = {
  "agrifood-digital-library-resource-centreagdil-launch": {
    title: "Agrifood Digital Library Resource Centre(Agdil) Launch",
    date: "2025-09-24",
    time: "10:00",
    location: "11 Vannern Street, Wuse abuja",
    images: [
      "/uploads/2025/08/thumbnail_Agdil.jpg",
    ],
    description:
      "The Agrifood Digital Library Resource Centre(Agdil) Launch is scheduled to be luanched by September 24th 2025, This will makr a major big projects for Msmes and help them access live resources to help their needs, this will also ensure that everywhere is safe and sound sna dj j hhfhdfhdf dhfdfhdf hdfhdf hdfhdfhd hdfhdfdh hdfhdf",
    mapQuery: "11+Vannern+Street,+Wuse+abuja",
  },
  "win-win-project-chicken-sales": {
    title: "Win-Win Project Chicken Sales",
    date: "2025-08-20",
    time: "08:21",
    location: "11 Vannern Crescent Jabi Abuja",
    images: [
      "/uploads/2025/08/WINWIN-PROJECT-CHICKEN.jpg",
    ],
    description:
      "Win-Win Project Chicken Sales event details. Join us for fresh and healthy chicken sales at an affordable price.",
    mapQuery: "11+Vannern+Crescent+Jabi+Abuja",
  },
};

export function generateStaticParams() {
  return listSlugs("events").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const evt = eventData[slug];
  if (!evt) return {};
  return { title: evt.title, description: evt.description };
}

function CalendarIcon() {
  return (
    <svg className="h-[14px] w-[14px] shrink-0" viewBox="0 0 448 512" fill="#000">
      <path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-[14px] w-[14px] shrink-0" viewBox="0 0 512 512" fill="#000">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="h-[14px] w-[14px] shrink-0" viewBox="0 0 384 512" fill="#000">
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const evt = eventData[slug];
  if (!evt) notFound();

  return (
    <PageMotion>
    <div>
      <section className="mx-auto flex max-w-[1240px] gap-8 px-5 pb-[100px] pt-[62px] max-md:flex-col">
        {/* Left Column – Images + Register */}
        <div className="flex w-[40%] shrink-0 flex-col gap-4 max-md:w-full">
          {evt.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={evt.title}
              width={800}
              height={1000}
              className="h-auto w-full rounded-[20px]"
              unoptimized
            />
          ))}
          <a
            href="#"
            className="block w-full rounded bg-agdil-green py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Register Here
          </a>
        </div>

        {/* Right Column – Details */}
        <div className="flex-1">
          <h2 className="text-[32px] font-bold leading-tight text-agdil-green max-md:text-2xl">
            {evt.title}
          </h2>

          <ul className="mt-4 flex flex-col gap-[10px]">
            <li className="flex items-center gap-2">
              <CalendarIcon />
              <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-black">
                {evt.date}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon />
              <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-black">
                {evt.time}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapIcon />
              <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-black">
                {evt.location}
              </span>
            </li>
          </ul>

          {/* More About */}
          <div className="mt-5">
            <h2
              className="text-[20px] font-bold"
              style={{
                fontFamily: '"Gilroy Bold", sans-serif',
                color: "var(--e-global-color-text, #212327)",
              }}
            >
              More About this Event
            </h2>
            <p className="mt-3 leading-relaxed text-[#212327]">
              {evt.description}
            </p>
          </div>

          {/* Directions */}
          <div className="mt-5">
            <h2
              className="text-[20px] font-bold"
              style={{
                fontFamily: '"Gilroy Bold", sans-serif',
                color: "var(--e-global-color-text, #212327)",
              }}
            >
              Directions
            </h2>
            <div className="mt-3 overflow-hidden rounded-lg">
              <iframe
                loading="lazy"
                src={`https://maps.google.com/maps?q=${evt.mapQuery}&t=m&z=10&output=embed&iwloc=near`}
                title={evt.location}
                aria-label={evt.location}
                className="h-[300px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageMotion>
  );
}
