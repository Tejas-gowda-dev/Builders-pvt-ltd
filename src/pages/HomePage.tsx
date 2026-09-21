import React, { useState } from 'react';
import { PageId, ServiceItem, ProjectItem, ProjectCategory } from '../types';
import { COMPANY_INFO, TESTIMONIALS } from '../data/company';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { TrustSection } from '../components/TrustSection';
import { ProcessSection } from '../components/ProcessSection';
import { PricingSection } from '../components/PricingSection';
import { PartnersSliderSection } from '../components/PartnersSliderSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Star,
  Quote,
  Phone,
  Calendar,
  IndianRupee,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectPricingPlan?: (tierId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
  onSelectProject,
  onSelectPricingPlan
}) => {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('All');

  const filteredProjects = projectFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div id="home-page-root" className="space-y-0 selection:bg-[#C27848] selection:text-white">
      {/* ========================================================
          HERO SECTION: "From Blueprint to Reality: We're Your Construction Cavalry"
      ======================================================== */}
      <section
        id="hero-section"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FAF8F5] border-b border-[#EAE4DC] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#313030_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Trust Badge */}
              <ScrollReveal delay={0.05} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DF] border border-[#DDD5C7] text-xs font-semibold text-[#8D4B20]">
                <ShieldCheck className="w-4 h-4 text-[#C27848]" />
                <span>15+ Years Industry Experience • 200+ Satisfied Clients</span>
              </ScrollReveal>

              {/* Large Editorial Headline */}
              <ScrollReveal delay={0.15}>
                <span className="block text-xs sm:text-sm font-mono uppercase tracking-widest text-[#C27848] font-bold mb-3">
                  Let's Build Together
                </span>
                <h1 className="block font-serif text-3xl sm:text-5xl lg:text-[54.0633px] leading-tight text-center lg:text-left text-[#313030] cursor-crosshair">
                  From Blueprint to Reality: <br className="hidden sm:inline" />
                  <span className="italic text-[#C27848]">We're Your Construction Cavalry.</span>
                </h1>
              </ScrollReveal>

              {/* Supporting Description with Requested Font Classes */}
              <ScrollReveal delay={0.25}>
                <p className="inline font-sans text-base sm:text-lg leading-snug text-center lg:text-left text-[#313030] cursor-crosshair max-w-2xl">
                  Avani Nivasa by Gowdru Realcom brings visionary architectural brilliance, meticulous civil engineering, and exquisite customized interiors to your dream spaces across Karnataka, Orissa, and Chhattisgarh.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={0.35} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 flex-wrap">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-pricing-cta"
                  onClick={() => onNavigate('pricing')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C27848] hover:bg-[#ab6539] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>VIEW PRICING & ESTIMATOR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="hero-call-cta"
                  href={`tel:${COMPANY_INFO.contacts.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white hover:bg-[#F2ECE4] text-[#313030] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#D8D1C5] transition-all duration-200 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#C27848]" />
                  <span>CALL US TODAY</span>
                </a>
              </ScrollReveal>
            </div>

            {/* Right Architectural Image Frame */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2} className="relative">
                <div className="aspect-4/5 rounded-2xl overflow-hidden border border-[#E0D8CC] shadow-2xl bg-[#2A2724] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Avani Nivasa Master Architectural Villa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#E8A573] block mb-1">
                      Turnkey Residence • Balangir & Bengaluru
                    </span>
                    <h3 className="text-2xl font-serif">
                      Single Floor Haven & Duplex Craftsmanship
                    </h3>
                    <p className="text-xs text-[#DDD5C7] mt-1.5 leading-relaxed font-sans">
                      Complete turnkey architecture, reinforced civil core & artisanal teak millwork.
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Guarantee Badge */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 lg:bottom-8 lg:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#E0D8CC] sm:max-w-[250px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#313030]">
                    <Sparkles className="w-4 h-4 text-[#C27848]" />
                    <span>Visionary Founder Oversight</span>
                  </div>
                  <p className="text-[11px] text-[#5C564E] mt-1 leading-snug font-sans">
                    Sharath Kumar A N and Palaksha personally supervise milestones with rigorous quality standards.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST SECTION
      ======================================================== */}
      <TrustSection />

      {/* ========================================================
          SERVICES SECTION: 8 Comprehensive Offerings
      ======================================================== */}
      <section id="featured-services-section" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Comprehensive Offerings
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Our Specialized Services
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              From gourmet kitchen redesigns and whole-home remodeling to high-efficiency additions and factory construction, our experienced cavalry executes every detail.
            </p>
          </ScrollReveal>

          {/* Services Grid (8 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                delay={idx * 0.05}
                className="bg-white rounded-xl border border-[#E6E1D8] overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#C27848]/60 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#313030] text-[10px] font-bold rounded uppercase">
                      Verified
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#313030] group-hover:text-[#C27848] transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5C564E] leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#F2ECE4] space-y-1">
                      {service.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#7C7469]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C27848] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#F9F7F4] mt-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold uppercase tracking-wider text-[#C27848] hover:text-[#a9653a] transition-colors flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs text-[#7C7469] hover:text-[#313030] underline transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROJECTS: Single Floor Haven, Duplexes, Villas, Factory
      ======================================================== */}
      <section id="projects-showcase-section" className="py-20 sm:py-28 bg-[#F5F2EC] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Portfolio of Distinction
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Featured Architectural Works
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              Single-floor individual homes in Balangir Orissa, duplex homes at ₹2,400/sq.ft. with interiors, opulent villas, and industrial factories.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1} className="flex justify-center mb-10">
            <div className="flex items-center gap-1 bg-[#EAE4D9] p-1.5 rounded-xl max-w-full overflow-x-auto">
              {(['All', 'Residential', 'Construction', 'Commercial', 'Interiors', 'Renovation'] as ProjectCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                    projectFilter === cat
                      ? 'bg-[#313030] text-white shadow-sm'
                      : 'text-[#655E55] hover:text-[#252320]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                delay={idx * 0.1}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E0D8CC] bg-[#FAF8F5] transition-all duration-300 hover:shadow-2xl hover:border-[#C27848]/60 flex flex-col justify-between"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#313030] text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {project.category}
                      </span>
                      {project.pricing && (
                        <span className="px-3 py-1 bg-[#C27848] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                          {project.pricing}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-[#E6E1D8] mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#E8A573]" />
                        <span>{project.location}</span>
                        {project.timeline && <span>• {project.timeline}</span>}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium group-hover:text-[#E8A573] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#ECE5DA] grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#313030]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C27848] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between bg-white/50 border-t border-[#ECE5DA]">
                  <span className="text-xs font-semibold text-[#7C7469]">
                    Scope: <span className="text-[#313030]">{project.scope}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C27848] group-hover:translate-x-1 transition-transform">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              <span>View All Projects & Floor Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          PRICING PLANS SECTION (HOME VIEW: STEP 1 PACKAGES ONLY)
          Clicking any package navigates directly to Pricing Page with Step 2 & Estimator
      ======================================================== */}
      <PricingSection 
        showStep2={false}
        onSelectPlanForPricingPage={(tierId) => {
          if (onSelectPricingPlan) {
            onSelectPricingPlan(tierId);
          } else {
            onNavigate('pricing');
          }
        }}
        onOpenConsultation={onOpenConsultation} 
      />

      {/* ========================================================
          3-PHASE PROCESS SECTION
      ======================================================== */}
      <ProcessSection onConsultationClick={onOpenConsultation} />

      {/* ========================================================
          CLIENT TESTIMONIALS SECTION:
          "HERE’S WHAT OUR CLIENTS HAVE TO SAY"
          Upasana Sarma, Mahesh T N, Jatin Kotian, Shishir Patel
      ======================================================== */}
      <section id="testimonials-section" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Uncompromising Transparency
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              HERE’S WHAT OUR CLIENTS HAVE TO SAY
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              Real testimonials from homeowners and clients who entrusted their spaces to Avani Nivasa and Gowdru Realcom.
            </p>
          </ScrollReveal>

          {/* Testimonial Cards Grid (4 client cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal
                key={t.id}
                delay={idx * 0.08}
                className="bg-white p-7 rounded-2xl border border-[#E0D8CC] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C27848]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C27848]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#E0D8CC]" />
                  </div>

                  <p className="text-sm text-[#4A453E] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE4]">
                  <h4 className="text-sm font-bold text-[#313030] font-sans">
                    - {t.clientName}
                  </h4>
                  <p className="text-xs text-[#C27848] font-medium mt-0.5">
                    {t.projectType}
                  </p>
                  <p className="text-xs text-[#7C7469] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#C27848]" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FOUNDATION & CORE VALUES CALLOUT SECTION
      ======================================================== */}
      <section id="foundation-summary-section" className="py-20 bg-[#F4EFEA] border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
                {COMPANY_INFO.foundationHeadline}
              </span>
              <h3 className="block font-serif text-2xl sm:text-4xl text-[#313030]">
                15+ Years Proven Track Record in Karnataka, Orissa & Chhattisgarh
              </h3>
              <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
                {COMPANY_INFO.foundationStory}
              </p>
              <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
                {COMPANY_INFO.coreValuesStory}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#313030] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#C27848] transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('partners')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#313030] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#D8D1C5] hover:bg-[#FAF8F5] transition-colors"
                >
                  <span>Industry Partners</span>
                  <ChevronRight className="w-4 h-4 text-[#C27848]" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E0D8CC] shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#313030] mb-4">
                Verified Service Hubs
              </h4>
              <div className="space-y-3">
                {COMPANY_INFO.areasWeServe.map((area) => (
                  <div key={area.name} className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F5] border border-[#ECE5DA]">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C27848]" />
                      <span className="text-sm font-semibold text-[#313030]">{area.name}</span>
                      <span className="text-xs text-[#7C7469]">({area.state})</span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#C27848] bg-[#F7EFE9] px-2 py-0.5 rounded">
                      {area.type}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#ECE5DA] flex items-center justify-between text-xs text-[#7C7469]">
                <span>Regional operations also active in:</span>
                <span className="font-semibold text-[#313030]">Orissa & Chhattisgarh</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          PARTNERS LOGO SLIDER MOTION
      ======================================================== */}
      <PartnersSliderSection onOpenConsultation={onOpenConsultation} />

      {/* ========================================================
          FINAL CALL TO ACTION: PLANNING YOUR NEXT PROJECT?
      ======================================================== */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
