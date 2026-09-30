import React from 'react';
import {
  Layers,
  Bot,
  Database,
  GitFork,
  Code,
  Zap,
  Users,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  Target,
} from 'lucide-react';
import { TOOLS_TECHNOLOGIES_DATA } from '../data/content';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#E50914]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#E50914]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#E50914]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-[#E50914]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#E50914]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#E50914]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#E50914]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#E50914]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#E50914]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#E50914]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#E50914]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#E50914]" />;
      default:
        return <Layers className="w-5 h-5 text-[#E50914]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>Infrastructure Stack</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed font-normal">
            Tools I use to build connected AI and automation systems.
          </p>
        </div>

        {/* 12 Tools Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {TOOLS_TECHNOLOGIES_DATA.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#F5F5F5] hover:bg-neutral-100 border border-neutral-200/90 hover:border-neutral-400/80 rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                  {getToolIcon(tool.icon)}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  {tool.category}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Production Ready</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
