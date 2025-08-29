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
    id: 'aihr',
    name: 'AI HR Assistant',
    shortName: 'AI HR',
    description: 'Transform your HR operations with intelligent automation that understands context, learns from interactions, and executes complex human resource tasks.',
    shortDescription: 'AI-powered human resources automation platform',
    category: 'ai-agent',
    href: '/product/aihr',
    icon: 'users',
    featured: true,
    status: 'live',
    tags: ['HR', 'Automation', 'AI', 'Employee Management'],
    image: '/products/aihr/01.png',
    productUrl: 'https://aihr.augment.cfd/'
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
