"use client";

import Link from "next/link";

export default function UberCustomerPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Uber optimizes global operations with Augment AI Platform</h1>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://logo.clearbit.com/uber.com" 
                    alt="Uber logo" 
                    className="h-12 w-auto mr-4 bg-white p-2 rounded"
                  />
                  <span className="text-gray-300 text-sm">Customer Success Story</span>
                </div>
                <h1 
                  className="text-4xl lg:text-5xl font-normal mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Uber optimizes global operations with Augment AI Platform
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#fff",
                    marginBottom: "24px"
                  }}
                />
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Ride-sharing giant leverages AI-powered optimization to enhance driver efficiency, reduce wait times, and improve customer satisfaction across 70+ countries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Route Optimization</span>
                  </div>
                  <div className="bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Demand Prediction</span>
                  </div>
                  <div className="bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Global Operations</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">35%</div>
                      <div className="text-sm text-gray-600">Reduced Wait Times</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">70+</div>
                      <div className="text-sm text-gray-600">Countries Optimized</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                      <div className="text-sm text-gray-600">Prediction Accuracy</div>
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
                  Uber's massive global operations involve millions of rides daily across diverse markets with varying traffic patterns, demand fluctuations, and regulatory environments. The company needed sophisticated AI to optimize driver-rider matching, route planning, and demand prediction in real-time.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional optimization methods couldn't handle the complexity and scale of Uber's operations, leading to longer wait times, inefficient routes, and suboptimal driver utilization across their global network.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Complex real-time matching of millions of drivers and riders
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Dynamic demand prediction across diverse global markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Route optimization considering traffic, weather, and events
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    Balancing driver efficiency with customer satisfaction
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <span className="text-gray-600 ml-2">Transportation & Mobility</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Headquarters:</span>
                    <span className="text-gray-600 ml-2">San Francisco, California</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Employees:</span>
                    <span className="text-gray-600 ml-2">32,000+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Global Presence:</span>
                    <span className="text-gray-600 ml-2">70+ countries</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Daily Rides:</span>
                    <span className="text-gray-600 ml-2">25+ million</span>
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
              The Augment AI Optimization Solution
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
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Matching</h3>
                <p className="text-gray-600 text-sm">
                  AI algorithms instantly match drivers and riders based on location, preferences, and optimal route efficiency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
                <p className="text-gray-600 text-sm">
                  Predictive models analyze patterns to anticipate demand spikes and optimize driver positioning proactively.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Route Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Dynamic routing considers real-time traffic, weather, and events to minimize travel time and maximize efficiency.
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
              Outstanding Results
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
                      <h4 className="font-semibold text-gray-900">35% Reduced Wait Times</h4>
                      <p className="text-gray-600 text-sm">Average rider wait time decreased from 8 minutes to 5.2 minutes globally</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">25% Efficiency Improvement</h4>
                      <p className="text-gray-600 text-sm">Driver utilization and earnings increased through optimized routing and matching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">95% Prediction Accuracy</h4>
                      <p className="text-gray-600 text-sm">Demand forecasting models achieve exceptional accuracy across all markets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Optimization</h4>
                      <p className="text-gray-600 text-sm">Consistent performance improvements across all 70+ countries of operation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Customer Testimonial</h3>
                <blockquote className="text-gray-300 italic mb-6">
                  "Augment's AI platform has revolutionized our operations at a scale we never thought possible. The improvements in efficiency and customer satisfaction are remarkable. Our drivers are earning more, riders are waiting less, and our operations are more sustainable. This is the future of transportation optimization."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">AK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alex Kim</div>
                    <div className="text-gray-400 text-sm">VP of Operations, Uber</div>
                  </div>
                </div>
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
              Optimize Your Operations with AI
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
              Transform your business operations with Augment's AI platform. Achieve the efficiency and optimization that industry leaders trust.
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
