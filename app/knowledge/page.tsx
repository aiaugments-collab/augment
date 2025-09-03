import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export const metadata: Metadata = {
  title: 'Knowledge Base | Augment AI Help Center',
  description: 'Comprehensive knowledge base with articles, guides, FAQs, and solutions for Augment AI products and services. Find answers to common questions and implementation guidance.',
  keywords: 'knowledge base, help articles, FAQ, troubleshooting, AI help, product guides, implementation help',
};

export default function KnowledgeBasePage() {
  const heroButtons = [
    {
      text: 'Search Articles',
      href: '#search',
      variant: 'primary' as const
    },
    {
      text: 'Browse Categories',
      href: '#categories',
      variant: 'secondary' as const
    }
  ];

  const popularArticles = [
    {
      id: 'getting-started',
      title: 'Getting Started with Augment AI Platform',
      description: 'Complete guide to setting up your account, configuring your first AI agent, and understanding the platform basics.',
      ctaText: 'Read guide',
      ctaLink: '/knowledge/getting-started/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'api-authentication',
      title: 'API Authentication and Security',
      description: 'Learn how to securely authenticate with Augment APIs, manage API keys, and implement security best practices.',
      ctaText: 'View security guide',
      ctaLink: '/knowledge/api-authentication/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'troubleshooting-common-issues',
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to the most frequently encountered issues and error messages in Augment AI products.',
      ctaText: 'Solve problems',
      ctaLink: '/knowledge/troubleshooting/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'integration-guide',
      title: 'Third-Party Integration Guide',
      description: 'Step-by-step instructions for integrating Augment AI with popular platforms and enterprise systems.',
      ctaText: 'Integration help',
      ctaLink: '/knowledge/integrations/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'billing-account',
      title: 'Billing and Account Management',
      description: 'Manage your subscription, understand billing cycles, and configure account settings and permissions.',
      ctaText: 'Manage account',
      ctaLink: '/knowledge/billing/',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization Tips',
      description: 'Best practices for optimizing AI model performance, reducing latency, and scaling your implementations.',
      ctaText: 'Optimize performance',
      ctaLink: '/knowledge/performance/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const knowledgeCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Essential guides for new users including account setup, first steps, and basic concepts.',
      ctaText: 'Start here',
      ctaLink: '/knowledge/category/getting-started/'
    },
    {
      id: 'product-guides',
      title: 'Product Guides',
      description: 'Detailed documentation and user guides for all Augment AI products and features.',
      ctaText: 'Browse guides',
      ctaLink: '/knowledge/category/product-guides/'
    },
    {
      id: 'api-documentation',
      title: 'API & Development',
      description: 'Technical documentation, API references, and developer resources for integration.',
      ctaText: 'Developer docs',
      ctaLink: '/knowledge/category/api-development/'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues, error messages, and step-by-step solutions to resolve problems.',
      ctaText: 'Find solutions',
      ctaLink: '/knowledge/category/troubleshooting/'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Integration guides for connecting Augment AI with third-party platforms and systems.',
      ctaText: 'Integration help',
      ctaLink: '/knowledge/category/integrations/'
    },
    {
      id: 'billing-account',
      title: 'Billing & Account',
      description: 'Account management, billing information, subscription details, and payment methods.',
      ctaText: 'Account help',
      ctaLink: '/knowledge/category/billing-account/'
    }
  ];

  const helpResources = [
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials covering product features and common workflows.',
      href: '/knowledge/videos/',
      buttonText: 'Watch videos',
      icon: '🎥'
    },
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team through live chat for quick questions.',
      href: '/support/live-chat/',
      buttonText: 'Start chat',
      icon: '💬'
    },
    {
      title: 'Community Forums',
      description: 'Connect with other users and get help from the community in our discussion forums.',
      href: '/forums/',
      buttonText: 'Join forums',
      icon: '👥'
    },
    {
      title: 'Contact Support',
      description: 'Submit a support ticket for personalized assistance with complex issues.',
      href: '/support/',
      buttonText: 'Contact support',
      icon: '🛠️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Knowledge Base | Augment AI Help Center</h1>

        <SectionHero
          title="Knowledge Base"
          subtitle="Find answers and learn how to succeed"
          description="Comprehensive knowledge base with articles, guides, tutorials, and FAQs to help you get the most from Augment AI products. Search for specific topics or browse by category to find the information you need."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Person searching through comprehensive knowledge base and documentation"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#search" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Search
              </a>
              <a href="#popular" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Popular Articles
              </a>
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Categories
              </a>
              <a href="#help" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Help
              </a>
            </div>
          </div>
        </nav>

        {/* Search Section */}
        <section id="search" className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Search Knowledge Base
              </h2>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Find answers to your questions by searching our comprehensive knowledge base
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for articles, guides, or solutions..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent pl-12"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Popular searches:</span>
              {['API setup', 'Authentication', 'Billing', 'Integration', 'Troubleshooting'].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 text-sm bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="popular">
          <FeaturedCards
            title="Most popular articles"
            description="Find answers to the most common questions and learn from popular guides"
            cards={popularArticles}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Knowledge Base Usage
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive resources helping users find answers and succeed with Augment AI
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Help Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monthly Views
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Questions Resolved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  4.8/5
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Helpfulness Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <InfoColumns
            title="Browse by category"
            description="Find relevant articles organized by topic and product area"
            columns={knowledgeCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="help">
          <CTASection
            title="Still need help?"
            description="If you can't find what you're looking for, we have additional support options available"
            actions={helpResources}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Contribute to our knowledge base
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Help other users by sharing your expertise and contributing articles to our knowledge base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/knowledge/contribute/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contribute Article
              </a>
              <a
                href="/knowledge/feedback/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Provide Feedback
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
