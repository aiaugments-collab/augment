import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Operational Efficiency Study | AI Automation Impact | Augment',
  description: 'Comprehensive analysis of operational efficiency gains through intelligent automation and process optimization across industries.',
  keywords: 'operational efficiency, automation study, process optimization, AI impact, business efficiency',
};

export default function EfficiencyStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Operational Efficiency Study</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Operational Efficiency Study
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Comprehensive analysis of operational efficiency gains through intelligent automation and process optimization.
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
              Key Efficiency Findings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2">65%</div>
              <div className="text-gray-600">Average Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2">45%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2">80%</div>
              <div className="text-gray-600">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2">90</div>
              <div className="text-gray-600">Days to Results</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Study Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
            Our comprehensive efficiency study analyzed over 500 implementations across various industries to understand the impact of AI automation on operational performance.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
              Study Methodology:
            </h3>
            <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
              <li>• Analysis of 500+ AI automation implementations</li>
              <li>• 18-month performance tracking across industries</li>
              <li>• Quantitative measurement of key efficiency metrics</li>
              <li>• Comparison of pre and post-implementation performance</li>
              <li>• Industry-specific efficiency benchmarking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Achieve Similar Efficiency Gains
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Discover how your organization can achieve similar operational efficiency improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
