export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  deliverables: string[];
  keyBenefits: string[];
  iconName: string;
}

export interface AiAgentFeature {
  id: string;
  title: string;
  description: string;
  badge: string;
  samplePrompt: string;
  sampleResponse: string;
  capabilities: string[];
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  systemAction: string;
  channel: string;
}

export interface PortfolioProject {
  id: string;
  category: 'automation' | 'agent';
  categoryLabel: 'AI Automation' | 'AI Agents';
  title: string;
  description: string;
  toolsUsed: string[];
  architectureSummary: string;
  flowSteps: string[];
  samplePayload?: string;
}

export interface ToolTechnology {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'AI Implementation' | 'Pricing & Investment' | 'Timelines & Process';
}
