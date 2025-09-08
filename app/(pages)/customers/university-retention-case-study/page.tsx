import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'University Case Study | 28% Better Student Retention | Augment AI',
  description: 'Learn how predictive analytics and personalized learning helped identify at-risk students and improve graduation rates at a major university.',
  keywords: 'education AI, student retention, predictive analytics, higher education, academic success, student outcomes',
};

export default function UniversityRetentionCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">University Case Study | 28% Better Student Retention</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-6">
              Education Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              University Improves Student Retention by 28%
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Learn how predictive analytics and personalized learning helped identify at-risk students and improve graduation rates at a major research university.
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
              Academic Success Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">28%</div>
              <div className="text-gray-600">Better Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">35%</div>
              <div className="text-gray-600">Improved Graduation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">$3.5M</div>
              <div className="text-gray-600">Revenue Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">92%</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Transform Student Success
          </h2>
          <p className="text-base text-teal-100 mb-8">
            Discover how Augment AI can help your educational institution improve student outcomes and institutional effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Education Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors">
              Contact Education Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
