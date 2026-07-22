import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { LOCATIONS } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Areas Covered — Walsall & West Midlands',
  description: 'El The Man covers Walsall, Bloxwich, Aldridge, Brownhills, Willenhall, Darlaston, Sutton Coldfield, Wolverhampton, and more. Local handyman services across the West Midlands.',
  alternates: { canonical: 'https://www.eltheman.co.uk/locations' },
}

export default function LocationsPage() {
  const primary = LOCATIONS.filter((l) => l.type === 'primary')
  const local = LOCATIONS.filter((l) => l.type === 'local')
  const nearby = LOCATIONS.filter((l) => l.type === 'nearby')

  return (
    <>
      <section className="bg-[#0F1A2E] py-12 md:py-16" aria-label="Areas covered">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            Areas Covered — Walsall &amp; West Midlands
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            El The Man is based in Walsall and covers the full borough, surrounding towns, and nearby areas across the West Midlands and South Staffordshire.
            Local knowledge, fast response times, no long-distance travel charges.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <section className="mb-10" aria-labelledby="primary-heading">
          <h2 id="primary-heading" className="text-xl font-bold font-display text-[#0F1A2E] mb-4 border-b border-[#E8E0D4] pb-2">
            Primary base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {primary.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="local-heading">
          <h2 id="local-heading" className="text-xl font-bold font-display text-[#0F1A2E] mb-4 border-b border-[#E8E0D4] pb-2">
            Walsall borough &amp; local areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {local.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </section>

        <section aria-labelledby="nearby-heading">
          <h2 id="nearby-heading" className="text-xl font-bold font-display text-[#0F1A2E] mb-4 border-b border-[#E8E0D4] pb-2">
            Nearby towns &amp; cities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearby.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}

function LocationCard({ location }: { location: (typeof LOCATIONS)[number] }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group bg-white rounded-xl border border-[#E8E0D4] p-5 hover:border-[#C9933A] hover:shadow-[0_4px_16px_0_rgba(201,147,58,0.10)] transition-all duration-150"
    >
      <h3 className="font-bold text-[#0F1A2E] group-hover:text-[#C9933A] transition-colors font-display mb-1">
        {location.name}
      </h3>
      <p className="text-xs text-[#C9933A] font-medium mb-2">{location.postcodes.join(' · ')}</p>
      <p className="text-sm text-[#718096] leading-relaxed line-clamp-2">{location.description}</p>
      <span className="mt-3 inline-block text-[#C9933A] text-sm font-semibold group-hover:underline">
        View services &rarr;
      </span>
    </Link>
  )
}
