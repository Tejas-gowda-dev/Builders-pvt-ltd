import React, { useState } from 'react';
import { STRUCTURED_PROCESS_PHASES } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, ArrowRight, HardHat, Compass, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC<{ onConsultationClick?: () => void }> = ({ onConsultationClick }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = STRUCTURED_PROCESS_PHASES[activePhaseIndex];

  return (
    <section id="our-process-section" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EBE1] text-[#9E5D34] rounded-full text-xs font-semibold uppercase tracking-widest border border-[#E3DACD]">
            <Compass className="w-3.5 h-3.5" />
            Turnkey Methodology
          </span>
          <h2 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[46px] leading-tight text-center text-[#313030]">
            Our Proven 3-Phase Construction & Craftsmanship Process
          </h2>
          <p className="mt-3 inline font-sans text-base sm:text-lg leading-relaxed text-center text-[#5C564E] max-w-2xl">
            From the initial floor plan blueprint to the final handover and custom millwork, every stage is driven by rigorous engineering, uncompromising safety, and transparent budgets.
          </p>
        </ScrollReveal>

        {/* Phase Selector Tabs */}
        <ScrollReveal delay={0.1} className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-[#EFE9DF] rounded-xl border border-[#E2DAD0] shadow-inner max-w-full overflow-x-auto">
            {STRUCTURED_PROCESS_PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.phaseId}
                  id={`process-phase-tab-${phase.phaseId}`}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#313030] text-white shadow-md'
                      : 'text-[#655E55] hover:text-[#252320] hover:bg-[#E7E0D4]'
                  }`}
                >
                  <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${isActive ? 'bg-[#C27848] text-white' : 'bg-[#DDD5C7] text-[#554E46]'}`}>
                    0{idx + 1}
                  </span>
                  <span>{phase.phaseTitle}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Phase Details Card */}
        <ScrollReveal delay={0.2} className="mt-10 bg-white rounded-2xl border border-[#E6DFC6]/50 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Step Breakdown */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C27848] bg-[#F7EFE9] px-2.5 py-1 rounded border border-[#EDDEC6]">
                    {activePhase.badge}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#7C7469] font-medium">
                    Comprehensive Framework
                  </span>
                </div>

                <h3 className="mt-4 block font-serif text-2xl sm:text-3xl text-[#313030]">
                  {activePhase.phaseTitle} Execution
                </h3>

                {/* Sub-steps */}
                <div className="mt-8 space-y-6">
                  {activePhase.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA]">
                      <div className="w-8 h-8 rounded-lg bg-[#313030] text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2A2724] tracking-wide uppercase">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm text-[#5C564E] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-[#EAE4DC] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#7C7469]">
                  <HardHat className="w-4 h-4 text-[#C27848]" />
                  <span>On-site supervision & digital tracking</span>
                </div>

                {activePhaseIndex < STRUCTURED_PROCESS_PHASES.length - 1 ? (
                  <button
                    id="next-process-phase-btn"
                    onClick={() => setActivePhaseIndex(activePhaseIndex + 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#313030] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#C27848] transition-colors"
                  >
                    <span>Next: {STRUCTURED_PROCESS_PHASES[activePhaseIndex + 1].phaseTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id="initiate-project-process-btn"
                    onClick={onConsultationClick}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C27848] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#ad673b] transition-colors shadow-sm"
                  >
                    <span>Schedule Site Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Authentic Labor & On-Site Imagery */}
            <div className="lg:col-span-5 bg-[#252320] relative min-h-[320px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8 text-white">
              <img
                src={activePhase.image}
                alt={activePhase.imageAlt}
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D1B] via-[#1F1D1B]/50 to-transparent" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded text-[11px] font-mono tracking-wider mb-3">
                  <Sparkles className="w-3 h-3 text-[#E8A573]" />
                  <span>FIELD DOCUMENTATION</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  {activePhase.imageCaption}
                </p>
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 font-mono">
                  <span>Standard: BIS / NBC Compliant</span>
                  <span className="flex items-center gap-1 text-[#E8A573]">
                    <CheckCircle2 className="w-3 h-3" /> Zero Tolerances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

