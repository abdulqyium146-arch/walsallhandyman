export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.eltheman.co.uk'

export const BRAND = {
  name: 'El The Man',
  tagline: 'Can do it? Yes, we can.',
  phone: '+44 7861 203087',
  phoneDisplay: '07861 203087',
  whatsapp: 'https://wa.me/447861203087',
  url: SITE_URL,
  address: {
    addressLocality: 'Walsall',
    addressRegion: 'West Midlands',
    addressCountry: 'GB',
  },
} as const
