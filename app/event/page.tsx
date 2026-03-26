import Image from "next/image";
import Link from "next/link";

const events = [
  {
    slug: "agrifood-digital-library-resource-centreagdil-launch",
    title: "Agrifood Digital Library Resource Centre(Agdil) Launch",
    date: "2025-09-24",
    time: "10:00",
    location: "11 Vannern Street, Wuse abuja",
    image: "/uploads/2025/08/thumbnail_Agdil.jpg",
  },
  {
    slug: "win-win-project-chicken-sales",
    title: "Win-Win Project Chicken Sales",
    date: "2025-08-20",
    time: "08:21",
    location: "11 Vannern Crescent Jabi Abuja",
    image: "/uploads/2025/08/WINWIN-PROJECT-CHICKEN.jpg",
  },
];

function CalendarIcon() {
  return (
    <svg
      className="h-[14px] w-[14px] shrink-0"
      viewBox="0 0 448 512"
      fill="#727272"
    >
      <path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-[14px] w-[14px] shrink-0"
      viewBox="0 0 512 512"
      fill="#727272"
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      className="h-[14px] w-[14px] shrink-0"
      viewBox="0 0 384 512"
      fill="#727272"
    >
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  );
}

export default function EventPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center px-5 py-[100px] max-md:py-[70px]"
        style={{
          backgroundImage:
            "url(/uploads/2025/08/WhatsApp-Image-2024-11-11-at-16.01.46-1.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <h1
          className="relative z-[1] text-center text-[60px] font-bold leading-[65px] text-white max-md:text-[40px] max-md:leading-[46px]"
          style={{ fontFamily: '"Gilroy Bold", sans-serif' }}
        >
          Our Events
        </h1>
      </section>

      {/* Events Grid */}
      <section className="mx-auto max-w-[1220px] px-5 pb-[50px] pt-[40px]">
        <div className="mt-[38px] grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((evt) => (
            <article
              key={evt.slug}
              className="flex overflow-hidden rounded-[5px] border border-[#9B9B9B] max-md:flex-col"
            >
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h2
                    className="text-[24px] font-bold leading-[26px]"
                    style={{
                      fontFamily: '"Gilroy Bold", sans-serif',
                      color: "var(--e-global-color-text, #212327)",
                    }}
                  >
                    {evt.title}
                  </h2>

                  <ul className="mt-5 flex flex-col gap-[10px]">
                    <li className="flex items-center gap-2">
                      <CalendarIcon />
                      <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-[#6D6D6D] max-md:text-base">
                        {evt.date}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClockIcon />
                      <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-[#6D6D6D] max-md:text-base">
                        {evt.time}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapIcon />
                      <span className="font-[family-name:var(--font-manrope)] text-[20px] leading-[30px] text-[#6D6D6D] max-md:text-base">
                        {evt.location}
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href={`/event/${evt.slug}`}
                  className="mt-6 inline-block w-fit rounded bg-agdil-green px-[25px] py-[12px] text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  View Event
                </Link>
              </div>

              {/* Image */}
              <div className="relative w-[40%] max-md:min-h-[313px] max-md:w-full">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
