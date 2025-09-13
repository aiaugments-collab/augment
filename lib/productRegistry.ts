import { AI_AGENT_PRODUCTS, Product as AIAgentProduct } from './aiAgentsRegistry';
import { CLOUD_APP_PRODUCTS, Product as CloudAppProduct } from './cloudAppsRegistry';

// Re-export the Product interface from one of the registries (they're identical)
export type Product = AIAgentProduct;

// Combine all products from separate registries
export const PRODUCTS: Product[] = [
  ...AI_AGENT_PRODUCTS,
  ...CLOUD_APP_PRODUCTS
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

// Header category configurations for Oracle-style navigation
export const HEADER_CATEGORIES = {
  'erp': {
    name: 'Enterprise Resource Planning (ERP)',
    shortName: 'ERP',
    description: 'Complete business management applications',
    icon: 'building'
  },
  'hcm': {
    name: 'Human Capital Management (HCM)',
    shortName: 'HCM',
    description: 'Workforce and talent management solutions',
    icon: 'users'
  },
  'cx': {
    name: 'Customer Experience (CX)',
    shortName: 'CX',
    description: 'Customer engagement and experience platforms',
    icon: 'heart'
  },
  'scm': {
    name: 'Supply Chain & Manufacturing (SCM)',
    shortName: 'SCM',
    description: 'Supply chain and manufacturing operations',
    icon: 'truck'
  },
  'data-intelligence': {
    name: 'Fusion Data Intelligence Platform',
    shortName: 'Data Intelligence',
    description: 'Business intelligence and analytics platform',
    icon: 'chart'
  },
  'marketplace': {
    name: 'Augment Marketplace',
    shortName: 'Marketplace',
    description: 'Third-party integrations and extensions',
    icon: 'store'
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

// New helper functions for header organization
export function getProductsByHeaderCategory(headerCategory: Product['headerCategory']): Product[] {
  return PRODUCTS.filter(product => product.headerCategory === headerCategory);
}

export function getHeaderProducts(): Product[] {
  return PRODUCTS.filter(product => product.showInHeader === true);
}

export function getHeaderProductsByCategory(headerCategory: Product['headerCategory']): Product[] {
  return PRODUCTS
    .filter(product => product.headerCategory === headerCategory && product.showInHeader === true)
    .sort((a, b) => (a.headerOrder || 0) - (b.headerOrder || 0));
}

export function getHeaderCategoriesWithProducts(): Array<{
  category: keyof typeof HEADER_CATEGORIES;
  config: typeof HEADER_CATEGORIES[keyof typeof HEADER_CATEGORIES];
  products: Product[];
}> {
  return Object.entries(HEADER_CATEGORIES).map(([key, config]) => ({
    category: key as keyof typeof HEADER_CATEGORIES,
    config,
    products: getHeaderProductsByCategory(key as Product['headerCategory'])
  })).filter(item => item.products.length > 0);
}
