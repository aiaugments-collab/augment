'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function FindPartnerPage() {
  const [searchForm, setSearchForm] = useState({
    partnerType: '',
    industry: '',
    region: '',
    expertise: '',
    projectSize: ''
  });

  const heroButtons = [
    {
      text: 'Search Partners',
      href: '#search',
      variant: 'primary' as const
    },
    {
      text: 'Browse All Partners',
      href: '#directory',
      variant: 'secondary' as const
    }
  ];

  const featuredPartners = [
    {
      id: 'techsolutions-global',
      title: 'TechSolutions Global',
      description: 'Leading technology integration partner specializing in enterprise AI implementations across healthcare and finance sectors.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'consultpro-ai',
      title: 'ConsultPro AI',
      description: 'Strategic consulting firm with deep expertise in AI transformation, change management, and organizational development.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'implementnow-systems',
      title: 'ImplementNow Systems',
      description: 'System integration specialists focused on manufacturing and industrial AI solutions with 15+ years experience.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare-ai-experts',
      title: 'Healthcare AI Experts',
      description: 'Specialized healthcare consulting firm helping hospitals and clinics implement AI solutions for patient care.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fintech-integrators',
      title: 'FinTech Integrators',
      description: 'Financial services technology partner specializing in AI-powered fraud detection and risk management solutions.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail-ai-solutions',
      title: 'Retail AI Solutions',
      description: 'E-commerce and retail specialists helping brands implement personalization and customer experience AI.',
      ctaText: 'View profile',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const partnerCategories = [
    {
      id: 'by-expertise',
      title: 'Find by Expertise',
      description: 'Search partners based on their technical expertise, industry knowledge, and specialized capabilities.',
      ctaText: 'Search by expertise',
      ctaLink: '#'
    },
    {
      id: 'by-location',
      title: 'Find by Location',
      description: 'Locate partners in your region or globally based on geographic presence and local market knowledge.',
      ctaText: 'Search by location',
      ctaLink: '#'
    },
    {
      id: 'by-industry',
      title: 'Find by Industry',
      description: 'Connect with partners who have deep experience in your specific industry vertical.',
      ctaText: 'Search by industry',
      ctaLink: '#'
    },
    {
      id: 'by-project-size',
      title: 'Find by Project Size',
      description: 'Match with partners who have experience with projects of your scale and complexity.',
      ctaText: 'Search by project size',
      ctaLink: '#'
    },
    {
      id: 'certified-partners',
      title: 'Certified Partners Only',
      description: 'Browse our directory of certified partners who have completed our rigorous qualification process.',
      ctaText: 'Certified partners',
      ctaLink: '#'
    },
    {
      id: 'premier-partners',
      title: 'Premier Partners',
      description: 'Connect with our highest-tier partners who have demonstrated exceptional expertise and results.',
      ctaText: 'Premier partners',
      ctaLink: '#'
    }
  ];

  const partnerServices = [
    {
      title: 'Partner Matching Service',
      description: 'Let our team help you find the perfect partner based on your specific requirements and project needs.',
      href: '#',
      buttonText: 'Request matching',
      icon: ''
    },
    {
      title: 'Partner Evaluation Support',
      description: 'Get guidance on evaluating potential partners and making the right selection for your project.',
      href: '#',
      buttonText: 'Evaluation support',
      icon: ''
    },
    {
      title: 'RFP Template Library',
      description: 'Access our library of RFP templates specifically designed for AI implementation projects.',
      href: '#',
      buttonText: 'RFP templates',
      icon: ''
    },
    {
      title: 'Partner Performance Reviews',
      description: 'Read verified reviews and performance ratings from other customers who have worked with partners.',
      href: '#',
      buttonText: 'Read reviews',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Find a Partner | Augment PartnerNetwork</h1>

        <SectionHero
          title="Find the Right Partner"
          subtitle="Connect with certified AI experts"
          description="Discover the perfect partner for your AI implementation needs. Browse our directory of certified technology partners, consulting firms, and implementation specialists who can help you succeed with Augment AI solutions."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Business professionals searching and connecting with AI implementation partners"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#search" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Search
              </a>
              <a href="#featured" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Partners
              </a>
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Search Categories
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Services
              </a>
            </div>
          </div>
        </nav>

        {/* Partner Search Section */}
        <section id="search" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Find Your Perfect AI Partner
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Use our advanced search to find partners that match your specific requirements, industry, and project needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Partner Type
                  </label>
                  <select
                    id="partnerType"
                    value={searchForm.partnerType}
                    onChange={(e) => setSearchForm({...searchForm, partnerType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                  >
                    <option value="">All Partner Types</option>
                    <option value="technology">Technology Partners</option>
                    <option value="consulting">Consulting Partners</option>
                    <option value="implementation">Implementation Partners</option>
                    <option value="solution">Solution Partners</option>
                    <option value="channel">Channel Partners</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Industry Focus
                  </label>
                  <select
                    id="industry"
                    value={searchForm.industry}
                    onChange={(e) => setSearchForm({...searchForm, industry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                  >
                    <option value="">All Industries</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="government">Government</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Region
                  </label>
                  <select
                    id="region"
                    value={searchForm.region}
                    onChange={(e) => setSearchForm({...searchForm, region: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                  >
                    <option value="">All Regions</option>
                    <option value="north-america">North America</option>
                    <option value="europe">Europe</option>
                    <option value="asia-pacific">Asia Pacific</option>
                    <option value="latin-america">Latin America</option>
                    <option value="middle-east-africa">Middle East & Africa</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Expertise Area
                  </label>
                  <select
                    id="expertise"
                    value={searchForm.expertise}
                    onChange={(e) => setSearchForm({...searchForm, expertise: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                  >
                    <option value="">All Expertise Areas</option>
                    <option value="ai-strategy">AI Strategy</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="automation">Process Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="training">Training & Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Project Size
                  </label>
                  <select
                    id="projectSize"
                    value={searchForm.projectSize}
                    onChange={(e) => setSearchForm({...searchForm, projectSize: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                  >
                    <option value="">All Project Sizes</option>
                    <option value="small">Small (Under $50K)</option>
                    <option value="medium">Medium ($50K - $500K)</option>
                    <option value="large">Large ($500K - $2M)</option>
                    <option value="enterprise">Enterprise ($2M+)</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    className="w-full px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Search Partners
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Can't find what you're looking for? <a href="#" className="text-[#C74634] hover:text-[#A63429] font-medium">Contact our partner matching team</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="featured">
          <FeaturedCards
            title="Featured certified partners"
            description="Discover top-rated partners who have demonstrated exceptional expertise and customer success"
            cards={featuredPartners}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Directory Statistics
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive partner network with verified expertise and proven results
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  800+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Certified Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expertise Areas
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
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Successful Projects
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <InfoColumns
            title="Multiple ways to find the right partner"
            description="Use different search approaches to find partners that match your specific needs and requirements"
            columns={partnerCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="directory" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Directory Highlights
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Browse partners by category and discover the expertise that matches your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-[#C74634] text-3xl mb-3"></div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Healthcare Partners</h3>
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>120+ certified healthcare AI specialists</p>
                <a href="#" className="text-[#C74634] hover:text-[#A63429] text-sm font-medium">View healthcare partners →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-[#C74634] text-3xl mb-3"></div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Financial Partners</h3>
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>95+ fintech and banking specialists</p>
                <a href="#" className="text-[#C74634] hover:text-[#A63429] text-sm font-medium">View financial partners →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-[#C74634] text-3xl mb-3"></div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Manufacturing Partners</h3>
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>85+ industrial AI implementation experts</p>
                <a href="#" className="text-[#C74634] hover:text-[#A63429] text-sm font-medium">View manufacturing partners →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#C74634] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Retail Partners</h3>
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>70+ e-commerce and retail AI experts</p>
                <a href="#" className="text-[#C74634] hover:text-[#A63429] text-sm font-medium">View retail partners →</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <CTASection
            title="Additional partner services and support"
            description="Get extra help finding and working with the right partner for your AI implementation"
            actions={partnerServices}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to find your AI partner?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with certified partners who have the expertise and experience to help you succeed with your AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#search"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Search Partners Now
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Get Partner Recommendations
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
