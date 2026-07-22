import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SchemaScript from '@/components/schema/SchemaScript'
import { ServiceData, getRelatedServices } from '@/lib/services'
import { LocationData } from '@/lib/locations'
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema'

interface ServiceTemplateProps {
  service: ServiceData
  location?: LocationData
  breadcrumbs: { name: string; href: string }[]
}

export default function ServiceTemplate({ service, location, breadcrumbs }: ServiceTemplateProps) {
  const locationName = location?.name ?? 'Walsall'
  const relatedServices = getRelatedServices(service.slug)
  const schemas = [
    buildServiceSchema(service, locationName),
    buildFAQSchema(service.faqs),
  ]

  return (
    <>
      <SchemaScript schema={schemas} />

      <Container className="pt-4">
        <Breadcrumb items={breadcrumbs} />
      </Container>

      {/* ── 1. Hero / Direct-answer definition ── */}
      <section className="bg-[#0F1A2E] py-12 md:py-16" aria-label="Service overview">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9933A]" aria-hidden="true" />
        <Container>
          <div className="max-w-3xl">
            {location && (
              <p className="text-[#C9933A] text-sm font-semibold uppercase tracking-wider mb-2">
                {location.name}, {location.county}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display mb-4 leading-tight">
              {service.title}{location ? ` in ${location.name}` : ' in Walsall'}
            </h1>
            <p className="text-lg text-[#C9933A] font-medium mb-4">{service.tagline}</p>
            {/* Direct answer — first 40-60 words, above the fold */}
            <p className="text-white/80 text-base leading-relaxed mb-6 max-w-2xl">
              {service.definition}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447861203087"
                className="inline-flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-bold py-4 px-6 rounded-xl transition-colors"
              >
                <PhoneIcon />
                Call 07861 203087
              </a>
              <Button href="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                Get a free quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container as="article" className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ── Main content ── */}
        <div className="lg:col-span-2 space-y-12">

          {/* ── 2. Who this is for / when you need it ── */}
          <section aria-labelledby="who-needs-it">
            <h2 id="who-needs-it" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              Who needs {service.shortTitle.toLowerCase()} services{location ? ` in ${location.name}` : ''}?
            </h2>
            <p className="text-[#4A5568] leading-relaxed">{service.whoNeedsIt}</p>
            {location && (
              <p className="mt-3 text-[#4A5568] leading-relaxed">
                In {location.name}, common property types include {location.propertyTypes.join(', ').toLowerCase()}.
                Local demand for {service.shortTitle.toLowerCase()} services is driven by{' '}
                {location.commonRepairNeeds.slice(0, 2).join(' and ').toLowerCase()}.
              </p>
            )}
          </section>

          {/* ── 3. Signs you need this service ── */}
          <section aria-labelledby="signs-heading">
            <h2 id="signs-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              Signs you need {service.shortTitle.toLowerCase()} work done
            </h2>
            <ul className="space-y-3">
              {service.signsYouNeedIt.map((sign, i) => (
                <li key={i} className="flex gap-3 text-[#4A5568]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F7EDD8] flex items-center justify-center text-[#C9933A] text-xs font-bold mt-0.5" aria-hidden="true">
                    {i + 1}
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </section>

          {/* ── 4. Process — step by step ── */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-6">
              How El The Man carries out {service.shortTitle.toLowerCase()} work
            </h2>
            <ol className="space-y-4">
              {service.process.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B2B4B] flex items-center justify-center text-[#C9933A] font-bold text-sm" aria-hidden="true">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F1A2E] mb-1">{step.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── 5. Tools & materials ── */}
          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              Tools &amp; materials used
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-[#E8E0D4] p-5">
                <h3 className="font-semibold text-[#0F1A2E] mb-3 text-sm uppercase tracking-wider">Tools</h3>
                <ul className="space-y-1">
                  {service.toolsAndMaterials.tools.map((tool) => (
                    <li key={tool} className="text-sm text-[#4A5568] flex gap-2">
                      <span className="text-[#C9933A]" aria-hidden="true">—</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-[#E8E0D4] p-5">
                <h3 className="font-semibold text-[#0F1A2E] mb-3 text-sm uppercase tracking-wider">Materials</h3>
                <ul className="space-y-1">
                  {service.toolsAndMaterials.materials.map((mat) => (
                    <li key={mat} className="text-sm text-[#4A5568] flex gap-2">
                      <span className="text-[#C9933A]" aria-hidden="true">—</span>
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── 6. Safety considerations ── */}
          <section aria-labelledby="safety-heading">
            <h2 id="safety-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              Safety considerations
            </h2>
            <ul className="space-y-3">
              {service.safetyConsiderations.map((point, i) => (
                <li key={i} className="flex gap-3 text-[#4A5568] text-sm">
                  <span className="flex-shrink-0 text-amber-500 mt-0.5" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* ── 7. Cost factors ── */}
          <section aria-labelledby="cost-heading">
            <h2 id="cost-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              What affects the cost of {service.shortTitle.toLowerCase()} in {locationName}?
            </h2>
            <p className="text-[#4A5568] text-sm mb-4">{service.costRangeNote}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse" role="table">
                <caption className="sr-only">Cost factors for {service.title}</caption>
                <thead>
                  <tr className="bg-[#0F1A2E] text-white">
                    <th scope="col" className="text-left py-3 px-4 font-semibold rounded-tl-lg">Factor</th>
                    <th scope="col" className="text-left py-3 px-4 font-semibold rounded-tr-lg">How it affects price</th>
                  </tr>
                </thead>
                <tbody>
                  {service.costFactors.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F4EE]'}>
                      <td className="py-3 px-4 font-medium text-[#0F1A2E] border-b border-[#E8E0D4]">{row.factor}</td>
                      <td className="py-3 px-4 text-[#4A5568] border-b border-[#E8E0D4]">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 8. Lifespan / how often needed ── */}
          <section aria-labelledby="lifespan-heading">
            <h2 id="lifespan-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-3">
              How long does {service.shortTitle.toLowerCase()} last?
            </h2>
            <p className="text-[#4A5568] leading-relaxed">{service.lifespan}</p>
          </section>

          {/* ── 9. Common mistakes / DIY vs pro ── */}
          <section aria-labelledby="mistakes-heading">
            <h2 id="mistakes-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-4">
              Common mistakes to avoid
            </h2>
            <ul className="space-y-2 mb-6">
              {service.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex gap-3 text-[#4A5568] text-sm">
                  <span className="flex-shrink-0 text-red-400 mt-0.5" aria-hidden="true">✗</span>
                  {mistake}
                </li>
              ))}
            </ul>

            {/* ── 10. DIY vs Professional ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F7EDD8] rounded-xl p-5 border border-[#C9933A]/30">
                <h3 className="font-bold text-[#0F1A2E] mb-2">DIY approach</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{service.diyVsPro.diy}</p>
              </div>
              <div className="bg-[#1B2B4B] rounded-xl p-5 text-white">
                <h3 className="font-bold text-[#C9933A] mb-2">Professional approach</h3>
                <p className="text-sm text-white/70 leading-relaxed">{service.diyVsPro.pro}</p>
              </div>
            </div>
          </section>

          {/* ── 11. FAQs ── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold font-display text-[#0F1A2E] mb-6">
              Frequently asked questions about {service.shortTitle.toLowerCase()} in {locationName}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-[#E8E0D4] open:border-[#C9933A] transition-colors">
                  <summary className="flex justify-between items-center py-4 px-5 cursor-pointer font-semibold text-[#0F1A2E] text-sm list-none">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 ml-4 text-[#C9933A] group-open:rotate-45 transition-transform duration-150 text-xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-[#4A5568] leading-relaxed border-t border-[#E8E0D4]">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* ── Sidebar ── */}
        <aside className="space-y-6" aria-label="Quick links and contact">
          {/* Sticky CTA card */}
          <div className="bg-[#0F1A2E] rounded-2xl p-6 text-white sticky top-20">
            <h3 className="font-bold font-display text-lg mb-2 text-[#C9933A]">
              Need {service.shortTitle.toLowerCase()} in {locationName}?
            </h3>
            <p className="text-white/70 text-sm mb-5">
              Call El The Man today for a free, no-obligation quote. We cover {locationName} and the surrounding West Midlands area.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+447861203087"
                className="flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <PhoneIcon />07861 203087
              </a>
              <a
                href="https://wa.me/447861203087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <WhatsAppIcon />WhatsApp
              </a>
              <Button href="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10 text-sm" fullWidth>
                Quote form
              </Button>
            </div>
          </div>

          {/* ── 12. Related services ── */}
          {relatedServices.length > 0 && (
            <div className="bg-white rounded-xl border border-[#E8E0D4] p-5">
              <h3 className="font-semibold text-[#0F1A2E] mb-4 text-sm uppercase tracking-wider">
                Related services
              </h3>
              <ul className="space-y-2">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="text-sm text-[#4A5568] hover:text-[#C9933A] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[#C9933A]" aria-hidden="true">&rarr;</span>
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── 13. Areas covered ── */}
          <div className="bg-white rounded-xl border border-[#E8E0D4] p-5">
            <h3 className="font-semibold text-[#0F1A2E] mb-4 text-sm uppercase tracking-wider">
              {service.shortTitle} near you
            </h3>
            <ul className="space-y-1">
              {['walsall', 'bloxwich', 'aldridge', 'brownhills', 'darlaston', 'willenhall'].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/services/${service.slug}/${slug}`}
                    className="text-sm text-[#4A5568] hover:text-[#C9933A] transition-colors flex items-center gap-2 capitalize"
                  >
                    <span className="text-[#C9933A]" aria-hidden="true">&rarr;</span>
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/services/${service.slug}`} className="text-xs text-[#C9933A] font-medium hover:underline">
                  All areas &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </Container>

      {/* ── 14. CTA banner ── */}
      <section className="bg-[#C9933A] py-12" aria-labelledby="cta-heading">
        <Container className="text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
            Ready to get {service.shortTitle.toLowerCase()} done in {locationName}?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Call El The Man today — free quote, no obligation, local tradesperson who shows up when agreed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447861203087"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#C9933A] hover:bg-[#F7EDD8] font-bold py-4 px-8 rounded-xl transition-colors"
            >
              <PhoneIcon />Call 07861 203087
            </a>
            <Button href="/contact" variant="ghost" className="border-white/60 text-white hover:bg-white/20" size="lg">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
}
