'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function CustomerAdvisoryPage() {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    experience: '',
    expertise: '',
    motivation: '',
    commitment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationForm({
        name: '',
        email: '',
        company: '',
        role: '',
        industry: '',
        experience: '',
        expertise: '',
        motivation: '',
        commitment: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Apply to Join',
      href: '#apply',
      variant: 'primary' as const
    },
    {
      text: 'Learn More',
      href: '#about',
      variant: 'secondary' as const
    }
  ];

  const advisoryBenefits = [
    {
      id: 'product-influence',
      title: 'Shape Product Roadmap',
      description: 'Directly influence the future of Augment AI products and features based on your real-world experience and industry needs.',
      ctaText: 'Influence products',
      ctaLink: '/customers/advisory/product-influence/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'early-access',
      title: 'Exclusive Early Access',
      description: 'Get first access to new features, beta programs, and cutting-edge AI innovations before they are released to the public.',
      ctaText: 'Early access benefits',
      ctaLink: '/customers/advisory/early-access/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'networking',
      title: 'Executive Networking',
      description: 'Connect with fellow AI leaders, executives, and innovators from top organizations worldwide in exclusive events and forums.',
      ctaText: 'Network with leaders',
      ctaLink: '/customers/advisory/networking/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'thought-leadership',
      title: 'Thought Leadership Platform',
      description: 'Establish yourself as an AI thought leader through speaking opportunities, content collaboration, and industry recognition.',
      ctaText: 'Lead industry',
      ctaLink: '/customers/advisory/thought-leadership/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'strategic-insights',
      title: 'Strategic Market Insights',
      description: 'Access exclusive market research, industry trends, and strategic insights to inform your AI strategy and investments.',
      ctaText: 'Strategic insights',
      ctaLink: '/customers/advisory/insights/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'premium-support',
      title: 'Premium Support Access',
      description: 'Receive priority support, dedicated account management, and direct access to our engineering and product teams.',
      ctaText: 'Premium support',
      ctaLink: '/customers/advisory/premium-support/',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const advisoryCommittees = [
    {
      id: 'product-strategy',
      title: 'Product Strategy Committee',
      description: 'Guide overall product direction, feature prioritization, and long-term strategic planning for Augment AI solutions.',
      ctaText: 'Product strategy',
      ctaLink: '/customers/advisory/committees/product-strategy/'
    },
    {
      id: 'technical-advisory',
      title: 'Technical Advisory Committee',
      description: 'Provide technical guidance on architecture, integrations, and emerging technology adoption for AI platforms.',
      ctaText: 'Technical guidance',
      ctaLink: '/customers/advisory/committees/technical-advisory/'
    },
    {
      id: 'industry-vertical',
      title: 'Industry Vertical Committees',
      description: 'Specialized committees for healthcare, finance, manufacturing, and other industries to address sector-specific needs.',
      ctaText: 'Industry focus',
      ctaLink: '/customers/advisory/committees/industry-vertical/'
    },
    {
      id: 'user-experience',
      title: 'User Experience Committee',
      description: 'Shape user interfaces, workflows, and overall user experience across all Augment AI products and platforms.',
      ctaText: 'UX innovation',
      ctaLink: '/customers/advisory/committees/user-experience/'
    },
    {
      id: 'ethics-governance',
      title: 'AI Ethics & Governance Committee',
      description: 'Guide responsible AI development, ethical considerations, and governance frameworks for AI implementations.',
      ctaText: 'Ethics guidance',
      ctaLink: '/customers/advisory/committees/ethics-governance/'
    },
    {
      id: 'market-expansion',
      title: 'Market Expansion Committee',
      description: 'Advise on new market opportunities, geographic expansion, and go-to-market strategies for emerging segments.',
      ctaText: 'Market expansion',
      ctaLink: '/customers/advisory/committees/market-expansion/'
    }
  ];

  const membershipBenefits = [
    {
      title: 'Quarterly Executive Sessions',
      description: 'Participate in exclusive quarterly sessions with Augment leadership to discuss strategy and roadmap.',
      href: '/customers/advisory/sessions/',
      buttonText: 'Executive sessions',
      icon: '🎯'
    },
    {
      title: 'Annual Advisory Summit',
      description: 'Attend our annual summit with keynotes, workshops, and networking with fellow advisory board members.',
      href: '/customers/advisory/summit/',
      buttonText: 'Annual summit',
      icon: '🏔️'
    },
    {
      title: 'Direct CEO Access',
      description: 'Regular touchpoints with our CEO and executive team to share feedback and strategic insights.',
      href: '/customers/advisory/ceo-access/',
      buttonText: 'CEO access',
      icon: '👤'
    },
    {
      title: 'Innovation Labs Preview',
      description: 'Exclusive previews of our innovation labs and research projects before public announcement.',
      href: '/customers/advisory/innovation-labs/',
      buttonText: 'Innovation preview',
      icon: '🔬'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Customer Advisory Board | Augment AI</h1>

        <SectionHero
          title="Customer Advisory Board"
          subtitle="Shape the future of AI innovation"
          description="Join an exclusive group of AI leaders and visionaries who are shaping the future of Augment AI products and the broader AI industry. Our Customer Advisory Board provides strategic guidance, early access to innovations, and unparalleled networking opportunities."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Executive advisory board meeting with AI leaders discussing strategy and innovation"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                About the Board
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Member Benefits
              </a>
              <a href="#committees" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Advisory Committees
              </a>
              <a href="#apply" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Apply Now
              </a>
            </div>
          </div>
        </nav>

        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                About Our Customer Advisory Board
              </h2>
              <p className="text-base text-gray-700 max-w-4xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our Customer Advisory Board consists of forward-thinking executives and AI leaders from diverse industries who are passionate about advancing AI innovation. Members provide strategic guidance, share real-world insights, and help shape the future of AI technology.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#C74634] text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Strategic Influence
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Directly influence product roadmaps, strategic decisions, and the future direction of AI innovation at Augment.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#C74634] text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Collaborative Partnership
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Work closely with our executive team and product leaders in a true partnership to drive AI advancement.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#C74634] text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Industry Leadership
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Establish yourself as a thought leader and help set industry standards for AI adoption and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <FeaturedCards
            title="Exclusive benefits for advisory board members"
            description="Discover the unique advantages and opportunities available to our Customer Advisory Board members"
            cards={advisoryBenefits}
            columns={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Advisory Board Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                The collective influence and achievements of our Customer Advisory Board members
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Advisory Board Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  15+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Industries Represented
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Product Features Influenced
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  98%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Member Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="committees">
          <InfoColumns
            title="Advisory committees and focus areas"
            description="Specialized committees focusing on different aspects of AI innovation and business strategy"
            columns={advisoryCommittees}
            columnsCount={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-50">
          <CTASection
            title="Member engagement opportunities"
            description="Exclusive opportunities for advisory board members to engage and contribute"
            actions={membershipBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="apply" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Apply to Join Our Advisory Board
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We're looking for visionary leaders who are passionate about AI innovation and want to shape the future of artificial intelligence. Applications are reviewed quarterly.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for your interest in joining our Customer Advisory Board. Our team will review your application and contact you within 2-3 weeks with next steps.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
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
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company/Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={applicationForm.company}
                        onChange={(e) => setApplicationForm({...applicationForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Current Role/Title *
                      </label>
                      <input
                        type="text"
                        id="role"
                        required
                        value={applicationForm.role}
                        onChange={(e) => setApplicationForm({...applicationForm, role: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="e.g., CEO, CTO, VP of Innovation"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Industry *
                      </label>
                      <select
                        id="industry"
                        required
                        value={applicationForm.industry}
                        onChange={(e) => setApplicationForm({...applicationForm, industry: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare & Life Sciences</option>
                        <option value="financial-services">Financial Services</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="technology">Technology & Software</option>
                        <option value="government">Government & Public Sector</option>
                        <option value="education">Education</option>
                        <option value="energy">Energy & Utilities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        AI Experience Level *
                      </label>
                      <select
                        id="experience"
                        required
                        value={applicationForm.experience}
                        onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select experience level</option>
                        <option value="executive-sponsor">Executive Sponsor (Strategic oversight)</option>
                        <option value="hands-on-leader">Hands-on Leader (Direct implementation)</option>
                        <option value="ai-expert">AI Expert (Deep technical knowledge)</option>
                        <option value="transformation-leader">Transformation Leader (Change management)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Areas of Expertise *
                    </label>
                    <textarea
                      id="expertise"
                      rows={3}
                      required
                      value={applicationForm.expertise}
                      onChange={(e) => setApplicationForm({...applicationForm, expertise: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your areas of expertise and what unique perspective you would bring to the advisory board..."
                    />
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Why do you want to join? *
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      required
                      value={applicationForm.motivation}
                      onChange={(e) => setApplicationForm({...applicationForm, motivation: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="What motivates you to join our Customer Advisory Board? How do you see yourself contributing to AI innovation?"
                    />
                  </div>

                  <div>
                    <label htmlFor="commitment" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Time Commitment Understanding *
                    </label>
                    <select
                      id="commitment"
                      required
                      value={applicationForm.commitment}
                      onChange={(e) => setApplicationForm({...applicationForm, commitment: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select your commitment level</option>
                      <option value="full-commitment">Full Commitment (Quarterly meetings + committee work)</option>
                      <option value="strategic-input">Strategic Input (Quarterly meetings + ad-hoc consultation)</option>
                      <option value="specialized-expertise">Specialized Expertise (Committee focus + specific projects)</option>
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
                    Applications are reviewed quarterly. Selected candidates will be invited for an interview with our executive team.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to shape the future of AI?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join visionary leaders who are defining the next generation of AI innovation. Your expertise and insights can help drive the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/customers/success-stories/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Read Success Stories
              </a>
              <a
                href="/community/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
