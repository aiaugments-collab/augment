export interface Product {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  shortDescription?: string;
  category: 'ai-agent' | 'cloud-applications' | 'hcm' | 'cx' | 'infrastructure';
  href: string;
  icon?: string;
  featured?: boolean;
  status: 'live' | 'coming-soon' | 'beta';
  tags?: string[];
  image?: string;
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
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'aisales',
    name: 'AI Sales Assistant',
    shortName: 'AI Sales',
    description: 'Accelerate your sales process with AI-powered lead qualification, automated follow-ups, and intelligent deal management.',
    shortDescription: 'Intelligent sales automation and lead management',
    category: 'ai-agent',
    href: '/product/aisales',
    icon: '💼',
    featured: true,
    status: 'coming-soon',
    tags: ['Sales', 'CRM', 'Lead Management', 'AI'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'aimarketing',
    name: 'AI Marketing Assistant',
    shortName: 'AI Marketing',
    description: 'Create, optimize, and execute marketing campaigns with AI-driven content generation, audience targeting, and performance analysis.',
    shortDescription: 'AI-powered marketing campaign automation',
    category: 'ai-agent',
    href: '/product/aimarketing',
    icon: '📈',
    featured: true,
    status: 'coming-soon',
    tags: ['Marketing', 'Content Creation', 'Analytics', 'AI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'aifinance',
    name: 'AI Finance Assistant',
    shortName: 'AI Finance',
    description: 'Streamline financial operations with automated bookkeeping, intelligent reporting, and predictive financial analysis.',
    shortDescription: 'Automated financial management and analysis',
    category: 'ai-agent',
    href: '/product/aifinance',
    icon: '💰',
    featured: false,
    status: 'coming-soon',
    tags: ['Finance', 'Accounting', 'Reporting', 'AI'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'aicustomer',
    name: 'AI Customer Support',
    shortName: 'AI Support',
    description: 'Deliver exceptional customer support with AI-powered ticket routing, automated responses, and intelligent problem resolution.',
    shortDescription: 'Intelligent customer support automation',
    category: 'ai-agent',
    href: '/product/aicustomer',
    icon: '🎧',
    featured: false,
    status: 'beta',
    tags: ['Customer Support', 'Automation', 'AI', 'Help Desk'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },

  // Cloud Applications
  {
    id: 'erp',
    name: 'Enterprise Resource Planning',
    shortName: 'ERP',
    description: 'Comprehensive ERP solution with financial management, procurement, project management, and compliance capabilities.',
    shortDescription: 'Complete enterprise resource planning platform',
    category: 'cloud-applications',
    href: '/product/erp',
    icon: '🏢',
    featured: true,
    status: 'live',
    tags: ['ERP', 'Finance', 'Procurement', 'Enterprise'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'scm',
    name: 'Supply Chain Management',
    shortName: 'SCM',
    description: 'End-to-end supply chain visibility and optimization with inventory management, manufacturing, and logistics coordination.',
    shortDescription: 'Intelligent supply chain optimization platform',
    category: 'cloud-applications',
    href: '/product/scm',
    icon: '📦',
    featured: true,
    status: 'live',
    tags: ['Supply Chain', 'Inventory', 'Manufacturing', 'Logistics'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },

  // Human Capital Management
  {
    id: 'hcm-core',
    name: 'Human Capital Management',
    shortName: 'HCM',
    description: 'Complete HR solution with talent management, workforce planning, payroll, and employee experience optimization.',
    shortDescription: 'Comprehensive human capital management suite',
    category: 'hcm',
    href: '/product/hcm',
    icon: '👨‍💼',
    featured: true,
    status: 'live',
    tags: ['HR', 'Talent Management', 'Payroll', 'Workforce'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },

  // Customer Experience
  {
    id: 'cx-marketing',
    name: 'Marketing Cloud',
    shortName: 'Marketing',
    description: 'Advanced marketing automation with campaign management, lead nurturing, and customer journey orchestration.',
    shortDescription: 'Complete marketing automation platform',
    category: 'cx',
    href: '/product/marketing',
    icon: '🎯',
    featured: true,
    status: 'live',
    tags: ['Marketing', 'Automation', 'Campaigns', 'Customer Journey'],
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cx-sales',
    name: 'Sales Cloud',
    shortName: 'Sales',
    description: 'Powerful CRM platform with opportunity management, sales forecasting, and performance analytics.',
    shortDescription: 'Advanced CRM and sales management platform',
    category: 'cx',
    href: '/product/sales',
    icon: '💻',
    featured: true,
    status: 'live',
    tags: ['CRM', 'Sales', 'Forecasting', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cx-service',
    name: 'Service Cloud',
    shortName: 'Service',
    description: 'Customer service platform with case management, knowledge base, and omnichannel support capabilities.',
    shortDescription: 'Comprehensive customer service management',
    category: 'cx',
    href: '/product/service',
    icon: '🛠️',
    featured: false,
    status: 'live',
    tags: ['Customer Service', 'Support', 'Case Management', 'Knowledge Base'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },

  // Infrastructure
  {
    id: 'infrastructure',
    name: 'Cloud Infrastructure',
    shortName: 'Infrastructure',
    description: 'Robust cloud infrastructure with compute, storage, networking, and security services for enterprise workloads.',
    shortDescription: 'Enterprise-grade cloud infrastructure services',
    category: 'infrastructure',
    href: '/product/infrastructure',
    icon: '☁️',
    featured: false,
    status: 'live',
    tags: ['Cloud', 'Infrastructure', 'Compute', 'Storage', 'Security'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

// Category configurations
export const PRODUCT_CATEGORIES = {
  'ai-agent': {
    name: 'Augment AI Agent',
    description: 'Intelligent AI assistants that automate and optimize business processes',
    color: '#4A90E2',
    icon: '🤖'
  },
  'cloud-applications': {
    name: 'Augment Cloud Applications',
    description: 'Comprehensive business applications for enterprise operations',
    color: '#50C878',
    icon: '🏢'
  },
  'hcm': {
    name: 'Human Capital Management (HCM)',
    description: 'Complete human resources and workforce management solutions',
    color: '#FF6B6B',
    icon: '👥'
  },
  'cx': {
    name: 'Customer Experience (CX)',
    description: 'Customer-centric solutions for marketing, sales, and service',
    color: '#9B59B6',
    icon: '💼'
  },
  'infrastructure': {
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure services',
    color: '#34495E',
    icon: '☁️'
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
