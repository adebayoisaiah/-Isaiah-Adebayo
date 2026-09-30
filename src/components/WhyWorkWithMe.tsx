import React from 'react';
import { Target, Cpu, Workflow, TrendingUp } from 'lucide-react';
import { WHY_WORK_WITH_ME_DATA } from '../data/content';

export const WhyWorkWithMe: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#E50914]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#E50914]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#E50914]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#E50914]" />;
      default:
        return <Target className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Value & Distinction</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Why Work With Me
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
            A disciplined engineering approach focused on measurable utility, client ownership, and
            sustainable automation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_WORK_WITH_ME_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-black rounded-xl p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-xs">
                  {getCardIcon(item.icon)}
                </div>

                <div className="font-mono text-xs text-neutral-400 font-semibold mb-2">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#E50914] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-neutral-800 leading-relaxed mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                <span>Client-First Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
