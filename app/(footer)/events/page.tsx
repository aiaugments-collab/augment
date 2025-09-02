import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Events | Conferences, Webinars & Developer Meetups',
  description: 'Discover upcoming Augment events including conferences, webinars, developer meetups, and training sessions. Join the AI and automation community.',
  keywords: 'Augment events, AI conferences, automation webinars, developer meetups, tech events, training sessions',
};

export default function EventsPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Browse All Events',
      href: '#upcoming-events',
      variant: 'primary' as const
    },
    {
      text: 'Subscribe to Updates',
      href: '/subscribe/',
      variant: 'secondary' as const
    }
  ];

  // Featured Upcoming Events
  const featuredEvents = [
    {
      id: 'automation-summit-2025',
      title: 'Automation Summit 2025',
      description: 'March 15-17, 2025 | San Francisco | The premier automation conference with 3,000+ attendees and 50+ sessions.',
      ctaText: 'Register now',
      ctaLink: '/automation/automation-summit/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'dev-tour-sf',
      title: 'Dev Tour - San Francisco',
      description: 'February 15, 2025 | Moscone Center | AI & ML focus for developers. Hands-on labs and technical deep dives.',
      ctaText: 'Join Dev Tour',
      ctaLink: '/developer/dev-tour/',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-world-2025',
      title: 'Augment AI World 2025',
      description: 'September 20-22, 2025 | Las Vegas | The largest AI conference featuring breakthrough innovations and industry leaders.',
      ctaText: 'Learn more',
      ctaLink: '/ai-world/',
      image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Event Categories
  const eventCategories = [
    {
      id: 'conferences',
      title: 'Conferences & Summits',
      description: 'Large-scale events featuring keynotes, technical sessions, networking, and hands-on learning opportunities.',
      ctaText: 'View conferences',
      ctaLink: '/events/conferences/'
    },
    {
      id: 'webinars',
      title: 'Webinars & Virtual Events',
      description: 'Online sessions covering product updates, technical tutorials, and industry insights. Join from anywhere.',
      ctaText: 'Browse webinars',
      ctaLink: '/events/webinars/'
    },
    {
      id: 'developer-meetups',
      title: 'Developer Meetups',
      description: 'Local community gatherings for developers to share knowledge, network, and learn about Augment technologies.',
      ctaText: 'Find meetups',
      ctaLink: '/events/meetups/'
    },
    {
      id: 'training-workshops',
      title: 'Training & Workshops',
      description: 'Intensive learning sessions and certification programs for Augment platforms and best practices.',
      ctaText: 'View training',
      ctaLink: '/events/training/'
    },
    {
      id: 'partner-events',
      title: 'Partner Events',
      description: 'Joint events with technology partners, industry associations, and ecosystem collaborators.',
      ctaText: 'Partner events',
      ctaLink: '/events/partners/'
    },
    {
      id: 'user-groups',
      title: 'User Groups',
      description: 'Regular meetings of Augment users to share experiences, best practices, and feature feedback.',
      ctaText: 'Join user groups',
      ctaLink: '/events/user-groups/'
    }
  ];

  // Event Resources
  const eventResources = [
    {
      title: 'Event Calendar',
      description: 'View all upcoming events in an interactive calendar format. Filter by type, location, and topic.',
      href: '/events/calendar/',
      buttonText: 'View calendar',
      icon: '📅'
    },
    {
      title: 'Host an Event',
      description: 'Interested in hosting an Augment event in your city? Learn about our community event program.',
      href: '/events/host/',
      buttonText: 'Host event',
      icon: '🎯'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Events | Conferences, Webinars & Developer Meetups</h1>

        {/* Hero Section */}
        <SectionHero
          title="Augment Events"
          subtitle="Connect, Learn, and Innovate"
          description="Join the global Augment community at conferences, webinars, meetups, and training events. Stay ahead of the latest in AI and automation technology."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Augment community event with attendees networking"
        />

        {/* Featured Upcoming Events */}
        <FeaturedCards
          title="Featured Upcoming Events"
          description="Don't miss these signature events from the Augment community"
          cards={featuredEvents}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Event Categories */}
        <InfoColumns
          title="Event Types"
          description="Find the right type of event for your learning and networking goals"
          columns={eventCategories}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Event Search Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Find Events Near You
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
                Search for events by location, date, or topic to find the perfect learning opportunity
              </p>
            </div>
            
            {/* Search Interface */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Location
                    </label>
                    <select 
                      id="location"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      <option>All Locations</option>
                      <option>San Francisco, CA</option>
                      <option>New York, NY</option>
                      <option>Austin, TX</option>
                      <option>Seattle, WA</option>
                      <option>Chicago, IL</option>
                      <option>Boston, MA</option>
                      <option>Virtual</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Event Type
                    </label>
                    <select 
                      id="event-type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      <option>All Types</option>
                      <option>Conferences</option>
                      <option>Webinars</option>
                      <option>Meetups</option>
                      <option>Training</option>
                      <option>Workshops</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Topic
                    </label>
                    <select 
                      id="topic"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      <option>All Topics</option>
                      <option>AI & Machine Learning</option>
                      <option>Automation</option>
                      <option>Developer Tools</option>
                      <option>Enterprise Solutions</option>
                      <option>Data & Analytics</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button 
                    className="px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Search Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Event Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join a thriving global community of AI and automation enthusiasts
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  150+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Events Annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Annual Attendees
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Speakers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Resources */}
        <CTASection
          title="Event Resources"
          description="Tools and information to help you make the most of Augment events"
          actions={eventResources}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Newsletter Signup Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Stay Updated on Events
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Subscribe to our events newsletter and never miss an opportunity to connect with the Augment community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
              <button 
                className="px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-red-200 mt-4" style={{ fontFamily: 'var(--oraclesans)' }}>
              By subscribing, you agree to receive event updates and can unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
