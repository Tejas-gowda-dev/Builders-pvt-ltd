import { ProcessStep, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'Gowdru Realcom Private Limited',
  brandName: 'Gowdru Realcom',
  flagshipBrand: 'Avani Nivasa',
  foundationHeadline: 'Our foundation: built on trust and excellence',
  foundationStory: 'Founded by visionary leaders Sharath Kumar A N and Palaksha, Avani Nivasa by Gowdru Realcom private limited is a premier construction company with a proven track record of delivering exceptional projects. With over 15 years of industry experience and a portfolio of 200+ satisfied clients in Karnataka, Orissa and Chhattisgarh, we are committed to redefining the construction landscape.',
  coreValuesStory: 'Our core values revolve around elegance, care, and customization. We believe in crafting spaces that not only meet your functional needs but also reflect your unique style and personality. From initial design concepts to final construction, we are dedicated to providing a seamless and personalized experience.',
  tagline: "From Blueprint to Reality: We're Your Construction Cavalry.",
  subTagline: 'Architectural Excellence, Custom Home Craftsmanship & Refined Interior Transformations',
  founders: [
    {
      name: 'Sharath Kumar A N',
      role: 'Visionary Leader & Managing Director',
      bio: 'Pioneering architectural planning, civil engineering standards, and residential construction quality across Karnataka, Orissa, and Chhattisgarh for over 15 years.'
    },
    {
      name: 'Palaksha',
      role: 'Visionary Leader & Technical Director',
      bio: 'Spearheading on-site structural precision, safety protocols, artisan craftsmanship, and end-to-end turnkey project execution.'
    }
  ],
  stats: [
    {
      value: '15+',
      label: 'Years Experience',
      caption: 'Over 15 years of industry excellence in construction & interiors'
    },
    {
      value: '200+',
      label: 'Satisfied Clients',
      caption: 'Across Karnataka, Orissa, and Chhattisgarh'
    },
    {
      value: '100%',
      label: 'Turnkey Accountability',
      caption: 'From blueprint conceptualization to final key handover'
    },
    {
      value: 'Elegance',
      label: 'Core Value',
      caption: 'Care, elegance, and millimeter-grade customization'
    }
  ],
  areasWeServe: [
    { name: 'Tumkur', state: 'Karnataka', type: 'Prime Hub' },
    { name: 'Bengaluru', state: 'Karnataka', type: 'Corporate HQ & Flagship' },
    { name: 'Mysuru', state: 'Karnataka', type: 'Regional Hub' },
    { name: 'Hassan', state: 'Karnataka', type: 'Regional Hub' }
  ],
  expandedRegions: ['Karnataka', 'Orissa', 'Chhattisgarh'],
  verifiedHubs: ['Bengaluru (Mallathahalli & RR Nagar)', 'Tumkur', 'Mysuru', 'Hassan'],
  address: {
    street: 'Avani Nivas, 10th Main Road, 1st Cross, Adarsha Layout, Mallathahalli',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560056',
    country: 'India',
    landmark: 'Near Bangalore University Campus / Mallathahalli Lake'
  },
  contacts: {
    primaryPhone: '+91 9916337333',
    secondaryPhone: '+91 9916339333',
    primaryEmail: 'info@gowdrurealcom.com',
    secondaryEmail: 'info@avaninivasa.com',
    whatsappNumber: '919916337333',
    whatsappDisplay: '+91 99163 37333',
    workingHours: 'Mon – Sat: 9:30 AM – 7:00 PM (IST)'
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/GowdruRealcom',
    website: 'https://www.gowdrurealcom.com'
  }
};

export interface ProcessPhase {
  phaseId: 'pre-construction' | 'construction' | 'post-construction';
  phaseTitle: string;
  badge: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export const STRUCTURED_PROCESS_PHASES: ProcessPhase[] = [
  {
    phaseId: 'pre-construction',
    phaseTitle: 'Pre-Construction',
    badge: 'Phase 01',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Labor working on architectural blueprint and conceptual planning',
    imageCaption: 'Labor working • Architectural drafting & precision site preparation',
    steps: [
      {
        title: 'CONCEPTUAL PLANNING',
        description: 'We collaborate with you to develop a floor plan that maximizes your space and aligns with your vision.'
      },
      {
        title: 'TIMELINE COORDINATION',
        description: 'A detailed project timeline will be shared with you, both digitally and physically, to keep you informed about the progress.'
      },
      {
        title: 'COST ANALYSIS',
        description: 'We provide a transparent breakdown of project costs, ensuring you have a clear understanding of the budget.'
      }
    ]
  },
  {
    phaseId: 'construction',
    phaseTitle: 'Construction',
    badge: 'Phase 02',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Labor working on structural construction and interior design',
    imageCaption: 'Labor working on interior design & structural concrete engineering',
    steps: [
      {
        title: 'QUALITY ASSURANCE',
        description: 'Once the foundation is laid, we commence the structural construction, adhering to the highest quality standards.'
      },
      {
        title: 'SAFETY PROTOCOLS',
        description: 'Safety is paramount. We strictly adhere to safety protocols throughout the project, ensuring a secure environment.'
      },
      {
        title: 'TEAM MANAGEMENT',
        description: 'At Gowdru Realcom, we believe that our team is the cornerstone of our success. Our dedicated professionals bring a wealth of experience and passion to every project.'
      }
    ]
  },
  {
    phaseId: 'post-construction',
    phaseTitle: 'Post-Construction',
    badge: 'Phase 03',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Labor working on final approvals, pristine cleaning, and interior customization',
    imageCaption: 'Labor working • Pristine handover & bespoke interior customization',
    steps: [
      {
        title: 'FINAL APPROVALS',
        description: 'After the main structure is complete, we focus on essential finishing work, including electrical installations, waterproofing, and other miscellaneous tasks.'
      },
      {
        title: 'SAFETY PROTOCOLS & PRISTINE HANDOVER',
        description: 'We meticulously clean and prepare your space, ensuring a pristine handover. From debris removal to final polishing, we leave no detail unattended.'
      },
      {
        title: 'TEAM MANAGEMENT & INTERIOR CUSTOMIZATION',
        description: 'To elevate your space, we offer a range of interior customization options to match your unique preferences.'
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Pre-Construction: Planning & Analysis',
    subtitle: 'Conceptual Planning, Timeline & Cost Analysis',
    description: 'We collaborate with you to develop a floor plan that maximizes your space, share digital and physical project timelines, and provide a transparent breakdown of project costs.',
    deliverables: ['Conceptual floor planning', 'Timeline coordination (digital & physical)', 'Transparent cost analysis']
  },
  {
    number: '02',
    title: 'Construction: Quality & Safety',
    subtitle: 'Quality Assurance, Safety Protocols & Team Management',
    description: 'Once foundation is laid, structural construction commences under the highest quality standards, zero-compromise safety protocols, and experienced team management.',
    deliverables: ['Highest quality assurance', 'Paramount safety protocols', 'Dedicated experienced team management']
  },
  {
    number: '03',
    title: 'Post-Construction: Approvals & Customization',
    subtitle: 'Final Approvals, Pristine Handover & Interior Customization',
    description: 'Focusing on electrical installations, waterproofing, meticulous debris removal, pristine polishing handover, and bespoke interior customization options.',
    deliverables: ['Final regulatory & finishing approvals', 'Debris removal & pristine handover', 'Bespoke interior customization options']
  }
];

export const TRUST_PILLARS = [
  {
    title: '15+ Years Industry Provenance',
    description: 'Over 15 years of industry experience delivering exceptional projects in Karnataka, Orissa, and Chhattisgarh.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Direct Founder Oversight',
    description: 'Visionary leaders Sharath Kumar A N and Palaksha personally inspect construction milestones, guaranteeing accountability.',
    iconName: 'Users'
  },
  {
    title: 'Transparent Cost Analysis',
    description: 'Detailed, line-item pricing without surprise escalations or hidden contingencies. Clear understanding of the budget.',
    iconName: 'Receipt'
  },
  {
    title: 'Paramount Safety Protocols',
    description: 'We strictly adhere to safety protocols throughout every project, ensuring a secure and disciplined work environment.',
    iconName: 'Hammer'
  },
  {
    title: 'Care, Elegance & Customization',
    description: 'We believe in crafting spaces that not only meet your functional needs but also reflect your unique style and personality.',
    iconName: 'Sparkles'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-upasana',
    clientName: 'Upasana Sarma',
    location: 'Bengaluru, Karnataka',
    projectType: 'Interior Design & Custom Living Space',
    quote: "Avani Nivas's interior design team created a truly unique and personalized space for us. They listened to our ideas and incorporated them into a beautiful and functional design.",
    rating: 5
  },
  {
    id: 'test-mahesh',
    clientName: 'Mahesh T N',
    location: 'Karnataka',
    projectType: 'Turnkey Dream Home Construction',
    quote: "Avani Nivas transformed our house into a dream home. Their team of experts guided us through every step, from initial design to final touches. The quality of their work is exceptional, and their attention to detail is impeccable. We couldn't be happier with our beautiful new home.",
    rating: 5
  },
  {
    id: 'test-jatin',
    clientName: 'Jatin Kotian',
    location: 'Bengaluru, Karnataka',
    projectType: 'Home Renovation & Customer Service',
    quote: "While the bathroom fittings themselves were disappointing, the customer service from Avani Nivas was a bright spot in an otherwise frustrating experience. They were responsive to our concerns and took steps to address the issues, even though it didn't fully rectify the initial problems with the fittings.",
    rating: 4
  },
  {
    id: 'test-shishir',
    clientName: 'Shishir Patel',
    location: 'Karnataka',
    projectType: 'Complete Home Renovation',
    quote: "Avani Nivas made our home renovation a breeze. They handled everything from demolition to the final paint job.",
    rating: 5
  }
];
