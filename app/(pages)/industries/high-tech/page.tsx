import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'High Technology AI Solutions | Augment',
  description: 'Accelerate innovation in high-tech companies with AI agents and intelligent automation. Optimize R&D, enhance product development, streamline operations, and drive technological advancement.',
  keywords: 'high tech AI, technology innovation, R&D automation, product development AI, tech company solutions, software development AI, innovation acceleration',
};

export default function HighTechPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/high-tech/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const highTechSolutions = [
    {
      id: 'rd-acceleration',
      title: 'AI-powered R&D and innovation acceleration',
      description: 'Accelerate research and development with AI-driven hypothesis generation, experiment optimization, and automated literature analysis.',
      ctaText: 'Explore R&D AI',
      ctaLink: '/solutions/rd-acceleration/',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'product-development',
      title: 'Intelligent product development and design',
      description: 'Optimize product development cycles with AI-powered design automation, testing optimization, and predictive quality assurance.',
      ctaText: 'Discover product AI',
      ctaLink: '/solutions/product-development-ai/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'software-development',
      title: 'AI-enhanced software development lifecycle',
      description: 'Accelerate software development with intelligent code generation, automated testing, and predictive bug detection.',
      ctaText: 'Learn about dev AI',
      ctaLink: '/solutions/software-development-ai/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'supply-chain-tech',
      title: 'Technology supply chain optimization',
      description: 'Optimize complex tech supply chains with AI-driven demand forecasting, supplier management, and logistics coordination.',
      ctaText: 'Explore supply chain AI',
      ctaLink: '/solutions/tech-supply-chain/',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'customer-intelligence',
      title: 'Customer intelligence and market analysis',
      description: 'Understand markets and customers with AI-powered analytics, sentiment analysis, and predictive market intelligence.',
      ctaText: 'Discover customer AI',
      ctaLink: '/solutions/tech-customer-intelligence/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'operations-optimization',
      title: 'Technology operations and infrastructure',
      description: 'Optimize IT operations with AI-powered monitoring, predictive maintenance, and intelligent resource allocation.',
      ctaText: 'Learn about ops AI',
      ctaLink: '/solutions/tech-operations-ai/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const highTechSectors = [
    {
      id: 'software-companies',
      title: 'Software Companies',
      description: 'AI solutions for software development, DevOps automation, customer analytics, and product optimization for SaaS and enterprise software companies.',
      ctaText: 'Explore software AI',
      ctaLink: '/industries/high-tech/software/'
    },
    {
      id: 'hardware-manufacturers',
      title: 'Hardware Manufacturers',
      description: 'Intelligent manufacturing, quality control, supply chain optimization, and predictive maintenance for hardware and electronics companies.',
      ctaText: 'Discover hardware AI',
      ctaLink: '/industries/high-tech/hardware/'
    },
    {
      id: 'semiconductor',
      title: 'Semiconductor Industry',
      description: 'Specialized AI for chip design optimization, yield improvement, supply chain management, and advanced manufacturing processes.',
      ctaText: 'Learn about semiconductor AI',
      ctaLink: '/industries/high-tech/semiconductor/'
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Network optimization, predictive maintenance, customer experience enhancement, and intelligent infrastructure management for telecom companies.',
      ctaText: 'Explore telecom AI',
      ctaLink: '/industries/high-tech/telecommunications/'
    },
    {
      id: 'startups',
      title: 'Technology Startups',
      description: 'Scalable AI solutions for early-stage tech companies including product development acceleration, market analysis, and growth optimization.',
      ctaText: 'Discover startup AI',
      ctaLink: '/industries/high-tech/startups/'
    },
    {
      id: 'research-labs',
      title: 'Research & Development Labs',
      description: 'Advanced AI tools for corporate R&D, innovation labs, and technology research institutions to accelerate breakthrough discoveries.',
      ctaText: 'Learn about research AI',
      ctaLink: '/industries/high-tech/research-labs/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Accelerate Innovation by 60%',
      description: 'Speed up R&D cycles, product development, and time-to-market with AI-powered innovation acceleration.',
      href: '/resources/innovation-acceleration-study/',
      buttonText: 'View study',
      icon: ''
    },
    {
      title: 'Reduce Development Costs by 40%',
      description: 'Lower development expenses through automated testing, intelligent code generation, and optimized resource allocation.',
      href: '/solutions/software-development-ai/',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Improve Product Quality by 50%',
      description: 'Enhance product quality with AI-powered testing, predictive quality assurance, and automated defect detection.',
      href: '/solutions/product-development-ai/',
      buttonText: 'Explore quality AI',
      icon: ''
    },
    {
      title: 'Increase Market Responsiveness by 70%',
      description: 'Respond faster to market changes with AI-driven market intelligence, customer insights, and trend prediction.',
      href: '/resources/high-tech-roi-calculator/',
      buttonText: 'Calculate impact',
      icon: ''
    }
  ];

  const customerTestimonials = [
    {
      id: 'software-company',
      quote: 'Augment\'s AI has transformed our development process. We\'ve reduced bug rates by 65% and accelerated our release cycles significantly while maintaining high quality standards.',
      author: 'Alex Chen',
      title: 'VP of Engineering',
      company: 'CloudTech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'hardware-manufacturer',
      quote: 'The predictive quality control system has revolutionized our manufacturing process. We\'ve improved yield rates by 30% and reduced waste significantly.',
      author: 'Sarah Kim',
      title: 'Director of Operations',
      company: 'Advanced Electronics Corp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'tech-startup',
      quote: 'As a startup, Augment\'s AI tools have been game-changing. We\'ve accelerated our product development by 8 months and gained valuable market insights that shaped our strategy.',
      author: 'Michael Rodriguez',
      title: 'CTO & Co-founder',
      company: 'InnovateTech Startup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">High Technology AI Solutions | Augment</h1>

        <SectionHero
          title="High Technology"
          subtitle="Accelerate innovation with AI"
          description="Transform high-tech operations with AI-powered R&D acceleration, intelligent product development, software optimization, and innovation management. Drive technological advancement and competitive advantage with intelligent automation."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="High-tech research and development facility with AI-powered innovation and advanced technology"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Tech Sectors
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
            title="Drive technological innovation with intelligent automation"
            description="Comprehensive AI solutions designed to accelerate innovation and optimize high-tech operations"
            cards={highTechSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by technology sector"
            description="Specialized AI solutions tailored for different areas of the high-technology industry"
            columns={highTechSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable results for high-tech companies"
            description="See the quantifiable impact of AI automation on innovation speed and operational efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                High Technology Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Accelerating innovation and technological advancement across the high-tech industry
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $25B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  R&D Value Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  60%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Innovation Acceleration
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Quality Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Tech Companies
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how high-tech companies transform with Augment"
            description="Real results from technology companies leveraging AI to accelerate innovation and optimize operations"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Innovation Acceleration Framework
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions are designed to accelerate every stage of the technology innovation lifecycle
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Research & Discovery
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  AI-powered literature analysis and hypothesis generation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Development & Design
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Intelligent design automation and optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Testing & Validation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Automated testing and predictive quality assurance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Launch & Scale
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Market intelligence and scaling optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to accelerate your technology innovation?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our high-tech AI experts to discover how intelligent automation can accelerate R&D, optimize product development, and drive technological advancement in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/high-tech/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule High-Tech Demo
              </a>
              <a
                href="/resources/high-tech-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Innovation ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
