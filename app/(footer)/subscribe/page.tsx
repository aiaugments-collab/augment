import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Subscribe to Augment Updates | Newsletter Subscription',
  description: 'Stay updated with the latest Augment news, product updates, and AI automation insights. Subscribe to our newsletter and email updates.',
  keywords: 'newsletter subscription, email updates, Augment news, product updates, AI automation insights',
};

export default function SubscribePage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Subscribe Now',
      href: '#subscription-form',
      variant: 'primary' as const
    }
  ];

  // Subscription Options Data
  const subscriptionOptions = [
    {
      id: 'product-updates',
      title: 'Product Updates',
      description: 'Get notified about new features, platform enhancements, and product releases.',
      ctaText: 'Subscribe',
      ctaLink: '#product-updates'
    },
    {
      id: 'company-news',
      title: 'Company News',
      description: 'Stay informed about company announcements, partnerships, and major milestones.',
      ctaText: 'Subscribe',
      ctaLink: '#company-news'
    },
    {
      id: 'industry-insights',
      title: 'Industry Insights',
      description: 'Receive expert analysis, trends, and thought leadership content on AI automation.',
      ctaText: 'Subscribe',
      ctaLink: '#industry-insights'
    },
    {
      id: 'events-webinars',
      title: 'Events & Webinars',
      description: 'Be the first to know about upcoming events, webinars, and training opportunities.',
      ctaText: 'Subscribe',
      ctaLink: '#events-webinars'
    },
    {
      id: 'developer-updates',
      title: 'Developer Updates',
      description: 'Technical updates, API changes, and developer resources for building with Augment.',
      ctaText: 'Subscribe',
      ctaLink: '#developer-updates'
    },
    {
      id: 'customer-stories',
      title: 'Customer Success Stories',
      description: 'Inspiring stories and case studies from customers using Augment\'s AI automation.',
      ctaText: 'Subscribe',
      ctaLink: '#customer-stories'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Subscribe to Augment Updates | Newsletter Subscription</h1>

        {/* Hero Section */}
        <SectionHero
          title="Subscribe to Augment Updates"
          subtitle="Stay informed about AI automation innovations"
          description="Get the latest news, product updates, and insights delivered directly to your inbox. Choose from our curated content streams to receive only what interests you most."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Newsletter and email updates"
        />

        {/* Subscription Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Why Subscribe?
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join thousands of professionals who stay ahead with Augment insights
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Curated Content
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Hand-picked insights and updates relevant to your interests
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Early Access
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Be first to know about new features and product releases
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Personalized
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Choose exactly what content you want to receive
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  No Spam
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Quality over quantity - unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Options */}
        <InfoColumns
          title="Choose Your Subscriptions"
          description="Select the content streams that match your interests and role"
          columns={subscriptionOptions}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Subscription Form */}
        <section id="subscription-form" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Subscribe to Augment Updates
              </h2>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Fill out the form below to customize your subscription preferences
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                </div>

                {/* Subscription Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Subscription Preferences *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                      <div>
                        <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Product Updates</div>
                        <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>New features and platform enhancements</div>
                      </div>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                      <div>
                        <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Company News</div>
                        <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Announcements and company milestones</div>
                      </div>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                      <div>
                        <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Industry Insights</div>
                        <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>AI automation trends and analysis</div>
                      </div>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                      <div>
                        <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Events & Webinars</div>
                        <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Upcoming events and training opportunities</div>
                      </div>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                      <div>
                        <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Developer Updates</div>
                        <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Technical updates and API changes</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Email Frequency
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="frequency" value="weekly" className="h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300" />
                      <span className="text-sm text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Weekly digest</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="frequency" value="monthly" className="h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300" />
                      <span className="text-sm text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Monthly summary</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="frequency" value="immediate" className="h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300" />
                      <span className="text-sm text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Immediate notifications</span>
                    </label>
                  </div>
                </div>

                {/* Privacy Agreement */}
                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1 h-4 w-4 text-[#C74634] focus:ring-[#C74634] border-gray-300 rounded" />
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    I agree to receive email communications from Augment and understand I can unsubscribe at any time. 
                    View our <a href="/legal/privacy/" className="text-[#C74634] hover:underline">Privacy Policy</a>.
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200 text-lg"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Subscribe to Updates
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Privacy & Unsubscribe */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Your Privacy Matters
            </h2>
            <p className="text-base text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              We respect your privacy and will never share your information with third parties. You can update your preferences or unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/legal/privacy/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Privacy Policy
              </a>
              <a
                href="/subscribe/manage/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Manage Subscriptions
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
