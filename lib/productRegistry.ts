export interface Product {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  shortDescription?: string;
  category: 'ai-agent' | 'cloud-applications';
  href: string;
  icon?: string;
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
    icon: '👥',
    featured: true,
    status: 'live',
    tags: ['HR', 'Automation', 'AI', 'Employee Management'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
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
    icon: '🔄',
    featured: true,
    status: 'live',
    tags: ['Workflow Automation', 'AI Agent', 'Integration', 'Productivity'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
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
    icon: '🔍',
    featured: true,
    status: 'live',
    tags: ['AI Search', 'Research', 'Natural Language', 'Deep Search'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    productUrl: 'https://searchai.augment.cfd/'
  }
];

// Category configurations
export const PRODUCT_CATEGORIES = {
  'ai-agent': {
    name: 'Augment AI Agent',
    description: 'Intelligent AI assistants agents',
    color: '#4A90E2',
    icon: '🤖'
  },
  'cloud-applications': {
    name: 'Augment Cloud Applications',
    description: 'Comprehensive business applications for enterprise operations',
    color: '#50C878',
    icon: '🏢'
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
