import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Customer Success Stories | Augment Industries',
  description: 'Discover how leading organizations across industries achieve remarkable results with Augment AI solutions. Real case studies, measurable outcomes, and transformation stories.',
  keywords: 'customer success stories, AI case studies, industry transformations, customer testimonials, AI ROI, business results, implementation success',
};

export default function CustomerSuccessPage() {
  const heroButtons = [
    {
      text: 'View All Case Studies',
      href: '#case-studies',
      variant: 'primary' as const
    },
    {
      text: 'Share Your Story',
      href: '/industries/customer-success/submit/',
      variant: 'secondary' as const
    }
  ];

  const featuredCaseStudies = [
    {
      id: 'global-bank-transformation',
      title: 'Global Bank Achieves 75% Faster Loan Processing',
      description: 'See how a leading financial institution transformed their lending operations with AI-powered automation, reducing processing time from weeks to days.',
      ctaText: 'Read full case study',
      ctaLink: '/customers/global-bank-case-study/',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'hospital-network-efficiency',
      title: 'Hospital Network Improves Patient Outcomes by 35%',
      description: 'Discover how a major healthcare system enhanced patient care and operational efficiency through intelligent automation and predictive analytics.',
      ctaText: 'Explore healthcare success',
      ctaLink: '/customers/hospital-network-case-study/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing-zero-downtime',
      title: 'Manufacturer Achieves 99.9% Uptime with Predictive AI',
      description: 'Learn how predictive maintenance and AI-driven quality control helped a manufacturing company achieve near-zero unplanned downtime.',
      ctaText: 'View manufacturing story',
      ctaLink: '/customers/manufacturing-uptime-case-study/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail-personalization-boost',
      title: 'Retailer Increases Sales by 42% with AI Personalization',
      description: 'Explore how personalized recommendations and dynamic pricing transformed customer experience and drove significant revenue growth.',
      ctaText: 'Read retail transformation',
      ctaLink: '/customers/retail-personalization-case-study/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'government-citizen-services',
      title: 'City Government Reduces Processing Time by 70%',
      description: 'See how intelligent automation transformed citizen services, improving satisfaction while reducing administrative burden.',
      ctaText: 'Discover gov transformation',
      ctaLink: '/customers/city-government-case-study/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'university-student-success',
      title: 'University Improves Student Retention by 28%',
      description: 'Learn how predictive analytics and personalized learning helped identify at-risk students and improve graduation rates.',
      ctaText: 'View education success',
      ctaLink: '/customers/university-retention-case-study/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const successMetrics = [
    {
      id: 'roi-metrics',
      title: 'Return on Investment',
      description: 'Average ROI of 340% within 18 months of implementation across all industries and use cases.',
      ctaText: 'Calculate your ROI',
      ctaLink: '/resources/roi-calculator/'
    },
    {
      id: 'efficiency-gains',
      title: 'Operational Efficiency',
      description: 'Average 65% improvement in operational efficiency through intelligent automation and process optimization.',
      ctaText: 'Explore efficiency gains',
      ctaLink: '/resources/efficiency-study/'
    },
    {
      id: 'time-savings',
      title: 'Time to Value',
      description: 'Customers typically see measurable results within 90 days of implementation with full ROI in 12-18 months.',
      ctaText: 'Learn about implementation',
      ctaLink: '/resources/implementation-guide/'
    },
    {
      id: 'customer-satisfaction',
      title: 'Customer Satisfaction',
      description: '96% customer satisfaction rate with 89% of customers expanding their AI implementations within 2 years.',
      ctaText: 'Read satisfaction survey',
      ctaLink: '/resources/customer-satisfaction-report/'
    },
    {
      id: 'cost-reduction',
      title: 'Cost Reduction',
      description: 'Average 45% reduction in operational costs through automation, optimization, and intelligent resource allocation.',
      ctaText: 'See cost savings',
      ctaLink: '/resources/cost-reduction-analysis/'
    },
    {
      id: 'quality-improvement',
      title: 'Quality Enhancement',
      description: 'Average 50% improvement in quality metrics across manufacturing, healthcare, and service delivery sectors.',
      ctaText: 'Explore quality metrics',
      ctaLink: '/resources/quality-improvement-study/'
    }
  ];

  const industrySuccessActions = [
    {
      title: 'Financial Services Success Stories',
      description: 'Discover how banks, insurance companies, and fintech firms transform operations with AI automation.',
      href: '/customers/financial-services/',
      buttonText: 'View financial cases',
      icon: '🏦'
    },
    {
      title: 'Healthcare Transformation Stories',
      description: 'See how hospitals, clinics, and healthcare systems improve patient outcomes with intelligent automation.',
      href: '/customers/healthcare/',
      buttonText: 'Explore healthcare cases',
      icon: '🏥'
    },
    {
      title: 'Manufacturing Excellence Cases',
      description: 'Learn how manufacturers achieve operational excellence with predictive maintenance and quality control AI.',
      href: '/customers/manufacturing/',
      buttonText: 'Read manufacturing stories',
      icon: '🏭'
    },
    {
      title: 'Retail Innovation Stories',
      description: 'Explore how retailers drive growth with personalization, inventory optimization, and customer intelligence.',
      href: '/customers/retail/',
      buttonText: 'View retail transformations',
      icon: '🛍️'
    }
  ];

  const customerTestimonials = [
    {
      id: 'ceo-testimonial',
      quote: 'Augment\'s AI solutions have fundamentally transformed our business. We\'ve not only achieved significant cost savings but have also unlocked new revenue opportunities we never thought possible.',
      author: 'Sarah Chen',
      title: 'CEO',
      company: 'Global Financial Services Corp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'cto-testimonial',
      quote: 'The implementation was seamless, and the results exceeded our expectations. Our operational efficiency has improved by 70%, and we\'re now able to focus on strategic initiatives rather than routine tasks.',
      author: 'Michael Rodriguez',
      title: 'CTO',
      company: 'TechManufacturing Inc',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'director-testimonial',
      quote: 'What impressed us most was how quickly we saw results. Within 60 days, we had measurable improvements in customer satisfaction and operational metrics. The ROI has been exceptional.',
      author: 'Jennifer Park',
      title: 'Director of Operations',
      company: 'Regional Healthcare Network',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Customer Success Stories | Augment Industries</h1>

        <SectionHero
          title="Customer Success Stories"
          subtitle="Real results from industry leaders"
          description="Discover how organizations across industries achieve remarkable transformations with Augment AI solutions. Explore detailed case studies, measurable outcomes, and learn from real-world implementations that drive business value."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Business professionals celebrating successful AI implementation and transformation results"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Cases
              </a>
              <a href="#metrics" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Success Metrics
              </a>
              <a href="#industries" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                By Industry
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Testimonials
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Share Your Story
              </a>
            </div>
          </div>
        </nav>

        <section id="case-studies">
          <FeaturedCards
            title="Featured transformation stories"
            description="Explore detailed case studies showcasing measurable results and business impact across industries"
            cards={featuredCaseStudies}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Customer Success by the Numbers
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Measurable results and business impact across thousands of implementations
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  340%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  65%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Efficiency Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  90
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Days to First Results
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  96%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics">
          <InfoColumns
            title="Success metrics that matter"
            description="Comprehensive analysis of customer outcomes and business impact across key performance indicators"
            columns={successMetrics}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="industries">
          <CTASection
            title="Success stories by industry"
            description="Explore transformation stories and case studies specific to your industry and business challenges"
            actions={industrySuccessActions}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="testimonials">
          <Testimonials
            title="What our customers say"
            description="Hear directly from business leaders about their transformation journey and results with Augment AI"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Implementation Success Framework
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our proven methodology ensures successful AI implementation and measurable business outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Strategic Assessment
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Comprehensive analysis of business needs and AI opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Rapid Implementation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Agile deployment with quick wins and measurable results
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Continuous Optimization
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Ongoing monitoring and optimization for sustained value
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Scale & Expand
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Strategic expansion to maximize enterprise-wide impact
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to become our next success story?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join thousands of organizations that have transformed their operations with Augment AI. Connect with our experts to explore how we can help you achieve similar results in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Your Demo
              </a>
              <a
                href="/industries/customer-success/submit/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Share Your Success Story
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
