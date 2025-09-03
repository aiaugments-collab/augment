import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Industry Documentation | Augment AI Resources',
  description: 'Comprehensive documentation and resources for implementing AI solutions across industries. Technical guides, best practices, API documentation, and implementation resources.',
  keywords: 'AI documentation, technical guides, implementation resources, API documentation, best practices, industry guides, AI integration',
};

export default function DocumentationPage() {
  const heroButtons = [
    {
      text: 'Browse Documentation',
      href: '#documentation',
      variant: 'primary' as const
    },
    {
      text: 'API Reference',
      href: '/industries/documentation/api/',
      variant: 'secondary' as const
    }
  ];

  const documentationCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started Guides',
      description: 'Step-by-step guides to help you quickly implement AI solutions in your industry with best practices and proven methodologies.',
      ctaText: 'View getting started',
      ctaLink: '/industries/documentation/getting-started/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'api-documentation',
      title: 'API Documentation & SDKs',
      description: 'Comprehensive API documentation, SDKs, and code examples for integrating Augment AI capabilities into your applications.',
      ctaText: 'Explore API docs',
      ctaLink: '/industries/documentation/api/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-guides',
      title: 'Industry-Specific Implementation Guides',
      description: 'Detailed implementation guides tailored for specific industries including compliance requirements and best practices.',
      ctaText: 'Browse industry guides',
      ctaLink: '/industries/documentation/industry-guides/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'tutorials',
      title: 'Tutorials & How-To Guides',
      description: 'Hands-on tutorials and practical how-to guides for common AI implementation scenarios and use cases.',
      ctaText: 'Start tutorials',
      ctaLink: '/industries/documentation/tutorials/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & Support',
      description: 'Common issues, troubleshooting guides, and support resources to help you resolve implementation challenges.',
      ctaText: 'Get support',
      ctaLink: '/industries/documentation/support/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'best-practices',
      title: 'Best Practices & Case Studies',
      description: 'Learn from successful implementations with detailed best practices, case studies, and lessons learned.',
      ctaText: 'Learn best practices',
      ctaLink: '/industries/documentation/best-practices/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const documentationResources = [
    {
      id: 'quick-start',
      title: 'Quick Start Guide',
      description: 'Get up and running with Augment AI in 30 minutes with our comprehensive quick start guide and sample implementations.',
      ctaText: 'Start now',
      ctaLink: '/industries/documentation/quick-start/'
    },
    {
      id: 'sdk-libraries',
      title: 'SDKs & Libraries',
      description: 'Download SDKs and libraries for Python, JavaScript, Java, .NET, and other popular programming languages.',
      ctaText: 'Download SDKs',
      ctaLink: '/industries/documentation/sdks/'
    },
    {
      id: 'code-samples',
      title: 'Code Samples & Examples',
      description: 'Ready-to-use code samples and examples for common AI implementation patterns and industry use cases.',
      ctaText: 'Browse samples',
      ctaLink: '/industries/documentation/samples/'
    },
    {
      id: 'integration-guides',
      title: 'Integration Guides',
      description: 'Step-by-step integration guides for popular platforms, frameworks, and enterprise systems.',
      ctaText: 'View integrations',
      ctaLink: '/industries/documentation/integrations/'
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Security best practices, compliance guidelines, and regulatory requirements for different industries.',
      ctaText: 'Learn about security',
      ctaLink: '/industries/documentation/security/'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Guidelines for optimizing AI performance, scaling implementations, and monitoring system health.',
      ctaText: 'Optimize performance',
      ctaLink: '/industries/documentation/performance/'
    }
  ];

  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Get help from our technical support team with implementation questions, troubleshooting, and best practices.',
      href: '/industries/documentation/support/technical/',
      buttonText: 'Contact support',
      icon: '🛠️'
    },
    {
      title: 'Community Forums',
      description: 'Connect with other developers and AI practitioners in our community forums for peer support and knowledge sharing.',
      href: '/industries/documentation/support/forums/',
      buttonText: 'Join forums',
      icon: '💬'
    },
    {
      title: 'Professional Services',
      description: 'Work with our experts for custom implementations, training, and strategic AI consulting services.',
      href: '/industries/documentation/support/professional/',
      buttonText: 'Learn more',
      icon: '👥'
    },
    {
      title: 'Training & Certification',
      description: 'Advance your skills with comprehensive training programs and industry-recognized AI certifications.',
      href: '/industries/documentation/support/training/',
      buttonText: 'Explore training',
      icon: '🎓'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Industry Documentation | Augment AI Resources</h1>

        <SectionHero
          title="Documentation & Resources"
          subtitle="Everything you need to implement AI successfully"
          description="Comprehensive documentation, technical guides, API references, and resources to help you implement AI solutions across industries. From quick start guides to advanced integration patterns, find everything you need to succeed with Augment AI."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Developer working with AI documentation and technical resources"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#documentation" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Documentation
              </a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Resources
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
            title="Comprehensive documentation for every need"
            description="Find the right documentation and resources for your AI implementation journey"
            cards={documentationCategories}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Documentation Usage Statistics
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive resources trusted by developers and organizations worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Documentation Pages
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Code Examples
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Integration Guides
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monthly Page Views
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources">
          <InfoColumns
            title="Essential resources and tools"
            description="Access SDKs, code samples, integration guides, and other essential resources for AI implementation"
            columns={documentationResources}
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
                Most accessed documentation and resources by our developer community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Authentication & API Keys
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn how to authenticate with Augment APIs and manage your API keys securely.
                </p>
                <a href="/industries/documentation/authentication/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Read guide →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Data Preparation & Training
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Best practices for preparing data and training AI models for your specific use case.
                </p>
                <a href="/industries/documentation/data-preparation/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn more →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Model Deployment & Scaling
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Deploy AI models to production and scale them to handle enterprise workloads.
                </p>
                <a href="/industries/documentation/deployment/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Deploy models →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Error Handling & Debugging
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Common error codes, debugging techniques, and troubleshooting strategies.
                </p>
                <a href="/industries/documentation/debugging/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Debug issues →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Monitoring & Analytics
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monitor AI model performance and analyze usage patterns with built-in analytics.
                </p>
                <a href="/industries/documentation/monitoring/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monitor performance →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Compliance & Security
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Ensure your AI implementations meet industry compliance and security requirements.
                </p>
                <a href="/industries/documentation/compliance/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Ensure compliance →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="support">
          <CTASection
            title="Get the support you need"
            description="Access comprehensive support options to help you succeed with your AI implementation"
            actions={supportOptions}
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
              Access comprehensive documentation, code samples, and support resources to implement AI solutions in your industry. Get started with our quick start guide or explore our API documentation.
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
                API Documentation
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
