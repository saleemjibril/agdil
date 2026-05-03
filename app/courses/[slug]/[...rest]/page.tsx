import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

type Props = { params: Promise<{ slug: string; rest: string[] }> };

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function labelFromSegments(parts: string[]) {
  return parts
    .map((part) => labelFromSlug(part))
    .join(" / ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, rest } = await params;
  const course = labelFromSlug(slug);
  const trail = labelFromSegments(rest);
  return {
    title: `${course} - ${trail}`,
    description: `Nested course page for ${course}.`,
  };
}

export default async function NestedCoursePage({ params }: Props) {
  const { slug, rest } = await params;
  const course = labelFromSlug(slug);
  const trail = labelFromSegments(rest);

  return (
    <PageShell title={course} description={`Nested route: ${trail}`} wide>
      <p className="text-neutral-700">
        This nested course path now resolves in Next.js. Next step: map lesson/module content from WordPress export.
      </p>
    </PageShell>
  );
}
