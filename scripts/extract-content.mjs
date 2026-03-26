#!/usr/bin/env node
/**
 * One-off helper: read static HTML export (sibling `agdil.com` repo root) and dump plain text
 * from <main> for migration QA. Run from `web/`:
 *   node scripts/extract-content.mjs
 *
 * Outputs to content/extracted/*.txt (not committed as source of truth — prefer curated .md).
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { load } from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = join(__dirname, "..");
const EXPORT_ROOT = join(WEB_ROOT, "..");
const OUT_DIR = join(WEB_ROOT, "content", "extracted");

const PAGES = [
  "about-us/index.html",
  "library/index.html",
  "index.html",
];

function main() {
  if (!existsSync(join(EXPORT_ROOT, "index.html"))) {
    console.error("Expected WordPress export at", EXPORT_ROOT);
    process.exit(1);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  for (const rel of PAGES) {
    const htmlPath = join(EXPORT_ROOT, rel);
    if (!existsSync(htmlPath)) {
      console.warn("Skip missing:", rel);
      continue;
    }
    const html = readFileSync(htmlPath, "utf8");
    const $ = load(html);
    const main =
      $("main").text() ||
      $(".site-main").text() ||
      $(".elementor-location-main").text() ||
      $("#content").text();
    const cleaned = main.replace(/\s+/g, " ").trim().slice(0, 12000);
    const base = rel.replace(/\//g, "_").replace(/\.html$/, "");
    writeFileSync(join(OUT_DIR, `${base}.txt`), cleaned + "\n", "utf8");
    console.log("Wrote", base + ".txt", `(${cleaned.length} chars)`);
  }
}

main();
