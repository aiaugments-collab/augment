"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
  status?: string;
};

type DropdownSection = {
  title: string;
  items: DropdownItem[];
};

type DropdownProps = {
  trigger: string;
  sections: DropdownSection[];
  className?: string;
};

export default function Dropdown({ trigger, sections, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
    >
      {/* Trigger */}
      <button
        className="text-base text-white hover:underline active:underline transition-colors font-medium px-2 py-2"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <>
          {/* Full-width dropdown panel that extends from header */}
          <div className="fixed left-0 right-0 top-16 z-50 dropdown-enter">
            <div className="bg-[#312a2a] border-t border-gray-700/50 shadow-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                {/* Header with close button - minimal */}
                <div className="flex items-center justify-end py-4">
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                    aria-label="Close dropdown"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Dynamic Content */}
                <div className="py-8">
                  <div className="space-y-12">
                    {sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        {/* Section Header */}
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-2 h-8 bg-gradient-to-b from-[#4A90E2] to-[#357ABD] rounded-full"></div>
                          <h4 
                            className="text-white font-semibold text-xl"
                            style={{ fontFamily: 'var(--oracleserif)' }}
                          >
                            {section.title}
                          </h4>
                        </div>

                        {/* Products Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              className="item-enter" 
                              style={{ animationDelay: `${itemIndex * 100 + 200 + (sectionIndex * 300)}ms` }}
                            >
                              <Link
                                href={item.href}
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                                onClick={handleClose}
                              >
                                <div className="flex flex-col">
                                  <span 
                                    className="text-white font-medium group-hover:text-[#f0cc71] transition-colors"
                                    style={{ fontFamily: 'var(--oraclesans)' }}
                                  >
                                    {item.label}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {item.status && (
                                    <span 
                                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        item.status === 'Coming Soon' 
                                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                      }`}
                                    >
                                      {item.status}
                                    </span>
                                  )}
                                  <svg 
                                    className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>

                        {/* Section Footer */}
                        <div className="pt-4 border-t border-gray-600/50">
                          <Link
                            href="/product"
                            className="inline-flex items-center text-sm text-[#f0cc71] hover:text-white transition-colors font-medium"
                            onClick={handleClose}
                            style={{ fontFamily: 'var(--oraclesans)' }}
                          >
                            View all products
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Global Footer */}
                <div className="border-t border-gray-600/50 py-6">
                  <div className="text-center">
                    <p 
                      className="text-gray-400 text-sm mb-4"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Explore our complete suite of AI-powered business solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/product"
                        className="inline-flex items-center justify-center px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium text-sm"
                        onClick={handleClose}
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        Browse All Products
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors font-medium text-sm"
                        onClick={handleClose}
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        Talk to Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/20 z-40" 
            onClick={handleClose}
          />
        </>
      )}
    </div>
  );
}

// Export data structures for easy use
export type { DropdownItem, DropdownSection, DropdownProps };
