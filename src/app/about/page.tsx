import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'About El The Man — Walsall Handyman',
  description: 'About El The Man — Walsall\'s reliable all-in-one handyman service. Local, trusted, and fully covered. Can do it? Yes, we can.',
  alternates: { canonical: 'https://www.eltheman.co.uk/about' },
}

export default function AboutPage() {
  return (
    <>
      <Container className="pt-4">
        <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
      </Container>

      <section className="bg-[#0F1A2E] py-12 md:py-16" aria-label="About header">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            About El The Man
          </h1>
          <p className="text-[#C9933A] text-lg font-medium">&ldquo;Can do it? Yes, we can.&rdquo;</p>
        </Container>
      </section>

      <Container as="article" className="py-12 max-w-3xl">
        <div className="prose-brand space-y-6">
          <p className="text-lg font-medium text-[#0F1A2E]">
            El The Man is a Walsall-based handyman service covering the full West Midlands area — a single, reliable point
            of contact for every property maintenance and general repair job, indoors and outdoors.
          </p>

          <p>
            The idea is simple: most property problems do not need a specialist trade — they need a skilled, experienced pair of hands who will turn up on time, quote honestly, and do the job right.
            Painting a room, hanging a TV, fitting a new floor, replacing a fence panel after a storm, changing a lock between tenancies — these are exactly the kinds of tasks El The Man exists to handle.
          </p>

          <h2 className="text-2xl font-bold font-display text-[#0F1A2E] mt-8 mb-3">What we cover</h2>
          <p>
            El The Man covers {SERVICES.length}+ services across four main categories:
          </p>
          <ul className="space-y-2">
            <li><strong>Interior</strong> — painting, decorating, carpentry, flooring, tiling, plastering, furniture assembly, TV mounting, shelving, curtain fitting, kitchen installation</li>
            <li><strong>Exterior</strong> — fence repairs, decking, pressure washing, garden maintenance, shed repairs, gutter cleaning</li>
            <li><strong>Maintenance</strong> — bathroom repairs, silicone sealing, minor plumbing, minor electrical, window repairs, lock changes</li>
            <li><strong>Emergency &amp; Commercial</strong> — same-day emergency repairs, landlord services, commercial handyman, maintenance contracts</li>
          </ul>

          <h2 className="text-2xl font-bold font-display text-[#0F1A2E] mt-8 mb-3">Why local landlords and homeowners choose us</h2>
          <ul className="space-y-2">
            <li>One contact for multiple trades — no need to manage a different contractor for every job</li>
            <li>Landlord and letting agent specialists — familiar with turnaround timescales and compliance requirements</li>
            <li>Honest, clear pricing before work begins — no surprises on the invoice</li>
            <li>Based in Walsall — short travel times mean lower call-out costs and faster attendance</li>
            <li>[NEEDS CLIENT INPUT: years in trade, qualifications, insurance details, any accreditations or scheme memberships]</li>
          </ul>

          <h2 className="text-2xl font-bold font-display text-[#0F1A2E] mt-8 mb-3">Service area</h2>
          <p>
            El The Man is based in Walsall, West Midlands, and covers the full borough plus surrounding towns including Bloxwich,
            Aldridge, Brownhills, Darlaston, Willenhall, Wednesbury, Pelsall, Streetly, Great Barr, Sutton Coldfield,
            Lichfield, Wolverhampton, West Bromwich, Cannock, Tamworth, and more.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447861203087"
              className="inline-flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-bold py-4 px-6 rounded-xl transition-colors"
            >
              Call 07861 203087
            </a>
            <Button href="/contact" variant="secondary" size="lg">
              Request a quote
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
