import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'
import topicalMap from '@/lib/data/topical-map.json'
import { SITE_URL } from '@/lib/env'

const BASE_URL = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const serviceLocationRoutes: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    LOCATIONS.map((location) => ({
      url: `${BASE_URL}/services/${service.slug}/${location.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  )

  const blogRoutes: MetadataRoute.Sitemap = (topicalMap as { target_page_slug: string; pillar: string }[])
    .filter((entry) => entry.target_page_slug.startsWith('/blog/'))
    .filter((entry, i, arr) => arr.findIndex((e) => e.target_page_slug === entry.target_page_slug) === i)
    .map((entry) => ({
      url: `${BASE_URL}${entry.target_page_slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...serviceLocationRoutes,
    ...blogRoutes,
  ]
}
