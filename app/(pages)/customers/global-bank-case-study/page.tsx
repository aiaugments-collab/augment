import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Bank Case Study | 75% Faster Loan Processing | Augment AI',
  description: 'Discover how a leading global bank transformed their lending operations with Augment AI, reducing loan processing time from weeks to days with 75% improvement in efficiency.',
  keywords: 'bank case study, loan processing automation, financial AI, banking transformation, lending automation',
};

export default function GlobalBankCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* SEO */}
      <h1 className="sr-only">Global Bank Case Study | 75% Faster Loan Processing</h1>
      
      {/* Hero Section */}
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
              Financial Services Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Global Bank Achieves 75% Faster Loan Processing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              How a leading financial institution transformed their lending operations with AI-powered automation, reducing processing time from weeks to days while improving accuracy and customer satisfaction.
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
              Key Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                75%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Faster Processing Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                92%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Accuracy Improvement
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                $2.4M
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Annual Cost Savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4A90E2] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                45%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Customer Satisfaction Increase
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
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
              A major global bank was struggling with lengthy loan processing times that were impacting customer satisfaction and competitive positioning. Their traditional manual processes required extensive documentation review, credit analysis, and approval workflows that took 3-4 weeks on average.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Key Pain Points:
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                <li>• Manual document processing and verification</li>
                <li>• Inconsistent risk assessment across loan officers</li>
                <li>• Complex approval workflows with multiple touchpoints</li>
                <li>• High operational costs and resource requirements</li>
                <li>• Customer frustration with lengthy wait times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            The Augment AI Solution
          </h2>
          <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            We implemented a comprehensive AI-powered loan processing system that automated document analysis, risk assessment, and approval workflows while maintaining regulatory compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Intelligent Document Processing
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                AI-powered OCR and NLP to automatically extract and verify information from loan applications, financial statements, and supporting documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Automated Risk Assessment
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Machine learning models analyze credit history, financial data, and market conditions to provide consistent, accurate risk scoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Workflow Automation
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Intelligent routing and approval workflows that automatically escalate complex cases while fast-tracking straightforward applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Compliance Monitoring
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Built-in regulatory compliance checks and audit trails to ensure all processes meet banking regulations and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Implementation Journey
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Assessment & Planning (Month 1)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Comprehensive analysis of existing processes, data architecture, and regulatory requirements to design the optimal AI solution.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Pilot Implementation (Months 2-3)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Deployed AI system for personal loans under $50K to validate performance and refine algorithms before full-scale rollout.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Full Deployment (Months 4-6)
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expanded to all loan types including mortgages, business loans, and credit lines with comprehensive staff training and change management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Transform Your Financial Operations
          </h2>
          <p className="text-base text-blue-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            See how Augment AI can help your financial institution achieve similar results with intelligent automation and AI-powered processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Schedule Your Demo
            </Link>
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
