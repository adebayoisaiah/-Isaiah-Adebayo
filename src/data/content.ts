import {
  ServiceItem,
  AiAgentFeature,
  WorkflowStep,
  PortfolioProject,
  ToolTechnology,
  FaqItem,
} from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-agent-development',
    title: 'AI Agent Development',
    shortDescription:
      'Build AI agents that communicate with customers, answer questions, qualify prospects, collect information, and perform business tasks.',
    fullDescription:
      'Custom autonomous AI agents engineered to sit directly in your communication channels. Trained on your exact business knowledge base, these agents handle inquiries 24/7, ask targeted qualifying questions, collect verified prospect data, and trigger real-time actions across your CRM and operational tools.',
    tools: ['AI Agents', 'Knowledge Bases', 'APIs', 'CRM'],
    deliverables: [
      'Custom system prompt architecture & persona definition',
      'Vectorized knowledge base ingestion (PDFs, docs, FAQs)',
      'Direct API webhook integrations for dynamic action execution',
      'Fallbacks with seamless human agent handoff triggers',
    ],
    keyBenefits: [
      'Instant 24/7 engagement without latency',
      'Accurate answers grounded strictly in business documentation',
      'Consistent customer qualification and data capture',
    ],
    iconName: 'Bot',
  },
  {
    id: 'lead-capture-automation',
    title: 'Lead Capture Automation',
    shortDescription:
      'Capture leads from websites, forms, landing pages, and funnels and automatically organize them inside the CRM.',
    fullDescription:
      'Reliable capture pipelines that connect all inbound touchpoints—including website forms, landing page funnels, ad campaigns, and chat widgets—directly into your centralized CRM with zero data loss or manual copy-pasting.',
    tools: ['GoHighLevel', 'Forms', 'Workflows', 'Webhooks', 'CRM'],
    deliverables: [
      'Multi-source inbound webhook receivers',
      'Deduplication and contact standardization logic',
      'Intelligent lead tagging and pipeline attribution',
      'Instant team notification alerts (Slack, Email, SMS)',
    ],
    keyBenefits: [
      'Zero leads slip through cracks',
      'Clean, organized contact records with accurate origin source',
      'Immediate speed-to-lead advantage for new inquiries',
    ],
    iconName: 'Filter',
  },
  {
    id: 'lead-qualification-automation',
    title: 'Lead Qualification Automation',
    shortDescription:
      'Automatically collect prospect information, qualify leads, categorize them, and route them to the correct workflow.',
    fullDescription:
      'Algorithmic and AI-driven qualification workflows that analyze incoming inquiries against your specific ideal customer profile (ICP). Inquiries are scored, segmented, and automatically assigned to the right pipeline tier.',
    tools: ['GoHighLevel', 'AI', 'Workflows', 'Custom Fields'],
    deliverables: [
      'Custom field scoring and qualification matrices',
      'Automated intent and budget classification',
      'Dynamic routing rules for high-value vs. nurture prospects',
      'Pipeline stage synchronization based on qualification score',
    ],
    keyBenefits: [
      'Sales team focuses only on qualified, high-intent prospects',
      'Faster turnaround time for enterprise or high-ticket inquiries',
      'Elimination of manual vetting hours',
    ],
    iconName: 'CheckCheck',
  },
  {
    id: 'conversational-ai',
    title: 'Conversational AI',
    shortDescription:
      'Build AI-powered conversations that answer questions, collect information, qualify prospects, and guide customers toward the next step.',
    fullDescription:
      'Natural, multi-turn conversational experiences deployed across web chat, SMS, and messaging platforms. The conversational flow feels natural, respects business boundaries, and guides visitors smoothly toward consultation bookings or purchase decisions.',
    tools: ['AI Agents', 'Knowledge Bases', 'CRM'],
    deliverables: [
      'Multi-turn conversational flow design',
      'Context-aware memory retention across chat sessions',
      'Tone-of-voice alignment matching your brand guidelines',
      'Live CRM conversation logging and transcript storage',
    ],
    keyBenefits: [
      'Natural client interaction without robotic decision trees',
      'Higher visitor-to-lead conversion rates',
      'Frictionless transition to calendar booking',
    ],
    iconName: 'MessageSquareText',
  },
  {
    id: 'follow-up-automation',
    title: 'Follow-Up Automation',
    shortDescription:
      'Automate SMS and email follow-ups so businesses can consistently communicate with and nurture leads.',
    fullDescription:
      'Multi-channel nurture sequences that trigger within seconds of lead capture and adapt dynamically based on lead behavior (opens, clicks, replies, or lack of response). Ensures prospects stay engaged without human intervention.',
    tools: ['GoHighLevel', 'SMS', 'Email', 'Workflows'],
    deliverables: [
      'Behavior-triggered SMS & email sequence architecture',
      'Time-zone aware delivery windows to avoid off-hour messaging',
      'Stop-on-response rules to avoid redundant follow-ups',
      'Automated re-engagement sequences for dormant contacts',
    ],
    keyBenefits: [
      'Under 2-minute average response time to initial inquiries',
      'Consistent touchpoints without sales rep fatigue',
      'Higher appointment conversion from cold/warm leads',
    ],
    iconName: 'MailCheck',
  },
  {
    id: 'appointment-booking-automation',
    title: 'Appointment Booking Automation',
    shortDescription:
      'Create systems that help qualified prospects schedule appointments and automatically receive confirmations and reminders.',
    fullDescription:
      'Frictionless calendar scheduling systems tailored for qualified leads. Includes automatic calendar slot matching, pre-meeting question intake, calendar invites, two-way SMS reminders, and post-booking team notifications.',
    tools: ['GoHighLevel', 'Calendar', 'Workflows', 'AI'],
    deliverables: [
      'Custom calendar widget integration with timezone detection',
      'Automated qualification gate before booking confirmation',
      'SMS and email reminder sequence (24hr, 2hr, 10min)',
      'Automated rescheduling and cancellation handling',
    ],
    keyBenefits: [
      'Drastically reduced no-show rates through timed reminders',
      'No back-and-forth email scheduling exchanges',
      'Pre-populated meeting notes directly in your CRM record',
    ],
    iconName: 'CalendarCheck2',
  },
];

export const AI_AGENTS_DATA: AiAgentFeature[] = [
  {
    id: 'lead-qualification-agent',
    title: 'Lead Qualification Agent',
    badge: 'Qualification',
    description:
      'Engages prospects, asks qualification questions, collects information, and identifies potential leads.',
    samplePrompt:
      '"Hi, we need to automate our inbound web inquiries and sync them with our CRM."',
    sampleResponse:
      '"Understood. To help route this accurately: roughly how many inbound leads does your team process monthly, and what CRM or pipeline tool are you currently running?"',
    capabilities: [
      'Identifies budget, timeline, and decision-maker status',
      'Captures email, business name, and operational pain points',
      'Tags records and routes VIP prospects to urgent follow-up',
    ],
  },
  {
    id: 'customer-support-agent',
    title: 'Customer Support Agent',
    badge: 'Support',
    description:
      'Answers common customer questions using an approved business knowledge base.',
    samplePrompt:
      '"What are your standard turnaround times for custom GoHighLevel workflow setups?"',
    sampleResponse:
      '"Standard custom workflow implementations are typically scoped, configured, and tested within 5 to 10 business days following the initial architecture review."',
    capabilities: [
      'Grounds replies strictly in verified company documentation',
      'Avoids AI hallucinations by adhering to verified knowledge limits',
      'Escalates complex or flagged issues directly to team members',
    ],
  },
  {
    id: 'appointment-booking-agent',
    title: 'Appointment Booking Agent',
    badge: 'Scheduling',
    description:
      'Helps prospects find the appropriate appointment option and guides them through booking.',
    samplePrompt:
      '"I’d like to speak with Isaiah regarding an AI agent build for our sales team."',
    sampleResponse:
      '"I can arrange a 30-minute consultation. We have availability this Thursday at 2:00 PM EST or Friday at 11:00 AM EST. Which window suits your calendar best?"',
    capabilities: [
      'Queries real-time calendar availability without double-booking',
      'Verifies attendee timezone, phone number, and meeting topic',
      'Issues calendar invitations and dispatches SMS confirmation',
    ],
  },
  {
    id: 'ai-sales-assistant',
    title: 'AI Sales Assistant',
    badge: 'Sales',
    description:
      'Answers product or service questions, understands customer needs, and guides prospects toward the next step.',
    samplePrompt:
      '"We are losing leads because our team takes 4 hours to reply. Can automation solve this?"',
    sampleResponse:
      '"Yes, immediately. By pairing a 60-second SMS/email speed-to-lead workflow with an AI conversational agent, prospects receive instant answers and are invited to book while intent is highest."',
    capabilities: [
      'Presents specific service scope aligned with customer objections',
      'Synthesizes client requirements into structured CRM notes',
      'Guides visitors toward discovery calls with low friction',
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Visitor enters website',
    description: 'Prospective client arrives on the landing page or funnel via organic search, ads, or referral.',
    systemAction: 'Session tracking & source attribution initialized',
    channel: 'Web / Funnel',
  },
  {
    stepNumber: 2,
    title: 'Lead submits form',
    description: 'Prospect inputs their name, business email, operational bottleneck, and service requirement.',
    systemAction: 'Form data payload validated via webhook trigger',
    channel: 'Lead Form',
  },
  {
    stepNumber: 3,
    title: 'Lead enters CRM',
    description: 'GoHighLevel receives the webhook, verifies against existing contacts, and creates a clean record.',
    systemAction: 'Contact created, tagged, and assigned to active pipeline',
    channel: 'GoHighLevel CRM',
  },
  {
    stepNumber: 4,
    title: 'AI qualifies lead',
    description: 'AI model evaluates submitted responses against criteria (business size, service scope, urgency).',
    systemAction: 'Intent classification & qualification score computed',
    channel: 'AI Engine',
  },
  {
    stepNumber: 5,
    title: 'Lead is categorized',
    description: 'System automatically applies custom tags (e.g., High Intent, AI Agents, Enterprise).',
    systemAction: 'Custom fields updated, pipeline stage synchronized',
    channel: 'Automation Engine',
  },
  {
    stepNumber: 6,
    title: 'Follow-up begins',
    description: 'Speed-to-lead workflow fires an immediate personalized confirmation via SMS and Email.',
    systemAction: 'Multi-touch nurture sequence queued with stop conditions',
    channel: 'SMS & Email',
  },
  {
    stepNumber: 7,
    title: 'Qualified lead books appointment',
    description: 'Prospect chooses an available calendar slot directly via interactive scheduling link.',
    systemAction: 'Calendar event created, calendar invite & reminders queued',
    channel: 'Calendar System',
  },
  {
    stepNumber: 8,
    title: 'Business receives notification',
    description: 'Internal team receives immediate alert with full prospect briefing notes before the call.',
    systemAction: 'Push alert, Slack notification & CRM deal stage set to Booked',
    channel: 'Team Alert',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We identify your business goals, current process, and automation opportunities.',
    details:
      'We audit your current lead flow, manual bottlenecks, tools in use, and identify exact processes where AI and automation deliver immediate ROI.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'I design the AI agent or automation system around your specific requirements.',
    details:
      'I architect custom prompts, knowledge-base vectors, conditional logic branches, and data models tailored strictly to your business rules.',
  },
  {
    number: '03',
    title: 'Connect',
    description:
      'I connect the necessary CRM, forms, calendars, APIs, tools, and workflows.',
    details:
      'Seamless webhook integrations, GoHighLevel pipeline configuration, calendar synching, and real-time error handling with tested edge cases.',
  },
  {
    number: '04',
    title: 'Automate',
    description:
      'The system handles repetitive tasks automatically while keeping you in control.',
    details:
      'Full end-to-end testing, deployment, and operational handover with monitoring checkpoints so your team maintains clear oversight.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // CATEGORY 1: AI AUTOMATION
  {
    id: 'lead-capture-automation-project',
    category: 'automation',
    categoryLabel: 'AI Automation',
    title: 'Lead Capture Automation',
    description:
      'An automated lead capture system that collects prospects from forms and funnels, creates CRM records, applies appropriate tags, and triggers follow-up workflows.',
    toolsUsed: ['GoHighLevel', 'Forms', 'Workflows', 'Webhooks', 'CRM'],
    architectureSummary:
      'Multi-source webhook listener connected to GoHighLevel pipeline router. Normalizes form payloads, strips formatting anomalies, applies origin tags, and executes speed-to-lead notification branches.',
    flowSteps: [
      'Form submission intercepted via HTTP POST webhook',
      'Data mapped to GoHighLevel custom contact fields',
      'Tags applied: [Inbound-Web, Source-Funnel, New-Lead]',
      'Instant SMS alert dispatched to assigned team member',
    ],
  },
  {
    id: 'lead-qualification-automation-project',
    category: 'automation',
    categoryLabel: 'AI Automation',
    title: 'Lead Qualification Automation',
    description:
      'An automated qualification system that collects prospect information, identifies lead status, and routes prospects into the appropriate follow-up process.',
    toolsUsed: ['GoHighLevel', 'AI', 'Workflows', 'Custom Fields'],
    architectureSummary:
      'Rules-based and AI-assisted qualification engine. Parses intake questions against predetermined service criteria to assign high, medium, or low intent status with dynamic branch redirection.',
    flowSteps: [
      'Inbound questionnaire received and parsed',
      'AI prompt analyzes project urgency and service match',
      'Lead Status field populated: [Qualified-Priority / Nurture]',
      'Priority leads routed directly to calendar booking sequence',
    ],
  },
  {
    id: 'automated-follow-up-system-project',
    category: 'automation',
    categoryLabel: 'AI Automation',
    title: 'Automated Follow-Up System',
    description:
      'An automated SMS and email follow-up system designed to keep prospects engaged and maintain consistent communication.',
    toolsUsed: ['GoHighLevel', 'SMS', 'Email', 'Workflows'],
    architectureSummary:
      'Multi-channel conditional nurture workflow. Dispatches time-spaced touchpoints, pauses execution instantly upon inbound prospect reply, and tracks engagement metrics inside the CRM.',
    flowSteps: [
      'Minute 0: Immediate SMS confirmation & resource delivery',
      'Hour 24: Value-focused email addressing common implementation hurdles',
      'Day 3: Check-in SMS with interactive reply prompt',
      'Condition trigger: Immediate workflow halt when prospect replies',
    ],
  },
  {
    id: 'appointment-booking-automation-project',
    category: 'automation',
    categoryLabel: 'AI Automation',
    title: 'Appointment Booking Automation',
    description:
      'An automated booking system that helps qualified prospects schedule appointments while triggering confirmations and reminders.',
    toolsUsed: ['GoHighLevel', 'Calendar', 'Workflows'],
    architectureSummary:
      'Synchronized booking pipeline that ties GoHighLevel calendar events to automated multi-step reminder trees, drastically reducing meeting drop-offs and scheduling friction.',
    flowSteps: [
      'Prospect selects slot on embedded booking calendar',
      'CRM appointment status updated to [Scheduled]',
      'Automated email invite + 24-hour SMS reminder scheduled',
      '10-minute pre-call SMS reminder with meeting access link',
    ],
  },

  // CATEGORY 2: AI AGENTS
  {
    id: 'ai-lead-qualification-agent-project',
    category: 'agent',
    categoryLabel: 'AI Agents',
    title: 'AI Lead Qualification Agent',
    description:
      'An AI agent designed to communicate with prospects, ask qualification questions, collect information, and identify leads ready for the next step.',
    toolsUsed: ['AI Agent', 'Knowledge Base', 'GoHighLevel', 'CRM'],
    architectureSummary:
      'Autonomous conversational agent with system instructions designed for conversational lead discovery. Collects missing contact parameters, validates requirements, and updates CRM tags in real time.',
    flowSteps: [
      'Engages prospect in two-way conversational discovery',
      'Extracts company size, primary bottleneck, and target timeline',
      'Validates contact information and summarizes needs',
      'Updates CRM record with structured JSON summary',
    ],
  },
  {
    id: 'ai-customer-support-agent-project',
    category: 'agent',
    categoryLabel: 'AI Agents',
    title: 'AI Customer Support Agent',
    description:
      'An AI knowledge-base assistant that answers common customer questions using approved business information and can direct complex requests to a human.',
    toolsUsed: ['AI Agent', 'Knowledge Base', 'CRM'],
    architectureSummary:
      'Retrieval-augmented support assistant operating strictly on verified business documentation. Built with strict grounding guardrails to prevent unverified statements and provide human handoff when needed.',
    flowSteps: [
      'Receives natural language customer query',
      'Searches vectorized knowledge base for verified answer chunks',
      'Delivers concise, policy-compliant response',
      'Routes unresolved or out-of-scope inquiries to support queue',
    ],
  },
  {
    id: 'ai-appointment-booking-agent-project',
    category: 'agent',
    categoryLabel: 'AI Agents',
    title: 'AI Appointment Booking Agent',
    description:
      'An AI agent that communicates with prospects, answers service questions, and guides qualified prospects through the appointment booking process.',
    toolsUsed: ['AI Agent', 'Calendar', 'GoHighLevel', 'Knowledge Base'],
    architectureSummary:
      'End-to-end booking assistant capable of answering preliminary scope questions, confirming prospect suitability, and booking appointments directly through calendar API integration.',
    flowSteps: [
      'Answers prospect inquiries about services and scope',
      'Suggests available calendar windows tailored to prospect timezone',
      'Captures attendee confirmation and triggers booking API call',
      'Confirms reservation and dispatches immediate calendar invites',
    ],
  },
  {
    id: 'ai-sales-assistant-project',
    category: 'agent',
    categoryLabel: 'AI Agents',
    title: 'AI Sales Assistant',
    description:
      'An AI-powered sales assistant that understands customer needs, provides relevant information, handles common questions, and guides prospects toward an appropriate next step.',
    toolsUsed: ['AI Agent', 'Knowledge Base', 'CRM', 'GoHighLevel'],
    architectureSummary:
      'Consultative sales agent that understands customer requirements, presents targeted capability overviews, addresses common business objections, and drives high-intent visitors toward scheduled calls.',
    flowSteps: [
      'Listens to customer pain points and business objectives',
      'Recommends optimal automation or agent architecture',
      'Answers questions on process, tools, and integration timelines',
      'Transitions prospect smoothly to discovery consultation booking',
    ],
  },
];

export const TOOLS_TECHNOLOGIES_DATA: ToolTechnology[] = [
  {
    name: 'GoHighLevel',
    category: 'Platform & CRM',
    description: 'Central CRM, pipeline management, calendars, and automation builder.',
    icon: 'Layers',
  },
  {
    name: 'AI Agents',
    category: 'Artificial Intelligence',
    description: 'Autonomous conversational systems with task execution capabilities.',
    icon: 'Bot',
  },
  {
    name: 'Knowledge Bases',
    category: 'Data & RAG',
    description: 'Curated business documentation repositories for grounded AI answers.',
    icon: 'Database',
  },
  {
    name: 'Workflows',
    category: 'Automation Logic',
    description: 'Multi-branch trigger, condition, and action sequences.',
    icon: 'GitFork',
  },
  {
    name: 'APIs',
    category: 'Integrations',
    description: 'Direct programmatic connections between external systems and databases.',
    icon: 'Code',
  },
  {
    name: 'Webhooks',
    category: 'Real-time Events',
    description: 'Instant event listeners connecting landing pages, forms, and tools.',
    icon: 'Zap',
  },
  {
    name: 'CRM',
    category: 'Contact Systems',
    description: 'Contact segmentation, custom fields, pipeline tracking, and audit logs.',
    icon: 'Users',
  },
  {
    name: 'Email Automation',
    category: 'Messaging',
    description: 'Dynamic behavioral email delivery with engagement tracking.',
    icon: 'Mail',
  },
  {
    name: 'SMS Automation',
    category: 'Direct Messaging',
    description: 'Instant speed-to-lead two-way text messaging and reminders.',
    icon: 'MessageSquare',
  },
  {
    name: 'Calendars',
    category: 'Scheduling',
    description: 'Real-time multi-timezone appointment booking and sync.',
    icon: 'Calendar',
  },
  {
    name: 'Forms',
    category: 'Lead Intake',
    description: 'Structured web intake forms with input validation and conditional logic.',
    icon: 'FileText',
  },
  {
    name: 'Lead Capture Systems',
    category: 'Inbound Ingestion',
    description: 'Cohesive pipelines routing visitors from multiple funnels into CRM.',
    icon: 'Target',
  },
];

export const WHY_WORK_WITH_ME_DATA = [
  {
    id: 'practical-solutions',
    title: 'Practical Solutions',
    description:
      'Build systems around real business problems rather than unnecessary technology.',
    detail:
      'No gimmicks or unnecessary complexity. Every agent and workflow has a clear business purpose: capturing leads, saving manual hours, or driving appointments.',
    icon: 'Target',
  },
  {
    id: 'custom-automation',
    title: 'Custom Automation',
    description:
      'Design automation around each business’s specific process and requirements.',
    detail:
      'Your operations are unique. Workflows, qualification metrics, and AI prompts are customized specifically for your client journey and internal tech stack.',
    icon: 'Cpu',
  },
  {
    id: 'ai-plus-automation',
    title: 'AI + Automation',
    description:
      'Combine AI capabilities with reliable workflows and business automation.',
    detail:
      'AI provides intelligent conversation and qualification; deterministic workflows provide reliable data storage, calendar booking, and CRM accuracy.',
    icon: 'Workflow',
  },
  {
    id: 'simple-and-scalable',
    title: 'Simple & Scalable',
    description:
      'Build systems that are easy to understand, manage, and expand.',
    detail:
      'Systems are built with clean documentation, transparent tagging, and organized naming conventions so your team always stays in total control.',
    icon: 'TrendingUp',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'ai-hallucinations',
    category: 'AI Implementation',
    question: 'How do you ensure AI agents remain reliable and do not give inaccurate answers?',
    answer:
      'Every AI agent is strictly grounded in your verified business documentation, standard operating procedures (SOPs), service guidelines, and curated system prompt guardrails. If a prospect asks a query outside the pre-approved knowledge base, the agent uses deterministic fallback behavior: it gracefully acknowledges the request, deflects guessing, and immediately routes the conversation or schedules a callback for your human staff.',
  },
  {
    id: 'tech-stack-integrations',
    category: 'AI Implementation',
    question: 'Will your AI agents and automations integrate seamlessly with our existing CRM and software?',
    answer:
      'Yes. We specialize in GoHighLevel (GHL) workflows, custom REST APIs, and webhook automation. Whether your organization runs on GoHighLevel, HubSpot, Salesforce, Slack, Google Workspace, Stripe, or internal databases, we architect workflows to pass validated data cleanly between your existing platforms without requiring you to migrate or replace familiar tools.',
  },
  {
    id: 'team-technical-knowledge',
    category: 'AI Implementation',
    question: 'Do I or my team need technical knowledge or coding experience to manage these systems?',
    answer:
      'Not at all. The systems are designed for intuitive daily operation. You receive clean CRM pipelines, organized contact tagging, clear notification channels (SMS, Email, or Slack), and concise recorded walkthrough videos. Isaiah handles the backend prompt architecture, API webhooks, and logic routing end-to-end.',
  },
  {
    id: 'pricing-structure',
    category: 'Pricing & Investment',
    question: 'How is pricing structured for AI agent and business automation projects?',
    answer:
      'All client engagements are scoped and quoted on a transparent, fixed-investment basis tailored to your exact requirements, number of integration touchpoints, and system complexity. You receive a detailed technical scope document with an upfront fixed price before any development begins—guaranteeing no surprise fees or unpredictable hourly billing.',
  },
  {
    id: 'recurring-costs',
    category: 'Pricing & Investment',
    question: 'Are there ongoing recurring costs or hidden platform fees?',
    answer:
      'You maintain 100% direct ownership of your software accounts (such as your GoHighLevel subscription or direct OpenAI/Anthropic API usage), paying providers directly at wholesale market rates with zero markups from us. Once delivered, the system is fully yours. We also offer optional monthly support retainers for clients desiring ongoing prompt refinement, workflow additions, and routine health checks.',
  },
  {
    id: 'expected-roi',
    category: 'Pricing & Investment',
    question: 'What return on investment (ROI) should our business anticipate?',
    answer:
      'Clients typically experience immediate gains across two distinct areas: dramatic speed-to-lead reduction (qualifying and responding to inbound inquiries within 30–60 seconds, 24/7, directly elevating booking conversion rates) and reclaiming 15 to 30+ hours of repetitive manual data entry, lead sorting, and follow-up messaging every single week.',
  },
  {
    id: 'project-timelines',
    category: 'Timelines & Process',
    question: 'What is the typical timeline for an AI agent or automation build?',
    answer:
      'Most targeted single AI agent or GoHighLevel lead capture & qualification setups are completed, verified, and launched within 7 to 10 business days. Comprehensive end-to-end multi-channel automation pipelines (encompassing web capture, AI qualification, calendar booking, and multi-step follow-ups) typically take 2 to 3 weeks including edge-case simulation.',
  },
  {
    id: 'implementation-process',
    category: 'Timelines & Process',
    question: 'What does the step-by-step engagement process look like from start to finish?',
    answer:
      'We follow a disciplined 4-stage roadmap: 1) Initial Consultation & Workflow Audit to isolate bottlenecks; 2) Technical Blueprint & Knowledge Base Ingestion; 3) Sandbox Testing with simulated edge-case inputs; and 4) Live Deployment, staff handover, and 30-day post-launch operational monitoring.',
  },
  {
    id: 'future-modifications',
    category: 'Timelines & Process',
    question: 'What happens if our service offerings, pricing, or workflows change in the future?',
    answer:
      'All architectures are engineered modularly. Updating knowledge base files, modifying qualifying criteria, altering calendar appointment slots, or adjusting follow-up timing is straightforward. We supply documentation explaining exactly how to update standard variables, and we remain available for ongoing adjustments.',
  },
];
