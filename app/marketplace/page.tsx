'use client'

import React, { useState } from 'react'
import { Shield, Cpu, Cloud, Building2, Search, Grid3X3, List } from 'lucide-react'
import AppCard from '../../components/marketplace/AppCard'
import { marketplaceApps, ociCategories, type MarketplaceApp } from '../../lib/marketplaceData'

// Category icons mapping
const categoryIcons = {
  'Data Security & Monitoring': Shield,
  'AI & Automation': Cpu,
  'Cloud & Infrastructure': Cloud,
  'Enterprise Applications': Building2
}

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredApps, setFilteredApps] = useState<MarketplaceApp[]>(marketplaceApps)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryFilter = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
      setFilteredApps(marketplaceApps)
    } else {
      setSelectedCategory(categoryName)
      setFilteredApps(marketplaceApps.filter(app => app.category === categoryName))
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setFilteredApps(selectedCategory ? marketplaceApps.filter(app => app.category === selectedCategory) : marketplaceApps)
    } else {
      const filtered = marketplaceApps.filter(app => 
        app.name.toLowerCase().includes(query.toLowerCase()) ||
        app.description.toLowerCase().includes(query.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
      setFilteredApps(selectedCategory ? filtered.filter(app => app.category === selectedCategory) : filtered)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="bg-[#312a2a] text-white relative overflow-hidden" 
        style={{
          backgroundImage: "url('/a/ocom/img/bgimg02-bgne-overlay-01.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Partner Applications for Augment Cloud
            </h1>
            <p className="text-sm mb-8 text-blue-100">
              Discover and deploy enterprise-grade applications built for the modern cloud infrastructure
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-10 right-32 w-24 h-24 bg-white opacity-10 rounded-lg transform -rotate-12"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Applications</span>
            <span>/</span>
            <span>Services</span>
          </div>
        </nav>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Augment Cloud Infrastructure App Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ociCategories.map((category) => {
              const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons]
              return (
                <div
                  key={category.name}
                  onClick={() => handleCategoryFilter(category.name)}
                  className={`group bg-white border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedCategory === category.name
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    selectedCategory === category.name
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    selectedCategory === category.name
                      ? 'text-blue-900'
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-sm ${
                    selectedCategory === category.name
                      ? 'text-blue-700'
                      : 'text-gray-600'
                  }`}>
                    {category.count} Applications
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Clear Filter Button */}
        {selectedCategory && (
          <div className="text-center mb-8">
            <button
              onClick={() => handleCategoryFilter(selectedCategory)}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filter: {selectedCategory}
            </button>
          </div>
        )}

        {/* Applications Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory ? `${selectedCategory} Applications` : 'All Applications'}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredApps.length} applications found
              </span>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} viewMode="grid" />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredApps.length > 9 && (
          <div className="text-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Load More Applications
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
