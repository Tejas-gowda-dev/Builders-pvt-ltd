import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onConsultationClick: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onConsultationClick,
  onContactClick
}) => {
  return (
    <section id="planning-cta-section" className="py-24 sm:py-32 text-white relative overflow-hidden">
      {/* Architectural Background Image with Deep Contrast Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architectural Residence"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep Imperial Navy / Slate Tint Overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1935]/95 via-[#0E1E40]/85 to-[#0A1428]/95 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#081020]/40 to-[#060D1A]/90" />
        {/* Subtle architectural blueprint grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F1F5F9_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
       

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-white drop-shadow-sm">
          Planning Your Next Project?
        </h2>

        <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
          Let’s discuss your site dimensions, architectural vision, and explore the right turnkey construction or interior transformation for your space.
        </p>

        {/* CTA Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <button
            id="cta-get-consultation-btn"
            onClick={onConsultationClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/25 backdrop-blur-xs transition-all duration-200"
          >
            <span>Get a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-contact-us-btn"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/25 backdrop-blur-xs transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#E5A96A]" />
            <span>Contact Us</span>
          </button>

          <a
            id="cta-call-direct-btn"
            href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold text-[#E2E8F0] hover:text-white bg-[#10203D]/80 hover:bg-[#14264A] rounded-xl border border-[#233C70] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E5A96A]" />
            <span>Call {COMPANY_INFO.contacts.primaryPhone}</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-[#94A3B8] flex items-center justify-center gap-6 flex-wrap font-medium">
          <span className="flex items-center gap-1.5"><span className="text-[#E5A96A]">✓</span> Direct Founder Review</span>
          <span className="flex items-center gap-1.5"><span className="text-[#E5A96A]">✓</span> Verified BOQ Estimation</span>
          <span className="flex items-center gap-1.5"><span className="text-[#E5A96A]">✓</span> 15+ Yrs Battle-Tested Experience</span>
        </div>
      </div>
    </section>
  );
};
