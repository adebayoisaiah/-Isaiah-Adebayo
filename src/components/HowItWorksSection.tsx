import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Process & Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
            A structured, reliable four-phase implementation ensuring every AI agent and
            automation delivers measurable operational value.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline / Mobile: Vertical Timeline */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-neutral-200 -z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-[#E50914] via-[#E50914]/50 to-neutral-200 w-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl border lg:border-none border-neutral-200 flex flex-col"
              >
                {/* Step Node Header */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white font-mono text-sm font-bold flex items-center justify-center border-4 border-white shadow-sm ring-2 ring-[#E50914]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-display">
                    {step.title}
                  </h3>
                </div>

                {/* Core Copy */}
                <p className="text-sm font-semibold text-neutral-900 leading-relaxed mb-2">
                  {step.description}
                </p>

                {/* Extended Details */}
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {step.details}
                </p>

                {/* Step subtle indicator */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="text-[#E50914]">Planned & Tested</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
