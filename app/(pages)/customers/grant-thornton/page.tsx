"use client";

import Link from "next/link";

export default function GrantThorntonCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Grant Thornton accelerates audit processes with Augment AI Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold text-sm">GT</span>
                  </div>
                  <span className="text-purple-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Grant Thornton accelerates audit processes with Augment AI Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-purple-100 leading-relaxed mb-8">
                  Global accounting and advisory firm leverages AI-powered analytics to enhance audit accuracy, reduce processing time, and deliver superior client service across international markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-purple-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Audit Intelligence</span>
                  </div>
                  <div className="bg-purple-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Risk Analytics</span>
                  </div>
                  <div className="bg-purple-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Professional Services</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                      <div className="text-sm text-gray-600">Faster Audits</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">130+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 
                  className="text-3xl font-semibold text-gray-900 mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  The Challenge
                </h2>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#C74634",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Grant Thornton, as a leading global accounting and advisory firm, faced increasing complexity in audit processes across diverse industries and regulatory environments. Traditional audit methods were time-intensive, prone to human error, and struggled to keep pace with evolving compliance requirements across 130+ countries.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The firm needed an advanced solution to process vast amounts of financial data, identify anomalies, ensure compliance, and deliver faster, more accurate audit results while maintaining the highest professional standards.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Time-intensive manual audit processes across complex datasets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Risk of human error in critical financial analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Varying compliance requirements across global markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Client demand for faster turnaround and deeper insights
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Firm Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">Accounting & Advisory Services</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">Chicago, Illinois</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Professionals:</span>
                    <span className="text-gray-600 ml-2">62,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Global Presence:</span>
                    <span className="text-gray-600 ml-2">130+ countries</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Annual Revenue:</span>
                    <span className="text-gray-600 ml-2">$6.2+ billion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              The Augment Audit Intelligence Solution
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 48px"
              }}
            />
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Automated Data Analysis</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered analysis of financial data with automated anomaly detection and risk assessment capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Intelligence</h3>
                <p className="text-gray-600 text-sm">
                  Real-time compliance monitoring and validation across multiple regulatory frameworks and jurisdictions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Predictive Risk Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Advanced machine learning models that predict potential risks and provide proactive recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Professional Excellence Enhanced
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 48px"
              }}
            />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">65% Faster Audit Completion</h4>
                      <p className="text-gray-600 text-sm">AI-powered analysis dramatically reduces audit timelines while maintaining quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">90% Accuracy in Risk Detection</h4>
                      <p className="text-gray-600 text-sm">Enhanced accuracy in identifying financial anomalies and compliance issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">40% Cost Reduction</h4>
                      <p className="text-gray-600 text-sm">Significant reduction in audit costs through automated processes and efficiency gains</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Implementation Success</h4>
                      <p className="text-gray-600 text-sm">Successful deployment across 130+ countries with consistent quality standards</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "Augment's AI platform has revolutionized our audit practice. We can now deliver faster, more accurate audits while providing deeper insights to our clients. The technology has enhanced our professional capabilities and allowed us to focus on high-value advisory services. Our clients appreciate both the speed and the enhanced quality of our work."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-800 font-semibold text-sm">SL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Seth Siegel</div>
                    <div className="text-gray-600 text-sm">Global Managing Partner, Grant Thornton</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              AI-Enhanced Service Areas
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 48px"
              }}
            />
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Audit & Assurance</h3>
                <p className="text-gray-600 text-sm">AI-powered financial statement audits with enhanced accuracy and speed</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tax Services</h3>
                <p className="text-gray-600 text-sm">Automated tax compliance and optimization across multiple jurisdictions</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Advisory</h3>
                <p className="text-gray-600 text-sm">Predictive risk assessment and management consulting services</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Advisory</h3>
                <p className="text-gray-600 text-sm">Data-driven strategic consulting and business optimization services</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-semibold mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Elevate Your Professional Services
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 24px"
              }}
            />
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your accounting and advisory practice with Augment's AI platform. Deliver faster, more accurate services while enhancing client value.
            </p>
            <div className="space-x-4">
              <Link 
                href="/book-demo"
                className="inline-block px-8 py-3 text-white font-semibold rounded-md transition-colors duration-300"
                style={{ 
                  backgroundColor: "#C74634",
                  fontFamily: "var(--oraclesans)"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#A63429"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "#C74634"}
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/customers/case-studies"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300"
                style={{ fontFamily: "var(--oraclesans)" }}
              >
                Explore More Cases
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
