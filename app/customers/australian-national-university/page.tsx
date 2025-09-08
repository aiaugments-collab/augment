"use client";

import Link from "next/link";

export default function AustralianNationalUniversityCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Australian National University enhances research capabilities with Augment AI Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-green-700 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold text-lg">ANU</span>
                  </div>
                  <span className="text-blue-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Australian National University enhances research capabilities with Augment AI Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Leading research university leverages AI-powered analytics to accelerate scientific discovery, enhance student outcomes, and optimize academic operations across multiple disciplines.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Research Analytics</span>
                  </div>
                  <div className="bg-blue-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Academic Intelligence</span>
                  </div>
                  <div className="bg-blue-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Higher Education</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                      <div className="text-sm text-gray-600">Faster Research</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Improved Outcomes</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                      <div className="text-sm text-gray-600">Disciplines Enhanced</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                      <div className="text-sm text-gray-600">Faculty Adoption</div>
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
                  As Australia's leading research university, ANU faced challenges in managing vast amounts of research data across multiple disciplines, from physics and astronomy to social sciences and medicine. Traditional research methods were time-intensive and often failed to identify cross-disciplinary insights.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The university needed a sophisticated AI platform to accelerate research discovery, improve student learning outcomes, and optimize administrative operations while maintaining the highest academic standards.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Complex multi-disciplinary research data management
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Time-intensive traditional research methodologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Limited cross-disciplinary collaboration insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Need for personalized student learning experiences
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Institution Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Type:</span>
                    <span className="text-gray-600 ml-2">Public Research University</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="text-gray-600 ml-2">Canberra, Australia</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Students:</span>
                    <span className="text-gray-600 ml-2">25,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Faculty:</span>
                    <span className="text-gray-600 ml-2">3,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Research Areas:</span>
                    <span className="text-gray-600 ml-2">15+ major disciplines</span>
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
              The Augment Academic AI Solution
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Intelligence</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered analysis of research data to identify patterns, accelerate discovery, and suggest cross-disciplinary collaborations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Learning</h3>
                <p className="text-gray-600 text-sm">
                  Adaptive learning systems that personalize education paths and improve student outcomes through AI-driven insights.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Operations Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Streamlined administrative processes and resource allocation through intelligent automation and predictive analytics.
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
              Academic Excellence Enhanced
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
                      <h4 className="font-semibold text-gray-900">60% Faster Research Discovery</h4>
                      <p className="text-gray-600 text-sm">AI-powered analysis accelerates research timelines across all disciplines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">40% Improved Student Outcomes</h4>
                      <p className="text-gray-600 text-sm">Personalized learning paths result in better academic performance and engagement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">85% Faculty Adoption</h4>
                      <p className="text-gray-600 text-sm">High adoption rate across faculty demonstrates platform effectiveness and usability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cross-Disciplinary Innovation</h4>
                      <p className="text-gray-600 text-sm">AI identifies new collaboration opportunities across 15+ research disciplines</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "Augment's AI platform has transformed how we approach research and education at ANU. The insights we gain from our data are unprecedented, leading to breakthrough discoveries and significantly improved student experiences. This technology is reshaping the future of higher education and research excellence."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-semibold text-sm">SW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Prof. Sarah Williams</div>
                    <div className="text-gray-600 text-sm">Vice-Chancellor, Australian National University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Research Impact Areas
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
                <div className="text-2xl font-bold text-blue-600 mb-2">Physics & Astronomy</div>
                <div className="text-sm text-gray-600">Advanced data analysis for space research and quantum physics</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">Life Sciences</div>
                <div className="text-sm text-gray-600">Accelerated medical research and biological discovery</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-2">Social Sciences</div>
                <div className="text-sm text-gray-600">Enhanced policy research and social impact analysis</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600 mb-2">Engineering</div>
                <div className="text-sm text-gray-600">Innovative solutions for complex engineering challenges</div>
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
              Advance Your Institution with AI
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
              Transform your academic and research capabilities with Augment's AI platform. Join leading institutions in advancing education and discovery.
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
                View More Cases
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
