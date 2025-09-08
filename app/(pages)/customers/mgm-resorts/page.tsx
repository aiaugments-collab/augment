"use client";

import Link from "next/link";

export default function MGMResortsCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">MGM Resorts transforms guest experience with Augment AI Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-red-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-lg">MGM</span>
                  </div>
                  <span className="text-yellow-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  MGM Resorts transforms guest experience with Augment AI Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-yellow-100 leading-relaxed mb-8">
                  Leading hospitality company leverages AI-powered personalization to enhance guest satisfaction, optimize operations, and increase revenue across luxury resort properties.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-yellow-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Guest Personalization</span>
                  </div>
                  <div className="bg-yellow-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Revenue Optimization</span>
                  </div>
                  <div className="bg-yellow-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Hospitality AI</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-yellow-600 mb-2">45%</div>
                      <div className="text-sm text-gray-600">Guest Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                      <div className="text-sm text-gray-600">Operational Efficiency</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                      <div className="text-sm text-gray-600">Properties Enhanced</div>
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
                  MGM Resorts operates luxury properties serving millions of guests annually across diverse markets. The company needed to deliver personalized experiences at scale while optimizing operations, managing complex inventory, and maximizing revenue across gaming, dining, entertainment, and hospitality services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional hospitality management systems couldn't provide the real-time insights and personalization capabilities needed to compete in the modern luxury travel market, leading to missed revenue opportunities and suboptimal guest experiences.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Complex multi-property operations requiring unified management
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Need for real-time personalization across all guest touchpoints
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Revenue optimization across gaming, dining, and entertainment
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Operational efficiency in luxury service delivery
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">Hospitality & Entertainment</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">Las Vegas, Nevada</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Employees:</span>
                    <span className="text-gray-600 ml-2">70,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Properties:</span>
                    <span className="text-gray-600 ml-2">25+ luxury resorts</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Annual Revenue:</span>
                    <span className="text-gray-600 ml-2">$13+ billion</span>
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
              The Augment Hospitality AI Solution
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
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Guest Personalization</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered guest profiling and preference analysis to deliver personalized experiences across all touchpoints.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Dynamic pricing and yield management across gaming, dining, entertainment, and accommodation services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Operations Intelligence</h3>
                <p className="text-gray-600 text-sm">
                  Predictive analytics for staffing, inventory management, and operational efficiency across all properties.
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
              Exceptional Hospitality Results
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
                      <h4 className="font-semibold text-gray-900">45% Increase in Guest Satisfaction</h4>
                      <p className="text-gray-600 text-sm">Personalized experiences drive significantly higher guest satisfaction scores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">30% Revenue Growth</h4>
                      <p className="text-gray-600 text-sm">AI-driven optimization increases revenue across all service categories</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">50% Operational Efficiency</h4>
                      <p className="text-gray-600 text-sm">Streamlined operations and predictive management reduce costs and improve service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-Property Success</h4>
                      <p className="text-gray-600 text-sm">Consistent improvements across 25+ luxury resort properties worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "Augment's AI platform has revolutionized how we deliver luxury hospitality experiences. Our guests now receive truly personalized service at every touchpoint, from gaming recommendations to dining preferences. The revenue impact has been remarkable, but more importantly, we're creating memorable experiences that keep guests coming back."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-800 font-semibold text-sm">BH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Bill Hornbuckle</div>
                    <div className="text-gray-600 text-sm">CEO & President, MGM Resorts International</div>
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
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gaming</h3>
                <p className="text-gray-600 text-sm">Personalized gaming recommendations and loyalty optimization</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dining</h3>
                <p className="text-gray-600 text-sm">AI-powered menu recommendations and dining experience optimization</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entertainment</h3>
                <p className="text-gray-600 text-sm">Personalized show recommendations and event optimization</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accommodation</h3>
                <p className="text-gray-600 text-sm">Smart room assignments and personalized amenity services</p>
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
              Elevate Your Hospitality Experience
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
              Transform your hospitality operations with Augment's AI platform. Deliver personalized experiences that drive guest satisfaction and revenue growth.
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
                Book Demo
              </Link>
              <Link 
                href="/customers/case-studies"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300"
                style={{ fontFamily: "var(--oraclesans)" }}
              >
                View More Cases
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
