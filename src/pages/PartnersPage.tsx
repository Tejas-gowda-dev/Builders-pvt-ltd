import React from 'react';
import { PageId } from '../types';
import { PARTNERS, COLLABORATION_TYPES } from '../data/partners';
import { PartnersSliderSection } from '../components/PartnersSliderSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, Award, Handshake, Check, ArrowRight } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="partners-page-root" className="pt-28 pb-0 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Material Standards & Ecosystem
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              PARTNERING WITH INDUSTRY LEADERS
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              We never compromise structural longevity for short-term margins. Avani Nivasa specifies certified inputs from global and national leaders in structural concrete, ductile steel, architectural glass, and luxury fittings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner, idx) => (
            <ScrollReveal
              key={partner.id}
              delay={idx * 0.05}
              className="bg-white p-7 rounded-2xl border border-[#E0D8CC] shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-[#C27848]/60 transition-all duration-300"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#F5F2EC] text-[#8D4B20] mb-3">
                  {partner.category}
                </span>
                <h2 className="text-lg font-bold text-[#313030] font-serif">
                  {partner.name}
                </h2>
                <p className="text-xs font-semibold text-[#C27848] mt-1 mb-3">
                  {partner.role}
                </p>
                <p className="text-xs text-[#5C564E] leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#7C7469] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C27848]" />
                <span>Authorized Specification</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How We Partner */}
      <section className="py-20 bg-[#F5F2EC] border-y border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Supply Chain Assurance
            </span>
            <h2 className="block font-serif text-3xl sm:text-4xl text-[#313030] mt-2">
              Rigorous Vendor Verification
            </h2>
            <p className="mt-3 text-base text-[#5C564E]">
              Every vendor in the Avani Nivasa network passes strict batch inspection and compliance criteria.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COLLABORATION_TYPES.map((type, idx) => (
              <ScrollReveal
                key={type.title}
                delay={idx * 0.1}
                className="bg-white p-8 rounded-2xl border border-[#E0D8CC] shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EC] text-[#C27848] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#313030] font-serif mb-2">{type.title}</h3>
                <p className="text-xs text-[#5C564E] leading-relaxed mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-[#F2ECE4]">
                  {type.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#313030]">
                      <Check className="w-3.5 h-3.5 text-[#C27848] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 40 Industry Partners Logo Slider Motion */}
      <PartnersSliderSection onOpenConsultation={onOpenConsultation} />

      {/* CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
