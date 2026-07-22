import sharp from 'sharp'
import { mkdir, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_DIR = path.join(ROOT, 'public', 'gallry')
const DEST_ROOT = path.join(ROOT, 'public', 'images')

// [source-filename, service-slug, seo-name, alt-text]
const IMAGES = [
  [
    'WhatsApp Image 2026-07-21 at 10.30.20 PM.jpeg',
    'emergency-repairs',
    'ring-camera-installation-walsall',
    'Ring doorbell camera fitted on brick house exterior in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.20 PM (1).jpeg',
    'emergency-repairs',
    'garden-tap-replacement-walsall',
    'Outdoor garden tap replaced with new brass hose connection in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.21 PM.jpeg',
    'emergency-repairs',
    'outdoor-tap-installation-before-after-walsall',
    'Before and after outdoor garden tap installation on brick wall in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.21 PM (1).jpeg',
    'carpentry',
    'brass-coat-hooks-fitted-hallway-walsall',
    'Three brass coat hooks professionally fitted to hallway wall in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.21 PM (2).jpeg',
    'furniture-assembly',
    'blackout-roller-blind-fitted-bedroom-walsall',
    'Purple blackout roller blind fitted to bedroom window in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.22 PM.jpeg',
    'furniture-assembly',
    'flat-pack-desk-assembled-walsall',
    'Flat pack desk with hairpin legs assembled and ready to use in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.22 PM (1).jpeg',
    'furniture-assembly',
    'flat-pack-kids-chair-assembled-walsall',
    'Flat pack kids gaming chair assembled alongside new desk in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.22 PM (2).jpeg',
    'furniture-assembly',
    'kitchen-bamboo-blind-fitted-walsall',
    'Natural bamboo roller blind fitted to kitchen window above sink in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.30.22 PM (3).jpeg',
    'furniture-assembly',
    'roller-blind-fitted-large-bedroom-window-walsall',
    'Cream roller blind fitted to large bedroom window in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.38 PM.jpeg',
    'painting-decorating',
    'painting-decorating-damp-walls-before-strip-walsall',
    'Room before decoration showing damp damaged walls and stripped wallpaper in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.40 PM.jpeg',
    'painting-decorating',
    'painting-decorating-wallpaper-stripped-room-walsall',
    'Bedroom walls stripped of wallpaper ready for fresh painting in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.41 PM.jpeg',
    'painting-decorating',
    'painting-decorating-room-renovation-in-progress-walsall',
    'Room under renovation with carpentry removed and new flooring started in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.41 PM (1).jpeg',
    'painting-decorating',
    'painting-decorating-fresh-plaster-ready-for-paint-walsall',
    'Freshly plastered bedroom walls ready for painting with Leyland paint supplies in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.43 PM.jpeg',
    'painting-decorating',
    'painting-decorating-interior-walls-in-progress-walsall',
    'Interior painting in progress with stepladder and professional tools in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.44 PM.jpeg',
    'painting-decorating',
    'painting-decorating-hallway-freshly-painted-walsall',
    'Freshly painted white hallway with original stripped floorboards in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.44 PM (1).jpeg',
    'painting-decorating',
    'painting-decorating-room-new-vinyl-flooring-walsall',
    'Completed painted room with new luxury vinyl LVT flooring laid in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.45 PM.jpeg',
    'painting-decorating',
    'painting-decorating-bedroom-grey-walls-wood-floor-walsall',
    'Bedroom painted in light grey with exposed wooden floorboards in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.45 PM (1).jpeg',
    'painting-decorating',
    'painting-decorating-living-room-feature-arch-flooring-walsall',
    'Living room with sage green walls terracotta feature arch and new LVT flooring in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.45 PM (2).jpeg',
    'painting-decorating',
    'painting-decorating-terracotta-arch-feature-wall-walsall',
    'Terracotta painted arch feature wall in freshly decorated living room in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.33.46 PM.jpeg',
    'painting-decorating',
    'painting-decorating-bedroom-completed-grey-skirting-walsall',
    'Completed bedroom with grey walls white skirting boards and new laminate floor in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.49 PM.jpeg',
    'furniture-assembly',
    'venetian-blind-fitted-living-room-walsall',
    'White venetian blind professionally fitted to living room window in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.50 PM.jpeg',
    'carpentry',
    'wall-bracket-hanging-basket-fitted-walsall',
    'Wall mount bracket fixed on brick exterior for hanging flower basket in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.50 PM (1).jpeg',
    'carpentry',
    'stair-handrail-fitted-walsall',
    'Stainless steel stair handrail professionally fitted to carpeted staircase in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.51 PM.jpeg',
    'fence-repairs',
    'shed-window-glass-replacement-walsall',
    'Garden shed window glass replaced before and after in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.51 PM (1).jpeg',
    'fence-repairs',
    'greenhouse-glass-panel-replacement-walsall',
    'Greenhouse glass panel replaced and resealed in Walsall garden',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.41.52 PM.jpeg',
    'fence-repairs',
    'greenhouse-interior-after-glass-repair-walsall',
    'Greenhouse interior with plants and shelving after glass repair in Walsall',
  ],
  [
    'WhatsApp Image 2026-07-21 at 10.45.13 PM.jpeg',
    'furniture-assembly',
    'flat-pack-dressing-table-hollywood-mirror-assembled-walsall',
    'Flat pack dressing table with Hollywood vanity mirror assembled from box in Walsall',
  ],
]

async function main() {
  let converted = 0
  let errors = 0

  for (const [srcName, service, seoName, _alt] of IMAGES) {
    const srcPath = path.join(SRC_DIR, srcName)
    const destDir = path.join(DEST_ROOT, service)
    const destPath = path.join(destDir, `${seoName}.webp`)

    if (!existsSync(srcPath)) {
      console.error(`  MISSING: ${srcName}`)
      errors++
      continue
    }

    await mkdir(destDir, { recursive: true })

    try {
      await sharp(srcPath)
        .resize({ width: 1200, height: 900, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85, effort: 4 })
        .toFile(destPath)

      console.log(`  OK  ${service}/${seoName}.webp`)
      converted++
    } catch (err) {
      console.error(`  ERR ${srcName}: ${err.message}`)
      errors++
    }
  }

  console.log(`\nDone: ${converted} converted, ${errors} errors`)
}

main().catch(console.error)
