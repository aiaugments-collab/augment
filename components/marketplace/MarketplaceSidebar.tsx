'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Filter } from 'lucide-react'

interface Category {
  name: string
  count: number
  subcategories?: Category[]
}

interface MarketplaceSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const categories: Category[] = [
  {
    name: 'Applications (SaaS)',
    count: 245,
    subcategories: [
      { name: 'CX | Oracle Sales', count: 12 },
      { name: 'CX | Oracle Marketing', count: 8 },
      { name: 'CX | Oracle Service', count: 15 },
      { name: 'CX | Oracle Commerce', count: 6 },
      { name: 'HCM | Human Capital Management', count: 22 },
      { name: 'HCM | Taleo', count: 4 },
      { name: 'Financials Cloud', count: 18 },
      { name: 'Procurement Cloud', count: 9 },
      { name: 'Enterprise Performance Management Cloud', count: 7 },
      { name: 'Project Portfolio Management Cloud', count: 5 }
    ]
  },
  {
    name: 'Platform (PaaS)',
    count: 156,
    subcategories: [
      { name: 'Analytics Cloud', count: 25 },
      { name: 'Big Data Cloud', count: 18 },
      { name: 'Business Intelligence Cloud', count: 12 },
      { name: 'Database Cloud', count: 32 },
      { name: 'Database Schema Cloud', count: 8 },
      { name: 'Digital Media Cloud', count: 6 },
      { name: 'Oracle Content Management', count: 14 },
      { name: 'Identity Cloud', count: 11 },
      { name: 'Oracle Integration', count: 19 },
      { name: 'Java Cloud', count: 7 }
    ]
  },
  {
    name: 'Infrastructure (IaaS)',
    count: 89,
    subcategories: [
      { name: 'FastConnect', count: 12 },
      { name: 'Oracle Cloud Infrastructure', count: 77 }
    ]
  },
  {
    name: 'Healthcare',
    count: 34,
    subcategories: [
      { name: 'Clinical & Financial Ops', count: 8 },
      { name: 'Clinical Applications', count: 12 },
      { name: 'Consumer Experience', count: 7 },
      { name: 'Population Health', count: 7 }
    ]
  }
]

const ociCategories = [
  { name: 'Cloud Management', count: 96 },
  { name: 'Networking', count: 120 },
  { name: 'Security', count: 168 },
  { name: 'Storage', count: 43 },
  { name: 'Operating Systems', count: 48 },
  { name: 'Developer Tools', count: 67 },
  { name: 'Databases', count: 29 },
  { name: 'Analytics', count: 34 },
  { name: 'AI & Machine Learning', count: 52 },
  { name: 'Monitoring & Management', count: 41 }
]

export default function MarketplaceSidebar({ isOpen, onClose }: MarketplaceSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Applications (SaaS)'])
  const [selectedTab, setSelectedTab] = useState<'applications' | 'services'>('applications')

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const sidebarContent = (
    <div className="h-full bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          ×
        </button>
      </div>

      <div className="p-6">
        {/* Tab Selector */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('applications')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedTab === 'applications'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setSelectedTab('services')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedTab === 'services'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Products
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name}>
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                >
                  <div className="flex items-center">
                    {expandedCategories.includes(category.name) ? (
                      <ChevronDown className="w-4 h-4 mr-2 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                    )}
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
                
                {expandedCategories.includes(category.name) && category.subcategories && (
                  <div className="ml-6 mt-2 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <a
                        key={subcategory.name}
                        href="#"
                        className="flex items-center justify-between p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <span>{subcategory.name}</span>
                        <span className="text-xs text-gray-400">{subcategory.count}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* OCI App Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            OCI App Categories
          </h3>
          <div className="space-y-2">
            {ociCategories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="flex items-center justify-between p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors border border-gray-200 hover:border-blue-200"
              >
                <span className="font-medium">{category.name}</span>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">{category.count}</span>
                  <span className="text-xs text-gray-400">Applications</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Partner Information */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Who are Our Partners</h4>
          <p className="text-xs text-blue-800 leading-relaxed">
            Augment proudly supports a wide range of third-party solutions to accelerate and optimize 
            your cloud and hybrid deployments. With new offerings continually added, our comprehensive 
            network of partners ensures your cloud architecture can scale and evolve with your organization's needs.
          </p>
          <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <div className="relative w-80 max-w-full bg-white shadow-xl overflow-y-auto">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          {sidebarContent}
        </div>
      </div>
    </>
  )
}
