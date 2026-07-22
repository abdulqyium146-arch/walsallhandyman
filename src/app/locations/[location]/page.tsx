import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SchemaScript from '@/components/schema/SchemaScript'
import { LOCATIONS, getLocationBySlug } from '@/lib/locations'
import { SERVICES } from '@/lib/services'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return {
    title: `Handyman in ${location.name}`,
    description: `Professional handyman services in ${location.name}, ${location.county}. El The Man covers painting, carpentry, flooring, tiling, plumbing, fencing, emergency repairs and more. Call 07861 203087.`,
    keywords: [
      `handyman ${location.name}`,
      `property maintenance ${location.name}`,
      `building repairs ${location.name}`,
      `${location.postcodes.join(' ')} handyman`,
    ],
    alternates: { canonical: `https://www.eltheman.co.uk/locations/${slug}` },
    openGraph: {
      title: `Handyman in ${location.name} — El The Man`,
      description: `Reliable handyman services in ${location.name}, ${location.county}. Call 07861 203087.`,
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const schema = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/locations' },
      { name: location.name, url: `/locations/${slug}` },
    ]),
  ]

  const featuredServices = SERVICES.filter((s) =>
    ['painting-decorating', 'carpentry', 'flooring', 'tiling', 'fence-repairs', 'pressure-washing', 'emergency-repairs', 'landlord-services'].includes(s.slug)
  )

  return (
    <>
      <SchemaScript schema={schema} />

      <Container className="pt-4">
        <Breadcrumb items={[
          { name: 'Areas', href: '/locations' },
          { name: location.name, href: `/locations/${slug}` },
        ]} />
      </Container>

      {/* Hero */}
      <section className="bg-[#0F1A2E] py-12 md:py-16" aria-label={`Handyman services in ${location.name}`}>
        <Container>
          <p className="text-[#C9933A] text-sm font-semibold uppercase tracking-wider mb-2">
            {location.county} · {location.postcodes.join(', ')}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display mb-4 leading-tight">
            Handyman Services in {location.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            {location.description}
          </p>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed mb-8">
            El The Man provides professional property maintenance and general handyman services across {location.name} — covering
            interior works, exterior repairs, maintenance tasks, and emergency call-outs.
            {location.distanceFromBase > 0
              ? ` Based in Walsall, just ${location.distanceFromBase} miles away.`
              : ' Based right here in Walsall.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447861203087"
              className="inline-flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-bold py-4 px-6 rounded-xl transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call 07861 203087
            </a>
            <Button href="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
              Free quote
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Local context */}
            <section aria-labelledby="local-heading">
              <h2 id="local-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
                Property maintenance in {location.name}
              </h2>
              <div className="prose-brand">
                <p>
                  {location.name} has a distinctive property mix — {location.propertyTypes.join(', ').toLowerCase()} — each with its own maintenance demands.
                  Common repair needs in the area include {location.commonRepairNeeds.join(', ').toLowerCase()}.
                </p>
                <p className="mt-3">
                  Seasonally, {location.name} properties face {location.seasonalIssues.join('; ').toLowerCase()}.
                  El The Man provides responsive, local maintenance to address these issues before they become costly problems.
                </p>
              </div>

              {location.neighbourhoods.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-[#0F1A2E] mb-3">Neighbourhoods covered in {location.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.neighbourhoods.map((n) => (
                      <span key={n} className="bg-[#F7EDD8] text-[#0F1A2E] text-sm px-3 py-1 rounded-full border border-[#C9933A]/20">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Services available */}
            <section aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-6">
                Handyman services available in {location.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/${slug}`}
                    className="group bg-white rounded-lg border border-[#E8E0D4] p-4 hover:border-[#C9933A] hover:shadow-[0_4px_16px_0_rgba(201,147,58,0.10)] transition-all duration-150 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold text-[#0F1A2E] group-hover:text-[#C9933A] transition-colors text-sm">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#718096]">{service.shortTitle} in {location.name}</p>
                    </div>
                    <span className="text-[#C9933A] text-lg flex-shrink-0" aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#0F1A2E] rounded-2xl p-6 text-white sticky top-20">
              <h3 className="font-bold font-display text-lg mb-2 text-[#C9933A]">
                Handyman in {location.name}
              </h3>
              <p className="text-white/70 text-sm mb-5">
                Call El The Man for a free quote on any property maintenance job in {location.name} or the surrounding area.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+447861203087" className="flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  07861 203087
                </a>
                <a href="https://wa.me/447861203087" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  WhatsApp
                </a>
                <Button href="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10 text-sm" fullWidth>
                  Send a quote request
                </Button>
              </div>
            </div>

            {/* Popular services in this location */}
            <div className="bg-white rounded-xl border border-[#E8E0D4] p-5">
              <h3 className="font-semibold text-[#0F1A2E] mb-4 text-sm uppercase tracking-wider">
                Most requested in {location.name}
              </h3>
              <ul className="space-y-2">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/${slug}`}
                      className="text-sm text-[#4A5568] hover:text-[#C9933A] transition-colors flex gap-2"
                    >
                      <span className="text-[#C9933A]" aria-hidden="true">&rarr;</span>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {location.localLandmarks.length > 0 && (
              <div className="bg-[#F7EDD8] rounded-xl border border-[#C9933A]/20 p-5">
                <h3 className="font-semibold text-[#0F1A2E] mb-3 text-sm">Local landmarks</h3>
                <ul className="space-y-1">
                  {location.localLandmarks.map((lm) => (
                    <li key={lm} className="text-xs text-[#4A5568]">{lm}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </>
  )
}
