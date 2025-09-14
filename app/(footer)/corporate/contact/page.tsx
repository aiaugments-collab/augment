import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Contact Us | Augment Corporate',
  description: 'Get in touch with Augment. Find contact information for sales, support, partnerships, media inquiries, and general questions.',
  keywords: 'contact Augment, customer support, sales contact, partnerships, media inquiries, help center',
};

export default function ContactPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Contact Sales',
      href: '/corporate/contact/sales/',
      variant: 'primary' as const
    },
    {
      text: 'Get Support',
      href: '/corporate/contact/support/',
      variant: 'secondary' as const
    }
  ];

  // Contact Departments Data
  const contactDepartments = [
    {
      id: 'sales',
      title: 'Sales & Business Development',
      description: 'Connect with our sales team to learn how Augment can transform your business operations.',
      ctaText: 'Contact sales',
      ctaLink: '/corporate/contact/sales/'
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      description: 'Get technical support, account assistance, and help with your Augment platform.',
      ctaText: 'Get support',
      ctaLink: '/corporate/contact/support/'
    },
    {
      id: 'partnerships',
      title: 'Partnerships & Alliances',
      description: 'Explore partnership opportunities and strategic alliances with Augment.',
      ctaText: 'Partner with us',
      ctaLink: '/corporate/contact/partnerships/'
    },
    {
      id: 'media-press',
      title: 'Media & Press Inquiries',
      description: 'Press inquiries, interview requests, and media relations contact information.',
      ctaText: 'Media inquiries',
      ctaLink: '/corporate/contact/media/'
    },
    {
      id: 'careers',
      title: 'Careers & Recruiting',
      description: 'Join our team! Contact our recruiting team about career opportunities at Augment.',
      ctaText: 'View careers',
      ctaLink: '/careers/'
    },
    {
      id: 'legal-compliance',
      title: 'Legal & Compliance',
      description: 'Legal inquiries, compliance questions, and contract-related matters.',
      ctaText: 'Legal contact',
      ctaLink: '/corporate/contact/legal/'
    }
  ];

  // Quick Contact Options Data
  const quickContactOptions = [
    {
      title: 'Schedule a Demo',
      description: 'See Augment\'s AI automation platform in action with a personalized demo.',
      href: '/corporate/contact/demo/',
      buttonText: 'Schedule demo',
      icon: ''
    },
    {
      title: 'Request a Quote',
      description: 'Get pricing information and a customized quote for your organization.',
      href: '/corporate/contact/quote/',
      buttonText: 'Request quote',
      icon: ''
    },
    {
      title: 'Technical Consultation',
      description: 'Speak with our technical experts about your specific automation needs.',
      href: '/corporate/contact/consultation/',
      buttonText: 'Book consultation',
      icon: ''
    },
    {
      title: 'General Inquiry',
      description: 'Have a general question? Contact us and we\'ll connect you with the right team.',
      href: '/corporate/contact/general/',
      buttonText: 'Contact us',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Contact Us | Augment Corporate</h1>

        {/* Hero Section */}
        <SectionHero
          title="Contact Us"
          subtitle="We're here to help"
          description="Get in touch with Augment for sales inquiries, technical support, partnerships, or any questions about our AI automation platform. Our team is ready to assist you."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Customer service and support team"
        />

        {/* Contact Departments */}
        <InfoColumns
          title="How Can We Help?"
          description="Choose the department that best matches your inquiry"
          columns={contactDepartments}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Quick Contact Options */}
        <CTASection
          title="Quick Contact Options"
          description="Fast ways to get the information or assistance you need"
          actions={quickContactOptions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Global Offices */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Offices
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Augment has offices around the world to serve our global customer base
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Headquarters */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Headquarters - San Francisco
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>123 Innovation Drive</div>
                  <div>San Francisco, CA 94105</div>
                  <div>United States</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                  <div>
                    <strong>Email:</strong> info@augment.com
                  </div>
                </div>
              </div>

              {/* New York */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  New York Office
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>456 Business Plaza</div>
                  <div>New York, NY 10001</div>
                  <div>United States</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +1 (555) 987-6543
                  </div>
                  <div>
                    <strong>Email:</strong> ny@augment.com
                  </div>
                </div>
              </div>

              {/* London */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  London Office
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>789 Tech Square</div>
                  <div>London EC2A 4DP</div>
                  <div>United Kingdom</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +44 20 7123 4567
                  </div>
                  <div>
                    <strong>Email:</strong> london@augment.com
                  </div>
                </div>
              </div>

              {/* Berlin */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Berlin Office
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>321 Innovation Straße</div>
                  <div>10115 Berlin</div>
                  <div>Germany</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +49 30 1234 5678
                  </div>
                  <div>
                    <strong>Email:</strong> berlin@augment.com
                  </div>
                </div>
              </div>

              {/* Singapore */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Singapore Office
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>654 Marina Bay</div>
                  <div>Singapore 018956</div>
                  <div>Singapore</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +65 6123 4567
                  </div>
                  <div>
                    <strong>Email:</strong> singapore@augment.com
                  </div>
                </div>
              </div>

              {/* Tokyo */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Tokyo Office
                </h3>
                <div className="space-y-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>987 Tech Tower</div>
                  <div>Shibuya, Tokyo 150-0002</div>
                  <div>Japan</div>
                  <div className="pt-2">
                    <strong>Phone:</strong> +81 3 1234 5678
                  </div>
                  <div>
                    <strong>Email:</strong> tokyo@augment.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Support Hours
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                We're here when you need us with global support coverage
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Sales Support
                </h3>
                <div className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>Monday - Friday</div>
                  <div>8:00 AM - 6:00 PM</div>
                  <div>Local Time (All Regions)</div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Technical Support
                </h3>
                <div className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>24/7 Support Available</div>
                  <div>Critical Issues: Immediate</div>
                  <div>Standard Issues: 4-hour SLA</div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  General Inquiries
                </h3>
                <div className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Response within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Need Immediate Assistance?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              For urgent technical issues or critical business inquiries, contact us immediately.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Emergency Technical Support
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>24/7 Emergency Hotline</div>
                  <a href="tel:+18005551234" className="text-xl font-bold hover:text-white transition-colors">
                    +1 (800) 555-1234
                  </a>
                  <div>
                    <a href="mailto:emergency@augment.com" className="hover:text-white transition-colors">
                      emergency@augment.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Sales & Business Critical
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>Priority Sales Line</div>
                  <a href="tel:+18005555678" className="text-xl font-bold hover:text-white transition-colors">
                    +1 (800) 555-5678
                  </a>
                  <div>
                    <a href="mailto:sales@augment.com" className="hover:text-white transition-colors">
                      sales@augment.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
