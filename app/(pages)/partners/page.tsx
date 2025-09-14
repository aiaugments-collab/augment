import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment PartnerNetwork | Strategic AI Partnerships',
  description: 'Join the Augment PartnerNetwork and grow your business with AI. Connect with technology partners, consulting firms, and implementation specialists worldwide.',
  keywords: 'AI partners, technology partnerships, consulting partners, implementation partners, partner network, AI ecosystem',
};

export default function PartnersPage() {
  const heroButtons = [
    {
      text: 'Become a Partner',
      href: '/partners/join/',
      variant: 'primary' as const
    },
    {
      text: 'Find a Partner',
      href: '/partners/find/',
      variant: 'secondary' as const
    }
  ];

  const partnerTypes = [
    {
      id: 'technology-partners',
      title: 'Technology Partners',
      description: 'Leading technology companies that integrate Augment AI into their platforms and solutions, creating powerful combined offerings.',
      ctaText: 'Technology partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'consulting-partners',
      title: 'Consulting Partners',
      description: 'Strategic consulting firms that help organizations plan, implement, and optimize their AI transformation initiatives.',
      ctaText: 'Consulting partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'implementation-partners',
      title: 'Implementation Partners',
      description: 'System integrators and technical specialists that deploy and customize Augment AI solutions for enterprise customers.',
      ctaText: 'Implementation partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'solution-partners',
      title: 'Solution Partners',
      description: 'Specialized partners that build industry-specific solutions and vertical applications using Augment AI platform.',
      ctaText: 'Solution partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'channel-partners',
      title: 'Channel Partners',
      description: 'Authorized resellers and distributors that bring Augment AI solutions to new markets and customer segments.',
      ctaText: 'Channel partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'startup-partners',
      title: 'Startup Partners',
      description: 'Innovative startups and emerging companies building next-generation AI applications and services.',
      ctaText: 'Startup partners',
      ctaLink: '#',
      image: 'https://images.unsplash.com/photo-1556761175-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const partnerBenefits = [
    {
      id: 'market-expansion',
      title: 'Market Expansion Opportunities',
      description: 'Access new markets, customer segments, and geographic regions through our global partner ecosystem.',
      ctaText: 'Expand markets',
      ctaLink: '#'
    },
    {
      id: 'technical-enablement',
      title: 'Technical Enablement & Support',
      description: 'Comprehensive technical resources, training, and dedicated support to ensure partner success.',
      ctaText: 'Technical support',
      ctaLink: '#'
    },
    {
      id: 'co-marketing',
      title: 'Co-Marketing & Sales Support',
      description: 'Joint marketing programs, sales enablement tools, and co-branded marketing materials.',
      ctaText: 'Marketing support',
      ctaLink: '#'
    },
    {
      id: 'revenue-sharing',
      title: 'Revenue Sharing Programs',
      description: 'Attractive revenue sharing models and incentive programs to maximize partner profitability.',
      ctaText: 'Revenue programs',
      ctaLink: '#'
    },
    {
      id: 'certification',
      title: 'Partner Certification Programs',
      description: 'Industry-recognized certification programs to validate expertise and differentiate in the market.',
      ctaText: 'Get certified',
      ctaLink: '#'
    },
    {
      id: 'exclusive-access',
      title: 'Exclusive Partner Access',
      description: 'Early access to new products, beta programs, and exclusive partner-only resources and events.',
      ctaText: 'Exclusive benefits',
      ctaLink: '#'
    }
  ];

  const partnerPrograms = [
    {
      title: 'Partner Onboarding Program',
      description: 'Comprehensive onboarding process to get new partners up and running quickly with full support.',
      href: '#',
      buttonText: 'Start onboarding',
      icon: ''
    },
    {
      title: 'Joint Go-to-Market Initiative',
      description: 'Collaborative sales and marketing programs to accelerate growth and market penetration.',
      href: '#',
      buttonText: 'Joint GTM',
      icon: ''
    },
    {
      title: 'Innovation Lab Partnership',
      description: 'Collaborate on cutting-edge research and development in our state-of-the-art innovation labs.',
      href: '#',
      buttonText: 'Innovation labs',
        icon: ''
    },
    {
      title: 'Partner Advisory Council',
      description: 'Influence product roadmap and partnership strategy through our exclusive partner advisory council.',
      href: '#',
      buttonText: 'Advisory council',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Augment PartnerNetwork | Strategic AI Partnerships</h1>

        <SectionHero
          title="Augment PartnerNetwork"
          subtitle="Grow your business with AI partnerships"
          description="Join our global ecosystem of technology partners, consulting firms, and implementation specialists. Together, we're building the future of AI and creating unprecedented value for customers worldwide through strategic partnerships."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Global network of AI partners collaborating on innovative solutions and business growth"
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
              <a href="#success" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Success Stories
              </a>
            </div>
          </div>
        </nav>

        <section id="partner-types">
          <FeaturedCards
            title="Partnership opportunities for every business"
            description="Discover the right partnership model for your organization and join our thriving AI ecosystem"
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
                  800+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Global Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  90+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries
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

        <section id="success" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Partner Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear from our partners about their success and growth through the Augment PartnerNetwork
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="Michael Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Michael Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>CEO, TechSolutions Global</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Technology Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "Partnering with Augment has transformed our business. We've seen 400% growth in AI-related revenue and have become the leading AI solutions provider in our market."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Sarah Williams" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Sarah Williams</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Managing Director, ConsultPro</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Consulting Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Augment PartnerNetwork opened doors to Fortune 500 clients we never could have reached alone. The co-marketing support has been invaluable for our growth."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" 
                    alt="David Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>David Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>VP of Partnerships, IntegrateNow</p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Implementation Partner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The technical enablement and certification programs gave our team the expertise needed to deliver world-class AI implementations. Our customer satisfaction scores have never been higher."
                </p>
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Ready to Join Our Partner Network?
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Take the next step in growing your business with AI. Choose how you'd like to engage with the Augment PartnerNetwork.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
            
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Become a Partner
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Join our partner network and start growing your business with AI. Access comprehensive benefits, support, and opportunities.
                </p>
                <a
                  href="/partners/join/"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Apply to Become Partner
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
               
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Find a Partner
                </h3>
                <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Looking for the right partner to help with your AI implementation? Browse our directory of certified partners.
                </p>
                <a
                  href="/partners/find/"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Browse Partner Directory
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to grow together?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join 800+ partners worldwide who are driving AI innovation and achieving remarkable growth through the Augment PartnerNetwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners/join/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Become a Partner
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
