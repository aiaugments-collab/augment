import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fintech AI | Augment AI',
  description: 'Build next-generation financial services with cloud-native platforms and embedded AI capabilities.',
};

export default function FintechAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Fintech AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Fintech AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Build next-generation financial services with cloud-native platforms and embedded AI capabilities.
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
          <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Build next-generation financial services with cloud-native platforms and embedded AI capabilities. Our comprehensive AI solutions are designed to meet the unique challenges and opportunities in this area.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#161513] mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced AI technology tailored for fintech</li>
              <li>• Expert support and implementation guidance</li>
              <li>• Proven methodology and best practices</li>
              <li>• Comprehensive training and documentation</li>
              <li>• Ongoing support and optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Learn More?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Contact our team to learn more about fintech ai and how it can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Demo
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