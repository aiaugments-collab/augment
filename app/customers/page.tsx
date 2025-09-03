import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export const metadata: Metadata = {
  title: 'Customers | Augment AI Success Stories',
  description: 'Discover how leading organizations worldwide are transforming their business with Augment AI solutions. Customer success stories, case studies, and testimonials.',
  keywords: 'AI customers, success stories, case studies, customer testimonials, AI transformation, business results',
};

export default function CustomersPage() {
  const heroButtons = [
    {
      text: 'View Case Studies',
      href: '/customers/case-studies/',
      variant: 'primary' as const
    },
    {
      text: 'Read Success Stories',
      href: '/customers/success-stories/',
      variant: 'secondary' as const
    }
  ];

  const featuredCustomers = [
    {
      id: 'global-healthcare',
      title: 'Global Healthcare Network',
      description: 'Leading healthcare provider reduced patient wait times by 40% and improved diagnostic accuracy by 25% using Augment Health AI.',
      ctaText: 'Read case study',
      ctaLink: '/customers/case-studies/global-healthcare/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fortune-500-bank',
      title: 'Fortune 500 Financial Institution',
      description: 'Major bank prevented $50M in fraud losses and improved customer satisfaction by 35% with Augment Finance AI.',
      ctaText: 'View success story',
      ctaLink: '/customers/success-stories/fortune-500-bank/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing-giant',
      title: 'Global Manufacturing Leader',
      description: 'Multinational manufacturer increased production efficiency by 30% and reduced downtime by 45% using Augment Flow.',
      ctaText: 'Explore case study',
      ctaLink: '/customers/case-studies/manufacturing-giant/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'tech-unicorn',
      title: 'Fast-Growing Tech Company',
      description: 'Unicorn startup scaled hiring 10x faster and improved candidate quality by 60% with Augment Resume AI.',
      ctaText: 'Read their story',
      ctaLink: '/customers/success-stories/tech-unicorn/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail-chain',
      title: 'International Retail Chain',
      description: 'Global retailer boosted online sales by 25% and improved customer experience with Augment Search AI.',
      ctaText: 'View results',
      ctaLink: '/customers/case-studies/retail-chain/',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'government-agency',
      title: 'Federal Government Agency',
      description: 'Government department improved citizen services by 50% and reduced processing time by 60% with Augment AI.',
      ctaText: 'Learn more',
      ctaLink: '/customers/case-studies/government-agency/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const customerSegments = [
    {
      id: 'enterprise',
      title: 'Enterprise Customers',
      description: 'Fortune 500 companies and large enterprises leveraging Augment AI for digital transformation and competitive advantage.',
      ctaText: 'Enterprise stories',
      ctaLink: '/customers/enterprise/'
    },
    {
      id: 'mid-market',
      title: 'Mid-Market Companies',
      description: 'Growing companies using Augment AI to scale operations, improve efficiency, and accelerate growth.',
      ctaText: 'Mid-market success',
      ctaLink: '/customers/mid-market/'
    },
    {
      id: 'startups',
      title: 'Startups & Scale-ups',
      description: 'Innovative startups building AI-first products and services with Augment AI platform and tools.',
      ctaText: 'Startup stories',
      ctaLink: '/customers/startups/'
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Government agencies and public organizations improving citizen services with AI-powered solutions.',
      ctaText: 'Public sector cases',
      ctaLink: '/customers/government/'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Organizations',
      description: 'Hospitals, clinics, and healthcare providers transforming patient care with intelligent automation.',
      ctaText: 'Healthcare success',
      ctaLink: '/customers/healthcare/'
    },
    {
      id: 'education',
      title: 'Educational Institutions',
      description: 'Universities, schools, and educational organizations enhancing learning experiences with AI.',
      ctaText: 'Education stories',
      ctaLink: '/customers/education/'
    }
  ];

  const customerPrograms = [
    {
      title: 'Customer Advisory Board',
      description: 'Join our exclusive advisory board to shape the future of Augment AI products and influence our roadmap.',
      href: '/customers/advisory/',
      buttonText: 'Join advisory board',
      icon: '🎯'
    },
    {
      title: 'Success Stories Program',
      description: 'Share your success story and inspire other organizations while gaining recognition for your achievements.',
      href: '/customers/success-stories/submit/',
      buttonText: 'Share your story',
      icon: '📖'
    },
    {
      title: 'Reference Program',
      description: 'Become a reference customer and help prospects understand the value of Augment AI solutions.',
      href: '/customers/reference-program/',
      buttonText: 'Become a reference',
      icon: '🤝'
    },
    {
      title: 'User Community',
      description: 'Connect with other customers, share best practices, and learn from successful implementations.',
      href: '/community/',
      buttonText: 'Join community',
      icon: '👥'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Customers | Augment AI Success Stories</h1>

        <SectionHero
          title="Customer Success Stories"
          subtitle="Transforming business with AI innovation"
          description="Discover how leading organizations worldwide are achieving remarkable results with Augment AI solutions. From Fortune 500 enterprises to innovative startups, see how our customers are transforming their industries and driving unprecedented growth."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse group of successful business leaders and customers celebrating AI transformation achievements"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#featured" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Customers
              </a>
              <a href="#segments" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Customer Segments
              </a>
              <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Customer Programs
              </a>
              <a href="#impact" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Business Impact
              </a>
            </div>
          </div>
        </nav>

        <section id="featured">
          <FeaturedCards
            title="Featured customer success stories"
            description="Learn how leading organizations are achieving transformational results with Augment AI"
            cards={featuredCustomers}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="impact" className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Customer Success Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Measurable results and transformational outcomes achieved by our customers worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Global Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $2.5B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Customer Value Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  45%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Efficiency Gain
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  98%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="segments">
          <InfoColumns
            title="Success across every industry and size"
            description="Discover how organizations of all sizes and industries are succeeding with Augment AI"
            columns={customerSegments}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                What Our Customers Say
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear directly from our customers about their experience and results with Augment AI
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Sarah Johnson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Sarah Johnson</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CTO, TechCorp Global</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Augment AI transformed our development process. We're shipping features 3x faster and our code quality has never been better. The ROI was evident within the first quarter."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="Michael Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Michael Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>VP Operations, MedHealth Systems</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The healthcare AI solutions have revolutionized our patient care. We've reduced diagnostic errors by 40% and improved patient satisfaction scores significantly."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces" 
                    alt="Jennifer Martinez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Jennifer Martinez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CFO, FinanceFirst Bank</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Augment Finance AI has been a game-changer for fraud detection. We've prevented millions in losses while improving the customer experience. Exceptional technology."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs">
          <CTASection
            title="Join our customer success programs"
            description="Engage with our community and help shape the future of AI innovation"
            actions={customerPrograms}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to join our success stories?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Start your AI transformation journey today and become the next customer success story. Our team is ready to help you achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Start Your Journey
              </a>
              <a
                href="/customers/case-studies/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Read More Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
