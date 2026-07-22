import locationsData from './data/locations.json'

export interface LocationData {
  slug: string
  name: string
  county: string
  postcodes: string[]
  type: 'primary' | 'local' | 'nearby'
  description: string
  localLandmarks: string[]
  retailParks?: string[]
  industrialEstates?: string[]
  housingEstate?: string[]
  propertyTypes: string[]
  commonRepairNeeds: string[]
  seasonalIssues: string[]
  councilArea: string
  distanceFromBase: number
  neighbourhoods: string[]
}

export const LOCATIONS: LocationData[] = locationsData as LocationData[]

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getPrimaryLocation(): LocationData {
  return LOCATIONS.find((l) => l.type === 'primary') as LocationData
}

export function getLocalLocations(): LocationData[] {
  return LOCATIONS.filter((l) => l.type === 'local' || l.type === 'primary')
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug)
}

export function formatLocationTitle(location: LocationData, serviceName: string): string {
  return `${serviceName} in ${location.name}`
}

export function formatLocationDescription(location: LocationData, serviceName: string): string {
  return `Professional ${serviceName.toLowerCase()} services in ${location.name}, ${location.county}. El The Man covers all of ${location.name} and the surrounding area — call +44 7861 203087 for a free quote.`
}
