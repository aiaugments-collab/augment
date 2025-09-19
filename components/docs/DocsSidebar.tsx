'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavigationItem {
  title: string
  href: string
}

interface DocsSidebarProps {
  appName?: string
  appLogo?: string
  navigationItems?: NavigationItem[]
}

export function DocsSidebar({ appName, appLogo, navigationItems = [] }: DocsSidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-sm font-medium">Menu</span>
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        md:transform-none md:transition-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:sticky md:top-16 overflow-y-auto max-h-screen md:max-h-[calc(100vh-4rem)]
        flex-shrink-0
      `}>
      <div className="p-6">
        {/* Mobile close button */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {appLogo && <img src={appLogo} alt={appName} className="w-8 h-8" />}
            <span className="text-lg font-semibold text-gray-900">{appName}</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop header */}
        {appName && (
          <div className="hidden md:flex mb-6 items-center space-x-3">
            {appLogo && <img src={appLogo} alt={appName} className="w-10 h-10" />}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{appName}</h2>
              <p className="text-sm text-gray-600">Documentation</p>
            </div>
          </div>
        )}
        
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                pathname === item.href || (item.href.includes('#') && pathname === item.href.split('#')[0])
                  ? 'bg-blue-50 text-blue-700 font-medium border-l-2 border-blue-500 -ml-3 pl-5' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        {appName && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-900">Need Help?</h3>
                  <p className="mt-1 text-xs text-blue-700">
                    Contact our support team for assistance with {appName} configurations.
                  </p>
                  <div className="mt-2">
                    <Link href="/contact" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                      Get Support →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
    </>
  )
}
