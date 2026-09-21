import React, { useState } from 'react';
import { PageId, ProjectItem, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Calendar, Maximize2, ArrowRight, CheckCircle2, IndianRupee, Clock } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Residential', 'Construction', 'Commercial', 'Interiors', 'Renovation'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div id="projects-page-root" className="pt-28 pb-0 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Portfolio of Architectural Excellence
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Selected Architectural & Turnkey Works
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              From single-floor individual havens in Balangir to luxury duplex homes at ₹2,400/sq.ft., master villas, and state-of-the-art factories.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                    activeCategory === cat
                      ? 'bg-[#313030] text-white shadow-xs'
                      : 'bg-[#EAE4D9] text-[#5C564E] hover:bg-[#DFD8CC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isHeroCard = idx === 0 || idx === 3;
            const colSpanClass = isHeroCard
              ? 'lg:col-span-8'
              : 'lg:col-span-4';

            return (
              <ScrollReveal
                key={project.id}
                delay={idx * 0.08}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-[#E0D8CC] bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#C27848]/60 flex flex-col justify-between ${colSpanClass}`}
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#313030] text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {project.category}
                      </span>
                      {project.pricing && (
                        <span className="px-3 py-1 bg-[#C27848] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                          {project.pricing}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <div className="flex items-center gap-3 text-xs text-[#D8D1C5] mb-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#E8A573]" />
                          {project.location}
                        </span>
                        {project.timeline && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#E8A573]" />
                            {project.timeline}
                          </span>
                        )}
                        {project.area && (
                          <span className="flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5 text-[#E8A573]" />
                            {project.area}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-serif font-medium group-hover:text-[#E8A573] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <p className="text-xs font-semibold text-[#8D4B20] uppercase tracking-wider">
                      Scope: {project.scope}
                    </p>
                    <p className="text-sm text-[#5C564E] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F2ECE4] grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#313030]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C27848] mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-[#F2ECE4] mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C27848] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  {project.completionYear && (
                    <span className="text-xs text-[#7C7469] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C27848]" />
                      <span>{project.completionYear}</span>
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Verified Notice Note */}
        <ScrollReveal delay={0.2} className="mt-16 p-6 rounded-xl bg-[#F5F2EC] border border-[#E0D8CC] flex items-start gap-3 text-xs text-[#5C564E]">
          <CheckCircle2 className="w-4 h-4 text-[#C27848] shrink-0 mt-0.5" />
          <p>
            <strong>Turnkey Accountability:</strong> All residential houses, duplex homes, opulent villas, and factories are backed by itemized bills of quantities, certified structural tests, and direct leadership oversight by Sharath Kumar A N and Palaksha.
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
