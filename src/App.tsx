import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem, ProjectItem } from './types';
import { resolveLegacyRoute } from './data/migration';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { MigrationModal } from './components/MigrationModal';
import { SEOHead } from './components/SEOHead';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [migrationModalOpen, setMigrationModalOpen] = useState(false);
  const [pricingInitialTierId, setPricingInitialTierId] = useState<string>('royal-package');

  // Initialize and handle URL routing & legacy WordPress 301 redirects
  useEffect(() => {
    const parseRouteFromUrl = (): PageId => {
      const path = window.location.pathname;
      const search = window.location.search;
      const hash = window.location.hash.replace('#', '');

      // Check legacy WordPress mapping first
      const legacyMatch = resolveLegacyRoute(path, search);
      if (legacyMatch) return legacyMatch;

      // Check standard route path
      const cleanPath = path.replace(/^\//, '').toLowerCase();
      if (cleanPath === 'services' || hash === 'services') return 'services';
      if (cleanPath === 'pricing' || hash === 'pricing') return 'pricing';
      if (cleanPath === 'projects' || hash === 'projects') return 'projects';
      if (cleanPath === 'about' || hash === 'about') return 'about';
      if (cleanPath === 'partners' || hash === 'partners') return 'partners';
      if (cleanPath === 'contact' || hash === 'contact') return 'contact';

      return 'home';
    };

    setCurrentPage(parseRouteFromUrl());

    const handlePopState = () => {
      setCurrentPage(parseRouteFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1918]">
      {/* Comprehensive Dynamic SEO and Schema.org Management */}
      <SEOHead currentPage={currentPage} />

      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setPrefilledService('');
          setConsultationOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProject={(project) => setSelectedProject(project)}
            onSelectPricingPlan={(tierId) => {
              setPricingInitialTierId(tierId);
              handleNavigate('pricing');
            }}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
            onSelectService={(service) => setSelectedService(service)}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            initialTierId={pricingInitialTierId}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
          />
        )}

        {currentPage === 'partners' && (
          <PartnersPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => {
              setPrefilledService('');
              setConsultationOpen(true);
            }}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setPrefilledService('');
          setConsultationOpen(true);
        }}
        onOpenMigrationGuide={() => setMigrationModalOpen(true)}
      />

      {/* Floating WhatsApp CTA button */}
      <WhatsAppButton />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Service Details Specification Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={(serviceTitle) => handleOpenConsultationWithService(serviceTitle)}
      />

      {/* Project Gallery & Specifications Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={(projectTitle) => handleOpenConsultationWithService(`Project Inquiry: ${projectTitle}`)}
      />

      {/* WordPress 301 Migration Reference Modal */}
      <MigrationModal
        isOpen={migrationModalOpen}
        onClose={() => setMigrationModalOpen(false)}
      />
    </div>
  );
}
