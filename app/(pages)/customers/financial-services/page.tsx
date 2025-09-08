import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Financial Services Success Stories | Banking AI Solutions | Augment',
  description: 'Discover how banks, insurance companies, and fintech firms transform operations with AI automation. Real case studies and measurable results.',
  keywords: 'financial services AI, banking automation, fintech solutions, insurance AI, financial transformation',
};

export default function FinancialServicesCustomersPage() {
  const caseStudies = [
    {
      title: 'Global Bank Achieves 75% Faster Loan Processing',
      description: 'AI-powered automation reduces processing time from weeks to days',
      results: ['75% faster processing', '92% accuracy improvement', '$2.4M annual savings'],
      link: '/customers/global-bank-case-study'
    },
    {
      title: 'Insurance Company Automates Claims Processing',
      description: 'Intelligent document processing and fraud detection',
      results: ['60% faster claims', '40% fraud reduction', '$1.8M cost savings'],
      link: '/book-demo'
    },
    {
      title: 'Credit Union Enhances Member Experience',
      description: 'Personalized financial services and automated workflows',
      results: ['85% member satisfaction', '50% operational efficiency', '30% cost reduction'],
      link: '/book-demo'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Financial Services Success Stories</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Financial Services Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Discover how banks, insurance companies, and fintech firms transform operations with AI automation, achieving remarkable results in efficiency, compliance, and customer satisfaction.
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
              Industry Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-gray-600">Process Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Compliance Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-12 text-center" style={{ fontFamily: 'var(--oracleserif)' }}>
            Featured Case Studies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {study.title}
                </h3>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {study.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
                <Link href={study.link} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Join leading financial institutions that have transformed their operations with Augment AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Financial Services Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Financial Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
