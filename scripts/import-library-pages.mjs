#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { load } from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = join(__dirname, "..");
const OUT_DIR = join(WEB_ROOT, "content", "library");

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    site: "https://agdil.com",
    limit: 10,
    dryRun: false,
  };
  for (let i = 0; i < args.length; i += 1) {
    const a = args[i];
    if (a === "--site") options.site = args[i + 1];
    if (a === "--limit") options.limit = Number(args[i + 1] ?? "10");
    if (a === "--dry-run") options.dryRun = true;
  }
  return options;
}

function escapeFrontmatter(value) {
  return String(value ?? "").replace(/"/g, '\\"').trim();
}

function unique(items) {
  return [...new Set(items)];
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "agdil-library-importer/1.0",
      accept: "text/html,application/xml;q=0.9,*/*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

async function collectLibraryUrls(site) {
  const base = site.replace(/\/$/, "");
  const sitemapCandidates = [`${base}/sitemap_index.xml`, `${base}/wp-sitemap.xml`];
  let nested = [];
  for (const sitemapUrl of sitemapCandidates) {
    try {
      const xml = await fetchText(sitemapUrl);
      const $ = load(xml, { xmlMode: true });
      nested = $("sitemap > loc")
        .map((_, el) => $(el).text().trim())
        .get();
      if (nested.length > 0) break;
      // direct urlset fallback
      const direct = $("url > loc")
        .map((_, el) => $(el).text().trim())
        .get()
        .filter((u) => u.includes("/library/"));
      if (direct.length > 0) return unique(direct).sort();
    } catch {
      // continue trying next candidate
    }
  }
  if (nested.length === 0) return [];

  const urls = [];
  for (const sitemapUrl of nested) {
    if (!/page|post|library|resource/i.test(sitemapUrl)) continue;
    try {
      const sm = await fetchText(sitemapUrl);
      const $$ = load(sm, { xmlMode: true });
      const found = $$("url > loc")
        .map((_, el) => $$(el).text().trim())
        .get()
        .filter((u) => u.includes("/library/"));
      urls.push(...found);
    } catch {
      // ignore failing nested sitemap
    }
  }
  return unique(urls).sort();
}

function textBlock($el) {
  return $el.text().replace(/\s+/g, " ").trim();
}

function extractMarkdownFromMain($, root) {
  root.find("script,style,noscript,form,iframe,svg").remove();
  const lines = [];
  root.find("h1,h2,h3,h4,p,li").each((_, el) => {
    const $el = $(el);
    const tag = el.tagName.toLowerCase();
    const text = textBlock($el);
    if (!text) return;
    if (tag === "h1") lines.push(`# ${text}`);
    else if (tag === "h2") lines.push(`## ${text}`);
    else if (tag === "h3") lines.push(`### ${text}`);
    else if (tag === "h4") lines.push(`#### ${text}`);
    else if (tag === "li") lines.push(`- ${text}`);
    else lines.push(text);
  });
  return lines.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

async function importOne(url, dryRun = false) {
  const html = await fetchText(url);
  const $ = load(html);
  const path = new URL(url).pathname.replace(/\/$/, "");
  const slug = path.split("/").pop();
  if (!slug) return { slug: null, written: false, reason: "invalid slug" };

  const main = $("main").first().length
    ? $("main").first()
    : $(".site-main, .elementor-location-main, #content").first();
  if (!main.length) return { slug, written: false, reason: "missing main content" };

  const h1 = main.find("h1").first().text().trim();
  const titleTag = $("title").text().trim().split("|")[0].trim();
  const title = h1 || titleTag || slug.replace(/-/g, " ");
  const body = extractMarkdownFromMain($, main);
  if (!body) return { slug, written: false, reason: "empty extracted content" };

  const md = `---\ntitle: "${escapeFrontmatter(title)}"\ndescription: "Imported from WordPress library page."\n---\n\n${body}\n`;

  const target = join(OUT_DIR, `${slug}.md`);
  if (dryRun) return { slug, written: false, reason: "dry-run", target };
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(target, md, "utf8");
  return { slug, written: true, target };
}

async function main() {
  const { site, limit, dryRun } = parseArgs();
  const urls = await collectLibraryUrls(site);
  const selected = limit > 0 ? urls.slice(0, limit) : urls;
  if (selected.length === 0) {
    console.log("No /library/ URLs found from sitemap.");
    process.exit(0);
  }
  console.log(`Found ${urls.length} library URLs; processing ${selected.length}.`);
  const results = [];
  for (const url of selected) {
    try {
      const result = await importOne(url, dryRun);
      results.push({ url, ...result });
      console.log(result.written ? `Wrote ${result.slug}.md` : `Skip ${result.slug}: ${result.reason}`);
    } catch (err) {
      console.log(`Skip ${url}: ${err.message}`);
    }
  }
  const written = results.filter((r) => r.written).length;
  console.log(`Done. Imported ${written}/${selected.length}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
