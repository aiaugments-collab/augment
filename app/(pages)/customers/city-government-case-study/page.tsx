import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Case Study | 70% Faster Processing | Augment AI',
  description: 'See how intelligent automation transformed citizen services, improving satisfaction while reducing administrative burden for city government.',
  keywords: 'government AI, citizen services, public sector automation, government efficiency, digital transformation',
};

export default function CityGovernmentCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Government Case Study | 70% Faster Processing</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium mb-6">
              Government Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              City Government Reduces Processing Time by 70%
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              See how intelligent automation transformed citizen services, improving satisfaction while reducing administrative burden and operational costs.
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
              Government Efficiency Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">70%</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">89%</div>
              <div className="text-gray-600">Citizen Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$1.8M</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50%</div>
              <div className="text-gray-600">Reduced Paperwork</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Modernize Your Government Services
          </h2>
          <p className="text-base text-indigo-100 mb-8">
            Learn how Augment AI can help your government organization improve citizen services while reducing costs and administrative burden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Government Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
              Contact Government Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
