import { PageId } from '../types';

/**
 * WordPress 301 Migration Redirect Mapping
 * Maps historical WordPress URLs from gowdrurealcom.com to clean new routes.
 */
export interface RedirectRule {
  from: string;
  to: PageId;
  statusCode: 301;
  description: string;
}

export const WP_REDIRECT_MAP: RedirectRule[] = [
  { from: '/about-us', to: 'about', statusCode: 301, description: 'Legacy WP About Page' },
  { from: '/about-gowdru-realcom', to: 'about', statusCode: 301, description: 'Legacy Company Bio' },
  { from: '/our-services', to: 'services', statusCode: 301, description: 'Legacy Services Hub' },
  { from: '/services-overview', to: 'services', statusCode: 301, description: 'Legacy WP Service List' },
  { from: '/portfolio', to: 'projects', statusCode: 301, description: 'Legacy WP Portfolio Grid' },
  { from: '/our-projects', to: 'projects', statusCode: 301, description: 'Legacy Projects Page' },
  { from: '/avani-nivas', to: 'projects', statusCode: 301, description: 'Legacy Avani Nivas project link' },
  { from: '/contact-us', to: 'contact', statusCode: 301, description: 'Legacy Contact Page' },
  { from: '/get-in-touch', to: 'contact', statusCode: 301, description: 'Legacy Form Page' },
  { from: '/partners-suppliers', to: 'partners', statusCode: 301, description: 'Legacy Partners Hub' },
  { from: '/sample-page', to: 'home', statusCode: 301, description: 'Default WP sample page fallback' }
];

/**
 * Resolves legacy WordPress paths or URL parameters to the active PageId
 */
export function resolveLegacyRoute(pathname: string, search: string): PageId | null {
  const cleanPath = pathname.replace(/\/$/, '').toLowerCase();
  
  // Check for direct path match
  const match = WP_REDIRECT_MAP.find(rule => rule.from.toLowerCase() === cleanPath);
  if (match) return match.to;

  // Check for WordPress query param style: ?page_id=... or ?p=...
  if (search.includes('contact') || search.includes('page_id=25')) return 'contact';
  if (search.includes('about') || search.includes('page_id=14')) return 'about';
  if (search.includes('service') || search.includes('page_id=8')) return 'services';
  if (search.includes('project') || search.includes('portfolio')) return 'projects';

  return null;
}

/**
 * Nginx / Apache / Next.js redirect code generators for server-side migration deployment
 */
export const NGINX_REDIRECT_CONFIG = `
# WordPress to New Architecture 301 Permanent Redirects
location = /about-us { return 301 /about; }
location = /our-services { return 301 /services; }
location = /portfolio { return 301 /projects; }
location = /our-projects { return 301 /projects; }
location = /contact-us { return 301 /contact; }
location = /avani-nivas { return 301 /projects; }
`;

export const NEXT_REDIRECT_CONFIG = `
// For next.config.js migration
module.exports = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
    ];
  },
};
`;
