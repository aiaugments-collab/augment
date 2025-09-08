import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Success Stories | E-commerce AI Solutions | Augment',
  description: 'Explore how retailers drive growth with personalization, inventory optimization, and customer intelligence. Real retail AI transformations.',
  keywords: 'retail AI, e-commerce automation, personalization, inventory optimization, customer intelligence',
};

export default function RetailCustomersPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Retail Success Stories</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Retail Innovation Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Explore how retailers drive growth with personalization, inventory optimization, and customer intelligence.
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Retail Transformation Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">42%</div>
              <div className="text-gray-600">Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">68%</div>
              <div className="text-gray-600">Customer Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">55%</div>
              <div className="text-gray-600">Customer Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$12M</div>
              <div className="text-gray-600">Additional Revenue</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Transform Your Retail Experience
          </h2>
          <p className="text-base text-purple-100 mb-8">
            Join retailers creating personalized experiences that drive sales and loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Retail Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              Contact Retail Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
