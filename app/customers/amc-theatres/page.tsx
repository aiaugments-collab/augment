"use client";

import Link from "next/link";

export default function AMCTheatresCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">AMC Theatres enhances movie experience with Augment AI Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-700 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-700 font-bold text-lg">AMC</span>
                  </div>
                  <span className="text-red-200 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  AMC Theatres enhances movie experience with Augment AI Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-red-100 leading-relaxed mb-8">
                  World's largest movie theatre chain leverages AI-powered insights to optimize showtimes, enhance customer experience, and maximize revenue across 1,000+ locations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-red-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Customer Analytics</span>
                  </div>
                  <div className="bg-red-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Revenue Optimization</span>
                  </div>
                  <div className="bg-red-800 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Entertainment AI</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">55%</div>
                      <div className="text-sm text-gray-600">Customer Engagement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Operational Efficiency</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                      <div className="text-sm text-gray-600">Locations Optimized</div>
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
                  AMC Theatres operates over 1,000 locations serving millions of moviegoers annually. The company faced challenges in optimizing showtimes, managing concession inventory, personalizing customer experiences, and maximizing revenue across diverse markets with varying preferences and demographics.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional theatre management systems couldn't provide the real-time insights needed to optimize operations, predict demand patterns, or deliver personalized experiences that modern consumers expect from entertainment venues.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Complex showtime optimization across 1,000+ locations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Demand prediction for movies and concessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Personalized customer experience at scale
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Revenue optimization across tickets and concessions
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">Entertainment & Cinema</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">Leawood, Kansas</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Employees:</span>
                    <span className="text-gray-600 ml-2">40,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Locations:</span>
                    <span className="text-gray-600 ml-2">1,000+ theatres</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Annual Attendance:</span>
                    <span className="text-gray-600 ml-2">200+ million guests</span>
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
              The Augment Entertainment AI Solution
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
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered showtime optimization based on demand prediction, audience preferences, and revenue maximization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Personalization</h3>
                <p className="text-gray-600 text-sm">
                  Personalized movie recommendations, targeted promotions, and customized concession offerings for each guest.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Real-time revenue optimization across tickets, concessions, and premium experiences with predictive insights.
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
              Blockbuster Results
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
                      <h4 className="font-semibold text-gray-900">55% Increase in Customer Engagement</h4>
                      <p className="text-gray-600 text-sm">Personalized experiences drive higher engagement and repeat visits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">35% Revenue Growth</h4>
                      <p className="text-gray-600 text-sm">Optimized pricing and personalized offerings significantly boost revenue per customer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">40% Operational Efficiency</h4>
                      <p className="text-gray-600 text-sm">AI-driven scheduling and inventory management reduce waste and improve margins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Chain-Wide Success</h4>
                      <p className="text-gray-600 text-sm">Consistent improvements across all 1,000+ theatre locations nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-6">
                  "Augment's AI platform has transformed AMC into a truly customer-centric entertainment destination. We now understand our guests better than ever, can predict what they want to see, and deliver personalized experiences that keep them coming back. The revenue impact has exceeded our expectations, but the real win is the enhanced movie-going experience we can now provide."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-800 font-semibold text-sm">AA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adam Aron</div>
                    <div className="text-gray-600 text-sm">CEO & President, AMC Entertainment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Enhancement */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Enhanced Movie Experience
            </h2>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                margin: "0 auto 48px"
              }}
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Recommendations</h3>
                <p className="text-gray-600 text-sm">AI-powered movie suggestions based on viewing history and preferences</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimal Showtimes</h3>
                <p className="text-gray-600 text-sm">Dynamic scheduling that maximizes attendance and customer satisfaction</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Concession Optimization</h3>
                <p className="text-gray-600 text-sm">Personalized food and beverage recommendations to enhance the experience</p>
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
              Transform Your Entertainment Business
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
              Revolutionize your entertainment operations with Augment's AI platform. Deliver personalized experiences that drive customer loyalty and revenue growth.
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
                Get Started
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
