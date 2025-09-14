import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Documentation | Augment AI Platform',
  description: 'Comprehensive documentation for Augment AI platform. API references, integration guides, tutorials, and technical resources for developers and organizations.',
  keywords: 'AI documentation, API reference, integration guides, developer resources, technical documentation, AI platform docs',
};

export default function DocumentationPage() {
  const heroButtons = [
    {
      text: 'API Reference',
      href: '/industries/documentation/api/',
      variant: 'primary' as const
    },
    {
      text: 'Quick Start Guide',
      href: '/industries/documentation/quick-start/',
      variant: 'secondary' as const
    }
  ];

  const documentationSections = [
    {
      id: 'api-reference',
      title: 'API Reference & SDKs',
      description: 'Complete API documentation with interactive examples, SDKs for popular languages, and authentication guides.',
      ctaText: 'Explore API docs',
      ctaLink: '/industries/documentation/api/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'quick-start',
      title: 'Quick Start Guides',
      description: 'Get up and running quickly with step-by-step guides for common use cases and implementation patterns.',
      ctaText: 'Start building',
      ctaLink: '/industries/documentation/quick-start/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Examples',
      description: 'Hands-on tutorials with real-world examples, code samples, and best practices for AI implementation.',
      ctaText: 'Browse tutorials',
      ctaLink: '/industries/documentation/tutorials/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'integration-guides',
      title: 'Integration Guides',
      description: 'Detailed guides for integrating with popular platforms, frameworks, and enterprise systems.',
      ctaText: 'View integrations',
      ctaLink: '/industries/documentation/integrations/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Security best practices, compliance guidelines, and enterprise-grade security documentation.',
      ctaText: 'Learn about security',
      ctaLink: '/industries/documentation/security/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & Support',
      description: 'Common issues, error codes, debugging guides, and troubleshooting resources.',
      ctaText: 'Get help',
      ctaLink: '/industries/documentation/support/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const developerResources = [
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      description: 'Download official SDKs for Python, JavaScript, Java, .NET, Go, and other popular programming languages.',
      ctaText: 'Download SDKs',
      ctaLink: '/industries/documentation/sdks/'
    },
    {
      id: 'code-samples',
      title: 'Code Samples',
      description: 'Ready-to-use code examples and sample applications for common AI implementation patterns.',
      ctaText: 'Browse samples',
      ctaLink: '/industries/documentation/samples/'
    },
    {
      id: 'postman',
      title: 'Postman Collection',
      description: 'Import our complete Postman collection to test API endpoints and explore functionality.',
      ctaText: 'Get collection',
      ctaLink: '/industries/documentation/samples/'
    },
    {
      id: 'webhooks',
      title: 'Webhooks & Events',
      description: 'Set up real-time notifications and event handling with our webhook system.',
      ctaText: 'Configure webhooks',
      ctaLink: '/industries/documentation/integrations/'
    },
    {
      id: 'rate-limits',
      title: 'Rate Limits & Quotas',
      description: 'Understanding API rate limits, quotas, and best practices for optimal performance.',
      ctaText: 'View limits',
      ctaLink: '/industries/documentation/performance/'
    },
    {
      id: 'changelog',
      title: 'API Changelog',
      description: 'Stay updated with the latest API changes, new features, and version updates.',
      ctaText: 'View changelog',
      ctaLink: '/industries/documentation/api/'
    }
  ];

  const supportActions = [
    {
      title: 'Technical Support',
      description: 'Get help from our technical support team with implementation questions and troubleshooting.',
      href: '/support/',
      buttonText: 'Contact support',
      icon: '️'
    },
    {
      title: 'Community Forums',
      description: 'Connect with other developers and share knowledge in our active community forums.',
      href: '/forums/',
      buttonText: 'Join forums',
      icon: ''
    },
    {
      title: 'Training Programs',
      description: 'Advance your skills with comprehensive training programs and certification courses.',
      href: '/training/',
      buttonText: 'Explore training',
      icon: ''
    },
    {
      title: 'Professional Services',
      description: 'Work with our experts for custom implementations and strategic consulting.',
      href: '/industries/professional/',
      buttonText: 'Learn more',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Documentation | Augment AI Platform</h1>

        <SectionHero
          title="Documentation"
          subtitle="Everything you need to build with Augment AI"
          description="Comprehensive documentation, API references, tutorials, and resources for developers and organizations implementing AI solutions. From quick start guides to advanced integration patterns, find everything you need to succeed."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Developer working with comprehensive AI documentation and code examples"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#documentation" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Documentation
              </a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Developer Resources
              </a>
              <a href="#support" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Support
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        <section id="documentation">
          <FeaturedCards
            title="Comprehensive documentation for every developer"
            description="Find the right documentation and resources for your development needs"
            cards={documentationSections}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Developer Resources Usage
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Trusted by developers worldwide for AI implementation
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  API Calls Daily
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Developers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Code Examples
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.9%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  API Uptime
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources">
          <InfoColumns
            title="Developer resources and tools"
            description="Essential tools, SDKs, and resources to accelerate your AI development"
            columns={developerResources}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Popular Documentation Topics
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Most accessed documentation sections by our developer community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Authentication Guide
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn how to authenticate with our APIs using API keys, OAuth, and JWT tokens.
                </p>
                <a href="/industries/documentation/authentication/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Read guide →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Python SDK Tutorial
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Complete tutorial for getting started with our Python SDK and building your first AI application.
                </p>
                <a href="/industries/documentation/sdks/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Start tutorial →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Error Handling Best Practices
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn how to handle errors gracefully and implement robust error handling patterns.
                </p>
                <a href="/industries/documentation/debugging/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn best practices →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="support">
          <CTASection
            title="Need help getting started?"
            description="Access comprehensive support resources and connect with our developer community"
            actions={supportActions}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to start building with Augment AI?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Get your API key and start building intelligent applications with our comprehensive documentation and developer resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/industries/documentation/quick-start/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Quick Start Guide
              </a>
              <a
                href="/industries/documentation/api/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                API Reference
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
