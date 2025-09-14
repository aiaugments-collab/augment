import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'AI Economics | ROI and Business Value of AI Automation',
  description: 'Discover the economic impact of AI automation. Learn about ROI, cost savings, and business value from intelligent process automation.',
  keywords: 'AI economics, AI ROI, automation cost savings, business value, AI investment, economic impact',
};

export default function AIEconomicsPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Calculate ROI',
      href: '/ai/economics/roi-calculator/',
      variant: 'primary' as const
    },
    {
      text: 'Download Report',
      href: '/ai/economics/economic-impact-report/',
      variant: 'secondary' as const
    }
  ];

  // Economic Benefits Data
  const economicBenefits = [
    {
      id: 'cost-reduction',
      title: 'Dramatic Cost Reduction',
      description: 'Organizations achieve 60-85% cost reduction in automated processes, with payback periods of 6-12 months.',
      ctaText: 'See cost analysis',
      ctaLink: '/ai/economics/cost-reduction/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'productivity-gains',
      title: 'Productivity Acceleration',
      description: 'AI automation delivers 3-10x productivity improvements by eliminating manual tasks and reducing errors.',
      ctaText: 'Explore productivity',
      ctaLink: '/ai/economics/productivity/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'revenue-growth',
      title: 'Revenue Growth',
      description: 'Companies using AI automation see 15-25% revenue growth through improved customer experience and faster time-to-market.',
      ctaText: 'Learn about growth',
      ctaLink: '/ai/economics/revenue-growth/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'competitive-advantage',
      title: 'Competitive Advantage',
      description: 'AI-first organizations outperform competitors by 20-30% in key business metrics and market responsiveness.',
      ctaText: 'Discover advantages',
      ctaLink: '/ai/economics/competitive-advantage/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // ROI Factors Data
  const roiFactors = [
    {
      id: 'labor-cost-savings',
      title: 'Labor Cost Savings',
      description: 'Reduce manual labor costs by 70-90% through intelligent automation of repetitive tasks.',
      ctaText: 'Calculate savings',
      ctaLink: '/ai/economics/labor-savings/'
    },
    {
      id: 'error-reduction',
      title: 'Error Reduction',
      description: 'Eliminate 95-99% of human errors, saving costs from rework, compliance issues, and customer dissatisfaction.',
      ctaText: 'See error impact',
      ctaLink: '/ai/economics/error-reduction/'
    },
    {
      id: 'speed-efficiency',
      title: 'Speed & Efficiency',
      description: 'Process transactions 10-100x faster than manual methods, improving customer satisfaction and throughput.',
      ctaText: 'Measure efficiency',
      ctaLink: '/ai/economics/efficiency/'
    },
    {
      id: 'scalability',
      title: 'Unlimited Scalability',
      description: 'Scale operations without proportional cost increases, handling peak loads without additional staffing.',
      ctaText: 'Explore scalability',
      ctaLink: '/ai/economics/scalability/'
    },
    {
      id: 'compliance-risk',
      title: 'Compliance & Risk',
      description: 'Reduce compliance costs by 50-80% and minimize regulatory risks through consistent, auditable processes.',
      ctaText: 'Learn about compliance',
      ctaLink: '/ai/economics/compliance/'
    },
    {
      id: 'innovation-time',
      title: 'Innovation Time',
      description: 'Free up 40-60% of employee time for strategic, creative work that drives innovation and growth.',
      ctaText: 'Unlock innovation',
      ctaLink: '/ai/economics/innovation/'
    }
  ];

  // Industry ROI Data
  const industryROI = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Banks and financial institutions achieve 400-600% ROI through automated loan processing, fraud detection, and compliance.',
      ctaText: 'Financial ROI study',
      ctaLink: '/ai/economics/financial-services/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Healthcare organizations see 300-500% ROI from automated patient intake, claims processing, and clinical workflows.',
      ctaText: 'Healthcare ROI study',
      ctaLink: '/ai/economics/healthcare/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Manufacturers achieve 250-400% ROI through predictive maintenance, quality control, and supply chain optimization.',
      ctaText: 'Manufacturing ROI study',
      ctaLink: '/ai/economics/manufacturing/',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Customer Success Stories
  const successStories = [
    {
      id: 'success-1',
      quote: 'Augment\'s AI automation delivered $2.4M in cost savings within 18 months, with a 312% ROI. The platform paid for itself in just 8 months.',
      author: 'Jennifer Martinez',
      title: 'CFO',
      company: 'Global Insurance Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'success-2',
      quote: 'We reduced processing time by 90% and cut operational costs by $1.8M annually. The economic impact exceeded all our expectations.',
      author: 'Robert Chen',
      title: 'VP of Operations',
      company: 'Healthcare Solutions Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // Economic Tools Data
  const economicTools = [
    {
      title: 'ROI Calculator',
      description: 'Calculate your potential return on investment with our interactive ROI calculator.',
      href: '/ai/economics/roi-calculator/',
      buttonText: 'Calculate ROI',
      icon: ''
    },
    {
      title: 'Cost-Benefit Analysis',
      description: 'Get a detailed cost-benefit analysis customized for your industry and use case.',
      href: '/ai/economics/cost-benefit-analysis/',
      buttonText: 'Get analysis',
      icon: ''
    },
    {
      title: 'Economic Impact Report',
      description: 'Download our comprehensive report on the economic impact of AI automation.',
      href: '/ai/economics/impact-report/',
      buttonText: 'Download report',
      icon: ''
    },
    {
      title: 'Business Case Builder',
      description: 'Build a compelling business case for AI automation with our guided tool.',
      href: '/ai/economics/business-case/',
      buttonText: 'Build case',
      icon: '️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">AI Economics | ROI and Business Value of AI Automation</h1>

        {/* Hero Section */}
        <SectionHero
          title="AI Economics"
          subtitle="The compelling business case for AI automation"
          description="Discover the transformative economic impact of AI automation. From dramatic cost reductions to accelerated growth, explore how intelligent automation delivers measurable business value and competitive advantage."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Economic charts and ROI analysis"
        />

        {/* Economic Impact Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Economic Impact by the Numbers
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Real economic benefits achieved by organizations using AI automation
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  312%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Cost Reduction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  8
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Months Payback
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10x
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Productivity Gain
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Benefits */}
        <FeaturedCards
          title="Economic Benefits of AI Automation"
          description="Quantifiable business value that transforms your bottom line"
          cards={economicBenefits}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* ROI Factors */}
        <InfoColumns
          title="Key ROI Factors"
          description="The primary drivers of return on investment in AI automation"
          columns={roiFactors}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Industry ROI Studies */}
        <FeaturedCards
          title="Industry ROI Studies"
          description="Real-world economic impact across different industries"
          cards={industryROI}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Economic Value Proposition */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  The AI Economics Advantage
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#C74634] pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Immediate Impact
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      See measurable results within weeks, not months, with rapid deployment and quick wins.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#C74634] pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Compound Returns
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Benefits compound over time as AI systems learn and optimize, delivering increasing value.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#C74634] pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Risk Mitigation
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Reduce operational risks and ensure consistent, compliant processes across your organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Economic Impact Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">30d</span>
                    </div>
                    <div>
                      <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Initial Savings
                      </div>
                      <div className="text-gray-400 text-sm">First automation wins</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">90d</span>
                    </div>
                    <div>
                      <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Measurable ROI
                      </div>
                      <div className="text-gray-400 text-sm">Significant cost reduction</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">12m</span>
                    </div>
                    <div>
                      <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Full Payback
                      </div>
                      <div className="text-gray-400 text-sm">Complete investment recovery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <Testimonials
          title="Economic Success Stories"
          testimonials={successStories}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Economic Tools */}
        <CTASection
          title="Economic Analysis Tools"
          description="Build your business case with our comprehensive economic analysis tools"
          actions={economicTools}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Call to Action */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Calculate Your AI ROI Today
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Discover the economic impact AI automation can have on your organization with our interactive ROI calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai/economics/roi-calculator/"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Your ROI
              </a>
              <a
                href="/ai/economics/consultation/"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Speak with Expert
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
