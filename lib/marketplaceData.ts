export interface MarketplaceApp {
  id: string
  name: string
  subtitle: string
  description: string
  category: string
  categoryDescription: string
  tags: string[]
  pricing: 'Free' | 'Paid'
  openSourceBase: string
  rating: number
  reviewCount: number
  lastUpdated: string
  beenWorkedOn: boolean
  logo: string
  image?: string
  publisher?: string
}

export interface Category {
  name: string
  count: number
  subcategories?: Category[]
}

// Import the JSON data
import marketplaceAppsData from './marketplaceApps.json'

// Configuration for dynamic domains
export const config = {
  docsBaseUrl: 'docs.augment.cfd', // Can be changed dynamically
  productBaseUrl: '/product'
}

// Investor-facing category strategy
export const INVESTOR_CATEGORIES = {
  DATA_SECURITY_MONITORING: 'Data Security & Monitoring',
  AI_AUTOMATION: 'AI & Automation',
  CLOUD_INFRA: 'Cloud & Infrastructure',
  ENTERPRISE_APPS: 'Enterprise Applications'
} as const

type InvestorCategory = typeof INVESTOR_CATEGORIES[keyof typeof INVESTOR_CATEGORIES]

const mapCategoryToInvestorGroup = (category: string): InvestorCategory => {
  const c = category.trim().toLowerCase()
  // Data Security & Monitoring
  if ([
    'security', 'monitoring', 'observability', 'analytics', 'governance', 'policy', 'data-guard', 'policy-compliance'
  ].some(k => c.includes(k))) return INVESTOR_CATEGORIES.DATA_SECURITY_MONITORING

  // AI & Automation
  if ([
    'ai', 'automation', 'devops', 'orchestrate', 'orchestration', 'workflow', 'agent'
  ].some(k => c.includes(k))) return INVESTOR_CATEGORIES.AI_AUTOMATION

  // Cloud & Infrastructure
  if ([
    'networking', 'infrastructure', 'backup', 'caching', 'workspace', 'data', 'dns', 'ipam', 'router', 'os'
  ].some(k => c.includes(k))) return INVESTOR_CATEGORIES.CLOUD_INFRA

  // Enterprise Applications (Business)
  if ([
    'business', 'finance', 'erp', 'hcm', 'cx', 'scm', 'marketing', 'sales', 'service', 'projects', 'inventory', 'manufacturing'
  ].some(k => c.includes(k))) return INVESTOR_CATEGORIES.ENTERPRISE_APPS

  // Default fallback
  return INVESTOR_CATEGORIES.CLOUD_INFRA
}

// Transform JSON data to match our interface and investor categories
const jsonApps: MarketplaceApp[] = marketplaceAppsData.map(app => ({
  ...app,
  category: mapCategoryToInvestorGroup(app.category),
  image: `/products/${mapCategoryToInvestorGroup(app.category).toLowerCase().replace(/\s&\s/g,'-').replace(/\s+/g, '-')}/${app.logo.replace('.svg', '.png')}`,
  publisher: 'Augment Technologies',
  pricing: app.pricing as 'Free' | 'Paid'
}))

// Use JSON as the single source of truth to avoid duplicates
export const marketplaceApps: MarketplaceApp[] = jsonApps

// Helper functions for routing
export const getAppUrl = (app: MarketplaceApp): string => {
  if (app.beenWorkedOn) {
    return `${config.productBaseUrl}/${app.id}`
  }
  return `/marketplace/under-construction/${app.id}`
}

export const getDocsUrl = (app: MarketplaceApp): string => {
  return `https://${config.docsBaseUrl}/${app.id}`
}

// Generate investor categories (fixed order)
export const ociCategories = [
  INVESTOR_CATEGORIES.DATA_SECURITY_MONITORING,
  INVESTOR_CATEGORIES.AI_AUTOMATION,
  INVESTOR_CATEGORIES.CLOUD_INFRA,
  INVESTOR_CATEGORIES.ENTERPRISE_APPS
].map(name => ({
  name,
  count: marketplaceApps.filter(app => app.category === name).length
}))

export const categories: Category[] = ociCategories

export const recentApps = marketplaceApps.sort((a, b) => 
  new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
)
