'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function CaseStudiesPage() {
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterSolution, setFilterSolution] = useState('all');

  const heroButtons = [
    {
      text: 'Browse Case Studies',
      href: '#case-studies',
      variant: 'primary' as const
    },
    {
      text: 'Submit Your Case Study',
      href: '#submit',
      variant: 'secondary' as const
    }
  ];

  const featuredCaseStudies = [
    {
      id: 'healthcare-network-ai',
      title: 'Global Healthcare Network: 40% Faster Diagnoses',
      description: 'Leading healthcare provider implemented Augment Health AI to reduce patient wait times by 40% and improve diagnostic accuracy by 25% across 200+ facilities.',
      ctaText: 'Read full case study',
      ctaLink: '/customers/case-studies/healthcare-network-ai/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fortune-500-fraud-prevention',
      title: 'Fortune 500 Bank: $50M Fraud Prevention',
      description: 'Major financial institution prevented $50M in fraud losses and reduced false positives by 60% using Augment Finance AI for real-time transaction monitoring.',
      ctaText: 'View case study',
      ctaLink: '/customers/case-studies/fortune-500-fraud-prevention/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing-efficiency',
      title: 'Manufacturing Giant: 30% Production Increase',
      description: 'Global manufacturer increased production efficiency by 30% and reduced equipment downtime by 45% through predictive maintenance with Augment Flow.',
      ctaText: 'Explore results',
      ctaLink: '/customers/case-studies/manufacturing-efficiency/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail-personalization',
      title: 'Retail Chain: 25% Sales Boost Through AI',
      description: 'International retailer boosted online sales by 25% and improved customer satisfaction by 35% using Augment Search AI for personalized recommendations.',
      ctaText: 'Read success story',
      ctaLink: '/customers/case-studies/retail-personalization/',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'government-citizen-services',
      title: 'Government Agency: 50% Faster Citizen Services',
      description: 'Federal agency improved citizen service delivery by 50% and reduced processing time by 60% using Augment AI for document processing and workflow automation.',
      ctaText: 'View implementation',
      ctaLink: '/customers/case-studies/government-citizen-services/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'startup-scaling-hr',
      title: 'Tech Startup: 10x Faster Hiring Process',
      description: 'Fast-growing startup scaled their hiring process 10x faster and improved candidate quality by 60% using Augment Resume AI for automated screening.',
      ctaText: 'Learn how',
      ctaLink: '/customers/case-studies/startup-scaling-hr/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const industryCategories = [
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      description: 'Hospitals, clinics, and pharmaceutical companies transforming patient care and research with AI-powered solutions.',
      ctaText: 'Healthcare cases',
      ctaLink: '/customers/case-studies/industry/healthcare/'
    },
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Banks, insurance companies, and fintech firms leveraging AI for fraud detection, risk management, and customer service.',
      ctaText: 'Finance cases',
      ctaLink: '/customers/case-studies/industry/financial-services/'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industrial',
      description: 'Manufacturers optimizing operations, predictive maintenance, and supply chain management with intelligent automation.',
      ctaText: 'Manufacturing cases',
      ctaLink: '/customers/case-studies/industry/manufacturing/'
    },
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      description: 'Retailers enhancing customer experience, inventory management, and personalization through AI-driven insights.',
      ctaText: 'Retail cases',
      ctaLink: '/customers/case-studies/industry/retail-ecommerce/'
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Government agencies improving citizen services, security, and operational efficiency with AI solutions.',
      ctaText: 'Government cases',
      ctaLink: '/customers/case-studies/industry/government/'
    },
    {
      id: 'technology',
      title: 'Technology & Software',
      description: 'Tech companies accelerating development, improving products, and scaling operations with AI-first approaches.',
      ctaText: 'Tech cases',
      ctaLink: '/customers/case-studies/industry/technology/'
    }
  ];

  const caseStudyBenefits = [
    {
      title: 'Proven ROI Results',
      description: 'See detailed financial impact and return on investment metrics from real customer implementations.',
      href: '/customers/case-studies/roi/',
      buttonText: 'View ROI data',
      icon: '📈'
    },
    {
      title: 'Implementation Insights',
      description: 'Learn about deployment strategies, challenges overcome, and best practices from successful projects.',
      href: '/customers/case-studies/implementation/',
      buttonText: 'Implementation guides',
      icon: '🔧'
    },
    {
      title: 'Industry Benchmarks',
      description: 'Compare performance metrics and outcomes against industry standards and peer organizations.',
      href: '/customers/case-studies/benchmarks/',
      buttonText: 'View benchmarks',
      icon: '📊'
    },
    {
      title: 'Technical Deep Dives',
      description: 'Explore technical architecture, integration approaches, and solution design from customer deployments.',
      href: '/customers/case-studies/technical/',
      buttonText: 'Technical details',
      icon: '⚙️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Case Studies | Augment AI Customer Success</h1>

        <SectionHero
          title="Customer Case Studies"
          subtitle="Real results from real customers"
          description="Explore detailed case studies showcasing how organizations across industries are achieving transformational results with Augment AI. Discover implementation strategies, measurable outcomes, and lessons learned from successful deployments."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Business analytics dashboard showing successful AI implementation results and metrics"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Cases
              </a>
              <a href="#industries" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                By Industry
              </a>
              <a href="#insights" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Case Study Insights
              </a>
              <a href="#submit" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Submit Your Case
              </a>
            </div>
          </div>
        </nav>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Industry:
                </label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                >
                  <option value="all">All Industries</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="government">Government</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Solution:
                </label>
                <select
                  value={filterSolution}
                  onChange={(e) => setFilterSolution(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                >
                  <option value="all">All Solutions</option>
                  <option value="health-ai">Health AI</option>
                  <option value="finance-ai">Finance AI</option>
                  <option value="flow">Flow</option>
                  <option value="resume-ai">Resume AI</option>
                  <option value="search-ai">Search AI</option>
                  <option value="ai-hr">AI HR</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies">
          <FeaturedCards
            title="Featured customer case studies"
            description="Detailed analysis of successful AI implementations and their business impact"
            cards={featuredCaseStudies}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Case Study Impact Metrics
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Quantified results and measurable outcomes from documented customer case studies
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Published Case Studies
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $1.8B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Documented Value Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  42%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Efficiency Improvement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  18 mo
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average ROI Payback Period
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industries">
          <InfoColumns
            title="Case studies by industry"
            description="Explore how different industries are leveraging Augment AI for transformation"
            columns={industryCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Customer Testimonials
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear directly from the leaders who drove successful AI transformations
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces" 
                    alt="David Rodriguez" 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>David Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Chief Digital Officer</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Global Manufacturing Corp</p>
                  </div>
                </div>
                <blockquote className="text-base text-gray-700 italic" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The implementation of Augment Flow transformed our entire production line. We achieved a 30% increase in efficiency within six months, and the predictive maintenance capabilities have saved us millions in downtime costs. This technology is truly revolutionary."
                </blockquote>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=faces" 
                    alt="Dr. Lisa Chen" 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>Dr. Lisa Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Chief Medical Officer</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Regional Health Network</p>
                  </div>
                </div>
                <blockquote className="text-base text-gray-700 italic" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Augment Health AI has fundamentally changed how we deliver patient care. Our diagnostic accuracy improved by 25%, and we've reduced patient wait times significantly. The impact on patient outcomes has been remarkable, and our staff loves the efficiency gains."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="insights">
          <CTASection
            title="Gain insights from customer success"
            description="Access detailed analysis, implementation guides, and strategic insights from our case studies"
            actions={caseStudyBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="submit" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Share Your Success Story
            </h2>
            <p className="text-base text-gray-700 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Have you achieved remarkable results with Augment AI? We'd love to feature your success story and help inspire other organizations on their AI journey.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2">📝</div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Submit Your Story</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>Share your implementation details and business results</p>
                </div>
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2">🤝</div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Collaborate with Us</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>Work with our team to create a compelling case study</p>
                </div>
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2">🌟</div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Get Recognition</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>Gain industry recognition for your innovative AI implementation</p>
                </div>
              </div>
              <a
                href="/customers/case-studies/submit/"
                className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Submit Your Case Study
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to create your own success story?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join hundreds of organizations achieving transformational results with Augment AI. Start your journey today and become our next case study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Start Your AI Journey
              </a>
              <a
                href="/customers/success-stories/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Read Success Stories
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
