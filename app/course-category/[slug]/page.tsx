import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string }> };

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = labelFromSlug(slug);
  return {
    title: `Course Category: ${label}`,
    description: `Courses under ${label}.`,
  };
}

export default async function CourseCategoryPage({ params }: Props) {
  const { slug } = await params;
  const label = labelFromSlug(slug);

  return (
    <PageShell title={label} description="This course category route is now available in Next.js." wide>
      <p className="text-neutral-700">
        Next step: render category-filtered courses from your course content source.
      </p>
    </PageShell>
  );
}
