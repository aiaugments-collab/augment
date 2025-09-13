"use client";

import { useState } from "react";

interface ResourceLink {
  text: string;
  href: string;
  target?: string;
}

interface ResourceTab {
  id: string;
  title: string;
  content: {
    title: string;
    description: string;
    image?: string;
    links: ResourceLink[];
  };
}

interface ProductResourcesProps {
  title: string;
  tabs: ResourceTab[];
  className?: string;
}

export function ProductResources({ title, tabs, className = "" }: ProductResourcesProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section 
      className={`relative py-16 ${className}`} 
      style={{ 
        backgroundColor: '#f8f8f8',
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 
            className="text-2xl lg:text-3xl font-bold text-[#161513]"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            {title}
          </h2>
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Left Sidebar Navigation - Oracle RC30w2 */}
          <div className="w-full lg:w-80 relative z-10 lg:pt-4">
            {/* Mobile dropdown */}
            <div className="lg:hidden mb-6">
              <select 
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-[#161513]"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                {tabs.map(tab => (
                  <option key={tab.id} value={tab.id}>{tab.title}</option>
                ))}
              </select>
            </div>

            {/* Desktop sidebar navigation */}
            <nav className="hidden lg:block space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded text-lg font-normal transition-all duration-200
                    ${activeTab === tab.id 
                      ? 'bg-[#f0cc71] text-[#161513] font-semibold' 
                      : 'text-[#161513] bg-transparent hover:bg-gray-100'
                    }
                  `}
                  style={{ fontFamily: 'var(--oracleserif)' }}
                >
                  {tab.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area - Oracle RC30w3 */}
          <div className="flex-1 lg:ml-[-2rem] relative z-5 bg-white rounded-lg shadow-sm">
            {currentTab && (
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 min-h-[400px]">
                
                {/* Left: Content */}
                <div className="lg:col-span-1 flex flex-col">
                  {/* Title */}
                  <h3 
                    className="text-xl lg:text-2xl font-bold text-[#161513] mb-4 leading-tight"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {currentTab.content.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-gray-700 text-base leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {currentTab.content.description}
                  </p>

                  {/* Resource Links */}
                  <div className="space-y-3">
                    {currentTab.content.links.map((link, index) => (
                      <div key={index}>
                        <a
                          href={link.href}
                          target={link.target || '_self'}
                          className="text-[#0073e6] hover:text-[#005bb5] font-normal underline decoration-1 underline-offset-2 transition-colors duration-200 text-base block"
                          style={{ fontFamily: 'var(--oraclesans)' }}
                        >
                          {link.text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Desktop Mockup for Resources */}
                  <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    {/* Desktop Frame */}
                    <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                      {/* Desktop Header */}
                      <div className="bg-gray-700 rounded-t-md px-3 py-2 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
                            docs.augment.cfd
                          </div>
                        </div>
                      </div>
                      
                      {/* Documentation Interface */}
                      <div className="bg-white rounded-b-md overflow-hidden">
                        {/* Navigation Bar */}
                        <div className="bg-blue-50 px-4 py-2 border-b border-blue-100">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs font-medium text-blue-800">Documentation</span>
                          </div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="p-4 h-64 overflow-hidden">
                          {/* Page Header */}
                          <div className="mb-4">
                            <h3 className="text-sm font-bold text-gray-900 mb-1">Getting Started Guide</h3>
                            <p className="text-xs text-gray-600">Learn how to implement and optimize your solution</p>
                          </div>
                          
                          {/* Content Sections */}
                          <div className="space-y-3">
                            {/* Section 1 */}
                            <div className="border-l-2 border-blue-200 pl-3">
                              <h4 className="text-xs font-semibold text-gray-800 mb-1">📚 Quick Start</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Set up your account and configure basic settings in under 5 minutes.
                              </p>
                            </div>
                            
                            {/* Section 2 */}
                            <div className="border-l-2 border-green-200 pl-3">
                              <h4 className="text-xs font-semibold text-gray-800 mb-1">🚀 Implementation</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Step-by-step implementation guide with best practices and examples.
                              </p>
                            </div>
                            
                            {/* Section 3 */}
                            <div className="border-l-2 border-purple-200 pl-3">
                              <h4 className="text-xs font-semibold text-gray-800 mb-1">📊 Analytics & Reporting</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Advanced analytics setup and custom reporting configuration.
                              </p>
                            </div>
                            
                            {/* Code Block */}
                            <div className="bg-gray-900 rounded p-2 mt-3">
                              <div className="flex items-center space-x-1 mb-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-xs text-gray-400 ml-2">config.js</span>
                              </div>
                              <div className="text-xs font-mono text-green-400">
                                <div className="text-blue-300">const</div>
                                <div className="text-white ml-2">config = {`{`}</div>
                                <div className="text-gray-400 ml-4">apiKey: "your-key",</div>
                                <div className="text-gray-400 ml-4">endpoint: "api.augment.cfd"</div>
                                <div className="text-white ml-2">{`}`}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <button className="text-xs text-blue-600 hover:text-blue-800">← Previous</button>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            </div>
                            <button className="text-xs text-blue-600 hover:text-blue-800">Next →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
