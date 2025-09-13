export interface Product {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  shortDescription?: string;
  category: 'ai-agent' | 'cloud-applications';
  href: string;
  icon?: string; // Professional icon names: 'users', 'workflow', 'search', 'banknote', 'bot', 'building', 'chart', 'brain', 'shield'
  featured?: boolean;
  status: 'live' | 'coming-soon' | 'beta';
  tags?: string[];
  image?: string;
  productUrl?: string;
  // New fields for header organization
  headerCategory?: 'erp' | 'hcm' | 'cx' | 'scm' | 'data-intelligence' | 'marketplace';
  showInHeader?: boolean;
  headerOrder?: number; // Order within the category
}

export const AI_AGENT_PRODUCTS: Product[] = [
  {
    id: 'hr',
    name: 'AI HR Agent',
    shortName: 'HR',
    description: 'AI-First HRMS Platform that replaces traditional HR systems with intelligent automation. Cut administrative workload by 80% while delivering exceptional employee experiences with AI resume screening, document knowledge chat, AI-based leave management, and automated payroll processing.',
    shortDescription: 'AI-First HRMS Platform with intelligent automation',
    category: 'ai-agent',
    href: '/product/hr',
    icon: 'users',
    featured: true,
    status: 'live',
    tags: ['AI', 'HR', 'HRMS', 'Automation', 'Employee Management', 'Payroll', 'Leave Management'],
    image: '/products/hr/01.png',
    productUrl: 'https://hr.augment.cfd/'
  },
  {
    id: 'flow',
    name: 'Text-Controlled Automation Apps',
    shortName: 'Flow',
    description: 'AI Agent that works even when you\'re away. Your words become actions across every platform you use. 200+ apps working towards a future where technology acts, not just responds.',
    shortDescription: 'AI-powered workflow automation across 200+ apps',
    category: 'ai-agent',
    href: '/product/flow',
    icon: 'workflow',
    featured: true,
    status: 'live',
    tags: ['Workflow Automation', 'AI Agent', 'Integration', 'Productivity'],
    image: '/products/flow/01.png',
    productUrl: 'https://flow.augment.cfd/'
  },
  {
    id: 'searchai',
    name: 'AI-Powered Search Engine',
    shortName: 'SearchAI',
    description: 'A powerful AI-powered search engine with intelligent generative UI for deep research. Get natural language responses with interactive components, multiple AI model support, and advanced search capabilities.',
    shortDescription: 'AI-powered search engine for intelligent research',
    category: 'ai-agent',
    href: '/product/searchai',
    icon: 'search',
    featured: true,
    status: 'live',
    tags: ['AI Search', 'Research', 'Natural Language', 'Deep Search'],
    image: '/products/searchai/01.png',
    productUrl: 'https://searchai.augment.cfd/'
  },
  {
    id: 'finance-ai',
    name: 'AI Financial Intelligence',
    shortName: 'FinAI',
    description: 'Transform your financial life with AI-powered insights, automated receipt scanning, and intelligent budget management. Your personal finance assistant that never sleeps.',
    shortDescription: 'AI-powered personal finance management platform',
    category: 'ai-agent',
    href: '/product/finance-ai',
    icon: 'banknote',
    featured: true,
    status: 'live',
    tags: ['Finance', 'Budgeting', 'Receipt Scanning', 'AI Insights'],
    image: '/products/finance-ai/01.png',
    productUrl: 'https://financeai.augment.cfd/'
  },
  {
    id: 'resume-ai',
    name: 'AI Resume & Career Assistant',
    shortName: 'Resume AI',
    description: 'Transform any job description into a perfectly tailored, ATS-optimized resume in seconds. Our AI analyzes job requirements and crafts compelling content that gets you noticed.',
    shortDescription: 'AI-powered resume builder with ATS optimization',
    category: 'ai-agent',
    href: '/product/resume-ai',
    icon: 'users',
    featured: true,
    status: 'live',
    tags: ['Resume', 'ATS Optimization', 'Job Search', 'Career'],
    image: '/products/resume-ai/01.png',
    productUrl: 'https://resumeai.augment.cfd/'
  },
  {
    id: 'health-ai',
    name: 'AI Health & Wellness Platform',
    shortName: 'Health AI',
    description: 'AI-powered health intelligence platform that tracks symptoms, analyzes patterns, and provides personalized health insights on autopilot for hours.',
    shortDescription: 'AI-powered health intelligence and tracking',
    category: 'ai-agent',
    href: '/product/health-ai',
    icon: 'heart',
    featured: true,
    status: 'live',
    tags: ['Health', 'AI Assistant', 'Tracking', 'Analytics', 'Medication'],
    image: '/products/health-ai/01.png',
    productUrl: 'https://healthai.augment.cfd/'
  },
  
 
];
