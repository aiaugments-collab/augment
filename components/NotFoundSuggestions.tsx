'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { findBestRoute, getAllRouteMappings } from '@/lib/routeMapping';

interface SuggestedPage {
  title: string;
  description: string;
  href: string;
  category: string;
  relevance: number;
}

export default function NotFoundSuggestions() {
  const pathname = usePathname();
  
  // Get intelligent suggestions based on the attempted URL
  const getSuggestions = (): SuggestedPage[] => {
    const suggestions: SuggestedPage[] = [];
    
    // Try to find the best route match
    const bestMatch = findBestRoute(pathname);
    if (bestMatch) {
      suggestions.push({
        title: 'Did you mean this page?',
        description: `We found a similar page that might be what you're looking for`,
        href: bestMatch,
        category: 'Best Match',
        relevance: 10
      });
    }
    
    // Analyze the pathname for keywords and suggest relevant pages
    const pathLower = pathname.toLowerCase();
    
    if (pathLower.includes('product') || pathLower.includes('solution') || pathLower.includes('platform')) {
      suggestions.push({
        title: 'AI Platform Overview',
        description: 'Discover our comprehensive AI platform and its capabilities',
        href: '/product',
        category: 'Product',
        relevance: 9
      });
    }
    
    if (pathLower.includes('dev') || pathLower.includes('api') || pathLower.includes('doc')) {
      suggestions.push({
        title: 'Developer Resources',
        description: 'Access our APIs, SDKs, and comprehensive documentation',
        href: '/developers',
        category: 'Developers',
        relevance: 9
      });
    }
    
    if (pathLower.includes('industry') || pathLower.includes('sector') || pathLower.includes('vertical')) {
      suggestions.push({
        title: 'Industry Solutions',
        description: 'Explore AI solutions tailored for your industry',
        href: '/industries',
        category: 'Industries',
        relevance: 9
      });
    }
    
    if (pathLower.includes('customer') || pathLower.includes('case') || pathLower.includes('success')) {
      suggestions.push({
        title: 'Customer Success Stories',
        description: 'See how companies are transforming with Augment AI',
        href: '/customers/success-stories',
        category: 'Customers',
        relevance: 9
      });
    }
    
    if (pathLower.includes('career') || pathLower.includes('job') || pathLower.includes('work')) {
      suggestions.push({
        title: 'Career Opportunities',
        description: 'Join our team and help shape the future of AI',
        href: '/careers/jobs',
        category: 'Careers',
        relevance: 9
      });
    }
    
    if (pathLower.includes('about') || pathLower.includes('company') || pathLower.includes('team')) {
      suggestions.push({
        title: 'About Augment AI',
        description: 'Learn about our mission, vision, and leadership team',
        href: '/company',
        category: 'Company',
        relevance: 9
      });
    }
    
    if (pathLower.includes('support') || pathLower.includes('help') || pathLower.includes('contact')) {
      suggestions.push({
        title: 'Support & Help',
        description: 'Get help with our platform and find answers to your questions',
        href: '/support',
        category: 'Support',
        relevance: 9
      });
    }
    
    if (pathLower.includes('price') || pathLower.includes('cost') || pathLower.includes('plan') || pathLower.includes('free')) {
      suggestions.push({
        title: 'Free AI Tier',
        description: 'Start building for free with our generous usage limits',
        href: '/ai-agent/free',
        category: 'Pricing',
        relevance: 9
      });
    }
    
    if (pathLower.includes('learn') || pathLower.includes('education') || pathLower.includes('tutorial')) {
      suggestions.push({
        title: 'AI Learning Resources',
        description: 'Learn about AI fundamentals and best practices',
        href: '/learn/what-are-ai-agents',
        category: 'Education',
        relevance: 9
      });
    }
    
    if (pathLower.includes('partner') || pathLower.includes('integration')) {
      suggestions.push({
        title: 'Partner Network',
        description: 'Explore partnership opportunities and integrations',
        href: '/partners',
        category: 'Partners',
        relevance: 9
      });
    }
    
    // Add some default popular suggestions if we don't have many matches
    if (suggestions.length < 3) {
      const defaultSuggestions = [
        {
          title: 'AI Platform Overview',
          description: 'Discover our comprehensive AI platform and its capabilities',
          href: '/product',
          category: 'Product',
          relevance: 8
        },
        {
          title: 'Developer Documentation',
          description: 'Get started with our APIs and developer tools',
          href: '/developers',
          category: 'Developers',
          relevance: 8
        },
        {
          title: 'Customer Success Stories',
          description: 'See how companies are transforming with Augment AI',
          href: '/customers/success-stories',
          category: 'Customers',
          relevance: 8
        },
        {
          title: 'Free AI Tier',
          description: 'Start building for free with generous usage limits',
          href: '/ai-agent/free',
          category: 'Pricing',
          relevance: 8
        }
      ];
      
      // Add default suggestions that aren't already present
      for (const defaultSugg of defaultSuggestions) {
        if (!suggestions.some(s => s.href === defaultSugg.href)) {
          suggestions.push(defaultSugg);
        }
      }
    }
    
    // Sort by relevance and return top 6
    return suggestions
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 6);
  };
  
  const suggestions = getSuggestions();
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {suggestions.map((suggestion, index) => (
        <Link
          key={index}
          href={suggestion.href}
          className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2 py-1 text-xs font-medium rounded ${
              suggestion.category === 'Best Match' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-[#C74634] text-white'
            }`}>
              {suggestion.category}
            </span>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#C74634] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#161513] mb-2 group-hover:text-[#C74634] transition-colors" style={{ fontFamily: 'var(--oracleserif)' }}>
            {suggestion.title}
          </h3>
          <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
            {suggestion.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
