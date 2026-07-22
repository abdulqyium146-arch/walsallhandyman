import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import ServiceTemplate from '@/components/service/ServiceTemplate'

interface Props {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} in Walsall`,
    description: `Professional ${service.title.toLowerCase()} in Walsall and the West Midlands. ${service.tagline} Call El The Man on 07861 203087 for a free quote.`,
    keywords: [
      ...service.synonyms.map((s) => `${s} Walsall`),
      `${service.title} West Midlands`,
    ],
    alternates: { canonical: `https://www.eltheman.co.uk/services/${slug}` },
    openGraph: {
      title: `${service.title} in Walsall — El The Man`,
      description: service.tagline,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <ServiceTemplate
      service={service}
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: service.title, href: `/services/${slug}` },
      ]}
    />
  )
}
