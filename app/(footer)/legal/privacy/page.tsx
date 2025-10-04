import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Privacy | Augment Legal',
  description: 'Learn about Augment\'s commitment to privacy, data protection, and your privacy rights. Access our privacy policy, privacy choices, and transparency reports.',
  keywords: 'privacy, data protection, privacy policy, GDPR, CCPA, data privacy, privacy rights, Augment privacy',
};

export default function PrivacyPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Privacy Policy',
      href: '/legal/privacy/privacy-policy/',
      variant: 'primary' as const
    },
    {
      text: 'Privacy Choices',
      href: '/legal/privacy/privacy-choices/',
      variant: 'secondary' as const
    }
  ];

  // Privacy Resources Data
  const privacyResources = [
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Our comprehensive privacy policy explains how we collect, use, protect, and share your personal information.',
      ctaText: 'Read policy',
      ctaLink: '/legal/privacy/privacy-policy/'
    },
    {
      id: 'privacy-choices',
      title: 'Privacy Choices',
      description: 'Manage your privacy preferences, opt-out options, and control how your data is used for advertising and analytics.',
      ctaText: 'Manage choices',
      ctaLink: '/legal/privacy/privacy-choices/'
    },
    {
      id: 'data-requests',
      title: 'Data Requests',
      description: 'Request access to your personal data, request corrections, or ask us to delete your information.',
      ctaText: 'Submit request',
      ctaLink: '/legal/privacy/data-requests/'
    },
    {
      id: 'transparency-report',
      title: 'Transparency Report',
      description: 'Our annual transparency report on government requests, data breaches, and privacy compliance.',
      ctaText: 'View report',
      ctaLink: '/legal/privacy/transparency-report/'
    },
    {
      id: 'cookie-policy',
      title: 'Cookie Policy',
      description: 'Learn about how we use cookies and similar tracking technologies on our websites and services.',
      ctaText: 'Cookie policy',
      ctaLink: '/legal/privacy/cookie-policy/'
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      description: 'Information about how we protect your data when it\'s transferred across international borders.',
      ctaText: 'Learn more',
      ctaLink: '/legal/privacy/international-transfers/'
    }
  ];

  // Your Rights Data
  const privacyRights = [
    {
      title: 'Right to Know',
      description: 'You have the right to know what personal information we collect, use, disclose, and sell about you.',
      href: '/legal/privacy/privacy-policy/#right-to-know',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Right to Delete',
      description: 'You have the right to request that we delete your personal information, subject to certain exceptions.',
      href: '/legal/privacy/data-requests/#delete',
      buttonText: 'Request deletion',
      icon: '️'
    },
    {
      title: 'Right to Opt-Out',
      description: 'You have the right to opt-out of the sale or sharing of your personal information for advertising.',
      href: '/legal/privacy/privacy-choices/#opt-out',
      buttonText: 'Opt out',
      icon: ''
    },
    {
      title: 'Right to Non-Discrimination',
      description: 'We will not discriminate against you for exercising any of your privacy rights under applicable laws.',
      href: '/legal/privacy/privacy-policy/#non-discrimination',
      buttonText: 'View policy',
      icon: '️'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Privacy | Augment Legal</h1>

        {/* Hero Section */}
        <SectionHero
          title="Privacy"
          subtitle="Your privacy is our priority"
          description="At Augment, we are committed to protecting your privacy and giving you control over your personal information. Learn about our privacy practices, your rights, and how we keep your data secure."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Privacy and data protection concept with secure digital elements"
        />

        {/* Privacy Commitment Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Privacy Commitment
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We believe privacy is a fundamental right. Our approach is built on transparency, user control, and strong security practices.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data Protection
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We use industry-leading security measures to protect your personal information from unauthorized access, use, or disclosure.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  User Control
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  You have control over your personal information with easy-to-use privacy settings and clear opt-out mechanisms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Transparency
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We provide clear, understandable information about our data practices and regularly update our privacy policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Resources */}
        <InfoColumns
          title="Privacy Resources"
          description="Access comprehensive information about our privacy practices and your rights"
          columns={privacyResources}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Privacy Principles Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Privacy Principles
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our privacy practices are guided by these fundamental principles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Purpose Limitation
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We only collect and use data for specific, legitimate purposes that we clearly communicate to you.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data Minimization
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We collect only the minimum amount of personal information necessary to provide our services.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Retention Limits
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We retain personal information only as long as necessary for the purposes we collected it.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Accuracy
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We strive to keep personal information accurate, complete, and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Privacy Rights */}
        <CTASection
          title="Your Privacy Rights"
          description="Understand and exercise your rights regarding your personal information"
          actions={privacyRights}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Global Privacy Laws Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Privacy Compliance
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We comply with privacy laws and regulations around the world
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">GDPR</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  European Union
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  General Data Protection Regulation compliance for EU residents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">CCPA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  California
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  California Consumer Privacy Act compliance for California residents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">PIPEDA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Canada
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Personal Information Protection and Electronic Documents Act compliance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">LGPD</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Brazil
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Lei Geral de Proteção de Dados compliance for Brazilian residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Privacy Questions?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Have questions about our privacy practices or need help with your privacy rights? Contact our privacy team.
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
                href="/corporate/contact/sales"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Submit Data Request
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
