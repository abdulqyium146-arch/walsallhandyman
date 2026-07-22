export interface ServiceImage {
  src: string
  alt: string
}

export const SERVICE_IMAGES: Record<string, ServiceImage[]> = {
  'painting-decorating': [
    { src: '/images/painting-decorating/painting-decorating-living-room-feature-arch-flooring-walsall.webp', alt: 'Living room with sage green walls, terracotta feature arch and new LVT flooring in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-bedroom-completed-grey-skirting-walsall.webp', alt: 'Completed bedroom with grey walls, white skirting boards and new laminate floor in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-room-new-vinyl-flooring-walsall.webp', alt: 'Completed painted room with new luxury vinyl LVT flooring laid in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-terracotta-arch-feature-wall-walsall.webp', alt: 'Terracotta painted arch feature wall in freshly decorated living room in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-bedroom-grey-walls-wood-floor-walsall.webp', alt: 'Bedroom painted in light grey with exposed wooden floorboards in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-hallway-freshly-painted-walsall.webp', alt: 'Freshly painted white hallway with original stripped floorboards in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-interior-walls-in-progress-walsall.webp', alt: 'Interior painting in progress with stepladder and professional tools in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-fresh-plaster-ready-for-paint-walsall.webp', alt: 'Freshly plastered bedroom walls ready for painting with Leyland paint supplies in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-damp-walls-before-strip-walsall.webp', alt: 'Room before decoration showing damp damaged walls and stripped wallpaper in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-wallpaper-stripped-room-walsall.webp', alt: 'Bedroom walls stripped of wallpaper ready for fresh painting in Walsall' },
    { src: '/images/painting-decorating/painting-decorating-room-renovation-in-progress-walsall.webp', alt: 'Room under renovation with carpentry removed and new flooring started in Walsall' },
  ],
  'carpentry': [
    { src: '/images/carpentry/stair-handrail-fitted-walsall.webp', alt: 'Stainless steel stair handrail professionally fitted to carpeted staircase in Walsall' },
    { src: '/images/carpentry/brass-coat-hooks-fitted-hallway-walsall.webp', alt: 'Three brass coat hooks professionally fitted to hallway wall in Walsall' },
    { src: '/images/carpentry/wall-bracket-hanging-basket-fitted-walsall.webp', alt: 'Wall mount bracket fixed on brick exterior for hanging flower basket in Walsall' },
  ],
  'furniture-assembly': [
    { src: '/images/furniture-assembly/flat-pack-dressing-table-hollywood-mirror-assembled-walsall.webp', alt: 'Flat pack dressing table with Hollywood vanity mirror assembled from box in Walsall' },
    { src: '/images/furniture-assembly/flat-pack-desk-assembled-walsall.webp', alt: 'Flat pack desk with hairpin legs assembled and ready to use in Walsall' },
    { src: '/images/furniture-assembly/flat-pack-kids-chair-assembled-walsall.webp', alt: 'Flat pack kids gaming chair assembled alongside new desk in Walsall' },
    { src: '/images/furniture-assembly/venetian-blind-fitted-living-room-walsall.webp', alt: 'White venetian blind professionally fitted to living room window in Walsall' },
    { src: '/images/furniture-assembly/blackout-roller-blind-fitted-bedroom-walsall.webp', alt: 'Purple blackout roller blind fitted to bedroom window in Walsall' },
    { src: '/images/furniture-assembly/roller-blind-fitted-large-bedroom-window-walsall.webp', alt: 'Cream roller blind fitted to large bedroom window in Walsall' },
    { src: '/images/furniture-assembly/kitchen-bamboo-blind-fitted-walsall.webp', alt: 'Natural bamboo roller blind fitted to kitchen window above sink in Walsall' },
  ],
  'emergency-repairs': [
    { src: '/images/emergency-repairs/ring-camera-installation-walsall.webp', alt: 'Ring doorbell camera fitted on brick house exterior in Walsall' },
    { src: '/images/emergency-repairs/garden-tap-replacement-walsall.webp', alt: 'Outdoor garden tap replaced with new brass hose connection in Walsall' },
    { src: '/images/emergency-repairs/outdoor-tap-installation-before-after-walsall.webp', alt: 'Before and after outdoor garden tap installation on brick wall in Walsall' },
  ],
  'fence-repairs': [
    { src: '/images/fence-repairs/shed-window-glass-replacement-walsall.webp', alt: 'Garden shed window glass replaced before and after in Walsall' },
    { src: '/images/fence-repairs/greenhouse-glass-panel-replacement-walsall.webp', alt: 'Greenhouse glass panel replaced and resealed in Walsall garden' },
    { src: '/images/fence-repairs/greenhouse-interior-after-glass-repair-walsall.webp', alt: 'Greenhouse interior with plants and shelving after glass repair in Walsall' },
  ],
}

export function getServiceHeroImage(slug: string): ServiceImage | null {
  return SERVICE_IMAGES[slug]?.[0] ?? null
}

export function getServiceImages(slug: string): ServiceImage[] {
  return SERVICE_IMAGES[slug] ?? []
}
