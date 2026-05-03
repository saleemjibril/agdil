import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, getBlogPost, getAdjacentPosts } from "@/lib/blog";
import { PageMotion } from "@/components/PageMotion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return { title: post?.title ?? "Blog" };
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 448 512"
      className="h-[14px] w-[14px] shrink-0 fill-agdil-green"
    >
      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      viewBox="0 0 640 512"
      className="h-[14px] w-[14px] shrink-0 fill-agdil-green"
    >
      <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
    </svg>
  );
}

function ShareIcon({
  d,
  label,
}: {
  d: string;
  label: string;
}) {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded bg-agdil-green text-white"
      title={label}
    >
      <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current">
        <path d={d} />
      </svg>
    </div>
  );
}

const fbPath =
  "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";
const twPath =
  "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z";
const liPath =
  "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z";
const waPath =
  "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z";

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <PageMotion>
    <div>
      {/* Hero */}
      <section
        className="relative flex min-h-[340px] items-center justify-center bg-cover bg-center px-5"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(33,35,39,0.7)" }}
          aria-hidden
        />
        <h1
          className="relative z-[1] max-w-[900px] text-center text-[48px] font-semibold uppercase leading-[1.2em] text-white max-lg:text-[30px] max-md:text-[24px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {post.title}
        </h1>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto flex max-w-[1200px] gap-[50px] px-[10px] pb-[80px] pt-[80px] max-md:flex-col max-md:pb-[60px] max-md:pt-[60px]">
        {/* Left – Main Content (66.67%) */}
        <article className="w-2/3 max-md:w-full">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={534}
            className="h-auto w-full"
            unoptimized
          />

          {/* Meta */}
          <ul className="mt-4 flex items-center gap-4">
            <li className="flex items-center gap-2 text-sm text-[#212327]">
              <CalendarIcon />
              <time>{post.date}</time>
            </li>
            <li className="flex items-center gap-2 text-sm text-[#212327]">
              <TagIcon />
              <span>{post.category}</span>
            </li>
          </ul>

          {/* Post body */}
          <div
            className="prose mt-6 max-w-none text-[#3B3B3B]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-5 flex items-center gap-4 py-4">
            <h4 className="text-lg font-semibold text-agdil-green">Share:</h4>
            <div className="flex gap-2.5">
              <ShareIcon d={fbPath} label="Facebook" />
              <ShareIcon d={twPath} label="Twitter" />
              <ShareIcon d={liPath} label="LinkedIn" />
              <ShareIcon d={waPath} label="WhatsApp" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-stretch border-y border-agdil-green py-[5px]">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="flex flex-1 items-center gap-5"
              >
                <svg
                  viewBox="0 0 256 512"
                  className="h-[30px] w-[30px] shrink-0 fill-[#212327] transition-colors hover:fill-agdil-green"
                >
                  <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </svg>
                <div>
                  <span className="text-xs uppercase text-[#212327]">
                    Previous
                  </span>
                  <span className="mt-0.5 block text-sm text-[#212327]">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {prev && next && (
              <div className="mx-4 w-px bg-agdil-green" />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="flex flex-1 items-center justify-end gap-5 text-right"
              >
                <div>
                  <span className="text-xs uppercase text-[#212327]">Next</span>
                  <span className="mt-0.5 block text-sm text-[#212327]">
                    {next.title}
                  </span>
                </div>
                <svg
                  viewBox="0 0 256 512"
                  className="h-[30px] w-[30px] shrink-0 fill-[#212327] transition-colors hover:fill-agdil-green"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </article>

        {/* Right – Sidebar (33.33%) */}
        <aside className="w-1/3 max-md:w-full">
          {/* Search */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type to start searching..."
              className="flex-1 rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-agdil-green"
            />
            <button className="rounded bg-agdil-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700">
              Search
            </button>
          </div>

          {/* Recent Posts */}
          <div className="mt-6 rounded border border-[#EEEEEE] p-[30px]">
            <h4 className="text-lg font-semibold text-agdil-green">
              Recent Posts
            </h4>
            <div className="mt-1 mb-4 h-0.5 w-[17%] bg-[#212327]" />
            <div className="flex flex-col gap-5">
              {recentPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="flex gap-4"
                >
                  <div className="relative h-[60px] w-[80px] shrink-0 overflow-hidden rounded">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span
                      className="text-[14px] font-medium leading-tight text-[#212327] transition-colors hover:text-agdil-green"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {rp.title}
                    </span>
                    <span className="mt-1 text-xs text-agdil-green">
                      {rp.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
    </PageMotion>
  );
}
