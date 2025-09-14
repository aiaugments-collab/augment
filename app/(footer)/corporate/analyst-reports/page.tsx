import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Analyst Reports | Augment Corporate',
  description: 'Industry analyst reports and insights recognizing Augment as a leader in AI automation and intelligent process automation.',
  keywords: 'analyst reports, Gartner, Forrester, IDC, market research, AI automation leader, industry recognition',
};

export default function AnalystReportsPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Download Reports',
      href: '/corporate/analyst-reports/downloads/',
      variant: 'primary' as const
    },
    {
      text: 'Request Analysis',
      href: '/corporate/analyst-reports/request/',
      variant: 'secondary' as const
    }
  ];

  // Featured Reports Data
  const featuredReports = [
    {
      id: 'gartner-magic-quadrant',
      title: 'Gartner Magic Quadrant for Intelligent Process Automation',
      description: 'Augment positioned as a Leader in Gartner\'s Magic Quadrant for Intelligent Process Automation platforms for the third consecutive year.',
      ctaText: 'Download report',
      ctaLink: '/corporate/analyst-reports/gartner-magic-quadrant/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'forrester-wave',
      title: 'The Forrester Wave: AI-Powered Automation Platforms',
      description: 'Augment named a Strong Performer in The Forrester Wave for AI-Powered Automation Platforms, Q4 2024.',
      ctaText: 'Read analysis',
      ctaLink: '/corporate/analyst-reports/forrester-wave/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'idc-marketscape',
      title: 'IDC MarketScape: Worldwide AI Automation Software',
      description: 'IDC recognizes Augment as a Major Player in the IDC MarketScape for Worldwide AI Automation Software 2024.',
      ctaText: 'View report',
      ctaLink: '/corporate/analyst-reports/idc-marketscape/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'everest-group',
      title: 'Everest Group PEAK Matrix for RPA Products',
      description: 'Augment positioned as a Leader in Everest Group\'s PEAK Matrix Assessment for RPA Products 2024.',
      ctaText: 'Get report',
      ctaLink: '/corporate/analyst-reports/everest-group/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Recognition Categories Data
  const recognitionCategories = [
    {
      id: 'market-leadership',
      title: 'Market Leadership',
      description: 'Recognized as a leader in multiple analyst reports for AI automation and intelligent process automation.',
      ctaText: 'View leadership reports',
      ctaLink: '/corporate/analyst-reports/leadership/'
    },
    {
      id: 'innovation',
      title: 'Innovation Excellence',
      description: 'Acknowledged for breakthrough innovations in AI, machine learning, and automation technologies.',
      ctaText: 'Explore innovations',
      ctaLink: '/corporate/analyst-reports/innovation/'
    },
    {
      id: 'customer-satisfaction',
      title: 'Customer Satisfaction',
      description: 'High ratings for customer satisfaction, support quality, and successful implementation outcomes.',
      ctaText: 'Read testimonials',
      ctaLink: '/corporate/analyst-reports/customer-satisfaction/'
    },
    {
      id: 'vision-strategy',
      title: 'Vision & Strategy',
      description: 'Praised for strategic vision, product roadmap, and ability to execute on market opportunities.',
      ctaText: 'Learn about vision',
      ctaLink: '/corporate/analyst-reports/vision-strategy/'
    },
    {
      id: 'technical-capabilities',
      title: 'Technical Capabilities',
      description: 'Superior technical capabilities in AI, automation, integration, and platform scalability.',
      ctaText: 'View capabilities',
      ctaLink: '/corporate/analyst-reports/technical-capabilities/'
    },
    {
      id: 'market-presence',
      title: 'Market Presence',
      description: 'Strong global market presence with significant customer base and revenue growth.',
      ctaText: 'See market data',
      ctaLink: '/corporate/analyst-reports/market-presence/'
    }
  ];

  // Recent Recognition Data
  const recentRecognition = [
    {
      id: 'gartner-2024',
      title: 'Gartner Peer Insights Customers\' Choice',
      description: 'Augment named a 2024 Gartner Peer Insights Customers\' Choice for Intelligent Process Automation with 4.6/5 rating.',
      ctaText: 'Read reviews',
      ctaLink: '/corporate/analyst-reports/gartner-peer-insights/',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'forrester-total-economic-impact',
      title: 'Forrester Total Economic Impact Study',
      description: 'Independent study shows 312% ROI and $2.4M in benefits over three years with Augment\'s platform.',
      ctaText: 'Download study',
      ctaLink: '/corporate/analyst-reports/forrester-tei/',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'constellation-research',
      title: 'Constellation Research ShortList',
      description: 'Augment included in Constellation Research ShortList for AI-Powered Business Process Automation.',
      ctaText: 'View shortlist',
      ctaLink: '/corporate/analyst-reports/constellation-shortlist/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Report Access Options
  const reportAccess = [
    {
      title: 'Download Full Reports',
      description: 'Access complete analyst reports with detailed analysis and recommendations.',
      href: '/corporate/analyst-reports/downloads/',
      buttonText: 'Browse downloads',
      icon: ''
    },
    {
      title: 'Request Custom Analysis',
      description: 'Get customized analyst insights tailored to your specific business needs.',
      href: '/corporate/analyst-reports/custom-analysis/',
      buttonText: 'Request analysis',
      icon: ''
    },
    {
      title: 'Analyst Briefings',
      description: 'Schedule briefings with industry analysts to discuss market trends and insights.',
      href: '/corporate/analyst-reports/briefings/',
      buttonText: 'Schedule briefing',
      icon: ''
    },
    {
      title: 'Market Research',
      description: 'Access comprehensive market research and competitive analysis reports.',
      href: '/corporate/analyst-reports/market-research/',
      buttonText: 'View research',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Analyst Reports | Augment Corporate</h1>

        {/* Hero Section */}
        <SectionHero
          title="Analyst Reports"
          subtitle="Industry recognition and market leadership"
          description="Discover why leading industry analysts consistently recognize Augment as a leader in AI automation and intelligent process automation. Access comprehensive reports and insights from top research firms."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Industry analyst reports and market research"
        />

        {/* Market Leadership Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Market Leadership Recognition
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Consistent recognition from leading industry analysts worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  15+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Analyst Reports
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Leader Positions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  4.6/5
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Customer Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  312%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  ROI (Forrester TEI)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Reports */}
        <FeaturedCards
          title="Featured Analyst Reports"
          description="Latest recognition from leading industry research firms"
          cards={featuredReports}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Recognition Categories */}
        <InfoColumns
          title="Areas of Recognition"
          description="Why analysts consistently recognize Augment as a market leader"
          columns={recognitionCategories}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Recent Recognition */}
        <FeaturedCards
          title="Recent Recognition"
          description="Latest analyst recognition and awards"
          cards={recentRecognition}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Analyst Quotes Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                What Analysts Say
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Industry expert perspectives on Augment's market position and capabilities
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <blockquote className="text-lg text-white italic mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Augment demonstrates strong execution capabilities and continues to innovate in the AI automation space with a comprehensive platform that addresses enterprise needs."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-white text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Gartner Research
                    </div>
                    <div className="text-xs text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Magic Quadrant for IPA, 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <blockquote className="text-lg text-white italic mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Augment's AI-powered automation platform delivers significant business value with strong ROI and customer satisfaction metrics across diverse industries."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-white text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Forrester Research
                    </div>
                    <div className="text-xs text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                      The Forrester Wave, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Access Options */}
        <CTASection
          title="Access Analyst Reports"
          description="Get comprehensive insights and analysis from leading industry research firms"
          actions={reportAccess}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Need More Information?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Contact our analyst relations team for additional reports, custom analysis, or briefing opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/corporate/analyst-reports/contact/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Analyst Relations
              </a>
              <a
                href="mailto:analyst.relations@augment.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                analyst.relations@augment.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
