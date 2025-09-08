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
}

export const PRODUCTS: Product[] = [
  // AI Agent Products
  {
    id: 'hr',
    name: 'Augment HR',
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
    id: 'erp',
    name: 'Augment ERP',
    shortName: 'ERP',
    description: 'Complete Enterprise Resource Planning solution. Manage your entire business operations including accounting, inventory, sales, purchasing, manufacturing, and project management in one integrated platform with powerful automation and real-time insights.',
    shortDescription: 'Complete ERP solution for business operations',
    category: 'cloud-applications',
    href: '/product/erp',
    icon: 'building',
    featured: true,
    status: 'live',
    tags: ['ERP', 'ERPNext', 'Accounting', 'Inventory', 'Sales', 'Manufacturing', 'Business Management'],
    image: '/products/erp/01.png',
    productUrl: 'https://erp.augment.cfd/'
  },
  {
    id: 'flow',
    name: 'Augment Flow',
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
    name: 'SearchAI',
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
    name: 'FinanceAI',
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
    name: 'Resume AI',
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
    name: 'Health AI',
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
  {
    id: 'coding-agent',
    name: 'Coding Agent',
    shortName: 'Coding Agent',
    description: 'AI-powered code editor that understands your codebase, provides intelligent suggestions, and automates development tasks. Experience seamless coding with advanced AI capabilities that boost productivity and code quality.',
    shortDescription: 'AI-powered intelligent code editor and development assistant',
    category: 'ai-agent',
    href: '/product/coding-agent',
    icon: 'brain',
    featured: true,
    status: 'coming-soon',
    tags: ['Code Editor', 'AI Assistant', 'Development', 'Programming', 'Automation'],
    image: '/products/coding-agent/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'buildai',
    name: 'BuildAI',
    shortName: 'BuildAI',
    description: 'Transform your ideas into fully functional applications using natural language. Simply describe what you want to build, and our AI creates beautiful, responsive web applications with modern UI components, database integration, and deployment-ready code.',
    shortDescription: 'Natural language to full-stack application builder',
    category: 'ai-agent',
    href: '/product/buildai',
    icon: 'building',
    featured: true,
    status: 'coming-soon',
    tags: ['App Builder', 'Natural Language', 'AI Assistant', 'Full-Stack', 'No-Code'],
    image: '/products/buildai/01.png',
    productUrl: '/book-demo'
  },

  // Cloud Applications
  {
    id: 'hr-cloud',
    name: 'Augment HR Cloud',
    shortName: 'HR Cloud',
    description: 'AI-powered cloud HRMS platform that replaces traditional HR systems with intelligent automation. Features AI resume screening, automated payroll processing, smart leave management, and 24/7 AI-powered employee support accessible from anywhere.',
    shortDescription: 'AI-powered cloud-based HR management system',
    category: 'cloud-applications',
    href: '/product/hr',
    icon: 'users',
    featured: true,
    status: 'live',
    tags: ['AI', 'Cloud HR', 'HRMS', 'Automation', 'Employee Management', 'Payroll', 'AI Assistant'],
    image: '/products/hr/01.png',
    productUrl: 'https://hr.augment.cfd/'
  },
  {
    id: 'crm',
    name: 'CRM Software',
    shortName: 'CRM',
    description: 'Comprehensive customer relationship management platform to manage leads, contacts, sales pipeline, and customer interactions with advanced analytics and automation.',
    shortDescription: 'Complete CRM solution for managing customer relationships',
    category: 'cloud-applications',
    href: '/product/crm',
    icon: 'users',
    featured: true,
    status: 'coming-soon',
    tags: ['CRM', 'Sales', 'Lead Management', 'Customer Relations'],
    image: '/products/crm/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'booking',
    name: 'Booking App',
    shortName: 'Booking',
    description: 'Professional appointment and booking management system with calendar integration, automated reminders, payment processing, and customer management.',
    shortDescription: 'Complete booking and appointment management solution',
    category: 'cloud-applications',
    href: '/product/booking',
    icon: 'calendar',
    featured: true,
    status: 'coming-soon',
    tags: ['Booking', 'Appointments', 'Calendar', 'Scheduling'],
    image: '/products/booking/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'marketing',
    name: 'Marketing Software App',
    shortName: 'Marketing',
    description: 'All-in-one marketing automation platform with email campaigns, social media management, lead nurturing, analytics, and customer journey mapping.',
    shortDescription: 'Complete marketing automation and campaign management',
    category: 'cloud-applications',
    href: '/product/marketing',
    icon: 'chart',
    featured: true,
    status: 'coming-soon',
    tags: ['Marketing', 'Automation', 'Email Campaigns', 'Analytics'],
    image: '/products/marketing/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'social-media',
    name: 'All-in-one Social Media Platform',
    shortName: 'Social Media',
    description: 'Comprehensive social media management platform for content creation, scheduling, engagement tracking, analytics, and multi-platform publishing.',
    shortDescription: 'Complete social media management and analytics platform',
    category: 'cloud-applications',
    href: '/product/social-media',
    icon: 'share',
    featured: true,
    status: 'coming-soon',
    tags: ['Social Media', 'Content Management', 'Analytics', 'Publishing'],
    image: '/products/social-media/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'customer-support',
    name: 'Customer Support Software',
    shortName: 'Support',
    description: 'Advanced customer support platform with ticketing system, live chat, knowledge base, automation, and comprehensive analytics for superior customer service.',
    shortDescription: 'Complete customer support and helpdesk solution',
    category: 'cloud-applications',
    href: '/product/customer-support',
    icon: 'headphones',
    featured: true,
    status: 'coming-soon',
    tags: ['Support', 'Helpdesk', 'Live Chat', 'Ticketing'],
    image: '/products/customer-support/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'accounting',
    name: 'Accounting Software for Business',
    shortName: 'Accounting',
    description: 'Professional accounting and financial management platform with invoicing, expense tracking, financial reporting, tax management, and business analytics.',
    shortDescription: 'Complete business accounting and financial management',
    category: 'cloud-applications',
    href: '/product/accounting',
    icon: 'banknote',
    featured: true,
    status: 'coming-soon',
    tags: ['Accounting', 'Invoicing', 'Financial Management', 'Reporting'],
    image: '/products/accounting/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'scheduling',
    name: 'All-purpose Scheduling App',
    shortName: 'Scheduling',
    description: 'Advanced scheduling platform like Cal.com with calendar integration, availability management, automated booking, team coordination, and meeting analytics.',
    shortDescription: 'Complete scheduling and calendar management solution',
    category: 'cloud-applications',
    href: '/product/scheduling',
    icon: 'clock',
    featured: true,
    status: 'coming-soon',
    tags: ['Scheduling', 'Calendar', 'Meetings', 'Availability'],
    image: '/products/scheduling/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'digital-signature',
    name: 'Digital Signature App for Business',
    shortName: 'eSign',
    description: 'Secure digital signature platform with document management, electronic signing workflows, compliance tracking, and legal document authentication.',
    shortDescription: 'Secure digital signature and document management',
    category: 'cloud-applications',
    href: '/product/digital-signature',
    icon: 'shield',
    featured: true,
    status: 'coming-soon',
    tags: ['Digital Signature', 'Document Management', 'Security', 'Compliance'],
    image: '/products/digital-signature/01.png',
    productUrl: '/book-demo'
  },
  {
    id: 'hr-automation',
    name: 'HR Process Automation',
    shortName: 'HR Auto',
    description: 'Comprehensive HR automation platform for employee management, payroll processing, performance tracking, recruitment, and workforce analytics.',
    shortDescription: 'Complete HR automation and employee management',
    category: 'cloud-applications',
    href: '/product/hr-automation',
    icon: 'users',
    featured: true,
    status: 'coming-soon',
    tags: ['HR', 'Automation', 'Employee Management', 'Payroll'],
    image: '/products/hr-automation/01.png',
    productUrl: '/book-demo'
  }
];

// Category configurations
export const PRODUCT_CATEGORIES = {
  'ai-agent': {
    name: 'Augment AI Agent',
    description: 'Intelligent AI assistants agents',
    color: '#4A90E2',
    icon: 'bot'
  },
  'cloud-applications': {
    name: 'Augment Cloud Applications',
    description: 'Comprehensive business applications for enterprise operations',
    color: '#50C878',
    icon: 'building'
  }
} as const;

// Helper functions
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(product => product.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return PRODUCTS.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(product => product.featured);
}

export function getLiveProducts(): Product[] {
  return PRODUCTS.filter(product => product.status === 'live');
}

export function getProductsByStatus(status: Product['status']): Product[] {
  return PRODUCTS.filter(product => product.status === status);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
}
