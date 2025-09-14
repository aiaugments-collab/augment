import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Consulting Partners | Augment AI Strategic Consultants',
  description: 'Partner with Augment AI as a strategic consulting firm. Help organizations plan, implement, and optimize their AI transformation initiatives.',
  keywords: 'consulting partners, AI strategy, digital transformation, AI consulting, strategic partnerships, business consulting',
};

export default function ConsultingPartnersPage() {
  const heroButtons = [
    {
      text: 'Find Consulting Partners',
      href: '/partners/find/',
      variant: 'primary' as const
    },
    {
      text: 'Become Consulting Partner',
      href: '/partners/join/',
      variant: 'secondary' as const
    }
  ];

  const consultingServices = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy & Planning',
      description: 'Strategic consulting partners helping organizations develop comprehensive AI strategies and transformation roadmaps.',
      ctaText: 'Strategy partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Consulting firms specializing in enterprise-wide digital transformation with AI as a core enabler.',
      ctaText: 'Transformation partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'change-management',
      title: 'Change Management & Training',
      description: 'Organizational change specialists helping companies adapt to AI-driven business processes and workflows.',
      ctaText: 'Change partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-specialists',
      title: 'Industry Specialist Consultants',
      description: 'Domain experts providing industry-specific AI consulting for healthcare, finance, manufacturing, and other sectors.',
      ctaText: 'Industry experts',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics Consulting',
      description: 'Data science and analytics consultants helping organizations leverage AI for data-driven insights.',
      ctaText: 'Analytics partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'governance-compliance',
      title: 'AI Governance & Compliance',
      description: 'Specialized consultants helping organizations establish AI governance frameworks and ensure regulatory compliance.',
      ctaText: 'Governance partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const consultingCapabilities = [
    {
      id: 'strategic-planning',
      title: 'Strategic AI Planning',
      description: 'Help organizations develop AI strategies aligned with business objectives and competitive positioning.',
      ctaText: 'Strategic planning',
      ctaLink: '#'
    },
    {
      id: 'business-case',
      title: 'Business Case Development',
      description: 'Build compelling business cases for AI investments with ROI analysis and implementation roadmaps.',
      ctaText: 'Business cases',
      ctaLink: '#'
    },
    {
      id: 'organizational-readiness',
      title: 'Organizational Readiness',
      description: 'Assess organizational readiness for AI adoption and develop change management strategies.',
      ctaText: 'Readiness assessment',
      ctaLink: '#'
    },
    {
      id: 'process-optimization',
      title: 'Process Optimization',
      description: 'Identify and optimize business processes for AI automation and intelligent decision-making.',
      ctaText: 'Process optimization',
      ctaLink: '#'
    },
    {
      id: 'talent-development',
      title: 'AI Talent Development',
      description: 'Develop AI skills and capabilities within client organizations through training and development programs.',
      ctaText: 'Talent development',
      ctaLink: '#'
    },
    {
      id: 'performance-measurement',
      title: 'Performance Measurement',
      description: 'Establish KPIs and measurement frameworks to track AI implementation success and business impact.',
      ctaText: 'Performance metrics',
      ctaLink: '#'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Business Development Support',
      description: 'Access to qualified leads, joint sales opportunities, and co-marketing programs to grow your consulting practice.',
      href: '#',
      buttonText: 'Business development',
      icon: ''
    },
    {
      title: 'Technical Enablement',
      description: 'Comprehensive training on Augment AI platform, certification programs, and ongoing technical support.',
      href: '#',
      buttonText: 'Get enabled',
      icon: ''
    },
    {
      title: 'Thought Leadership',
      description: 'Opportunities to co-author content, speak at events, and establish your firm as an AI thought leader.',
      href: '#',
      buttonText: 'Thought leadership',
      icon: ''
    },
    {
      title: 'Competitive Differentiation',
      description: 'Differentiate your consulting services with cutting-edge AI capabilities and proven methodologies.',
      href: '#',
      buttonText: 'Differentiate',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Consulting Partners | Augment AI Strategic Consultants</h1>

        <SectionHero
          title="Consulting Partners"
          subtitle="Strategic AI consulting excellence"
          description="Partner with Augment to expand your consulting practice with AI expertise. Help organizations navigate their AI transformation journey with proven methodologies, comprehensive training, and ongoing support from our team."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Strategic consultants working with clients on AI transformation and business strategy"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Consulting Services
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
            title="Comprehensive AI consulting services"
            description="Partner with us to deliver strategic AI consulting across all aspects of digital transformation"
            cards={consultingServices}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Consulting Partner Network
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Leading consulting firms driving AI transformation across industries
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  150+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Consulting Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  AI Transformation Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $1.2B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Client Value Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  94%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <InfoColumns
            title="Core consulting capabilities and expertise"
            description="Comprehensive consulting capabilities to help organizations succeed with AI transformation"
            columns={consultingCapabilities}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="success" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Consulting Partner Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Learn how consulting partners have grown their practice and delivered exceptional client results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Jennifer Park" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Jennifer Park</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Managing Partner, Strategic AI Consulting</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>AI Strategy Specialist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Partnering with Augment has transformed our consulting practice. We've grown our AI consulting revenue by 500% and helped 50+ clients achieve successful AI transformations with measurable ROI."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="Robert Johnson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Robert Johnson</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Principal, Digital Transformation Group</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Change Management Expert</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Augment partnership has given us a competitive edge in digital transformation consulting. Our clients trust us to deliver cutting-edge AI solutions that drive real business value."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces" 
                    alt="Maria Santos" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Maria Santos</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Director, Healthcare AI Solutions</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Industry Specialist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Specializing in healthcare AI consulting with Augment has positioned us as the go-to firm for hospital systems. We've helped 20+ healthcare organizations improve patient outcomes through AI."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <CTASection
            title="Consulting partner benefits and support"
            description="Comprehensive resources and programs to help you build a successful AI consulting practice"
            actions={partnerBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Ready to Expand Your Consulting Practice?
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join 150+ consulting partners who are building successful AI practices with Augment support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Consulting Methodologies
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Access proven consulting methodologies, frameworks, and tools to deliver successful AI transformation projects.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Access Methodologies
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-[#C74634] text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Partnership Application
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Apply to become a consulting partner and start building your AI consulting practice with our support.
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
              Build your AI consulting expertise
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Partner with Augment to expand your consulting practice, access cutting-edge AI capabilities, and deliver transformational results for your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/join/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Become Consulting Partner
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
