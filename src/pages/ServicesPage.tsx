import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES } from '../data/services';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Wrench,
  Layers
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Kitchen & Bath', 'Interior & Millwork', 'Exterior & Structural', 'Renovation & Energy'];

  const getTagFromService = (s: ServiceItem): string => {
    if (s.id.includes('kitchen') || s.id.includes('bathroom')) return 'Kitchen & Bath';
    if (s.id.includes('interior') || s.id.includes('carpentry')) return 'Interior & Millwork';
    if (s.id.includes('exterior') || s.id.includes('additions')) return 'Exterior & Structural';
    return 'Renovation & Energy';
  };

  const filteredServices = selectedTag === 'All'
    ? SERVICES
    : SERVICES.filter((s) => getTagFromService(s) === selectedTag);

  return (
    <div id="services-page-root" className="pt-28 pb-0 bg-[#FAF8F5]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Verified Capabilities • Gowdru Realcom & Avani Nivasa
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Architectural & Construction Services
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              From gourmet kitchen renovations and whole-home interior redesigns to energy-efficient upgrades and basement transformations.
            </p>

            {/* Filter pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                    selectedTag === tag
                      ? 'bg-[#313030] text-white shadow-xs'
                      : 'bg-[#EAE4D9] text-[#5C564E] hover:bg-[#DFD8CC]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              delay={idx * 0.05}
              className="bg-white rounded-2xl border border-[#E0D8CC] overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#C27848]/60 transition-all duration-300"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-[#2A2724]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#313030] text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {getTagFromService(service)}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-lg font-bold text-[#313030] group-hover:text-[#C27848] transition-colors font-serif">
                    {service.title}
                  </h2>

                  <p className="text-xs text-[#5C564E] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-[#F2ECE4] space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7C7469] block">
                      Key Highlights:
                    </span>
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#4A453E]">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#C27848]/15 text-[#C27848] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F2ECE4] mt-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C27848] hover:text-[#a9653a] transition-colors"
                >
                  <span>Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 bg-[#313030] text-white text-xs font-bold uppercase rounded-md hover:bg-[#C27848] transition-colors"
                >
                  Quote
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Engineering Standards Callout */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E0D8CC] flex items-center justify-center text-[#C27848] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#313030] font-serif">Quality Assurance Standard</h3>
                <p className="text-xs text-[#5C564E] mt-1 leading-relaxed">
                  Once the foundation is laid, structural construction adheres strictly to certified compressive strength and plumb tolerances.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E0D8CC] flex items-center justify-center text-[#C27848] shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#313030] font-serif">Pristine Handover Clean</h3>
                <p className="text-xs text-[#5C564E] mt-1 leading-relaxed">
                  We meticulously clean and prepare your space, ensuring a pristine handover from debris removal to final polishing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E0D8CC] flex items-center justify-center text-[#C27848] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#313030] font-serif">Bespoke Millwork & Interior Finish</h3>
                <p className="text-xs text-[#5C564E] mt-1 leading-relaxed">
                  We offer a wide range of interior customization options with boiling waterproof cores and premium veneers to match your unique style.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
