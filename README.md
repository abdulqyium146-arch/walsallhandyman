# El The Man — Walsall Handyman Services

Semantic SEO website for **El The Man**, a Walsall-based handyman service covering the West Midlands.
Built with Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

---

## Quick start

```bash
npm install
npm run dev          # → http://localhost:3000
npm run build        # production static export
npm run lint:content # content quality checks (run before building)
```

---

## How to add a new service

1. **Add to `src/lib/services.ts`** — copy an existing `ServiceData` object and populate all required fields.

   Required: `slug`, `title`, `shortTitle`, `category`, `tagline`, `definition` (40+ words), `whoNeedsIt`, `signsYouNeedIt` (3+), `process` (3+ steps), `toolsAndMaterials`, `safetyConsiderations`, `costFactors`, `costRangeNote`, `lifespan`, `commonMistakes`, `diyVsPro`, `faqs` (4+), `relatedServiceSlugs` (2+), `schemaServiceType`, `synonyms`.

2. **Add topical-map entries** — add at least `transactional`, `informational`, and `commercial` intent entries in `src/lib/data/topical-map.json`.

3. **Add entity graph entries** — add a node and its edges in `src/lib/data/entities.json`.

4. **Run lint** — `npm run lint:content` — fix any errors.

5. **Done.** `/services/{slug}` and all `/services/{slug}/{location}` pages generate automatically.

---

## How to add a new location

1. **Add to `src/lib/data/locations.json`** — add a new object with:
   `slug`, `name`, `county`, `postcodes[]`, `type` (`primary`/`local`/`nearby`), `description` (unique local text), `localLandmarks[]`, `propertyTypes[]`, `commonRepairNeeds[]`, `seasonalIssues[]`, `councilArea`, `distanceFromBase`, `neighbourhoods[]`.

2. **Done.** `/locations/{slug}` and all `/services/{service}/{slug}` pages generate automatically.

---

## Route architecture

| Route | Source |
|-------|--------|
| `/` | `src/app/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/[service]` | `src/app/services/[service]/page.tsx` + `generateStaticParams` from `SERVICES` |
| `/services/[service]/[location]` | `src/app/services/[service]/[location]/page.tsx` + all combos |
| `/locations` | `src/app/locations/page.tsx` |
| `/locations/[location]` | `src/app/locations/[location]/page.tsx` + `generateStaticParams` from `LOCATIONS` |
| `/blog` | `src/app/blog/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

---

## Data files

| File | Purpose |
|------|---------|
| `src/lib/services.ts` | Service definitions — content model for every service page |
| `src/lib/data/topical-map.json` | Full topical map — drives content strategy + sitemap |
| `src/lib/data/entities.json` | Entity graph — nodes/edges for schema + internal links |
| `src/lib/data/locations.json` | Location profiles — drives location pages + service×location matrix |

---

## Schema generation

`src/lib/schema.ts` exports:
- `buildLocalBusinessSchema()` → injected in root `layout.tsx`
- `buildServiceSchema(service, locationName)` → injected on every service page
- `buildFAQSchema(faqs)` → injected on every service page
- `buildBreadcrumbSchema(crumbs)` → injected via `<Breadcrumb>`

---

## Content quality lint

`scripts/lint-content.ts` enforces the Section 12 quality bar:
- Definition is 40+ words
- All 14 content blocks present
- FAQs have 4+ entries
- Related services and internal links populated
- `[NEEDS CLIENT INPUT]` placeholders flagged

Run: `npm run lint:content`

---

## Brand / design tokens (Tailwind v4 `@theme`)

| Token | Hex |
|-------|-----|
| `brand-navy` | `#1B2B4B` |
| `brand-navy-dark` | `#0F1A2E` |
| `brand-gold` | `#C9933A` |
| `brand-gold-light` | `#E8B96A` |
| `brand-cream` | `#F8F4EE` |
| `brand-steel` | `#4A5568` |

Fonts: **Playfair Display** (headings) · **DM Sans** (body) — self-hosted via `next/font/google`.

---

## [NEEDS CLIENT INPUT] — items to resolve before launch

Search the codebase for `[NEEDS CLIENT INPUT` to find all placeholder instances. Key items:

- Business address / postcode
- Opening hours and emergency availability
- Public liability insurance details
- VAT number (if applicable)
- Years in trade / founding date
- Trade accreditations / scheme memberships
- Payment methods accepted
- Pricing ranges per service (confirm before publishing cost sections)
- Paint supply policy (supply-and-fit vs. labour-only)
- Packaging disposal policy (furniture assembly)
- Before/after photo documentation service for landlords
- Review and testimonial content
