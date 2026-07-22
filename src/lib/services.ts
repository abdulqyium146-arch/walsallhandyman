export interface ServiceData {
  slug: string
  title: string
  shortTitle: string
  category: 'interior' | 'exterior' | 'maintenance' | 'emergency' | 'commercial'
  tagline: string
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
  prosAndCons?: { pros: string[]; cons: string[] }
  faqs: { question: string; answer: string }[]
  relatedServiceSlugs: string[]
  schemaServiceType: string
  synonyms: string[]
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'painting-decorating',
    title: 'Painting & Decorating',
    shortTitle: 'Painting',
    category: 'interior',
    tagline: 'Transform any room with a professional finish that lasts.',
    definition: 'Painting and decorating is the skilled application of paint, wallpaper, and surface treatments to interior and exterior walls, ceilings, woodwork, and render. A professional finish requires proper surface preparation, the right product selection, and systematic application — delivering results that hold up for years rather than months.',
    whoNeedsIt: 'Homeowners refreshing tired rooms or moving into a new property; landlords redecorating between tenancies; letting agents managing end-of-tenancy turnarounds; facilities managers maintaining commercial premises; and anyone wanting to increase property value before a sale.',
    signsYouNeedIt: [
      'Walls look faded, stained, or yellowed',
      'Paint is peeling, cracking, or flaking',
      'Woodwork (skirting boards, doors, window frames) looks chipped or tired',
      'Rooms feel dark and you want a brighter, fresher colour scheme',
      'You are moving into a new property and want a clean start',
      'Existing wallpaper is lifting, bubbling, or out of date',
      'Mould marks remain after cleaning (surface needs priming before painting)',
    ],
    process: [
      { step: 1, title: 'Protect and prepare', description: 'Furniture is moved or covered with dust sheets. Skirting boards, architraves, and fittings are masked. Holes, cracks, and uneven surfaces are filled, sanded smooth, and primed.' },
      { step: 2, title: 'Surface assessment', description: 'Surfaces are assessed for adhesion — new plaster needs mist coat, glossy areas need a light sand, and existing stains may need a specialist stain-block primer.' },
      { step: 3, title: 'Ceiling first', description: 'Ceilings are cut in around the edges and rolled across the full span. Two coats of ceiling white are standard; allow thorough drying between coats.' },
      { step: 4, title: 'Walls', description: 'Emulsion is cut in with a brush along edges, then rolled in an M or W pattern working from top to bottom. Two coats are applied for full opacity and even finish.' },
      { step: 5, title: 'Woodwork', description: 'Skirting boards, door frames, doors, and window boards are painted with satinwood or gloss. Proper preparation and thin, even coats eliminate brush marks.' },
      { step: 6, title: 'Second coat and finishing', description: 'Masking tape is removed while paint is still slightly wet to avoid peeling. Final touches are checked in raking light before sign-off.' },
    ],
    toolsAndMaterials: {
      tools: ['roller and sleeve', 'paintbrush set', 'paint tray', 'dust sheets', 'sandpaper (various grits)', 'filling knife', 'masking tape', 'step ladder'],
      materials: ['matt or silk emulsion', 'ceiling white', 'satinwood or gloss for woodwork', 'primer/undercoat', 'filler', 'sugar soap for cleaning'],
    },
    safetyConsiderations: [
      'Ensure rooms are well ventilated — open windows when using solvent-based products',
      'Use a stable ladder or hop-up, never paint from an unstable chair',
      'Cover floors and furniture to prevent paint drips on surfaces',
      'Check for lead paint in properties built before 1970 — do not sand without testing',
      'Store paint tins securely away from children and heat sources',
    ],
    costFactors: [
      { factor: 'Room size', impact: 'Larger rooms require more material and time — cost scales roughly with square meterage of paintable surface' },
      { factor: 'Surface condition', impact: 'Heavy filling, stain-blocking, or mist-coating new plaster adds preparation time and material cost' },
      { factor: 'Number of coats', impact: 'Darker-to-lighter colour changes, stained surfaces, and low-quality existing paint may require three coats' },
      { factor: 'Woodwork included', impact: 'Painting skirting boards, doors, and frames adds significant time — often as much as the walls themselves' },
      { factor: 'Type of paint', impact: 'Premium paints (Farrow & Ball, Little Greene) cost more per litre but often need fewer coats' },
      { factor: 'Access', impact: 'High ceilings, stairwells, or difficult corners increase time and may require specialist access equipment' },
    ],
    costRangeNote: 'Pricing varies widely based on room size, condition, and specification. [NEEDS CLIENT INPUT: confirm day-rate or per-room pricing range]',
    lifespan: 'Interior emulsion typically lasts 5–7 years before needing a refresh. Woodwork in high-traffic areas (doors, skirting) may show wear in 3–5 years. Exterior masonry paint lasts 3–5 years; exterior woodwork paint 3–4 years depending on aspect.',
    commonMistakes: [
      'Skipping primer on bare plaster or MDF — leads to patchy finish and poor adhesion',
      'Not allowing adequate drying time between coats — causes roller marks and lifting',
      'Using cheap rollers that leave fibre traces in wet paint',
      'Painting over damp surfaces — paint lifts within weeks',
      'Not cutting in cleanly before rolling — leaves a visible line at wall-ceiling junction',
    ],
    diyVsPro: {
      diy: 'Painting a single room is within the reach of a careful DIYer with the right prep and patience. Expect the job to take 2–3 times longer than a professional.',
      pro: 'A professional delivers a noticeably cleaner finish in less time, with proper preparation that prevents early failure. Woodwork in particular is difficult to get right without experience.',
    },
    faqs: [
      { question: 'How long does it take to paint a room?', answer: 'A medium bedroom or living room with two coats on walls and woodwork typically takes a professional one to two days, including preparation and drying time. Larger rooms, poor surface condition, or colour changes can add to this.' },
      { question: 'Do I need to move all my furniture?', answer: 'Ideally yes — or at least move large pieces to the centre of the room and cover them with dust sheets. El The Man will protect your belongings, but working around furniture compromises the quality of the finish near skirting boards and corners.' },
      { question: 'How many coats of paint are needed?', answer: 'Two coats of emulsion on walls and ceilings is standard. Going from a dark colour to a light one, or painting over bare/newly plastered walls, may require a mist coat plus two full coats.' },
      { question: 'Can you paint over wallpaper?', answer: 'Technically yes, but it is rarely recommended. Paint can cause wallpaper seams to bubble and existing patterns can bleed through. Removing wallpaper first gives a far better long-term result.' },
      { question: 'What is the best paint finish for a bathroom?', answer: 'A moisture-resistant or bathroom-specific emulsion with a satin or eggshell finish is recommended for bathrooms. Matt emulsion absorbs moisture and can support mould growth in high-humidity areas.' },
      { question: 'Do you supply the paint or should I?', answer: '[NEEDS CLIENT INPUT: confirm paint-supply policy — supply-and-fit or labour-only options]' },
      { question: 'Can you match existing paint colours?', answer: 'Many paint brands offer colour-matching services. Alternatively, a tester pot applied to a discreet area can help identify the closest match for touch-up work.' },
    ],
    relatedServiceSlugs: ['plastering', 'carpentry', 'flooring', 'landlord-services'],
    schemaServiceType: 'PaintingService',
    synonyms: ['decorating', 'interior painting', 'exterior painting', 'house painting', 'room painting', 'redecoration'],
  },

  {
    slug: 'carpentry',
    title: 'Carpentry & Joinery',
    shortTitle: 'Carpentry',
    category: 'interior',
    tagline: 'Precision woodwork — from skirting boards to bespoke shelving.',
    definition: 'Carpentry and joinery covers the fitting, repair, and installation of timber elements throughout a property: doors, skirting boards, architraves, stud walls, shelving, and more. Good carpentry is the backbone of any well-finished interior — clean joints, precise mitres, and properly hung doors mark the difference between a professional and amateur result.',
    whoNeedsIt: 'Homeowners renovating or improving their property; landlords fitting or replacing interior doors before re-letting; developers completing new-build finishes; and anyone dealing with damaged woodwork that spoils an otherwise well-kept home.',
    signsYouNeedIt: [
      'Doors that stick, rattle, or will not close properly',
      'Skirting boards or architraves that are cracked, missing, or poorly fitted',
      'Gaps between skirting and floor that let in draughts and look untidy',
      'Internal doors that no longer hang level after the property has settled',
      'You want new shelving, fitted furniture, or bespoke joinery',
      'Stud partition wall needed to divide a large room',
    ],
    process: [
      { step: 1, title: 'Survey and measure', description: 'Accurate measurements are taken. For door hanging, the frame and floor are checked for level. For skirting and architraves, room dimensions and corner types are noted.' },
      { step: 2, title: 'Cut and prepare', description: 'Timber is cut to length, corners are mitred (45°) or scribed to follow an uneven floor. Existing fixings and damage are addressed.' },
      { step: 3, title: 'Fix and fit', description: 'Boards and frames are fixed using appropriate fixings (adhesive, nails, or screws depending on substrate). Doors are hung on correct-gauge hinges, adjusted for smooth operation.' },
      { step: 4, title: 'Fill and finish', description: 'Nail holes are filled and sanded. Gaps between skirting and wall/floor are caulked for a clean, seamless appearance ready for decorating.' },
    ],
    toolsAndMaterials: {
      tools: ['circular saw', 'mitre saw', 'jigsaw', 'drill/driver', 'chisel set', 'plane', 'spirit level', 'nail gun', 'router'],
      materials: ['MDF skirting and architrave', 'softwood or hardwood doors', 'hinges', 'handle sets', 'wood adhesive', 'grab adhesive', 'caulk', 'nails and screws'],
    },
    safetyConsiderations: [
      'Always wear eye protection when cutting timber',
      'Support long lengths when ripping — use a stand or second pair of hands',
      'Check for pipes and cables before drilling into walls or floors',
      'Fire doors (FD30, FD60) must be hung with correct-specification closers and seals — do not modify their intumescent strips',
    ],
    costFactors: [
      { factor: 'Number of doors', impact: 'Door hanging is priced per door including hardware supply' },
      { factor: 'Door type', impact: 'Fire doors require more precise fitting and specific hardware; solid hardwood doors are heavier and require stronger hinges' },
      { factor: 'Linear metres of skirting/architrave', impact: 'Cost scales with the amount of board to be fitted and the complexity of room corners' },
      { factor: 'Material specification', impact: 'MDF is economical; solid timber costs more and offers superior durability and a more traditional appearance' },
      { factor: 'Condition of existing frame', impact: 'Rotten or damaged frames need replacement before new doors can be hung — this adds time and material cost' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm pricing for door hanging, skirting per metre, and other carpentry tasks]',
    lifespan: 'Well-fitted softwood skirting and architraves last the life of the property. Solid timber doors, properly hung and maintained, last 30+ years. Interior panel doors in MDF may need replacing after 15–20 years in high-traffic areas.',
    commonMistakes: [
      'Cutting skirting board at exactly 45° in rooms where the corner is not actually square — always check with a digital angle finder',
      'Fixing skirting straight to plasterboard without noggins — boards will pop off over time',
      'Hanging a door with only two hinges where three are required — particularly for heavier solid doors',
      'Not checking for plumb before hanging a door — a door that is out of plumb will swing open or closed on its own',
    ],
    diyVsPro: {
      diy: 'Fitting skirting boards in a straightforward rectangular room is achievable with patience and a mitre saw. Door hanging requires more skill to get a consistent 2–3mm gap all the way around.',
      pro: 'A professional carpenter works significantly faster and handles non-square corners, awkward angles, and period-property quirks that catch DIYers out.',
    },
    faqs: [
      { question: 'Can you replace just one door or do all doors need to match?', answer: 'You can replace one door at a time. However, if you have a Victorian or Edwardian property, matching the profile of original doors may require sourcing a specific panel configuration — El The Man can advise on this.' },
      { question: 'How long does it take to hang a door?', answer: 'A straightforward door hang into an existing frame typically takes 1–2 hours. New frame installation or significant remedial work adds time.' },
      { question: 'What is the difference between a fire door and a standard door?', answer: 'Fire doors (rated FD30 or FD60) are designed to prevent the spread of fire and smoke for 30 or 60 minutes respectively. They are mandatory in certain positions in UK homes, particularly between an attached garage and living space, and in HMOs. They must be fitted with self-closing hinges and intumescent strips.' },
      { question: 'Can skirting boards be fitted over existing ones?', answer: 'Technically yes, but it raises the profile and can look odd. The better approach is to remove old boards, address any underlying wall damage, and fit new boards flush to the floor.' },
      { question: 'Do you supply timber or should I?', answer: '[NEEDS CLIENT INPUT: confirm supply policy]' },
    ],
    relatedServiceSlugs: ['door-fitting', 'lock-changes', 'painting-decorating', 'flooring', 'shelving-installation'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['joinery', 'woodwork', 'door fitting', 'door hanging', 'skirting boards', 'timber work'],
  },

  {
    slug: 'door-fitting',
    title: 'Door Fitting & Repairs',
    shortTitle: 'Doors',
    category: 'interior',
    tagline: 'Doors that open smoothly, close securely, and look the part.',
    definition: 'Door fitting covers the installation of new internal and external doors, adjustment of existing sticking or misaligned doors, and repair of damaged frames, hinges, and hardware. A well-hung door operates smoothly with consistent clearance all the way around — a sign of precision carpentry that also matters for fire safety and security.',
    whoNeedsIt: 'Anyone with a door that sticks in winter, will not latch properly, has a damaged frame, needs upgrading for fire compliance (HMO landlords), or who is replacing doors as part of a renovation.',
    signsYouNeedIt: [
      'Door sticks or drags on the floor in damp or cold weather',
      'Door swings open or closed on its own — indicates it is not plumb',
      'Visible gap on one side and paint dragging on the other',
      'Hinge screws have pulled out of the frame',
      'Door does not latch unless you lift the handle sharply',
      'External door frame is rotten or draughty',
      'Property requires fire doors for compliance (HMO, flats)',
    ],
    process: [
      { step: 1, title: 'Diagnose', description: 'Identify whether the issue is the door, the frame, the hinges, or foundation movement. Mark the problem areas.' },
      { step: 2, title: 'Remove and trim', description: 'Door is removed from hinges. If fitting a new door, it is trimmed to the exact opening size with a 2–3mm perimeter gap.' },
      { step: 3, title: 'Hinge positions', description: 'Hinge recesses are chiselled into both door edge and frame. Three hinges are standard for solid-core or fire doors.' },
      { step: 4, title: 'Hang and adjust', description: 'Door is hung, checked for plumb and even clearance, and adjusted as needed before hardware is fitted.' },
      { step: 5, title: 'Hardware and draught strip', description: 'Handle set, latch/lock, and any draught-excluding or intumescent strips are fitted and tested.' },
    ],
    toolsAndMaterials: {
      tools: ['plane', 'chisel', 'drill', 'screwdriver', 'spirit level', 'door hanging kit', 'measuring tape'],
      materials: ['internal or external door', 'hinges (pair or set of three)', 'handle and latch set', 'frame filler', 'draught excluder strip', 'intumescent seal (fire doors)'],
    },
    safetyConsiderations: [
      'Fire doors must be fitted with the correct certification — do not remove or damage the intumescent strip',
      'External doors require weather-rated hardware and threshold seals to maintain energy efficiency',
      'Always check for wiring before planing down a door frame',
    ],
    costFactors: [
      { factor: 'Door type', impact: 'Hollow-core, solid-core, fire-rated, or external — each has different weight, hardware, and fitting requirements' },
      { factor: 'Frame condition', impact: 'A rotten or damaged frame needs replacing before a new door can be hung, adding cost' },
      { factor: 'Hardware specification', impact: 'Budget lever sets vs. quality locksets; basic vs. premium hinges' },
      { factor: 'Number of doors', impact: 'Multiple doors in one visit is more economical per door than a single call-out' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm per-door price range for supply-and-fit vs. labour-only]',
    lifespan: 'A solid timber or solid-core door, properly hung, lasts 30+ years with basic maintenance. Hollow-core doors may last 15–20 years before showing significant wear.',
    commonMistakes: [
      'Using only two hinges on a heavy door — causes the door to sag and the frame to twist',
      'Not trimming the new door before hanging — fitting a door that is even 1mm too wide will bind immediately',
      'Ignoring foundation movement when adjusting a sticking door — planing alone will not fix a structural issue',
    ],
    diyVsPro: {
      diy: 'Tightening loose hinges or adjusting a latch is DIY-friendly. Hanging a new door to a professional standard, especially a fire door, requires skill and the right tools.',
      pro: 'Guarantees correct clearance, plumb hanging, and compliant fire-door fitting — all critical for safety and property compliance.',
    },
    faqs: [
      { question: 'Why does my door stick in winter but not summer?', answer: 'Timber absorbs moisture in cold, damp weather and expands. This is common in Victorian and Edwardian properties. The solution depends on severity: minor sticking can be addressed by planing; persistent movement may indicate a need to seal the door edges with paint or fit a slightly smaller door.' },
      { question: 'Do I need fire doors in my home?', answer: 'In standard UK domestic properties, fire doors are not mandatory throughout. However, they are required between an integral garage and the living space, and in HMOs (houses in multiple occupation), Building Regulations typically require them between each letting room and shared escape routes. Always check with your local planning authority if in doubt.' },
      { question: 'Can you repair a damaged door frame or does it need replacing?', answer: 'Minor damage such as split wood, rot in one section, or pulled-out hinge fixings can often be repaired. Significant rot, structural damage from a forced entry, or a badly out-of-square frame is usually more cost-effective to replace.' },
      { question: 'How long does door fitting take?', answer: 'A straightforward internal door hang takes 1–2 hours. External doors or fire doors with all hardware typically take 2–4 hours. Replacing a damaged frame as well adds further time.' },
    ],
    relatedServiceSlugs: ['lock-changes', 'carpentry', 'emergency-repairs', 'painting-decorating'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['door hanging', 'door installation', 'door repair', 'new door fitting', 'internal door fitting', 'external door fitting'],
  },

  {
    slug: 'lock-changes',
    title: 'Lock Changes',
    shortTitle: 'Lock Changes',
    category: 'maintenance',
    tagline: 'Upgrade your locks for security, insurance compliance, and peace of mind.',
    definition: 'A lock change involves removing and replacing a door lock cylinder, deadbolt, or multipoint locking mechanism with a new unit — either like-for-like or to an upgraded security specification. Lock changes are essential after a break-in, when moving into a new property, between tenancies, or when a key has been lost or stolen.',
    whoNeedsIt: 'New homeowners who want to secure a property with unknown key history; landlords changing locks between tenants; tenants who have lost a key; anyone whose existing locks do not meet BS3621 insurance requirements; and those upgrading older pin-tumbler cylinders to anti-snap, anti-pick, anti-drill specification.',
    signsYouNeedIt: [
      'You have just moved into a new property and do not know how many keys exist',
      'A tenant is leaving and you need to reset keys for the next tenant',
      'A key has been lost or stolen',
      'Existing lock is stiff, worn, or difficult to operate',
      'Your insurer requires a BS3621 5-lever mortice lock — your current lock does not meet this standard',
      'Lock was damaged in a break-in attempt',
      'You want to upgrade to an anti-snap euro cylinder',
    ],
    process: [
      { step: 1, title: 'Assess existing lock', description: 'The current lock type, brand, and backset/dimensions are measured to identify a compatible or superior replacement.' },
      { step: 2, title: 'Remove old cylinder or lock', description: 'The existing cylinder or full lock body is removed. Any damage to the door or frame is noted.' },
      { step: 3, title: 'Fit new lock', description: 'The new lock is installed and tested for smooth key operation and correct bolt throw. Alignment with the strike plate is confirmed.' },
      { step: 4, title: 'Test and hand over keys', description: 'Lock is tested from both sides. New keys are cut (or supplied as part of the new lock set) and handed over.' },
    ],
    toolsAndMaterials: {
      tools: ['chisel', 'screwdriver set', 'drill', 'lock fitting jig', 'measuring tape'],
      materials: ['BS3621 5-lever mortice lock', 'anti-snap euro cylinder', 'multipoint lock mechanism', 'strike plate', 'key sets'],
    },
    safetyConsiderations: [
      'Always use locks conforming to British Standard BS3621 — this is a standard requirement for home insurance on external doors',
      'Anti-snap cylinders conforming to TS007 3-star rating are recommended for all uPVC and composite doors — standard euro cylinders are vulnerable to snap attacks',
      'Deadlocks should throw the full bolt — an underthrown bolt provides minimal security',
    ],
    costFactors: [
      { factor: 'Lock type', impact: 'A basic euro cylinder costs less than a 5-lever mortice lock or a multipoint locking mechanism for uPVC doors' },
      { factor: 'Security specification', impact: 'TS007 3-star anti-snap cylinders cost more than standard cylinders but provide significantly better protection' },
      { factor: 'Number of locks', impact: 'Multiple locks in one visit reduces per-lock cost' },
      { factor: 'Door type', impact: 'Some older doors or unusual configurations require specialised lock dimensions or fitting methods' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm supply-and-fit price range for cylinder vs. mortice lock changes]',
    lifespan: 'A quality British Standard lock, maintained and lubricated, lasts 10–15 years or more. Cylinders on heavily used front doors may need replacing sooner.',
    commonMistakes: [
      'Fitting a standard euro cylinder to a uPVC door without an anti-snap specification — these can be snapped open in seconds by a burglar',
      'Not checking the backset (distance from door edge to keyhole centre) before ordering a replacement — incorrect size means the lock will not fit',
      'Leaving a strike plate that does not fully engage the bolt throw — reduces security significantly',
    ],
    diyVsPro: {
      diy: 'Replacing a like-for-like euro cylinder is straightforward for a competent DIYer. 5-lever mortice locks and multipoint systems require more care to get the geometry right.',
      pro: 'Ensures the correct security rating is fitted, properly installed, and meets your insurance requirements — a small cost for significant peace of mind.',
    },
    faqs: [
      { question: 'Do I need a BS3621 lock to be insured?', answer: 'Most UK home insurance policies require external doors to be fitted with a BS3621 5-lever mortice deadlock (for timber doors) or a TS007 3-star rated cylinder (for uPVC/composite doors). Check your policy schedule — an unacceptable lock can void a claim.' },
      { question: 'What is a snap attack and how do I prevent it?', answer: 'Euro cylinders on uPVC and composite doors can be snapped in half in seconds using simple tools, allowing the lock to open without a key. Anti-snap cylinders (TS007 3-star rated) are designed to break in a way that still keeps the door locked. Upgrading is highly recommended.' },
      { question: 'Can you change the lock on my uPVC door?', answer: 'Yes. uPVC doors typically use euro cylinder locks that are straightforward to replace. We measure the existing cylinder and replace it with a correctly-sized anti-snap upgrade.' },
      { question: 'How long does a lock change take?', answer: 'A single euro cylinder change takes around 20–30 minutes. A 5-lever mortice lock replacement is typically 45–60 minutes. Multiple locks can usually be done in a single visit.' },
      { question: 'What if I am locked out?', answer: 'Lock-out assistance may be available depending on circumstances. Call +44 7861 203087 to discuss — emergency call-out may be possible.' },
    ],
    relatedServiceSlugs: ['door-fitting', 'emergency-repairs', 'landlord-services', 'carpentry'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['lock replacement', 'lock upgrade', 'cylinder change', 'new locks', 'security upgrade', 'lock fitting'],
  },

  {
    slug: 'flooring',
    title: 'Flooring Installation',
    shortTitle: 'Flooring',
    category: 'interior',
    tagline: 'New floors that transform a room — fitted right first time.',
    definition: 'Flooring installation is the fitting of new floor coverings — laminate, luxury vinyl tile (LVT), engineered wood, or solid wood — to a prepared subfloor. The right flooring choice depends on room use, subfloor type, moisture levels, and budget. Correct fitting (particularly correct expansion gap management) determines how long the floor performs.',
    whoNeedsIt: 'Homeowners replacing worn or dated carpet with hard flooring; landlords installing durable, easy-clean flooring between tenancies; homebuyers refreshing a new property; and anyone upgrading tired rooms with a modern, low-maintenance floor.',
    signsYouNeedIt: [
      'Existing carpet is worn, stained, or smells permanently despite cleaning',
      'Laminate is lifting, bubbling, or has gaps at the joints',
      'Solid wood floor is badly scratched and beyond viable sanding',
      'Room feels cold and draughty — old floorboards letting air through',
      'You want a modern, easy-clean hard floor instead of carpet',
      'Bathroom has soft spots — subfloor has moisture damage under vinyl',
    ],
    process: [
      { step: 1, title: 'Subfloor assessment', description: 'The existing subfloor (concrete, chipboard, or floorboards) is checked for level, moisture, and structural soundness. Any variation greater than 3mm over 1.8m is addressed.' },
      { step: 2, title: 'Prepare the subfloor', description: 'Old floor covering is removed and disposed of. The subfloor is levelled with a self-levelling compound if needed, or high spots are ground down. Any squeaking floorboards are screwed firm.' },
      { step: 3, title: 'Lay underlay', description: 'Appropriate underlay is laid (foam underlay for laminate; acoustic underlay where noise transmission is a concern; DPM underlay on concrete subfloors).' },
      { step: 4, title: 'Install flooring', description: 'Flooring is laid with a consistent expansion gap around the perimeter. Boards are clicked or glued depending on product type. Cuts around door frames and obstacles are made precisely.' },
      { step: 5, title: 'Fit trims and transitions', description: 'Expansion gaps are covered by new or re-used skirting boards, or by Scotia beading. Transition strips are fitted at doorways and between floor levels.' },
      { step: 6, title: 'Clean and inspect', description: 'Floor is cleaned. The installation is inspected for even joints, correct expansion gaps, and secure transitions.' },
    ],
    toolsAndMaterials: {
      tools: ['pull bar and tapping block', 'jigsaw', 'utility knife', 'measuring tape', 'spacers', 'underlay cutter', 'self-levelling equipment'],
      materials: ['laminate or LVT boards', 'appropriate underlay', 'DPM membrane (for concrete)', 'Scotia beading or skirting', 'transition strips', 'self-levelling compound'],
    },
    safetyConsiderations: [
      'LVT and laminate must have a minimum expansion gap around all fixed objects — failure causes buckling in warm weather',
      'Use a damp-proof membrane underlay on concrete subfloors to prevent moisture rising into the flooring',
      'Check for asbestos in floor tiles on properties built before 1985 — do not disturb without specialist testing',
    ],
    costFactors: [
      { factor: 'Floor area (m²)', impact: 'Larger areas cost less per m² due to reduced setup time as a proportion of total job time' },
      { factor: 'Product specification', impact: 'Budget laminate (8mm, AC3 wear rating) vs. premium LVT or engineered wood costs significantly more per m²' },
      { factor: 'Subfloor condition', impact: 'Extensive levelling, removing old tiles, or treating damp adds time and material cost' },
      { factor: 'Room complexity', impact: 'Many obstacles, alcoves, and doorways increase cut waste and fitting time' },
      { factor: 'Underlay type', impact: 'Standard foam vs. acoustic or thermal underlay' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm supply-and-fit price per m² by product type]',
    lifespan: 'Laminate: 15–25 years (higher AC rating = longer). LVT: 20–25 years. Engineered wood: 25–30 years (can be sanded once or twice). Solid wood: 30–50+ years (can be sanded multiple times).',
    commonMistakes: [
      'Insufficient expansion gap around perimeter — boards buckle within a year in centrally heated properties',
      'Laying flooring over a damp concrete subfloor without a DPM — causes the floor to swell and joints to open',
      'Not squaring the starting row to the room — causes increasingly diagonal cuts at the opposite wall',
      'Using the wrong underlay for the subfloor type or product specification',
    ],
    diyVsPro: {
      diy: 'Laminate or click LVT in a simple rectangular room is manageable for a patient DIYer. Subfloor preparation, complex room shapes, and stair nosings are harder to get right.',
      pro: 'Professional fitting ensures the subfloor is correctly prepared, expansion gaps are consistent, and the finished floor performs as the manufacturer intends.',
    },
    faqs: [
      { question: 'What is the difference between laminate and LVT?', answer: 'Laminate has an HDF (wood fibre) core topped with a photographic layer and a clear wear layer. It cannot get wet. LVT (luxury vinyl tile) is 100% waterproof with a rigid or flexible PVC core — suitable for bathrooms, kitchens, and any moisture-prone area. LVT also tends to feel warmer and quieter underfoot.' },
      { question: 'Can hard flooring be fitted over underfloor heating?', answer: 'Yes, but product selection matters. Not all laminates are suitable for UFH. Engineered wood and LVT products designed for UFH use are the best choices. The maximum subfloor temperature for most products is 27°C.' },
      { question: 'Do skirting boards need to come off to fit flooring?', answer: 'The cleanest result comes from removing skirting boards, fitting the floor with a full expansion gap, and re-fitting the skirting. Fitting Scotia beading over an existing skirting is a quicker alternative but is visible as an additional profile.' },
      { question: 'Can you fit flooring in a bathroom?', answer: 'Yes — LVT (luxury vinyl tile) is fully waterproof and ideal for bathrooms. Laminate and wood are not recommended in wet areas as moisture causes them to swell and fail.' },
      { question: 'How long before I can walk on new flooring?', answer: 'Click laminate and LVT can usually be walked on immediately after fitting. Glued or floating floors may need 24 hours for adhesive to cure. Underfloor heating should be left off for 24–48 hours after installation.' },
    ],
    relatedServiceSlugs: ['painting-decorating', 'carpentry', 'tiling', 'landlord-services'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['floor fitting', 'floor laying', 'laminate fitting', 'LVT fitting', 'vinyl flooring', 'new floors', 'floor installation'],
  },

  {
    slug: 'tiling',
    title: 'Tiling',
    shortTitle: 'Tiling',
    category: 'interior',
    tagline: 'Bathroom and kitchen tiling fitted to last — straight lines, tight joints, perfect finish.',
    definition: 'Tiling is the application of ceramic, porcelain, or natural stone tiles to walls and floors using adhesive and grout. Quality tiling requires accurate planning, perfectly level setting-out lines, and consistent joint spacings — a well-tiled bathroom or kitchen splashback that lasts 20+ years without maintenance issues.',
    whoNeedsIt: 'Anyone renovating a bathroom or kitchen; landlords replacing cracked or mouldy tiling in rental properties; homeowners wanting a new kitchen splashback; and anyone dealing with grout that has failed, become permanently stained, or started allowing water ingress.',
    signsYouNeedIt: [
      'Grout is cracked, black with mould, or missing in places',
      'Tiles are cracked, chipped, or coming away from the wall',
      'Water is getting behind tiles (dark patches, bubbling plaster behind)',
      'You are fitting a new bathroom or kitchen',
      'Existing tiles are dated and reducing the appeal of the room',
      'Silicone at tile junctions has gone mouldy and is beyond cleaning',
    ],
    process: [
      { step: 1, title: 'Plan and set out', description: 'Tile size, layout, and pattern are planned. A horizontal datum line is established to ensure tiles are level from the start. Cut tiles are positioned at less-visible locations (floor level, inside corners).' },
      { step: 2, title: 'Prepare the surface', description: 'Old tiles are removed if necessary. Walls are checked for stability — loose plaster must be fixed before tiling. Plasterboard in wet areas is primed with a suitable waterproofing or tanking compound.' },
      { step: 3, title: 'Apply adhesive', description: 'Appropriate adhesive (flexible, fast-set, or waterproof grade depending on area) is combed onto the surface. Tiles are set with consistent spacers.' },
      { step: 4, title: 'Cut and fit', description: 'Border tiles are cut accurately with a tile cutter or angle grinder. Pipe holes and outlets are measured and cut cleanly.' },
      { step: 5, title: 'Grout', description: 'After adhesive has cured (typically 24 hours), grout is applied, worked into all joints, then cleaned off the tile face with a damp sponge.' },
      { step: 6, title: 'Seal and silicone', description: 'Movement joints at internal corners and floor/wall junctions are filled with colour-matched silicone rather than grout, preventing cracking from movement. Natural stone may be sealed.' },
    ],
    toolsAndMaterials: {
      tools: ['tile cutter', 'angle grinder with tile blade', 'notched trowel', 'grout float', 'tile spacers', 'spirit level', 'bucket and sponge', 'mixing paddle'],
      materials: ['ceramic or porcelain tiles', 'tile adhesive', 'grout', 'tile spacers', 'tile trim/edge strip', 'waterproof tanking compound', 'silicone sealant', 'grout sealer (for porous grouts)'],
    },
    safetyConsiderations: [
      'Always wear eye protection when cutting tiles — particularly with an angle grinder',
      'Wet rooms require a tanked (waterproofed) substrate before tiling — do not tile directly onto standard plasterboard in a shower enclosure',
      'Floors that will be wet require slip-rated tiles (minimum R9 rating for domestic wet areas)',
    ],
    costFactors: [
      { factor: 'Area (m²)', impact: 'Total wall and floor area to be tiled — the primary cost driver' },
      { factor: 'Tile size and format', impact: 'Large-format tiles (600×600mm or larger) require more precise subfloor prep and levelling clips; small mosaic tiles are labour-intensive to lay' },
      { factor: 'Tile quality and type', impact: 'Budget ceramic vs. premium porcelain or natural stone — affects material cost and cutting difficulty' },
      { factor: 'Pattern complexity', impact: 'Herringbone, brick bond, or diagonal patterns increase cut waste and fitting time' },
      { factor: 'Removal of old tiles', impact: 'Stripping existing tiles adds time and disposal cost' },
      { factor: 'Surface preparation', impact: 'Tanking, patching plaster, or levelling adds cost but is critical for longevity' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm supply-and-fit price per m² by tile type, and minimum call-out]',
    lifespan: 'Quality porcelain tiles last 20–30 years or more; ceramic tiles similar lifespan. Grout may need regrouting after 10–15 years in high-use wet areas. Silicone movement joints need replacing every 5–10 years.',
    commonMistakes: [
      'Using interior tile adhesive in a wet or shower area — the adhesive must be rated for immersion',
      'Grouting movement joints (internal corners) instead of using silicone — grout cracks here as the building moves',
      'Not using spacers — inconsistent joints look unprofessional and are impossible to correct once adhesive sets',
      'Using standard plasterboard as a tile substrate in a shower enclosure without a tanking membrane',
    ],
    diyVsPro: {
      diy: 'A simple kitchen splashback in a rectangular area is achievable. Shower enclosures and floor tiling with complex cuts require more skill and the right waterproofing preparation.',
      pro: 'A professional tiler ensures level setting-out, correct adhesive and waterproofing, and a result that genuinely lasts.',
    },
    faqs: [
      { question: 'Can you tile over existing tiles?', answer: 'In some circumstances yes — if the existing tiles are firmly adhered, flat, and in good condition. However, tiling over tiles increases the weight on the wall and raises the surface profile at edges. Removing old tiles and starting fresh gives a better and longer-lasting result.' },
      { question: 'What tiles are best for a bathroom floor?', answer: 'Porcelain tiles with a minimum R9 slip rating for wet areas. Matt porcelain is safer underfoot than polished; smaller formats with more grout lines also increase grip. LVT (luxury vinyl tile) is an excellent alternative if you prefer a warmer, softer underfoot feel.' },
      { question: 'How long before a tiled shower can be used?', answer: 'Tile adhesive should cure for at least 24 hours before grouting. Once grouted and siliconed, allow a further 24 hours before exposing the area to water. In practice, 48–72 hours before first use is a safe guideline.' },
      { question: 'Can you replace a single cracked tile?', answer: 'Yes, if a matching tile is available. A single tile can be carefully removed with a chisel and adhesive, the substrate checked, and a new tile set in. The challenge is finding a matching tile in the same colour and format — this is often only possible if spare tiles were kept from the original installation.' },
    ],
    relatedServiceSlugs: ['bathroom-repairs', 'silicone-sealing', 'kitchen-fitting', 'plastering'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['tile fitting', 'bathroom tiling', 'kitchen tiling', 'wall tiling', 'floor tiling', 'ceramic tiling', 'porcelain tiling'],
  },

  {
    slug: 'furniture-assembly',
    title: 'Furniture Assembly',
    shortTitle: 'Assembly',
    category: 'interior',
    tagline: 'Flat-pack built fast, built right — no wasted afternoon, no missing bolts.',
    definition: 'Furniture assembly is the professional build and installation of flat-pack and ready-to-assemble furniture from major retailers including IKEA, Argos, Wayfair, NEXT, and Amazon. A professional assembler works methodically, identifies the correct sequence, and uses the right tools to produce a stable, square, correctly fitted piece — faster and more reliably than most customers can manage themselves.',
    whoNeedsIt: 'Anyone who has bought furniture and wants it assembled without the frustration; people who are not confident with flat-pack instructions; those who need multiple pieces assembled in one visit; and businesses fitting out offices or hospitality premises.',
    signsYouNeedIt: [
      'You have bought flat-pack furniture but do not have the time or tools to build it',
      'A previous self-assembly attempt has resulted in a wobbly or incorrectly built piece',
      'You need multiple items assembled at once (e.g. a whole bedroom set)',
      'Elderly or mobility-impaired customers who cannot safely manage the physical demands of assembly',
      'Office or commercial fit-out requiring professional, accurate assembly',
    ],
    process: [
      { step: 1, title: 'Unpack and check', description: 'All parts are unpacked and checked against the parts list before assembly begins. Any missing or damaged items are identified at this stage.' },
      { step: 2, title: 'Stage assembly area', description: 'Space is cleared and the assembly sequence is planned before starting — the most common mistake in flat-pack assembly is building in the wrong order.' },
      { step: 3, title: 'Assemble systematically', description: 'Furniture is assembled following the manufacturer sequence, using the correct tools and correct torque on fittings — overtightening cam locks splits the board.' },
      { step: 4, title: 'Check and level', description: 'Finished item is checked for square and stability. Wall fixings (for items that must be secured to the wall) are drilled and fitted.' },
      { step: 5, title: 'Packaging disposal', description: 'Packaging is broken down and can be left for your collection or removed depending on the booking.' },
    ],
    toolsAndMaterials: {
      tools: ['electric screwdriver', 'Allen key set', 'rubber mallet', 'spirit level', 'measuring tape', 'drill (for wall fixings)'],
      materials: ['wall anchors and fixings (for wall-mounted items)', 'furniture felt pads'],
    },
    safetyConsiderations: [
      'Tall, heavy furniture (wardrobes, bookcases) must be fixed to the wall with the provided anti-tip strap — this is a safety requirement, not an optional extra, especially in homes with children',
      'IKEA PAX and similar wardrobe systems must have the top rail fixed to the wall for structural stability',
    ],
    costFactors: [
      { factor: 'Number of items', impact: 'More pieces in one visit reduces per-item cost — batch assembly is economical' },
      { factor: 'Complexity', impact: 'A simple bedside table takes 20 minutes; a large wardrobe system with sliding doors takes 3–4 hours' },
      { factor: 'Wall fixings required', impact: 'Items that need drilling into walls (wall-mounted storage, anti-tip straps) add time' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm hourly rate or per-item flat-pack pricing]',
    lifespan: 'Flat-pack furniture lifespan depends heavily on build quality — IKEA and similar products typically last 10–15 years with normal use if assembled correctly from the outset.',
    commonMistakes: [
      'Assembling panels in the wrong order so the back cannot be fitted without disassembling',
      'Over-tightening cam lock fittings — splits the chipboard and ruins the joint',
      'Not wall-fixing tall furniture — tip hazard, particularly for children',
      'Using the wrong size Allen key — strips the cam bolt head',
    ],
    diyVsPro: {
      diy: 'Possible for most flat-pack items, but time-consuming and error-prone without experience. Re-doing a wrongly assembled wardrobe is far more work than doing it right the first time.',
      pro: 'Faster, with a guaranteed square and stable result. Particularly valuable for complex systems, commercial fit-outs, or high-value items.',
    },
    faqs: [
      { question: 'Do you bring your own tools?', answer: 'Yes — El The Man brings all required tools including electric drivers and drills. You do not need to provide anything.' },
      { question: 'Can you dispose of the packaging?', answer: '[NEEDS CLIENT INPUT: confirm packaging disposal policy]' },
      { question: 'Do you assemble all brands?', answer: 'Yes — IKEA, Argos, Wayfair, NEXT, John Lewis, Amazon, Made.com, and any other flat-pack brand. We work from the manufacturer instructions.' },
      { question: 'What if a part is missing or damaged?', answer: 'We identify missing or damaged parts before starting and advise you on requesting replacements from the retailer. Most manufacturers will dispatch replacement parts quickly, often for free.' },
    ],
    relatedServiceSlugs: ['tv-mounting', 'shelving-installation', 'carpentry'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['flat-pack assembly', 'IKEA assembly', 'wardrobe assembly', 'furniture building', 'bed assembly', 'desk assembly'],
  },

  {
    slug: 'tv-mounting',
    title: 'TV Mounting',
    shortTitle: 'TV Mounting',
    category: 'interior',
    tagline: 'Wall-mounted TV, perfectly level, cables concealed — done in an hour.',
    definition: 'TV wall mounting is the professional installation of a flat-screen television onto a wall bracket, with the TV positioned at the correct viewing height and angle, all cables managed, and the wall made structurally sound for the weight. A clean, well-mounted TV transforms a room instantly.',
    whoNeedsIt: 'Homeowners who want a cleaner, more modern look without a TV stand; anyone who needs a TV mounted at a precise height for viewing comfort; people who want cables hidden for a tidy finish; and those who have bought a bracket but are unsure whether to fix into plasterboard, brick, or stud walls.',
    signsYouNeedIt: [
      'You have bought a new TV and want it on the wall',
      'Current TV stand is taking up floor space',
      'Cables are trailing across the floor or wall',
      'A previous bracket installation feels insecure',
      'You want to mount a TV above a fireplace or in an alcove',
    ],
    process: [
      { step: 1, title: 'Choose position', description: 'Ideal viewing height is established — eye level when seated, which for most living rooms is 100–120cm from floor to screen centre. The position is checked for stud locations and any hidden pipes or cables.' },
      { step: 2, title: 'Locate fixings', description: 'A stud finder identifies timber studs (the safest and strongest fixing), or appropriate wall anchors are selected for solid brick/block or plasterboard.' },
      { step: 3, title: 'Fit the bracket', description: 'The wall plate is drilled and fixed, checked for level. VESA fixings are attached to the rear of the TV.' },
      { step: 4, title: 'Mount and adjust', description: 'The TV is hung, the viewing angle and tilt adjusted, and the bracket is locked off.' },
      { step: 5, title: 'Cable management', description: 'HDMI, power, and other cables are routed through a wall channel or trunking, or managed neatly behind the TV for the cleanest finish.' },
    ],
    toolsAndMaterials: {
      tools: ['stud finder', 'drill', 'spirit level', 'measuring tape', 'cable detector'],
      materials: ['TV wall bracket (full-motion, tilt, or fixed)', 'appropriate fixings (timber screws, masonry anchors, or toggle bolts for plasterboard)', 'cable trunking or in-wall cable channel'],
    },
    safetyConsiderations: [
      'Always use a cable/pipe detector before drilling into any wall — water pipes and electrical cables run both horizontally and vertically',
      'In a stud-and-plasterboard wall, always fix into the timber studs — plasterboard alone cannot safely hold a large TV',
      'TVs over 40kg require double stud fixing or masonry wall fixing — check the bracket weight rating against the TV weight',
    ],
    costFactors: [
      { factor: 'TV size and weight', impact: 'Larger TVs require heavier-duty brackets and may require additional fixing points' },
      { factor: 'Wall type', impact: 'Stud walls, solid brick, and breeze block each require different drill bits and fixings' },
      { factor: 'Cable concealment', impact: 'Surface-run trunking is quick; in-wall cable routing through stud walls takes longer' },
      { factor: 'Bracket type', impact: 'Fixed bracket vs. tilt vs. full-motion (articulating arm) — more complex brackets take longer to set up' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm flat price for standard TV mount, with add-ons for cable concealment]',
    lifespan: 'A correctly fitted TV bracket lasts indefinitely. Periodically check that mounting screws remain tight, particularly with full-motion articulating brackets that carry more dynamic load.',
    commonMistakes: [
      'Fixing into plasterboard only with no stud or masonry fixing — the TV will fall eventually',
      'Mounting the TV too high — the most common complaint is neck strain from looking up',
      'Not checking for pipes or cables before drilling',
      'Using the wrong VESA pattern — the TV mounting holes do not align with the bracket',
    ],
    diyVsPro: {
      diy: 'Mounting a small TV into a brick wall with a fixed bracket is manageable. Stud walls, large TVs, in-wall cabling, or any uncertainty about what is behind the wall warrants professional help.',
      pro: 'Avoids the risk of a TV falling, damage from drilling into a cable or pipe, and the frustration of a bracket that is not quite level or straight.',
    },
    faqs: [
      { question: 'Can you mount a TV above a fireplace?', answer: 'Yes, though there are considerations. Heat from a working fireplace can damage electronics over time — electric fires are less of an issue than wood burners or gas fires. The main challenge is cable routing: getting cables from the TV position down to the media equipment requires concealment to look neat. El The Man can advise on the best approach.' },
      { question: 'Can you hide the cables in the wall?', answer: 'In a standard stud-and-plasterboard wall, cables can be routed inside the wall for a completely clean look. In a solid masonry wall, surface-run cable trunking (painted to match the wall) is the standard approach. Both look clean and professional when done properly.' },
      { question: 'What if my TV does not have a VESA mounting pattern?', answer: 'Nearly all modern flat-screen TVs have a VESA-standard mounting pattern on the rear. Some ultra-thin TVs (e.g. certain Samsung Frame models) use a proprietary bracket. El The Man will confirm compatibility before starting.' },
      { question: 'How long does TV mounting take?', answer: 'A standard mount with surface cable management takes 45–90 minutes. In-wall cable routing adds 1–2 hours depending on wall construction.' },
    ],
    relatedServiceSlugs: ['shelving-installation', 'furniture-assembly', 'picture-mirror-hanging'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['TV wall mount', 'television mounting', 'wall-mounted TV', 'TV installation', 'TV bracket fitting'],
  },

  {
    slug: 'pressure-washing',
    title: 'Pressure Washing',
    shortTitle: 'Jet Washing',
    category: 'exterior',
    tagline: 'Driveways, patios, and render restored to like-new in hours.',
    definition: 'Pressure washing (also known as jet washing or power washing) uses high-pressure water to remove dirt, algae, moss, lichen, oil stains, and general grime from hard exterior surfaces. A professional pressure washing service uses the correct pressure, technique, and (where appropriate) specialist cleaning agents for each surface type — getting results impossible to achieve with a domestic machine.',
    whoNeedsIt: 'Homeowners whose driveway, patio, or decking is green, black, or heavily stained; landlords and letting agents cleaning up a void property exterior; commercial premises maintaining a clean, presentable front-of-house; and anyone preparing a property for sale and wanting instant kerb appeal.',
    signsYouNeedIt: [
      'Driveway or patio is slippery with algae or moss growth',
      'Block paving has weeds growing in the joints and appears grey rather than the original colour',
      'Render or brick exterior is stained green or black',
      'Decking is slippery and has turned grey',
      'Paths and steps present a slip hazard after rainfall',
      'The property generally looks neglected from the street',
    ],
    process: [
      { step: 1, title: 'Site assessment', description: 'Surface type is identified — concrete, block paving, natural stone, render, decking, or brick. Appropriate pressure and nozzle are selected. Nearby plants and vehicles are protected.' },
      { step: 2, title: 'Pre-treatment', description: 'For heavy algae, moss, or lichen growth, a biocidal or specialist cleaning agent may be applied and left to dwell before washing.' },
      { step: 3, title: 'Pressure washing', description: 'A rotary surface cleaner is used for flat paved surfaces to ensure even cleaning without streaks. Walls, render, and vertical surfaces use a lower-pressure fan nozzle.' },
      { step: 4, title: 'Detail clean', description: 'Edges, corners, and areas around obstacles are cleaned with a hand lance. Block paving joints are cleaned of weeds and debris.' },
      { step: 5, title: 'Rinse and check', description: 'The entire surface is rinsed clear and inspected for any areas needing a second pass.' },
    ],
    toolsAndMaterials: {
      tools: ['professional hot or cold pressure washer (2000–3000 PSI)', 'rotary surface cleaner', 'fan nozzle', 'turbo nozzle', 'extension lance', 'detergent injector'],
      materials: ['biocidal surface cleaner', 'patio/driveway cleaning agent', 'weed killer for paving joints'],
    },
    safetyConsiderations: [
      'High-pressure water causes serious injury if directed at skin — always wear appropriate PPE',
      'Reduce pressure when cleaning soft surfaces (wood decking, painted surfaces, render) — too much pressure causes damage',
      'Be aware of surface water drainage — cleaning agents should not enter watercourses',
      'Wet surfaces are slippery immediately after washing — restrict access until dry',
    ],
    costFactors: [
      { factor: 'Surface area (m²)', impact: 'The primary driver — larger driveways and patio areas cost more' },
      { factor: 'Surface type', impact: 'Block paving takes longer than poured concrete; render and walls add to the job scope' },
      { factor: 'Level of contamination', impact: 'Heavy moss, oil staining, or paint will require pre-treatment or multiple passes' },
      { factor: 'Access', impact: 'Difficult access (side passages, narrow gates) or the need to move vehicles adds time' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm pricing per m² or flat-rate per service type]',
    lifespan: 'Algae and moss begin to return within 6–18 months, sooner in shaded areas. Applying a sealant after cleaning can extend the clean period significantly. Annual or biennial cleaning is typical maintenance.',
    commonMistakes: [
      'Using too high a pressure on soft or porous surfaces — damages render, wood, and natural stone',
      'Cleaning without pre-treatment on heavy moss — just moves it around rather than killing it',
      'Cleaning a block paved driveway without re-sanding the joints afterwards — joints wash out and weeds return quickly',
    ],
    diyVsPro: {
      diy: 'A hire-shop or domestic pressure washer will make an improvement on a lightly soiled surface. Professional equipment produces significantly better results on heavy staining, render, and large areas.',
      pro: 'Professional equipment runs at higher pressure and flow rate, covers large areas efficiently, and gets into grout lines and edges that domestic machines cannot match.',
    },
    faqs: [
      { question: 'Does pressure washing damage block paving joints?', answer: 'It can, if the wrong technique is used. A rotary surface cleaner (which directs water downward rather than at an angle) minimises joint erosion. After cleaning, kiln-dried sand should be brushed into the joints to restore them.' },
      { question: 'Can you pressure wash render?', answer: 'Yes — with a reduced pressure fan nozzle. High pressure on render can blast off the surface coating. A specialist biocidal render cleaner is often more effective than pressure alone for render staining.' },
      { question: 'Will pressure washing clean oil stains from a driveway?', answer: 'Pressure washing alone will reduce oil stains significantly. For heavy or long-standing oil contamination, a specialist degreasant pre-treatment is needed before washing for the best result.' },
      { question: 'How often should I have the driveway pressure washed?', answer: 'Once a year in most cases — ideally in spring to remove winter grime. Shaded areas in damp climates like the West Midlands may need twice-yearly treatment to keep on top of algae.' },
    ],
    relatedServiceSlugs: ['fence-repairs', 'decking', 'garden-maintenance', 'gutter-cleaning'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['jet washing', 'power washing', 'driveway cleaning', 'patio cleaning', 'render cleaning', 'surface cleaning'],
  },

  {
    slug: 'fence-repairs',
    title: 'Fence Repairs & Replacement',
    shortTitle: 'Fencing',
    category: 'exterior',
    tagline: 'Storm damage or rotted panels — fencing fixed properly to last.',
    definition: 'Fence repair and replacement covers replacing broken or rotted fence panels, renewing fence posts that have failed at ground level, fitting new gravel boards to extend panel life, and installing complete new fence runs. Well-maintained fencing provides security, privacy, and a defined boundary that protects the value of your property.',
    whoNeedsIt: 'Homeowners whose fence was damaged by wind or has simply rotted through; landlords maintaining rental property boundaries; anyone installing a new fence for the first time; and those who want to upgrade a tired or insecure boundary before selling.',
    signsYouNeedIt: [
      'Fence panels are cracked, broken, or missing entirely',
      'Posts are leaning, wobbly, or have snapped at ground level',
      'Panel boards are rotten — soft to the touch or crumbling',
      'Gravel boards at the bottom of panels are damp and soft',
      'Fence was damaged in a storm and is lying on the ground',
      'Your boundary is not clearly defined and is causing a dispute with a neighbour',
    ],
    process: [
      { step: 1, title: 'Assess and quote', description: 'Number and condition of panels and posts are assessed. Decision made on whether repair (replacing individual panels) or full replacement is more cost-effective.' },
      { step: 2, title: 'Remove old fence', description: 'Broken or rotten panels are removed and taken away for disposal. Old concrete or rotted wooden post bases are broken out where posts need replacing.' },
      { step: 3, title: 'Set new posts', description: 'New pressure-treated timber or concrete posts are positioned at correct spacing (typically 1.83m panel width + post width), set plumb, and concreted in. Posts must be left to set before panels are fitted.' },
      { step: 4, title: 'Fit panels and gravel boards', description: 'Gravel boards are fitted at the base of each bay to keep panel bases clear of soil. Panels are fitted and fixed — with screws rather than nails for a more secure and rattle-free installation.' },
      { step: 5, title: 'Post caps and treatment', description: 'Post caps are fitted to prevent water ingress at the tops of posts. Bare timber is treated with a wood preservative.' },
    ],
    toolsAndMaterials: {
      tools: ['post hole digger', 'concrete mixer or pre-mix bags', 'spirit level', 'saw', 'drill', 'post rammer', 'fence staple gun'],
      materials: ['pressure-treated timber or concrete fence posts', 'fence panels (featheredge, lap, or closeboard)', 'gravel boards', 'post caps', 'concrete', 'wood preservative', 'screws'],
    },
    safetyConsiderations: [
      'Identify underground services (gas, electric, water) before digging post holes — call 0800 096 1000 (Dial Before You Dig) or use a CAT scanner',
      'Concrete post bases must be allowed to cure fully (48–72 hours minimum) before panels are fitted in windy conditions',
      'Fence height restrictions may apply for front garden fences (2m maximum for rear gardens, 1m for front gardens in most cases) — check with the local authority',
    ],
    costFactors: [
      { factor: 'Number of panels', impact: 'The primary driver — each panel, post, and gravel board set is priced per bay' },
      { factor: 'Panel type', impact: 'Waney-lap panels are cheaper; closeboard or premium panels cost more' },
      { factor: 'Post material', impact: 'Timber posts (less expensive) vs. concrete posts (longer-lasting but higher cost)' },
      { factor: 'Post removal', impact: 'Removing old concrete bases or snapped posts is labour-intensive and adds cost' },
      { factor: 'Ground conditions', impact: 'Rocky or heavily compacted ground makes post-hole digging harder' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm per-panel supply-and-fit price range, and separate post replacement pricing]',
    lifespan: 'Pressure-treated softwood panels: 10–15 years. Hardwood closeboard: 15–20 years. Concrete posts: 25+ years. Timber posts: 10–15 years depending on soil drainage.',
    commonMistakes: [
      'Using nails instead of screws to fit panels — nails work loose over time, causing panels to rattle in wind and eventually fall',
      'Not fitting gravel boards — panels sitting on damp soil rot from the bottom within 3–5 years',
      'Setting posts without concrete — posts in soft ground move within one or two winters',
      'Fitting panels before posts have cured — wind loading before the concrete has set pulls the posts out of alignment',
    ],
    diyVsPro: {
      diy: 'Replacing a single panel without needing a new post is manageable for a competent DIYer with a drill and step ladder. Full runs, post replacement, or awkward ground conditions are better left to a professional.',
      pro: 'Correct post spacing, plumb posts in concrete, and properly fitted gravel boards ensure the fence lasts its expected lifespan rather than failing in two to three years.',
    },
    faqs: [
      { question: 'Which side of the fence belongs to me?', answer: 'The deeds to your property should specify which boundaries are your responsibility. As a rule of thumb, fence posts are usually on the owner\'s side. However, this varies and deeds should always be checked before starting any work. If in doubt, it is worth speaking to a solicitor or the Land Registry.' },
      { question: 'Who is responsible for repairing a fence after a storm?', answer: 'The owner of the fence boundary is responsible for maintenance and storm repairs. Check your deeds and home insurance — many policies include cover for storm damage to fences and garden structures.' },
      { question: 'How long do fence posts last?', answer: 'Concrete posts last 25+ years. Pressure-treated softwood posts last 10–15 years if correctly installed with good drainage. Timber posts sitting in wet soil will rot in 5–7 years.' },
      { question: 'Can you install a fence on a slope?', answer: 'Yes — either by stepping the fence (each panel is level but steps down like stairs) or by raking the fence to follow the slope. The right approach depends on the degree of slope and the fence style.' },
    ],
    relatedServiceSlugs: ['decking', 'garden-maintenance', 'pressure-washing', 'shed-repairs'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['fence replacement', 'fence panel replacement', 'garden fencing', 'fence post replacement', 'fence installation', 'garden boundary'],
  },

  {
    slug: 'emergency-repairs',
    title: 'Emergency Repairs',
    shortTitle: 'Emergency',
    category: 'emergency',
    tagline: 'Same-day response when something goes wrong — we will get it sorted.',
    definition: 'Emergency repairs cover urgent, same-day handyman interventions for problems that cannot wait for a scheduled appointment: forced or broken doors, blown-out windows, storm damage, security boarding, water ingress from burst pipes (isolation), and other immediate threats to property security, weatherproofing, or safety.',
    whoNeedsIt: 'Homeowners facing a sudden property emergency; landlords whose tenants report urgent repairs; commercial premises with security or weather-exposure issues; and anyone who needs a problem stabilised or made safe today rather than next week.',
    signsYouNeedIt: [
      'Door or window has been forced open or broken',
      'Storm damage has left part of the property exposed to weather',
      'A lock has failed and the property cannot be secured',
      'Water is getting in through a structural breach',
      'There has been a break-in and the property needs to be secured',
      'A fence or gate has collapsed onto a car or access route',
    ],
    process: [
      { step: 1, title: 'Call and triage', description: 'Contact El The Man on +44 7861 203087 and describe the emergency. We will advise on immediate actions and confirm availability for same-day attendance.' },
      { step: 2, title: 'Attendance', description: 'We arrive as quickly as possible with tools and common materials to address the most likely emergency scenarios.' },
      { step: 3, title: 'Make safe', description: 'The immediate threat is addressed first — securing an entry point, boarding a broken window, isolating water, or stabilising a structural element.' },
      { step: 4, title: 'Assess and repair', description: 'Once safe, the extent of damage is assessed and a permanent or longer-term repair is carried out where possible in the same visit.' },
      { step: 5, title: 'Document', description: 'For insurance purposes, we can document the damage and the repair carried out — useful for making a claim.' },
    ],
    toolsAndMaterials: {
      tools: ['full general handyman toolkit', 'boarding materials', 'drill', 'saw', 'security fixings'],
      materials: ['boarding timber', 'heavy-duty locks', 'hinges', 'weatherproof tape', 'expanding foam for emergency sealing'],
    },
    safetyConsiderations: [
      'If the property has been burgled, do not enter until the police have attended and confirmed it is safe',
      'Water ingress from a burst pipe — turn off the stop tap first, then call for repair',
      'Storm damage to a roof — call a roofing specialist for structural roof damage; a handyman can address broken windows, fences, and garden structures',
    ],
    costFactors: [
      { factor: 'Urgency / time of call', impact: 'Same-day emergency call-outs may carry a premium over scheduled work' },
      { factor: 'Scope of work', impact: 'Boarding a window is a quick job; fitting a new door and frame after a break-in is a larger repair' },
      { factor: 'Materials required', impact: 'Emergency stock of common materials — boarding, locks, fixings — is carried, but unusual requirements may add cost' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm emergency call-out rate and whether same-day / out-of-hours premium applies]',
    lifespan: 'Emergency repairs are often temporary measures — boarding, for example, is meant to be replaced with a permanent repair within days. El The Man can return to carry out the permanent repair once materials are sourced.',
    commonMistakes: [
      'Not photographing damage before boarding or repair — evidence is needed for insurance claims',
      'Using inadequate fixings for boarding a forced entry point — a light board with small screws will not deter a determined intruder',
    ],
    diyVsPro: {
      diy: 'Temporary measures (propping a door closed, emergency sealant) may be necessary while waiting for professional help. Permanent repairs to security-critical elements should always be done professionally.',
      pro: 'Ensures the property is correctly secured, legally compliant (fire doors, security standards), and safe — not just temporarily fixed.',
    },
    faqs: [
      { question: 'How quickly can you attend an emergency?', answer: '[NEEDS CLIENT INPUT: confirm typical response times for Walsall area emergency call-outs]' },
      { question: 'Do you cover emergency call-outs on weekends?', answer: '[NEEDS CLIENT INPUT: confirm hours of availability for emergency work]' },
      { question: 'What counts as an emergency repair?', answer: 'Anything that leaves the property insecure (broken locks, forced entry), exposed to weather (broken windows, storm damage), or presents an immediate safety hazard (trip hazards from collapsed structures, unstable fencing blocking access).' },
      { question: 'Can you help after a break-in?', answer: 'Yes — securing the property after a break-in is one of the most common emergency call-outs. We can board broken windows, replace a damaged door, fit a new lock, and make the property secure while permanent repairs are arranged.' },
    ],
    relatedServiceSlugs: ['door-fitting', 'lock-changes', 'window-repairs', 'landlord-services'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['emergency handyman', 'same-day repairs', 'urgent repairs', 'emergency call-out', 'property emergency'],
  },

  {
    slug: 'landlord-services',
    title: 'Landlord Services',
    shortTitle: 'Landlord',
    category: 'commercial',
    tagline: 'End-of-tenancy repairs, void work, and rolling maintenance — one reliable contact.',
    definition: 'Landlord handyman services cover all aspects of maintaining, repairing, and turning around rental properties: end-of-tenancy redecorations, void property maintenance, lock changes between tenants, minor plumbing and electrical, and periodic inspection follow-up repairs. A reliable handyman who understands landlord needs and turnaround timescales is one of the most valuable relationships a landlord or letting agent can have.',
    whoNeedsIt: 'Private landlords managing buy-to-let properties in Walsall and the West Midlands; letting agents coordinating maintenance across a portfolio; housing associations requiring responsive property maintenance; and property investors managing end-of-tenancy returns.',
    signsYouNeedIt: [
      'A tenancy has ended and the property needs refreshing before re-letting',
      'Tenant has reported a maintenance issue and you need a reliable, cost-effective fix',
      'Lock change is needed between tenancies for security',
      'Property has been vacant and requires void maintenance to keep it lettable standard',
      'Inspection report has flagged repairs needed for compliance',
      'You manage multiple properties and need a single, trusted contractor for general maintenance',
    ],
    process: [
      { step: 1, title: 'Schedule a visit', description: 'We attend the property (with or without a tenant present) to assess the scope of work required.' },
      { step: 2, title: 'Scope and quote', description: 'A clear schedule of works is provided — useful for deposit dispute documentation and insurance purposes.' },
      { step: 3, title: 'Complete works', description: 'All scheduled works are completed to a professional standard. El The Man can liaise directly with tenants where access is required.' },
      { step: 4, title: 'Sign-off and report', description: 'Works are reported on completion, with before-and-after photographs available on request.' },
    ],
    toolsAndMaterials: {
      tools: ['full general handyman toolkit'],
      materials: ['materials sourced per job specification'],
    },
    safetyConsiderations: [
      'Landlords must ensure gas appliances are serviced annually by a Gas Safe registered engineer — this is a legal requirement. El The Man does not provide gas safety work but can coordinate with registered engineers',
      'Electrical Installation Condition Reports (EICR) are a legal requirement every 5 years for rental properties in England — El The Man can assist with minor electrical snagging but not EICR production',
      'Smoke and CO alarms: landlords must ensure these are present and functional at the start of each tenancy',
    ],
    costFactors: [
      { factor: 'Scope of works', impact: 'A single lock change is priced very differently from a full end-of-tenancy redecoration' },
      { factor: 'Volume', impact: 'Landlords with multiple properties or frequent call-outs may benefit from a maintenance agreement at a preferential rate' },
      { factor: 'Urgency', impact: 'Planned void works scheduled in advance allow more competitive pricing than same-day reactive call-outs' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm whether preferential landlord rates or maintenance contracts are available]',
    lifespan: 'Rental properties typically need a full redecoration and flooring refresh every 5–7 years with quality tenants, more frequently with wear and damage.',
    commonMistakes: [
      'Photographing only at the start of a tenancy — thorough check-in AND check-out inventories are essential for deposit deductions',
      'Using low-quality paint or flooring in rental properties — budget materials require replacement sooner and cost more over time',
      'Not changing locks between tenancies — a key risk for security and insurance',
    ],
    diyVsPro: {
      diy: 'Not recommended for landlords with multiple properties — time and professional standards are both critical in a commercial context.',
      pro: 'Reliable, documented repairs protect your deposit deductions, meet compliance requirements, and keep your rental property competitive in the local market.',
    },
    faqs: [
      { question: 'Can you work directly with tenants for access?', answer: 'Yes — with the landlord\'s permission, El The Man can coordinate directly with tenants to arrange access and carry out repairs, keeping the landlord updated.' },
      { question: 'Do you provide before-and-after photos?', answer: '[NEEDS CLIENT INPUT: confirm documentation service]' },
      { question: 'Can I get preferential rates for multiple properties?', answer: '[NEEDS CLIENT INPUT: confirm maintenance contract / volume pricing structure]' },
      { question: 'What legal repairs are landlords responsible for?', answer: 'Under the Landlord and Tenant Act 1985 and the Homes (Fitness for Human Habitation) Act 2018, landlords must maintain the structure and exterior, heating, hot water, and sanitation. They must respond to hazards within reasonable timeframes. El The Man can handle the general building and maintenance aspects of compliance.' },
    ],
    relatedServiceSlugs: ['painting-decorating', 'flooring', 'lock-changes', 'silicone-sealing', 'minor-plumbing', 'commercial-handyman'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['landlord maintenance', 'rental property repairs', 'buy-to-let maintenance', 'void property repairs', 'end-of-tenancy repairs', 'letting agent handyman'],
  },

  {
    slug: 'silicone-sealing',
    title: 'Silicone Sealing',
    shortTitle: 'Silicone',
    category: 'maintenance',
    tagline: 'Clean, mould-free seals in bathrooms and kitchens — applied properly the first time.',
    definition: 'Silicone sealing (also called caulking or mastic sealing) is the application of sanitary-grade silicone sealant to the movement joints around baths, shower trays, shower enclosures, basins, and kitchen worktops. Proper silicone work requires complete removal of old sealant, thorough surface preparation, and a clean, consistent bead — poorly applied silicone fails within months and allows water to penetrate behind tiles and fittings.',
    whoNeedsIt: 'Homeowners with mouldy, cracked, or lifting bath or shower silicone; landlords restoring bathrooms between tenancies; anyone who has tried to apply silicone themselves and ended up with a messy result; and new installation where the finish matters.',
    signsYouNeedIt: [
      'Silicone around the bath or shower is black with mould',
      'Silicone is cracked, lifting, or pulling away from the surface',
      'Water is getting behind the bath or shower tray — dark patches or mould on the wall behind',
      'Previous silicone application looks messy or uneven',
      'Silicone has simply hardened and shrunk after many years',
    ],
    process: [
      { step: 1, title: 'Remove old silicone', description: 'All existing silicone is removed completely using a silicone remover and plastic scraper. No new silicone adheres permanently over old — this step cannot be skipped.' },
      { step: 2, title: 'Clean and degrease', description: 'The joint and surrounding surfaces are cleaned with isopropyl alcohol or specialist primer/cleaner to remove soap residue, grease, and mould spores.' },
      { step: 3, title: 'Mask joints', description: 'Masking tape is applied to both sides of the joint to define a clean, straight edge.' },
      { step: 4, title: 'Apply silicone', description: 'A consistent bead of sanitary-grade, mould-resistant silicone is applied in one smooth pass. A bath is filled with water before sealing — this expands it to its loaded position and prevents the silicone from tearing when the bath is used.' },
      { step: 5, title: 'Smooth and de-mask', description: 'The bead is tooled smooth with a wetted finger or profiling tool. Masking tape is removed before the silicone begins to skin.' },
      { step: 6, title: 'Cure', description: 'Silicone requires 24 hours to cure before the bath or shower is used.' },
    ],
    toolsAndMaterials: {
      tools: ['caulking gun', 'silicone remover tool', 'plastic scraper', 'profiling tool or wet finger', 'masking tape'],
      materials: ['sanitary-grade mould-resistant silicone sealant', 'silicone remover spray', 'isopropyl alcohol or cleaning primer'],
    },
    safetyConsiderations: [
      'Ensure adequate ventilation when using silicone remover — fumes can be strong in an enclosed bathroom',
      'Allow the full 24-hour cure time before exposing to water — premature contact compromises adhesion',
    ],
    costFactors: [
      { factor: 'Number of areas', impact: 'Bath only, shower only, or combined bathroom with basin joints — each adds to the total' },
      { factor: 'Condition of existing silicone', impact: 'Heavily moulded or deep-set silicone takes longer to fully remove' },
      { factor: 'Access', impact: 'Awkward access around shower enclosure panels or freestanding baths adds time' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm flat price or per-area pricing for silicone sealing]',
    lifespan: 'Quality sanitary silicone lasts 5–10 years in a regularly used bathroom. Mould-resistant formulations last longer. Using the bath heavily or with overly alkaline cleaners can shorten this.',
    commonMistakes: [
      'Applying new silicone over old — the new sealant will not bond and will peel within weeks',
      'Not filling the bath before sealing — when loaded with water, the bath drops, tearing the silicone bead',
      'Removing the masking tape after the silicone has begun to set — this drags the finished surface',
    ],
    diyVsPro: {
      diy: 'Silicone is a DIY task that looks simple but consistently produces poor results without practice. The most common outcome is a messy bead that lasts 6–12 months.',
      pro: 'A clean, even bead applied over correctly prepared surfaces lasts years longer and looks significantly better.',
    },
    faqs: [
      { question: 'How long does silicone sealant last?', answer: 'Quality sanitary silicone in a well-ventilated bathroom lasts 5–10 years. Signs it needs replacing: visible mould that does not clean off, cracking, lifting, or gaps appearing at the edges.' },
      { question: 'Can mouldy silicone be cleaned or does it need replacing?', answer: 'Surface mould can be treated with a bleach-based mould remover, but mould that has penetrated the silicone body cannot be cleaned out. Once mould is embedded, replacement is the only long-term solution.' },
      { question: 'Why does my new silicone keep going mouldy?', answer: 'Mould grows on silicone in humid environments when ventilation is inadequate. Using a mould-resistant sanitary silicone, regularly cleaning the area, running the extractor fan, and opening the window helps significantly. If mould returns rapidly, check that the bathroom extractor fan is functioning properly.' },
    ],
    relatedServiceSlugs: ['bathroom-repairs', 'tiling', 'minor-plumbing', 'landlord-services'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['caulking', 'bath sealing', 'shower sealing', 'mastic sealing', 're-sealing', 'silicone replacement'],
  },

  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning & Clearing',
    shortTitle: 'Gutters',
    category: 'exterior',
    tagline: 'Clear gutters prevent leaks, damp, and costly structural repairs.',
    definition: 'Gutter cleaning is the removal of leaf debris, moss, dirt, and blockages from guttering, downpipes, and gutter outlets. Blocked gutters overflow silently, directing water against fascias, soffits, and the building\'s external wall — the leading cause of penetrating damp in UK homes. Annual clearing is the most cost-effective property maintenance habit.',
    whoNeedsIt: 'All homeowners and property managers — every property with gutters needs clearing at least annually. Particularly urgent after autumn leaf fall, after storms, or if you notice water cascading over the gutter edge or staining the external wall.',
    signsYouNeedIt: [
      'Gutters overflow during rainfall, with water running down the exterior wall',
      'Damp patches appearing on interior walls near the eaves',
      'Visible vegetation growing in gutters',
      'External wall staining beneath the gutter run',
      'Gutters are sagging in the middle — a sign of accumulated debris weight',
      'It has been more than 12 months since the gutters were last cleared',
    ],
    process: [
      { step: 1, title: 'Ladder safety setup', description: 'A stable, correctly-footed ladder is positioned. Never work alone on a ladder — proper ladder safety observed throughout.' },
      { step: 2, title: 'Clear gutters', description: 'Leaf matter and debris are scooped out by hand or with a gutter scoop, working from the far end towards the downpipe outlet.' },
      { step: 3, title: 'Flush with water', description: 'A hose or gutter-clearing attachment is used to flush the gutter towards the downpipe, confirming flow and identifying any persistent blockages.' },
      { step: 4, title: 'Clear downpipes', description: 'Downpipes are checked and cleared. A rodded system or high-pressure flush can shift a stubborn blockage.' },
      { step: 5, title: 'Check joints and brackets', description: 'Gutter joints, stop ends, and brackets are checked for leaks, cracks, or looseness. Any significant defects are reported so repairs can be scheduled.' },
    ],
    toolsAndMaterials: {
      tools: ['extending ladder', 'ladder standoff (stay)', 'gutter scoop', 'garden hose with gutter attachment', 'bucket'],
      materials: ['gutter sealant (for minor joint repairs)'],
    },
    safetyConsiderations: [
      'Ladder safety is the primary risk — always use a correctly-footed ladder with a standoff, on firm, level ground',
      'Do not overreach from a ladder — reposition rather than stretch',
      'Wet leaves and debris are heavy — use a bucket rather than dropping debris below',
    ],
    costFactors: [
      { factor: 'Property height', impact: 'Single-storey is straightforward; two and three storey requires longer ladders and more time' },
      { factor: 'Roof perimeter length', impact: 'Larger properties have more gutter run to clear' },
      { factor: 'Extent of blockage', impact: 'Heavy debris or a stubborn downpipe blockage takes more time' },
      { factor: 'Gutter condition', impact: 'If joint repairs or bracket replacements are needed, this adds to the cost' },
    ],
    costRangeNote: '[NEEDS CLIENT INPUT: confirm per-property price range by property type/storey count]',
    lifespan: 'Gutters should be cleared at minimum once per year — twice yearly (spring and autumn) for properties under or near large deciduous trees.',
    commonMistakes: [
      'Clearing only the visible part of the gutter without checking the downpipe — a blocked downpipe means the gutter will re-fill with the first rainfall',
      'Neglecting gutter clearing for several years — debris compacts and begins to support plant growth, making clearing harder and heavier',
    ],
    diyVsPro: {
      diy: 'Possible for a confident DIYer with a stable ladder on a single-storey property. Two-storey work significantly increases fall risk.',
      pro: 'Safer and faster — and a professional can spot developing gutter joint or fascia issues before they become expensive repairs.',
    },
    faqs: [
      { question: 'How often should gutters be cleaned?', answer: 'Once per year minimum — ideally after leaf fall in autumn (November/December in the West Midlands). Properties with large trees overhead or in shaded locations may need bi-annual clearing.' },
      { question: 'What happens if I ignore blocked gutters?', answer: 'Overflowing gutters direct water against the fascia board, soffit, and external wall. Over time this causes fascia and soffit rot, penetrating damp in the wall cavity, and in extreme cases damage to the foundation. Repairing all this costs far more than regular gutter maintenance.' },
      { question: 'Can you repair a leaking gutter joint at the same time?', answer: 'Yes — minor joint sealant repairs and loose bracket refixing can usually be done during the same visit. Larger issues such as a cracked or sagging gutter section are quoted separately.' },
      { question: 'Do you work on commercial properties?', answer: 'Yes — El The Man provides gutter clearing for commercial properties, schools, churches, and multi-storey premises. Access requirements for larger or taller buildings are discussed at quotation stage.' },
    ],
    relatedServiceSlugs: ['pressure-washing', 'fence-repairs', 'shed-repairs', 'garden-maintenance'],
    schemaServiceType: 'HomeAndConstructionBusiness',
    synonyms: ['gutter clearing', 'gutter unblocking', 'fascia maintenance', 'downpipe clearing', 'roof gutter cleaning'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getRelatedServices(slug: string): ServiceData[] {
  const service = getServiceBySlug(slug)
  if (!service) return []
  return service.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined)
    .slice(0, 4)
}

export function getServicesByCategory(category: ServiceData['category']): ServiceData[] {
  return SERVICES.filter((s) => s.category === category)
}

export const SERVICE_CATEGORIES = {
  interior: { label: 'Interior', icon: '🏠', description: 'Painting, carpentry, flooring, tiling, and all interior fitting work' },
  exterior: { label: 'Exterior', icon: '🏡', description: 'Fencing, decking, pressure washing, garden maintenance, and outdoor repairs' },
  maintenance: { label: 'Maintenance', icon: '🔧', description: 'Bathrooms, plumbing, electrical, locks, and ongoing property maintenance' },
  emergency: { label: 'Emergency', icon: '🚨', description: 'Same-day response for urgent property problems that cannot wait' },
  commercial: { label: 'Commercial', icon: '🏢', description: 'Landlord services, commercial handyman, and maintenance contracts' },
} as const
