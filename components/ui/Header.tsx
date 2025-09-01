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

type NavItem = {
  label: string;
  href: string;
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

  return (
    <header className="sticky top-0 z-50 bg-[#312a2a] text-white border-b border-gray-700/30">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" aria-label="Oracle Home">
              <span className="font-bold text-[#FF4C4C] text-2xl tracking-wide">Augment</span>
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

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Search"
            >
              {/* Search icon */}
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

            <button
              type="button"
              className="hidden md:inline-flex items-center justify-center rounded hover:bg-gray-700/50 transition-colors p-2"
            >
              {/* US Flag */}
              <div className="w-6 h-5 bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-sm flex items-center justify-center text-sm">
                🇺🇸
              </div>
            </button>

            <Link
              href="#accounts"
              className="hidden md:inline-flex items-center rounded bg-black px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-1 md:mr-2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="hidden md:inline">View Accounts</span>
              <span className="md:hidden">Accounts</span>
            </Link>
            <Link
              href="#contact-sales"
              className="hidden sm:inline-flex items-center rounded border border-white px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white hover:bg-gray-700/20 transition-colors"
            >
              <span className="hidden md:inline">Contact Sales</span>
              <span className="md:hidden">Sales</span>
            </Link>

            <button
              type="button"
              className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-gray-300">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4">
            <nav>
              <ul className="grid gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="flex flex-col gap-2 px-3 pt-2">
                  <Link href="#accounts" className="w-full rounded border border-gray-600 px-3 py-2 text-center text-sm text-gray-300 hover:bg-gray-700/50 transition-colors">
                    View Accounts
                  </Link>
                  <Link href="#contact-sales" className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-gray-700 transition-colors">
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


