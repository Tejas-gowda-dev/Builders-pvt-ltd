import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  MapPin,
  HeartHandshake
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="about-page-root" className="pt-28 pb-0 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              {COMPANY_INFO.foundationHeadline}
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Built on Trust and Excellence
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              Avani Nivasa by Gowdru Realcom private limited — 15+ years of industry experience and 200+ satisfied clients across Karnataka, Orissa, and Chhattisgarh.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Our Heritage & Vision
            </span>
            <h2 className="block font-serif text-2xl sm:text-3xl lg:text-4xl text-[#313030] leading-tight">
              Redefining the Construction Landscape
            </h2>
            <p className="text-base text-[#5C564E] leading-relaxed">
              {COMPANY_INFO.foundationStory}
            </p>
            <div className="p-6 rounded-2xl bg-[#F0ECE3] border border-[#E0D8CC]">
              <div className="flex items-center gap-2 text-sm font-bold text-[#313030] mb-2">
                <Sparkles className="w-4 h-4 text-[#C27848]" />
                <span>Our Core Values: Elegance, Care & Customization</span>
              </div>
              <p className="text-sm text-[#4A453E] leading-relaxed">
                {COMPANY_INFO.coreValuesStory}
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F2EC] border border-[#E0D8CC]">
                <div className="text-2xl font-bold text-[#313030] font-serif">15+</div>
                <div className="text-xs text-[#7C7469] mt-0.5">Years of Industry Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F2EC] border border-[#E0D8CC]">
                <div className="text-2xl font-bold text-[#313030] font-serif">200+</div>
                <div className="text-xs text-[#7C7469] mt-0.5">Satisfied Clients Across 3 States</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CC] bg-[#2A2724]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Excellence by Avani Nivasa Gowdru Realcom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 right-6 sm:bottom-6 sm:right-6 bg-white p-5 rounded-xl border border-[#E0D8CC] shadow-lg max-w-xs">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C27848] block mb-1">
                  Our Uncompromising Promise
                </span>
                <p className="text-xs text-[#4A453E] leading-snug">
                  "Transparent breakdown of project costs, strict safety protocols, and millimeter-precision craftsmanship."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership & Visionary Founders */}
      <section className="py-20 bg-[#F5F2EC] border-y border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Executive Leadership
            </span>
            <h2 className="block font-serif text-3xl sm:text-4xl text-[#313030] mt-2">
              Visionary Leaders Behind Avani Nivasa
            </h2>
            <p className="mt-3 text-base text-[#5C564E]">
              Dedicated professionals who bring a wealth of experience, passion, and direct on-site accountability to every project.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.founders.map((founder, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="bg-white p-8 rounded-2xl border border-[#E0D8CC] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F2EC] text-[#C27848] flex items-center justify-center font-bold text-lg border border-[#E0D8CC]">
                    {founder.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#313030] font-serif">{founder.name}</h3>
                    <p className="text-xs font-semibold text-[#C27848] uppercase tracking-wider">{founder.role}</p>
                  </div>
                  <p className="text-sm text-[#5C564E] leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center justify-between text-xs text-[#7C7469]">
                  <span>Gowdru Realcom Private Limited</span>
                  <span>15+ Yrs Industry Leadership</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve: Tumkur, Bengaluru, Mysuru, Hassan */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              AREAS WE SERVE
            </span>
            <h2 className="block font-serif text-3xl sm:text-4xl text-[#313030] leading-tight">
              Active Regional Hubs
            </h2>
            <p className="text-base text-[#5C564E] leading-relaxed">
              We provide turnkey construction, architectural design, and personalized interior redesign services with dedicated site teams in:
            </p>

            <div className="space-y-3">
              {COMPANY_INFO.areasWeServe.map((hub, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-xs">
                  <div className="flex items-center gap-3 text-sm text-[#313030] font-semibold">
                    <div className="w-6 h-6 rounded-full bg-[#C27848]/15 text-[#C27848] flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>{hub.name}, {hub.state}</span>
                  </div>
                  <span className="text-xs font-mono text-[#C27848] bg-[#F7EFE9] px-2.5 py-1 rounded">
                    {hub.type}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#7C7469] pt-2">
              Beyond Karnataka, our construction teams actively execute residential houses and industrial facilities in <strong>Orissa (Balangir)</strong> and <strong>Chhattisgarh</strong>.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <span>Schedule a Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-7 bg-[#F5F2EC] rounded-2xl p-8 sm:p-10 border border-[#E0D8CC]">
            <h3 className="text-xl font-bold text-[#313030] font-serif mb-4">
              Corporate Headquarters & Design Studio
            </h3>
            <p className="text-sm text-[#5C564E] leading-relaxed mb-6">
              Stationed in Mallathahalli, West Bengaluru, our headquarters houses our architectural drafting studio, 3D walkthrough rendering suites, and sample material library.
            </p>

            <div className="space-y-3 text-xs text-[#3E3A34] pb-6 border-b border-[#D8D1C5]">
              <div><strong>Company Name:</strong> {COMPANY_INFO.legalName}</div>
              <div><strong>Brand:</strong> {COMPANY_INFO.flagshipBrand}</div>
              <div><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}</div>
              <div><strong>Direct Contact:</strong> {COMPANY_INFO.contacts.primaryPhone} / {COMPANY_INFO.contacts.secondaryPhone}</div>
              <div><strong>Email:</strong> {COMPANY_INFO.contacts.primaryEmail} / {COMPANY_INFO.contacts.secondaryEmail}</div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-[#C27848] font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Registered & Active Private Limited Company (MCA India)</span>
            </div>
          </ScrollReveal>
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
