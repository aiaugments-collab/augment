import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Success Stories | Medical AI Solutions | Augment',
  description: 'See how hospitals, clinics, and healthcare systems improve patient outcomes with intelligent automation. Real healthcare AI case studies.',
  keywords: 'healthcare AI, hospital automation, medical AI, patient outcomes, healthcare efficiency',
};

export default function HealthcareCustomersPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Healthcare Success Stories</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Healthcare Transformation Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            See how hospitals, clinics, and healthcare systems improve patient outcomes with intelligent automation and predictive analytics.
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
              Healthcare Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-gray-600">Better Patient Outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">28%</div>
              <div className="text-gray-600">Reduced Readmissions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-gray-600">Faster Diagnosis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$3.2M</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Transform Your Healthcare Operations
          </h2>
          <p className="text-base text-green-100 mb-8">
            Join leading healthcare organizations that have improved patient care with Augment AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Healthcare Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
              Contact Healthcare Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
