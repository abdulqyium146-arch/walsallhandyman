import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'All Services',
  description: 'El The Man covers every handyman service in Walsall and the West Midlands — painting, carpentry, flooring, tiling, plumbing, emergency repairs, and more. View all services.',
  alternates: { canonical: 'https://www.eltheman.co.uk/services' },
}

export default function ServicesIndexPage() {
  const categories = Object.entries(SERVICE_CATEGORIES) as [string, { label: string; description: string }][]

  return (
    <>
      <section className="bg-[#0F1A2E] py-12 md:py-16" aria-label="Services overview">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            All Handyman Services — Walsall &amp; West Midlands
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            El The Man covers every aspect of property maintenance — interior, exterior, maintenance, and emergency work.
            One call, one reliable tradesperson, all the jobs covered.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        {categories.map(([key, cat]) => {
          const catServices = SERVICES.filter((s) => s.category === key)
          if (catServices.length === 0) return null
          return (
            <section key={key} className="mb-12" aria-labelledby={`cat-${key}`}>
              <div className="flex items-baseline gap-3 mb-6 border-b border-[#E8E0D4] pb-3">
                <h2 id={`cat-${key}`} className="text-2xl font-bold font-display text-[#0F1A2E]">
                  {cat.label}
                </h2>
                <span className="text-sm text-[#718096]">{catServices.length} services</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl border border-[#E8E0D4] p-5 hover:border-[#C9933A] hover:shadow-[0_4px_16px_0_rgba(201,147,58,0.10)] transition-all duration-150"
                  >
                    <h3 className="font-bold text-[#0F1A2E] group-hover:text-[#C9933A] transition-colors mb-1 font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#718096] leading-relaxed mb-3">{service.tagline}</p>
                    <span className="text-[#C9933A] text-sm font-semibold group-hover:underline">
                      View service &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </Container>
    </>
  )
}
