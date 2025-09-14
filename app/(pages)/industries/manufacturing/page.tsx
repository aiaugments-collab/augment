import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Manufacturing AI Solutions | Augment',
  description: 'Transform manufacturing operations with AI agents and predictive analytics. Optimize production, implement predictive maintenance, enhance quality control, and streamline supply chains.',
  keywords: 'manufacturing AI, predictive maintenance, quality control automation, supply chain optimization, production AI, industrial automation, smart manufacturing',
};

export default function ManufacturingPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/manufacturing/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const manufacturingSolutions = [
    {
      id: 'predictive-maintenance',
      title: 'Predictive maintenance and equipment optimization',
      description: 'Prevent costly downtime with AI-powered predictive maintenance, equipment health monitoring, and automated maintenance scheduling.',
      ctaText: 'Explore predictive maintenance',
      ctaLink: '/solutions/predictive-maintenance/',
      image: 'https://images.unsplash.com/photo-1565514158740-8f4ea9e77c29?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'quality-control',
      title: 'AI-powered quality control and inspection',
      description: 'Ensure product quality with computer vision-based inspection, automated defect detection, and real-time quality analytics.',
      ctaText: 'Discover quality AI',
      ctaLink: '/solutions/quality-control-ai/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'production-optimization',
      title: 'Production planning and optimization',
      description: 'Optimize manufacturing processes with AI-driven production scheduling, resource allocation, and workflow automation.',
      ctaText: 'Learn about production AI',
      ctaLink: '/solutions/production-optimization/',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'supply-chain',
      title: 'Intelligent supply chain management',
      description: 'Streamline supply chains with demand forecasting, inventory optimization, and automated supplier management systems.',
      ctaText: 'Explore supply chain AI',
      ctaLink: '/solutions/supply-chain-ai/',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'safety-monitoring',
      title: 'Workplace safety and compliance monitoring',
      description: 'Enhance worker safety with AI-powered monitoring, hazard detection, and automated compliance reporting systems.',
      ctaText: 'Discover safety AI',
      ctaLink: '/solutions/manufacturing-safety/',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'energy-optimization',
      title: 'Energy management and sustainability',
      description: 'Reduce energy costs and environmental impact with AI-driven energy optimization and sustainability analytics.',
      ctaText: 'Learn about energy AI',
      ctaLink: '/solutions/energy-optimization/',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const manufacturingSectors = [
    {
      id: 'automotive',
      title: 'Automotive Manufacturing',
      description: 'Optimize vehicle production with AI-powered assembly line management, quality control, and supply chain coordination.',
      ctaText: 'Explore automotive AI',
      ctaLink: '/industries/manufacturing/automotive/'
    },
    {
      id: 'electronics',
      title: 'Electronics & Semiconductors',
      description: 'Enhance precision manufacturing with AI-driven process control, yield optimization, and defect prediction.',
      ctaText: 'Discover electronics AI',
      ctaLink: '/industries/manufacturing/electronics/'
    },
    {
      id: 'aerospace',
      title: 'Aerospace & Defense',
      description: 'Ensure precision and compliance in aerospace manufacturing with AI-powered quality assurance and traceability.',
      ctaText: 'Learn about aerospace AI',
      ctaLink: '/industries/manufacturing/aerospace/'
    },
    {
      id: 'pharmaceuticals',
      title: 'Pharmaceutical Manufacturing',
      description: 'Maintain strict quality standards with AI-driven batch monitoring, compliance tracking, and process validation.',
      ctaText: 'Explore pharma manufacturing',
      ctaLink: '/industries/manufacturing/pharmaceuticals/'
    },
    {
      id: 'food-beverage',
      title: 'Food & Beverage',
      description: 'Ensure food safety and quality with AI-powered monitoring, traceability, and production optimization.',
      ctaText: 'Discover food manufacturing AI',
      ctaLink: '/industries/manufacturing/food-beverage/'
    },
    {
      id: 'chemicals',
      title: 'Chemical Manufacturing',
      description: 'Optimize chemical processes with AI-driven reaction monitoring, safety management, and yield optimization.',
      ctaText: 'Learn about chemical AI',
      ctaLink: '/industries/manufacturing/chemicals/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Reduce Downtime by 80%',
      description: 'Prevent equipment failures with predictive maintenance and real-time monitoring of manufacturing assets.',
      href: '/resources/manufacturing-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: ''
    },
    {
      title: 'Improve Quality by 95%',
      description: 'Achieve near-perfect quality with AI-powered inspection, defect detection, and process optimization.',
      href: '/solutions/quality-control-ai/',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Increase Efficiency by 45%',
      description: 'Optimize production workflows, resource allocation, and scheduling with intelligent automation.',
      href: '/solutions/production-optimization/',
      buttonText: 'Explore efficiency',
      icon: ''
    },
    {
      title: 'Lower Energy Costs by 30%',
      description: 'Reduce energy consumption and environmental impact through AI-driven optimization and monitoring.',
      href: '/solutions/energy-optimization/',
      buttonText: 'See energy savings',
      icon: ''
    }
  ];

  const customerTestimonials = [
    {
      id: 'auto-manufacturer',
      quote: 'Augment\'s predictive maintenance system has eliminated unplanned downtime in our assembly line. We\'ve saved over $2M in the first year alone.',
      author: 'David Thompson',
      title: 'Plant Operations Manager',
      company: 'Global Automotive Corp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'electronics-company',
      quote: 'The AI-powered quality control system has improved our defect detection rate by 99%. Product quality has never been better.',
      author: 'Lisa Wang',
      title: 'Quality Assurance Director',
      company: 'TechComponents Inc',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'chemical-plant',
      quote: 'Energy optimization through Augment AI has reduced our utility costs by 35% while maintaining production targets. Outstanding results.',
      author: 'Michael Rodriguez',
      title: 'Operations Director',
      company: 'Chemical Solutions Ltd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Manufacturing AI Solutions | Augment</h1>

        <SectionHero
          title="Manufacturing"
          subtitle="Optimize production with intelligent automation"
          description="Transform manufacturing operations with AI-powered predictive maintenance, quality control, production optimization, and supply chain management. Achieve operational excellence with intelligent automation designed for modern manufacturing."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1565514158740-8f4ea9e77c29?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern manufacturing facility with AI-powered automation and robotics"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Manufacturing Sectors
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
            title="Achieve operational excellence with manufacturing AI"
            description="Comprehensive AI solutions designed to optimize every aspect of manufacturing operations"
            cards={manufacturingSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by manufacturing sector"
            description="Industry-specific AI solutions tailored for different manufacturing verticals"
            columns={manufacturingSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable results for manufacturing operations"
            description="See the quantifiable impact of AI automation on production efficiency and quality"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Manufacturing Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming manufacturing operations worldwide with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $5B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Cost Savings Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  80%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Reduction in Downtime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Quality Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Manufacturing Plants
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how manufacturers transform with Augment"
            description="Real results from manufacturing companies leveraging AI to optimize operations"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Industry 4.0 & Smart Manufacturing
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions are designed for the future of manufacturing with Industry 4.0 principles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  IoT Integration
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Connect and monitor all manufacturing assets in real-time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Digital Twin
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Create virtual replicas of manufacturing processes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Adaptive Systems
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Self-optimizing manufacturing processes that adapt to changes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Supply Chain Integration
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  End-to-end visibility and optimization across the supply chain
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to optimize your manufacturing operations?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our manufacturing AI experts to discover how intelligent automation can reduce downtime, improve quality, and optimize your production processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/manufacturing/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Manufacturing Demo
              </a>
              <a
                href="/resources/manufacturing-roi-calculator/"
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
