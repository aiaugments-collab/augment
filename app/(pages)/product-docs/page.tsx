import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Product Documentation | Augment AI Platform',
  description: 'Comprehensive product documentation for Augment AI solutions. User guides, feature documentation, integration instructions, and product resources.',
  keywords: 'product documentation, user guides, feature docs, AI product help, integration guides, product resources',
};

export default function ProductDocsPage() {
  const heroButtons = [
    {
      text: 'Browse Products',
      href: '/product/',
      variant: 'primary' as const
    },
    {
      text: 'Quick Start',
      href: '#quick-start',
      variant: 'secondary' as const
    }
  ];

  const productDocs = [
    {
      id: 'aihr-docs',
      title: 'AI HR Documentation',
      description: 'Complete user guide for AI HR solutions including setup, configuration, and advanced features for human resources automation.',
      ctaText: 'View AI HR docs',
      ctaLink: '/product-docs/aihr/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'finance-ai-docs',
      title: 'Finance AI Documentation',
      description: 'Comprehensive documentation for Finance AI platform covering financial analysis, reporting, and automation features.',
      ctaText: 'View Finance AI docs',
      ctaLink: '/product-docs/finance-ai/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'flow-docs',
      title: 'Flow Documentation',
      description: 'User guide for Flow workflow automation platform including process design, deployment, and monitoring.',
      ctaText: 'View Flow docs',
      ctaLink: '/product-docs/flow/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'health-ai-docs',
      title: 'Health AI Documentation',
      description: 'Complete documentation for Health AI solutions including clinical workflows, compliance, and integration guides.',
      ctaText: 'View Health AI docs',
      ctaLink: '/product-docs/health-ai/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'resume-ai-docs',
      title: 'Resume AI Documentation',
      description: 'User guide for Resume AI platform covering resume analysis, candidate matching, and recruitment automation.',
      ctaText: 'View Resume AI docs',
      ctaLink: '/product-docs/resume-ai/',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'search-ai-docs',
      title: 'Search AI Documentation',
      description: 'Comprehensive guide for Search AI platform including search optimization, analytics, and advanced search features.',
      ctaText: 'View Search AI docs',
      ctaLink: '/product-docs/search-ai/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const docCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started Guides',
      description: 'Quick start guides and initial setup instructions for all Augment AI products and solutions.',
      ctaText: 'Start here',
      ctaLink: '/product-docs/getting-started/'
    },
    {
      id: 'user-guides',
      title: 'User Guides',
      description: 'Detailed user manuals and step-by-step instructions for using product features and capabilities.',
      ctaText: 'Browse guides',
      ctaLink: '/product-docs/user-guides/'
    },
    {
      id: 'admin-guides',
      title: 'Administrator Guides',
      description: 'Administrative documentation for system setup, user management, and configuration options.',
      ctaText: 'Admin resources',
      ctaLink: '/product-docs/admin-guides/'
    },
    {
      id: 'integrations',
      title: 'Integration Documentation',
      description: 'Integration guides for connecting Augment products with third-party systems and platforms.',
      ctaText: 'View integrations',
      ctaLink: '/product-docs/integrations/'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & FAQ',
      description: 'Common issues, troubleshooting steps, and frequently asked questions for all products.',
      ctaText: 'Get help',
      ctaLink: '/product-docs/troubleshooting/'
    },
    {
      id: 'release-notes',
      title: 'Release Notes',
      description: 'Latest product updates, new features, bug fixes, and version history for all Augment products.',
      ctaText: 'View updates',
      ctaLink: '/product-docs/release-notes/'
    }
  ];

  const supportResources = [
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials covering product features and common use cases.',
      href: '/product-docs/videos/',
      buttonText: 'Watch videos',
      icon: ''
    },
    {
      title: 'Live Training Sessions',
      description: 'Join live training sessions and webinars to learn about product features and best practices.',
      href: '/training/product-training/',
      buttonText: 'Join training',
      icon: ''
    },
    {
      title: 'Community Forums',
      description: 'Connect with other users, share tips, and get help from the community.',
      href: '/forums/',
      buttonText: 'Visit forums',
      icon: ''
    },
    {
      title: 'Technical Support',
      description: 'Get direct help from our technical support team for product-specific questions.',
      href: '/support/',
      buttonText: 'Contact support',
      icon: '️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Product Documentation | Augment AI Platform</h1>

        <SectionHero
          title="Product Documentation"
          subtitle="Master every Augment AI product"
          description="Comprehensive documentation for all Augment AI products and solutions. Find user guides, integration instructions, troubleshooting resources, and everything you need to maximize your AI investment."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="User reviewing comprehensive product documentation on computer screen"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#products" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Product Docs
              </a>
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Documentation Types
              </a>
              <a href="#support" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Support Resources
              </a>
            </div>
          </div>
        </nav>

        <section id="products">
          <FeaturedCards
            title="Documentation for every Augment product"
            description="Find comprehensive documentation for all Augment AI products and solutions"
            cards={productDocs}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Documentation Usage
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive resources helping users succeed with Augment AI products
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Documentation Pages
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monthly Page Views
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Video Tutorials
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  98%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  User Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <InfoColumns
            title="Find the right documentation for your needs"
            description="Browse documentation by type and find exactly what you're looking for"
            columns={docCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="support">
          <CTASection
            title="Additional support resources"
            description="Access comprehensive support beyond documentation to ensure your success"
            actions={supportResources}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Need help with our products?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our comprehensive documentation and support resources are here to help you succeed with Augment AI products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Support
              </a>
              <a
                href="/training/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Get Training
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
