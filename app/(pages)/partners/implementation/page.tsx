import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Implementation Partners | Augment AI System Integrators',
  description: 'Partner with Augment AI as a system integrator and implementation specialist. Deploy and customize AI solutions for enterprise customers.',
  keywords: 'implementation partners, system integrators, AI deployment, technical implementation, enterprise solutions, integration specialists',
};

export default function ImplementationPartnersPage() {
  const heroButtons = [
    {
      text: 'Find Implementation Partners',
      href: '/partners/find/',
      variant: 'primary' as const
    },
    {
      text: 'Become Implementation Partner',
      href: '/partners/join/',
      variant: 'secondary' as const
    }
  ];

  const implementationServices = [
    {
      id: 'enterprise-deployment',
      title: 'Enterprise AI Deployment',
      description: 'Large-scale enterprise deployments with custom configurations, integrations, and enterprise-grade security implementations.',
      ctaText: 'Enterprise deployment',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'system-integration',
      title: 'System Integration Services',
      description: 'Complex system integrations connecting Augment AI with existing enterprise systems, databases, and business applications.',
      ctaText: 'System integration',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'custom-development',
      title: 'Custom Solution Development',
      description: 'Custom AI solution development and configuration tailored to specific business requirements and industry needs.',
      ctaText: 'Custom development',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'migration-services',
      title: 'Migration & Upgrade Services',
      description: 'Data migration, system upgrades, and legacy system modernization with AI-powered capabilities.',
      ctaText: 'Migration services',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'managed-services',
      title: 'Managed AI Services',
      description: 'Ongoing managed services including monitoring, maintenance, optimization, and support for AI implementations.',
      ctaText: 'Managed services',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'training-support',
      title: 'Training & Support Services',
      description: 'End-user training, technical support, and knowledge transfer to ensure successful AI adoption and utilization.',
      ctaText: 'Training & support',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const implementationCapabilities = [
    {
      id: 'technical-architecture',
      title: 'Technical Architecture Design',
      description: 'Design scalable, secure, and high-performance AI architectures for enterprise environments.',
      ctaText: 'Architecture design',
      ctaLink: '#'
    },
    {
      id: 'data-integration',
      title: 'Data Integration & Pipeline',
      description: 'Build robust data pipelines and integration layers for seamless AI data processing and analytics.',
      ctaText: 'Data integration',
      ctaLink: '#'
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security measures and ensure compliance with industry regulations.',
      ctaText: 'Security implementation',
      ctaLink: '#'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Optimize AI system performance, scalability, and resource utilization for maximum efficiency.',
      ctaText: 'Performance tuning',
      ctaLink: '#'
    },
    {
      id: 'testing-validation',
      title: 'Testing & Validation',
      description: 'Comprehensive testing frameworks and validation processes to ensure reliable AI system operation.',
      ctaText: 'Testing services',
      ctaLink: '#'
    },
    {
      id: 'deployment-automation',
      title: 'Deployment Automation',
      description: 'Automated deployment pipelines and DevOps practices for efficient AI solution delivery.',
      ctaText: 'Deployment automation',
      ctaLink: '#'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Technical Certification',
      description: 'Comprehensive technical certification programs to validate implementation expertise and capabilities.',
      href: '#',
      buttonText: 'Get certified',
      icon: '🎯'
    },
    {
      title: 'Implementation Methodologies',
      description: 'Access to proven implementation methodologies, best practices, and project management frameworks.',
      href: '#',
      buttonText: 'Methodologies',
      icon: '📋'
    },
    {
      title: 'Technical Support',
      description: 'Dedicated technical support, engineering resources, and escalation paths for complex implementations.',
      href: '#',
      buttonText: 'Technical support',
      icon: '🔧'
    },
    {
      title: 'Revenue Opportunities',
      description: 'Multiple revenue streams including implementation fees, ongoing services, and performance-based incentives.',
      href: '#',
      buttonText: 'Revenue models',
      icon: '💰'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Implementation Partners | Augment AI System Integrators</h1>

        <SectionHero
          title="Implementation Partners"
          subtitle="Deploy AI solutions with expertise"
          description="Partner with Augment as a system integrator and implementation specialist. Help enterprises deploy, customize, and optimize AI solutions with comprehensive technical support, proven methodologies, and ongoing partnership benefits."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Technical team implementing and deploying AI systems in enterprise environment"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Implementation Services
              </a>
              <a href="#capabilities" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Core Capabilities
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

        <section id="services">
          <FeaturedCards
            title="Comprehensive implementation services"
            description="Partner with us to deliver end-to-end AI implementation services for enterprise customers"
            cards={implementationServices}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Implementation Partner Network
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Certified implementation specialists delivering successful AI deployments worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  300+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Implementation Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Successful Deployments
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  97%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Implementation Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  6 mo
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Implementation Time
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <InfoColumns
            title="Core implementation capabilities"
            description="Essential technical capabilities and expertise areas for successful AI implementation partnerships"
            columns={implementationCapabilities}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="success" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Implementation Partner Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Learn how implementation partners have built successful practices and delivered exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="David Wilson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>David Wilson</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CTO, IntegrateNow Systems</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>System Integration Specialist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Becoming an Augment implementation partner has transformed our business. We've completed 200+ successful AI deployments and grown our implementation revenue by 400% in two years."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Lisa Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Lisa Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>VP Engineering, TechDeploy Solutions</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Enterprise Deployment Expert</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The technical certification and methodologies from Augment have elevated our implementation capabilities. Our customer satisfaction scores are at 98% and we're the preferred implementation partner for Fortune 500 clients."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" 
                    alt="Carlos Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Carlos Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Principal, AI Implementation Group</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Custom Development Specialist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The partnership with Augment has allowed us to specialize in complex custom AI implementations. We've become the go-to firm for healthcare and financial services AI deployments in our region."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <CTASection
            title="Implementation partner benefits and support"
            description="Comprehensive resources and programs to help you build a successful AI implementation practice"
            actions={partnerBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Ready to Build Your Implementation Practice?
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join 300+ implementation partners who are building successful AI deployment practices with Augment support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Technical Resources
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Access comprehensive technical documentation, implementation guides, and engineering support resources.
                </p>
                <a
                  href="/documentation/"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Technical Resources
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Partnership Application
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Apply to become an implementation partner and start building your AI deployment practice with our support.
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
              Build your AI implementation expertise
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Partner with Augment to become a certified AI implementation specialist and help enterprises successfully deploy and optimize AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/join/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Become Implementation Partner
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
