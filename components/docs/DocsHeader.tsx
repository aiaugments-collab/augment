'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { getAppById } from '@/lib/marketplaceData'

export function DocsHeader() {
  const pathname = usePathname()
  
  // Extract app name from pathname using marketplace data
  const getAppName = () => {
    if (!pathname) return 'Platform Documentation'
    const match = pathname.match(/^\/docs\/([^\/]+)/)
    if (!match) return 'Platform Documentation'
    
    const appId = match[1]
    const appData = getAppById(appId)
    return appData ? appData.name : 'Platform Documentation'
  }
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd className="inline-flex items-center border border-gray-200 rounded px-2 py-1 text-xs font-sans font-medium text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/marketplace" 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Marketplace
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Try Platform
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
