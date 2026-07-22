import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Contact & Free Quote',
  description: 'Get a free, no-obligation quote from El The Man — Walsall handyman. Call 07861 203087, WhatsApp, or use the form. We respond the same day.',
  alternates: { canonical: 'https://www.eltheman.co.uk/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Container className="pt-4">
        <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
      </Container>

      <section className="bg-[#0F1A2E] py-12" aria-label="Contact header">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            Get a Free Quote
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Tell us what needs doing and where — we will get back to you the same day with a clear, no-obligation price.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <div>
            <h2 className="text-2xl font-bold font-display text-[#0F1A2E] mb-6">Quickest ways to reach us</h2>
            <div className="space-y-4 mb-10">
              <a
                href="tel:+447861203087"
                className="flex items-center gap-4 bg-[#0F1A2E] rounded-xl p-5 text-white hover:bg-[#1B2B4B] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9933A] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">07861 203087</p>
                  <p className="text-white/60 text-sm">Call for the fastest response — emergencies welcome</p>
                </div>
              </a>

              <a
                href="https://wa.me/447861203087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-800 rounded-xl p-5 text-white hover:bg-green-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">WhatsApp</p>
                  <p className="text-white/60 text-sm">Message us a photo of the job — quick quote</p>
                </div>
              </a>
            </div>

            <div className="bg-[#F7EDD8] rounded-xl p-5 border border-[#C9933A]/20">
              <h3 className="font-bold text-[#0F1A2E] mb-2">Based in Walsall, West Midlands</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                El The Man operates across Walsall and the surrounding West Midlands area.
                Call-outs are available across Bloxwich, Aldridge, Brownhills, Darlaston, Willenhall,
                Wednesbury, Sutton Coldfield, Wolverhampton, West Bromwich, and more.
              </p>
              <p className="text-sm text-[#4A5568] mt-2">
                [NEEDS CLIENT INPUT: opening hours, emergency availability, response time commitments]
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold font-display text-[#0F1A2E] mb-6">Send a quote request</h2>
            <form
              name="quote-request"
              method="POST"
              action="/contact/success"
              className="space-y-5"
              noValidate
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  Your name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  Phone number <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white"
                  placeholder="07700 900000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  Location / postcode <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white"
                  placeholder="Walsall WS1"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  What do you need doing? <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="service"
                  name="service"
                  required
                  rows={4}
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white resize-none"
                  placeholder="E.g. Replace a fence panel, hang a TV on plasterboard wall, paint a bedroom..."
                />
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold text-[#0F1A2E] mb-1.5">
                  How urgent is this?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full border border-[#E8E0D4] rounded-lg px-4 py-3 text-[#0F1A2E] text-sm focus:outline-none focus:border-[#C9933A] focus:ring-1 focus:ring-[#C9933A] bg-white"
                >
                  <option value="">Select one</option>
                  <option value="emergency">Emergency — needs doing today</option>
                  <option value="urgent">Urgent — this week</option>
                  <option value="soon">Soon — within the next 2 weeks</option>
                  <option value="flexible">Flexible — when suits</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9933A] hover:bg-[#B07F2A] text-white font-bold py-4 px-6 rounded-xl transition-colors text-base"
              >
                Send quote request
              </button>
              <p className="text-xs text-[#718096] text-center">
                We aim to respond the same day. By submitting this form you agree to us contacting you about your enquiry.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}
