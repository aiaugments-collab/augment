'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { marketplaceApps, ociCategories, type MarketplaceApp } from '@/lib/marketplaceData';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function AppsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredApps = React.useMemo(() => {
    let apps = marketplaceApps;

    // Filter by category
    if (selectedCategory !== 'all') {
      apps = apps.filter(app => app.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      apps = apps.filter(app => 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return apps;
  }, [selectedCategory, searchQuery]);

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-100 text-green-800';
      case 'Paid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-normal text-gray-900 mb-2">
                My Applications
              </h1>
              <p className="text-gray-600">
                Manage and access your subscribed applications
              </p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Apps ({marketplaceApps.length})
                </button>
                {ociCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {filteredApps.length} Applications
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </h3>
                <span className="text-sm text-gray-600">
                  {filteredApps.length} applications found
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApps.map((app) => (
                  <div key={app.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-300 group overflow-hidden">
                    {/* App Icon Section */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 relative">
                          <img
                            src={app.logo ? `/${app.logo}` : '/file.svg'}
                            alt={app.name}
                            className="w-12 h-12 rounded object-cover border border-gray-200"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/file.svg'
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                            {app.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            by {app.publisher || 'Augment Technologies'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-6 pb-4">
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {app.description}
                      </p>
                      
                      {/* Rating and Pricing */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getPricingColor(app.pricing)}`}>
                          {app.pricing}
                        </span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                          <span className="text-xs text-gray-600">{app.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    {app.tags && app.tags.length > 0 && (
                      <div className="px-6 pb-4">
                        <div className="flex flex-wrap gap-1">
                          {app.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Area */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Updated {new Date(app.lastUpdated).toLocaleDateString()}
                        </span>
                        <a 
                          href={`/product/${app.id}`}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Open
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredApps.length === 0 && (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2zM9 11h6" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No applications found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
