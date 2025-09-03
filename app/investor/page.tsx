import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Relations | Augment AI',
  description: 'Investor information, financial reports, and corporate governance for Augment AI shareholders and potential investors.',
  keywords: 'investor relations, financial reports, earnings, corporate governance, shareholder information, SEC filings',
};

export default function InvestorRelationsPage() {
  const financialHighlights = [
    { metric: 'Revenue Growth', value: '300%', period: 'YoY 2023' },
    { metric: 'ARR', value: '$150M', period: 'Q4 2023' },
    { metric: 'Gross Margin', value: '85%', period: 'Q4 2023' },
    { metric: 'Cash Position', value: '$500M', period: 'Dec 2023' }
  ];

  const recentNews = [
    {
      date: 'March 15, 2024',
      title: 'Augment AI Announces Q4 2023 Financial Results',
      summary: 'Record revenue of $45M in Q4 2023, up 75% quarter-over-quarter, driven by strong enterprise adoption.',
      type: 'Earnings'
    },
    {
      date: 'February 28, 2024',
      title: 'Augment AI Raises $200M Series C Funding Round',
      summary: 'Led by Andreessen Horowitz with participation from existing investors, valuation reaches $2.5B.',
      type: 'Funding'
    },
    {
      date: 'January 20, 2024',
      title: 'Augment AI Expands to European Market',
      summary: 'Opens new offices in London and Amsterdam to serve growing European customer base.',
      type: 'Business'
    },
    {
      date: 'December 15, 2023',
      title: 'Augment AI Achieves SOC 2 Type II Certification',
      summary: 'Demonstrates commitment to enterprise security and compliance standards.',
      type: 'Compliance'
    }
  ];

  const upcomingEvents = [
    {
      date: 'April 15, 2024',
      event: 'Q1 2024 Earnings Call',
      time: '2:00 PM PT',
      type: 'Earnings Call'
    },
    {
      date: 'May 20, 2024',
      event: 'AI Innovation Summit Presentation',
      time: '10:00 AM ET',
      type: 'Conference'
    },
    {
      date: 'June 10, 2024',
      event: 'Annual Shareholder Meeting',
      time: '9:00 AM PT',
      type: 'Meeting'
    }
  ];

  const keyMetrics = [
    {
      title: 'Customer Growth',
      current: '50,000+',
      growth: '+250% YoY',
      description: 'Active enterprise customers'
    },
    {
      title: 'Developer Adoption',
      current: '500K+',
      growth: '+400% YoY',
      description: 'Registered developers'
    },
    {
      title: 'API Usage',
      current: '1B+',
      growth: '+500% YoY',
      description: 'Monthly API calls'
    },
    {
      title: 'Market Expansion',
      current: '50+',
      growth: '+150% YoY',
      description: 'Countries served'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Alex Chen',
      role: 'CFO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Investor Relations
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive investor information, financial reports, and corporate governance for Augment AI shareholders and potential investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#financials"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View Financials
              </a>
              <a
                href="#reports"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Download Reports
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section id="financials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Financial Highlights
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Key financial metrics demonstrating strong growth and market position
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {item.value}
                </div>
                <div className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {item.metric}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Business Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Key Business Metrics
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Operational metrics showcasing our market leadership and growth trajectory
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-[#C74634] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {metric.current}
                </div>
                <div className="text-green-600 font-semibold text-sm mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {metric.growth}
                </div>
                <div className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {metric.title}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News & Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recent News */}
            <div>
              <h2 className="text-2xl font-normal text-[#161513] mb-8" style={{ fontFamily: 'var(--oracleserif)' }}>
                Recent News & Announcements
              </h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {news.date}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        news.type === 'Earnings' ? 'bg-green-100 text-green-800' :
                        news.type === 'Funding' ? 'bg-blue-100 text-blue-800' :
                        news.type === 'Business' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {news.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {news.title}
                    </h3>
                    <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {news.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-normal text-[#161513] mb-8" style={{ fontFamily: 'var(--oracleserif)' }}>
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {event.date}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-[#C74634] text-white rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {event.event}
                    </h3>
                    <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {event.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section id="reports" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Financial Reports & Documents
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Access our latest financial reports, SEC filings, and corporate governance documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                📊
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Quarterly Earnings
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Q4 2023 earnings report and financial statements
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Download PDF
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                📋
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Annual Report
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                2023 annual report with comprehensive business overview
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Download PDF
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                🏛️
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                SEC Filings
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Latest SEC filings and regulatory documents
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Filings
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                📈
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Investor Presentation
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Latest investor deck and company presentation
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Download PDF
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                ⚖️
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Corporate Governance
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Board charter, policies, and governance documents
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Documents
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                📞
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Earnings Calls
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Recordings and transcripts of earnings calls
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Listen Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Executive Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Meet the leadership team driving Augment AI's growth and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {leader.name}
                </h3>
                <p className="text-[#C74634] font-medium text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.role}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Full Leadership Team
            </a>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Investor Relations Contact
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            For investor inquiries, financial information, or to schedule meetings with our IR team.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Investor Relations
              </h3>
              <p className="text-red-100" style={{ fontFamily: 'var(--oraclesans)' }}>
                ir@augment.ai<br/>
                +1 (555) 123-4567
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Media Relations
              </h3>
              <p className="text-red-100" style={{ fontFamily: 'var(--oraclesans)' }}>
                press@augment.ai<br/>
                +1 (555) 123-4568
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact IR Team
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Email Alerts Signup
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
