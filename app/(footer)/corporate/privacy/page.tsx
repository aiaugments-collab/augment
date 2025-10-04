'use client';
import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function CorporatePrivacyPage() {
  const heroButtons = [
    {
      text: 'View Full Privacy Policy',
      href: '/legal/privacy',
      variant: 'primary' as const
    },
    {
      text: 'Contact Legal Team',
      href: '/corporate/contact/sales',
      variant: 'secondary' as const
    }
  ];

  const privacyHighlights = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      description: 'We implement industry-leading security measures to protect your personal and business data.',
      ctaText: 'Learn more',
      ctaLink: '/legal/privacy',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'transparency',
      title: 'Transparency',
      description: 'Clear and straightforward privacy practices with no hidden data collection or usage.',
      ctaText: 'Read policy',
      ctaLink: '/legal/privacy',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      description: 'Full compliance with GDPR, CCPA, and other international privacy regulations.',
      ctaText: 'View compliance',
      ctaLink: '/legal/privacy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const privacyPrinciples = [
    {
      title: 'Data Minimization',
      description: 'We only collect data that is necessary for providing our services and improving user experience.',
      icon: '🔒'
    },
    {
      title: 'Purpose Limitation',
      description: 'Your data is used only for the specific purposes for which it was collected.',
      icon: '🎯'
    },
    {
      title: 'User Control',
      description: 'You have full control over your data, including the right to access, modify, or delete it.',
      icon: '⚙️'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures protect your data at rest and in transit.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Corporate Privacy"
        subtitle="Your privacy is our priority"
        description="Learn about our commitment to protecting your data and maintaining transparency in all our privacy practices."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      />

      {/* Privacy Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy at Augment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe privacy is a fundamental right. Our privacy practices are designed to give you control over your data while enabling us to provide exceptional AI services.
            </p>
          </div>
          <FeaturedCards cards={privacyHighlights} />
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we handle your data across all our products and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Data Rights
            </h2>
            <p className="text-lg text-gray-600">
              You have comprehensive rights regarding your personal data. Here's what you can do:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Portability</h3>
              <p className="text-gray-600 mb-4">
                Request a copy of all personal data we have about you in a portable format.
              </p>
              <a href="/legal/privacy" className="text-[#C74634] hover:text-[#A63429] font-medium">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction & Updates</h3>
              <p className="text-gray-600 mb-4">
                Update or correct any inaccurate personal information we have on file.
              </p>
              <a href="/legal/privacy" className="text-[#C74634] hover:text-[#A63429] font-medium">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
              <p className="text-gray-600 mb-4">
                Request deletion of your personal data, subject to legal and contractual obligations.
              </p>
              <a href="/legal/privacy" className="text-[#C74634] hover:text-[#A63429] font-medium">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Opt-Out</h3>
              <p className="text-gray-600 mb-4">
                Control how your data is used for marketing and analytics purposes.
              </p>
              <a href="/legal/privacy" className="text-[#C74634] hover:text-[#A63429] font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <CTASection
        title="Questions About Privacy?"
        description="Our privacy team is here to help with any questions or concerns about how we handle your data."
        actions={[
          {
            title: 'Contact Privacy Team',
            href: '/corporate/contact/sales',
            buttonText: 'Contact Privacy Team'
          },
          {
            title: 'Read Full Policy',
            href: '/legal/privacy',
            buttonText: 'Read Full Policy'
          }
        ]}
      />
    </div>
  );
}
