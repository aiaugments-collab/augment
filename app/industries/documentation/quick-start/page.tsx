import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quick Start Guide | Augment AI',
  description: 'Get up and running with Augment AI in 30 minutes. Step-by-step guide with code examples and best practices.',
  keywords: 'quick start, getting started, tutorial, setup guide, AI implementation',
};

export default function QuickStartGuideAugmentAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Quick Start Guide | Augment AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Quick Start Guide | Augment AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Get up and running with Augment AI in 30 minutes. Step-by-step guide with code examples and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Get Started
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#161513] mb-6">Quick Start Guide</h2>
          <p className="text-lg text-gray-700 mb-6">Get up and running with Augment AI in just 30 minutes with this comprehensive guide.</p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 1: Get Your API Key</h3>
              <p className="text-gray-700">Sign up for an account and generate your API key from the dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 2: Install the SDK</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                pip install augment-ai
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 3: Make Your First API Call</h3>
              <p className="text-gray-700">Follow our code examples to integrate AI capabilities into your application.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Start Building Today
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Follow our quick start guide and have AI running in your application within 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}