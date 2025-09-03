import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection
} from '../../../../../components/sections';

export const metadata: Metadata = {
  title: 'Privacy Choices | Augment Legal',
  description: 'Manage your privacy preferences and control how Augment uses your personal information. Opt-out of data sales, manage cookies, and customize your privacy settings.',
  keywords: 'privacy choices, opt-out, do not sell my info, privacy settings, cookie preferences, data control, CCPA',
};

export default function PrivacyChoicesPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Manage Preferences',
      href: '#privacy-preferences',
      variant: 'primary' as const
    },
    {
      text: 'Opt-Out Form',
      href: '#opt-out-form',
      variant: 'secondary' as const
    }
  ];

  // Privacy Controls Data
  const privacyControls = [
    {
      id: 'data-sales-opt-out',
      title: 'Opt-Out of Data Sales',
      description: 'Exercise your right to opt-out of the sale or sharing of your personal information for advertising purposes under CCPA and other privacy laws.',
      ctaText: 'Opt out now',
      ctaLink: '#opt-out-form'
    },
    {
      id: 'cookie-preferences',
      title: 'Cookie Preferences',
      description: 'Manage your cookie preferences and control which types of cookies and tracking technologies are used on our websites.',
      ctaText: 'Manage cookies',
      ctaLink: '#cookie-preferences'
    },
    {
      id: 'marketing-communications',
      title: 'Marketing Communications',
      description: 'Control what marketing communications you receive from us, including emails, newsletters, and promotional offers.',
      ctaText: 'Update preferences',
      ctaLink: '#marketing-preferences'
    },
    {
      id: 'personalization-settings',
      title: 'Personalization Settings',
      description: 'Manage how we personalize your experience, including content recommendations and targeted advertising preferences.',
      ctaText: 'Customize settings',
      ctaLink: '#personalization-preferences'
    },
    {
      id: 'data-processing-purposes',
      title: 'Data Processing Purposes',
      description: 'View and control the specific purposes for which we process your personal information, including analytics and research.',
      ctaText: 'Review purposes',
      ctaLink: '#processing-purposes'
    },
    {
      id: 'third-party-sharing',
      title: 'Third-Party Sharing',
      description: 'Control how we share your information with third-party partners, service providers, and advertising networks.',
      ctaText: 'Manage sharing',
      ctaLink: '#third-party-preferences'
    }
  ];

  // Your Rights Actions
  const privacyRightsActions = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we have collected about you in the past 12 months.',
      href: '/legal/privacy/data-requests/#access',
      buttonText: 'Request access',
      icon: '📄'
    },
    {
      title: 'Delete Your Data',
      description: 'Request that we delete your personal information, subject to certain legal exceptions.',
      href: '/legal/privacy/data-requests/#delete',
      buttonText: 'Request deletion',
      icon: '🗑️'
    },
    {
      title: 'Correct Your Data',
      description: 'Request that we correct inaccurate personal information we maintain about you.',
      href: '/legal/privacy/data-requests/#correct',
      buttonText: 'Request correction',
      icon: '✏️'
    },
    {
      title: 'Data Portability',
      description: 'Request a copy of your personal information in a structured, commonly used format.',
      href: '/legal/privacy/data-requests/#portability',
      buttonText: 'Request export',
      icon: '📦'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Privacy Choices | Augment Legal</h1>

        {/* Hero Section */}
        <SectionHero
          title="Privacy Choices"
          subtitle="Your data, your control"
          description="Take control of your privacy with our comprehensive privacy management tools. Customize your privacy settings, opt-out of data sales, and exercise your privacy rights with just a few clicks."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Privacy settings and data control interface"
        />

        {/* Privacy Controls */}
        <InfoColumns
          title="Privacy Controls"
          description="Manage all aspects of your privacy preferences in one place"
          columns={privacyControls}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Quick Opt-Out Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Quick Opt-Out Options
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Fast and easy ways to opt-out of common data practices
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl text-white">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Do Not Sell My Personal Information
                  </h3>
                </div>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Opt-out of the sale or sharing of your personal information for advertising purposes under the California Consumer Privacy Act (CCPA).
                </p>
                <button className="w-full px-4 py-2 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200">
                  Opt-Out of Sales
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl text-white">📧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Unsubscribe from Marketing
                  </h3>
                </div>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Stop receiving marketing emails, newsletters, and promotional communications from Augment.
                </p>
                <button className="w-full px-4 py-2 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200">
                  Unsubscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Rights Actions */}
        <CTASection
          title="Exercise Your Privacy Rights"
          description="Submit requests to access, correct, delete, or export your personal information"
          actions={privacyRightsActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Opt-Out Form Section */}
        <section id="opt-out-form" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Privacy Opt-Out Form
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Use this form to opt-out of data sales or submit other privacy requests
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    State/Province (Optional)
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>
                <div>
                  <label htmlFor="request-type" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Request Type *
                  </label>
                  <select
                    id="request-type"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    <option value="">Select request type</option>
                    <option value="opt-out-sales">Opt-out of data sales</option>
                    <option value="opt-out-marketing">Opt-out of marketing communications</option>
                    <option value="delete-data">Delete my personal information</option>
                    <option value="access-data">Access my personal information</option>
                    <option value="correct-data">Correct my personal information</option>
                    <option value="other">Other privacy request</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additional-info"
                    rows={4}
                    placeholder="Please provide any additional details about your request..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="verify-identity"
                    required
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="verify-identity" className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                    I understand that Augment may need to verify my identity before processing this request, and I consent to reasonable verification measures. *
                  </label>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Privacy Settings Dashboard Section */}
        <section id="privacy-preferences" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Privacy Preferences Dashboard
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Manage all your privacy settings in one convenient location
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data Collection & Usage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Analytics</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Help us improve our services</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Personalization</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Customize your experience</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Third-party Integration</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Share data with partners</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Marketing Communications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Email Newsletters</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Product updates and news</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Promotional Offers</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Special deals and discounts</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900" style={{ fontFamily: 'var(--oraclesans)' }}>Event Invitations</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Webinars and conferences</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C74634]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200">
                Save Preferences
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Need Help with Privacy Settings?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our privacy team is here to help you understand and manage your privacy choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@augment.com"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                privacy@augment.com
              </a>
              <a
                href="/legal/privacy/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Privacy Center
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
