import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Case Study | 99.9% Uptime with Predictive AI | Augment',
  description: 'Learn how predictive maintenance and AI-driven quality control helped a manufacturing company achieve near-zero unplanned downtime and operational excellence.',
  keywords: 'manufacturing AI, predictive maintenance, quality control, manufacturing automation, industrial AI',
};

export default function ManufacturingUptimeCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Manufacturing Case Study | 99.9% Uptime with Predictive AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium mb-6">
              Manufacturing Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Manufacturer Achieves 99.9% Uptime with Predictive AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Discover how predictive maintenance and AI-driven quality control helped a global manufacturer achieve near-zero unplanned downtime and exceptional operational excellence.
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
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Manufacturing Excellence Results
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
              <div className="text-4xl font-bold text-orange-600 mb-2">$4.8M</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600">Quality Improvement</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            The Manufacturing Challenge
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A global automotive parts manufacturer was experiencing frequent unplanned downtime, quality issues, and high maintenance costs across their production facilities. Traditional reactive maintenance approaches were impacting productivity and customer satisfaction.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#161513] mb-4">Key Challenges:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Unexpected equipment failures causing production delays</li>
              <li>• Inconsistent product quality and high defect rates</li>
              <li>• Reactive maintenance leading to costly emergency repairs</li>
              <li>• Limited visibility into equipment performance and health</li>
              <li>• Manual quality inspections missing critical defects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Optimize Your Manufacturing?
          </h2>
          <p className="text-base text-orange-100 mb-8">
            See how Augment AI can help your manufacturing operations achieve similar results with predictive maintenance and intelligent quality control.
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
