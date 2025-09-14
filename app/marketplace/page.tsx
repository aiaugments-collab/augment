'use client'

import React, { useState } from 'react'
import { Grid, List, TrendingUp, Clock, Filter as FilterIcon } from 'lucide-react'
import AppCard from '../../components/marketplace/AppCard'
import { marketplaceApps, ociCategories, type MarketplaceApp } from '../../lib/marketplaceData'


export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('Rating')
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const [filteredApps, setFilteredApps] = useState<MarketplaceApp[]>(marketplaceApps)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy)
    const sortedApps = [...filteredApps]
    
    switch (newSortBy) {
      case 'Rating':
        sortedApps.sort((a, b) => b.rating - a.rating)
        break
      case 'Release Date':
        sortedApps.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        break
      case 'Name':
        sortedApps.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
    
    setFilteredApps(sortedApps)
  }

  const handleCategoryFilter = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
      setFilteredApps(marketplaceApps)
    } else {
      setSelectedCategory(categoryName)
      setFilteredApps(marketplaceApps.filter(app => app.category === categoryName))
    }
  }

  // Filter apps for featured section (you can add a featured field to JSON later)
  const featuredApps = filteredApps.filter(app => 
    ['secure-net-manager', 'log-insight', 'nextgen-firewall', 'observability-suite', 'vpn-access', 'fincloud-erp'].includes(app.id)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-80 bg-white shadow-sm border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
              {selectedCategory && (
                <button
                  onClick={() => handleCategoryFilter(selectedCategory)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Clear Filter
                </button>
              )}
            </div>
            <div className="space-y-2">
              {ociCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryFilter(category.name)}
                  className={`w-full text-left p-3 rounded-lg transition-colors border ${
                    selectedCategory === category.name
                      ? 'bg-blue-50 border-blue-200 text-blue-900'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.name
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {showMobileSidebar && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setShowMobileSidebar(false)}
            />
            <div className="relative w-80 max-w-full bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                  <button
                    onClick={() => setShowMobileSidebar(false)}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    ×
                  </button>
                </div>
                <div className="space-y-2">
                  {ociCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => {
                        handleCategoryFilter(category.name)
                        setShowMobileSidebar(false)
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-colors border ${
                        selectedCategory === category.name
                          ? 'bg-blue-50 border-blue-200 text-blue-900'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.name
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Categories Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Augment Marketplace</h1>
              <button 
                onClick={() => setShowMobileSidebar(true)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <FilterIcon className="w-4 h-4" />
                <span>Categories</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {ociCategories.slice(0, 8).map((category) => (
                <div
                  key={category.name}
                  onClick={() => handleCategoryFilter(category.name)}
                  className={`border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group ${
                    selectedCategory === category.name
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h3 className={`font-semibold mb-2 transition-colors ${
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
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              >
                <option>Rating</option>
                <option>Release Date</option>
                <option>Name</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 mr-2">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Featured Apps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                Featured Apps
              </h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
                View 2 More
              </button>
            </div>
            <div className={`grid gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {featuredApps.slice(0, viewMode === 'grid' ? 6 : 4).map((app) => (
                <AppCard key={app.id} app={app} viewMode={viewMode} />
              ))}
            </div>
          </div>

          {/* Recent Apps */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-green-600" />
                Recent Apps
              </h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
                View {filteredApps.length - 8} More
              </button>
            </div>
            <div className={`grid gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} viewMode={viewMode} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
