import React from 'react';
import { COMPANY_INFO, TRUST_PILLARS } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Users, Receipt, Hammer, Clock, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C27848]" />,
  Users: <Users className="w-5 h-5 text-[#C27848]" />,
  Receipt: <Receipt className="w-5 h-5 text-[#C27848]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#C27848]" />,
  Clock: <Clock className="w-5 h-5 text-[#C27848]" />
};

export const TrustSection: React.FC = () => {
  return (
    <section id="trust-foundation-section" className="py-20 bg-[#F5F2EC] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verified Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-[#D8D1C5]">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} className="flex flex-col space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#313030] font-serif">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#313030]">{stat.label}</span>
              <span className="text-xs text-[#7C7469]">{stat.caption}</span>
            </ScrollReveal>
          ))}
        </div>

        {/* Header */}
        <ScrollReveal className="pt-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D9] text-[#8D4B20] text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C27848]" />
            <span>Proven Track Record & Accountability</span>
          </div>
          <h2 className="block font-serif text-2xl sm:text-3xl lg:text-4xl text-[#313030] tracking-tight">
            Construction Rooted in Integrity, Care & Customization
          </h2>
          <p className="mt-4 text-base text-[#5C564E] leading-relaxed">
            Founded by Sharath Kumar A N and Palaksha, Avani Nivasa by Gowdru Realcom private limited has built a lasting reputation across Karnataka, Orissa, and Chhattisgarh. Every project is backed by verified engineering discipline, transparent itemized billing, and dedicated founder oversight.
          </p>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.08}
              className="bg-[#FAF8F5] p-7 rounded-2xl border border-[#E0D8CC] hover:border-[#C27848]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F5F2EC] flex items-center justify-center mb-5 border border-[#E0D8CC]">
                  {iconMap[pillar.iconName] || <ShieldCheck className="w-5 h-5 text-[#C27848]" />}
                </div>
                <h3 className="text-lg font-bold text-[#313030] mb-2 font-serif">{pillar.title}</h3>
                <p className="text-xs text-[#5C564E] leading-relaxed">{pillar.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex items-center text-[11px] font-semibold text-[#7C7469]">
                <span>Verified Client Assurance</span>
              </div>
            </ScrollReveal>
          ))}

          {/* Regional Hubs Callout Card */}
          <ScrollReveal delay={0.25} className="bg-gradient-to-br from-[#16274D] to-[#0E1B38] text-[#F1F5F9] p-7 rounded-2xl border border-[#233C70] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1F3666] flex items-center justify-center mb-5 border border-[#E5A96A]/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#E5A96A]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-serif">Active Service Hubs</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Active civil and interior teams across Karnataka, Orissa, and Chhattisgarh:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[#E2E8F0]">
                {COMPANY_INFO.areasWeServe.map((area, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5A96A]" />
                      <span>{area.name}</span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8] uppercase font-semibold">{area.type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#233C70] text-[11px] text-[#CBD5E1]">
              Corporate Office: Mallathahalli, Bengaluru
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
