import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Accessibility | Augment Corporate',
  description: 'Augment\'s commitment to digital accessibility and inclusive design. Learn about our accessibility features, policies, and resources.',
  keywords: 'accessibility, inclusive design, WCAG compliance, digital accessibility, assistive technology, accessibility policy',
};

export default function AccessibilityPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Accessibility Features',
      href: '/corporate/accessibility/features/',
      variant: 'primary' as const
    },
    {
      text: 'Report Issue',
      href: '/corporate/accessibility/report/',
      variant: 'secondary' as const
    }
  ];

  // Accessibility Commitments Data
  const accessibilityCommitments = [
    {
      id: 'wcag-compliance',
      title: 'WCAG 2.1 AA Compliance',
      description: 'Our platform meets Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards for digital accessibility.',
      ctaText: 'View compliance',
      ctaLink: '/corporate/accessibility/wcag-compliance/'
    },
    {
      id: 'assistive-technology',
      title: 'Assistive Technology Support',
      description: 'Full compatibility with screen readers, voice recognition software, and other assistive technologies.',
      ctaText: 'Supported technologies',
      ctaLink: '/corporate/accessibility/assistive-technology/'
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive Design Principles',
      description: 'Our design process incorporates accessibility from the ground up, ensuring usability for all users.',
      ctaText: 'Design principles',
      ctaLink: '/corporate/accessibility/inclusive-design/'
    },
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility with logical tab order and visible focus indicators throughout the platform.',
      ctaText: 'Navigation guide',
      ctaLink: '/corporate/accessibility/keyboard-navigation/'
    },
    {
      id: 'color-contrast',
      title: 'Color & Contrast',
      description: 'High contrast ratios and color-blind friendly design ensure content is readable for all users.',
      ctaText: 'Color standards',
      ctaLink: '/corporate/accessibility/color-contrast/'
    },
    {
      id: 'alternative-formats',
      title: 'Alternative Formats',
      description: 'Documentation and content available in multiple formats including large print and audio versions.',
      ctaText: 'Request formats',
      ctaLink: '/corporate/accessibility/alternative-formats/'
    }
  ];

  // Accessibility Resources Data
  const accessibilityResources = [
    {
      title: 'Accessibility Guide',
      description: 'Comprehensive guide to using Augment\'s platform with assistive technologies.',
      href: '/corporate/accessibility/user-guide/',
      buttonText: 'Download guide',
      icon: ''
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Complete list of keyboard shortcuts and navigation commands for efficient platform use.',
      href: '/corporate/accessibility/keyboard-shortcuts/',
      buttonText: 'View shortcuts',
      icon: '⌨️'
    },
    {
      title: 'Training Resources',
      description: 'Accessibility training materials for administrators and end users.',
      href: '/corporate/accessibility/training/',
      buttonText: 'Access training',
      icon: ''
    },
    {
      title: 'Report Accessibility Issue',
      description: 'Found an accessibility barrier? Report it and we\'ll work to resolve it quickly.',
      href: '/corporate/accessibility/report/',
      buttonText: 'Report issue',
      icon: ''
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
          description="At Augment, we believe technology should be accessible to all users, regardless of ability. Discover our commitment to digital accessibility, inclusive design, and creating barrier-free experiences for everyone."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse team using accessible technology"
        />

        {/* Accessibility Statement */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Accessibility Statement
              </h2>
            </div>
            <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--oraclesans)' }}>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Augment is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Our platform is designed to be compatible with assistive technologies and follows Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. We regularly conduct accessibility audits and user testing with people who use assistive technologies to identify and address barriers.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We welcome feedback on the accessibility of our platform and are committed to resolving any issues promptly. If you encounter any accessibility barriers, please contact our accessibility team at <a href="mailto:accessibility@augment.com" className="text-[#C74634] hover:underline">accessibility@augment.com</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Commitments */}
        <InfoColumns
          title="Our Accessibility Commitments"
          description="How we ensure our platform is accessible to all users"
          columns={accessibilityCommitments}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Accessibility Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Built-in Accessibility Features
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our platform includes comprehensive accessibility features designed for users with diverse needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Screen Reader Support
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Full compatibility with JAWS, NVDA, VoiceOver, and other screen reading software.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⌨️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Keyboard Navigation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Complete keyboard accessibility with logical tab order and skip links.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  High Contrast Mode
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Enhanced contrast options for users with visual impairments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Zoom & Magnification
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Support for browser zoom up to 200% without loss of functionality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Voice Recognition
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Compatible with Dragon NaturallySpeaking and other voice control software.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#C74634] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Mobile Accessibility
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Full accessibility support on mobile devices with iOS and Android accessibility features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Standards & Compliance
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We adhere to international accessibility standards and regulations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">WCAG</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  WCAG 2.1 AA
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Web Content Accessibility Guidelines compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">ADA</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  ADA Compliant
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Americans with Disabilities Act compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">508</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Section 508
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Federal accessibility requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">EN</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  EN 301 549
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  European accessibility standard
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Resources */}
        <CTASection
          title="Accessibility Resources"
          description="Tools and resources to help you use Augment's platform effectively"
          actions={accessibilityResources}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Contact & Feedback */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Accessibility Feedback
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              We welcome your feedback on the accessibility of our platform. Help us improve by reporting any barriers you encounter.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Accessibility Team
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>
                    <a href="mailto:accessibility@augment.com" className="hover:text-white transition-colors text-lg font-medium">
                      accessibility@augment.com
                    </a>
                  </div>
                  <div>Response within 2 business days</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Alternative Contact
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>
                    <a href="tel:+18005551234" className="hover:text-white transition-colors text-lg font-medium">
                      +1 (800) 555-1234
                    </a>
                  </div>
                  <div>TTY: +1 (800) 555-5678</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/corporate/accessibility/report/"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Report Accessibility Issue
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
