"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { MockupInterface } from "@/components/ui/MockupInterface";

interface ExplorerTab {
  id: string;
  title: string;
  content: {
    title: string;
    description: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
    features: {
      title: string;
      items: string[];
    };
    image?: string;
    imageAlt?: string;
    mockup?: {
      type: 'dashboard' | 'form' | 'list' | 'chat' | 'analytics' | 'calendar' | 'table';
      title: string;
      description: string;
    };
  };
}

interface ProductExplorerProps {
  title: string;
  tabs: ExplorerTab[];
  className?: string;
}

export function ProductExplorer({ title, tabs, className = "" }: ProductExplorerProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className={`relative py-8 sm:py-12 lg:py-16 ${className}`} style={{ backgroundColor: '#f5f5f5' }}>
      {/* Background pattern - Oracle style */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h2 
            className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#161513] mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            <span className="text-[#4A90E2] mr-2 sm:mr-4">
              Explore
            </span>
            {title}
          </h2>
          {/* Oracle-style accent line */}
          <div className="w-12 sm:w-16 h-0.5 bg-[#C74634] mt-3 sm:mt-4" />
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Left Sidebar Navigation - Oracle RC30w2 */}
          <div className="w-full lg:w-80 relative z-10 lg:pt-10">
            {/* Mobile dropdown */}
            <div className="lg:hidden mb-4 sm:mb-6">
              <select 
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md bg-white text-[#161513] text-sm sm:text-base"
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
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-6 lg:p-12 min-h-[300px] sm:min-h-[400px]">
                
                {/* Left: Content */}
                <div className="lg:col-span-1 flex flex-col min-w-0">
                  {/* Title */}
                  <h3 
                    className="text-base sm:text-lg lg:text-xl font-semibold text-[#161513] mb-2 sm:mb-3 leading-tight break-words"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {currentTab.content.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 flex-grow break-words"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {currentTab.content.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2 mb-4 sm:mb-6 -mx-1">
                    {currentTab.content.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.href}
                        className={`
                          inline-flex items-center justify-center px-1 py-1.5 font-medium text-xs
                          transition-all duration-300 mx-1 overflow-hidden
                          ${button.variant === 'primary' 
                            ? 'bg-[#161513] text-white hover:bg-[#2a2a2a]' 
                            : 'border border-[#161513] text-[#161513] hover:bg-[#161513] hover:text-white'
                          }
                        `}
                        style={{ 
                          fontFamily: 'var(--oraclesans)',
                          maxWidth: 'calc(100% - 8px)'
                        }}
                      >
                        <span className="truncate px-1">{button.text}</span>
                      </a>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="min-w-0">
                    <h4 
                      className="text-sm sm:text-base font-semibold text-[#161513] mb-2 break-words"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {currentTab.content.features.title}
                    </h4>
                    <ul 
                      className="grid grid-cols-1 gap-1 text-xs text-gray-700"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {currentTab.content.features.items.map((feature, index) => (
                        <li key={index} className="flex items-start min-w-0">
                          <span className="text-[#C74634] mr-1 flex-shrink-0 text-xs">–</span>
                          <span className="leading-relaxed break-words min-w-0 flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Product Image or Mockup */}
                <div className="lg:col-span-1 flex items-center justify-center mt-4 lg:mt-0">
                  <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
                    {currentTab.content.mockup ? (
                      <MockupInterface
                        type={currentTab.content.mockup.type}
                        title={currentTab.content.mockup.title}
                        description={currentTab.content.mockup.description}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    ) : currentTab.content.image ? (
                      <SmartImage
                        src={currentTab.content.image}
                        alt={currentTab.content.imageAlt || "Product interface"}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-lg max-h-64 sm:max-h-80 lg:max-h-none object-cover"
                        mockupType="interface"
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm sm:text-base">Product Preview</span>
                      </div>
                    )}
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
