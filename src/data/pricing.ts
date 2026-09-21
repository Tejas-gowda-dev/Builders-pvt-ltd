export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  ratePerSqFt: number; // e.g. 2400 (0 for custom)
  rateDisplay: string; // "₹2,400 / sq.ft" or "Custom as per Client"
  pricingType: 'per_sqft' | 'package' | 'custom';
  minArea?: number;
  highlightText: string;
  image: string; // Curated architectural / pricing image
  deliverables: string[]; // INCLUDED SERVICES
  projectSummary: string[]; // Project summary points / material scope
  materialsIncluded?: string[]; // Fallback / alias
  popular?: boolean;
  isCustom?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic-package',
    name: 'BASIC PACKAGE',
    badge: 'Essential Build',
    subtitle: 'Standard residential construction with high-strength RCC foundation & durable finishes',
    ratePerSqFt: 1950,
    rateDisplay: '₹1,950 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 800,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Solid foundation, certified TMT reinforcement, and weather-proof exterior with standard handover.',
    deliverables: [
      'RCC framed structure with isolated column footings',
      'Solid concrete block masonry (6" exterior, 4" interior)',
      'Granite kitchen counter slab with single-bowl stainless sink',
      'Cera / Hindware white sanitaryware & concealed CPVC piping',
      'Vitrified tile flooring (2ft × 2ft) across all rooms',
      'Asian Paints Tractor Emulsion interior & weather-shield exterior',
      'Standard flush doors with brass/SS hardware and locks',
      'Civil approval drawings and structural vetting documentation'
    ],
    projectSummary: [
      'Fe 500 Grade TMT Steel',
      'Grade 43/53 PPC Cement',
      '6–8 Months Handover',
      '10 Years Structural Warranty'
    ],
    materialsIncluded: [
      'Fe 500 Grade TMT Steel',
      'Grade 43/53 PPC Cement',
      '6–8 Months Handover',
      '10 Years Structural Warranty'
    ]
  },
  {
    id: 'premium-package',
    name: 'PREMIUM PACKAGE',
    badge: 'Quality Turnkey',
    subtitle: 'Elevated turnkey construction with premium brand fittings, teak accents & 3D elevation',
    ratePerSqFt: 2150,
    rateDisplay: '₹2,150 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Enhanced RCC frame, Somany 4x2 vitrified tiles, Jaquar bath fittings, teak main door, 15-year warranty.',
    deliverables: [
      'Complete RCC framing with Tata / JSW Fe 550 TMT Steel',
      'UltraTech / ACC 53 Grade high-strength structural cement',
      'Polished teakwood main door frame & designer veneer shutter',
      'Large format vitrified tiles (4ft × 2ft) in living & dining',
      'Jaquar sanitaryware & premium concealed plumbing fixtures',
      'Concealed fire-retardant copper wiring with modular Legrand switches',
      'Detailed 3D architectural elevations and structural vetting',
      'Dedicated on-site engineer with weekly stage progress logs'
    ],
    projectSummary: [
      'Tata / JSW Fe 550 Steel',
      'UltraTech / ACC 53 Grade',
      'Teakwood Main Entrance',
      '15 Years Structural Warranty'
    ],
    materialsIncluded: [
      'Tata / JSW Fe 550 Steel',
      'UltraTech / ACC 53 Grade',
      'Teakwood Main Entrance',
      '15 Years Structural Warranty'
    ]
  },
  {
    id: 'royal-package',
    name: 'ROYAL PACKAGE',
    badge: 'Most Popular & Flagship',
    subtitle: 'Complete turnkey construction with full modular kitchen & designer bedroom wardrobes',
    ratePerSqFt: 2400,
    rateDisplay: '₹2,400 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1000,
    popular: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Full turnkey structural construction + complete modular kitchen & premium bedroom wardrobes included.',
    deliverables: [
      'Complete RCC structure (Tata Tiscon Fe 550D & UltraTech 53 Grade)',
      'Complete modular kitchen with quartz countertop & soft-close fittings',
      'Designer bedroom wardrobes in master & secondary bedrooms',
      'Jaquar / Hindware premium sanitaryware & CP fittings',
      'Anchor / Legrand modular switches & fire-retardant wiring',
      'Asian Paints Royale luxury emulsion interior & Apex Ultima exterior',
      '3D architectural elevation, floor plans, and structural drawings',
      'Dedicated on-site site supervisor & milestone video reports'
    ],
    projectSummary: [
      'Tata Tiscon Fe 550D & UltraTech',
      'Full Modular Kitchen Included',
      'Designer Bedroom Wardrobes',
      '15 Years Comprehensive Warranty'
    ],
    materialsIncluded: [
      'Tata Tiscon Fe 550D & UltraTech',
      'Full Modular Kitchen Included',
      'Designer Bedroom Wardrobes',
      '15 Years Comprehensive Warranty'
    ]
  },
  {
    id: 'luxury-package',
    name: 'LUXURY PACKAGE',
    badge: 'Ultra-Luxury Custom',
    subtitle: 'Architectural living with Italian marble, custom carpentry & smart home automation',
    ratePerSqFt: 2950,
    rateDisplay: '₹2,950 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Opulent finishes, double-height ceilings, bespoke teakwood work, and courtyard integration.',
    deliverables: [
      'Architectural master design with VR walkthrough and structural vetting',
      'Imported Italian marble or high-grade 4x2 slabs in living areas',
      'Solid Burma Teakwood entrance doorway and carved accents',
      'Grohe / Kohler premium sensor bath systems and glass cubicles',
      'Schneider Electric / smart home automation provisions',
      'Custom acoustic home theater or private terrace garden layout',
      '15-year comprehensive structural warranty & lifelong maintenance desk'
    ],
    projectSummary: [
      'Italian Marble Flooring',
      'Solid Burma Teakwood',
      'Grohe / Kohler Luxury Baths',
      'Lifelong Cavalry Support Desk'
    ],
    materialsIncluded: [
      'Italian Marble Flooring',
      'Solid Burma Teakwood',
      'Grohe / Kohler Luxury Baths',
      'Lifelong Cavalry Support Desk'
    ]
  },
  {
    id: 'custom-package',
    name: 'CUSTOMIZED CLIENT PACKAGE',
    badge: '100% Client Tailored',
    subtitle: 'Fully customized civil construction & interior package crafted to your exact blueprint & budget',
    ratePerSqFt: 0,
    rateDisplay: 'Customized as per Client',
    pricingType: 'custom',
    isCustom: true,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Personalized floor plans, flexible material selection, custom milestone budgets & dedicated architectural guidance.',
    deliverables: [
      'Custom architectural floor plans, 3D elevations & structural engineering',
      'Client-selected material specifications & brand selections',
      'Flexible milestone payment roadmap customized to client cash flow',
      'Itemized transparent Bill of Quantities (BOQ) with zero hidden fees',
      'Dedicated Senior Architect & On-site Project Lead supervision',
      'Choice of premium structural steel (Tata Tiscon / JSW / Jindal)',
      'Choice of cement, flooring, electrical and designer bath fittings',
      '15-Year structural warranty & certified quality audits'
    ],
    projectSummary: [
      'Client Choice Materials & Brands',
      'Custom Blueprint & 3D Walkthrough',
      'Flexible Milestone Billing',
      '15-Year Certified Warranty'
    ],
    materialsIncluded: [
      'Client Choice Materials & Brands',
      'Custom Blueprint & 3D Walkthrough',
      'Flexible Milestone Billing',
      '15-Year Certified Warranty'
    ]
  }
];

export interface DimensionPreset {
  label: string;
  dimension: string;
  sqft: number;
  popularFor: string;
}

export const DIMENSION_PRESETS: DimensionPreset[] = [
  { label: '30 × 40 Standard', dimension: '30ft × 40ft', sqft: 1200, popularFor: '2BHK / 3BHK Duplex' },
  { label: '30 × 50 Spacious', dimension: '30ft × 50ft', sqft: 1500, popularFor: '3BHK / 4BHK Duplex with Garden' },
  { label: '40 × 60 Premium', dimension: '40ft × 60ft', sqft: 2400, popularFor: 'Luxury Villa / G+2 House' },
  { label: '50 × 80 Estate', dimension: '50ft × 80ft', sqft: 4000, popularFor: 'Bespoke Mansion / Multi-unit' }
];

export const SERVICE_OPTIONS = [
  { id: 'basic-package', label: 'BASIC PACKAGE (₹1,950 / sq.ft)', rate: 1950, type: 'per_sqft' },
  { id: 'premium-package', label: 'PREMIUM PACKAGE (₹2,150 / sq.ft)', rate: 2150, type: 'per_sqft' },
  { id: 'royal-package', label: 'ROYAL PACKAGE (₹2,400 / sq.ft)', rate: 2400, type: 'per_sqft' },
  { id: 'luxury-package', label: 'LUXURY PACKAGE (₹2,950 / sq.ft)', rate: 2950, type: 'per_sqft' },
  { id: 'custom-package', label: 'CUSTOMIZED CLIENT PACKAGE (Custom Quote)', rate: 0, type: 'custom' }
];

export const LOCATION_OPTIONS = [
  'Bengaluru – Mallathahalli / RR Nagar / West',
  'Bengaluru – North / Hebbal / Yelahanka',
  'Bengaluru – South / Jayanagar / JP Nagar',
  'Bengaluru – East / Whitefield / Sarjapur',
  'Tumkur (Prime Hub)',
  'Mysuru (Regional Hub)',
  'Hassan (Regional Hub)',
  'Balangir, Orissa',
  'Other Orissa Location',
  'Chhattisgarh Region',
  'Other Karnataka Location'
];

export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `₹${crores.toFixed(2)} Crores`;
  }
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs.toFixed(2)} Lakhs`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}
