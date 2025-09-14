import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Government AI Solutions | Augment',
  description: 'Modernize public services with AI agents and intelligent automation. Streamline citizen services, automate document processing, enhance decision-making, and improve government efficiency.',
  keywords: 'government AI, public sector automation, citizen services AI, government efficiency, digital transformation, public administration AI',
};

export default function GovernmentPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/government/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const governmentSolutions = [
    {
      id: 'citizen-services',
      title: 'Intelligent citizen services and support',
      description: 'Enhance citizen experiences with AI-powered chatbots, automated service requests, and streamlined government interactions.',
      ctaText: 'Explore citizen services',
      ctaLink: '/solutions/citizen-services-ai/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'document-processing',
      title: 'Automated document processing and management',
      description: 'Streamline paperwork with AI-powered document classification, data extraction, and automated workflow processing.',
      ctaText: 'Discover document AI',
      ctaLink: '/solutions/government-document-ai/',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'compliance-monitoring',
      title: 'Regulatory compliance and monitoring',
      description: 'Ensure compliance with automated monitoring, reporting, and alert systems for regulatory requirements and policy adherence.',
      ctaText: 'Learn about compliance AI',
      ctaLink: '/solutions/government-compliance/',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fraud-detection',
      title: 'Fraud detection and prevention systems',
      description: 'Protect public resources with AI-powered fraud detection, anomaly identification, and automated investigation support.',
      ctaText: 'Explore fraud prevention',
      ctaLink: '/solutions/government-fraud-detection/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-analytics',
      title: 'Government data analytics and insights',
      description: 'Make informed decisions with AI-driven analytics, predictive modeling, and comprehensive data visualization platforms.',
      ctaText: 'Discover analytics AI',
      ctaLink: '/solutions/government-analytics/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'public-safety',
      title: 'Public safety and emergency response',
      description: 'Enhance public safety with AI-powered emergency response, predictive policing, and intelligent resource allocation.',
      ctaText: 'Learn about public safety AI',
      ctaLink: '/solutions/public-safety-ai/',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const governmentSectors = [
    {
      id: 'federal-government',
      title: 'Federal Government',
      description: 'Comprehensive AI solutions for federal agencies including policy automation, inter-agency coordination, and national security applications.',
      ctaText: 'Explore federal solutions',
      ctaLink: '/industries/government/federal/'
    },
    {
      id: 'state-government',
      title: 'State Government',
      description: 'State-level AI solutions for licensing, taxation, healthcare administration, and cross-departmental coordination.',
      ctaText: 'Discover state solutions',
      ctaLink: '/industries/government/state/'
    },
    {
      id: 'local-government',
      title: 'Local Government',
      description: 'Municipal AI solutions for city services, permit processing, public works, and community engagement platforms.',
      ctaText: 'Learn about local solutions',
      ctaLink: '/industries/government/local/'
    },
    {
      id: 'public-safety',
      title: 'Public Safety Agencies',
      description: 'Specialized AI for law enforcement, fire departments, and emergency services including predictive analytics and response optimization.',
      ctaText: 'Explore public safety AI',
      ctaLink: '/industries/government/public-safety/'
    },
    {
      id: 'regulatory-agencies',
      title: 'Regulatory Agencies',
      description: 'AI solutions for regulatory compliance, inspection automation, and policy enforcement across various industries.',
      ctaText: 'Discover regulatory AI',
      ctaLink: '/industries/government/regulatory/'
    },
    {
      id: 'defense-intelligence',
      title: 'Defense & Intelligence',
      description: 'Secure AI solutions for defense applications, intelligence analysis, and national security operations.',
      ctaText: 'Learn about defense AI',
      ctaLink: '/industries/government/defense/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Improve Service Delivery by 50%',
      description: 'Enhance citizen satisfaction with faster response times, automated services, and streamlined government processes.',
      href: '/resources/government-service-study/',
      buttonText: 'View study',
      icon: '️'
    },
    {
      title: 'Reduce Processing Time by 70%',
      description: 'Accelerate document processing, permit approvals, and administrative tasks through intelligent automation.',
      href: '/solutions/government-document-ai/',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Increase Compliance by 95%',
      description: 'Ensure regulatory adherence with automated monitoring, reporting, and compliance management systems.',
      href: '/solutions/government-compliance/',
      buttonText: 'Explore compliance',
      icon: ''
    },
    {
      title: 'Lower Operational Costs by 40%',
      description: 'Reduce operational expenses through process automation, resource optimization, and intelligent decision-making.',
      href: '/resources/government-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: ''
    }
  ];

  const customerTestimonials = [
    {
      id: 'city-government',
      quote: 'Augment\'s citizen services platform has transformed how we interact with residents. Response times have improved by 60% and citizen satisfaction is at an all-time high.',
      author: 'Maria Rodriguez',
      title: 'Chief Information Officer',
      company: 'Metro City Government',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'state-agency',
      quote: 'The document processing automation has revolutionized our permit approval process. What used to take weeks now takes days, and accuracy has improved dramatically.',
      author: 'David Thompson',
      title: 'Director of Operations',
      company: 'State Regulatory Agency',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'federal-department',
      quote: 'Fraud detection AI has helped us identify and prevent millions in fraudulent claims while streamlining legitimate benefit processing for citizens who need it most.',
      author: 'Jennifer Park',
      title: 'Deputy Administrator',
      company: 'Federal Benefits Administration',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Government AI Solutions | Augment</h1>

        <SectionHero
          title="Government"
          subtitle="Modernize public services with AI"
          description="Transform government operations with intelligent automation that streamlines citizen services, automates document processing, enhances decision-making, and improves public sector efficiency while maintaining security and compliance."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern government building with digital transformation and AI technology"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Government Sectors
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Key Benefits
              </a>
              <a href="#customers" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Customers
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        <section id="solutions">
          <FeaturedCards
            title="Deliver exceptional public services with AI automation"
            description="Comprehensive AI solutions designed to modernize government operations and enhance citizen experiences"
            cards={governmentSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by government sector"
            description="Specialized AI solutions tailored for different levels and areas of government operations"
            columns={governmentSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable results for government operations"
            description="See the quantifiable impact of AI automation on public service delivery and operational efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Government Sector Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Modernizing government operations worldwide with intelligent automation and citizen-focused services
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Citizens Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  70%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Faster Processing Times
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Compliance Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Government Agencies
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how government agencies transform with Augment"
            description="Real results from federal, state, and local government organizations leveraging AI for better public services"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Security & Compliance for Government
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions meet the highest security standards and compliance requirements for government operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">FedRAMP</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  FedRAMP Authorized
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Federal cloud security authorization for government use
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">FISMA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  FISMA Compliant
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Federal information security management standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">CJIS</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  CJIS Security Policy
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Criminal justice information services compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">NIST</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  NIST Framework
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  National Institute of Standards cybersecurity framework
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to modernize your government operations?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our government AI experts to discover how intelligent automation can improve citizen services, streamline operations, and enhance public sector efficiency while maintaining security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/government/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Government Demo
              </a>
              <a
                href="/resources/government-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Government ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
