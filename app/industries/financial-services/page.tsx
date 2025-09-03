import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Financial Services AI Solutions | Augment',
  description: 'Transform financial operations with AI agents and cloud applications. Accelerate loan processing, automate compliance, enhance customer experiences, and reduce operational costs.',
  keywords: 'financial services AI, banking automation, fintech solutions, compliance automation, loan processing AI, financial analytics, risk management AI',
};

export default function FinancialServicesPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/financial-services/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  // Financial Solutions
  const financialSolutions = [
    {
      id: 'loan-processing',
      title: 'Accelerate loan processing with AI-powered automation',
      description: 'Reduce loan approval time from weeks to hours with intelligent document processing, automated risk assessment, and streamlined workflows.',
      ctaText: 'Explore loan automation',
      ctaLink: '/solutions/loan-processing/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'compliance-automation',
      title: 'Automate compliance reporting and monitoring',
      description: 'Ensure regulatory compliance with automated reporting, real-time monitoring, and intelligent alerts for AML, KYC, and regulatory requirements.',
      ctaText: 'Discover compliance AI',
      ctaLink: '/solutions/compliance-automation/',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fraud-detection',
      title: 'Advanced fraud detection and prevention',
      description: 'Protect your institution with real-time fraud detection, behavioral analysis, and predictive risk scoring powered by machine learning.',
      ctaText: 'Learn about fraud AI',
      ctaLink: '/solutions/fraud-detection/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'customer-experience',
      title: 'Enhance customer experiences with intelligent support',
      description: 'Deliver personalized banking experiences with AI-powered chatbots, automated customer service, and predictive financial advice.',
      ctaText: 'Explore CX solutions',
      ctaLink: '/solutions/financial-cx/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'risk-management',
      title: 'Intelligent risk assessment and management',
      description: 'Make informed decisions with AI-driven credit scoring, portfolio risk analysis, and predictive market intelligence.',
      ctaText: 'Discover risk AI',
      ctaLink: '/solutions/risk-management/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'trading-analytics',
      title: 'Advanced trading and investment analytics',
      description: 'Optimize trading strategies with real-time market analysis, algorithmic trading support, and predictive investment insights.',
      ctaText: 'Explore trading AI',
      ctaLink: '/solutions/trading-analytics/',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Financial Sectors
  const financialSectors = [
    {
      id: 'retail-banking',
      title: 'Retail Banking',
      description: 'Transform customer experiences with AI-powered personal banking, automated loan processing, and intelligent financial advisory services.',
      ctaText: 'Explore retail banking',
      ctaLink: '/industries/financial-services/retail-banking/'
    },
    {
      id: 'commercial-banking',
      title: 'Commercial Banking',
      description: 'Streamline business banking operations with automated credit analysis, cash management solutions, and corporate treasury services.',
      ctaText: 'Discover commercial solutions',
      ctaLink: '/industries/financial-services/commercial-banking/'
    },
    {
      id: 'investment-management',
      title: 'Investment Management',
      description: 'Enhance portfolio management with AI-driven investment research, risk analytics, and automated trading strategies.',
      ctaText: 'Learn about investment AI',
      ctaLink: '/industries/financial-services/investment-management/'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Modernize insurance operations with automated claims processing, risk assessment, and personalized policy recommendations.',
      ctaText: 'Explore insurance AI',
      ctaLink: '/industries/financial-services/insurance/'
    },
    {
      id: 'fintech',
      title: 'Fintech & Digital Banking',
      description: 'Build next-generation financial services with cloud-native platforms, API-first architecture, and embedded AI capabilities.',
      ctaText: 'Discover fintech solutions',
      ctaLink: '/industries/financial-services/fintech/'
    },
    {
      id: 'wealth-management',
      title: 'Wealth Management',
      description: 'Deliver personalized wealth management with robo-advisory services, portfolio optimization, and intelligent client insights.',
      ctaText: 'Learn about wealth AI',
      ctaLink: '/industries/financial-services/wealth-management/'
    }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      title: 'Reduce Processing Time by 75%',
      description: 'Automate manual processes and accelerate decision-making with intelligent document processing and workflow automation.',
      href: '/resources/financial-roi-calculator/',
      buttonText: 'Calculate ROI',
      icon: '⚡'
    },
    {
      title: 'Ensure 99.9% Compliance Accuracy',
      description: 'Meet regulatory requirements with automated compliance monitoring, reporting, and real-time risk assessment.',
      href: '/solutions/compliance-automation/',
      buttonText: 'Learn more',
      icon: '✅'
    },
    {
      title: 'Improve Customer Satisfaction by 40%',
      description: 'Deliver exceptional customer experiences with AI-powered support, personalized services, and faster response times.',
      href: '/solutions/financial-cx/',
      buttonText: 'Explore CX',
      icon: '😊'
    },
    {
      title: 'Reduce Operational Costs by 60%',
      description: 'Lower operational expenses through intelligent automation, predictive maintenance, and optimized resource allocation.',
      href: '/resources/cost-savings-calculator/',
      buttonText: 'See savings',
      icon: '💰'
    }
  ];

  // Customer Testimonials
  const customerTestimonials = [
    {
      id: 'major-bank',
      quote: 'Augment AI agents have transformed our loan processing operations. We\'ve reduced approval time from 2 weeks to 2 hours while maintaining the highest compliance standards.',
      author: 'Sarah Chen',
      title: 'Chief Technology Officer',
      company: 'Regional Banking Group',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'fintech-startup',
      quote: 'The intelligent fraud detection system has helped us prevent over $50M in fraudulent transactions while reducing false positives by 80%. It\'s been a game-changer for our business.',
      author: 'Michael Rodriguez',
      title: 'Head of Risk Management',
      company: 'Digital Payment Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'investment-firm',
      quote: 'Our investment performance has improved significantly with Augment\'s predictive analytics. The AI-driven insights help us make better investment decisions and manage risk more effectively.',
      author: 'Jennifer Park',
      title: 'Portfolio Manager',
      company: 'Apex Investment Management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Financial Services AI Solutions | Augment</h1>

        {/* Hero Section */}
        <SectionHero
          title="Financial Services"
          subtitle="Transform finance with intelligent automation"
          description="Accelerate loan processing, automate compliance reporting, enhance customer experiences, and reduce operational costs with AI-powered financial solutions designed for banks, credit unions, fintech companies, and investment firms."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern financial services office with AI technology and data analytics"
        />

        {/* Navigation Menu for Page Sections */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Financial Sectors
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

        {/* Financial Solutions */}
        <section id="solutions">
          <FeaturedCards
            title="Deliver exceptional financial experiences with AI automation"
            description="Purpose-built AI solutions that address the unique challenges and opportunities in financial services"
            cards={financialSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        {/* Financial Sectors */}
        <section id="sectors">
          <InfoColumns
            title="Find solutions by financial sector"
            description="Specialized AI solutions tailored for different areas of financial services"
            columns={financialSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Key Benefits */}
        <section id="benefits">
          <CTASection
            title="Measurable results for financial institutions"
            description="See the quantifiable impact of AI automation on financial operations and customer satisfaction"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        {/* Industry Statistics */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Financial Services Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming financial institutions worldwide with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $2.5B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Fraud Prevented
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  75%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Faster Loan Processing
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.9%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Compliance Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Financial Institutions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="customers">
          <Testimonials
            title="See how financial institutions transform with Augment"
            description="Real results from banks, credit unions, and fintech companies leveraging AI automation"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Regulatory Compliance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Built for Financial Services Compliance
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions are designed with financial regulations and compliance requirements at their core
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">SOX</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Sarbanes-Oxley
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Complete audit trails and financial reporting compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">PCI</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  PCI DSS
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Secure payment processing and data protection standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">AML</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Anti-Money Laundering
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Automated AML monitoring and suspicious activity reporting
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">KYC</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Know Your Customer
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Automated customer verification and risk assessment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your financial services?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our financial services experts to discover how AI automation can revolutionize your operations, enhance customer experiences, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/financial-services/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Financial Services Demo
              </a>
              <a
                href="/resources/financial-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
