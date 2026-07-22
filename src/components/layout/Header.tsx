'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from '../ui/Container'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Areas' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Guides' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#0F1A2E] border-b border-[#C9933A]/30 shadow-[0_2px_12px_0_rgba(15,26,46,0.4)]">
      <Container as="div" className="flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="El The Man — home">
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-white tracking-tight">El The Man</span>
            <span className="text-[10px] text-[#C9933A] uppercase tracking-widest font-medium">Can do it? Yes, we can.</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+447861203087"
            className="ml-4 inline-flex items-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            07861 203087
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile nav drawer */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-[#0F1A2E] border-t border-white/10">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-md text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+447861203087"
              className="mt-2 flex items-center justify-center gap-2 bg-[#C9933A] hover:bg-[#B07F2A] text-white font-semibold py-3 px-4 rounded-lg text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 15.4 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 07861 203087
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
