import React from 'react';

interface TabItem {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    title: string;
    href: string;
  }>;
}

interface ContentTabsProps {
  tabs: TabItem[];
  backgroundColor?: string;
  className?: string;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({
  tabs,
  backgroundColor = 'bg-white',
  className = ''
}) => {
  return (
    <nav className={`border-b border-gray-200 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="overflow-x-auto">
          <ul className="flex space-x-8">
            {tabs.map((tab) => (
              <li key={tab.id} className="relative group">
                <a
                  href={tab.href}
                  className={`
                    inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-200
                    ${tab.isActive
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.title}
                  {tab.hasDropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {tab.hasDropdown && tab.dropdownItems && (
                  <div className="absolute left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="py-2">
                      {tab.dropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
