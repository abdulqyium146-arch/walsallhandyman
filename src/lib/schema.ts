import { ServiceData } from './services'
import { BRAND, SITE_URL } from './env'

const AREA_SERVED = [
  'Walsall', 'Bloxwich', 'Aldridge', 'Brownhills', 'Darlaston', 'Willenhall',
  'Wednesbury', 'Pelsall', 'Streetly', 'Great Barr', 'Sutton Coldfield',
  'Lichfield', 'Wolverhampton', 'West Bromwich', 'Cannock', 'Tamworth',
  'Walsall Wood', 'Rushall', 'Cheslyn Hay', 'Burntwood',
]

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: BRAND.name,
    description: `${BRAND.name} — ${BRAND.tagline} Professional handyman services in Walsall and the West Midlands covering interior, exterior, maintenance, and emergency repairs.`,
    url: SITE_URL,
    telephone: BRAND.phone,
    address: {
      '@type': 'PostalAddress',
      ...BRAND.address,
    },
    areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
    knowsAbout: [
      'Painting and Decorating', 'Carpentry', 'Flooring', 'Tiling', 'Plastering',
      'Furniture Assembly', 'TV Mounting', 'Shelving', 'Bathroom Repairs',
      'Silicone Sealing', 'Minor Plumbing', 'Minor Electrical', 'Window Repairs',
      'Kitchen Fitting', 'Pressure Washing', 'Fence Repairs', 'Decking',
      'Garden Maintenance', 'Gutter Cleaning', 'Emergency Repairs', 'Landlord Services',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handyman Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painting & Decorating' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpentry' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flooring Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tiling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Assembly' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Repairs' } },
      ],
    },
    priceRange: '££',
    paymentAccepted: '[NEEDS CLIENT INPUT: BACS, cash, card]',
    currenciesAccepted: 'GBP',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '[NEEDS CLIENT INPUT]',
        closes: '[NEEDS CLIENT INPUT]',
      },
    ],
  }
}

export function buildServiceSchema(service: ServiceData, locationName = 'Walsall') {
  const locationSlug = locationName !== 'Walsall' ? `/${locationName.toLowerCase().replace(/\s+/g, '-')}` : ''
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${locationName}`,
    description: service.definition,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND.name,
      telephone: BRAND.phone,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'West Midlands' },
    },
    serviceType: service.schemaServiceType,
    url: `${SITE_URL}/services/${service.slug}${locationSlug}`,
  }
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function buildBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.url}`,
    })),
  }
}

export function buildArticleSchema(title: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    author: { '@type': 'Organization', name: BRAND.name },
    publisher: { '@type': 'Organization', name: BRAND.name },
  }
}
