import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Investor Relations | Financial Information',
  description: 'Access financial reports, SEC filings, investor news, events, and presentations for Augment Corporation.',
  keywords: 'investor relations, financial reports, SEC filings, earnings, stock information, investor news',
};

export default function InvestorsPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Latest Earnings',
      href: '/investors/financials/earnings/',
      variant: 'primary' as const
    },
    {
      text: 'SEC Filings',
      href: '/investors/sec-filings/',
      variant: 'secondary' as const
    }
  ];

  // Financial Highlights Data
  const financialHighlights = [
    {
      id: 'revenue-growth',
      title: 'Revenue Growth',
      description: 'Consistent year-over-year revenue growth driven by AI automation adoption and enterprise digital transformation.',
      ctaText: 'View financials',
      ctaLink: '/investors/financials/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'market-expansion',
      title: 'Market Expansion',
      description: 'Strategic expansion into new markets and verticals, with strong growth in healthcare, finance, and manufacturing.',
      ctaText: 'Read more',
      ctaLink: '/investors/market-expansion/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'innovation-investment',
      title: 'Innovation Investment',
      description: 'Significant R&D investment in AI, machine learning, and automation technologies to maintain market leadership.',
      ctaText: 'Learn more',
      ctaLink: '/investors/innovation/',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Recent News Data
  const recentNews = [
    {
      id: 'q4-earnings',
      title: 'Augment Reports Strong Q4 2024 Results',
      description: 'Record revenue of $2.1B, up 28% year-over-year, driven by AI automation platform adoption.',
      ctaText: 'Read release',
      ctaLink: '/investors/news/q4-2024-earnings/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-partnership',
      title: 'Strategic AI Partnership Announced',
      description: 'New partnership with leading cloud providers to accelerate AI automation deployment globally.',
      ctaText: 'Read more',
      ctaLink: '/investors/news/ai-partnership/',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'market-leadership',
      title: 'Recognized as AI Automation Leader',
      description: 'Named leader in Gartner Magic Quadrant for Intelligent Process Automation platforms.',
      ctaText: 'View report',
      ctaLink: '/investors/news/gartner-leader/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Investor Resources Data
  const investorResources = [
    {
      id: 'financial-reports',
      title: 'Financial Reports',
      description: 'Access quarterly and annual financial reports, earnings statements, and financial presentations.',
      ctaText: 'View reports',
      ctaLink: '/investors/financials/',
      icon: ''
    },
    {
      id: 'sec-filings',
      title: 'SEC Filings',
      description: 'Complete SEC filings including 10-K, 10-Q, 8-K, and proxy statements.',
      ctaText: 'Browse filings',
      ctaLink: '/investors/sec-filings/',
      icon: ''
    },
    {
      id: 'events-presentations',
      title: 'Events & Presentations',
      description: 'Investor events, earnings calls, conference presentations, and webcasts.',
      ctaText: 'View events',
      ctaLink: '/investors/events/',
      icon: ''
    },
    {
      id: 'stock-information',
      title: 'Stock Information',
      description: 'Real-time stock quotes, historical data, analyst coverage, and dividend information.',
      ctaText: 'View stock data',
      ctaLink: '/investors/stock/',
      icon: ''
    }
  ];

  // Key Metrics Data
  const keyMetrics = [
    {
      id: 'revenue',
      title: '$2.1B',
      description: 'Annual Revenue (2024)',
      ctaText: 'View details',
      ctaLink: '/investors/financials/revenue/'
    },
    {
      id: 'growth',
      title: '28%',
      description: 'Year-over-Year Growth',
      ctaText: 'View trends',
      ctaLink: '/investors/financials/growth/'
    },
    {
      id: 'customers',
      title: '15K+',
      description: 'Enterprise Customers',
      ctaText: 'Learn more',
      ctaLink: '/investors/market-data/'
    },
    {
      id: 'employees',
      title: '8,500+',
      description: 'Global Employees',
      ctaText: 'View careers',
      ctaLink: '/careers/'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Email Alerts',
      description: 'Subscribe to receive investor email alerts for earnings, news, and SEC filings.',
      href: '/investors/email-alerts/',
      buttonText: 'Subscribe now',
      icon: ''
    },
    {
      title: 'Contact IR',
      description: 'Get in touch with our Investor Relations team for questions and information.',
      href: '/investors/contact/',
      buttonText: 'Contact us',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Investor Relations | Financial Information</h1>

        {/* Hero Section */}
        <SectionHero
          title="Investor Relations"
          subtitle="Building the future of intelligent automation"
          description="Access comprehensive financial information, reports, and insights about Augment's performance and strategic direction in the AI automation market."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Financial data and analytics dashboard"
        />

        {/* Key Metrics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Key Financial Metrics
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Strong financial performance driven by AI automation market leadership
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((metric) => (
                <div key={metric.id} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {metric.title}
                  </div>
                  <div className="text-base text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {metric.description}
                  </div>
                  <a
                    href={metric.ctaLink}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {metric.ctaText} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Highlights */}
        <FeaturedCards
          title="Financial Highlights"
          description="Key drivers of our financial performance and growth strategy"
          cards={financialHighlights}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Recent Investor News */}
        <FeaturedCards
          title="Recent Investor News"
          description="Latest announcements and developments"
          cards={recentNews}
          columns={3}
          backgroundColor="bg-gray-50"
        />

        {/* Investor Resources */}
        <CTASection
          title="Investor Resources"
          description="Access comprehensive financial information and investor materials"
          actions={investorResources.map(resource => ({
            ...resource,
            href: resource.ctaLink
          }))}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Financial Performance Highlight */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Operational Excellence
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-[#C74634]" style={{ fontFamily: 'var(--oracleserif)' }}>
                      &lt; 10
                    </div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                      workdays to close books and report earnings
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-[#C74634]" style={{ fontFamily: 'var(--oracleserif)' }}>
                      85%
                    </div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                      of processes automated using our own platform
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-[#C74634]" style={{ fontFamily: 'var(--oracleserif)' }}>
                      95%
                    </div>
                    <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                      customer satisfaction rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#C74634] pl-4">
                    <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                      March 15, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Q1 2025 Earnings Call
                    </div>
                  </div>
                  <div className="border-l-4 border-[#C74634] pl-4">
                    <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                      April 10, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Annual Shareholder Meeting
                    </div>
                  </div>
                  <div className="border-l-4 border-[#C74634] pl-4">
                    <div className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                      May 20, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Investor Day 2025
                    </div>
                  </div>
                </div>
                <a
                  href="/events"
                  className="inline-block mt-6 text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View all events →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Stay Connected"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Information */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-8" style={{ fontFamily: 'var(--oracleserif)' }}>
              Contact Investor Relations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Phone
                </h3>
                <a
                  href="tel:+15125017078"
                  className="text-red-100 hover:text-white transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  +1.512.501.7078
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Email
                </h3>
                <a
                  href="mailto:investor_relations@augment.com"
                  className="text-red-100 hover:text-white transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  investor_relations@augment.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
