"use client";

import Link from "next/link";

export default function AmazonCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Augment AI Agent lightens the workload for Amazon clinicians</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://logo.clearbit.com/amazon.com" 
                    alt="Amazon logo" 
                    className="h-12 w-auto mr-4 bg-white p-2 rounded"
                  />
                  <span className="text-orange-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Augment AI Agent lightens the workload for Amazon clinicians
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-orange-100 leading-relaxed mb-8">
                  Intelligent automation records key elements of business interactions, simplifying workflow and improving operational quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">AI Automation</span>
                  </div>
                  <div className="bg-orange-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Workflow Optimization</span>
                  </div>
                  <div className="bg-orange-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Healthcare Technology</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                      <div className="text-sm text-gray-600">Time Savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">AI Assistance</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                      <div className="text-sm text-gray-600">Workload Reduction</div>
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
                  Amazon's healthcare division faced significant challenges with clinical documentation and workflow management. Healthcare professionals were spending excessive time on administrative tasks, reducing the time available for patient care and strategic initiatives.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The manual documentation process was not only time-consuming but also prone to errors, creating compliance risks and impacting the quality of care delivery across Amazon's healthcare facilities.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Excessive time spent on manual documentation tasks
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    High error rates in clinical record keeping
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Reduced time available for patient-focused activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Compliance and audit trail challenges
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">E-commerce & Healthcare</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">Seattle, Washington</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Employees:</span>
                    <span className="text-gray-600 ml-2">1.5+ million</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Healthcare Division:</span>
                    <span className="text-gray-600 ml-2">Amazon Care, Pharmacy</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Annual Revenue:</span>
                    <span className="text-gray-600 ml-2">$500+ billion</span>
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
              The Augment AI Agent Solution
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
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Intelligent Documentation</h3>
                <p className="text-gray-600 text-sm">
                  AI agent automatically captures and documents key interaction elements, reducing manual entry by 80%.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Built-in validation and compliance checks ensure accuracy and adherence to healthcare standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Workflow Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamless integration with existing healthcare systems and workflows for minimal disruption.
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
              Remarkable Outcomes
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
                      <h4 className="font-semibold text-gray-900">80% Time Savings</h4>
                      <p className="text-gray-600 text-sm">Clinicians save 4+ hours daily on documentation tasks, allowing more patient focus</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">95% Accuracy Rate</h4>
                      <p className="text-gray-600 text-sm">AI-powered documentation achieves near-perfect accuracy in clinical records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">65% Workload Reduction</h4>
                      <p className="text-gray-600 text-sm">Overall administrative burden significantly decreased across all healthcare teams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 AI Assistance</h4>
                      <p className="text-gray-600 text-sm">Round-the-clock intelligent support for all clinical documentation needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "The Augment AI Agent has been a game-changer for our healthcare operations. Our clinicians can now focus on what they do best—caring for patients—while the AI handles the complex documentation seamlessly. The accuracy and efficiency gains have exceeded our expectations, and our staff satisfaction has improved dramatically."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-800 font-semibold text-sm">DM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Maria Rodriguez</div>
                    <div className="text-gray-600 text-sm">Chief Medical Officer, Amazon Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Measurable Impact
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 48px"
              }}
            />
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-2">4.2hrs</div>
                <div className="text-sm text-gray-600 font-medium">Daily Time Saved</div>
                <div className="text-xs text-gray-500 mt-1">Per clinician</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-green-600 mb-2">99.2%</div>
                <div className="text-sm text-gray-600 font-medium">Staff Satisfaction</div>
                <div className="text-xs text-gray-500 mt-1">Post-implementation</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
                <div className="text-sm text-gray-600 font-medium">Annual Savings</div>
                <div className="text-xs text-gray-500 mt-1">Operational costs</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Compliance Rate</div>
                <div className="text-xs text-gray-500 mt-1">Healthcare standards</div>
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
              Transform Your Healthcare Operations
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
              Discover how Augment's AI Agent can revolutionize your healthcare workflows. Reduce administrative burden and improve patient care quality.
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
                Schedule Demo
              </Link>
              <Link 
                href="/customers/case-studies"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300"
                style={{ fontFamily: "var(--oraclesans)" }}
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
