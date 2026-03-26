# AGDIL — Next.js app

Rebuild of [agdil.com](https://agdil.com) from the static WordPress export in the parent folder. See [ROUTES.md](./ROUTES.md) and [../SYSTEM_UNDERSTANDING.md](../SYSTEM_UNDERSTANDING.md).

## Commands

```bash
npm install
npm run dev
npm run build
```

## Commerce (Phase 2)

- Catalogue: `data/catalog.json` and `GET /api/catalog`.
- **Headless WooCommerce:** replace `lib/commerce/catalog.ts` with fetches to `WOO_BASE_URL` + consumer key/secret (server-only).
- **Replatform:** Medusa/Shopify — keep the same UI routes; swap data loaders.

## Images

**`public/uploads/`** is a mirror of the WordPress export’s **`wp-content/uploads`** (same year/month folders and filenames). Refresh after pulling new media from WordPress:

```bash
rsync -a ../wp-content/uploads/ public/uploads/
```

- Site logo / icons: see [`lib/assets.ts`](./lib/assets.ts) (`/uploads/2024/10/...`).
- Product photos: [`data/catalog.json`](./data/catalog.json) `image` + `thumb` paths under `/uploads/2025/08/...` (from the original product pages).

## Content

- Markdown under `content/` with frontmatter (`title`, `description`, optional `date`).
- Optional HTML text extraction: `node scripts/extract-content.mjs`.

## Forms

CAC and credit forms POST to `/api/forms/*`. Connect email (e.g. Resend) or a database in the route handlers.
