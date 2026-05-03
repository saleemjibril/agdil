#!/usr/bin/env python3
"""
Compare WordPress site URLs against local Next.js app routes.

Usage:
  python3 scripts/compare_wp_pages.py
  python3 scripts/compare_wp_pages.py --site https://agdil.com --include-posts
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


def fetch_text(url: str, timeout: int = 20) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "agdil-route-audit/1.0 (+https://agdil.com)",
            "Accept": "*/*",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


def normalize_url(url: str, base_host: str) -> str | None:
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        return None
    if parsed.netloc and parsed.netloc != base_host:
        return None
    path = parsed.path or "/"
    path = re.sub(r"/{2,}", "/", path)
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return path


def parse_sitemap_xml(xml_text: str) -> tuple[list[str], list[str]]:
    root = ET.fromstring(xml_text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    sitemap_locs = [el.text.strip() for el in root.findall(".//sm:sitemap/sm:loc", ns) if el.text]
    url_locs = [el.text.strip() for el in root.findall(".//sm:url/sm:loc", ns) if el.text]

    # fallback if namespace is missing
    if not sitemap_locs and not url_locs:
        sitemap_locs = [el.text.strip() for el in root.findall(".//sitemap/loc") if el.text]
        url_locs = [el.text.strip() for el in root.findall(".//url/loc") if el.text]
    return sitemap_locs, url_locs


def collect_wp_urls_from_sitemaps(base_url: str) -> set[str]:
    sitemap_candidates = [
        urllib.parse.urljoin(base_url, "/sitemap_index.xml"),
        urllib.parse.urljoin(base_url, "/wp-sitemap.xml"),
    ]
    seen_sitemaps: set[str] = set()
    queue: list[str] = list(sitemap_candidates)
    collected_urls: set[str] = set()
    base_host = urllib.parse.urlparse(base_url).netloc

    while queue:
        sitemap_url = queue.pop(0)
        if sitemap_url in seen_sitemaps:
            continue
        seen_sitemaps.add(sitemap_url)
        try:
            xml_text = fetch_text(sitemap_url)
        except Exception:
            continue
        try:
            nested, urls = parse_sitemap_xml(xml_text)
        except ET.ParseError:
            continue

        for nested_url in nested:
            if nested_url not in seen_sitemaps:
                queue.append(nested_url)
        for u in urls:
            normalized = normalize_url(u, base_host)
            if normalized:
                collected_urls.add(normalized)
    return collected_urls


def collect_wp_urls_via_rest(base_url: str, include_posts: bool) -> set[str]:
    base_host = urllib.parse.urlparse(base_url).netloc
    collected: set[str] = set()
    endpoints = ["pages"]
    if include_posts:
        endpoints.append("posts")

    for endpoint in endpoints:
        page_num = 1
        while True:
            rest_url = urllib.parse.urljoin(
                base_url, f"/wp-json/wp/v2/{endpoint}?per_page=100&page={page_num}&_fields=link"
            )
            try:
                payload = fetch_text(rest_url)
            except urllib.error.HTTPError as exc:
                if exc.code == 400:
                    break
                break
            except Exception:
                break

            try:
                items = json.loads(payload)
            except json.JSONDecodeError:
                break
            if not isinstance(items, list) or not items:
                break

            for item in items:
                link = item.get("link")
                if not isinstance(link, str):
                    continue
                normalized = normalize_url(link, base_host)
                if normalized:
                    collected.add(normalized)
            page_num += 1
    return collected


def next_route_from_file(path: Path, app_dir: Path) -> str:
    rel = path.relative_to(app_dir)
    route = "/" + "/".join(rel.parts[:-1])
    route = route.replace("/index", "")
    if route.endswith("/page"):
        route = route[:-5]
    route = re.sub(r"/\([^)]*\)", "", route)  # strip route groups
    route = re.sub(r"//+", "/", route)
    return route if route else "/"


def route_to_regex(route: str) -> re.Pattern[str]:
    parts = [p for p in route.strip("/").split("/") if p]
    regex_parts = []
    for part in parts:
        if part.startswith("[...") and part.endswith("]"):
            regex_parts.append(".+")
        elif part.startswith("[[...") and part.endswith("]]"):
            regex_parts.append(".*")
        elif part.startswith("[") and part.endswith("]"):
            regex_parts.append("[^/]+")
        else:
            regex_parts.append(re.escape(part))
    if not regex_parts:
        return re.compile(r"^/$")
    return re.compile(r"^/" + "/".join(regex_parts) + r"$")


@dataclass(frozen=True)
class LocalRoute:
    route: str
    pattern: re.Pattern[str]


def collect_local_routes(repo_root: Path) -> list[LocalRoute]:
    app_dir = repo_root / "app"
    page_files = sorted(app_dir.rglob("page.tsx"))
    routes: list[LocalRoute] = []
    for file_path in page_files:
        route = next_route_from_file(file_path, app_dir)
        routes.append(LocalRoute(route=route, pattern=route_to_regex(route)))
    return routes


def match_local_route(path: str, local_routes: Iterable[LocalRoute]) -> bool:
    return any(r.pattern.match(path) for r in local_routes)


NOISE_PREFIXES = (
    "/wp-json",
    "/wp-admin",
    "/feed",
    "/tag/",
    "/author/",
    "/jet-popup/",
    "/seller-request/",
)

NOISE_CONTAINS = (
    "__trashed",
)

MIGRATION_CANDIDATE_PREFIXES = (
    "/library/",
    "/library-categories/",
    "/course-category/",
    "/courses/",
    "/grants-category/",
)


def is_noise_path(path: str) -> bool:
    if path.startswith(NOISE_PREFIXES):
        return True
    if any(token in path for token in NOISE_CONTAINS):
        return True
    return False


def is_migration_candidate(path: str) -> bool:
    if path.startswith(MIGRATION_CANDIDATE_PREFIXES):
        return True
    # single-level content pages (e.g. /contact-us)
    if path.count("/") == 1 and path not in {"/"}:
        return True
    return False


def main() -> int:
    parser = argparse.ArgumentParser(description="Compare WordPress subpages to local Next.js routes")
    parser.add_argument("--site", default="https://agdil.com", help="WordPress site base URL")
    parser.add_argument(
        "--include-posts",
        action="store_true",
        help="Include WordPress posts from REST API in comparison",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Print JSON output instead of plain text",
    )
    parser.add_argument(
        "--keep-noise",
        action="store_true",
        help="Keep known WordPress/system noise paths in comparison",
    )
    args = parser.parse_args()

    site = args.site.rstrip("/")
    repo_root = Path(__file__).resolve().parents[1]
    local_routes = collect_local_routes(repo_root)

    wp_paths = collect_wp_urls_from_sitemaps(site)
    if not wp_paths:
        wp_paths = collect_wp_urls_via_rest(site, args.include_posts)
    else:
        # Add REST-discovered pages too (helps when sitemap excludes some content)
        wp_paths |= collect_wp_urls_via_rest(site, args.include_posts)

    if not args.keep_noise:
        wp_paths = {p for p in wp_paths if not is_noise_path(p)}
    wp_paths = {p for p in wp_paths if "?" not in p}

    missing_locally = sorted(p for p in wp_paths if not match_local_route(p, local_routes))
    covered = sorted(p for p in wp_paths if match_local_route(p, local_routes))
    migration_candidates = sorted(p for p in missing_locally if is_migration_candidate(p))

    local_concrete = sorted({r.route for r in local_routes if "[" not in r.route})
    wp_set = set(wp_paths)
    local_only = sorted(r for r in local_concrete if r not in wp_set)

    output = {
        "site": site,
        "wordpress_paths_found": len(wp_paths),
        "local_routes_found": len(local_routes),
        "covered_count": len(covered),
        "missing_locally_count": len(missing_locally),
        "migration_candidate_count": len(migration_candidates),
        "local_only_count": len(local_only),
        "missing_locally": missing_locally,
        "migration_candidates": migration_candidates,
        "local_only": local_only,
    }

    if args.json:
        print(json.dumps(output, indent=2))
        return 0

    print(f"Site: {site}")
    print(f"WordPress URLs found: {len(wp_paths)}")
    print(f"Local routes found: {len(local_routes)}")
    print(f"Covered by local routes: {len(covered)}")
    print(f"Missing locally: {len(missing_locally)}")
    print(f"Migration candidates (clean): {len(migration_candidates)}")
    print(f"Local only (not found on WP crawl): {len(local_only)}")
    print("\n=== Missing locally ===")
    for p in missing_locally:
        print(p)
    print("\n=== Migration candidates (clean) ===")
    for p in migration_candidates:
        print(p)
    print("\n=== Local only ===")
    for p in local_only:
        print(p)
    return 0


if __name__ == "__main__":
    sys.exit(main())
