import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, GitBranch, MessageSquare, Calendar, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'automation' | 'agent'>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const getProjectVisual = (project: PortfolioProject) => {
    // Elegant, domain-authentic technical diagram visual tailored to each project
    const isAgent = project.category === 'agent';

    return (
      <div className="relative w-full h-48 bg-neutral-950 p-4 flex flex-col justify-between overflow-hidden border-b border-neutral-800">
        {/* Top visual metadata bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <span className={`w-2 h-2 rounded-full ${isAgent ? 'bg-[#E50914]' : 'bg-white'}`} />
            {project.categoryLabel}
          </span>
          <span className="text-neutral-400">SYSTEM ARCHITECTURE</span>
        </div>

        {/* Central Graphic Simulation */}
        <div className="my-auto py-2">
          {isAgent ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-neutral-900/90 border border-neutral-800 rounded px-3 py-1.5 text-xs text-neutral-200">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>Conversational Ingestion</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400">RAG Vector</span>
              </div>
              <div className="flex items-center justify-between bg-black border border-neutral-800/80 rounded px-3 py-1.5 text-xs text-neutral-300">
                <span className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Agent Decision Engine</span>
                </span>
                <span className="text-[10px] font-mono text-[#E50914]">Action Handshake</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-neutral-900/90 border border-neutral-800 rounded px-3 py-1.5 text-xs text-neutral-200">
                <span className="flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>Webhook Event Router</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400">JSON Ingest</span>
              </div>
              <div className="flex items-center justify-between bg-black border border-neutral-800/80 rounded px-3 py-1.5 text-xs text-neutral-300">
                <span className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-neutral-400" />
                  <span>GHL CRM Synchronization</span>
                </span>
                <span className="text-[10px] font-mono text-[#E50914]">Automated Trigger</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom visual status line */}
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800/60">
          <span>PIPELINE: VERIFIED</span>
          <span className="text-white">STATUS: OPERATIONAL</span>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
              <span className="w-2 h-0.5 bg-[#E50914]" />
              <span>Project Demonstrations & Demos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
              Selected Projects
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
              Examples of AI automation and AI agent systems designed around practical business use
              cases.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-300 rounded-lg shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              All Projects (8)
            </button>
            <button
              onClick={() => setActiveCategory('automation')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'automation'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Category 1: AI Automation (4)
            </button>
            <button
              onClick={() => setActiveCategory('agent')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'agent'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Category 2: AI Agents (4)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-neutral-300/80 hover:border-[#E50914]/60 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#E50914]"
            >
              <div>
                {/* Professional Project Visual */}
                {getProjectVisual(project)}

                {/* Card Content Area */}
                <div className="p-6 sm:p-7">
                  {/* Category Indicator */}
                  <div className="text-xs uppercase font-mono tracking-wider text-[#E50914] font-semibold mb-2">
                    {project.categoryLabel}
                  </div>

                  {/* H3 Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-[#E50914] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tools Used (Clean unboxed metadata with separators per design constitution) */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                      Tools Used
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-800 font-medium">
                      {project.toolsUsed.map((tool, idx) => (
                        <React.Fragment key={tool}>
                          <span>{tool}</span>
                          {idx < project.toolsUsed.length - 1 && (
                            <span className="text-[#E50914]" aria-hidden="true">
                              •
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-[#E50914] hover:text-white rounded-md transition-colors group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                >
                  <span>View Project Details & Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
