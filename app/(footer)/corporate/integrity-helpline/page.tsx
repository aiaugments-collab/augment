import { Metadata } from 'next';
import { 
  SectionHero, 
  InfoColumns, 
  CTASection 
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Integrity Helpline | Augment Corporate',
  description: 'Report ethics concerns, compliance violations, or misconduct through Augment\'s confidential integrity helpline. We are committed to maintaining the highest ethical standards.',
  keywords: 'integrity helpline, ethics reporting, compliance, misconduct reporting, whistleblower, corporate ethics, Augment integrity',
};

export default function IntegrityHelplinePage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Report Online',
      href: 'https://integrity.augment.com/report',
      variant: 'primary' as const,
      target: '_blank' as const
    },
    {
      text: 'View Ethics Code',
      href: '/corporate/ethics-code/',
      variant: 'secondary' as const
    }
  ];

  // Reporting Methods Data
  const reportingMethods = [
    {
      id: 'online-reporting',
      title: 'Online Reporting Portal',
      description: 'Submit reports 24/7 through our secure, confidential online portal. Available in multiple languages with optional anonymity.',
      ctaText: 'Report online',
      ctaLink: 'https://integrity.augment.com/report'
    },
    {
      id: 'phone-helpline',
      title: 'Phone Helpline',
      description: 'Call our toll-free helpline to speak with trained professionals. Available 24/7 in multiple languages.',
      ctaText: 'Call helpline',
      ctaLink: 'tel:1-800-AUGMENT'
    },
    {
      id: 'email-reporting',
      title: 'Email Reporting',
      description: 'Send detailed reports via secure email. All communications are encrypted and handled confidentially.',
      ctaText: 'Email report',
      ctaLink: 'mailto:integrity@augment.com'
    },
    {
      id: 'mail-reporting',
      title: 'Written Reports',
      description: 'Submit written reports by mail to our corporate compliance office. All correspondence is treated confidentially.',
      ctaText: 'Get address',
      ctaLink: '/corporate/integrity-helpline/mailing-address/'
    },
    {
      id: 'manager-reporting',
      title: 'Direct Supervisor',
      description: 'Report concerns directly to your manager or supervisor if you feel comfortable doing so.',
      ctaText: 'Learn more',
      ctaLink: '/corporate/integrity-helpline/supervisor-reporting/'
    },
    {
      id: 'hr-reporting',
      title: 'Human Resources',
      description: 'Contact HR directly for workplace-related concerns, harassment, or discrimination issues.',
      ctaText: 'Contact HR',
      ctaLink: '/corporate/contact/hr/'
    }
  ];

  // What to Report Data
  const reportableIssues = [
    {
      title: 'Ethics Violations',
      description: 'Conflicts of interest, bribery, corruption, or violations of our code of conduct.',
      href: '/corporate/ethics-code/',
      buttonText: 'View ethics code',
      icon: '️'
    },
    {
      title: 'Legal & Compliance Issues',
      description: 'Regulatory violations, legal misconduct, or non-compliance with laws and regulations.',
      href: '/corporate/compliance/',
      buttonText: 'Learn about compliance',
      icon: ''
    },
    {
      title: 'Workplace Misconduct',
      description: 'Harassment, discrimination, workplace safety issues, or hostile work environment.',
      href: '/corporate/workplace-policies/',
      buttonText: 'View policies',
      icon: ''
    },
    {
      title: 'Financial Irregularities',
      description: 'Accounting fraud, financial misstatement, or misuse of company resources.',
      href: '/corporate/financial-policies/',
      buttonText: 'Financial policies',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Integrity Helpline | Augment Corporate</h1>

        {/* Hero Section */}
        <SectionHero
          title="Integrity Helpline"
          subtitle="Speak up with confidence"
          description="At Augment, we are committed to maintaining the highest standards of integrity and ethics. Our confidential helpline provides multiple ways to report concerns and ensures all reports are handled professionally and confidentially."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Professional business ethics and integrity concept"
        />

        {/* Reporting Methods */}
        <InfoColumns
          title="How to Report"
          description="Multiple confidential channels available 24/7 to report your concerns"
          columns={reportingMethods}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Key Principles Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Commitment to You
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                When you report through our integrity helpline, you can expect these protections and processes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Confidentiality
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  All reports are handled with strict confidentiality. Your identity is protected throughout the process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  No Retaliation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  We strictly prohibit retaliation against anyone who reports concerns in good faith.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thorough Investigation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  All reports are investigated promptly and thoroughly by qualified professionals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  24/7 Availability
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Our helpline is available around the clock, every day of the year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Report */}
        <CTASection
          title="What Should You Report?"
          description="If you witness or suspect any of these issues, please report them through our helpline"
          actions={reportableIssues}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Information Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Contact Information
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Multiple ways to reach our integrity helpline
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Phone Helpline
                </h3>
                <p className="text-gray-300 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  1-800-AUGMENT (1-800-284-6368)
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Available 24/7 in multiple languages
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Online Portal
                </h3>
                <p className="text-gray-300 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  integrity.augment.com/report
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Secure, confidential online reporting
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">️</div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Email
                </h3>
                <p className="text-gray-300 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  integrity@augment.com
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Encrypted email communication
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Can I report anonymously?
                </h3>
                <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Yes, you can choose to remain anonymous when reporting through our online portal or phone helpline. However, providing your contact information may help us investigate more effectively and keep you informed of the progress.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  What happens after I make a report?
                </h3>
                <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  All reports are reviewed by our compliance team within 24 hours. If an investigation is warranted, we will conduct a thorough and impartial investigation. You will receive updates on the progress if you provided contact information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Am I protected from retaliation?
                </h3>
                <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Absolutely. Augment strictly prohibits retaliation against anyone who reports concerns in good faith. Any retaliation will be investigated and may result in disciplinary action up to and including termination.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  What if I'm not sure if something should be reported?
                </h3>
                <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  When in doubt, report it. It's better to raise a concern that turns out to be minor than to let a serious issue go unreported. Our team can help determine the appropriate course of action.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
