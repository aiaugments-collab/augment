"use client";

import Link from "next/link";
import { useState } from "react";
import OracleDropdown from "./OracleDropdown";
import {
  oracleProductsDropdownData,
  oracleIndustriesDropdownData,
  oracleResourcesDropdownData,
  oracleCustomersDropdownData,
  oraclePartnersDropdownData,
  oracleDevelopersDropdownData,
  oracleCompanyDropdownData,
} from "./oracleDropdownData";
import { getProductsByCategory } from "@/lib/productRegistry";

type NavItem = {
  label: string;
  href: string;
};

// Mobile navigation structure using the dropdown data
const MOBILE_NAV_STRUCTURE = {
  "Products": {
    "AI Agents": getProductsByCategory('ai-agent').map(product => ({
      label: product.shortName || product.name,
      href: product.href
    })),
    "Cloud Applications": getProductsByCategory('cloud-applications').map(product => ({
      label: product.shortName || product.name,
      href: product.href
    }))
  },
  "Industries": oracleIndustriesDropdownData[0].items,
  "Resources": oracleResourcesDropdownData[0].items,
  "Customers": oracleCustomersDropdownData[0].items,
  "Partners": oraclePartnersDropdownData[0].items,
  "Developers": oracleDevelopersDropdownData[0].items,
  "Company": oracleCompanyDropdownData[0].items
};

const NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Resources", href: "/#resources" },
  { label: "Customers", href: "/#customers" },
  { label: "Partners", href: "/#partners" },
  { label: "Developers", href: "/#developers" },
  { label: "Company", href: "/#company" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#312a2a] text-white border-b border-gray-700/30">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" aria-label="Augment Home">
              <img 
                src="/augment-logo.svg" 
                alt="Augment" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                <li>
                  <OracleDropdown trigger="Products" sections={oracleProductsDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Industries" sections={oracleIndustriesDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Resources" sections={oracleResourcesDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Customers" sections={oracleCustomersDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Partners" sections={oraclePartnersDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Developers" sections={oracleDevelopersDropdownData} />
                </li>
                <li>
                  <OracleDropdown trigger="Company" sections={oracleCompanyDropdownData} />
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-1">
            {/* Search Icon */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
                <path
                  d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Country/Language Flag */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Select country and language"
            >
              <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                {/* US Flag */}
                <rect width="24" height="16" fill="#B22234"/>
                <rect width="24" height="1.23" y="1.23" fill="white"/>
                <rect width="24" height="1.23" y="3.69" fill="white"/>
                <rect width="24" height="1.23" y="6.15" fill="white"/>
                <rect width="24" height="1.23" y="8.62" fill="white"/>
                <rect width="24" height="1.23" y="11.08" fill="white"/>
                <rect width="24" height="1.23" y="13.54" fill="white"/>
                <rect width="9.6" height="8.62" fill="#3C3B6E"/>
                <g fill="white">
                  <circle cx="2" cy="1.5" r="0.3"/>
                  <circle cx="4" cy="1.5" r="0.3"/>
                  <circle cx="6" cy="1.5" r="0.3"/>
                  <circle cx="8" cy="1.5" r="0.3"/>
                  <circle cx="3" cy="2.7" r="0.3"/>
                  <circle cx="5" cy="2.7" r="0.3"/>
                  <circle cx="7" cy="2.7" r="0.3"/>
                  <circle cx="2" cy="3.9" r="0.3"/>
                  <circle cx="4" cy="3.9" r="0.3"/>
                  <circle cx="6" cy="3.9" r="0.3"/>
                  <circle cx="8" cy="3.9" r="0.3"/>
                  <circle cx="3" cy="5.1" r="0.3"/>
                  <circle cx="5" cy="5.1" r="0.3"/>
                  <circle cx="7" cy="5.1" r="0.3"/>
                  <circle cx="2" cy="6.3" r="0.3"/>
                  <circle cx="4" cy="6.3" r="0.3"/>
                  <circle cx="6" cy="6.3" r="0.3"/>
                  <circle cx="8" cy="6.3" r="0.3"/>
                  <circle cx="3" cy="7.5" r="0.3"/>
                  <circle cx="5" cy="7.5" r="0.3"/>
                  <circle cx="7" cy="7.5" r="0.3"/>
                </g>
              </svg>
            </button>

            {/* User Account Icon - Desktop with text, Mobile icon only */}
            <Link
              href="#accounts"
              className="hidden md:inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Accounts
            </Link>

            {/* User Account Icon - Mobile only */}
            <Link
              href="#accounts"
              className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="View Accounts"
            >
              <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Contact Sales - Desktop with text, Mobile icon only */}
            <Link
              href="/corporate/contact/sales"
              className="hidden md:inline-flex items-center rounded-sm border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#312a2a] transition-colors"
            >
              Contact Sales
            </Link>

            {/* Contact Sales Icon - Mobile only */}
            <Link
              href="/corporate/contact/sales"
              className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Contact Sales"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Hamburger Menu */}
            <button
              type="button"
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors ml-1"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Side Drawer */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/7 bg-opacity-20 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Side Drawer */}
            <div 
              className={`fixed top-0 right-0 h-full w-80 bg-[#312a2a] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
                <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Augment Home">
                  <img 
                    src="/augment-logo.svg" 
                    alt="Augment" 
                    className="h-6 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded hover:bg-gray-700/50 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex flex-col h-full">
                <nav className="flex-1 px-6 py-6">
                  <ul className="space-y-1">
                    {NAV_ITEMS.map((item) => {
                      const sectionData = MOBILE_NAV_STRUCTURE[item.label as keyof typeof MOBILE_NAV_STRUCTURE];
                      
                      if (item.label === 'Products') {
                        // Special handling for Products with sub-categories
                        return (
                          <li key={item.label}>
                            <button
                              onClick={() => toggleSection('Products')}
                              className="flex items-center justify-between w-full px-4 py-3 text-base text-white hover:bg-gray-700/50 transition-colors rounded-md font-medium"
                            >
                              Products
                              <svg 
                                className={`w-5 h-5 transition-transform ${expandedSections.has('Products') ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </button>
                            
                            {expandedSections.has('Products') && (
                              <div className="ml-4 mt-2 space-y-1">
                                {/* AI Agents Category */}
                                <div>
                                  <button
                                    onClick={() => toggleSection('AI Agents')}
                                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/30 transition-colors rounded-md"
                                  >
                                    AI Agents
                                    <svg 
                                      className={`w-4 h-4 transition-transform ${expandedSections.has('AI Agents') ? 'rotate-180' : ''}`}
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                  </button>
                                  
                                  {expandedSections.has('AI Agents') && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      {MOBILE_NAV_STRUCTURE.Products["AI Agents"].map((app) => (
                                        <Link
                                          key={app.label}
                                          href={app.href}
                                          className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700/20 hover:text-white transition-colors rounded-md"
                                          onClick={() => setMenuOpen(false)}
                                        >
                                          {app.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                {/* Cloud Applications Category */}
                                <div>
                                  <button
                                    onClick={() => toggleSection('Cloud Applications')}
                                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/30 transition-colors rounded-md"
                                  >
                                    Cloud Applications
                                    <svg 
                                      className={`w-4 h-4 transition-transform ${expandedSections.has('Cloud Applications') ? 'rotate-180' : ''}`}
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                  </button>
                                  
                                  {expandedSections.has('Cloud Applications') && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      {MOBILE_NAV_STRUCTURE.Products["Cloud Applications"].map((app) => (
                                        <Link
                                          key={app.label}
                                          href={app.href}
                                          className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700/20 hover:text-white transition-colors rounded-md"
                                          onClick={() => setMenuOpen(false)}
                                        >
                                          {app.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </li>
                        );
                      } else if (sectionData && Array.isArray(sectionData)) {
                        // Regular sections with dropdown items
                        return (
                          <li key={item.label}>
                            <button
                              onClick={() => toggleSection(item.label)}
                              className="flex items-center justify-between w-full px-4 py-3 text-base text-white hover:bg-gray-700/50 transition-colors rounded-md font-medium"
                            >
                              {item.label}
                              <svg 
                                className={`w-5 h-5 transition-transform ${expandedSections.has(item.label) ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </button>
                            
                            {expandedSections.has(item.label) && (
                              <div className="ml-4 mt-2 space-y-1">
                                {sectionData.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/30 hover:text-white transition-colors rounded-md"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </li>
                        );
                      } else {
                        // Fallback for items without dropdown data
                        return (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block px-4 py-3 text-base text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors rounded-md"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </nav>

                {/* Drawer Footer with CTAs */}
                <div className="px-6 py-6 border-t border-gray-700/30 space-y-3">
                  <Link 
                    href="#accounts" 
                    className="flex items-center justify-center w-full rounded bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    View Accounts
                  </Link>
                  <Link 
                    href="/corporate/contact/sales" 
                    className="flex items-center justify-center w-full rounded border border-white px-4 py-3 text-sm font-semibold text-white hover:bg-gray-700/20 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}


