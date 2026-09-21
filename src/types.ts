export type PageId = 'home' | 'services' | 'pricing' | 'projects' | 'about' | 'partners' | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
  deliverables: string[];
  idealFor: string;
}

export type ProjectCategory = 'All' | 'Residential' | 'Construction' | 'Interiors' | 'Commercial' | 'Renovation';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Interiors' | 'Renovation' | 'Construction' | 'Commercial';
  location: string;
  scope: string;
  area?: string;
  completionYear?: string;
  pricing?: string;
  timeline?: string;
  image: string;
  gallery: string[];
  summary: string;
  features: string[];
  isFeatured?: boolean;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: 'Structural' | 'Surfaces & Glass' | 'Finishes & Paints' | 'Hardware & Fittings' | 'Sanitaryware' | 'Electrical' | string;
  role: string;
  description: string;
  logoUrl?: string;
}

export interface PartnerLogoItem {
  id: string;
  number: number; // 1 through 40
  name: string;
  category: string;
  logoUrl?: string; // Image path or uploaded image link
  tagline?: string;
  spec?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
}
