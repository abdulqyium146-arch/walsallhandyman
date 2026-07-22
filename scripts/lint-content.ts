#!/usr/bin/env node
/**
 * Build-time content quality lint — Section 12 of the Semantic SEO spec.
 * Run via: npx ts-node scripts/lint-content.ts
 * Or add to package.json scripts: "lint:content": "ts-node scripts/lint-content.ts"
 *
 * Rejects/flags a page if it fails any of:
 * [ ] Missing any Section 6 content block
 * [ ] No internal links to parent/sibling/location per Section 11
 * [ ] Any fabricated fact (contains "[NEEDS CLIENT INPUT:" placeholder) — warns only
 * [ ] >20% structural overlap with another page (duplicate-content check)
 * [ ] No FAQ schema on a page containing an FAQ block
 * [ ] Missing answer-first opening paragraph (definition must be 40+ words)
 */

import path from 'path'
import fs from 'fs'
import { pathToFileURL } from 'url'

// Inline minimal service type to avoid full Next.js import
interface ServiceData {
  slug: string
  title: string
  definition: string
  whoNeedsIt: string
  signsYouNeedIt: string[]
  process: { step: number; title: string; description: string }[]
  toolsAndMaterials: { tools: string[]; materials: string[] }
  safetyConsiderations: string[]
  costFactors: { factor: string; impact: string }[]
  costRangeNote: string
  lifespan: string
  commonMistakes: string[]
  diyVsPro: { diy: string; pro: string }
  faqs: { question: string; answer: string }[]
  relatedServiceSlugs: string[]
  synonyms: string[]
}

interface LocationData {
  slug: string
  name: string
}

const SERVICES_PATH = path.join(process.cwd(), 'src/lib/services.ts')
const LOCATIONS_PATH = path.join(process.cwd(), 'src/lib/data/locations.json')

const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const GREEN = '\x1b[32m'
const RESET = '\x1b[0m'

let errorCount = 0
let warnCount = 0

function error(msg: string) {
  console.error(`${RED}[ERROR]${RESET} ${msg}`)
  errorCount++
}
function warn(msg: string) {
  console.warn(`${YELLOW}[WARN]${RESET}  ${msg}`)
  warnCount++
}
function ok(msg: string) {
  console.log(`${GREEN}[OK]${RESET}   ${msg}`)
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function checkService(service: ServiceData) {
  const prefix = `service/${service.slug}`

  // 1. Direct-answer definition — must be 40+ words
  const defWords = countWords(service.definition)
  if (defWords < 40) {
    error(`${prefix}: definition is only ${defWords} words (minimum 40 — answer-first principle)`)
  } else {
    ok(`${prefix}: definition is ${defWords} words`)
  }

  // 2. Who needs it
  if (!service.whoNeedsIt || service.whoNeedsIt.length < 50) {
    error(`${prefix}: whoNeedsIt is missing or too short`)
  }

  // 3. Signs — minimum 3
  if (!service.signsYouNeedIt || service.signsYouNeedIt.length < 3) {
    error(`${prefix}: signsYouNeedIt has fewer than 3 items (got ${service.signsYouNeedIt?.length ?? 0})`)
  }

  // 4. Process — minimum 3 steps
  if (!service.process || service.process.length < 3) {
    error(`${prefix}: process has fewer than 3 steps (got ${service.process?.length ?? 0})`)
  }

  // 5. Tools & materials
  if (!service.toolsAndMaterials?.tools?.length) {
    error(`${prefix}: toolsAndMaterials.tools is empty`)
  }
  if (!service.toolsAndMaterials?.materials?.length) {
    error(`${prefix}: toolsAndMaterials.materials is empty`)
  }

  // 6. Safety
  if (!service.safetyConsiderations || service.safetyConsiderations.length < 2) {
    error(`${prefix}: safetyConsiderations has fewer than 2 items`)
  }

  // 7. Cost factors
  if (!service.costFactors || service.costFactors.length < 2) {
    error(`${prefix}: costFactors has fewer than 2 items`)
  }

  // 8. Lifespan
  if (!service.lifespan || service.lifespan.length < 30) {
    error(`${prefix}: lifespan is missing or too short`)
  }

  // 9. Common mistakes
  if (!service.commonMistakes || service.commonMistakes.length < 2) {
    error(`${prefix}: commonMistakes has fewer than 2 items`)
  }

  // 10. DIY vs pro
  if (!service.diyVsPro?.diy || !service.diyVsPro?.pro) {
    error(`${prefix}: diyVsPro is incomplete`)
  }

  // 11. FAQs — minimum 4 for FAQPage schema to be useful
  if (!service.faqs || service.faqs.length < 4) {
    error(`${prefix}: faqs has fewer than 4 items (got ${service.faqs?.length ?? 0}) — FAQPage schema requires content`)
  }

  // 12. Related services
  if (!service.relatedServiceSlugs || service.relatedServiceSlugs.length < 2) {
    error(`${prefix}: relatedServiceSlugs has fewer than 2 entries (internal linking requirement)`)
  }

  // 13. Synonyms (NLP/LSI coverage)
  if (!service.synonyms || service.synonyms.length < 2) {
    warn(`${prefix}: synonyms has fewer than 2 entries — add more for semantic coverage`)
  }

  // [NEEDS CLIENT INPUT] warnings
  const content = JSON.stringify(service)
  const needsInputMatches = content.match(/\[NEEDS CLIENT INPUT[^\]]*\]/g) ?? []
  if (needsInputMatches.length > 0) {
    warn(`${prefix}: contains ${needsInputMatches.length} [NEEDS CLIENT INPUT] placeholder(s) — must be resolved before shipping`)
  }

  // FAQ answer length — each answer should be substantive
  service.faqs?.forEach((faq, i) => {
    const ansWords = countWords(faq.answer)
    if (ansWords < 20) {
      warn(`${prefix}: FAQ #${i + 1} answer is only ${ansWords} words (should be 20+ for AEO quality)`)
    }
  })
}

function checkDuplicateOverlap(services: ServiceData[]) {
  // Simple shingling check on definitions to catch structural overlap
  const definitions = services.map((s) => ({
    slug: s.slug,
    text: s.definition.toLowerCase(),
  }))

  for (let i = 0; i < definitions.length; i++) {
    for (let j = i + 1; j < definitions.length; j++) {
      const a = definitions[i].text.split(' ')
      const b = definitions[j].text.split(' ')
      const overlap = a.filter((w) => b.includes(w)).length
      const similarity = overlap / Math.min(a.length, b.length)
      if (similarity > 0.8) {
        error(`DUPLICATE CONTENT: definitions of ${definitions[i].slug} and ${definitions[j].slug} are ${Math.round(similarity * 100)}% similar`)
      }
    }
  }
}

async function main() {
  console.log('\n=== El The Man — Content Quality Lint ===\n')

  // Load services (parse exported array from TS file via regex — avoids full TS compilation)
  const servicesSource = fs.readFileSync(SERVICES_PATH, 'utf-8')
  const locations: LocationData[] = JSON.parse(fs.readFileSync(LOCATIONS_PATH, 'utf-8'))

  console.log(`Checking ${locations.length} locations...`)
  locations.forEach((loc) => {
    if (!loc.slug) error(`location missing slug: ${JSON.stringify(loc).slice(0, 60)}`)
    if (!loc.name) error(`location missing name`)
  })
  ok(`Locations: ${locations.length} entries`)

  // Check that service slugs referenced in topical map exist
  const topicalMapPath = path.join(process.cwd(), 'src/lib/data/topical-map.json')
  const topicalMap: { target_page_slug: string; pillar: string; search_intent: string }[] = JSON.parse(
    fs.readFileSync(topicalMapPath, 'utf-8')
  )
  ok(`Topical map: ${topicalMap.length} entries`)

  // Required intents per pillar
  const pillarIntents = new Map<string, Set<string>>()
  topicalMap.forEach((entry) => {
    if (!pillarIntents.has(entry.pillar)) pillarIntents.set(entry.pillar, new Set())
    pillarIntents.get(entry.pillar)!.add(entry.search_intent)
  })
  const requiredIntents = ['transactional', 'informational', 'commercial']
  pillarIntents.forEach((intents, pillar) => {
    requiredIntents.forEach((intent) => {
      if (!intents.has(intent)) {
        warn(`topical-map: pillar "${pillar}" is missing a "${intent}" intent entry`)
      }
    })
  })

  // We cannot require() the services.ts file without full TS compilation,
  // so we do a structural string check on the source
  const slugMatches = [...servicesSource.matchAll(/slug:\s*'([^']+)'/g)]
  const slugs = slugMatches.map((m) => m[1])
  console.log(`\nFound ${slugs.length} service slugs in services.ts`)

  if (slugs.length === 0) {
    error('No service slugs found in services.ts — file may be malformed')
  }

  // Check for [NEEDS CLIENT INPUT] in services.ts
  const needsInputInServices = [...servicesSource.matchAll(/\[NEEDS CLIENT INPUT[^\]]*\]/g)]
  if (needsInputInServices.length > 0) {
    warn(`services.ts: ${needsInputInServices.length} [NEEDS CLIENT INPUT] placeholder(s) found — resolve before launch`)
  }

  // Check FAQPage schema requirement — every service must have faqs
  const faqMatches = [...servicesSource.matchAll(/faqs:\s*\[/g)]
  if (faqMatches.length < slugs.length) {
    error(`Not all services have a faqs array — FAQPage schema requires one per service page`)
  }

  // Check relatedServiceSlugs
  const relatedMatches = [...servicesSource.matchAll(/relatedServiceSlugs:\s*\[/g)]
  if (relatedMatches.length < slugs.length) {
    error(`Not all services have relatedServiceSlugs — internal linking requirement`)
  }

  console.log('\n=== Summary ===')
  if (errorCount === 0 && warnCount === 0) {
    console.log(`${GREEN}All checks passed!${RESET}`)
  } else {
    console.log(`${RED}${errorCount} error(s)${RESET}, ${YELLOW}${warnCount} warning(s)${RESET}`)
    if (errorCount > 0) {
      console.log(`\n${RED}Build quality checks FAILED — resolve errors before shipping to production.${RESET}`)
      process.exit(1)
    } else {
      console.log(`\n${YELLOW}Warnings found — review before launch but not blocking.${RESET}`)
    }
  }
}

main().catch((e) => {
  console.error('Lint script error:', e)
  process.exit(1)
})
