'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function PartnerNetworkPage() {
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnerType: '',
    industry: '',
    region: '',
    description: '',
    experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setPartnerForm({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnerType: '',
        industry: '',
        region: '',
        description: '',
        experience: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Become a Partner',
      href: '#apply',
      variant: 'primary' as const
    },
    {
      text: 'Find Partners',
      href: '#directory',
      variant: 'secondary' as const
    }
  ];

  const partnerTypes = [
    {
      id: 'technology-partners',
      title: 'Technology Integration Partners',
      description: 'Technology companies that integrate Augment AI into their platforms, creating powerful combined solutions for customers.',
      ctaText: 'Technology partnership',
      ctaLink: '/partners/network/technology/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'solution-partners',
      title: 'Solution Implementation Partners',
      description: 'Consulting firms and system integrators that help customers implement and optimize Augment AI solutions.',
      ctaText: 'Solution partnership',
      ctaLink: '/partners/network/solution/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'channel-partners',
      title: 'Channel & Reseller Partners',
      description: 'Authorized resellers and distributors that sell Augment AI solutions to their customer base and markets.',
      ctaText: 'Channel partnership',
      ctaLink: '/partners/network/channel/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-partners',
      title: 'Industry Specialist Partners',
      description: 'Domain experts and industry specialists that provide vertical-specific expertise and solutions.',
      ctaText: 'Industry partnership',
      ctaLink: '/partners/network/industry/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'strategic-partners',
      title: 'Strategic Alliance Partners',
      description: 'Strategic partnerships with major technology companies and platforms for joint go-to-market initiatives.',
      ctaText: 'Strategic alliance',
      ctaLink: '/partners/network/strategic/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'startup-partners',
      title: 'Startup & Innovation Partners',
      description: 'Emerging companies and startups building innovative solutions on top of the Augment AI platform.',
      ctaText: 'Startup partnership',
      ctaLink: '/partners/network/startup/',
      image: 'https://images.unsplash.com/photo-1556761175-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const partnerBenefits = [
    {
      id: 'revenue-growth',
      title: 'Accelerated Revenue Growth',
      description: 'Access new markets, customers, and revenue streams through our extensive partner ecosystem and joint sales initiatives.',
      ctaText: 'Revenue opportunities',
      ctaLink: '/partners/network/benefits/revenue/'
    },
    {
      id: 'technical-resources',
      title: 'Technical Resources & Support',
      description: 'Comprehensive technical documentation, APIs, SDKs, and dedicated partner engineering support.',
      ctaText: 'Technical support',
      ctaLink: '/partners/network/benefits/technical/'
    },
    {
      id: 'marketing-support',
      title: 'Co-Marketing & Sales Support',
      description: 'Joint marketing programs, sales enablement, lead sharing, and co-branded marketing materials.',
      ctaText: 'Marketing programs',
      ctaLink: '/partners/network/benefits/marketing/'
    },
    {
      id: 'training-certification',
      title: 'Training & Certification Programs',
      description: 'Comprehensive partner training, certification programs, and ongoing education to ensure success.',
      ctaText: 'Partner training',
      ctaLink: '/partners/network/benefits/training/'
    },
    {
      id: 'exclusive-access',
      title: 'Exclusive Partner Access',
      description: 'Early access to new products, beta programs, roadmap insights, and exclusive partner events.',
      ctaText: 'Exclusive benefits',
      ctaLink: '/partners/network/benefits/exclusive/'
    },
    {
      id: 'partner-portal',
      title: 'Dedicated Partner Portal',
      description: 'Access to partner-only resources, deal registration, lead management, and performance analytics.',
      ctaText: 'Partner portal',
      ctaLink: '/partners/network/benefits/portal/'
    }
  ];

  const partnerPrograms = [
    {
      title: 'Partner Certification Program',
      description: 'Comprehensive certification program to validate partner expertise and ensure customer success.',
      href: '/partners/network/certification/',
      buttonText: 'Get certified',
      icon: ''
    },
    {
      title: 'Joint Go-to-Market Program',
      description: 'Collaborative sales and marketing programs to accelerate mutual growth and market expansion.',
      href: '/partners/network/go-to-market/',
      buttonText: 'Joint GTM',
      icon: ''
    },
    {
      title: 'Innovation Lab Partnership',
      description: 'Collaborate on cutting-edge AI research and development in our innovation labs.',
      href: '/partners/network/innovation-lab/',
      buttonText: 'Innovate together',
      icon: ''
    },
    {
      title: 'Partner Advisory Council',
      description: 'Join our partner advisory council to influence product roadmap and partnership strategy.',
      href: '/partners/network/advisory/',
      buttonText: 'Advisory council',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Augment PartnerNetwork | Strategic Partnerships</h1>

        <SectionHero
          title="Augment PartnerNetwork"
          subtitle="Grow together through strategic partnerships"
          description="Join our global ecosystem of technology partners, solution providers, and industry experts. Together, we're building the future of AI and creating unprecedented value for customers worldwide through strategic partnerships and collaboration."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Business partners collaborating on AI solutions and strategic partnerships"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#partner-types" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Types
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Benefits
              </a>
              <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partner Programs
              </a>
              <a href="#apply" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Become a Partner
              </a>
            </div>
          </div>
        </nav>

        <section id="partner-types">
          <FeaturedCards
            title="Partnership opportunities for every business"
            description="Discover the right partnership model for your organization and join our thriving ecosystem"
            cards={partnerTypes}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Partner Ecosystem
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                A thriving network of partners driving AI innovation and customer success worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Global Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  80+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $500M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Partner Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Partner Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <InfoColumns
            title="Comprehensive partner benefits and support"
            description="Access the resources, support, and opportunities you need to succeed as an Augment partner"
            columns={partnerBenefits}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear from our partners about their success and growth through the Augment PartnerNetwork
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces" 
                    alt="Alex Thompson" 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>Alex Thompson</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CEO, TechSolutions Inc.</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Technology Integration Partner</p>
                  </div>
                </div>
                <blockquote className="text-base text-gray-700 italic" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Partnering with Augment has transformed our business. We've seen 300% growth in AI-related revenue and have become the go-to AI solutions provider in our region. The technical support and joint go-to-market programs have been exceptional."
                </blockquote>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=faces" 
                    alt="Maria Rodriguez" 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>Maria Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>VP of Partnerships, ConsultCorp</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Solution Implementation Partner</p>
                  </div>
                </div>
                <blockquote className="text-base text-gray-700 italic" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Augment PartnerNetwork has opened doors to enterprise customers we never could have reached alone. The certification program gave our team the expertise needed, and the co-marketing support has been invaluable for our growth."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="programs">
          <CTASection
            title="Exclusive partner programs and initiatives"
            description="Take advantage of specialized programs designed to accelerate partner success and growth"
            actions={partnerPrograms}
            columns={2}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="directory" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Find the Right Partner
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Browse our directory of certified partners to find the right expertise for your AI implementation needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2"></div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Search by Expertise</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>Find partners with specific industry or technical expertise</p>
                </div>
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2"></div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Global Coverage</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>Locate partners in your region or globally</p>
                </div>
                <div className="text-center">
                  <div className="text-[#C74634] text-3xl mb-2"></div>
                  <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>Certified Quality</h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>All partners are certified and validated</p>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="/partners/directory/"
                  className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Browse Partner Directory
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Become an Augment Partner
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join our global partner ecosystem and unlock new growth opportunities. Start your partnership application today.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Partnership Application Submitted!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for your interest in becoming an Augment partner. Our partnership team will review your application and contact you within 5-7 business days.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
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
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({...partnerForm, companyName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        required
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter contact person name"
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
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Partnership Type *
                      </label>
                      <select
                        id="partnerType"
                        required
                        value={partnerForm.partnerType}
                        onChange={(e) => setPartnerForm({...partnerForm, partnerType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select partnership type</option>
                        <option value="technology">Technology Integration Partner</option>
                        <option value="solution">Solution Implementation Partner</option>
                        <option value="channel">Channel & Reseller Partner</option>
                        <option value="industry">Industry Specialist Partner</option>
                        <option value="strategic">Strategic Alliance Partner</option>
                        <option value="startup">Startup & Innovation Partner</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Primary Region *
                      </label>
                      <select
                        id="region"
                        required
                        value={partnerForm.region}
                        onChange={(e) => setPartnerForm({...partnerForm, region: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select primary region</option>
                        <option value="north-america">North America</option>
                        <option value="europe">Europe</option>
                        <option value="asia-pacific">Asia Pacific</option>
                        <option value="latin-america">Latin America</option>
                        <option value="middle-east-africa">Middle East & Africa</option>
                        <option value="global">Global</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Industry Focus
                    </label>
                    <input
                      type="text"
                      id="industry"
                      value={partnerForm.industry}
                      onChange={(e) => setPartnerForm({...partnerForm, industry: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="e.g., Healthcare, Financial Services, Manufacturing (or 'All Industries')"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Company Description *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      value={partnerForm.description}
                      onChange={(e) => setPartnerForm({...partnerForm, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your company, services, and what you bring to the partnership..."
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI/Technology Experience *
                    </label>
                    <textarea
                      id="experience"
                      rows={3}
                      required
                      value={partnerForm.experience}
                      onChange={(e) => setPartnerForm({...partnerForm, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your experience with AI, technology implementations, or relevant expertise..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Partnership Application
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
              Ready to grow together?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join 500+ partners worldwide who are driving AI innovation and achieving remarkable growth through the Augment PartnerNetwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/directory/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Find Partners
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Partnership Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
