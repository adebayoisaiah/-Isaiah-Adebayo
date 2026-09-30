import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, DollarSign, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data/content';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onBookConsultation: () => void;
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onBookConsultation,
  onAskQuestion,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  // Initialize with the first item open so the accordion format is immediately obvious
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const categories = [
    { label: 'All Questions', value: 'All', icon: HelpCircle },
    { label: 'AI Implementation', value: 'AI Implementation', icon: Sparkles },
    { label: 'Pricing & Investment', value: 'Pricing & Investment', icon: DollarSign },
    { label: 'Timelines & Process', value: 'Timelines & Process', icon: Clock },
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Common Client Inquiries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Clear, transparent answers about AI implementation reliability, fixed pricing
            structures, and project delivery timelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.value;
            const count =
              cat.value === 'All'
                ? FAQ_DATA.length
                : FAQ_DATA.filter((i) => i.category === cat.value).length;

            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-black text-white shadow-sm ring-1 ring-black'
                    : 'bg-white text-neutral-700 hover:text-black hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? 'text-[#E50914]' : 'text-neutral-500'
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-neutral-800 text-neutral-300'
                      : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-neutral-400/80 shadow-md ring-1 ring-neutral-200/50'
                    : 'border-neutral-200 hover:border-neutral-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] cursor-pointer group"
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#E50914]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      <span>{faq.category}</span>
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-black leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 mt-1 ${
                      isOpen
                        ? 'bg-black text-white rotate-180'
                        : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expandable Content with standard transition */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context & Direct Question Action */}
        <div className="mt-12 bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-display text-lg font-bold text-neutral-900">
              Have a question specific to your business workflow?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every operation has unique variables. Let’s review your specific tech stack, manual bottlenecks, and automation goals directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onAskQuestion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#E50914]" />
              <span>Ask in Contact Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
