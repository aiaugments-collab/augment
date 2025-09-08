import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Success Stories | Industrial AI Solutions | Augment',
  description: 'Learn how manufacturers achieve operational excellence with predictive maintenance and quality control AI. Real manufacturing case studies.',
  keywords: 'manufacturing AI, predictive maintenance, quality control, industrial automation, manufacturing efficiency',
};

export default function ManufacturingCustomersPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Manufacturing Success Stories</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Manufacturing Excellence Cases
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Learn how manufacturers achieve operational excellence with predictive maintenance and quality control AI.
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
              Manufacturing Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Equipment Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600">Reduced Maintenance Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600">Quality Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$4.8M</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Optimize Your Manufacturing
          </h2>
          <p className="text-base text-orange-100 mb-8">
            Join manufacturers achieving operational excellence with Augment AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Manufacturing Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              Contact Manufacturing Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
