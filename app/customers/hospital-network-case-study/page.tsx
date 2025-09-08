import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospital Network Case Study | 35% Better Patient Outcomes | Augment AI',
  description: 'Learn how a major healthcare system enhanced patient care and operational efficiency by 35% through intelligent automation and predictive analytics with Augment AI.',
  keywords: 'hospital case study, healthcare AI, patient outcomes, healthcare automation, medical AI, hospital efficiency',
};

export default function HospitalNetworkCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* SEO */}
      <h1 className="sr-only">Hospital Network Case Study | 35% Better Patient Outcomes</h1>
      
      {/* Hero Section */}
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-6">
              Healthcare Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Hospital Network Improves Patient Outcomes by 35%
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Discover how a major healthcare system enhanced patient care and operational efficiency through intelligent automation and predictive analytics, resulting in better outcomes and reduced costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Demo
              </Link>
              <Link
                href="/corporate/contact/sales"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Clinical Impact & Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                35%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Better Patient Outcomes
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                28%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Reduced Readmissions
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                $3.2M
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Annual Cost Savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                42%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Faster Diagnosis Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              The Healthcare Challenge
            </h2>
            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
              A regional hospital network serving over 500,000 patients annually was facing increasing pressure to improve patient outcomes while managing rising costs and staff shortages. Their traditional systems were creating inefficiencies that impacted both care quality and operational performance.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Critical Issues:
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                <li>• Delayed diagnosis due to manual chart review processes</li>
                <li>• High readmission rates from inadequate discharge planning</li>
                <li>• Inefficient resource allocation and bed management</li>
                <li>• Fragmented patient data across multiple systems</li>
                <li>• Staff burnout from administrative overhead</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            The Augment AI Healthcare Solution
          </h2>
          <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            We implemented a comprehensive AI-powered healthcare platform that enhanced clinical decision-making, optimized operations, and improved patient care coordination across the entire network.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Predictive Analytics
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                AI models analyze patient data to predict complications, readmission risks, and optimal treatment pathways for personalized care plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Clinical Decision Support
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Real-time AI assistance for diagnosis, treatment recommendations, and drug interaction alerts to support clinical decision-making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Resource Optimization
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Intelligent scheduling and resource allocation to optimize bed utilization, staff assignments, and equipment usage across facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Care Coordination
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Automated care coordination workflows that ensure seamless communication between departments and care teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Phased Implementation Approach
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data Integration & Preparation (Months 1-2)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Unified patient data from EMR systems, lab results, imaging, and pharmacy records to create comprehensive patient profiles.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Pilot in Emergency Department (Months 3-4)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Deployed predictive analytics and clinical decision support in the ED to validate effectiveness and refine algorithms.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Network-wide Rollout (Months 5-8)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expanded to all departments across the hospital network with comprehensive training and change management support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Real Patient Impact
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-lg text-gray-700 italic mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
              "The AI system has transformed how we deliver care. We can now identify high-risk patients earlier, prevent complications, and provide more personalized treatment plans. Our patients are healthier, and our staff can focus on what they do best - caring for people."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                Dr
              </div>
              <div>
                <div className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Dr. Maria Rodriguez
                </div>
                <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Chief Medical Officer, Regional Healthcare Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Transform Your Healthcare Operations
          </h2>
          <p className="text-base text-green-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Discover how Augment AI can help your healthcare organization improve patient outcomes while reducing costs and operational complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Schedule Healthcare Demo
            </Link>
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Healthcare Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
