import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Responsibility | Augment AI',
  description: 'Learn about Augment AI\'s commitment to responsible AI development, sustainability, and positive social impact.',
  keywords: 'corporate responsibility, responsible AI, sustainability, social impact, ethics, environmental responsibility',
};

export default function CorporateResponsibilityPage() {
  const pillars = [
    {
      title: 'Responsible AI Development',
      description: 'Building AI systems that are safe, transparent, and beneficial for all humanity',
      icon: '️',
      initiatives: [
        'AI Safety Research',
        'Bias Detection & Mitigation',
        'Transparency in AI Systems',
        'Ethical AI Guidelines'
      ]
    },
    {
      title: 'Environmental Sustainability',
      description: 'Minimizing our environmental impact through sustainable practices and green technology',
      icon: '',
      initiatives: [
        'Carbon Neutral Operations',
        'Renewable Energy Usage',
        'Efficient Data Centers',
        'Sustainable Office Practices'
      ]
    },
    {
      title: 'Social Impact & Education',
      description: 'Democratizing AI education and supporting underrepresented communities in technology',
      icon: '',
      initiatives: [
        'AI Education Programs',
        'Diversity Scholarships',
        'Community Partnerships',
        'Open Source Contributions'
      ]
    },
    {
      title: 'Data Privacy & Security',
      description: 'Protecting user privacy and maintaining the highest standards of data security',
      icon: '',
      initiatives: [
        'Privacy by Design',
        'Data Minimization',
        'Security Audits',
        'Compliance Standards'
      ]
    }
  ];

  const impactMetrics = [
    { metric: 'Carbon Neutral', value: '100%', description: 'Operations since 2022' },
    { metric: 'Renewable Energy', value: '85%', description: 'Of total energy consumption' },
    { metric: 'AI Education', value: '50K+', description: 'Students reached globally' },
    { metric: 'Diversity Scholarships', value: '$2M+', description: 'Awarded to underrepresented students' }
  ];

  const partnerships = [
    {
      name: 'Partnership on AI',
      description: 'Collaborative effort to advance public understanding of AI',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      focus: 'AI Ethics & Safety'
    },
    {
      name: 'AI for Good Foundation',
      description: 'Supporting AI applications for social and environmental challenges',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop',
      focus: 'Social Impact'
    },
    {
      name: 'Climate Tech Alliance',
      description: 'Accelerating climate solutions through technology innovation',
      logo: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=200&h=100&fit=crop',
      focus: 'Environmental Sustainability'
    },
    {
      name: 'Code.org',
      description: 'Expanding access to computer science education worldwide',
      logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=100&fit=crop',
      focus: 'Education & Access'
    }
  ];

  const initiatives = [
    {
      title: 'AI for Climate Action',
      description: 'Developing AI solutions to address climate change and environmental challenges',
      impact: 'Reduced carbon emissions by 30% in partner organizations',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop',
      category: 'Environment'
    },
    {
      title: 'Inclusive AI Initiative',
      description: 'Ensuring AI systems work fairly for all demographics and communities',
      impact: 'Improved AI fairness metrics by 40% across our models',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      category: 'Diversity & Inclusion'
    },
    {
      title: 'AI Education for All',
      description: 'Free AI education programs for underserved communities worldwide',
      impact: 'Trained 50,000+ students in AI fundamentals',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      category: 'Education'
    },
    {
      title: 'Open Source AI Tools',
      description: 'Contributing open source tools and models to advance AI research',
      impact: 'Downloaded 10M+ times by researchers globally',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      category: 'Research'
    }
  ];

  const governance = [
    {
      title: 'AI Ethics Board',
      description: 'Independent board overseeing ethical AI development and deployment',
      members: '12 external experts'
    },
    {
      title: 'Responsible AI Committee',
      description: 'Internal committee ensuring responsible AI practices across all products',
      members: 'Cross-functional team'
    },
    {
      title: 'Sustainability Council',
      description: 'Driving environmental sustainability initiatives and carbon reduction goals',
      members: 'Executive leadership'
    },
    {
      title: 'Diversity & Inclusion Board',
      description: 'Promoting diversity, equity, and inclusion across all aspects of our business',
      members: 'Employee representatives'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Corporate Responsibility
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              We're committed to developing AI responsibly, protecting our planet, and creating positive impact for communities worldwide. Our responsibility extends beyond technology to encompass ethics, sustainability, and social good.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pillars"
                className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Our Commitments
              </a>
              <a
                href="#impact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View Impact Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section id="pillars" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Four Pillars of Responsibility
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our comprehensive approach to corporate responsibility is built on four foundational pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {pillar.description}
                </p>
                <div>
                  <h4 className="font-medium text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Key Initiatives:
                  </h4>
                  <ul className="space-y-2">
                    {pillar.initiatives.map((initiative, initIndex) => (
                      <li key={initIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Measurable progress toward our responsibility goals and commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {metric.metric}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Key Initiatives & Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Flagship programs driving positive impact across our responsibility pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#C74634] text-white text-xs font-medium rounded-full">
                      {initiative.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {initiative.title}
                  </h3>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {initiative.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Impact: {initiative.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Collaborating with leading organizations to amplify our positive impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="text-center">
                <img
                  src={partnership.logo}
                  alt={partnership.name}
                  className="w-full h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {partnership.name}
                </h3>
                <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {partnership.description}
                </p>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {partnership.focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Governance & Oversight
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Robust governance structures ensuring accountability and transparency in our responsibility efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {governance.map((body, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {body.title}
                </h3>
                <p className="text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {body.description}
                </p>
                <p className="text-sm text-[#C74634] font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {body.members}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Reports & Transparency
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Access our latest reports and documentation on responsibility initiatives and progress
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                2023 Impact Report
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive report on our responsibility initiatives and measurable impact
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Download PDF
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                ️
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                AI Ethics Guidelines
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our comprehensive guidelines for ethical AI development and deployment
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                Read Guidelines
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Sustainability Report
              </h3>
              <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Detailed report on our environmental initiatives and carbon reduction progress
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Report
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Responsibility Journey
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Partner with us to build a more responsible, sustainable, and equitable future through AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Partner with Us
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
