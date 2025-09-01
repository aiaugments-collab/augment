"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type DropdownSection = {
  title: string;
  items: Array<{
    label: string;
    href: string;
    isSubItem?: boolean;
    isBold?: boolean;
  }>;
  hasDivider?: boolean;
};

type OracleDropdownProps = {
  trigger: string;
  sections: DropdownSection[];
  className?: string;
};

export default function OracleDropdown({ 
  trigger, 
  sections, 
  className = ""
}: OracleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
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
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 backdrop-enter"
            onClick={handleClose}
          />
          
          {/* Dropdown Panel */}
          <div className="fixed left-0 right-0 top-16 z-50 bg-[#312a2a] text-white border-t border-gray-700/50 shadow-2xl dropdown-enter">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
              {sections.map((section, sectionIndex) => (
                <div 
                  key={sectionIndex} 
                  className={`p-6 ${section.hasDivider ? 'border-b border-gray-700/50' : ''}`}
                >
                  <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
                  <div className="grid grid-cols-4 gap-8">
                  {/* Group items into columns of ~4 items each */}
                  {Array.from({ length: 4 }, (_, colIndex) => {
                    const itemsPerColumn = Math.ceil(section.items.length / 4);
                    const startIndex = colIndex * itemsPerColumn;
                    const endIndex = Math.min(startIndex + itemsPerColumn, section.items.length);
                    const columnItems = section.items.slice(startIndex, endIndex);

                    return (
                      <div key={colIndex} className="space-y-2">
                        {columnItems.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="item-enter"
                            style={{ 
                              animationDelay: `${itemIndex * 100 + 200 + (sectionIndex * 300)}ms` 
                            }}
                          >
                            <Link
                              href={item.href}
                              onClick={handleClose}
                              className={`block text-white hover:text-blue-400 cursor-pointer transition-colors duration-200 ${
                                item.isBold ? 'font-medium' : ''
                              } ${item.isSubItem ? 'ml-4' : ''}`}
                            >
                              {item.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Close Button */}
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative">
              <button 
                className="absolute top-4 right-4 text-white hover:bg-gray-700/50 p-2 rounded transition-colors"
                onClick={handleClose}
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes dropdownEnter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backdropEnter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes itemEnter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-enter {
          animation: dropdownEnter 0.4s ease-out forwards;
        }

        .backdrop-enter {
          animation: backdropEnter 0.3s ease-out forwards;
        }

        .item-enter {
          opacity: 0;
          animation: itemEnter 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export type { DropdownSection, OracleDropdownProps };