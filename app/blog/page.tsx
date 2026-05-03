import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { PageMotion } from "@/components/PageMotion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Insights, case studies, and practical agrifood business knowledge for MSMEs.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageMotion>
    <div>
      {/* Hero */}
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-5 py-[100px]"
        style={{
          backgroundImage: "url(/uploads/2025/08/Agrifood-extension.png)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(33,35,39,0.6)" }}
          aria-hidden
        />
        <h1
          className="relative z-[1] text-center text-[70px] font-bold text-white max-md:text-[40px]"
          style={{ fontFamily: '"Gilroy Bold", sans-serif' }}
        >
          Blog
        </h1>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-[1400px] px-5 pb-[100px] pt-[100px] max-md:pb-[60px] max-md:pt-[60px]">
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[20px]"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />

              {/* Category badge */}
              <div
                className="relative z-[2] ml-auto mr-5 mt-5 rounded-full px-4 py-1 text-[15px] font-normal text-white"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #34A203 100%)",
                }}
              >
                <span className="font-[family-name:var(--font-manrope)] text-[15px] leading-[30px] text-white">
                  {post.category}
                </span>
              </div>

              {/* Bottom content overlay */}
              <div
                className="relative z-[2] mt-auto rounded-[20px] p-[30px]"
                style={{
                  backgroundColor: "rgba(12,12,12,0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <h2
                  className="max-w-[82%] text-[20px] font-semibold leading-[24px] text-[#EFF0FA]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {post.title}
                </h2>
                <span className="mt-3 inline-block text-sm font-medium text-white underline">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </PageMotion>
  );
}
