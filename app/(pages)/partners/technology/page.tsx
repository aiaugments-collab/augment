import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Technology Partners | Augment AI Integration Partners',
  description: 'Discover Augment AI technology partners who integrate our platform with leading enterprise systems, cloud platforms, and business applications.',
  keywords: 'technology partners, AI integration, platform partners, enterprise integrations, API partners, technology ecosystem',
};

export default function TechnologyPartnersPage() {
  const heroButtons = [
    {
      text: 'Find Technology Partners',
      href: '/partners/find/',
      variant: 'primary' as const
    },
    {
      text: 'Become Tech Partner',
      href: '/partners/join/',
      variant: 'secondary' as const
    }
  ];

  const technologyPartners = [
    {
      id: 'cloud-platforms',
      title: 'Cloud Platform Partners',
      description: 'Leading cloud providers offering Augment AI as integrated services on their platforms with native deployment options.',
      ctaText: 'Cloud partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software Partners',
      description: 'Major enterprise software vendors integrating Augment AI capabilities into their business applications and suites.',
      ctaText: 'Enterprise partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-platforms',
      title: 'Data Platform Partners',
      description: 'Data management and analytics platforms providing seamless integration with Augment AI for enhanced insights.',
      ctaText: 'Data partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'crm-partners',
      title: 'CRM & Sales Partners',
      description: 'Customer relationship management and sales platforms enhanced with Augment AI for intelligent automation.',
      ctaText: 'CRM partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Partners',
      description: 'Business process automation platforms leveraging Augment AI for intelligent workflow orchestration.',
      ctaText: 'Workflow partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'security-partners',
      title: 'Security & Compliance Partners',
      description: 'Cybersecurity and compliance platforms integrating Augment AI for threat detection and risk management.',
      ctaText: 'Security partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const integrationTypes = [
    {
      id: 'api-integrations',
      title: 'API & SDK Integrations',
      description: 'Deep technical integrations using our comprehensive APIs and SDKs for seamless platform connectivity.',
      ctaText: 'API integration',
      ctaLink: '#'
    },
    {
      id: 'native-integrations',
      title: 'Native Platform Integrations',
      description: 'Built-in integrations that provide native user experience within partner platforms and applications.',
      ctaText: 'Native integration',
      ctaLink: '#'
    },
    {
      id: 'marketplace-apps',
      title: 'Marketplace Applications',
      description: 'Pre-built applications and connectors available through partner marketplaces and app stores.',
      ctaText: 'Marketplace apps',
      ctaLink: '#'
    },
    {
      id: 'white-label',
      title: 'White-Label Solutions',
      description: 'Customizable white-label AI solutions that partners can brand and offer as their own services.',
      ctaText: 'White-label options',
      ctaLink: '#'
    },
    {
      id: 'embedded-ai',
      title: 'Embedded AI Capabilities',
      description: 'AI capabilities embedded directly into partner products for enhanced functionality and user experience.',
      ctaText: 'Embedded AI',
      ctaLink: '#'
    },
    {
      id: 'data-connectors',
      title: 'Data Connectors & Pipelines',
      description: 'Pre-built data connectors and pipelines for seamless data flow between systems and platforms.',
      ctaText: 'Data connectors',
      ctaLink: '#'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Technical Enablement',
      description: 'Comprehensive technical resources, documentation, SDKs, and dedicated engineering support.',
      href: '#',
      buttonText: 'Technical resources',
      icon: ''
    },
    {
      title: 'Joint Go-to-Market',
      description: 'Collaborative marketing and sales programs to promote integrated solutions to mutual customers.',
      href: '#',
      buttonText: 'GTM programs',
      icon: ''
    },
    {
      title: 'Certification Programs',
      description: 'Technical certification programs to validate integration expertise and quality standards.',
      href: '#',
      buttonText: 'Get certified',
      icon: ''
    },
    {
      title: 'Revenue Opportunities',
      description: 'Multiple revenue models including referral fees, revenue sharing, and joint solution sales.',
      href: '#',
      buttonText: 'Revenue models',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Technology Partners | Augment AI Integration Partners</h1>

        <SectionHero
          title="Technology Partners"
          subtitle="Integrate AI into your platform"
          description="Partner with Augment to integrate cutting-edge AI capabilities into your technology platform. Join leading cloud providers, enterprise software vendors, and technology companies who are enhancing their solutions with our AI platform."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Technology integration and API development for AI platform partnerships"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#partners" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Categories
              </a>
              <a href="#integrations" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Integration Types
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Benefits
              </a>
              <a href="#success" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Success Stories
              </a>
            </div>
          </div>
        </nav>

        <section id="partners">
          <FeaturedCards
            title="Technology partner categories"
            description="Discover different types of technology partnerships and integration opportunities"
            cards={technologyPartners}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Technology Partnership Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Measurable results from our technology integration partnerships
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Technology Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Platform Integrations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  API Calls Daily
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.9%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Integration Uptime
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="integrations">
          <InfoColumns
            title="Multiple integration approaches"
            description="Choose the integration method that best fits your platform architecture and user experience"
            columns={integrationTypes}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="success" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Technology Partner Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Learn how technology partners have successfully integrated Augment AI into their platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="Alex Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Alex Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CTO, CloudTech Solutions</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Cloud Platform Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Integrating Augment AI into our cloud platform has been transformative. Our customers now have access to enterprise-grade AI capabilities with just a few clicks, and we've seen 250% growth in AI service adoption."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Sarah Martinez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Sarah Martinez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>VP Product, DataFlow Systems</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Data Platform Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The native integration with Augment AI has made our data platform incredibly powerful. Customers can now apply advanced AI models to their data pipelines seamlessly, creating significant competitive advantage."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" 
                    alt="Michael Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Michael Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Head of Partnerships, WorkFlow Pro</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Workflow Automation Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Embedding Augment AI into our workflow automation platform has revolutionized how our customers handle business processes. The intelligent automation capabilities have increased process efficiency by 400%."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <CTASection
            title="Technology partner benefits and support"
            description="Comprehensive resources and programs to ensure successful integration and mutual growth"
            actions={partnerBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Ready to Integrate AI into Your Platform?
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join 200+ technology partners who are enhancing their platforms with Augment AI capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Technical Integration
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Access comprehensive APIs, SDKs, documentation, and technical support to integrate AI capabilities into your platform.
                </p>
                <a
                  href="/documentation/"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View Technical Docs
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Partnership Application
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Apply to become a technology partner and start the process of integrating Augment AI into your platform.
                </p>
                <a
                  href="/partners/join/"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Apply for Partnership
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Transform your platform with AI
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join the leading technology companies who are enhancing their platforms with Augment AI capabilities and creating new value for their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/join/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Become a Tech Partner
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Partnership Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
