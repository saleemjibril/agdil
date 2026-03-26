# Route inventory (AGDIL Next.js)

Canonical host: `https://agdil.com` (`metadataBase` in `app/layout.tsx`).

## Redirects

| From | To |
|------|-----|
| `/articles/:slug` | `/:slug` (permanent) |

## Static marketing / utility

| Path | Source content |
|------|----------------|
| `/` | `app/page.tsx` + `content/articles/*` titles |
| `/about-us` | `content/pages/about-us.md` |
| `/library` | `content/pages/library.md` |
| `/blog` | `content/pages/blog.md` |
| `/market-intellingence` | `content/pages/market-intelligence.md` (URL keeps legacy typo) |
| `/become-a-part-of-us` | `content/pages/become-a-part-of-us.md` |
| `/join-us` | `content/pages/join-us.md` |
| `/get-business-funds` | `content/pages/get-business-funds.md` |
| `/start-an-agrifood-business` | `content/pages/start-an-agrifood-business.md` |
| `/privacy-policy` | `content/pages/privacy-policy.md` |
| `/terms-of-use` | `content/pages/terms-of-use.md` |
| `/cart` | `content/pages/cart.md` |
| `/checkout` | `content/pages/checkout.md` |
| `/dashboard` | `content/pages/dashboard.md` |
| `/cac-registration-form` | `content/pages/cac-registration-form.md` + `CacRegistrationForm` |
| `/credit-worthiness-assessment-form` | `content/pages/credit-worthiness-assessment-form.md` + `CreditAssessmentForm` |

## Listings

| Path | Notes |
|------|--------|
| `/event` | Lists `content/events/*.md` |
| `/funding-opportunities` | Intro + links to `/grants/*` |
| `/category/article` | Lists all articles |
| `/store-listing` | Products + stores from `data/catalog.json` |

## Dynamic

| Pattern | Content |
|---------|---------|
| `/:slug` | `content/articles/{slug}.md` **or** `content/team/{slug}.md` |
| `/event/:slug` | `content/events/{slug}.md` |
| `/grants/:slug` | `content/grants/{slug}.md` |
| `/courses/:slug` | `content/courses/{slug}.md` |
| `/product/:slug` | `data/catalog.json` → Phase 2: Woo REST |
| `/store/:slug` | `data/catalog.json` → Phase 2: Dokan/Woo |

## API (Route Handlers)

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/forms/cac` | CAC registration (Zod + log; add Resend/CRM) |
| POST | `/api/forms/credit-assessment` | Credit assessment |
| GET | `/api/catalog` | JSON catalogue (swap for Woo) |

## Excluded from migration

- Any path under folders named with `{{` (crawler noise in the static export).
- `*/feed/*`, `wp-json` crawl artifacts.

## Extract script

From `web/`: `node scripts/extract-content.mjs` — writes `content/extracted/*.txt` from sibling export HTML.
