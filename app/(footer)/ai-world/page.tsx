import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment AI World 2025 | Premier AI Automation Conference',
  description: 'Join us at Augment AI World 2025 in Las Vegas. The premier conference for AI automation, featuring industry leaders, product innovations, and networking.',
  keywords: 'AI World, AI conference, automation conference, Las Vegas, AI innovation, enterprise AI, machine learning conference',
};

export default function AIWorldPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Register Now',
      href: '/ai-world/register/',
      variant: 'primary' as const
    },
    {
      text: 'View Agenda',
      href: '/ai-world/agenda/',
      variant: 'secondary' as const
    }
  ];

  // Conference Highlights Data
  const conferenceHighlights = [
    {
      id: 'keynote-sessions',
      title: 'Inspiring Keynote Sessions',
      description: 'Hear from industry visionaries, AI pioneers, and business leaders about the future of intelligent automation.',
      ctaText: 'View speakers',
      ctaLink: '/ai-world/speakers/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'product-innovations',
      title: 'Latest Product Innovations',
      description: 'Be the first to see Augment\'s newest AI automation capabilities and platform enhancements.',
      ctaText: 'Product previews',
      ctaLink: '/ai-world/product-previews/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'hands-on-workshops',
      title: 'Hands-on Workshops',
      description: 'Interactive workshops and training sessions to deepen your AI automation expertise.',
      ctaText: 'Workshop schedule',
      ctaLink: '/ai-world/workshops/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'networking-opportunities',
      title: 'Networking & Community',
      description: 'Connect with peers, partners, and AI automation experts from around the world.',
      ctaText: 'Networking events',
      ctaLink: '/ai-world/networking/',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Conference Tracks Data
  const conferenceTracks = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation Track',
      description: 'Latest breakthroughs in artificial intelligence, machine learning, and generative AI technologies.',
      ctaText: 'View sessions',
      ctaLink: '/ai-world/tracks/ai-innovation/'
    },
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation',
      description: 'Real-world case studies and best practices for implementing AI automation at scale.',
      ctaText: 'Enterprise track',
      ctaLink: '/ai-world/tracks/enterprise-automation/'
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      description: 'Sector-specific AI applications for healthcare, finance, manufacturing, and more.',
      ctaText: 'Industry sessions',
      ctaLink: '/ai-world/tracks/industry-solutions/'
    },
    {
      id: 'developer-platform',
      title: 'Developer Platform',
      description: 'Technical deep-dives, API workshops, and developer tools for building AI solutions.',
      ctaText: 'Developer track',
      ctaLink: '/ai-world/tracks/developer-platform/'
    },
    {
      id: 'future-of-work',
      title: 'Future of Work',
      description: 'How AI automation is transforming jobs, skills, and workplace dynamics.',
      ctaText: 'Future of work',
      ctaLink: '/ai-world/tracks/future-of-work/'
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Governance',
      description: 'Responsible AI development, bias mitigation, and governance frameworks.',
      ctaText: 'Ethics track',
      ctaLink: '/ai-world/tracks/ai-ethics/'
    }
  ];

  // Featured Speakers Data
  const featuredSpeakers = [
    {
      id: 'ceo-keynote',
      title: 'Opening Keynote: The Future of AI Automation',
      description: 'Join our CEO as she shares Augment\'s vision for the next decade of AI automation and its impact on business.',
      ctaText: 'Speaker bio',
      ctaLink: '/ai-world/speakers/ceo-keynote/',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-pioneer-panel',
      title: 'AI Pioneers Panel Discussion',
      description: 'Leading AI researchers and industry experts discuss breakthrough technologies and future possibilities.',
      ctaText: 'Panel details',
      ctaLink: '/ai-world/speakers/ai-pioneers-panel/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'customer-success-stories',
      title: 'Customer Success Stories',
      description: 'Hear directly from customers about their AI automation journeys and transformational results.',
      ctaText: 'Success stories',
      ctaLink: '/ai-world/speakers/customer-stories/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Attendee Testimonials
  const attendeeTestimonials = [
    {
      id: 'testimonial-1',
      quote: 'AI World 2024 was incredible! The insights I gained and connections I made have already transformed how we approach automation in our organization.',
      author: 'Jennifer Martinez',
      title: 'VP of Digital Transformation',
      company: 'Global Manufacturing Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'The hands-on workshops were fantastic. I left with practical knowledge I could immediately apply to our AI automation projects.',
      author: 'David Chen',
      title: 'Chief Technology Officer',
      company: 'FinTech Solutions Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // Conference Information Data
  const conferenceInfo = [
    {
      title: 'Register for AI World 2025',
      description: 'Secure your spot at the premier AI automation conference. Early bird pricing available.',
      href: '/ai-world/register/',
      buttonText: 'Register now',
      icon: '️'
    },
    {
      title: 'Become a Sponsor',
      description: 'Showcase your brand and connect with AI automation leaders through sponsorship opportunities.',
      href: '/ai-world/sponsorship/',
      buttonText: 'Sponsor info',
      icon: ''
    },
    {
      title: 'Call for Speakers',
      description: 'Share your expertise and insights with the AI automation community.',
      href: '/ai-world/call-for-speakers/',
      buttonText: 'Submit proposal',
      icon: ''
    },
    {
      title: 'Travel & Accommodations',
      description: 'Find information about venue, hotels, and travel arrangements for Las Vegas.',
      href: '/ai-world/travel/',
      buttonText: 'Plan your trip',
      icon: '️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment AI World 2025 | Premier AI Automation Conference</h1>

        {/* Hero Section */}
        <SectionHero
          title="AI World 2025"
          subtitle="October 13-16, 2025 • Las Vegas, Nevada"
          description="Join us for the premier AI automation conference where industry leaders, innovators, and practitioners come together to shape the future of intelligent automation. Experience cutting-edge product innovations, inspiring keynotes, and unparalleled networking opportunities."
          ctaButtons={heroButtons}
          backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&crop=faces"
          mediaType="video"
          mediaUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=faces"
          videoThumbnail="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="AI World 2025 conference highlights"
        />

        {/* Conference Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                AI World 2025 by the Numbers
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                The world's largest gathering of AI automation professionals
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5,000+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expected Attendees
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  150+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Speakers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Sessions & Workshops
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries Represented
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Highlights */}
        <FeaturedCards
          title="Conference Highlights"
          description="What makes AI World 2025 the must-attend event for AI automation professionals"
          cards={conferenceHighlights}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Conference Tracks */}
        <InfoColumns
          title="Conference Tracks"
          description="Six specialized tracks covering every aspect of AI automation"
          columns={conferenceTracks}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Featured Speakers */}
        <FeaturedCards
          title="Featured Speakers & Sessions"
          description="Learn from industry leaders and AI automation experts"
          cards={featuredSpeakers}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Conference Schedule */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                4-Day Conference Schedule
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Four days packed with learning, networking, and innovation
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Day 1: Opening & Keynotes
                      </h3>
                      <p className="text-gray-400 text-sm">October 13, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Welcome reception, opening keynote, and product announcements.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Day 2: Technical Deep Dives
                      </h3>
                      <p className="text-gray-400 text-sm">October 14, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Technical sessions, developer workshops, and hands-on labs.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Day 3: Industry Focus
                      </h3>
                      <p className="text-gray-400 text-sm">October 15, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Industry-specific sessions, customer stories, and solution showcases.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Day 4: Future Vision
                      </h3>
                      <p className="text-gray-400 text-sm">October 16, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Future of AI, closing keynote, and networking celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attendee Testimonials */}
        <Testimonials
          title="What Attendees Say"
          testimonials={attendeeTestimonials}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Conference Information */}
        <CTASection
          title="Conference Information"
          description="Everything you need to know about attending AI World 2025"
          actions={conferenceInfo}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Registration CTA */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Don't Miss AI World 2025
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join thousands of AI automation professionals for four days of learning, networking, and innovation in Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events/ai-world-2025"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Register Now - Early Bird Pricing
              </a>
              <a
                href="/events/ai-world-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View Full Agenda
              </a>
            </div>
            <p className="text-sm text-red-200 mt-4" style={{ fontFamily: 'var(--oraclesans)' }}>
              Early bird pricing ends March 31, 2025
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
