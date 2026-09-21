import { PageId } from '../types';
import { COMPANY_INFO } from './company';
import { SERVICES } from './services';
import { PROJECTS } from './projects';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType: 'website' | 'article';
  ogImage: string;
  twitterCard: 'summary_large_image' | 'summary';
  schema: Record<string, unknown>;
}

export const SEO_CONFIG: Record<PageId, PageSEO> = {
  home: {
    title: "Avani Nivasa by Gowdru Realcom – We're Your Construction Cavalry",
    description: 'Premier construction and bespoke architectural living with 15+ years of experience and 200+ clients across Karnataka, Orissa, and Chhattisgarh.',
    keywords: 'Avani Nivasa, Gowdru Realcom, construction cavalry, luxury duplex homes, single floor house Orissa, custom villa builders Bangalore, turnkey factory construction, home renovation Mallathahalli',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      'name': 'Avani Nivasa by Gowdru Realcom Private Limited',
      'alternateName': ['Avani Nivasa', 'Gowdru Realcom', 'Avani Nivas'],
      'url': 'https://www.gowdrurealcom.com',
      'logo': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'description': "From blueprint to reality: we're your construction cavalry. Over 15 years of industry experience and 200+ satisfied clients across Karnataka, Orissa, and Chhattisgarh.",
      'telephone': COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, ''),
      'email': COMPANY_INFO.contacts.primaryEmail,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.landmark}`,
        'addressLocality': COMPANY_INFO.address.city,
        'addressRegion': COMPANY_INFO.address.state,
        'postalCode': COMPANY_INFO.address.pincode,
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '12.9647',
        'longitude': '77.5026'
      },
      'founder': [
        {
          '@type': 'Person',
          'name': 'Sharath Kumar A N',
          'jobTitle': 'Managing Director & Founder'
        },
        {
          '@type': 'Person',
          'name': 'Palaksha',
          'jobTitle': 'Co-Founder & Technical Director'
        }
      ],
      'areaServed': [
        { '@type': 'City', 'name': 'Bengaluru' },
        { '@type': 'City', 'name': 'Tumkur' },
        { '@type': 'City', 'name': 'Mysuru' },
        { '@type': 'City', 'name': 'Hassan' },
        { '@type': 'State', 'name': 'Karnataka' },
        { '@type': 'State', 'name': 'Orissa' },
        { '@type': 'State', 'name': 'Chhattisgarh' }
      ],
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:30',
        'closes': '19:00'
      },
      'priceRange': '₹₹₹',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Specialized Architectural & Construction Services',
        'itemListElement': SERVICES.map((s, idx) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': s.title,
            'description': s.shortDesc
          },
          'position': idx + 1
        }))
      }
    }
  },

  services: {
    title: 'Comprehensive Construction Services | Avani Nivasa by Gowdru Realcom',
    description: 'Explore 8 specialized offerings: kitchen renovations, interior redesigns, exterior upgrades, custom carpentry, bathroom remodels, additions, and energy upgrades.',
    keywords: 'kitchen renovations Bangalore, interior redesigns, exterior upgrades Karnataka, custom carpentry Mallathahalli, bathroom remodels, home additions, energy-efficient upgrades, basement finishing',
    canonicalPath: '/services',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Architectural & Construction Services',
      'provider': {
        '@type': 'GeneralContractor',
        'name': 'Avani Nivasa by Gowdru Realcom Private Limited',
        'telephone': COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, ''),
        'url': 'https://www.gowdrurealcom.com'
      },
      'areaServed': ['Karnataka', 'Orissa', 'Chhattisgarh'],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Specialized Architectural Offerings',
        'itemListElement': SERVICES.map((s, idx) => ({
          '@type': 'OfferCatalog',
          'name': s.title,
          'description': s.shortDesc,
          'position': idx + 1
        }))
      }
    }
  },

  pricing: {
    title: 'Transparent Construction Pricing & Rate Cards | Avani Nivasa',
    description: 'Explore verified construction rate cards: Turnkey duplex homes at ₹2,400/sq.ft with interiors, single-floor houses from ₹1,950/sq.ft, luxury villas, and fast WhatsApp estimation.',
    keywords: 'construction pricing Bangalore, turnkey duplex cost per sqft, home construction rates Karnataka, 30x40 duplex house cost, Gowdru Realcom pricing, Avani Nivasa rate cards',
    canonicalPath: '/pricing',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'PriceSpecification',
      'name': 'Avani Nivasa Turnkey Construction Pricing Packages',
      'description': 'Itemized construction and interior rate cards with Tata Tiscon steel, UltraTech cement, and milestone payments.',
      'priceCurrency': 'INR',
      'minPrice': '1950',
      'maxPrice': '2950',
      'unitText': 'sq.ft'
    }
  },

  projects: {
    title: 'Architectural Works & Turnkey Portfolio | Avani Nivasa',
    description: 'Explore single-floor houses in Balangir Orissa, duplex homes at ₹2,400/sq.ft. with interiors, opulent villas, and state-of-the-art factory construction.',
    keywords: 'single floor house Balangir, duplex homes ₹2400 sq ft, luxury villas Karnataka, factory construction Orissa, Gowdru Realcom projects, Avani Nivasa portfolio',
    canonicalPath: '/projects',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Avani Nivasa Selected Architectural & Turnkey Works',
      'description': 'Showcase of turnkey single floor residences, luxury duplex homes, bespoke villas, and industrial factories.',
      'url': 'https://www.gowdrurealcom.com/projects',
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': PROJECTS.map((proj, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'item': {
            '@type': 'CreativeWork',
            'name': proj.title,
            'description': proj.summary,
            'image': proj.image,
            'locationCreated': proj.location,
            'genre': proj.category
          }
        }))
      }
    }
  },

  about: {
    title: 'About Us: Built on Trust & Excellence | Avani Nivasa by Gowdru Realcom',
    description: 'Founded by visionary leaders Sharath Kumar A N & Palaksha with 15+ years experience and 200+ clients across Karnataka, Orissa, and Chhattisgarh.',
    keywords: 'Sharath Kumar A N, Palaksha, Avani Nivasa founders, Gowdru Realcom company history, Tumkur Bengaluru Mysuru Hassan builders, construction cavalry',
    canonicalPath: '/about',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Avani Nivasa by Gowdru Realcom Private Limited',
      'url': 'https://www.gowdrurealcom.com/about',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Gowdru Realcom Private Limited',
        'alternateName': 'Avani Nivasa',
        'foundingDate': '2009',
        'description': 'Premier construction company redefining the construction landscape across Karnataka, Orissa, and Chhattisgarh.',
        'founders': [
          {
            '@type': 'Person',
            'name': 'Sharath Kumar A N',
            'jobTitle': 'Managing Director & Founder'
          },
          {
            '@type': 'Person',
            'name': 'Palaksha',
            'jobTitle': 'Co-Founder & Technical Director'
          }
        ]
      }
    }
  },

  partners: {
    title: 'Partnering With Industry Leaders | Avani Nivasa Material Standards',
    description: 'Certified material partnerships with Tata Tiscon, UltraTech Cement, Asian Paints, Jaquar, Saint-Gobain, and Schneider Electric for lifelong durability.',
    keywords: 'construction partners, Tata Tiscon steel, UltraTech cement, Jaquar bath fittings, Saint-Gobain glass, verified vendors Avani Nivasa',
    canonicalPath: '/partners',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Partnering With Industry Leaders - Avani Nivasa',
      'url': 'https://www.gowdrurealcom.com/partners',
      'description': 'Strict quality assurance ecosystem partnering with top-tier material manufacturers in India.',
      'publisher': {
        '@type': 'GeneralContractor',
        'name': 'Avani Nivasa by Gowdru Realcom Private Limited'
      }
    }
  },

  contact: {
    title: 'Contact & Site Consultation | Avani Nivasa Mallathahalli Bengaluru',
    description: 'Connect with your construction cavalry. Call +91 99163 37333 or +91 99163 39333. Office in Adarsha Layout, Mallathahalli, Bengaluru 560056.',
    keywords: 'contact Avani Nivasa, Gowdru Realcom phone number, Mallathahalli office address, site consultation booking, construction cavalry contact',
    canonicalPath: '/contact',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Avani Nivasa by Gowdru Realcom',
      'url': 'https://www.gowdrurealcom.com/contact',
      'mainEntity': {
        '@type': 'LocalBusiness',
        'name': 'Avani Nivasa by Gowdru Realcom Private Limited',
        'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        'telephone': COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, ''),
        'email': COMPANY_INFO.contacts.primaryEmail,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.landmark}`,
          'addressLocality': COMPANY_INFO.address.city,
          'addressRegion': COMPANY_INFO.address.state,
          'postalCode': COMPANY_INFO.address.pincode,
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '12.9647',
          'longitude': '77.5026'
        },
        'openingHours': 'Mo-Sa 09:30-19:00'
      }
    }
  }
};
