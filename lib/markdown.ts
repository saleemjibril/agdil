import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentMeta = {
  title: string;
  description?: string;
  date?: string;
};

export function readMarkdown(relativePath: string): {
  meta: ContentMeta;
  body: string;
} {
  const full = path.join(contentDir, relativePath);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as ContentMeta, body: content };
}

export function listSlugs(subdir: string): string[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
