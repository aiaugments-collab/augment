import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  Testimonials, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Dev Tour 2025 | Developer Conference Series',
  description: 'Join the Augment Dev Tour 2025 - a global series of developer conferences featuring AI tools, automation APIs, and hands-on coding workshops.',
  keywords: 'developer conference, dev tour, AI APIs, automation tools, developer events, coding workshops, Augment developers',
};

export default function DevTourPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Register for Tour',
      href: 'https://events.augment.com/dev-tour-2025',
      variant: 'primary' as const,
      target: '_blank' as const
    },
    {
      text: 'View Schedule',
      href: '#schedule',
      variant: 'secondary' as const
    }
  ];

  // Tour Locations Data
  const tourLocations = [
    {
      id: 'san-francisco',
      title: 'San Francisco, CA',
      description: 'February 15, 2025 | Moscone Center | AI & Machine Learning Focus | 500+ developers expected',
      ctaText: 'Register SF',
      ctaLink: 'https://events.augment.com/dev-tour-sf',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'new-york',
      title: 'New York, NY',
      description: 'March 8, 2025 | Javits Center | Enterprise APIs & Integration | 600+ developers expected',
      ctaText: 'Register NYC',
      ctaLink: 'https://events.augment.com/dev-tour-nyc',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'austin',
      title: 'Austin, TX',
      description: 'April 12, 2025 | Austin Convention Center | Automation & DevOps | 400+ developers expected',
      ctaText: 'Register Austin',
      ctaLink: 'https://events.augment.com/dev-tour-austin',
      image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'seattle',
      title: 'Seattle, WA',
      description: 'May 17, 2025 | Washington State Convention Center | Cloud & Microservices | 450+ developers expected',
      ctaText: 'Register Seattle',
      ctaLink: 'https://events.augment.com/dev-tour-seattle',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'chicago',
      title: 'Chicago, IL',
      description: 'June 14, 2025 | McCormick Place | Data & Analytics APIs | 500+ developers expected',
      ctaText: 'Register Chicago',
      ctaLink: 'https://events.augment.com/dev-tour-chicago',
      image: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'boston',
      title: 'Boston, MA',
      description: 'July 19, 2025 | Boston Convention Center | Research & Innovation | 350+ developers expected',
      ctaText: 'Register Boston',
      ctaLink: 'https://events.augment.com/dev-tour-boston',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Session Types Data
  const sessionTypes = [
    {
      id: 'keynotes',
      title: 'Keynote Sessions',
      description: 'Industry leaders share insights on the future of AI development, automation trends, and emerging technologies.',
      ctaText: 'View speakers',
      ctaLink: '/dev-tour/speakers/'
    },
    {
      id: 'technical-talks',
      title: 'Technical Deep Dives',
      description: 'In-depth technical sessions covering API design, SDK usage, performance optimization, and best practices.',
      ctaText: 'Browse sessions',
      ctaLink: '/dev-tour/sessions/'
    },
    {
      id: 'hands-on-labs',
      title: 'Hands-on Labs',
      description: 'Interactive coding workshops where you build real applications using Augment APIs and developer tools.',
      ctaText: 'View labs',
      ctaLink: '/dev-tour/labs/'
    },
    {
      id: 'office-hours',
      title: 'Developer Office Hours',
      description: 'One-on-one time with Augment engineers to discuss your projects, get code reviews, and solve challenges.',
      ctaText: 'Book session',
      ctaLink: '/dev-tour/office-hours/'
    },
    {
      id: 'community-sessions',
      title: 'Community Showcase',
      description: 'Developers share their innovative projects, open-source contributions, and creative uses of Augment platforms.',
      ctaText: 'Submit project',
      ctaLink: '/dev-tour/showcase/'
    },
    {
      id: 'networking',
      title: 'Networking Events',
      description: 'Connect with fellow developers, Augment team members, and industry professionals in relaxed social settings.',
      ctaText: 'Learn more',
      ctaLink: '/dev-tour/networking/'
    }
  ];

  // What You'll Learn Data
  const learningTopics = [
    {
      title: 'AI & Machine Learning APIs',
      description: 'Build intelligent applications with our comprehensive AI APIs for natural language processing, computer vision, and predictive analytics.',
      href: '/developer/ai-apis/',
      buttonText: 'Explore AI APIs',
      icon: ''
    },
    {
      title: 'Automation Platform SDKs',
      description: 'Create powerful automation workflows using our SDKs for Python, JavaScript, Java, and other popular programming languages.',
      href: '/developer/automation-sdks/',
      buttonText: 'Download SDKs',
      icon: ''
    }
  ];

  // Developer Testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'The Dev Tour was incredible! The hands-on labs helped me integrate Augment APIs into my project in just one day. The community is amazing.',
      author: 'Alex Chen',
      title: 'Senior Developer',
      company: 'StartupTech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'Best developer conference I\'ve attended. Great mix of technical content, networking, and practical workshops. Already planning to attend next year.',
      author: 'Sarah Rodriguez',
      title: 'Full Stack Developer',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Dev Tour 2025 | Developer Conference Series</h1>

        {/* Hero Section */}
        <SectionHero
          title="Dev Tour 2025"
          subtitle="Code the Future with AI"
          description="Join us for a nationwide tour of developer-focused events featuring the latest in AI APIs, automation tools, and hands-on coding experiences. Six cities, hundreds of developers, endless possibilities."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Developers coding at Dev Tour event"
        />

        {/* Tour Locations */}
        <FeaturedCards
          title="Tour Locations"
          description="Join us in six major tech hubs across the United States"
          cards={tourLocations}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Session Types */}
        <InfoColumns
          title="What to Expect"
          description="Diverse session formats designed for developers at every level"
          columns={sessionTypes}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Tour Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Dev Tour by the Numbers
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join thousands of developers on this nationwide journey
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  6
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Cities
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2800+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Developers Expected
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  60+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Sessions & Labs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  30+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Augment Engineers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <CTASection
          title="What You'll Learn"
          description="Master the tools and technologies shaping the future of development"
          actions={learningTopics}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Testimonials */}
        <Testimonials
          title="Developer Voices"
          description="Hear from developers who attended previous Dev Tour events"
          testimonials={testimonials}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to Join the Tour?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Register for your city or contact us about bringing the Dev Tour to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://events.augment.com/dev-tour-2025"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
              <a
                href="mailto:devtour@augment.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Dev Tour Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
