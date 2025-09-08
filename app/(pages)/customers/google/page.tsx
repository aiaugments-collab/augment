"use client";

import Link from "next/link";

export default function GoogleCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Google gains trusted insights with Augment AI Analytics Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="/google.svg" 
                    alt="Google logo" 
                    className="h-12 w-auto mr-4 bg-white p-2 rounded"
                  />
                  <span className="text-green-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Google gains trusted insights with Augment AI Analytics Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-green-100 leading-relaxed mb-8">
                  Analytics service helps technology company make faster, more reliable business decisions across operations in more than 100 countries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-green-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">AI Analytics</span>
                  </div>
                  <div className="bg-green-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Data Intelligence</span>
                  </div>
                  <div className="bg-green-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Global Operations</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                      <div className="text-sm text-gray-600">Faster Insights</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                      <div className="text-sm text-gray-600">Decision Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
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
                  Google's massive global operations generate petabytes of data daily across more than 100 countries. The company needed a sophisticated analytics platform that could process this enormous volume of information and provide actionable insights for strategic decision-making.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional analytics tools couldn't handle the scale and complexity of Google's data ecosystem, leading to delayed insights and missed opportunities for optimization across their diverse product portfolio.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Massive data volumes requiring real-time processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Complex multi-regional operations and compliance requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Need for predictive analytics across diverse product lines
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Requirement for trusted, accurate insights for critical decisions
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">Technology & Internet Services</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">Mountain View, California</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Employees:</span>
                    <span className="text-gray-600 ml-2">180,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Global Presence:</span>
                    <span className="text-gray-600 ml-2">100+ countries</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Daily Users:</span>
                    <span className="text-gray-600 ml-2">4+ billion</span>
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
              The Augment AI Analytics Solution
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Processing</h3>
                <p className="text-gray-600 text-sm">
                  Advanced AI algorithms process petabytes of data in real-time, providing instant insights across all Google services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Machine learning models predict trends and opportunities, enabling proactive decision-making across global operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure & Compliant</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade security and compliance features ensure data protection across all global jurisdictions.
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
              Transformative Results
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
                      <h4 className="font-semibold text-gray-900">70% Faster Insights</h4>
                      <p className="text-gray-600 text-sm">Analytics processing time reduced from hours to minutes for critical business metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">85% Decision Accuracy</h4>
                      <p className="text-gray-600 text-sm">AI-powered insights improved strategic decision accuracy across all business units</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">50% Cost Savings</h4>
                      <p className="text-gray-600 text-sm">Reduced analytics infrastructure costs while improving performance and reliability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Scale Success</h4>
                      <p className="text-gray-600 text-sm">Seamless deployment across 100+ countries with consistent performance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "Augment's AI Analytics Platform has revolutionized how we understand and optimize our global operations. The speed and accuracy of insights we now receive enable us to make data-driven decisions that directly impact billions of users worldwide. It's not just analytics—it's intelligence that drives innovation."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-800 font-semibold text-sm">RP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Raj Patel</div>
                    <div className="text-gray-600 text-sm">Director of Data Analytics, Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Implementation Journey
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
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Comprehensive analysis of existing data infrastructure and requirements</p>
                <div className="text-xs text-gray-500 mt-2">Month 1-2</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pilot Deployment</h3>
                <p className="text-gray-600 text-sm">Limited rollout to key business units for testing and optimization</p>
                <div className="text-xs text-gray-500 mt-2">Month 3-4</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Rollout</h3>
                <p className="text-gray-600 text-sm">Phased deployment across all regions and business units</p>
                <div className="text-xs text-gray-500 mt-2">Month 5-8</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">Continuous improvement and advanced feature implementation</p>
                <div className="text-xs text-gray-500 mt-2">Ongoing</div>
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
              Unlock the Power of AI Analytics
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
              Transform your data into actionable insights with Augment's AI Analytics Platform. See how we can help your organization make faster, smarter decisions.
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
                Request Demo
              </Link>
              <Link 
                href="/customers/case-studies"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300"
                style={{ fontFamily: "var(--oraclesans)" }}
              >
                More Success Stories
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
