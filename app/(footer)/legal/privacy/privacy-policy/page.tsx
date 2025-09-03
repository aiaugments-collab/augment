import { Metadata } from 'next';
import { 
  SectionHero
} from '../../../../../components/sections';

export const metadata: Metadata = {
  title: 'Privacy Policy | Augment Legal',
  description: 'Read Augment\'s comprehensive privacy policy to understand how we collect, use, protect, and share your personal information.',
  keywords: 'privacy policy, data collection, personal information, GDPR, CCPA, data protection, cookies, advertising choices',
};

export default function PrivacyPolicyPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Privacy Choices',
      href: '/legal/privacy/privacy-choices/',
      variant: 'primary' as const
    },
    {
      text: 'Contact Privacy Team',
      href: 'mailto:privacy@augment.com',
      variant: 'secondary' as const
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Privacy Policy | Augment Legal</h1>

        {/* Hero Section */}
        <SectionHero
          title="Privacy Policy"
          subtitle="Effective Date: January 1, 2025"
          description="This Privacy Policy explains how Augment collects, uses, protects, and shares your personal information when you use our services."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Privacy policy and data protection legal documents"
        />

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-2 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                <a href="#information-we-collect" className="text-[#C74634] hover:text-[#A63429] py-1 block">1. Information We Collect</a>
                <a href="#how-we-use-information" className="text-[#C74634] hover:text-[#A63429] py-1 block">2. How We Use Information</a>
                <a href="#information-sharing" className="text-[#C74634] hover:text-[#A63429] py-1 block">3. Information Sharing</a>
                <a href="#data-security" className="text-[#C74634] hover:text-[#A63429] py-1 block">4. Data Security</a>
                <a href="#your-rights" className="text-[#C74634] hover:text-[#A63429] py-1 block">5. Your Privacy Rights</a>
                <a href="#cookies-tracking" className="text-[#C74634] hover:text-[#A63429] py-1 block">6. Cookies and Tracking</a>
                <a href="#adchoices" className="text-[#C74634] hover:text-[#A63429] py-1 block">7. Advertising Choices</a>
                <a href="#international-transfers" className="text-[#C74634] hover:text-[#A63429] py-1 block">8. International Transfers</a>
                <a href="#children-privacy" className="text-[#C74634] hover:text-[#A63429] py-1 block">9. Children's Privacy</a>
                <a href="#changes-to-policy" className="text-[#C74634] hover:text-[#A63429] py-1 block">10. Changes to This Policy</a>
                <a href="#contact-us" className="text-[#C74634] hover:text-[#A63429] py-1 block">11. Contact Us</a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--oraclesans)' }}>
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-base text-gray-700 mb-4">
                  At Augment, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our websites, applications, and services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
                </p>
                <p className="text-base text-gray-700">
                  This policy applies to all users of our Services, including visitors to our websites, customers, and business partners. If you have questions about this Privacy Policy, please contact us at privacy@augment.com.
                </p>
              </div>

              {/* Section 1 */}
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1. Information We Collect
                </h2>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Information You Provide</h3>
                <p className="text-base text-gray-700 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Account information (name, email address, password)</li>
                  <li>Profile information (job title, company, preferences)</li>
                  <li>Contact information when you communicate with us</li>
                  <li>Payment information for paid services</li>
                  <li>Content you create or upload using our Services</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#161513] mb-3">Information We Collect Automatically</h3>
                <p className="text-base text-gray-700 mb-4">
                  When you use our Services, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Device information (type, operating system, browser)</li>
                  <li>Usage information (pages visited, features used, time spent)</li>
                  <li>IP address and approximate location</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log data and error reports</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#161513] mb-3">Information from Third Parties</h3>
                <p className="text-base text-gray-700 mb-6">
                  We may receive information about you from third parties, such as social media platforms when you connect your account, business partners, and data providers who help us improve our Services.
                </p>
              </section>

              {/* Section 2 */}
              <section id="how-we-use-information" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2. How We Use Information
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Providing, maintaining, and improving our Services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Personalizing your experience and content recommendations</li>
                  <li>Communicating with you about our Services and updates</li>
                  <li>Marketing and promotional communications (with your consent)</li>
                  <li>Analyzing usage patterns and improving user experience</li>
                  <li>Protecting against fraud, abuse, and security threats</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  3. Information Sharing
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We may share your information in the following circumstances:
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Service Providers</h3>
                <p className="text-base text-gray-700 mb-4">
                  We share information with third-party service providers who perform services on our behalf, such as payment processing, data analytics, email delivery, and customer support.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Business Partners</h3>
                <p className="text-base text-gray-700 mb-4">
                  With your consent, we may share information with business partners for joint marketing initiatives or to provide integrated services.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Legal Requirements</h3>
                <p className="text-base text-gray-700 mb-4">
                  We may disclose information if required by law, court order, or government request, or to protect the rights, property, or safety of Augment, our users, or others.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Business Transfers</h3>
                <p className="text-base text-gray-700 mb-6">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
                </p>
              </section>

              {/* Section 4 */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  4. Data Security
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and employee training</li>
                  <li>Secure data centers and network infrastructure</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-base text-gray-700 mb-6">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Section 5 */}
              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5. Your Privacy Rights
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Access and Portability</h3>
                <p className="text-base text-gray-700 mb-4">
                  You have the right to request access to your personal information and receive a copy in a structured, commonly used format.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Correction</h3>
                <p className="text-base text-gray-700 mb-4">
                  You have the right to request correction of inaccurate or incomplete personal information.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Deletion</h3>
                <p className="text-base text-gray-700 mb-4">
                  You have the right to request deletion of your personal information, subject to certain legal exceptions.
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Opt-Out</h3>
                <p className="text-base text-gray-700 mb-4">
                  You have the right to opt-out of the sale or sharing of your personal information for advertising purposes.
                </p>
                
                <p className="text-base text-gray-700 mb-6">
                  To exercise these rights, please visit our <a href="/legal/privacy/privacy-choices/" className="text-[#C74634] hover:text-[#A63429]">Privacy Choices</a> page or contact us at privacy@augment.com.
                </p>
              </section>

              {/* Section 6 */}
              <section id="cookies-tracking" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to collect and store information about your use of our Services. These technologies help us:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you interact with our Services</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Analyze usage patterns and improve performance</li>
                  <li>Deliver targeted advertising</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                
                <p className="text-base text-gray-700 mb-6">
                  You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our Services.
                </p>
              </section>

              {/* Section 7 - Ad Choices */}
              <section id="adchoices" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  7. Advertising Choices
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We may use your information to provide you with targeted advertisements that are relevant to your interests. You have choices about the advertisements you receive:
                </p>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Opt-Out Options</h3>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Use our <a href="/legal/privacy/privacy-choices/" className="text-[#C74634] hover:text-[#A63429]">Privacy Choices</a> page to opt-out of targeted advertising</li>
                  <li>Adjust your browser settings to block advertising cookies</li>
                  <li>Use industry opt-out tools from the Digital Advertising Alliance (DAA) or Network Advertising Initiative (NAI)</li>
                  <li>Opt-out of mobile advertising through your device settings</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#161513] mb-3">Third-Party Advertising Partners</h3>
                <p className="text-base text-gray-700 mb-4">
                  We work with third-party advertising partners who may collect information about your activities across different websites and services. These partners include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Google Ads and Google Analytics</li>
                  <li>Facebook/Meta advertising platforms</li>
                  <li>LinkedIn advertising services</li>
                  <li>Other advertising networks and demand-side platforms</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">AdChoices Program</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        We participate in the AdChoices program, which provides you with information about online advertising and choices about the ads you receive. Look for the AdChoices icon on our advertisements to learn more about the data being used and to opt-out.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base text-gray-700 mb-6">
                  Please note that opting out of targeted advertising does not mean you will stop receiving advertisements. You may still see generic advertisements that are not based on your interests.
                </p>
              </section>

              {/* Section 8 */}
              <section id="international-transfers" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  8. International Data Transfers
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  Augment operates globally, and your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
                </p>
                <p className="text-base text-gray-700 mb-4">
                  When we transfer personal information internationally, we implement appropriate safeguards, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>European Commission adequacy decisions</li>
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Binding Corporate Rules</li>
                  <li>Other appropriate transfer mechanisms</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="children-privacy" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  9. Children's Privacy
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
                <p className="text-base text-gray-700 mb-6">
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@augment.com.
                </p>
              </section>

              {/* Section 10 */}
              <section id="changes-to-policy" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will:
                </p>
                <ul className="list-disc pl-6 mb-6 text-base text-gray-700 space-y-1">
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Effective Date" at the top of this policy</li>
                  <li>Notify you by email or through our Services</li>
                  <li>Obtain your consent if required by law</li>
                </ul>
                <p className="text-base text-gray-700 mb-6">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              {/* Section 11 */}
              <section id="contact-us" className="mb-12">
                <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  11. Contact Us
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#161513] mb-3">Privacy Team</h3>
                  <div className="text-base text-gray-700 space-y-2">
                    <p><strong>Email:</strong> privacy@augment.com</p>
                    <p><strong>Phone:</strong> 1-800-AUGMENT (1-800-284-6368)</p>
                    <p><strong>Mail:</strong><br />
                      Augment Privacy Team<br />
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <p className="text-base text-gray-700 mt-6">
                  For data protection inquiries in the European Union, you may also contact our Data Protection Officer at dpo@augment.com.
                </p>
              </section>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Take Control of Your Privacy
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Manage your privacy preferences and exercise your rights with our easy-to-use privacy tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/legal/privacy/privacy-choices/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Manage Privacy Settings
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
