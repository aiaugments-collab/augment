import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Getting Started | Augment AI Documentation',
  description: 'Step-by-step guides to help you quickly implement AI solutions in your industry with best practices and proven methodologies.',
  keywords: 'getting started, AI implementation, setup guide, tutorial, best practices',
};

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Getting Started | Augment AI Documentation</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Getting Started Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Step-by-step guides to help you quickly implement AI solutions in your industry with best practices and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Start Tutorial
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Get Support
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Implementation Steps
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2">Account Setup</h3>
                  <p className="text-gray-700">Create your Augment AI account and configure your organization settings.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2">API Integration</h3>
                  <p className="text-gray-700">Integrate Augment AI APIs into your existing systems and workflows.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2">Data Preparation</h3>
                  <p className="text-gray-700">Prepare and format your data for optimal AI model performance.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2">Testing & Deployment</h3>
                  <p className="text-gray-700">Test your implementation and deploy to production with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Follow our comprehensive getting started guide and implement AI in your organization today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Begin Implementation
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
