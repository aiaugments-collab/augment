import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Best AI Platform | Augment AI Platform',
  description: 'Discover why Augment is recognized as the best AI platform for intelligent automation, machine learning, and enterprise AI solutions.',
  keywords: 'best AI platform, artificial intelligence, machine learning, automation platform, enterprise AI, AI solutions',
};

export default function AIPlatformPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Try Free Trial',
      href: '/ai/platform/free-trial/',
      variant: 'primary' as const
    },
    {
      text: 'Schedule Demo',
      href: '/ai/platform/demo/',
      variant: 'secondary' as const
    }
  ];

  // Platform Capabilities Data
  const platformCapabilities = [
    {
      id: 'intelligent-automation',
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, reducing manual work by up to 90%.',
      ctaText: 'Explore automation',
      ctaLink: '/ai/platform/automation/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'machine-learning',
      title: 'Advanced Machine Learning',
      description: 'Pre-built ML models and custom AI solutions that deliver insights and predictions for better decision-making.',
      ctaText: 'Learn about ML',
      ctaLink: '/ai/platform/machine-learning/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'natural-language',
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for document processing, sentiment analysis, and conversational AI applications.',
      ctaText: 'Discover NLP',
      ctaLink: '/ai/platform/nlp/',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'AI-powered image and video analysis for quality control, security, and automated visual inspection.',
      ctaText: 'See vision AI',
      ctaLink: '/ai/platform/computer-vision/',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Platform Features Data
  const platformFeatures = [
    {
      id: 'no-code-ai',
      title: 'No-Code AI Development',
      description: 'Build and deploy AI solutions without coding using our intuitive drag-and-drop interface.',
      ctaText: 'Try no-code AI',
      ctaLink: '/ai/platform/no-code/'
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise-Grade Security',
      description: 'SOC 2, GDPR, and HIPAA compliant platform with advanced encryption and access controls.',
      ctaText: 'Learn about security',
      ctaLink: '/ai/platform/security/'
    },
    {
      id: 'scalable-infrastructure',
      title: 'Scalable Cloud Infrastructure',
      description: 'Auto-scaling cloud infrastructure that handles workloads from small teams to global enterprises.',
      ctaText: 'Explore infrastructure',
      ctaLink: '/ai/platform/infrastructure/'
    },
    {
      id: 'api-integrations',
      title: 'Seamless Integrations',
      description: 'Connect with 500+ applications and services through our comprehensive API ecosystem.',
      ctaText: 'View integrations',
      ctaLink: '/ai/platform/integrations/'
    },
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics',
      description: 'Monitor AI performance, track ROI, and gain insights with comprehensive analytics dashboards.',
      ctaText: 'See analytics',
      ctaLink: '/ai/platform/analytics/'
    },
    {
      id: 'collaborative-workspace',
      title: 'Collaborative Workspace',
      description: 'Team collaboration tools for AI development, testing, and deployment across organizations.',
      ctaText: 'Explore workspace',
      ctaLink: '/ai/platform/collaboration/'
    }
  ];

  // Industry Solutions Data
  const industrySolutions = [
    {
      id: 'healthcare',
      title: 'Healthcare AI',
      description: 'AI solutions for medical imaging, patient care automation, and clinical decision support systems.',
      ctaText: 'Healthcare solutions',
      ctaLink: '/ai/platform/healthcare/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'finance',
      title: 'Financial Services',
      description: 'AI-powered fraud detection, risk assessment, and automated financial processing solutions.',
      ctaText: 'Finance solutions',
      ctaLink: '/ai/platform/finance/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization with AI automation.',
      ctaText: 'Manufacturing AI',
      ctaLink: '/ai/platform/manufacturing/',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Customer Testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'Augment\'s AI platform transformed our operations, reducing processing time by 85% and improving accuracy to 99.7%. The ROI was evident within the first quarter.',
      author: 'Sarah Johnson',
      title: 'Chief Technology Officer',
      company: 'Global Financial Services',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'The no-code AI development environment allowed our business users to create sophisticated automation workflows without IT dependency. Game-changing platform.',
      author: 'Michael Chen',
      title: 'VP of Operations',
      company: 'Healthcare Innovation Corp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // Platform Benefits Data
  const platformBenefits = [
    {
      title: 'Start Your AI Journey',
      description: 'Begin with our free trial and experience the power of intelligent automation.',
      href: '/ai/platform/free-trial/',
      buttonText: 'Start free trial',
      icon: ''
    },
    {
      title: 'Schedule a Demo',
      description: 'See how Augment\'s AI platform can transform your specific business processes.',
      href: '/ai/platform/demo/',
      buttonText: 'Book demo',
      icon: ''
    },
    {
      title: 'Talk to an Expert',
      description: 'Consult with our AI specialists to design the perfect solution for your needs.',
      href: '/ai/platform/consultation/',
      buttonText: 'Get consultation',
      icon: ''
    },
    {
      title: 'View Pricing',
      description: 'Explore flexible pricing options designed to scale with your business growth.',
      href: '/ai/platform/pricing/',
      buttonText: 'See pricing',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Best AI Platform | Augment AI Platform</h1>

        {/* Hero Section */}
        <SectionHero
          title="AI Platform"
          subtitle="The world's most advanced AI automation platform"
          description="Discover why enterprises worldwide choose Augment as their AI platform. Build, deploy, and scale intelligent automation solutions that transform your business operations and drive unprecedented efficiency."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Advanced AI platform dashboard and analytics"
        />

        {/* Platform Performance Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Platform Performance
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Industry-leading performance metrics that deliver real business value
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.9%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Platform Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Cost Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10x
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Faster Deployment
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Pre-built Integrations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <FeaturedCards
          title="AI Platform Capabilities"
          description="Comprehensive AI solutions that power intelligent automation across your enterprise"
          cards={platformCapabilities}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Platform Features */}
        <InfoColumns
          title="Platform Features"
          description="Everything you need to build, deploy, and manage AI solutions at enterprise scale"
          columns={platformFeatures}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Industry Solutions */}
        <FeaturedCards
          title="Industry-Specific Solutions"
          description="Tailored AI solutions designed for your industry's unique challenges"
          cards={industrySolutions}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Customer Testimonials */}
        <Testimonials
          title="What our customers say"
          testimonials={testimonials}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* AI Innovation Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Leading AI Innovation
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Advanced AI Models
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        State-of-the-art machine learning models trained on diverse datasets for superior accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Continuous Learning
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        AI systems that learn and improve from your data, becoming more accurate over time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Explainable AI
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Transparent AI decisions with clear explanations for regulatory compliance and trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Platform Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>AI Models Available</span>
                    <span className="text-white font-semibold">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Languages Supported</span>
                    <span className="text-white font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>API Endpoints</span>
                    <span className="text-white font-semibold">1,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Global Data Centers</span>
                    <span className="text-white font-semibold">25+</span>
                  </div>
                </div>
                <a
                  href="/ai/platform/technical-specs/"
                  className="inline-block mt-6 text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View technical specifications →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits CTA */}
        <CTASection
          title="Experience the Best AI Platform"
          description="Join thousands of enterprises who trust Augment for their AI automation needs"
          actions={platformBenefits}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Discover how Augment's AI platform can revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai/platform/free-trial/"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Start Free Trial
              </a>
              <a
                href="/ai/platform/demo/"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
