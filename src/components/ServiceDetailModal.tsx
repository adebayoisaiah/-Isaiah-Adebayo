import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-neutral-950 text-white rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Service Specification
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          {/* Tools & Tech (Clean unboxed typography) */}
          <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
            <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
              Implementation Tools & Platforms
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white font-medium">
              {service.tools.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span>{tool}</span>
                  {idx < service.tools.length - 1 && (
                    <span className="text-[#E50914]" aria-hidden="true">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Standard Deliverables
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Operational Benefits
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {service.keyBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#E50914] hover:bg-[#c90812] rounded-md transition-colors"
          >
            <span>Consult on {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
