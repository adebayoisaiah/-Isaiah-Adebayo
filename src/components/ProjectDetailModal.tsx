import React from 'react';
import { X, GitBranch, ArrowRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-neutral-950 text-white rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Project Architecture Breakdown
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="text-xs uppercase font-mono text-[#E50914] font-semibold mb-1.5">
              {project.categoryLabel} Project Specification
            </div>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Architecture Summary Box */}
          <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
              <Terminal className="w-4 h-4 text-[#E50914]" />
              <span>SYSTEM ARCHITECTURE OVERVIEW</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.architectureSummary}
            </p>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Trigger & Execution Flow:
            </div>
            <div className="space-y-2.5">
              {project.flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80 text-xs sm:text-sm text-neutral-200"
                >
                  <span className="font-mono text-xs text-[#E50914] font-bold mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Integrations */}
          <div className="pt-2 border-t border-neutral-800">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Integrated Tools & Webhooks
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-300 font-medium">
              {project.toolsUsed.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span className="text-white">{tool}</span>
                  {idx < project.toolsUsed.length - 1 && (
                    <span className="text-[#E50914]" aria-hidden="true">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
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
              onInquireSimilar(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#E50914] hover:bg-[#c90812] rounded-md transition-colors"
          >
            <span>Request System Implementation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
