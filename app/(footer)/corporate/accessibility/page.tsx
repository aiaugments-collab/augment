import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  FeaturedCards, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Accessibility | Augment Corporate',
  description: 'Learn about Augment\'s commitment to digital accessibility and inclusive design. Find accessibility resources, support information, and ways to provide feedback.',
  keywords: 'accessibility, inclusive design, WCAG compliance, digital accessibility, assistive technology, Augment accessibility',
};

export default function AccessibilityPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Accessibility Feedback',
      href: '#feedback-form',
      variant: 'primary' as const
    },
    {
      text: 'View Guidelines',
      href: '/corporate/accessibility/guidelines/',
      variant: 'secondary' as const
    }
  ];

  // Accessibility Features Data
  const accessibilityFeatures = [
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility with logical tab order, visible focus indicators, and keyboard shortcuts for efficient navigation.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/keyboard-navigation/'
    },
    {
      id: 'screen-reader-support',
      title: 'Screen Reader Support',
      description: 'Optimized for screen readers with proper semantic markup, ARIA labels, and descriptive text for all interactive elements.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/screen-readers/'
    },
    {
      id: 'visual-accessibility',
      title: 'Visual Accessibility',
      description: 'High contrast ratios, scalable text up to 200%, and support for various visual preferences and assistive technologies.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/visual/'
    },
    {
      id: 'cognitive-accessibility',
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, plain language, and features to help users with cognitive disabilities.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/cognitive/'
    },
    {
      id: 'motor-accessibility',
      title: 'Motor Accessibility',
      description: 'Large click targets, customizable interface elements, and support for alternative input methods and assistive devices.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/motor/'
    },
    {
      id: 'hearing-accessibility',
      title: 'Hearing Accessibility',
      description: 'Captions for videos, visual indicators for audio alerts, and text alternatives for audio content.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/accessibility/hearing/'
    }
  ];

  // Compliance Standards Data
  const complianceStandards = [
    {
      id: 'wcag-compliance',
      title: 'WCAG 2.1 AA Compliance',
      description: 'Our products and services meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.',
      ctaText: 'View compliance report',
      ctaLink: '/corporate/accessibility/wcag-compliance/',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'section-508',
      title: 'Section 508 Compliance',
      description: 'We adhere to Section 508 standards to ensure accessibility for federal agencies and government users.',
      ctaText: 'Learn about 508',
      ctaLink: '/corporate/accessibility/section-508/',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ada-compliance',
      title: 'ADA Compliance',
      description: 'Our digital properties comply with Americans with Disabilities Act (ADA) requirements for digital accessibility.',
      ctaText: 'ADA information',
      ctaLink: '/corporate/accessibility/ada-compliance/',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Support Resources Data
  const supportResources = [
    {
      title: 'Accessibility Support',
      description: 'Get help with accessibility features, report issues, or request accommodations for using our products.',
      href: 'mailto:accessibility@augment.com',
      buttonText: 'Contact support',
      icon: '🎧'
    },
    {
      title: 'Accessibility Documentation',
      description: 'Comprehensive guides and documentation for using Augment products with assistive technologies.',
      href: '/corporate/accessibility/documentation/',
      buttonText: 'View docs',
      icon: '📚'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Accessibility | Augment Corporate</h1>

        {/* Hero Section */}
        <SectionHero
          title="Accessibility"
          subtitle="Technology for everyone"
          description="At Augment, we believe technology should be accessible to all users, regardless of their abilities. We are committed to creating inclusive digital experiences that empower everyone to achieve their goals."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse team using accessible technology"
        />

        {/* Our Commitment Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Commitment
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We are dedicated to ensuring our products and services are accessible to users with disabilities
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">♿</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Universal Design
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We design our products from the ground up to be usable by people with the widest range of abilities and disabilities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Continuous Improvement
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We regularly test our products with users with disabilities and continuously improve based on feedback and evolving standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Community Partnership
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We work closely with disability advocacy groups and accessibility experts to ensure we meet real user needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <InfoColumns
          title="Accessibility Features"
          description="Comprehensive accessibility features built into all our products and services"
          columns={accessibilityFeatures}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Compliance Standards */}
        <FeaturedCards
          title="Compliance & Standards"
          description="We adhere to international accessibility standards and regulations"
          cards={complianceStandards}
          columns={3}
          backgroundColor="bg-gray-50"
        />

        {/* Assistive Technology Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Supported Assistive Technologies
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our products are tested and optimized for compatibility with popular assistive technologies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🗣️</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Screen Readers
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  JAWS, NVDA, VoiceOver, TalkBack
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Magnification
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  ZoomText, MAGic, built-in zoom
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⌨️</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Alternative Input
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Switch devices, eye tracking, voice control
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Display Customization
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  High contrast, custom colors, large fonts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <CTASection
          title="Need Help?"
          description="Get support and resources for using Augment products with assistive technologies"
          actions={supportResources}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Feedback Form Section */}
        <section id="feedback-form" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Accessibility Feedback
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Help us improve by sharing your accessibility experience or reporting issues
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="assistive-tech" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Assistive Technology Used (Optional)
                  </label>
                  <input
                    type="text"
                    id="assistive-tech"
                    placeholder="e.g., JAWS, VoiceOver, Dragon, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>
                <div>
                  <label htmlFor="feedback-type" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Feedback Type
                  </label>
                  <select
                    id="feedback-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    <option>Select feedback type</option>
                    <option>Accessibility Issue</option>
                    <option>Feature Request</option>
                    <option>General Feedback</option>
                    <option>Accommodation Request</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Please describe your accessibility experience, issue, or suggestion..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Accessibility Support
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Need immediate accessibility support or have questions about our accessibility features?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@augment.com"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                accessibility@augment.com
              </a>
              <a
                href="tel:1-800-AUGMENT"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                1-800-AUGMENT
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
