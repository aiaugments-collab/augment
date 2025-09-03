import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Retail AI Solutions | Augment',
  description: 'Transform retail operations with AI agents and intelligent automation. Optimize inventory, personalize customer experiences, enhance supply chains, and drive sales growth.',
  keywords: 'retail AI, inventory optimization, customer personalization, retail automation, supply chain AI, e-commerce AI, retail analytics',
};

export default function RetailPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/retail/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const retailSolutions = [
    {
      id: 'inventory-optimization',
      title: 'AI-powered inventory optimization and management',
      description: 'Optimize stock levels with demand forecasting, automated replenishment, and intelligent inventory allocation across channels.',
      ctaText: 'Explore inventory AI',
      ctaLink: '/solutions/inventory-optimization/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'customer-personalization',
      title: 'Personalized customer experiences and recommendations',
      description: 'Deliver tailored shopping experiences with AI-driven product recommendations, personalized marketing, and dynamic pricing.',
      ctaText: 'Discover personalization AI',
      ctaLink: '/solutions/retail-personalization/',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply chain optimization and logistics',
      description: 'Streamline supply chains with predictive analytics, route optimization, and automated vendor management systems.',
      ctaText: 'Learn about supply chain AI',
      ctaLink: '/solutions/retail-supply-chain/',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'customer-service',
      title: 'Intelligent customer service and support',
      description: 'Enhance customer support with AI chatbots, automated order processing, and intelligent issue resolution systems.',
      ctaText: 'Explore customer service AI',
      ctaLink: '/solutions/retail-customer-service/',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'pricing-optimization',
      title: 'Dynamic pricing and revenue optimization',
      description: 'Maximize revenue with AI-driven pricing strategies, competitor analysis, and demand-based price optimization.',
      ctaText: 'Discover pricing AI',
      ctaLink: '/solutions/dynamic-pricing/',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fraud-prevention',
      title: 'Fraud detection and prevention systems',
      description: 'Protect against fraud with real-time transaction monitoring, behavioral analysis, and automated risk assessment.',
      ctaText: 'Learn about fraud prevention',
      ctaLink: '/solutions/retail-fraud-prevention/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const retailSectors = [
    {
      id: 'e-commerce',
      title: 'E-commerce & Online Retail',
      description: 'Comprehensive AI solutions for online retailers including personalization engines, inventory management, and customer analytics.',
      ctaText: 'Explore e-commerce AI',
      ctaLink: '/industries/retail/e-commerce/'
    },
    {
      id: 'brick-mortar',
      title: 'Brick & Mortar Stores',
      description: 'In-store AI solutions including customer flow analysis, staff optimization, and omnichannel inventory management.',
      ctaText: 'Discover in-store AI',
      ctaLink: '/industries/retail/brick-mortar/'
    },
    {
      id: 'fashion-apparel',
      title: 'Fashion & Apparel',
      description: 'Specialized AI for fashion retailers including trend prediction, size recommendation, and seasonal demand forecasting.',
      ctaText: 'Learn about fashion AI',
      ctaLink: '/industries/retail/fashion/'
    },
    {
      id: 'grocery-food',
      title: 'Grocery & Food Retail',
      description: 'AI solutions for grocery chains including perishable inventory management, demand forecasting, and supply chain optimization.',
      ctaText: 'Explore grocery AI',
      ctaLink: '/industries/retail/grocery/'
    },
    {
      id: 'luxury-retail',
      title: 'Luxury & Premium Retail',
      description: 'High-end retail AI solutions focusing on personalized service, exclusive experiences, and premium customer analytics.',
      ctaText: 'Discover luxury retail AI',
      ctaLink: '/industries/retail/luxury/'
    },
    {
      id: 'marketplace',
      title: 'Marketplaces & Platforms',
      description: 'AI tools for marketplace operators including seller analytics, fraud detection, and recommendation systems.',
      ctaText: 'Learn about marketplace AI',
      ctaLink: '/industries/retail/marketplace/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Increase Sales by 35%',
      description: 'Boost revenue with personalized recommendations, dynamic pricing, and optimized customer experiences.',
      href: '/resources/retail-sales-study/',
      buttonText: 'View study',
      icon: '📈'
    },
    {
      title: 'Reduce Inventory Costs by 25%',
      description: 'Optimize stock levels and reduce waste with AI-powered demand forecasting and inventory management.',
      href: '/solutions/inventory-optimization/',
      buttonText: 'Learn more',
      icon: '📦'
    },
    {
      title: 'Improve Customer Satisfaction by 45%',
      description: 'Enhance customer experiences with personalized service, faster support, and tailored product recommendations.',
      href: '/solutions/retail-personalization/',
      buttonText: 'Explore personalization',
      icon: '😊'
    },
    {
      title: 'Lower Operational Costs by 30%',
      description: 'Reduce operational expenses through automated processes, optimized logistics, and intelligent resource allocation.',
      href: '/resources/retail-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: '💰'
    }
  ];

  const customerTestimonials = [
    {
      id: 'fashion-retailer',
      quote: 'Augment\'s personalization engine has transformed our customer experience. We\'ve seen a 42% increase in conversion rates and significantly higher customer lifetime value.',
      author: 'Emily Chen',
      title: 'Chief Digital Officer',
      company: 'Fashion Forward Retail',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'grocery-chain',
      quote: 'The inventory optimization system has reduced our food waste by 40% while ensuring we never run out of popular items. The ROI has been exceptional.',
      author: 'Robert Martinez',
      title: 'VP of Operations',
      company: 'Metro Grocery Chain',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'online-marketplace',
      quote: 'Fraud detection AI has saved us millions while improving the shopping experience for legitimate customers. The system learns and adapts incredibly well.',
      author: 'Sarah Kim',
      title: 'Head of Risk Management',
      company: 'Global Marketplace Inc',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Retail AI Solutions | Augment</h1>

        <SectionHero
          title="Retail"
          subtitle="Deliver personalized shopping experiences"
          description="Transform retail operations with AI-powered inventory optimization, customer personalization, supply chain management, and intelligent automation. Drive sales growth and enhance customer satisfaction with retail AI solutions."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern retail environment with AI-powered customer experience and inventory management"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Retail Sectors
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
            title="Transform retail operations with intelligent automation"
            description="Comprehensive AI solutions designed to optimize every aspect of retail operations and customer experience"
            cards={retailSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by retail sector"
            description="Specialized AI solutions tailored for different retail formats and customer segments"
            columns={retailSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable results for retail operations"
            description="See the quantifiable impact of AI automation on sales growth and operational efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Retail Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming retail operations worldwide with intelligent customer experiences and optimization
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $10B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  35%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Sales Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Inventory Cost Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  3000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Retail Locations
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how retailers transform with Augment"
            description="Real results from retail companies leveraging AI to drive growth and optimize operations"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Omnichannel Retail Excellence
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions seamlessly integrate across all retail channels for unified customer experiences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛒</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  E-commerce Integration
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Seamless online shopping experiences with AI recommendations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏪</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  In-Store Analytics
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Real-time customer insights and staff optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Mobile Commerce
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Optimized mobile shopping with personalized experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Fulfillment Optimization
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Intelligent logistics and delivery optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your retail operations?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our retail AI experts to discover how intelligent automation can drive sales growth, optimize inventory, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/retail/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Retail Demo
              </a>
              <a
                href="/resources/retail-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Retail ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
