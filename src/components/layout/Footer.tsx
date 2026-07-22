import Link from 'next/link'
import Container from '../ui/Container'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

const SERVICE_LINKS = SERVICES.slice(0, 12).map((s) => ({
  href: `/services/${s.slug}`,
  label: s.title,
}))

const LOCATION_LINKS = LOCATIONS.filter((l) => l.type !== 'nearby').slice(0, 10).map((l) => ({
  href: `/locations/${l.slug}`,
  label: l.name,
}))

export default function Footer() {
  return (
    <footer className="bg-[#0F1A2E] text-white/70 pt-16 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <p className="text-xl font-bold text-white font-display">El The Man</p>
              <p className="text-[#C9933A] text-xs uppercase tracking-widest">Can do it? Yes, we can.</p>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your reliable all-in-one handyman in Walsall and the West Midlands. Interior, exterior, maintenance, and emergency repairs — one call does it all.
            </p>
            <a href="tel:+447861203087" className="inline-flex items-center gap-2 text-[#C9933A] font-semibold hover:text-[#E8B96A] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              07861 203087
            </a>
            <p className="text-sm mt-2">Walsall, West Midlands</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#C9933A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#C9933A] hover:text-[#E8B96A] transition-colors font-medium">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Areas Covered</h3>
            <ul className="space-y-2">
              {LOCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#C9933A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm text-[#C9933A] hover:text-[#E8B96A] transition-colors font-medium">
                  All areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Information</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About El The Man' },
                { href: '/contact', label: 'Get a Free Quote' },
                { href: '/blog', label: 'Guides & Advice' },
                { href: '/services/emergency-repairs', label: 'Emergency Repairs' },
                { href: '/services/landlord-services', label: 'Landlord Services' },
                { href: '/services/commercial-handyman', label: 'Commercial' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#C9933A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} El The Man. All rights reserved. Walsall, West Midlands.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
