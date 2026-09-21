import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, Maximize2, Check, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onEnquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEnquire }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!project) return null;

  const currentPhoto = project.gallery[activePhotoIdx] || project.image;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#E6E1D8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Viewer */}
        <div className="relative h-72 sm:h-96 w-full bg-[#1A1918]">
          <img
            src={currentPhoto}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          <button
            onClick={onClose}
            aria-label="Close project view"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Info on photo */}
          <div className="absolute bottom-4 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#C27848] text-white">
                  {project.category}
                </span>
                {project.pricing && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white text-[#313030]">
                    {project.pricing}
                  </span>
                )}
              </div>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-normal font-serif">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#D8D1C5] flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E8A573]" />
                {project.location}
              </span>
              {project.timeline && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#E8A573]" />
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
          </div>
        </div>

        {/* Thumbnail Selector if multi-photo */}
        {project.gallery.length > 1 && (
          <div className="bg-[#1C1A18] px-6 py-2.5 flex items-center gap-3 overflow-x-auto border-b border-[#2F2C28]">
            <span className="text-[11px] text-[#A89E92] uppercase tracking-wider font-semibold mr-1">
              Views:
            </span>
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActivePhotoIdx(i)}
                className={`relative w-16 h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                  activePhotoIdx === i ? 'border-[#C27848] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C7469]">
              Scope of Work
            </span>
            <p className="text-base font-medium text-[#1A1918] mt-1">{project.scope}</p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C7469]">
              Project Overview
            </span>
            <p className="text-sm text-[#4A453E] leading-relaxed mt-1">{project.summary}</p>
          </div>

          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1918] block mb-3">
              Architectural & Structural Highlights
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#5C564E]">
                  <span className="w-4 h-4 rounded-full bg-[#C27848]/15 text-[#C27848] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#F2ECE4] border-t border-[#E6E1D8] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#7C7469] hover:text-[#1A1918] transition-colors"
          >
            Close View
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(project.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A2724] hover:bg-[#C27848] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Enquire About Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
