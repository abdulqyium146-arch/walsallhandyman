import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import { LOCATIONS, getLocationBySlug } from '@/lib/locations'
import ServiceTemplate from '@/components/service/ServiceTemplate'

interface Props {
  params: Promise<{ service: string; location: string }>
}

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = []
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      params.push({ service: service.slug, location: location.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, location: locationSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  const location = getLocationBySlug(locationSlug)
  if (!service || !location) return {}

  const title = `${service.title} in ${location.name}`
  const description = `Professional ${service.title.toLowerCase()} in ${location.name}, ${location.county}. ${service.tagline} El The Man covers all of ${location.name} — call 07861 203087 for a free quote.`

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} ${location.name}`,
      ...service.synonyms.map((s) => `${s} ${location.name}`),
      `handyman ${location.name}`,
      `property maintenance ${location.name}`,
    ],
    alternates: { canonical: `https://www.eltheman.co.uk/services/${serviceSlug}/${locationSlug}` },
    openGraph: {
      title: `${title} — El The Man`,
      description,
    },
  }
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: serviceSlug, location: locationSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  const location = getLocationBySlug(locationSlug)
  if (!service || !location) notFound()

  return (
    <ServiceTemplate
      service={service}
      location={location}
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: service.title, href: `/services/${serviceSlug}` },
        { name: location.name, href: `/services/${serviceSlug}/${locationSlug}` },
      ]}
    />
  )
}
