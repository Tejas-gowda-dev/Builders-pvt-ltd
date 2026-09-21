import React, { useEffect } from 'react';
import { PageId } from '../types';
import { SEO_CONFIG } from '../data/seoData';

interface SEOHeadProps {
  currentPage: PageId;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  const seo = SEO_CONFIG[currentPage] || SEO_CONFIG.home;

  useEffect(() => {
    // 1. Update Title
    document.title = seo.title;

    // Helper to safely set or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to safely set link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('description', seo.description);
    setMetaTag('keywords', seo.keywords);

    // 3. OpenGraph Social Tags
    setMetaTag('og:title', seo.title, true);
    setMetaTag('og:description', seo.description, true);
    setMetaTag('og:type', seo.ogType, true);
    setMetaTag('og:image', seo.ogImage, true);
    setMetaTag('og:site_name', 'Gowdru Realcom | Avani Nivas', true);

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.gowdrurealcom.com';
    const canonicalUrl = `${origin}${seo.canonicalPath === '/' ? '' : seo.canonicalPath}`;
    setMetaTag('og:url', canonicalUrl, true);

    // 4. Twitter Card Tags
    setMetaTag('twitter:card', seo.twitterCard);
    setMetaTag('twitter:title', seo.title);
    setMetaTag('twitter:description', seo.description);
    setMetaTag('twitter:image', seo.ogImage);

    // 5. Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // 6. Schema.org JSON-LD Structured Data
    let scriptTag = document.getElementById('app-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'app-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(seo.schema, null, 2);
  }, [currentPage, seo]);

  return null;
};
