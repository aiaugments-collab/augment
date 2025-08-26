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

                {/* Right: Image (if provided) */}
                {currentTab.content.image && (
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className="w-full">
                      <img
                        src={currentTab.content.image}
                        alt={`${currentTab.content.title} illustration`}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
