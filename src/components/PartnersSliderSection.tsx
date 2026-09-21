import React, { useState } from 'react';
import { PARTNER_LOGOS_40 } from '../data/partners40';
import { PartnerLogoItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Pause, Play, Sparkles } from 'lucide-react';

interface PartnersSliderSectionProps {
  onOpenConsultation?: () => void;
}

export const PartnersSliderSection: React.FC<PartnersSliderSectionProps> = ({
  onOpenConsultation
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [activePartner, setActivePartner] = useState<PartnerLogoItem | null>(null);

  // Divide into two rows for a rich, balanced 40-partner slider motion
  const row1 = PARTNER_LOGOS_40.slice(0, 20);
  const row2 = PARTNER_LOGOS_40.slice(20, 40);

  const renderLogoCard = (partner: PartnerLogoItem) => {
    const hasImage = Boolean(partner.logoUrl && partner.logoUrl.trim().length > 0);

    return (
      <div
        key={`${partner.id}-${partner.number}`}
        onClick={() => setActivePartner(partner)}
        className="group relative shrink-0 mx-3 px-5 py-3.5 bg-white rounded-xl border border-[#E8E2D8] hover:border-[#C27848] shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5 cursor-pointer min-w-[200px] sm:min-w-[230px] select-none"
      >
        {/* Logo or Branded Emblem */}
        <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#EDE7DF] flex items-center justify-center shrink-0 overflow-hidden group-hover:border-[#C27848]/40 transition-colors">
          {hasImage ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-[11px] font-bold font-mono text-[#14244A] bg-[#14244A]/5 w-full h-full flex items-center justify-center">
              #{partner.number < 10 ? `0${partner.number}` : partner.number}
            </div>
          )}
        </div>

        {/* Text Information */}
        <div className="text-left overflow-hidden">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#14244A] group-hover:text-[#C27848] transition-colors truncate">
              {partner.name}
            </span>
          </div>
          <p className="text-[10px] text-[#786E62] truncate font-medium mt-0.5">
            {partner.category}
          </p>
          {partner.spec && (
            <span className="inline-block text-[9px] text-[#C27848] font-semibold tracking-wide truncate max-w-[150px]">
              {partner.spec}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="partners-slider-section"
      className="py-20 sm:py-28 bg-white border-y border-[#ECE7DF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header: Styled directly after reference design */}
        <ScrollReveal className="max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14244A] tracking-tight font-serif leading-tight">
            Trusted by 40+ Industry-Leading Partners across India
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5A534A] leading-relaxed max-w-3xl mx-auto">
            Avani Nivasa collaborates with certified structural, civil, electrical, plumbing, and interior manufacturers—guaranteeing 100% genuine specifications, milestone-tested compliance, and lifetime build resilience for every turnkey residence.
          </p>

          {/* Quick interactive note */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#8C8275]">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C27848]" />
              Zero Counterfeit Tolerance
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C27848]" />
              40 Verified Partner Slots
            </span>
            <span>•</span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1 text-[#14244A] hover:text-[#C27848] font-semibold transition-colors cursor-pointer"
              title={isPaused ? 'Resume slider motion' : 'Pause slider motion'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

      </div>

      {/* ========================================================
          INFINITE LOGO SLIDER MOTION (DOUBLE ROW MARQUEE)
      ======================================================== */}
      <div className="relative w-full overflow-hidden pause-on-hover py-2 space-y-4">
        
        {/* Soft Left & Right Edge Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div
          className="flex animate-marquee"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* First loop instance */}
          <div className="flex items-center">
            {row1.map(renderLogoCard)}
          </div>
          {/* Duplicate loop instance for seamless infinite motion */}
          <div className="flex items-center" aria-hidden="true">
            {row1.map(renderLogoCard)}
          </div>
        </div>

        {/* Row 2: Reverse Marquee for Dynamic Balance */}
        <div
          className="flex animate-marquee-reverse"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* First loop instance */}
          <div className="flex items-center">
            {row2.map(renderLogoCard)}
          </div>
          {/* Duplicate loop instance for seamless infinite motion */}
          <div className="flex items-center" aria-hidden="true">
            {row2.map(renderLogoCard)}
          </div>
        </div>

      </div>

      {/* Partner Detail Modal on Click */}
      {activePartner && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePartner(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#DDD3C5] max-w-md w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C27848] tracking-wider">
                  Partner Slot #{activePartner.number}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#14244A] mt-0.5">
                  {activePartner.name}
                </h3>
              </div>
              <button
                onClick={() => setActivePartner(null)}
                className="text-xs text-[#786E62] hover:text-[#14244A] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE7DF] flex items-center justify-center min-h-[100px]">
              {activePartner.logoUrl ? (
                <img
                  src={activePartner.logoUrl}
                  alt={activePartner.name}
                  className="max-h-16 max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="text-center">
                  <div className="text-xs font-bold text-[#14244A] uppercase tracking-wider">
                    Partner Logo Slot #{activePartner.number}
                  </div>
                  <p className="text-[11px] text-[#786E62] mt-1">
                    Ready for your partner logo image or brand crest.
                  </p>
                </div>
              )}
            </div>

            <div className="text-xs space-y-2 text-[#5A534A]">
              <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                <span className="font-semibold text-[#786E62]">Category:</span>
                <span className="font-bold text-[#14244A]">{activePartner.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                <span className="font-semibold text-[#786E62]">Specification:</span>
                <span className="font-bold text-[#C27848]">{activePartner.spec || 'Standard Compliant'}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setActivePartner(null)}
                className="px-4 py-2 bg-[#14244A] text-white text-xs font-bold rounded-lg uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
