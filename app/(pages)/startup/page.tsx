'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function StartupProgramPage() {
  const [applicationForm, setApplicationForm] = useState({
    companyName: '',
    founderName: '',
    email: '',
    website: '',
    stage: '',
    industry: '',
    teamSize: '',
    funding: '',
    description: '',
    aiUseCase: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationForm({
        companyName: '',
        founderName: '',
        email: '',
        website: '',
        stage: '',
        industry: '',
        teamSize: '',
        funding: '',
        description: '',
        aiUseCase: '',
        timeline: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Apply to Program',
      href: '#apply',
      variant: 'primary' as const
    },
    {
      text: 'Program Benefits',
      href: '#benefits',
      variant: 'secondary' as const
    }
  ];

  const programBenefits = [
    {
      id: 'free-credits',
      title: 'Free AI Platform Credits',
      description: 'Up to $100,000 in free Augment AI platform credits to accelerate your development and reduce infrastructure costs.',
      ctaText: 'Get free credits',
      ctaLink: '/startup/benefits/credits/',
      image: 'https://images.unsplash.com/photo-1556761175-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'technical-support',
      title: 'Dedicated Technical Support',
      description: 'Priority technical support, architecture reviews, and direct access to our engineering team for implementation guidance.',
      ctaText: 'Technical support',
      ctaLink: '/startup/benefits/technical-support/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'mentorship',
      title: 'Expert Mentorship Program',
      description: 'Connect with successful entrepreneurs, AI experts, and industry leaders for strategic guidance and mentorship.',
      ctaText: 'Find mentors',
      ctaLink: '/startup/benefits/mentorship/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'investor-network',
      title: 'Investor Network Access',
      description: 'Exclusive access to our network of VCs, angel investors, and strategic partners for funding opportunities.',
      ctaText: 'Investor access',
      ctaLink: '/startup/benefits/investors/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'go-to-market',
      title: 'Go-to-Market Support',
      description: 'Marketing resources, co-marketing opportunities, and access to our customer base for early validation and growth.',
      ctaText: 'GTM support',
      ctaLink: '/startup/benefits/go-to-market/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'community',
      title: 'Startup Community Network',
      description: 'Join a vibrant community of AI startups for collaboration, knowledge sharing, and peer-to-peer learning.',
      ctaText: 'Join community',
      ctaLink: '/startup/benefits/community/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const programTracks = [
    {
      id: 'early-stage',
      title: 'Early Stage Track',
      description: 'For pre-seed and seed stage startups building AI-first products and solutions with our platform.',
      ctaText: 'Early stage benefits',
      ctaLink: '/startup/tracks/early-stage/'
    },
    {
      id: 'growth-stage',
      title: 'Growth Stage Track',
      description: 'For Series A+ startups scaling AI solutions and looking for strategic partnerships and enterprise customers.',
      ctaText: 'Growth stage benefits',
      ctaLink: '/startup/tracks/growth-stage/'
    },
    {
      id: 'ai-native',
      title: 'AI-Native Track',
      description: 'Specialized track for startups building core AI technologies, models, or infrastructure solutions.',
      ctaText: 'AI-native benefits',
      ctaLink: '/startup/tracks/ai-native/'
    },
    {
      id: 'vertical-ai',
      title: 'Vertical AI Track',
      description: 'Industry-specific track for startups building AI solutions for healthcare, finance, manufacturing, and other verticals.',
      ctaText: 'Vertical AI benefits',
      ctaLink: '/startup/tracks/vertical-ai/'
    },
    {
      id: 'enterprise-ai',
      title: 'Enterprise AI Track',
      description: 'For B2B startups building enterprise AI solutions with focus on enterprise sales and partnerships.',
      ctaText: 'Enterprise benefits',
      ctaLink: '/startup/tracks/enterprise-ai/'
    },
    {
      id: 'international',
      title: 'International Track',
      description: 'Support for international startups looking to expand to new markets or establish presence globally.',
      ctaText: 'Global expansion',
      ctaLink: '/startup/tracks/international/'
    }
  ];

  const successStories = [
    {
      title: 'HealthTech Unicorn Success',
      description: 'From startup program to $1B valuation - how one healthtech startup scaled with Augment AI support.',
      href: '/startup/success-stories/healthtech-unicorn/',
      buttonText: 'Read success story',
      icon: '🦄'
    },
    {
      title: 'FinTech IPO Journey',
      description: 'A fintech startup that went from program participant to successful IPO in just 4 years.',
      href: '/startup/success-stories/fintech-ipo/',
      buttonText: 'IPO journey',
      icon: '📈'
    },
    {
      title: 'AI Research Breakthrough',
      description: 'How an AI research startup achieved breakthrough results and secured major enterprise partnerships.',
      href: '/startup/success-stories/ai-research/',
      buttonText: 'Research breakthrough',
      icon: '🔬'
    },
    {
      title: 'Global Expansion Success',
      description: 'International startup that successfully expanded to 15 countries with program support.',
      href: '/startup/success-stories/global-expansion/',
      buttonText: 'Expansion story',
      icon: '🌍'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Startup Program | Augment AI for Startups</h1>

        <SectionHero
          title="Augment Startup Program"
          subtitle="Accelerate your AI startup journey"
          description="Join hundreds of successful startups building the future with Augment AI. Get free platform credits, expert mentorship, investor access, and the support you need to scale your AI-powered business from idea to IPO."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556761175-4e9042af2176?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse group of startup founders and entrepreneurs working on AI innovations"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Program Benefits
              </a>
              <a href="#tracks" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Program Tracks
              </a>
              <a href="#success-stories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Success Stories
              </a>
              <a href="#apply" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Apply Now
              </a>
            </div>
          </div>
        </nav>

        <section id="benefits">
          <FeaturedCards
            title="Comprehensive support for AI startups"
            description="Everything you need to build, scale, and succeed with your AI startup"
            cards={programBenefits}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Startup Program Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Supporting the next generation of AI innovators and entrepreneurs worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Startups Supported
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $2B+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Total Funding Raised
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  15
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Unicorn Companies
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Still Active After 3 Years
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tracks">
          <InfoColumns
            title="Specialized program tracks for every startup"
            description="Choose the track that best fits your startup stage, industry focus, and growth objectives"
            columns={programTracks}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                What Our Startup Alumni Say
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear from successful founders who built their companies with support from the Augment Startup Program
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="David Kim" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>David Kim</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CEO, HealthAI Solutions</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>$1.2B Valuation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Augment Startup Program was instrumental in our journey from a small team to a unicorn company. The technical support, mentorship, and investor connections were game-changing."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Sarah Martinez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Sarah Martinez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Founder, FinTech Innovations</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Successful IPO 2023</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Without the free credits and technical guidance from Augment, we never could have built our MVP so quickly. The program gave us the runway we needed to prove our concept and raise Series A."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" 
                    alt="Alex Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Alex Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CTO, AI Research Labs</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>$50M Series B</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The mentorship network connected us with industry experts who helped us navigate technical challenges and strategic decisions. It's like having a board of advisors from day one."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="success-stories">
          <CTASection
            title="Startup success stories"
            description="Learn from startups that have achieved remarkable success through our program"
            actions={successStories}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="apply" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Apply to the Startup Program
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Ready to accelerate your AI startup? Apply to join our program and get the support you need to build, scale, and succeed.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for applying to the Augment Startup Program! Our team will review your application and contact you within 1-2 weeks with next steps.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        required
                        value={applicationForm.companyName}
                        onChange={(e) => setApplicationForm({...applicationForm, companyName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Founder/CEO Name *
                      </label>
                      <input
                        type="text"
                        id="founderName"
                        required
                        value={applicationForm.founderName}
                        onChange={(e) => setApplicationForm({...applicationForm, founderName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter founder/CEO name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={applicationForm.website}
                        onChange={(e) => setApplicationForm({...applicationForm, website: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company Stage *
                      </label>
                      <select
                        id="stage"
                        required
                        value={applicationForm.stage}
                        onChange={(e) => setApplicationForm({...applicationForm, stage: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="pre-seed">Pre-Seed</option>
                        <option value="seed">Seed</option>
                        <option value="series-a">Series A</option>
                        <option value="series-b">Series B</option>
                        <option value="later-stage">Later Stage</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Team Size *
                      </label>
                      <select
                        id="teamSize"
                        required
                        value={applicationForm.teamSize}
                        onChange={(e) => setApplicationForm({...applicationForm, teamSize: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-15">6-15 people</option>
                        <option value="16-50">16-50 people</option>
                        <option value="51-100">51-100 people</option>
                        <option value="100+">100+ people</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Industry Focus *
                      </label>
                      <select
                        id="industry"
                        required
                        value={applicationForm.industry}
                        onChange={(e) => setApplicationForm({...applicationForm, industry: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="fintech">FinTech</option>
                        <option value="enterprise-software">Enterprise Software</option>
                        <option value="consumer-ai">Consumer AI</option>
                        <option value="ai-infrastructure">AI Infrastructure</option>
                        <option value="robotics">Robotics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="funding" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Funding Raised to Date
                    </label>
                    <select
                      id="funding"
                      value={applicationForm.funding}
                      onChange={(e) => setApplicationForm({...applicationForm, funding: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select funding amount</option>
                      <option value="none">No funding yet</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Company Description *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      value={applicationForm.description}
                      onChange={(e) => setApplicationForm({...applicationForm, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your company, what problem you're solving, and your target market..."
                    />
                  </div>

                  <div>
                    <label htmlFor="aiUseCase" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Use Case & Augment Integration *
                    </label>
                    <textarea
                      id="aiUseCase"
                      rows={4}
                      required
                      value={applicationForm.aiUseCase}
                      onChange={(e) => setApplicationForm({...applicationForm, aiUseCase: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="How do you plan to use AI in your product? How would Augment AI platform help your startup?"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      value={applicationForm.timeline}
                      onChange={(e) => setApplicationForm({...applicationForm, timeline: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="short-term">Short-term (1-3 months)</option>
                      <option value="medium-term">Medium-term (3-6 months)</option>
                      <option value="long-term">Long-term (6+ months)</option>
                      <option value="exploring">Still exploring options</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Application
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Applications are reviewed on a rolling basis. Selected startups will be contacted for an interview.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to build the future with AI?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join 1000+ startups that have accelerated their growth through the Augment Startup Program. From free credits to unicorn success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/startup/success-stories/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Read Success Stories
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Program Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
