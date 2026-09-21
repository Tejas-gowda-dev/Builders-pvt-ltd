import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenMigrationGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenMigrationGuide
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-gradient-to-b from-[#14244A] via-[#101D3B] to-[#0D182E] text-[#F1F5F9] border-t border-[#233C70] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#233C70]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D3360] text-white flex items-center justify-center font-bold text-lg border border-[#E5A96A]/80 shadow-xs">
                GR
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-serif">Gowdru Realcom</span>
                <p className="text-xs uppercase tracking-widest text-[#E5A96A] font-semibold">Avani Nivasa</p>
              </div>
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Over 15 years of industry excellence, crafting bespoke private residences, turnkey architectural duplexes, and premium interior transformations across Karnataka, Orissa, and Chhattisgarh.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182C52] text-[11px] text-[#E5A96A] border border-[#2B4678]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>15+ Years Provenance</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182C52] text-[11px] text-[#E2E8F0] border border-[#2B4678]">
                <span>200+ Satisfied Families</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E5A96A]">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left flex items-center gap-1.5 font-medium text-white">
                  <span>Pricing & Rate Cards</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#E5A96A] text-[#101D3B] font-bold">New</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Architectural Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partners')} className="hover:text-white transition-colors">
                  Partners & Materials
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E5A96A]">Key Packages</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Turnkey Duplex (₹2,400/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Single Floor House (₹1,950/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Luxury Villa Construction
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Modular Kitchen Renovations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Interior Redesign & Styling
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Commercial & Factory Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E5A96A]">Head Office</h3>
            <div className="space-y-3 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A96A] shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-[#CBD5E1]">
                  {COMPANY_INFO.address.street},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A96A] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors text-xs font-medium"
                >
                  {COMPANY_INFO.contacts.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A96A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contacts.primaryEmail}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {COMPANY_INFO.contacts.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E5A96A] shrink-0" />
                <span className="text-[11px] text-[#94A3B8]">{COMPANY_INFO.contacts.workingHours}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full mt-2 py-2.5 px-3 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/25 backdrop-blur-xs inline-flex items-center justify-center gap-1.5"
            >
              <span>Book Site Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {currentYear} {COMPANY_INFO.legalName} / {COMPANY_INFO.flagshipBrand}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[#CBD5E1]">Active Hubs: Bengaluru • Tumkur • Mysuru • Hassan • Balangir</span>
            <button
              id="wp-migration-guide-btn"
              onClick={onOpenMigrationGuide}
              className="inline-flex items-center gap-1 text-[#E5A96A] hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>301 WordPress Migration Map</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
