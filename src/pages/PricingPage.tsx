import React from 'react';
import { PageId } from '../types';
import { PricingSection } from '../components/PricingSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check, ShieldCheck, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  initialTierId?: string;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenConsultation, initialTierId }) => {
  const faqs = [
    {
      q: 'How is the ₹2,400 / sq.ft rate calculated for the ROYAL PACKAGE?',
      a: 'The ₹2,400 per sq.ft rate for the ROYAL PACKAGE encompasses end-to-end civil construction, structural engineering with Tata Tiscon TMT steel and UltraTech cement, plus complete modular kitchen and designer bedroom wardrobes. There are no sudden extra charges for basic architectural drawings, structural vetting, or site supervision.'
    },
    {
      q: 'Can I customize materials outside the standard package?',
      a: 'Yes, absolutely. Our construction cavalry provides 100% itemized specifications. If you prefer Italian marble over vitrified tiles or wish to install solar water heaters and home automation, we adjust the bill of quantities transparently with differential rate sheets.'
    },
    {
      q: 'How does stage-wise milestone payment work?',
      a: 'We never demand large upfront sums. Payments are broken down into 6–8 distinct physical milestones: Booking/Soil testing, Foundation casting, Ground floor slab, First floor slab, Masonry & plastering, Tile flooring & electrical, Modular woodwork, and Final handover.'
    },
    {
      q: 'Do you construct homes in Balangir Orissa or other regional hubs?',
      a: 'Yes! Gowdru Realcom / Avani Nivasa has delivered multiple successful residential and commercial turnkey projects in Balangir Orissa and Chhattisgarh, in addition to our core hubs in Bengaluru, Tumkur, Mysuru, and Hassan.'
    },
    {
      q: 'What warranties and guarantees are provided?',
      a: 'Every turnkey home built by Avani Nivasa comes with a 15-year structural warranty, a 5-year seepage/waterproofing guarantee, and 1-year complimentary maintenance support post-handover.'
    }
  ];

  return (
    <div id="pricing-page-root" className="pt-28 pb-0 bg-[#FAF9F6]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D9] text-[#8D4B20] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C27848]" />
              <span>Direct Transparency & Milestone Accountability</span>
            </div>
            <h1 className="block font-serif text-3xl sm:text-4xl lg:text-5xl text-[#313030] tracking-tight">
              Architectural Pricing & Turnkey Packages
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Transparent, itemized pricing backed by verified tier-1 material grade certifications. Calculate your estimate and submit your requirement directly to our founders via WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Interactive Customer Journey Pricing Section */}
      <PricingSection 
        standalone={true} 
        showStep2={true}
        initialTierId={initialTierId}
        onOpenConsultation={onOpenConsultation} 
      />

      {/* Transparent Comparison Table */}
      <section className="py-16 bg-[#F5F2EC] border-y border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C27848]">Package Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#313030] mt-1">
              What’s Included in Each Tier
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6359] mt-2">
              Compare architectural planning, structural standards, and interior finish inclusions.
            </p>
          </ScrollReveal>

          <div className="bg-white rounded-2xl border border-[#E0D8CC] shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E0D8CC]">
                  <th className="p-4 sm:p-5 font-bold text-[#313030] min-w-[160px]">Feature / Specification</th>
                  <th className="p-4 sm:p-5 font-bold text-[#313030] min-w-[150px]">BASIC PACKAGE<br /><span className="text-[11px] font-normal text-[#6B6359]">₹1,950 / sq.ft</span></th>
                  <th className="p-4 sm:p-5 font-bold text-[#313030] min-w-[150px]">PREMIUM PACKAGE<br /><span className="text-[11px] font-normal text-[#6B6359]">₹2,150 / sq.ft</span></th>
                  <th className="p-4 sm:p-5 font-bold text-[#C27848] bg-[#FAF5EE] min-w-[160px]">ROYAL PACKAGE<br /><span className="text-[11px] font-normal text-[#C27848]">₹2,400 / sq.ft (Flagship)</span></th>
                  <th className="p-4 sm:p-5 font-bold text-[#313030] min-w-[150px]">LUXURY PACKAGE<br /><span className="text-[11px] font-normal text-[#6B6359]">₹2,950 / sq.ft</span></th>
                  <th className="p-4 sm:p-5 font-bold text-[#8D4B20] bg-[#FAF7F2] min-w-[160px]">CUSTOMIZED CLIENT PACKAGE<br /><span className="text-[11px] font-normal text-[#8D4B20]">Custom Quote</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE2] text-[#4A453E]">
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">TMT Steel Grade</td>
                  <td className="p-4">Fe 500 Grade TMT</td>
                  <td className="p-4">Tata / JSW Fe 550 TMT</td>
                  <td className="p-4 bg-[#FAF5EE] font-semibold text-[#313030]">Tata Tiscon Fe 550D</td>
                  <td className="p-4">Tata Tiscon Super 550D</td>
                  <td className="p-4 bg-[#FAF7F2] font-semibold text-[#8D4B20]">Client Choice (Tata / JSW)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Cement Grade</td>
                  <td className="p-4">Grade 43/53 PPC</td>
                  <td className="p-4">UltraTech / ACC 53 Grade</td>
                  <td className="p-4 bg-[#FAF5EE] font-semibold text-[#313030]">UltraTech / ACC 53 Grade</td>
                  <td className="p-4">UltraTech Super Premium</td>
                  <td className="p-4 bg-[#FAF7F2] font-semibold text-[#8D4B20]">Client Choice (UltraTech / ACC)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Modular Kitchen</td>
                  <td className="p-4 text-[#8C8377]">Granite counter only</td>
                  <td className="p-4 text-[#8C8377]">Granite counter + provision</td>
                  <td className="p-4 bg-[#FAF5EE] text-[#128C7E] font-semibold">Included (Acrylic / Laminate)</td>
                  <td className="p-4 text-[#128C7E] font-semibold">Included (PU / Quartz Island)</td>
                  <td className="p-4 bg-[#FAF7F2] text-[#128C7E] font-semibold">100% Customized to Specs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Bedroom Wardrobes</td>
                  <td className="p-4 text-[#8C8377]">Optional add-on</td>
                  <td className="p-4 text-[#8C8377]">Optional add-on</td>
                  <td className="p-4 bg-[#FAF5EE] text-[#128C7E] font-semibold">Included (Master & 2nd Bed)</td>
                  <td className="p-4 text-[#128C7E] font-semibold">Included (All Bedrooms + Walk-in)</td>
                  <td className="p-4 bg-[#FAF7F2] text-[#128C7E] font-semibold">Custom Carpentry & Design</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Flooring</td>
                  <td className="p-4">Vitrified tiles (2x2)</td>
                  <td className="p-4">Somany/Kajaria (4x2 & 2x2)</td>
                  <td className="p-4 bg-[#FAF5EE] font-semibold text-[#313030]">Kajaria/Somany (4x2 & 2x2)</td>
                  <td className="p-4">Italian Marble / Granite</td>
                  <td className="p-4 bg-[#FAF7F2] font-semibold text-[#8D4B20]">Marble, Granite or Tiles</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Sanitary & Bath Fittings</td>
                  <td className="p-4">Cera / Hindware</td>
                  <td className="p-4">Jaquar Continental</td>
                  <td className="p-4 bg-[#FAF5EE] font-semibold text-[#313030]">Jaquar Continental / Essco</td>
                  <td className="p-4">Grohe / Kohler Designer</td>
                  <td className="p-4 bg-[#FAF7F2] font-semibold text-[#8D4B20]">Kohler / Grohe / Jaquar</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Architectural 3D Elevation</td>
                  <td className="p-4">2D Floor Plan</td>
                  <td className="p-4">3D Exterior Elevation</td>
                  <td className="p-4 bg-[#FAF5EE] text-[#128C7E] font-semibold">3D Exterior + Interior Plan</td>
                  <td className="p-4 text-[#128C7E] font-semibold">Complete 3D VR Walkthrough</td>
                  <td className="p-4 bg-[#FAF7F2] text-[#128C7E] font-semibold">Full Custom 3D & Structural</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#313030]">Structural Warranty</td>
                  <td className="p-4">10 Years</td>
                  <td className="p-4">15 Years</td>
                  <td className="p-4 bg-[#FAF5EE] font-bold text-[#C27848]">15 Years</td>
                  <td className="p-4 font-bold text-[#C27848]">15 Years + Lifelong Desk</td>
                  <td className="p-4 bg-[#FAF7F2] font-bold text-[#8D4B20]">15 Years + Custom Terms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C27848]">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#313030] mt-1">
              Frequently Asked Questions About Pricing
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="bg-white p-6 rounded-2xl border border-[#E0D8CC]">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#C27848] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#313030] font-serif">{faq.q}</h3>
                    <p className="text-xs text-[#5C564E] mt-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-[#7C7469]">Have a unique requirement or custom blueprint?</p>
            <button
              onClick={onOpenConsultation}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#C27848] hover:underline"
            >
              <span>Schedule a 1-on-1 Consultation with Founder Sharath Kumar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        onOpenConsultation={onOpenConsultation}
        headline="Ready to Turn Your Blueprint into Reality?"
        subheadline="Connect with your construction cavalry. We provide transparent estimates, on-site feasibility evaluations, and unwavering commitment to quality."
      />
    </div>
  );
};
