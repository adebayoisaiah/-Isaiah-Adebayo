import React, { useState } from 'react';
import {
  ArrowRight,
  Globe,
  FileSpreadsheet,
  Database,
  Cpu,
  Tags,
  Send,
  CalendarCheck,
  BellRing,
  Play,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';

interface AutomationWorkflowSectionProps {
  onAutomateProcess: () => void;
}

export const AutomationWorkflowSection: React.FC<AutomationWorkflowSectionProps> = ({
  onAutomateProcess,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Globe className="w-5 h-5" />;
      case 2:
        return <FileSpreadsheet className="w-5 h-5" />;
      case 3:
        return <Database className="w-5 h-5" />;
      case 4:
        return <Cpu className="w-5 h-5" />;
      case 5:
        return <Tags className="w-5 h-5" />;
      case 6:
        return <Send className="w-5 h-5" />;
      case 7:
        return <CalendarCheck className="w-5 h-5" />;
      case 8:
        return <BellRing className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const handlePlayFlow = () => {
    setIsPlaying(true);
    let current = 1;
    setActiveStep(1);

    const interval = setInterval(() => {
      current += 1;
      if (current <= 8) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 900);
  };

  return (
    <section id="automation" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914] mb-3">
            <span className="w-2 h-0.5 bg-[#E50914]" />
            <span>End-to-End Orchestration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight text-balance">
            Business Automation That Connects Everything
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Eliminate operational disconnects. Automation forms an unbroken bridge connecting
            every critical touchpoint from discovery to scheduled revenue calls.
          </p>
        </div>

        {/* High-Level Pipeline Path Ribbon */}
        <div className="bg-black text-white p-4 sm:p-6 rounded-xl mb-12 shadow-sm border border-neutral-800">
          <div className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3">
            Integrated Automation Pipeline
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            {[
              'Website',
              'Lead Capture',
              'CRM',
              'AI',
              'Qualification',
              'Follow-Up',
              'Appointment',
            ].map((node, idx, arr) => (
              <React.Fragment key={node}>
                <span className="bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded text-neutral-200">
                  {node}
                </span>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#E50914] shrink-0" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Simulation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="text-sm font-semibold text-neutral-800">
            Interactive Visual Workflow (8 Unified Stages)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayFlow}
              disabled={isPlaying}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-black hover:bg-neutral-900 disabled:opacity-50 rounded-md transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isPlaying ? 'Simulating Pipeline...' : 'Run Pipeline Demo'}</span>
            </button>
            <button
              onClick={() => setActiveStep(1)}
              disabled={isPlaying}
              className="p-1.5 text-neutral-600 hover:text-black border border-neutral-300 rounded-md transition-colors"
              title="Reset to Step 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8-Step Visual Workflow Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {WORKFLOW_STEPS.map((step) => {
            const isActive = activeStep === step.stepNumber;
            const isCompleted = step.stepNumber < activeStep;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`relative rounded-xl p-5 cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-black text-white border-[#E50914] shadow-md ring-2 ring-[#E50914]'
                    : isCompleted
                    ? 'bg-white text-neutral-900 border-neutral-300'
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-neutral-900 text-[#E50914]'
                          : isCompleted
                          ? 'bg-neutral-100 text-[#E50914]'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {getStepIcon(step.stepNumber)}
                    </div>
                    <span
                      className={`font-mono text-xs font-bold tabular-nums px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#E50914] text-white' : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      0{step.stepNumber}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold mb-1.5 ${
                      isActive ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isActive ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                    isActive ? 'border-neutral-800 text-neutral-400' : 'border-neutral-100 text-neutral-500'
                  }`}
                >
                  <span className="truncate">{step.channel}</span>
                  {isActive && <span className="text-[#E50914] font-semibold">Active</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detailed System Inspector Bar */}
        {WORKFLOW_STEPS[activeStep - 1] && (
          <div className="bg-white border border-neutral-300 rounded-xl p-6 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] font-semibold">
                  <span>STAGE {activeStep} OF 8 INSPECTOR</span>
                  <span>·</span>
                  <span className="text-neutral-500">{WORKFLOW_STEPS[activeStep - 1].channel}</span>
                </div>
                <div className="text-lg font-bold text-neutral-950">
                  {WORKFLOW_STEPS[activeStep - 1].title}
                </div>
                <div className="text-sm text-neutral-600">
                  {WORKFLOW_STEPS[activeStep - 1].systemAction}
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 8))}
                  className="px-3 py-1.5 text-xs font-semibold border border-neutral-300 hover:bg-neutral-100 rounded text-neutral-700"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 8 ? prev + 1 : 1))}
                  className="px-3 py-1.5 text-xs font-semibold bg-black hover:bg-neutral-800 text-white rounded"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onAutomateProcess}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <span>Automate Your Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
