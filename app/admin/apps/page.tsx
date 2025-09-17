'use client'

import React, { useState } from 'react'
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Package, 
  DollarSign, 
  Users,
  TrendingUp,
  Star,
  Download,
  Eye,
  Edit,
  Settings,
  Crown,
  Zap
} from 'lucide-react'
import { marketplaceApps } from '../../../lib/marketplaceData'

// Enhanced app data with mock analytics
const appsWithAnalytics = marketplaceApps.map((app, index) => ({
  ...app,
  monthlyRevenue: Math.floor(Math.random() * 500000) + 50000,
  activeUsers: Math.floor(Math.random() * 20000) + 1000,
  deployments: Math.floor(Math.random() * 50000) + 5000,
  satisfaction: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
  growth: Math.floor(Math.random() * 60) + 10 // 10% - 70%
})).sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)

const categories = ['All Categories', 'AI & Automation', 'Enterprise Applications', 'Data Security & Monitoring', 'Cloud & Infrastructure']
const pricingFilters = ['All Pricing', 'Paid', 'Free']
const sortOptions = ['Revenue (High to Low)', 'Revenue (Low to High)', 'Users (High to Low)', 'Users (Low to High)', 'Name (A-Z)', 'Name (Z-A)']

export default function AppsManagementPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedPricing, setSelectedPricing] = useState('All Pricing')
  const [sortBy, setSortBy] = useState('Revenue (High to Low)')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')

  const filteredApps = appsWithAnalytics.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || app.category === selectedCategory
    const matchesPricing = selectedPricing === 'All Pricing' || app.pricing === selectedPricing
    
    return matchesSearch && matchesCategory && matchesPricing
  })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const topPerformers = appsWithAnalytics.slice(0, 3)
  const totalRevenue = appsWithAnalytics.reduce((sum, app) => sum + app.monthlyRevenue, 0)
  const totalUsers = appsWithAnalytics.reduce((sum, app) => sum + app.activeUsers, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Application Management</h1>
            <p className="text-gray-600 mt-1 text-sm">Manage {marketplaceApps.length} applications across your platform with detailed analytics and insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <Download className="w-3 h-3 mr-1 inline" />
              Export Apps
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">
              <Plus className="w-3 h-3 mr-1 inline" />
              Add Application
            </button>
          </div>
        </div>
      </div>

      {/* Top Performers Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-green-50">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-xs text-green-600 font-medium">+23.1%</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{formatCurrency(totalRevenue)}</h3>
            <p className="text-xs text-gray-500 mt-1">Total Monthly Revenue</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-blue-50">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xs text-green-600 font-medium">+15.2%</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{formatNumber(totalUsers)}</h3>
            <p className="text-xs text-gray-500 mt-1">Total Active Users</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-purple-50">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-xs text-green-600 font-medium">+8.3%</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{marketplaceApps.length}</h3>
            <p className="text-xs text-gray-500 mt-1">Total Applications</p>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Top Performing Applications</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topPerformers.map((app, index) => (
              <div key={app.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Crown className={`w-4 h-4 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-orange-500'}`} />
                    <span className="text-xs font-medium text-gray-600">#{index + 1}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    app.pricing === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {app.pricing}
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{app.name}</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(app.monthlyRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Users:</span>
                    <span className="font-medium text-gray-900">{formatNumber(app.activeUsers)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth:</span>
                    <span className="font-medium text-green-600">+{app.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingFilters.map(pricing => (
                <option key={pricing} value={pricing}>{pricing}</option>
              ))}
            </select>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="text-xs text-gray-600">
            {filteredApps.length} of {marketplaceApps.length} applications
          </div>
        </div>
      </div>

      {/* Apps Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Satisfaction
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApps.slice(0, 20).map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                        <Package className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">{app.name}</div>
                        <div className="text-xs text-gray-500">{app.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                      app.pricing === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {app.pricing}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{app.category}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-xs font-medium text-gray-900">{formatCurrency(app.monthlyRevenue)}</div>
                    <div className="text-xs text-gray-500">Monthly</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-xs font-medium text-gray-900">{formatNumber(app.activeUsers)}</div>
                    <div className="text-xs text-gray-500">Active users</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium text-gray-900">{app.satisfaction}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-medium text-green-600">+{app.growth}%</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Settings className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-700">
              Showing 1 to {Math.min(20, filteredApps.length)} of {filteredApps.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded">
                1
              </button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
