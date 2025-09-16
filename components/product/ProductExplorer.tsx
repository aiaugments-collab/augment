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
    <section className={`relative py-16 ${className}`} style={{ backgroundColor: '#f5f5f5' }}>
      {/* Background pattern - Oracle style */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 
            className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            <span className="text-[#4A90E2] mr-4">
              Explore
            </span>
            {title}
          </h2>
          {/* Oracle-style accent line */}
          <div className="w-16 h-0.5 bg-[#C74634] mt-4" />
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Left Sidebar Navigation - Oracle RC30w2 */}
          <div className="w-full lg:w-80 relative z-10 lg:pt-10">
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
                    className="text-xl lg:text-2xl font-semibold text-[#161513] mb-4 leading-tight"
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

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    {currentTab.content.buttons.map((button, index) => (
                      <a
                        key={index}
                        href={button.href}
                        className={`
                          inline-flex items-center justify-center px-5 py-2.5 font-semibold text-sm
                          transition-all duration-300 hover:scale-105
                          ${button.variant === 'primary' 
                            ? 'bg-[#161513] text-white hover:bg-[#2a2a2a]' 
                            : 'border-2 border-[#161513] text-[#161513] hover:bg-[#161513] hover:text-white'
                          }
                        `}
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 
                      className="text-lg font-semibold text-[#161513] mb-3"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {currentTab.content.features.title}
                    </h4>
                    <ul 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {currentTab.content.features.items.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#C74634] mr-2">–</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Product Image or Mockup */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-full">
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
                        className="w-full h-auto rounded-lg shadow-lg"
                        mockupType="interface"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-gray-400">Product Preview</span>
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
