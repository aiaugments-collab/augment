'use client';
import React, { useState } from 'react';

interface TabContent {
  title: string;
  description: string;
  items?: string[];
  image?: string;
  links?: Array<{
    text: string;
    href: string;
    target?: '_blank' | '_self';
  }>;
}

interface Tab {
  id: string;
  title: string;
  content: TabContent;
}

interface TabbedContentProps {
  title?: string;
  description?: string;
  tabs: Tab[];
  defaultTab?: string;
  backgroundColor?: string;
  className?: string;
}

export const TabbedContent: React.FC<TabbedContentProps> = ({
  title,
  description,
  tabs,
  defaultTab,
  backgroundColor = 'bg-white',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-200
                  ${activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTabContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeTabContent.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeTabContent.description}
              </p>

              {activeTabContent.items && (
                <ul className="space-y-3 mb-6">
                  {activeTabContent.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTabContent.links && (
                <div className="space-y-3">
                  {activeTabContent.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.target || '_self'}
                      className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                    >
                      {link.text} →
                    </a>
                  ))}
                </div>
              )}
            </div>

            {activeTabContent.image && (
              <div className="lg:order-first">
                <img
                  src={activeTabContent.image}
                  alt={activeTabContent.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
