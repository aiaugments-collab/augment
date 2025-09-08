import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Network AI Case Study | Augment AI',
  description: 'How a leading healthcare provider reduced patient wait times by 40% and improved diagnostic accuracy by 25% with Augment Health AI.',
};

export default function HealthcareNetworkAICaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Healthcare Network AI Case Study</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Healthcare Network AI Case Study
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            How a leading healthcare provider reduced patient wait times by 40% and improved diagnostic accuracy by 25% with Augment Health AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Book a Demo
            </Link>
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Key Features
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Discover the comprehensive capabilities and benefits designed to drive your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Comprehensive Solution
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                End-to-end capabilities designed to meet your specific needs and requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Expert Support
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Dedicated support from our team of experts to ensure your success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Proven Results
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Track record of delivering measurable results and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#161513] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to get started?
          </h2>
          <p className="text-base text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Take the next step and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 bg-white text-[#161513] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Sales
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#161513] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}