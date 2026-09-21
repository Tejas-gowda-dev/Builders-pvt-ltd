import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onEnquire }) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#E6E1D8] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#2A2724]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-transparent to-black/30" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] uppercase tracking-widest text-[#C27848] font-bold">
              Gowdru Realcom / Avani Nivas Service
            </span>
            <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-normal font-serif-heading">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7C7469] mb-2">Scope & Overview</h3>
            <p className="text-sm text-[#4A453E] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1918] mb-3">
                Architectural Highlights
              </h3>
              <ul className="space-y-2">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#5C564E]">
                    <span className="w-4 h-4 rounded-full bg-[#C27848]/15 text-[#C27848] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1918] mb-3">
                Included Deliverables
              </h3>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#5C564E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C27848] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-[#F4F1EB] rounded-lg border border-[#E6E1D8] text-xs text-[#5C564E]">
            <span className="font-semibold text-[#1A1918]">Recommended For: </span>
            {service.idealFor}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F2ECE4] border-t border-[#E6E1D8] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#7C7469] hover:text-[#1A1918] transition-colors"
          >
            Close Window
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C27848] hover:bg-[#a9653a] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Request Quote For This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
