import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Satisfaction Report | AI Success Metrics | Augment',
  description: '96% customer satisfaction rate with detailed analysis of customer success metrics and feedback from AI implementations.',
  keywords: 'customer satisfaction, AI success metrics, customer feedback, implementation success, customer survey',
};

export default function CustomerSatisfactionReportPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Customer Satisfaction Report</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Customer Satisfaction Report
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            96% customer satisfaction rate with detailed analysis of customer success metrics and feedback.
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
              Satisfaction Metrics
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-gray-600">Overall Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Exceeded Expectations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-600">Implementation Success</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Satisfied Customers
          </h2>
          <p className="text-base text-green-100 mb-8">
            Experience the same level of satisfaction and success with Augment AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
