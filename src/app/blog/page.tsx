import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import topicalMap from '@/lib/data/topical-map.json'

export const metadata: Metadata = {
  title: 'Guides & Advice — Property Maintenance Walsall',
  description: 'Expert guides on home repairs, property maintenance, and handyman topics from El The Man in Walsall. Practical advice for homeowners, landlords, and property managers.',
  alternates: { canonical: 'https://www.eltheman.co.uk/blog' },
}

interface TopicalEntry {
  pillar: string
  subtopic: string
  search_intent: string
  audience_segment: string
  target_page_slug: string
  parent_slug: string
  status: string
}

const blogEntries = (topicalMap as TopicalEntry[])
  .filter((e) => e.target_page_slug.startsWith('/blog/') && e.status === 'build')
  .filter((e, i, arr) => arr.findIndex((a) => a.target_page_slug === e.target_page_slug) === i)

const intentLabels: Record<string, string> = {
  informational: 'Guide',
  comparison: 'Comparison',
  'professional-advice': 'Advice',
  safety: 'Safety',
  diy: 'DIY',
  seasonal: 'Seasonal',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace(/\bUk\b/, 'UK')
    .replace(/\bUpvc\b/, 'uPVC')
    .replace(/\bVs\b/, 'vs')
    .replace(/\bM2\b/, 'per m²')
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0F1A2E] py-12" aria-label="Blog header">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            Property Maintenance Guides &amp; Advice
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Practical guides on home repairs, property maintenance, and handyman topics — written by El The Man for
            Walsall homeowners, landlords, and property managers.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogEntries.map((entry) => {
            const title = slugToTitle(entry.target_page_slug.replace('/blog/', ''))
            const intent = intentLabels[entry.search_intent] ?? entry.search_intent
            return (
              <article key={entry.target_page_slug} className="bg-white rounded-xl border border-[#E8E0D4] p-6 hover:border-[#C9933A] hover:shadow-[0_4px_16px_0_rgba(201,147,58,0.10)] transition-all duration-150">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-700 mb-3">
                  {intent}
                </span>
                <h2 className="font-bold text-lg font-display text-[#0F1A2E] mb-2">{title}</h2>
                <p className="text-sm text-[#718096] mb-4 capitalize">Topic: {entry.pillar.replace(/-/g, ' ')}</p>
                <Link
                  href={entry.target_page_slug}
                  className="text-[#C9933A] text-sm font-semibold hover:underline"
                >
                  Read guide &rarr;
                </Link>
              </article>
            )
          })}
        </div>
        {blogEntries.length === 0 && (
          <p className="text-[#718096] text-center py-12">Guides coming soon — check back shortly.</p>
        )}
      </Container>
    </>
  )
}
