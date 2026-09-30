import React, { useState } from 'react';
import { Bot, Check, CornerDownLeft, Sparkles, User, RefreshCw } from 'lucide-react';
import { AI_AGENTS_DATA } from '../data/content';

interface AiAgentsSectionProps {
  onBuildAgent: () => void;
}

export const AiAgentsSection: React.FC<AiAgentsSectionProps> = ({ onBuildAgent }) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AI_AGENTS_DATA[0].id);
  const [customQuery, setCustomQuery] = useState('');
  const [simulatedReply, setSimulatedReply] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const currentAgent =
    AI_AGENTS_DATA.find((a) => a.id === selectedAgentId) || AI_AGENTS_DATA[0];

  const handleSimulateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    setIsTyping(true);
    setSimulatedReply(null);

    setTimeout(() => {
      setIsTyping(false);
      // Realistic grounded simulation response tailored to agent persona
      if (currentAgent.id === 'lead-qualification-agent') {
        setSimulatedReply(
          `"Thanks for reaching out! To tailor our automation roadmap: What is your primary industry, and what is your current monthly lead intake volume?"`
        );
      } else if (currentAgent.id === 'customer-support-agent') {
        setSimulatedReply(
          `"According to our knowledge base: All workflows include complete webhook error handling, automated retry logic, and an administrative notification alert."`
        );
      } else if (currentAgent.id === 'appointment-booking-agent') {
        setSimulatedReply(
          `"I can help schedule that. I have openings tomorrow at 1:30 PM EST and Friday at 10:00 AM EST. Does either time work, or would you prefer a different day?"`
        );
      } else {
        setSimulatedReply(
          `"Understood. We frequently architect that exact sequence: web capture → CRM record creation → instant AI qualification → calendar invite dispatch. Shall we book a brief review?"`
        );
      }
    }, 600);
  };

  return (
    <section id="ai-agents" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            AI Agents Built for Real Business Tasks
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
            AI agents can do more than answer questions. They can communicate with customers,
            qualify leads, use business information, and help complete repetitive tasks.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AI_AGENTS_DATA.map((agent) => {
            const isSelected = agent.id === currentAgent.id;
            return (
              <div
                key={agent.id}
                onClick={() => {
                  setSelectedAgentId(agent.id);
                  setSimulatedReply(null);
                  setCustomQuery('');
                }}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-black shadow-lg scale-[1.01]'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-900 border-neutral-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-neutral-900 text-[#E50914]' : 'bg-white text-neutral-900'
                      }`}
                    >
                      <Bot className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isSelected ? 'text-[#E50914]' : 'text-neutral-500'
                      }`}
                    >
                      {agent.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isSelected ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    {agent.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {agent.description}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t text-xs font-medium flex items-center justify-between ${
                    isSelected ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200 text-neutral-500'
                  }`}
                >
                  <span>{isSelected ? 'Live in simulator' : 'Click to inspect'}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-[#E50914]' : 'bg-neutral-300'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Live Agent Logic & Simulator Console */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
          {/* Top Console Bar */}
          <div className="px-6 py-4 border-b border-neutral-800 bg-neutral-900/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Interactive Agent Demo: {currentAgent.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span>Grounding: Knowledge Base</span>
              <span className="text-neutral-600">|</span>
              <span>Guardrails: Strict</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Console: Capabilities & System Specs */}
            <div className="lg:col-span-5 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800 space-y-6">
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                  System Capabilities
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{currentAgent.title}</h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {currentAgent.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Core Execution Rules:
                </div>
                <ul className="space-y-2.5">
                  {currentAgent.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <div className="font-semibold text-neutral-200">Integration Target:</div>
                <p>
                  GoHighLevel CRM • Webhooks • Multi-turn conversational memory • Verified
                  business docs
                </p>
              </div>
            </div>

            {/* Right Console: Interactive Chat Preview */}
            <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between bg-black">
              {/* Message History */}
              <div className="space-y-4 mb-6">
                {/* User message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-neutral-800 text-neutral-100 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-sm max-w-md shadow-sm border border-neutral-700/50">
                    <p>{currentAgent.samplePrompt}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Agent verified response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E50914] flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs sm:text-sm p-4 rounded-2xl rounded-tl-sm max-w-md shadow-sm space-y-2">
                    <p className="leading-relaxed">{currentAgent.sampleResponse}</p>
                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
                      <span>✓ Intent Identified</span>
                      <span>·</span>
                      <span>✓ CRM Tag Queued</span>
                    </div>
                  </div>
                </div>

                {/* Custom simulated reply if triggered */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-neutral-400 pl-11">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#E50914]" />
                    <span>Agent evaluating response against knowledge base...</span>
                  </div>
                )}

                {simulatedReply && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E50914] flex items-center justify-center text-white shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs sm:text-sm p-4 rounded-2xl rounded-tl-sm max-w-md shadow-sm space-y-2">
                      <p className="leading-relaxed">{simulatedReply}</p>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        ✓ Contextual action executed
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive test input */}
              <form onSubmit={handleSimulateCustom} className="relative">
                <input
                  type="text"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder={`Try asking: "Can this agent connect to our GoHighLevel calendar?"`}
                  className="w-full bg-neutral-900 text-white placeholder-neutral-500 text-xs sm:text-sm rounded-lg pl-4 pr-12 py-3 border border-neutral-800 focus:outline-none focus:border-[#E50914] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!customQuery.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white bg-[#E50914] hover:bg-[#c90812] disabled:opacity-40 disabled:hover:bg-[#E50914] rounded-md transition-colors"
                  aria-label="Send query"
                >
                  <CornerDownLeft className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onBuildAgent}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <span>Build an AI Agent</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
