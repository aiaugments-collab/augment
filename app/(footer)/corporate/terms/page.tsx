'use client';
import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function CorporateTermsPage() {
  const heroButtons = [
    {
      text: 'View Terms of Service',
      href: '#terms-content',
      variant: 'primary' as const
    },
    {
      text: 'Contact Legal Team',
      href: '/corporate/contact/sales',
      variant: 'secondary' as const
    }
  ];

  const termsHighlights = [
    {
      id: 'service-terms',
      title: 'Service Terms',
      description: 'Clear guidelines on how to use our AI platform and services responsibly and effectively.',
      ctaText: 'Read terms',
      ctaLink: '#service-terms',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      description: 'Your obligations and responsibilities when using Augment AI services and platform.',
      ctaText: 'Learn more',
      ctaLink: '#user-responsibilities',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'Information about intellectual property rights, licensing, and usage permissions.',
      ctaText: 'View details',
      ctaLink: '#intellectual-property',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Terms of Service"
        subtitle="Rules and guidelines for using our services"
        description="Our terms of service outline the rules and guidelines for using Augment AI services. Please read them carefully to understand your rights and responsibilities."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      />

      {/* Terms Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Terms Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our terms helps ensure a smooth and compliant experience with our AI platform and services.
            </p>
          </div>
          <FeaturedCards cards={termsHighlights} />
        </div>
      </section>

      {/* Terms Content */}
      <section id="terms-content" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 id="service-terms" className="text-2xl font-bold text-gray-900 mb-6">
              1. Service Terms
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                By accessing and using Augment AI services, you agree to comply with these terms of service. Our AI platform is designed to help businesses and individuals leverage artificial intelligence for various applications.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Services are provided "as is" with continuous improvements</li>
                <li>We reserve the right to modify services with appropriate notice</li>
                <li>Service availability may vary based on your subscription plan</li>
                <li>Technical support is provided according to your service level agreement</li>
              </ul>
            </div>

            <h2 id="user-responsibilities" className="text-2xl font-bold text-gray-900 mb-6">
              2. User Responsibilities
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                As a user of our services, you have certain responsibilities to ensure proper and ethical use of our AI platform.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use services in compliance with applicable laws and regulations</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Do not attempt to reverse engineer or compromise our systems</li>
                <li>Report any security vulnerabilities or misuse to our team</li>
                <li>Respect intellectual property rights of Augment and third parties</li>
              </ul>
            </div>

            <h2 id="intellectual-property" className="text-2xl font-bold text-gray-900 mb-6">
              3. Intellectual Property
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                Intellectual property rights are important to both Augment and our users. Here's how we handle IP matters:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Augment retains ownership of our AI models, algorithms, and platform technology</li>
                <li>You retain ownership of your data and content processed through our services</li>
                <li>We may use aggregated, anonymized data to improve our services</li>
                <li>Third-party integrations are subject to their respective terms and licenses</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              4. Privacy and Data Protection
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our privacy policy for detailed information about how we collect, use, and protect your data.
              </p>
              <a href="/legal/privacy" className="text-[#C74634] hover:text-[#A63429] font-medium">
                View Privacy Policy →
              </a>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5. Limitation of Liability
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                While we strive to provide reliable services, there are certain limitations to our liability:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Services are provided without warranties of any kind</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our liability is limited to the amount paid for services in the preceding 12 months</li>
                <li>Users are responsible for backing up their data and content</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              6. Termination
            </h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                Either party may terminate the service agreement under certain conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>We may suspend or terminate accounts for violations of these terms</li>
                <li>Upon termination, you retain access to your data for a reasonable period</li>
                <li>Certain provisions of these terms survive termination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <CTASection
        title="Questions About Our Terms?"
        description="Our legal team is available to help clarify any aspects of our terms of service."
        actions={[
          {
            title: 'Contact Legal Team',
            href: '/corporate/contact/sales',
            buttonText: 'Contact Legal Team'
          },
          {
            title: 'View Privacy Policy',
            href: '/legal/privacy',
            buttonText: 'View Privacy Policy'
          }
        ]}
      />
    </div>
  );
}
