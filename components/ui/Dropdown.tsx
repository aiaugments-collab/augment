"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { productsDropdownData } from "./dropdownData";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
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
                {/* Header with close button */}
                <div className="flex items-center justify-between py-4 border-b border-gray-600">
                  <h3 className="text-lg font-semibold text-white">{trigger}</h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content - Oracle's tworow structure */}
                <div className="py-6">
                  <ul className="space-y-8">
                    {/* First Row - Augment AI Agent */}
                    <li>
                      <span className="text-white font-semibold text-lg mb-4 block">Augment AI Agent</span>
                      <ul className="grid grid-cols-4 gap-x-6 gap-y-2">
                        {productsDropdownData[0].items.map((item, itemIndex) => (
                          <li key={itemIndex} className="item-enter" style={{ animationDelay: `${itemIndex * 50 + 300}ms` }}>
                            <Link
                              href={item.href}
                              className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                              onClick={handleClose}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    
                    {/* Second Row - Augment Cloud Applications */}
                    <li>
                      <span className="text-white font-semibold text-lg mb-4 block">Augment Cloud Applications</span>
                      <ul className="grid grid-cols-4 gap-x-6 gap-y-2">
                        {/* Applications Overview */}
                        <li className="item-enter" style={{ animationDelay: '350ms' }}>
                          <Link href="#applications-overview" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Applications Overview
                          </Link>
                        </li>
                        
                        {/* ERP with sub-items */}
                        <li className="item-enter" style={{ animationDelay: '400ms' }}>
                          <Link href="#erp" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Enterprise Resource Planning (ERP)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li><Link href="#financial" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Financial Management</Link></li>
                            <li><Link href="#procurement" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Procurement</Link></li>
                            <li><Link href="#project" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Project Management</Link></li>
                            <li><Link href="#risk" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Risk Management and Compliance</Link></li>
                            <li><Link href="#performance" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Enterprise Performance Management</Link></li>
                          </ul>
                        </li>
                        
                        {/* SCM with sub-items */}
                        <li className="item-enter" style={{ animationDelay: '450ms' }}>
                          <Link href="#scm" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Supply Chain & Manufacturing (SCM)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li><Link href="#supply-planning" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Supply Chain Planning</Link></li>
                            <li><Link href="#inventory" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Inventory Management</Link></li>
                            <li><Link href="#manufacturing" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Manufacturing</Link></li>
                            <li><Link href="#maintenance" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Maintenance</Link></li>
                            <li><Link href="#lifecycle" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Product Lifecycle Management</Link></li>
                            <li><Link href="#more-scm" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>More SCM applications</Link></li>
                          </ul>
                        </li>
                        
                        {/* HCM with sub-items */}
                        <li className="item-enter" style={{ animationDelay: '500ms' }}>
                          <Link href="#hcm" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Human Capital Management (HCM)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li><Link href="#hr" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Human Resources</Link></li>
                            <li><Link href="#talent" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Talent Management</Link></li>
                            <li><Link href="#workforce" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Workforce Management</Link></li>
                            <li><Link href="#payroll" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Payroll</Link></li>
                          </ul>
                        </li>
                        
                        {/* Additional single items */}
                        <li className="item-enter" style={{ animationDelay: '550ms' }}>
                          <Link href="#fusion" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Fusion Data Intelligence Platform
                          </Link>
                        </li>
                        
                        <li className="item-enter" style={{ animationDelay: '600ms' }}>
                          <Link href="#netsuite" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            NetSuite
                          </Link>
                        </li>
                        
                        {/* CX with sub-items */}
                        <li className="item-enter" style={{ animationDelay: '650ms' }}>
                          <Link href="#cx" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Customer Experience (CX)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li><Link href="#marketing" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Marketing</Link></li>
                            <li><Link href="#sales" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Sales</Link></li>
                            <li><Link href="#service" className="block text-gray-400 hover:text-white transition-colors text-xs py-0.5" onClick={handleClose}>Service</Link></li>
                          </ul>
                        </li>
                        
                        <li className="item-enter" style={{ animationDelay: '700ms' }}>
                          <Link href="#marketplace" className="block text-gray-300 hover:text-white transition-colors text-sm py-1" onClick={handleClose}>
                            Augment Marketplace
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-600 py-4">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`#${trigger.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      View all {trigger.toLowerCase()}
                    </Link>
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
