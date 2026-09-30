import React from 'react';
import { ArrowRight, Calendar, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative bg-black text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-neutral-900"
    >
      {/* Subtle background hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)',
          backgroundSize: '32px 32px, 64px 64px, 64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Title / Subtitle kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E50914]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" aria-hidden="true" />
              <span>Isaiah Adebayo · AI Automation & AI Agent Specialist</span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              AI Automation & AI Agents That{' '}
              <span className="text-white relative inline-block">
                Work for Your Business
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#E50914]/80 rounded-full" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              I help businesses capture leads, automate repetitive tasks, qualify prospects,
              improve follow-up, and build AI-powered systems that streamline business
              operations.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Consultation</span>
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust-oriented line */}
            <div className="pt-4 border-t border-neutral-900">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-neutral-400 tracking-wide">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E50914]" />
                  Core Competencies:
                </span>
                <span className="text-neutral-300">AI Automation</span>
                <span className="text-[#E50914]" aria-hidden="true">•</span>
                <span className="text-neutral-300">AI Agents</span>
                <span className="text-[#E50914]" aria-hidden="true">•</span>
                <span className="text-neutral-300">Lead Systems</span>
                <span className="text-[#E50914]" aria-hidden="true">•</span>
                <span className="text-neutral-300">GHL Automation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract AI / Automation Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-2 shadow-2xl overflow-hidden group">
              {/* Top Bar Window Accent */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/80 bg-neutral-900/60 rounded-t-lg text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="font-mono text-[11px] text-neutral-400 ml-2">system-architecture.graph</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">STATUS: ACTIVE</span>
              </div>

              {/* Primary Visual Container: Live Interactive Architecture Pipeline */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-neutral-950 p-4 flex flex-col justify-between">
                {/* Circuit node network SVG */}
                <div className="absolute inset-0 opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E50914" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#E50914" stopOpacity="0.1" />
                      </linearGradient>
                      <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#262626" strokeWidth="0.5" />
                      </pattern>
                    </defs>

                    <rect width="400" height="240" fill="url(#gridPattern)" />

                    {/* Laser data connection paths */}
                    <path d="M 50 80 L 150 80 L 220 130 L 340 130" stroke="url(#laserGrad)" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 50 160 L 130 160 L 220 130" stroke="#404040" strokeWidth="1.5" />
                    <path d="M 220 130 L 290 60 L 350 60" stroke="#E50914" strokeWidth="1.5" strokeOpacity="0.6" />

                    {/* Nodes */}
                    <circle cx="50" cy="80" r="6" fill="#171717" stroke="#E50914" strokeWidth="2" />
                    <circle cx="150" cy="80" r="4" fill="#E50914" />
                    <circle cx="220" cy="130" r="8" fill="#0A0A0A" stroke="#E50914" strokeWidth="2.5" />
                    <circle cx="220" cy="130" r="3" fill="#FFFFFF" />
                    <circle cx="340" cy="130" r="5" fill="#10B981" />
                    <circle cx="290" cy="60" r="4" fill="#E50914" />
                    <circle cx="350" cy="60" r="5" fill="#E50914" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="50" cy="160" r="5" fill="#171717" stroke="#737373" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Top Status & Nodes Display */}
                <div className="relative z-10 grid grid-cols-3 gap-2 text-left pt-1">
                  <div className="bg-black/80 backdrop-blur border border-neutral-800 p-2.5 rounded-lg">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      INCOMING
                    </div>
                    <div className="text-xs font-bold text-white mt-1">Multi-Channel Leads</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Web / GHL / Ads</div>
                  </div>

                  <div className="bg-black/80 backdrop-blur border border-[#E50914]/40 p-2.5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#E50914]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
                      AI AGENT
                    </div>
                    <div className="text-xs font-bold text-white mt-1">Realtime Triage</div>
                    <div className="text-[10px] text-neutral-400 font-mono">0.3s Intent Match</div>
                  </div>

                  <div className="bg-black/80 backdrop-blur border border-neutral-800 p-2.5 rounded-lg">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      DISPATCH
                    </div>
                    <div className="text-xs font-bold text-white mt-1">Calendar & CRM</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Auto Scheduled</div>
                  </div>
                </div>

                {/* Live System Floating Overlay HUD Card */}
                <div className="relative z-10 bg-black/90 backdrop-blur-md border border-neutral-800 p-3 rounded-lg text-xs space-y-2 mt-4 shadow-xl">
                  <div className="flex items-center justify-between text-neutral-300 font-medium">
                    <span className="flex items-center gap-1.5 text-white">
                      <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                      Autonomous System Engine
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px]">99.98% SLA</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] text-neutral-400 border-t border-neutral-800/80 pt-2 font-mono">
                    <div>
                      <span className="block text-neutral-500 text-[10px]">INGESTION</span>
                      <span className="text-white font-medium">API Webhooks</span>
                    </div>
                    <div>
                      <span className="block text-neutral-500 text-[10px]">RELIABILITY</span>
                      <span className="text-white font-medium">Deterministic</span>
                    </div>
                    <div>
                      <span className="block text-neutral-500 text-[10px]">HANDOFF</span>
                      <span className="text-[#E50914] font-medium">Sub-second</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean back subtle decorative element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E50914]/10 to-transparent blur-2xl -z-10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
