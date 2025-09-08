    import { Metadata } from 'next';
    import { 
    SectionHero, 
    FeaturedCards, 
    InfoColumns, 
    CTASection
    } from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Industries | Augment AI Solutions',
  description: 'Discover how Augment AI agents and cloud applications transform industries. From financial services to healthcare, manufacturing to education - unlock the power of intelligent automation.',
  keywords: 'AI solutions by industry, industry AI applications, cloud solutions, intelligent automation, digital transformation, AI agents, enterprise AI',
};

export default function IndustriesPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Explore AI Solutions',
      href: '/product/',
      variant: 'primary' as const
    },
    {
      text: 'Contact Sales',
      href: '/corporate/contact/sales/',
      variant: 'secondary' as const
    }
  ];

  // Main Industry Solutions
  const industrySolutions = [
    {
      id: 'financial-services',
      title: 'Transform financial operations with intelligent automation',
      description: 'Accelerate loan processing, automate compliance reporting, and enhance customer experiences with AI-powered financial solutions.',
      ctaText: 'Explore Financial AI',
      ctaLink: '/industries/financial-services/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare',
      title: 'Revolutionize patient care with AI-driven insights',
      description: 'Streamline medical records, automate administrative tasks, and support clinical decision-making with intelligent healthcare solutions.',
      ctaText: 'Discover Healthcare AI',
      ctaLink: '/industries/healthcare/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing',
      title: 'Optimize production with predictive intelligence',
      description: 'Implement predictive maintenance, quality control automation, and supply chain optimization with AI-powered manufacturing solutions.',
      ctaText: 'Explore Manufacturing AI',
      ctaLink: '/industries/manufacturing/',
      image: 'https://images.unsplash.com/photo-1565514158740-8f4ea9e77c29?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'education',
      title: 'Enhance learning experiences with intelligent systems',
      description: 'Personalize student learning, automate administrative processes, and improve institutional efficiency with AI-driven education solutions.',
      ctaText: 'Discover Education AI',
      ctaLink: '/industries/education/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail',
      title: 'Deliver personalized shopping experiences',
      description: 'Optimize inventory management, personalize customer recommendations, and automate supply chain operations with retail AI solutions.',
      ctaText: 'Explore Retail AI',
      ctaLink: '/industries/retail/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'government',
      title: 'Modernize public services with intelligent automation',
      description: 'Streamline citizen services, automate document processing, and enhance decision-making with AI-powered government solutions.',
      ctaText: 'Discover Gov AI',
      ctaLink: '/industries/government/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Innovation Areas
  const innovationAreas = [
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      description: 'Deploy intelligent agents that handle complex workflows, make decisions, and adapt to changing business needs across all industries.',
      ctaText: 'Learn about AI agents',
      ctaLink: '/product/aihr/'
    },
    {
      id: 'cloud-applications',
      title: 'Cloud-Native Applications',
      description: 'Scale your operations with cloud applications designed for modern enterprises - from ERP to customer experience platforms.',
      ctaText: 'Explore cloud apps',
      ctaLink: '/product/'
    },
    {
      id: 'data-intelligence',
      title: 'Data Intelligence Platform',
      description: 'Transform raw data into actionable insights with our comprehensive analytics and machine learning capabilities.',
      ctaText: 'Discover data platform',
      ctaLink: '/product/finance-ai/'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end transformation services that help organizations modernize processes and adopt intelligent technologies.',
      ctaText: 'Start transformation',
      ctaLink: '/industries/professional/'
    }
  ];

  // Industry Sectors
  const industrySectors = [
    {
      title: 'Enterprise & Technology',
      description: 'High Technology companies and Professional Services firms leverage our AI solutions for innovation acceleration and operational excellence.',
      href: '/industries/high-tech/',
      buttonText: 'Explore enterprise solutions',
      icon: '💻'
    },
    {
      title: 'Regulated Industries',
      description: 'Financial Services, Healthcare, and Government organizations trust our secure, compliant AI solutions for critical operations.',
      href: '/industries/financial-services/',
      buttonText: 'Discover regulated solutions',
      icon: '🏛️'
    },
    {
      title: 'Operations & Services',
      description: 'Manufacturing, Retail, and Education institutions optimize their operations with our intelligent automation platforms.',
      href: '/industries/manufacturing/',
      buttonText: 'Optimize operations',
      icon: '⚙️'
    }
  ];

  // Customer Success Stories
  const customerStories = [
    {
      id: 'financial-transformation',
      title: 'Leading Bank Transforms Operations',
      description: 'See how a top-tier financial institution reduced processing time by 75% and improved customer satisfaction using Augment AI agents.',
      ctaText: 'Read case study',
      ctaLink: '/customers/financial-case-study/',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare-innovation',
      title: 'Hospital Network Improves Patient Care',
      description: 'Discover how a major healthcare network streamlined operations and enhanced patient outcomes with intelligent automation.',
      ctaText: 'View success story',
      ctaLink: '/customers/healthcare-case-study/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing-efficiency',
      title: 'Manufacturer Achieves Zero Downtime',
      description: 'Learn how predictive maintenance and AI-driven quality control helped achieve 99.9% operational efficiency.',
      ctaText: 'Explore results',
      ctaLink: '/customers/manufacturing-case-study/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Get Started Actions
  const getStartedActions = [
    {
      title: 'Schedule a Demo',
      description: 'See how Augment AI solutions can transform your industry with a personalized demonstration.',
      href: '/demo/',
      buttonText: 'Book demo',
      icon: '🎯'
    },
    {
      title: 'Industry Assessment',
      description: 'Get a custom analysis of AI opportunities and ROI potential specific to your industry and use cases.',
      href: '/assessment/',
      buttonText: 'Start assessment',
      icon: '📊'
    },
    {
      title: 'Free Trial',
      description: 'Experience our AI agents and cloud applications with a risk-free trial designed for your industry.',
      href: '/trial/',
      buttonText: 'Start trial',
      icon: '🚀'
    }
  ];

  // Tabbed Content for Solutions by Category
  const solutionTabs = [
    {
      id: 'business-function',
      title: 'By Business Function',
      hasDropdown: false,
      content: {
        title: 'AI Solutions by Business Function',
        description: 'Targeted solutions for specific business operations',
        items: [
          {
            title: 'Finance & Accounting',
            description: 'Automate financial processes, compliance reporting, and strategic planning with AI-powered finance solutions.',
            link: '/solutions/finance/',
            icon: '💰'
          },
          {
            title: 'Human Resources',
            description: 'Transform talent acquisition, employee experience, and workforce analytics with intelligent HR platforms.',
            link: '/solutions/hr/',
            icon: '👥'
          },
          {
            title: 'Operations & Supply Chain',
            description: 'Optimize logistics, inventory management, and operational efficiency with predictive AI solutions.',
            link: '/solutions/operations/',
            icon: '📦'
          },
          {
            title: 'Customer Experience',
            description: 'Deliver personalized customer interactions and support with AI-driven CX platforms.',
            link: '/solutions/customer-experience/',
            icon: '🤝'
          }
        ]
      }
    },
    {
      id: 'technology',
      title: 'By Technology',
      hasDropdown: false,
      content: {
        title: 'AI Solutions by Technology Category',
        description: 'Advanced technology platforms for intelligent automation',
        items: [
          {
            title: 'Machine Learning Platform',
            description: 'Build, deploy, and manage ML models at scale with our comprehensive machine learning infrastructure.',
            link: '/technology/machine-learning/',
            icon: '🧠'
          },
          {
            title: 'Natural Language Processing',
            description: 'Extract insights from text, automate document processing, and enable conversational AI interfaces.',
            link: '/technology/nlp/',
            icon: '💬'
          },
          {
            title: 'Computer Vision',
            description: 'Analyze images and video content for quality control, security, and automated inspection systems.',
            link: '/technology/computer-vision/',
            icon: '👁️'
          },
          {
            title: 'Predictive Analytics',
            description: 'Forecast trends, identify risks, and optimize operations with advanced predictive modeling capabilities.',
            link: '/technology/predictive-analytics/',
            icon: '📈'
          }
        ]
      }
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Industries | Augment AI Solutions</h1>

        {/* Hero Section */}
        <SectionHero
          title="Industries"
          subtitle="AI solutions designed for your sector"
          description="Discover how Augment transforms industries with intelligent automation and cloud applications. From financial services to healthcare, manufacturing to education - unlock the power of AI agents tailored to your specific business needs."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern office with professionals using AI technology across different industries"
        />

        {/* Navigation Menu for Page Sections */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Sectors
              </a>
              <a href="#innovation" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Innovation Areas
              </a>
              <a href="#customers" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Customers
              </a>
              <a href="#solutions-tabs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Browse Solutions
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Main Industry Solutions */}
        <section id="solutions">
          <FeaturedCards
            title="Transform your industry with intelligent automation"
            description="Purpose-built AI solutions that understand your sector's unique challenges and opportunities"
            cards={industrySolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        {/* AI World Promotional Banner */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces" 
                  alt="AI World Conference" 
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Announcing Augment AI World 2025
                </h2>
                <p className="text-base text-gray-300 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Join industry leaders at Augment AI World, October 13–16 in Las Vegas. Discover the latest AI innovations, learn from real-world implementations, and network with peers transforming their industries with intelligent automation.
                </p>
                <a
                  href="/ai-world/"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Register now for AI World
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section id="sectors">
          <CTASection
            title="Find solutions by industry sector"
            description="Targeted approaches for different industry categories and their unique requirements"
            actions={industrySectors}
            columns={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Innovation Areas */}
        <section id="innovation">
          <InfoColumns
            title="Innovation areas driving industry transformation"
            description="Core technology capabilities that power intelligent automation across all sectors"
            columns={innovationAreas}
            columnsCount={2}
            backgroundColor="bg-white"
          />
        </section>

        {/* Customer Success Stories */}
        <section id="customers">
          <FeaturedCards
            title="See how industries transform with Augment"
            description="Real results from organizations leveraging AI to revolutionize their operations"
            cards={customerStories}
            columns={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Industry Spotlight - Statistics */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Augment Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming industries worldwide with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  8
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Key Industries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Process Efficiency Gain
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  60%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Reduction in Manual Tasks
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  24/7
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  AI Agent Availability
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Solutions by Category */}
        <section id="solutions-tabs" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Browse solutions by category
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Explore our comprehensive AI solutions organized by business function and technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {solutionTabs.map((tab) => (
                <div key={tab.id} className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {tab.content.title}
                  </h3>
                  <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {tab.content.description}
                  </p>
                  <div className="grid gap-4">
                    {tab.content.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                            {item.description}
                          </p>
                          <a
                            href={item.link}
                            className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200"
                            style={{ fontFamily: 'var(--oraclesans)' }}
                          >
                            Learn more →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Industry Resources and Insights
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive resources to help you understand and implement AI solutions in your industry
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="/resources/industry-reports/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Industry AI Adoption Report 2025
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Comprehensive analysis of AI implementation trends across major industries
                    </p>
                  </li>
                  <li>
                    <a href="/resources/roi-calculator/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      ROI Calculator: Measure Your AI Impact
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Interactive tool to calculate potential returns from AI automation in your industry
                    </p>
                  </li>
                  <li>
                    <a href="/resources/implementation-guide/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Implementation Best Practices Guide
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Step-by-step guide for successful AI deployment across different industries
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="/webinars/industry-transformation/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Webinar: Industry Transformation with AI Agents
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Live discussion with industry experts on real-world AI implementation strategies
                    </p>
                  </li>
                  <li>
                    <a href="/resources/compliance-framework/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Compliance Framework for Regulated Industries
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Comprehensive guidelines for AI deployment in finance, healthcare, and government
                    </p>
                  </li>
                  <li>
                    <a href="/customers/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Customer Success Stories by Industry
                    </a>
                    <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Detailed case studies showing measurable results across different sectors
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="getstarted">
          <CTASection
            title="Get started with industry-specific AI solutions"
            description="Take the first step toward transforming your industry with intelligent automation"
            actions={getStartedActions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your industry?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our industry experts to discover how AI agents and cloud applications can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Industry Demo
              </a>
              <a
                href="/corporate/contact/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
