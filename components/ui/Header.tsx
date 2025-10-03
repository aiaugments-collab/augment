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
import { StackUserProfileWrapper } from "@/components/auth/StackUserProfileWrapper";

type NavItem = {
  label: string;
  href: string;
};

// Mobile navigation structure using the new categorized data
const MOBILE_NAV_STRUCTURE = {
  "Products": {
    "AI Agents": getProductsByCategory('ai-agent').map(product => ({
      label: product.shortName || product.name,
      href: product.href
    })),
    "Enterprise Resource Planning (ERP)": [
      { label: "Applications Overview", href: "/product/erp" },
      { label: "Financial Management", href: "/product/accounting" },
      { label: "Procurement", href: "/product/purchasing" },
      { label: "Project Management", href: "/product/projects" },
      { label: "Risk Management", href: "/product/risk-management" },
      { label: "Performance Management", href: "/product/enterprise-performance" }
    ],
    "Supply Chain & Manufacturing (SCM)": [
      { label: "Supply Chain Planning", href: "/product/supply-chain-planning" },
      { label: "Inventory Management", href: "/product/inventory" },
      { label: "Manufacturing", href: "/product/manufacturing" },
      { label: "Maintenance", href: "/product/assets" },
      { label: "Product Lifecycle Management", href: "/product/plm" }
    ],
    "Human Capital Management (HCM)": [
      { label: "Human Resources", href: "/product/hr" },
      { label: "Talent Management", href: "/product/talent-management" },
      { label: "Workforce Management", href: "/product/workforce-management" },
      { label: "Payroll", href: "/product/payroll" }
    ],
    "Customer Experience (CX)": [
      { label: "Marketing", href: "/product/marketing" },
      { label: "Sales", href: "/product/sales" },
      { label: "Service", href: "/product/customer-support" },
      { label: "CRM", href: "/product/crm" }
    ],
    "Data Intelligence": [
      { label: "Augment Suite", href: "/product/augmentdb" }
    ],
    "Marketplace": [
      { label: "Augment Marketplace", href: "/marketplace" }
    ]
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
                {/* India Flag */}
                {/* Saffron stripe */}
                <rect width="24" height="5.33" fill="#FF9933"/>
                {/* White stripe */}
                <rect width="24" height="5.33" y="5.33" fill="white"/>
                {/* Green stripe */}
                <rect width="24" height="5.34" y="10.66" fill="#138808"/>
                {/* Ashoka Chakra (wheel) */}
                <circle cx="12" cy="8" r="2.5" fill="none" stroke="#000080" strokeWidth="0.3"/>
                <g stroke="#000080" strokeWidth="0.15" fill="none">
                  {/* 24 spokes of the Ashoka Chakra */}
                  <line x1="12" y1="5.5" x2="12" y2="10.5"/>
                  <line x1="14.5" y1="8" x2="9.5" y2="8"/>
                  <line x1="13.77" y1="6.23" x2="10.23" y2="9.77"/>
                  <line x1="13.77" y1="9.77" x2="10.23" y2="6.23"/>
                  <line x1="13.25" y1="5.75" x2="10.75" y2="10.25"/>
                  <line x1="13.25" y1="10.25" x2="10.75" y2="5.75"/>
                  <line x1="14.25" y1="6.75" x2="9.75" y2="9.25"/>
                  <line x1="14.25" y1="9.25" x2="9.75" y2="6.75"/>
                  <line x1="12.65" y1="5.6" x2="11.35" y2="10.4"/>
                  <line x1="11.35" y1="5.6" x2="12.65" y2="10.4"/>
                  <line x1="14.4" y1="7.35" x2="9.6" y2="8.65"/>
                  <line x1="14.4" y1="8.65" x2="9.6" y2="7.35"/>
                </g>
              </svg>
            </button>

            {/* User Account Icon - Desktop with text, Mobile icon only */}
            <StackUserProfileWrapper />

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
              className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#312a2a] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700/30">
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex flex-col h-full">
                <nav className="flex-1 px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto">
                  <ul className="space-y-1">
                    {NAV_ITEMS.map((item) => {
                      const sectionData = MOBILE_NAV_STRUCTURE[item.label as keyof typeof MOBILE_NAV_STRUCTURE];
                      
                      if (item.label === 'Products') {
                        // Special handling for Products with sub-categories
                        return (
                          <li key={item.label}>
                            <button
                              onClick={() => toggleSection('Products')}
                              className="flex items-center justify-between w-full px-3 py-3 text-sm sm:text-base text-white hover:bg-gray-700/50 transition-colors rounded-md font-medium"
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
                              <div className="ml-2 sm:ml-4 mt-2 space-y-1">
                                {/* Render all product categories */}
                                {Object.entries(MOBILE_NAV_STRUCTURE.Products).map(([categoryName, categoryItems]) => (
                                  <div key={categoryName}>
                                    <button
                                      onClick={() => toggleSection(categoryName)}
                                      className="flex items-center justify-between w-full px-3 py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-700/30 transition-colors rounded-md"
                                    >
                                      <span className="truncate pr-2">{categoryName}</span>
                                      <svg 
                                        className={`w-4 h-4 flex-shrink-0 transition-transform ${expandedSections.has(categoryName) ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                      </svg>
                                    </button>
                                    
                                    {expandedSections.has(categoryName) && (
                                      <div className="ml-2 sm:ml-4 mt-1 space-y-1">
                                        {categoryItems.map((app) => (
                                          <Link
                                            key={app.label}
                                            href={app.href}
                                            className="block px-3 py-2 text-xs sm:text-sm text-gray-400 hover:bg-gray-700/20 hover:text-white transition-colors rounded-md truncate"
                                            onClick={() => setMenuOpen(false)}
                                          >
                                            {app.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
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
                              className="flex items-center justify-between w-full px-3 py-3 text-sm sm:text-base text-white hover:bg-gray-700/50 transition-colors rounded-md font-medium"
                            >
                              <span className="truncate pr-2">{item.label}</span>
                              <svg 
                                className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedSections.has(item.label) ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </button>
                            
                            {expandedSections.has(item.label) && (
                              <div className="ml-2 sm:ml-4 mt-2 space-y-1">
                                {sectionData.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-700/30 hover:text-white transition-colors rounded-md truncate"
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
                              className="block px-3 py-3 text-sm sm:text-base text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors rounded-md truncate"
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
                  <StackUserProfileWrapper isMobile={true} onClose={() => setMenuOpen(false)} />
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


