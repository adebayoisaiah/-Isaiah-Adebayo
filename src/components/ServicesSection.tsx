import React from 'react';
import {
  Bot,
  Filter,
  CheckCheck,
  MessageSquareText,
  MailCheck,
  CalendarCheck2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onDiscussProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onDiscussProject,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#E50914]" />;
      case 'Filter':
        return <Filter className="w-6 h-6 text-[#E50914]" />;
      case 'CheckCheck':
        return <CheckCheck className="w-6 h-6 text-[#E50914]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#E50914]" />;
      case 'MailCheck':
        return <MailCheck className="w-6 h-6 text-[#E50914]" />;
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-6 h-6 text-[#E50914]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Core Offerings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            AI & Automation Services
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
            Practical AI and automation solutions designed to help businesses save time,
            manage leads, and improve customer communication.
          </p>
        </div>

        {/* 6 Professional Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl border border-neutral-200/90 hover:border-[#E50914]/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#E50914]"
            >
              <div>
                {/* Header with Icon & Editorial Index */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-950 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-semibold tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* H3 Service Title */}
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#E50914] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>

                {/* Tools Used (Clean unboxed metadata per Zero-Pill rule) */}
                <div className="pt-4 border-t border-neutral-100 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                    Tools & Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-700 font-medium">
                    {service.tools.map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span>{tool}</span>
                        {tIdx < service.tools.length - 1 && (
                          <span className="text-[#E50914]" aria-hidden="true">
                            •
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Card CTA */}
              <button
                type="button"
                onClick={() => onSelectService(service)}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-[#E50914] transition-colors group/btn self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onDiscussProject}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-black hover:bg-neutral-900 active:bg-neutral-800 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#E50914]" />
          </button>
        </div>
      </div>
    </section>
  );
};
