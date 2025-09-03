'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function BecomePartnerPage() {
  const [applicationForm, setApplicationForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    partnerType: '',
    industry: '',
    region: '',
    teamSize: '',
    experience: '',
    description: '',
    motivation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationForm({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        partnerType: '',
        industry: '',
        region: '',
        teamSize: '',
        experience: '',
        description: '',
        motivation: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Apply Now',
      href: '#apply',
      variant: 'primary' as const
    },
    {
      text: 'Partner Benefits',
      href: '#benefits',
      variant: 'secondary' as const
    }
  ];

  const partnershipBenefits = [
    {
      id: 'revenue-growth',
      title: 'Accelerated Revenue Growth',
      description: 'Access new markets, customers, and revenue streams through our extensive partner ecosystem and joint sales initiatives.',
      ctaText: 'Revenue opportunities',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'technical-enablement',
      title: 'Comprehensive Technical Support',
      description: 'Get access to technical documentation, APIs, SDKs, training materials, and dedicated partner engineering support.',
      ctaText: 'Technical resources',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'marketing-support',
      title: 'Co-Marketing & Sales Enablement',
      description: 'Joint marketing programs, sales tools, lead sharing, co-branded materials, and access to our customer base.',
      ctaText: 'Marketing programs',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'certification-training',
      title: 'Partner Certification Programs',
      description: 'Industry-recognized certification programs, ongoing training, and professional development opportunities.',
      ctaText: 'Get certified',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'exclusive-access',
      title: 'Exclusive Partner Benefits',
      description: 'Early access to new products, beta programs, partner-only events, and exclusive business opportunities.',
      ctaText: 'Exclusive benefits',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'partner-portal',
      title: 'Dedicated Partner Portal',
      description: 'Access to partner resources, deal registration, lead management, performance analytics, and support tools.',
      ctaText: 'Partner portal',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const partnerRequirements = [
    {
      id: 'technical-expertise',
      title: 'Technical Expertise',
      description: 'Demonstrated experience in AI, machine learning, or related technologies with certified technical team.',
      ctaText: 'Technical requirements',
      ctaLink: '#'
    },
    {
      id: 'business-credentials',
      title: 'Business Credentials',
      description: 'Established business with proven track record, financial stability, and relevant industry experience.',
      ctaText: 'Business requirements',
      ctaLink: '#'
    },
    {
      id: 'customer-focus',
      title: 'Customer Success Focus',
      description: 'Commitment to customer success, quality service delivery, and maintaining high customer satisfaction.',
      ctaText: 'Customer requirements',
      ctaLink: '#'
    },
    {
      id: 'market-presence',
      title: 'Market Presence',
      description: 'Strong presence in target markets with existing customer relationships and sales capabilities.',
      ctaText: 'Market requirements',
      ctaLink: '#'
    },
    {
      id: 'partnership-commitment',
      title: 'Partnership Commitment',
      description: 'Dedication to the partnership with resources allocated for training, certification, and joint activities.',
      ctaText: 'Commitment requirements',
      ctaLink: '#'
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Standards',
      description: 'Adherence to industry standards, security requirements, and compliance with relevant regulations.',
      ctaText: 'Compliance requirements',
      ctaLink: '#'
    }
  ];

  const applicationProcess = [
    {
      title: 'Submit Application',
      description: 'Complete our comprehensive partner application with company details and partnership objectives.',
      href: '#',
      buttonText: 'Start application',
      icon: '📝'
    },
    {
      title: 'Initial Review',
      description: 'Our partnership team reviews your application and conducts initial qualification assessment.',
      href: '#',
      buttonText: 'Review process',
      icon: '🔍'
    },
    {
      title: 'Partner Interview',
      description: 'Participate in detailed discussions about partnership goals, capabilities, and mutual fit.',
      href: '#',
      buttonText: 'Interview guide',
      icon: '💬'
    },
    {
      title: 'Partnership Agreement',
      description: 'Finalize partnership terms, sign agreements, and begin onboarding and enablement process.',
      href: '#',
      buttonText: 'Agreement details',
      icon: '🤝'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Become a Partner | Augment PartnerNetwork</h1>

        <SectionHero
          title="Become an Augment Partner"
          subtitle="Join our global ecosystem of AI innovators"
          description="Partner with Augment to grow your business, expand your market reach, and deliver cutting-edge AI solutions to your customers. Join 800+ partners worldwide who are driving AI innovation and achieving remarkable growth."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Business professionals shaking hands and forming strategic AI partnerships"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Partnership Benefits
              </a>
              <a href="#requirements" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Requirements
              </a>
              <a href="#process" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Application Process
              </a>
              <a href="#apply" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Apply Now
              </a>
            </div>
          </div>
        </nav>

        <section id="benefits">
          <FeaturedCards
            title="Comprehensive benefits for Augment partners"
            description="Discover the advantages and opportunities available to partners in our global ecosystem"
            cards={partnershipBenefits}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Success Metrics
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Proven results and growth achieved by our partner ecosystem
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  300%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Revenue Growth
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $750M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Partner Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  96%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Partner Satisfaction Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  90+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries Represented
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="requirements">
          <InfoColumns
            title="Partner requirements and qualifications"
            description="Understand the requirements and qualifications needed to become a successful Augment partner"
            columns={partnerRequirements}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="process">
          <CTASection
            title="Simple and transparent application process"
            description="Follow our straightforward process to become an Augment partner and start growing your business"
            actions={applicationProcess}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="apply" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Application
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Ready to join the Augment PartnerNetwork? Complete our application to start your partnership journey with us.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for your interest in becoming an Augment partner. Our partnership team will review your application and contact you within 5-7 business days with next steps.
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
                        value={applicationForm.companyName}
                        onChange={(e) => setApplicationForm({...applicationForm, companyName: e.target.value})}
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
                        value={applicationForm.contactName}
                        onChange={(e) => setApplicationForm({...applicationForm, contactName: e.target.value})}
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
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
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
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Desired Partnership Type *
                      </label>
                      <select
                        id="partnerType"
                        required
                        value={applicationForm.partnerType}
                        onChange={(e) => setApplicationForm({...applicationForm, partnerType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select partnership type</option>
                        <option value="technology">Technology Partner</option>
                        <option value="consulting">Consulting Partner</option>
                        <option value="implementation">Implementation Partner</option>
                        <option value="solution">Solution Partner</option>
                        <option value="channel">Channel Partner</option>
                        <option value="startup">Startup Partner</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Primary Region *
                      </label>
                      <select
                        id="region"
                        required
                        value={applicationForm.region}
                        onChange={(e) => setApplicationForm({...applicationForm, region: e.target.value})}
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Industry Focus
                      </label>
                      <input
                        type="text"
                        id="industry"
                        value={applicationForm.industry}
                        onChange={(e) => setApplicationForm({...applicationForm, industry: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="e.g., Healthcare, Financial Services, Manufacturing"
                      />
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
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI/Technology Experience *
                    </label>
                    <textarea
                      id="experience"
                      rows={3}
                      required
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your experience with AI, machine learning, or related technologies..."
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
                      value={applicationForm.description}
                      onChange={(e) => setApplicationForm({...applicationForm, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your company, services, and what you bring to the partnership..."
                    />
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Partnership Goals & Motivation *
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      required
                      value={applicationForm.motivation}
                      onChange={(e) => setApplicationForm({...applicationForm, motivation: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="What are your goals for this partnership? How do you plan to leverage Augment AI in your business?"
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

                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    By submitting this application, you agree to our partnership terms and conditions.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your business with AI?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join 800+ partners worldwide who are driving AI innovation and achieving remarkable growth through the Augment PartnerNetwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/find/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Browse Existing Partners
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
