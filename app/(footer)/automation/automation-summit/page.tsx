 import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  Testimonials, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Automation Summit 2025 | AI & Automation Conference',
  description: 'Join industry leaders at the Augment Automation Summit 2025. Discover the latest in AI automation, intelligent workflows, and digital transformation.',
  keywords: 'automation summit, AI conference, digital transformation, intelligent automation, enterprise automation, Augment events',
};

export default function AutomationSummitPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Register Now',
      href: 'https://events.augment.com/automation-summit-2025',
      variant: 'primary' as const,
      target: '_blank' as const
    },
    {
      text: 'View Agenda',
      href: '#agenda',
      variant: 'secondary' as const
    }
  ];

  // Keynote Speakers Data
  const keynoteSpeakers = [
    {
      id: 'sarah-chen',
      title: 'Dr. Sarah Chen',
      description: 'Chief AI Officer at Augment. Leading expert in enterprise automation and intelligent workflow design.',
      ctaText: 'View bio',
      ctaLink: '/automation-summit/speakers/sarah-chen/',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'marcus-rodriguez',
      title: 'Marcus Rodriguez',
      description: 'VP of Digital Transformation at Fortune 500 company. Pioneer in large-scale automation implementation.',
      ctaText: 'View bio',
      ctaLink: '/automation-summit/speakers/marcus-rodriguez/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'jennifer-kim',
      title: 'Jennifer Kim',
      description: 'Automation Strategist and bestselling author of "The Intelligent Enterprise". Thought leader in AI-driven business transformation.',
      ctaText: 'View bio',
      ctaLink: '/automation-summit/speakers/jennifer-kim/',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Session Tracks Data
  const sessionTracks = [
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation',
      description: 'Large-scale automation strategies, implementation best practices, and ROI optimization for enterprise organizations.',
      ctaText: 'View sessions',
      ctaLink: '/automation-summit/tracks/enterprise/'
    },
    {
      id: 'ai-workflows',
      title: 'AI-Powered Workflows',
      description: 'Intelligent document processing, decision automation, and AI-driven business process optimization.',
      ctaText: 'View sessions',
      ctaLink: '/automation-summit/tracks/ai-workflows/'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Change management, organizational readiness, and cultural transformation for automation success.',
      ctaText: 'View sessions',
      ctaLink: '/automation-summit/tracks/transformation/'
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      description: 'Sector-specific automation use cases in finance, healthcare, manufacturing, and professional services.',
      ctaText: 'View sessions',
      ctaLink: '/automation-summit/tracks/industry/'
    },
    {
      id: 'future-automation',
      title: 'Future of Automation',
      description: 'Emerging trends, next-generation technologies, and the evolution of intelligent automation platforms.',
      ctaText: 'View sessions',
      ctaLink: '/automation-summit/tracks/future/'
    },
    {
      id: 'hands-on-labs',
      title: 'Hands-on Labs',
      description: 'Interactive workshops and practical training sessions with Augment automation tools and platforms.',
      ctaText: 'View labs',
      ctaLink: '/automation-summit/labs/'
    }
  ];

  // Event Details Data
  const eventDetails = [
    {
      title: 'When & Where',
      description: 'March 15-17, 2025 | San Francisco Convention Center | Virtual attendance available',
      href: '/automation-summit/venue/',
      buttonText: 'View venue details',
      icon: ''
    },
    {
      title: 'Registration',
      description: 'Early bird pricing available until February 1st. Group discounts for teams of 5 or more.',
      href: 'https://events.augment.com/automation-summit-2025',
      buttonText: 'Register now',
      icon: '️',
      target: '_blank' as const
    }
  ];

  // Testimonials from Previous Events
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'The Automation Summit provided incredible insights that directly impacted our digital transformation strategy. The networking opportunities were invaluable.',
      author: 'David Thompson',
      title: 'CTO',
      company: 'TechCorp Industries',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'Best automation conference I\'ve attended. The hands-on labs gave me practical skills I could implement immediately at my organization.',
      author: 'Lisa Martinez',
      title: 'Director of Operations',
      company: 'Global Manufacturing Co.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Automation Summit 2025 | AI & Automation Conference</h1>

        {/* Hero Section */}
        <SectionHero
          title="Automation Summit 2025"
          subtitle="The Future of Intelligent Automation"
          description="Join 3,000+ automation leaders, practitioners, and innovators for three days of cutting-edge insights, hands-on learning, and networking at the premier automation conference."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Automation Summit conference hall with attendees"
        />

        {/* Keynote Speakers */}
        <FeaturedCards
          title="Keynote Speakers"
          description="Learn from industry visionaries and automation pioneers"
          cards={keynoteSpeakers}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Session Tracks */}
        <InfoColumns
          title="Session Tracks"
          description="Choose from six specialized tracks designed for different aspects of automation"
          columns={sessionTracks}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Event Highlights Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Event Highlights
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                What to expect at the Automation Summit 2025
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Sessions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  20+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Hands-on Labs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Solution Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  3000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Attendees Expected
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials
          title="What Attendees Say"
          description="Hear from previous summit participants"
          testimonials={testimonials}
          backgroundColor="bg-white"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to join the automation revolution?"
          actions={eventDetails}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Questions About the Summit?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Contact our events team for sponsorship opportunities, group registrations, or general inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:events@augment.com"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Events Team
              </a>
              <a
                href="/corporate/contact/sales"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Sponsorship Info
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
