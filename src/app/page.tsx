import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'
import { getServiceHeroImage } from '@/lib/service-images'

export const metadata: Metadata = {
  title: 'El The Man — Walsall Handyman Services | Interior, Exterior, Maintenance & Emergency',
  description: "Walsall's reliable all-in-one handyman. Painting, carpentry, flooring, tiling, plumbing, fencing, decking, and emergency repairs across Walsall and the West Midlands. Call 07861 203087.",
  alternates: { canonical: 'https://www.eltheman.co.uk' },
}

const CATEGORY_KEYS = ['interior', 'exterior', 'maintenance', 'emergency', 'commercial'] as const

const TRUST_SIGNALS = [
  { label: 'Walsall-based', detail: 'Local tradesperson, West Midlands' },
  { label: 'Same-day available', detail: 'For emergency call-outs' },
  { label: 'All trades covered', detail: 'Interior, exterior, maintenance' },
  { label: 'Landlord friendly', detail: 'End-of-tenancy specialists' },
]

const FEATURED_SLUGS = [
  'painting-decorating', 'carpentry', 'flooring', 'tiling',
  'pressure-washing', 'fence-repairs', 'furniture-assembly',
  'tv-mounting', 'emergency-repairs', 'landlord-services',
  'silicone-sealing', 'gutter-cleaning',
]

export default function HomePage() {
  const featuredServices = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug))
  const localAreas = LOCATIONS.filter((l) => l.type !== 'nearby').slice(0, 8)

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0F1A2E] relative overflow-hidden" aria-label="Hero">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9933A]" aria-hidden="true" />
        <Container className="py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#C9933A] font-semibold uppercase tracking-wider text-sm mb-4">
              Walsall &amp; West Midlands
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-6">
              One call.<br />
              <span className="text-[#C9933A]">We do it all.</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
              El The Man is your reliable, all-in-one handyman in Walsall and the West Midlands — covering interior,
              exterior, maintenance, and emergency repairs. Can do it? Yes, we can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447861203087"
                className="inline-flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-[0_4px_24px_0_rgba(201,147,58,0.3)]"
              >
                <PhoneIcon />
                Call 07861 203087
              </a>
              <Button href="/contact" variant="ghost" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                Free Quote
              </Button>
            </div>
          </div>
        </Container>

        {/* Trust bar */}
        <div className="bg-[#1B2B4B] border-t border-white/10">
          <Container className="py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.label} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9933A] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{signal.label}</p>
                    <p className="text-white/50 text-xs">{signal.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── Service Categories ── */}
      <section className="py-16" aria-labelledby="categories-heading">
        <Container>
          <h2 id="categories-heading" className="text-3xl font-bold font-display text-[#0F1A2E] mb-2">
            What can El The Man do for you?
          </h2>
          <p className="text-[#4A5568] mb-10 max-w-2xl">
            Every service covered — interior finishing, exterior maintenance, ongoing repairs, and emergency call-outs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORY_KEYS.slice(0, 4).map((key) => {
              const cat = SERVICE_CATEGORIES[key]
              const servicesInCategory = SERVICES.filter((s) => s.category === key)
              return (
                <div
                  key={key}
                  className="group bg-white rounded-2xl border border-[#E8E0D4] p-6 hover:border-[#C9933A] hover:shadow-[0_8px_32px_0_rgba(201,147,58,0.12)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F7EDD8] flex items-center justify-center mb-4 text-[#C9933A]">
                    <CategoryIcon category={key} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1A2E] font-display mb-2 group-hover:text-[#C9933A] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-[#718096] mb-4 leading-relaxed">{cat.description}</p>
                  <ul className="space-y-1 mb-4">
                    {servicesInCategory.slice(0, 3).map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="text-sm text-[#4A5568] hover:text-[#C9933A] transition-colors">
                          &rarr; {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {servicesInCategory.length > 3 && (
                    <Link href="/services" className="text-xs text-[#C9933A] font-medium hover:underline">
                      +{servicesInCategory.length - 3} more services
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Featured Services ── */}
      <section className="py-16 bg-white" aria-labelledby="services-heading">
        <Container>
          <h2 id="services-heading" className="text-3xl font-bold font-display text-[#0F1A2E] mb-2">
            Popular services
          </h2>
          <p className="text-[#4A5568] mb-10">
            From a single odd job to a full property refurbishment — most-requested services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const heroImg = getServiceHeroImage(service.slug)
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#F8F4EE] rounded-xl border border-[#E8E0D4] hover:border-[#C9933A] hover:bg-white transition-all duration-200 hover:shadow-[0_4px_16px_0_rgba(201,147,58,0.10)] overflow-hidden flex flex-col"
                >
                  {heroImg ? (
                    <div className="relative h-44 w-full flex-shrink-0">
                      <Image
                        src={heroImg.src}
                        alt={heroImg.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-44 w-full bg-[#1B2B4B] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded mb-3 w-fit ${categoryBadge(service.category)}`}>
                      {service.category}
                    </span>
                    <h3 className="font-bold text-lg text-[#0F1A2E] font-display mb-2 group-hover:text-[#C9933A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#718096] leading-relaxed line-clamp-2 flex-1">{service.tagline}</p>
                    <span className="mt-4 inline-block text-[#C9933A] text-sm font-semibold group-hover:underline">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Button href="/services" variant="secondary" size="lg">View all services</Button>
          </div>
        </Container>
      </section>

      {/* ── Why El The Man ── */}
      <section className="py-16 bg-[#1B2B4B] text-white" aria-labelledby="why-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold font-display mb-4">
                Why Walsall trusts <span className="text-[#C9933A]">El The Man</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                A Walsall-based handyman covering the full range of property maintenance — from a sticking door to a full
                end-of-tenancy redecoration. One reliable contact. No job too small.
              </p>
              <ul className="space-y-3">
                {[
                  'All trades covered — no need to manage multiple contractors',
                  'Landlord and letting agent specialists — turnaround work done to timeline',
                  'Same-day availability for genuine emergencies',
                  'Covering Walsall, Bloxwich, Aldridge, Willenhall, and the West Midlands',
                  '[NEEDS CLIENT INPUT: fully insured — public liability details]',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-white/80 text-sm">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/about" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                  About El The Man
                </Button>
              </div>
            </div>
            <div className="bg-[#0F1A2E] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold font-display mb-6 text-[#C9933A]">Get a free quote</h3>
              <p className="text-white/70 text-sm mb-6">Call or message — we aim to respond the same day.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+447861203087" className="flex items-center gap-3 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-semibold py-4 px-6 rounded-xl transition-colors">
                  <PhoneIcon />07861 203087
                </a>
                <a href="https://wa.me/447861203087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-700 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
                  <WhatsAppIcon />WhatsApp us
                </a>
                <Button href="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10" fullWidth>
                  Send a message / quote request
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Areas Covered ── */}
      <section className="py-16" aria-labelledby="areas-heading">
        <Container>
          <h2 id="areas-heading" className="text-3xl font-bold font-display text-[#0F1A2E] mb-2">
            Areas covered across Walsall &amp; the West Midlands
          </h2>
          <p className="text-[#4A5568] mb-8">
            Local knowledge, quick response times, no long-distance call-out charges.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {localAreas.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-lg border border-[#E8E0D4] px-4 py-3 hover:border-[#C9933A] hover:bg-[#F7EDD8] transition-all duration-150 text-center"
              >
                <p className="font-semibold text-[#0F1A2E] group-hover:text-[#C9933A] text-sm transition-colors">
                  {location.name}
                </p>
                <p className="text-xs text-[#718096]">{location.postcodes.join(', ')}</p>
              </Link>
            ))}
          </div>
          <Link href="/locations" className="text-[#C9933A] font-semibold hover:underline text-sm">
            View all areas covered &rarr;
          </Link>
        </Container>
      </section>
    </>
  )
}

function categoryBadge(category: string) {
  const map: Record<string, string> = {
    emergency: 'bg-red-100 text-red-700',
    exterior: 'bg-green-100 text-green-700',
    commercial: 'bg-blue-100 text-blue-700',
    maintenance: 'bg-purple-100 text-purple-700',
    interior: 'bg-amber-100 text-amber-700',
  }
  return map[category] ?? 'bg-gray-100 text-gray-700'
}

function CategoryIcon({ category }: { category: string }) {
  if (category === 'interior') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  if (category === 'exterior') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 2v20M2 12h20"/></svg>
  if (category === 'maintenance') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  if (category === 'emergency') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
}

function PhoneIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}

function WhatsAppIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
}

function CheckIcon() {
  return <svg className="flex-shrink-0 text-[#C9933A] mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
}
