import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, Phone, ArrowRight, Shield } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E6E1D8]/80 py-3.5'
          : 'bg-[#FAF9F6]/80 backdrop-blur-sm border-b border-[#E6E1D8]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C27848] rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2A2724] text-[#EFEAE2] flex items-center justify-center font-bold text-base sm:text-lg tracking-wider border border-[#C27848]/40 shadow-xs group-hover:border-[#C27848] transition-colors shrink-0">
              <span>GR</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#1A1918] group-hover:text-[#C27848] transition-colors truncate">
                Gowdru Realcom
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#7C7469] font-medium flex items-center gap-1">
                <span>Avani Nivas</span>
                <span className="w-1 h-1 rounded-full bg-[#C27848]" />
                <span>Est. 2009</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#C27848] font-semibold'
                      : 'text-[#5C564E] hover:text-[#1A1918] hover:bg-[#F2ECE4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#C27848] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="desktop-phone-quicklink"
              href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-medium text-[#5C564E] hover:text-[#1A1918] transition-colors py-1.5 px-2.5 rounded border border-[#E6E1D8] bg-[#F7F4EF]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C27848]" />
              <span>{COMPANY_INFO.contacts.primaryPhone}</span>
            </a>

            <button
              id="desktop-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2A2724] text-white text-xs font-semibold tracking-wide uppercase rounded-md hover:bg-[#C27848] active:scale-98 transition-all duration-200 shadow-sm"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              id="mobile-consultation-quick-btn"
              onClick={onOpenConsultation}
              className="px-2 sm:px-2.5 py-1.5 bg-[#C27848] text-white text-[10px] sm:text-[11px] font-semibold uppercase rounded-md tracking-wider whitespace-nowrap"
            >
              Consult
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 sm:p-2.5 rounded-lg text-[#2A2724] hover:bg-[#EFEAE2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C27848]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#E6E1D8] bg-[#FAF9F6] shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EFEAE2] text-[#C27848] font-semibold'
                      : 'text-[#2A2724] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-[#C27848]" />}
                </button>
              );
            })}

            <div className="pt-4 mt-3 border-t border-[#E6E1D8] space-y-3">
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#EFEAE2] text-[#1A1918] text-sm font-medium rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#C27848]" />
                <span>Call: {COMPANY_INFO.contacts.primaryPhone}</span>
              </a>

              <button
                id="mobile-drawer-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#2A2724] text-white text-sm font-semibold tracking-wide uppercase rounded-lg hover:bg-[#C27848] transition-colors flex items-center justify-center gap-2"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2 text-xs text-[#7C7469] flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C27848]" />
                <span>Mallathahalli, Bengaluru • 15+ Yrs Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
