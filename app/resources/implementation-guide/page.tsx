import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Implementation Guide | Best Practices | Augment',
  description: 'Comprehensive guide to successful AI implementation with best practices, timelines, and proven methodologies.',
  keywords: 'AI implementation, implementation guide, best practices, AI deployment, automation implementation',
};

export default function ImplementationGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">AI Implementation Guide</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            AI Implementation Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Comprehensive guide to successful AI implementation with best practices, timelines, and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Schedule Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Implementation Framework
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our proven 4-phase implementation methodology ensures successful AI deployment with measurable results.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Phase 1: Assessment & Planning</h3>
              <p className="text-gray-700">Comprehensive analysis of business needs and AI opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Phase 2: Pilot Implementation</h3>
              <p className="text-gray-700">Controlled deployment to validate performance and refine approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Phase 3: Full Deployment</h3>
              <p className="text-gray-700">Enterprise-wide rollout with training and change management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Phase 4: Optimization</h3>
              <p className="text-gray-700">Continuous monitoring and optimization for sustained value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Start Your AI Implementation
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Get expert guidance for your AI implementation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Implementation Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
