'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function SuccessStoriesPage() {
  const [submitForm, setSubmitForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    solution: '',
    story: '',
    results: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSubmitForm({
        name: '',
        email: '',
        company: '',
        role: '',
        solution: '',
        story: '',
        results: '',
        consent: false
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Read Success Stories',
      href: '#stories',
      variant: 'primary' as const
    },
    {
      text: 'Share Your Story',
      href: '#submit',
      variant: 'secondary' as const
    }
  ];

  const successStories = [
    {
      id: 'healthcare-transformation',
      title: 'Regional Hospital Network: Transforming Patient Care',
      description: 'How a 15-hospital network reduced emergency room wait times by 45% and improved patient satisfaction scores by 38% using Augment Health AI for triage and resource optimization.',
      ctaText: 'Read their journey',
      ctaLink: '/customers/success-stories/healthcare-transformation/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fintech-scaling',
      title: 'FinTech Startup: From Startup to Unicorn',
      description: 'A fintech startup scaled from 10K to 10M users in 18 months using Augment Finance AI for fraud detection and risk assessment, achieving 99.8% accuracy.',
      ctaText: 'Discover their growth',
      ctaLink: '/customers/success-stories/fintech-scaling/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'manufacturing-revolution',
      title: 'Auto Manufacturer: Industry 4.0 Revolution',
      description: 'Global automotive manufacturer achieved 35% reduction in production costs and 50% improvement in quality control using Augment Flow for smart manufacturing.',
      ctaText: 'Explore innovation',
      ctaLink: '/customers/success-stories/manufacturing-revolution/',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'retail-personalization',
      title: 'Fashion Retailer: Personalization at Scale',
      description: 'International fashion brand increased online conversion rates by 40% and customer lifetime value by 28% through AI-powered personalization with Augment Search AI.',
      ctaText: 'See their results',
      ctaLink: '/customers/success-stories/retail-personalization/',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'government-efficiency',
      title: 'City Government: Smart City Initiative',
      description: 'Metropolitan city government improved citizen service delivery by 55% and reduced administrative costs by 30% using Augment AI for process automation.',
      ctaText: 'Learn about impact',
      ctaLink: '/customers/success-stories/government-efficiency/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'hr-transformation',
      title: 'Tech Company: HR Transformation Success',
      description: 'Rapidly growing tech company reduced time-to-hire by 65% and improved employee retention by 32% using Augment Resume AI and AI HR solutions.',
      ctaText: 'Read transformation',
      ctaLink: '/customers/success-stories/hr-transformation/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const storyCategories = [
    {
      id: 'transformation-stories',
      title: 'Digital Transformation Stories',
      description: 'Complete organizational transformations enabled by AI, showcasing cultural change and business model evolution.',
      ctaText: 'Transformation journeys',
      ctaLink: '/customers/success-stories/category/transformation/'
    },
    {
      id: 'efficiency-gains',
      title: 'Operational Efficiency Gains',
      description: 'Stories focused on process optimization, cost reduction, and productivity improvements through AI automation.',
      ctaText: 'Efficiency stories',
      ctaLink: '/customers/success-stories/category/efficiency/'
    },
    {
      id: 'innovation-breakthroughs',
      title: 'Innovation Breakthroughs',
      description: 'Groundbreaking innovations and new business opportunities created through creative AI implementations.',
      ctaText: 'Innovation stories',
      ctaLink: '/customers/success-stories/category/innovation/'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience Excellence',
      description: 'Stories highlighting dramatic improvements in customer satisfaction, engagement, and service delivery.',
      ctaText: 'CX success stories',
      ctaLink: '/customers/success-stories/category/customer-experience/'
    },
    {
      id: 'scaling-success',
      title: 'Scaling Success Stories',
      description: 'How organizations successfully scaled AI implementations from pilot projects to enterprise-wide deployments.',
      ctaText: 'Scaling journeys',
      ctaLink: '/customers/success-stories/category/scaling/'
    },
    {
      id: 'industry-firsts',
      title: 'Industry-First Implementations',
      description: 'Pioneering implementations that set new industry standards and created competitive advantages.',
      ctaText: 'Pioneer stories',
      ctaLink: '/customers/success-stories/category/industry-firsts/'
    }
  ];

  const storyBenefits = [
    {
      title: 'Inspire Others',
      description: 'Share your success to inspire other organizations and contribute to the AI community knowledge base.',
      href: '/customers/success-stories/inspire/',
      buttonText: 'Inspire others',
      icon: '💡'
    },
    {
      title: 'Gain Recognition',
      description: 'Receive industry recognition for your innovative AI implementation and thought leadership.',
      href: '/customers/success-stories/recognition/',
      buttonText: 'Get recognized',
      icon: '🏆'
    },
    {
      title: 'Build Credibility',
      description: 'Establish your organization as an AI leader and attract top talent, partners, and customers.',
      href: '/customers/success-stories/credibility/',
      buttonText: 'Build credibility',
      icon: '🌟'
    },
    {
      title: 'Network & Connect',
      description: 'Connect with other AI leaders and join an exclusive community of successful implementers.',
      href: '/customers/success-stories/network/',
      buttonText: 'Join network',
      icon: '🤝'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Success Stories | Augment AI Customer Journeys</h1>

        <SectionHero
          title="Customer Success Stories"
          subtitle="Inspiring journeys of AI transformation"
          description="Discover inspiring stories of organizations that have transformed their business with Augment AI. From breakthrough innovations to operational excellence, these stories showcase the human side of AI transformation and the remarkable results achieved."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse group of successful business leaders celebrating AI transformation achievements and sharing their stories"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#stories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Stories
              </a>
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Story Categories
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Why Share
              </a>
              <a href="#submit" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Share Your Story
              </a>
            </div>
          </div>
        </nav>

        <section id="stories">
          <FeaturedCards
            title="Inspiring customer success stories"
            description="Real stories of transformation, innovation, and success from organizations using Augment AI"
            cards={successStories}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Success Story Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Collective impact and inspiration from our customer success stories
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  150+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Published Success Stories
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Story Readers Monthly
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Find Stories Inspiring
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  40+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Industries Represented
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <InfoColumns
            title="Success stories by category"
            description="Explore different types of success stories and find inspiration for your AI journey"
            columns={storyCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Voices of Success
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear directly from the leaders who championed AI transformation in their organizations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Maria Santos" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Maria Santos</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Chief Innovation Officer</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Global Retail Chain</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Our AI transformation journey with Augment has been incredible. We've not only improved our bottom line but also created a more engaging experience for our customers. The cultural shift has been as important as the technology."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="James Wilson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>James Wilson</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CEO & Founder</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>HealthTech Startup</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Starting as a small healthcare startup, Augment AI helped us scale to serve millions of patients. The technology gave us the foundation to compete with industry giants and ultimately achieve our mission of improving healthcare access."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces" 
                    alt="Dr. Sarah Kim" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Dr. Sarah Kim</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Director of Operations</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>City Public Services</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Implementing AI in government can be challenging, but the results speak for themselves. We've improved citizen satisfaction dramatically while reducing costs. It's been a win-win for everyone involved."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <CTASection
            title="Why share your success story?"
            description="Discover the benefits of sharing your AI transformation journey with the community"
            actions={storyBenefits}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="submit" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Share Your Success Story
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Have you achieved remarkable results with Augment AI? Share your journey and inspire others while gaining recognition for your success.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Success Story Submitted!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for sharing your success story! Our team will review your submission and contact you within 5 business days to discuss next steps for featuring your story.
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
                        value={submitForm.name}
                        onChange={(e) => setSubmitForm({...submitForm, name: e.target.value})}
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
                        value={submitForm.email}
                        onChange={(e) => setSubmitForm({...submitForm, email: e.target.value})}
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
                        value={submitForm.company}
                        onChange={(e) => setSubmitForm({...submitForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        required
                        value={submitForm.role}
                        onChange={(e) => setSubmitForm({...submitForm, role: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="e.g., CTO, VP Operations, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Augment Solution Used *
                    </label>
                    <select
                      id="solution"
                      required
                      value={submitForm.solution}
                      onChange={(e) => setSubmitForm({...submitForm, solution: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select the primary solution</option>
                      <option value="health-ai">Health AI</option>
                      <option value="finance-ai">Finance AI</option>
                      <option value="flow">Flow</option>
                      <option value="resume-ai">Resume AI</option>
                      <option value="search-ai">Search AI</option>
                      <option value="ai-hr">AI HR</option>
                      <option value="multiple">Multiple Solutions</option>
                      <option value="platform">Augment Platform</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Your Success Story *
                    </label>
                    <textarea
                      id="story"
                      rows={6}
                      required
                      value={submitForm.story}
                      onChange={(e) => setSubmitForm({...submitForm, story: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Tell us about your AI transformation journey. What challenges did you face? How did Augment AI help? What was the implementation process like?"
                    />
                  </div>

                  <div>
                    <label htmlFor="results" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Measurable Results *
                    </label>
                    <textarea
                      id="results"
                      rows={4}
                      required
                      value={submitForm.results}
                      onChange={(e) => setSubmitForm({...submitForm, results: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Share specific, measurable results (e.g., 30% efficiency improvement, $2M cost savings, 50% reduction in processing time, etc.)"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={submitForm.consent}
                      onChange={(e) => setSubmitForm({...submitForm, consent: e.target.checked})}
                      className="mt-1 rounded border-gray-300 text-[#C74634] focus:ring-[#C74634]"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      I consent to Augment using this information to create a success story for marketing purposes. I understand that Augment may contact me for additional details and approval before publication. *
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Success Story
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Inspire the next generation of AI leaders
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Your success story could be the inspiration another organization needs to start their AI transformation journey. Share your experience and help build the future of AI adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/customers/case-studies/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Read Case Studies
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
