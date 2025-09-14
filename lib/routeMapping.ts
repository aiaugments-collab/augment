// Route mapping utilities for intelligent 404 handling

export interface RouteMapping {
  pattern: string;
  target: string;
  priority: number;
  description: string;
}

// Enhanced route mappings with priorities and descriptions
export const routeMappings: RouteMapping[] = [
  // High priority - exact matches
  { pattern: '/products', target: '/product', priority: 10, description: 'Product page variations' },
  { pattern: '/solutions', target: '/product', priority: 10, description: 'Solutions redirect to products' },
  { pattern: '/platform', target: '/product', priority: 10, description: 'Platform overview' },
  { pattern: '/market', target: '/marketplace', priority: 10, description: 'Marketplace short form' },
  { pattern: '/apps', target: '/marketplace', priority: 10, description: 'Applications marketplace' },
  { pattern: '/store', target: '/marketplace', priority: 9, description: 'App store alternative' },
  
  // Developer routes
  { pattern: '/developer', target: '/developers', priority: 10, description: 'Developer portal' },
  { pattern: '/dev', target: '/developers', priority: 9, description: 'Short developer alias' },
  { pattern: '/api', target: '/developers/apis', priority: 10, description: 'API documentation' },
  { pattern: '/apis', target: '/developers/apis', priority: 10, description: 'API documentation plural' },
  { pattern: '/docs', target: '/developers/docs', priority: 10, description: 'Documentation' },
  { pattern: '/documentation', target: '/developers/docs', priority: 10, description: 'Full documentation word' },
  { pattern: '/sdk', target: '/developers/apis', priority: 9, description: 'SDK information' },
  { pattern: '/github', target: '/developers/community', priority: 8, description: 'GitHub community' },
  
  // Industry routes
  { pattern: '/industry', target: '/industries', priority: 10, description: 'Industry solutions' },
  { pattern: '/sectors', target: '/industries', priority: 9, description: 'Industry sectors' },
  { pattern: '/verticals', target: '/industries', priority: 9, description: 'Industry verticals' },
  { pattern: '/healthcare', target: '/industries/healthcare', priority: 10, description: 'Healthcare industry' },
  { pattern: '/finance', target: '/industries/financial-services', priority: 10, description: 'Finance industry' },
  { pattern: '/financial', target: '/industries/financial-services', priority: 10, description: 'Financial services' },
  { pattern: '/banking', target: '/industries/financial-services', priority: 9, description: 'Banking sector' },
  { pattern: '/retail', target: '/industries/retail', priority: 10, description: 'Retail industry' },
  { pattern: '/manufacturing', target: '/industries/manufacturing', priority: 10, description: 'Manufacturing industry' },
  { pattern: '/government', target: '/industries/government', priority: 10, description: 'Government sector' },
  { pattern: '/education', target: '/industries/education', priority: 10, description: 'Education sector' },
  
  // Customer routes
  { pattern: '/customer', target: '/customers', priority: 10, description: 'Customer information' },
  { pattern: '/clients', target: '/customers', priority: 9, description: 'Client information' },
  { pattern: '/case-studies', target: '/customers/case-studies', priority: 10, description: 'Customer case studies' },
  { pattern: '/success-stories', target: '/customers/success-stories', priority: 10, description: 'Customer success stories' },
  { pattern: '/testimonials', target: '/customers/success-stories', priority: 9, description: 'Customer testimonials' },
  
  // Company routes
  { pattern: '/about', target: '/company', priority: 10, description: 'About us page' },
  { pattern: '/about-us', target: '/company', priority: 10, description: 'About us variation' },
  { pattern: '/team', target: '/company/leadership', priority: 10, description: 'Team information' },
  { pattern: '/leadership', target: '/company/leadership', priority: 10, description: 'Leadership team' },
  { pattern: '/management', target: '/company/leadership', priority: 9, description: 'Management team' },
  { pattern: '/executives', target: '/company/leadership', priority: 9, description: 'Executive team' },
  
  // Career routes
  { pattern: '/career', target: '/careers', priority: 10, description: 'Career opportunities' },
  { pattern: '/job', target: '/careers/jobs', priority: 10, description: 'Job listings' },
  { pattern: '/jobs', target: '/careers/jobs', priority: 10, description: 'Job listings plural' },
  { pattern: '/hiring', target: '/careers/jobs', priority: 9, description: 'Hiring information' },
  { pattern: '/work', target: '/careers', priority: 8, description: 'Work opportunities' },
  { pattern: '/join', target: '/careers', priority: 9, description: 'Join our team' },
  { pattern: '/join-us', target: '/careers', priority: 9, description: 'Join us variation' },
  { pattern: '/opportunities', target: '/careers/jobs', priority: 9, description: 'Job opportunities' },
  
  // Support routes
  { pattern: '/help', target: '/support', priority: 10, description: 'Help and support' },
  { pattern: '/contact', target: '/corporate/contact', priority: 10, description: 'Contact information' },
  { pattern: '/contact-us', target: '/corporate/contact', priority: 10, description: 'Contact us variation' },
  { pattern: '/get-in-touch', target: '/corporate/contact', priority: 8, description: 'Get in touch' },
  { pattern: '/reach-out', target: '/corporate/contact', priority: 7, description: 'Reach out' },
  
  // Learning routes
  { pattern: '/learning', target: '/learn/what-are-ai-agents', priority: 10, description: 'Learning resources' },
  { pattern: '/tutorials', target: '/learn/what-are-ai-agents', priority: 9, description: 'Tutorial content' },
  { pattern: '/guides', target: '/developers/docs', priority: 9, description: 'Guide documentation' },
  { pattern: '/resources', target: '/developers', priority: 8, description: 'Developer resources' },
  
  // Partner routes
  { pattern: '/partner', target: '/partners', priority: 10, description: 'Partner information' },
  { pattern: '/partnership', target: '/partners', priority: 10, description: 'Partnership opportunities' },
  { pattern: '/partnerships', target: '/partners', priority: 10, description: 'Partnership program' },
  { pattern: '/integrations', target: '/partners/technology', priority: 9, description: 'Technology integrations' },
  
  // Pricing routes
  { pattern: '/price', target: '/ai-agent/free', priority: 10, description: 'Pricing information' },
  { pattern: '/pricing', target: '/ai-agent/free', priority: 10, description: 'Pricing plans' },
  { pattern: '/plans', target: '/ai-agent/free', priority: 10, description: 'Service plans' },
  { pattern: '/cost', target: '/ai-agent/free', priority: 9, description: 'Cost information' },
  { pattern: '/free', target: '/ai-agent/free', priority: 10, description: 'Free tier' },
  { pattern: '/trial', target: '/ai-agent/free', priority: 9, description: 'Free trial' },
  
  // News and blog routes
  { pattern: '/blog', target: '/developers/blogs', priority: 10, description: 'Blog content' },
  { pattern: '/blogs', target: '/developers/blogs', priority: 10, description: 'Blog posts' },
  { pattern: '/news', target: '/news', priority: 10, description: 'News and updates' },
  { pattern: '/press', target: '/news', priority: 9, description: 'Press releases' },
  { pattern: '/announcements', target: '/news', priority: 9, description: 'Company announcements' },
  { pattern: '/updates', target: '/news', priority: 8, description: 'Product updates' },
  
  // Legal routes
  { pattern: '/privacy', target: '/legal/privacy', priority: 10, description: 'Privacy policy' },
  { pattern: '/terms', target: '/legal/privacy', priority: 10, description: 'Terms of service' },
  { pattern: '/legal', target: '/legal/privacy', priority: 10, description: 'Legal information' },
  { pattern: '/compliance', target: '/security/practices', priority: 9, description: 'Compliance information' },
  { pattern: '/security', target: '/security/practices', priority: 10, description: 'Security practices' },
  
  // Investor routes
  { pattern: '/investors', target: '/investor', priority: 10, description: 'Investor relations' },
  { pattern: '/ir', target: '/investor', priority: 10, description: 'Investor relations short' },
  { pattern: '/investor-relations', target: '/investor', priority: 10, description: 'Investor relations full' },
  { pattern: '/earnings', target: '/investor', priority: 9, description: 'Earnings information' },
  
  // AI specific routes
  { pattern: '/ai', target: '/product', priority: 10, description: 'AI platform' },
  { pattern: '/artificial-intelligence', target: '/product', priority: 10, description: 'Artificial intelligence' },
  { pattern: '/machine-learning', target: '/product', priority: 10, description: 'Machine learning' },
  { pattern: '/ml', target: '/product', priority: 9, description: 'ML abbreviation' },
  { pattern: '/ai-agents', target: '/product/aihr', priority: 10, description: 'AI agents' },
  { pattern: '/agents', target: '/product/aihr', priority: 9, description: 'AI agents short' },
  { pattern: '/chatbot', target: '/product/aihr', priority: 8, description: 'Chatbot functionality' },
  { pattern: '/automation', target: '/product/flow', priority: 10, description: 'Automation solutions' },
  { pattern: '/workflow', target: '/product/flow', priority: 9, description: 'Workflow automation' },
  { pattern: '/search', target: '/product/searchai', priority: 10, description: 'AI search' },
  { pattern: '/ai-search', target: '/product/searchai', priority: 10, description: 'AI-powered search' },
  
  // Common variations and typos
  { pattern: '/augment', target: '/', priority: 8, description: 'Company name redirect' },
  { pattern: '/home', target: '/', priority: 10, description: 'Home page' },
  { pattern: '/main', target: '/', priority: 9, description: 'Main page' },
  { pattern: '/index', target: '/', priority: 8, description: 'Index page' },
  { pattern: '/start', target: '/', priority: 8, description: 'Start page' },
  { pattern: '/getting-started', target: '/developers/docs', priority: 10, description: 'Getting started guide' },
  { pattern: '/get-started', target: '/developers/docs', priority: 10, description: 'Get started guide' },
  { pattern: '/quickstart', target: '/developers/docs', priority: 10, description: 'Quick start guide' },
  { pattern: '/quick-start', target: '/developers/docs', priority: 10, description: 'Quick start guide' },
];

// Function to get route mappings as a simple object for middleware
export function getRouteMappingsObject(): Record<string, string> {
  const mappings: Record<string, string> = {};
  
  // Sort by priority (higher priority first)
  const sortedMappings = routeMappings.sort((a, b) => b.priority - a.priority);
  
  for (const mapping of sortedMappings) {
    // Only add if not already present (higher priority wins)
    if (!mappings[mapping.pattern]) {
      mappings[mapping.pattern] = mapping.target;
    }
  }
  
  return mappings;
}

// Function to find the best matching route with fuzzy matching
export function findBestRoute(pathname: string): string | null {
  const mappings = getRouteMappingsObject();
  
  // Direct match
  if (mappings[pathname]) {
    return mappings[pathname];
  }
  
  // Remove trailing slash and try again
  const withoutTrailingSlash = pathname.replace(/\/$/, '');
  if (withoutTrailingSlash !== pathname && mappings[withoutTrailingSlash]) {
    return mappings[withoutTrailingSlash];
  }
  
  // Try with trailing slash
  const withTrailingSlash = pathname.endsWith('/') ? pathname : pathname + '/';
  if (mappings[withTrailingSlash]) {
    return mappings[withTrailingSlash];
  }
  
  // Partial matching for nested routes
  for (const [pattern, target] of Object.entries(mappings)) {
    if (pathname.startsWith(pattern + '/')) {
      const remaining = pathname.substring(pattern.length);
      return target + remaining;
    }
  }
  
  // Fuzzy matching for common patterns
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = '/' + segments[0];
    if (mappings[firstSegment]) {
      return mappings[firstSegment];
    }
  }
  
  return null;
}

// Function to add new route mapping
export function addRouteMapping(pattern: string, target: string, priority: number = 5, description: string = ''): void {
  routeMappings.push({ pattern, target, priority, description });
}

// Function to get all route mappings for admin/debugging
export function getAllRouteMappings(): RouteMapping[] {
  return routeMappings.sort((a, b) => b.priority - a.priority);
}
