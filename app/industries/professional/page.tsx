import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Professional Services AI Solutions | Augment',
  description: 'Transform professional services with AI agents and intelligent automation. Optimize consulting, legal, accounting, and advisory services with AI-powered client management and workflow automation.',
  keywords: 'professional services AI, consulting automation, legal AI, accounting automation, advisory services AI, client management AI, professional workflow automation',
};

export default function ProfessionalServicesPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/professional-services/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const professionalServicesSolutions = [
    {
      id: 'client-management',
      title: 'Intelligent client relationship management',
      description: 'Enhance client relationships with AI-powered CRM, automated communication, and predictive client needs analysis.',
      ctaText: 'Explore client AI',
      ctaLink: '/solutions/professional-crm/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'document-automation',
      title: 'Document automation and contract management',
      description: 'Streamline document creation, contract analysis, and legal review with AI-powered automation and intelligent templates.',
      ctaText: 'Discover document AI',
      ctaLink: '/solutions/document-automation/',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'project-optimization',
      title: 'Project management and resource optimization',
      description: 'Optimize project delivery with AI-driven resource allocation, timeline prediction, and automated project tracking.',
      ctaText: 'Learn about project AI',
      ctaLink: '/solutions/project-optimization/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'knowledge-management',
      title: 'AI-powered knowledge management systems',
      description: 'Capture and leverage institutional knowledge with intelligent search, automated insights, and expert recommendation systems.',
      ctaText: 'Explore knowledge AI',
      ctaLink: '/solutions/knowledge-management/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'business-intelligence',
      title: 'Business intelligence and analytics',
      description: 'Make data-driven decisions with AI-powered analytics, client insights, and predictive business intelligence.',
      ctaText: 'Discover analytics AI',
      ctaLink: '/solutions/professional-analytics/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'compliance-automation',
      title: 'Compliance and risk management automation',
      description: 'Ensure compliance with automated monitoring, risk assessment, and regulatory reporting for professional services.',
      ctaText: 'Learn about compliance AI',
      ctaLink: '/solutions/professional-compliance/',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const professionalServicesSectors = [
    {
      id: 'consulting',
      title: 'Management Consulting',
      description: 'AI solutions for strategy consulting, operational improvement, and client engagement optimization for management consulting firms.',
      ctaText: 'Explore consulting AI',
      ctaLink: '/industries/professional/consulting/'
    },
    {
      id: 'legal-services',
      title: 'Legal Services',
      description: 'Legal AI for contract analysis, case research, document review, and client management for law firms and legal departments.',
      ctaText: 'Discover legal AI',
      ctaLink: '/industries/professional/legal/'
    },
    {
      id: 'accounting-finance',
      title: 'Accounting & Finance',
      description: 'Financial AI for audit automation, tax optimization, financial analysis, and client advisory services for accounting firms.',
      ctaText: 'Learn about accounting AI',
      ctaLink: '/industries/professional/accounting/'
    },
    {
      id: 'advisory-services',
      title: 'Advisory Services',
      description: 'AI-powered advisory solutions for business strategy, financial planning, and specialized consulting services.',
      ctaText: 'Explore advisory AI',
      ctaLink: '/industries/professional/advisory/'
    },
    {
      id: 'architecture-engineering',
      title: 'Architecture & Engineering',
      description: 'Design optimization, project management, and client collaboration tools for architecture and engineering firms.',
      ctaText: 'Discover design AI',
      ctaLink: '/industries/professional/architecture/'
    },
    {
      id: 'marketing-agencies',
      title: 'Marketing & Advertising',
      description: 'Campaign optimization, client analytics, and creative automation for marketing agencies and advertising firms.',
      ctaText: 'Learn about marketing AI',
      ctaLink: '/industries/professional/marketing/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Increase Billable Hours by 35%',
      description: 'Maximize billable time through automated administrative tasks, intelligent scheduling, and streamlined workflows.',
      href: '/resources/professional-services-study/',
      buttonText: 'View study',
      icon: '⏰'
    },
    {
      title: 'Improve Client Satisfaction by 45%',
      description: 'Enhance client experiences with personalized service, faster response times, and proactive communication.',
      href: '/solutions/professional-crm/',
      buttonText: 'Learn more',
      icon: '😊'
    },
    {
      title: 'Reduce Project Overruns by 50%',
      description: 'Optimize project delivery with predictive analytics, resource optimization, and intelligent project management.',
      href: '/solutions/project-optimization/',
      buttonText: 'Explore project AI',
      icon: '📊'
    },
    {
      title: 'Lower Operational Costs by 30%',
      description: 'Reduce operational expenses through process automation, intelligent resource allocation, and efficiency optimization.',
      href: '/resources/professional-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: '💰'
    }
  ];

  const customerTestimonials = [
    {
      id: 'consulting-firm',
      quote: 'Augment\'s AI has transformed our consulting practice. We\'ve increased our project success rate by 40% and significantly improved client satisfaction through better insights and faster delivery.',
      author: 'Jennifer Martinez',
      title: 'Managing Partner',
      company: 'Strategic Consulting Group',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'law-firm',
      quote: 'Document automation has revolutionized our legal practice. We\'ve reduced contract review time by 70% while improving accuracy and allowing our lawyers to focus on high-value work.',
      author: 'Robert Chen',
      title: 'Senior Partner',
      company: 'Chen & Associates Law Firm',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'accounting-firm',
      quote: 'The AI-powered analytics have given us unprecedented insights into our clients\' businesses. We\'ve become true strategic advisors, not just number crunchers.',
      author: 'Sarah Johnson',
      title: 'Managing Director',
      company: 'Johnson Financial Advisory',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Professional Services AI Solutions | Augment</h1>

        <SectionHero
          title="Professional Services"
          subtitle="Transform advisory services with AI"
          description="Optimize professional services operations with AI-powered client management, document automation, project optimization, and knowledge management. Enhance client experiences and drive business growth with intelligent automation."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Professional services office with AI-powered client management and business intelligence"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Service Sectors
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
            title="Deliver exceptional professional services with AI automation"
            description="Comprehensive AI solutions designed to optimize client relationships and streamline professional service delivery"
            cards={professionalServicesSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by professional service sector"
            description="Specialized AI solutions tailored for different types of professional service organizations"
            columns={professionalServicesSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable results for professional service firms"
            description="See the quantifiable impact of AI automation on billable hours, client satisfaction, and operational efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Professional Services Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming professional service firms worldwide with intelligent client management and operational optimization
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $15B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Client Value Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  35%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Increase in Billable Hours
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  45%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Client Satisfaction Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Professional Service Firms
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how professional service firms transform with Augment"
            description="Real results from consulting, legal, accounting, and advisory firms leveraging AI for better client outcomes"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Professional Service Excellence Framework
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions optimize every aspect of professional service delivery and client relationships
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Client Relationship Management
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  AI-powered CRM and client intelligence systems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Project Management
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Intelligent project optimization and resource allocation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📄</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Document Automation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Automated document creation and contract management
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Business Intelligence
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data-driven insights and predictive analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your professional services?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our professional services AI experts to discover how intelligent automation can optimize client relationships, streamline operations, and drive business growth in your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/professional-services/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Professional Services Demo
              </a>
              <a
                href="/resources/professional-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Professional Services ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
