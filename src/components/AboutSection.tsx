import React from 'react';
import { ArrowRight, Shield, Cpu, Phone, MessageSquare, CheckCircle, Zap, Terminal, ExternalLink } from 'lucide-react';

interface AboutSectionProps {
  onBuildSomething: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBuildSomething }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authoritative Verified Specialist Credential Card (No Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden group">
              {/* Subtle hairline grid background */}
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)',
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px',
                }}
                aria-hidden="true"
              />

              {/* Header: Verified Status & Monogram */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/80 flex items-center justify-center font-display font-black text-white text-base tracking-wider shadow-inner">
                    <span className="text-[#E50914]">I</span>A
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Profile Verification
                    </div>
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified Specialist</span>
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/30 text-[11px] font-mono font-semibold text-[#E50914] uppercase tracking-wider">
                  Direct Line
                </div>
              </div>

              {/* Identity & Direct Channels */}
              <div className="space-y-3 relative z-10">
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  Isaiah Adebayo
                </div>
                <div className="text-sm font-medium text-[#E50914] flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 shrink-0" />
                  <span>AI Automation & AI Agent Specialist</span>
                </div>

                {/* Direct Contact CTAs */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href="https://wa.me/2348140445713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-800/60 text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Me</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
                  </a>

                  <a
                    href="tel:08140445713"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/60 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>Call: 08140445713</span>
                  </a>
                </div>
              </div>

              {/* Core Execution Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-neutral-800/80 relative z-10">
                <div className="bg-neutral-900/60 border border-neutral-800 p-2.5 rounded-lg text-center">
                  <div className="font-display font-extrabold text-lg text-white">100%</div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-tight mt-0.5">
                    Deterministic
                  </div>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 p-2.5 rounded-lg text-center">
                  <div className="font-display font-extrabold text-lg text-white">24/7</div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-tight mt-0.5">
                    Autonomous
                  </div>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 p-2.5 rounded-lg text-center">
                  <div className="font-display font-extrabold text-lg text-[#E50914]">&lt; 1s</div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-tight mt-0.5">
                    Response
                  </div>
                </div>
              </div>

              {/* Architectural Capabilities */}
              <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs text-neutral-300 relative z-10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Core Implementation Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Autonomous Agents', 'GHL Lead Systems', 'Make / Zapier', 'CRM Automation', 'Custom Webhooks', 'Fallback Safeguards'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 font-mono"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-[#E50914]/15 rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914]">
              <span className="w-2 h-0.5 bg-[#E50914]" />
              <span>Consultant Profile</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
              About Me
            </h2>

            <div className="space-y-2">
              <div className="text-2xl font-bold text-neutral-900 font-display">
                Isaiah Adebayo
              </div>
              <div className="text-base font-semibold text-[#E50914]">
                AI Automation & AI Agent Specialist
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              <p>
                I specialize in AI automation and business process automation, helping businesses
                reduce repetitive work, improve lead management, and create smarter customer
                experiences.
              </p>
              <p>
                My focus is on building practical systems that connect AI, automation, CRM
                platforms, and business workflows.
              </p>
            </div>

            {/* Core Practice Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-neutral-900">Deterministic Reliability</div>
                  <div className="text-xs text-neutral-600">Built to fail gracefully with logging</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-neutral-900">Practical AI Integration</div>
                  <div className="text-xs text-neutral-600">Grounded strictly in your business knowledge</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onBuildSomething}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-black hover:bg-neutral-900 active:bg-neutral-800 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="w-4 h-4 text-[#E50914]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
