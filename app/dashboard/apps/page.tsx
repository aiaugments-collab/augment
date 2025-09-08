'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { PRODUCTS, PRODUCT_CATEGORIES, getProductsByCategory, searchProducts, Product } from '@/lib/productRegistry';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function AppsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = React.useMemo(() => {
    let products = PRODUCTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      products = getProductsByCategory(selectedCategory as Product['category']);
    }

    // Filter by search query
    if (searchQuery) {
      products = searchProducts(searchQuery).filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
      );
    }

    return products;
  }, [selectedCategory, searchQuery]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800';
      case 'beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProductIcon = (product: Product) => {
    // Unique color mapping for each app
    const appColors: { [key: string]: { from: string; to: string; bg: string } } = {
      'HR': { from: '#C74634', to: '#b03e2d', bg: '#C74634' }, // Oracle Red
      'Flow': { from: '#4A90E2', to: '#357ABD', bg: '#4A90E2' }, // Blue
      'SearchAI': { from: '#50C878', to: '#45B068', bg: '#50C878' }, // Green
      'FinAI': { from: '#FF6B35', to: '#E55A2B', bg: '#FF6B35' }, // Orange
      'Resume AI': { from: '#8E44AD', to: '#7D3C98', bg: '#8E44AD' }, // Purple
      'Health AI': { from: '#E74C3C', to: '#CB4335', bg: '#E74C3C' }, // Red
      'Accounting': { from: '#F39C12', to: '#D68910', bg: '#F39C12' }, // Yellow/Gold
      'Scheduling': { from: '#3498DB', to: '#2E86C1', bg: '#3498DB' }, // Light Blue
      'eSign': { from: '#2ECC71', to: '#28B463', bg: '#2ECC71' }, // Emerald
      'HR Auto': { from: '#9B59B6', to: '#8E44AD', bg: '#9B59B6' }, // Violet
    };

    const appKey = product.shortName || product.name;
    const colors = appColors[appKey] || { from: '#665f5b', to: '#3a3631', bg: '#665f5b' }; // Default Oracle colors

    return (
      <div 
        className="w-12 h-12 rounded-sm flex items-center justify-center text-white font-semibold text-lg shadow-sm"
        style={{ 
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
        }}
      >
        {product.shortName?.[0] || product.name[0]}
      </div>
    );
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 
                className="text-2xl font-bold mb-2"
                style={{ 
                  color: "#161513",
                  fontFamily: "var(--oracleserif, serif)"
                }}
              >
                Apps & Products
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Explore and manage your AI-powered applications and cloud services
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-sm transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-gray-400 hover:text-gray-600'}`}
                style={viewMode === 'grid' ? { backgroundColor: '#C74634' } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-sm transition-colors ${viewMode === 'list' ? 'text-white' : 'text-gray-400 hover:text-gray-600'}`}
                style={viewMode === 'list' ? { backgroundColor: '#C74634' } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filters and Search */}
          <div 
            className="bg-white rounded-sm shadow-sm p-4"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={selectedCategory === 'all' ? { backgroundColor: '#C74634' } : {}}
                >
                  All Apps ({PRODUCTS.length})
                </button>
                {Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => {
                  const count = getProductsByCategory(key as Product['category']).length;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                        selectedCategory === key
                          ? 'text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      style={selectedCategory === key ? { backgroundColor: '#C74634' } : {}}
                    >
                      {category.name.replace('Augment ', '')} ({count})
                    </button>
                  );
                })}
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
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-sm leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:border-blue-500 transition-colors"
                  style={{ fontSize: "14px" }}
                />
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                {filteredProducts.length} {filteredProducts.length === 1 ? 'App' : 'Apps'}
                {selectedCategory !== 'all' && ` in ${PRODUCT_CATEGORIES[selectedCategory as keyof typeof PRODUCT_CATEGORIES]?.name.replace('Augment ', '')}`}
              </h3>
            </div>

            <div className="p-4">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="border border-gray-200 rounded-sm p-4 hover:shadow-md transition-shadow"
                      style={{ 
                        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        {getProductIcon(product)}
                        <div className="flex-1 min-w-0">
                          <h4 
                            className="text-lg font-semibold truncate"
                            style={{ color: "#161513" }}
                          >
                            {product.shortName || product.name}
                          </h4>
                          <p 
                            className="text-sm mt-1 line-clamp-2"
                            style={{ color: "#665f5b" }}
                          >
                            {product.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status.replace('-', ' ')}
                        </span>
                        <div className="flex items-center space-x-2">
                          <a
                            href={product.href}
                            className="text-sm hover:underline transition-colors"
                            style={{ color: "#C74634" }}
                          >
                            Details
                          </a>
                          {product.status === 'live' && (
                            <a
                              href={product.productUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-sm text-white transition-colors"
                              style={{ backgroundColor: "#C74634" }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                            >
                              Launch
                            </a>
                          )}
                        </div>
                      </div>

                      {product.tags && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {product.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {tag}
                            </span>
                          ))}
                          {product.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              +{product.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="border border-gray-200 rounded-sm p-4 hover:shadow-md transition-shadow"
                      style={{ 
                        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        {getProductIcon(product)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 
                              className="text-lg font-semibold"
                              style={{ color: "#161513" }}
                            >
                              {product.shortName || product.name}
                            </h4>
                            <div className="flex items-center space-x-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                                {product.status.replace('-', ' ')}
                              </span>
                              <div className="flex items-center space-x-2">
                                <a
                                  href={product.href}
                                  className="text-sm hover:underline transition-colors"
                                  style={{ color: "#C74634" }}
                                >
                                  Details
                                </a>
                                {product.status === 'live' && (
                                  <a
                                    href={product.productUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-sm text-white transition-colors"
                                    style={{ backgroundColor: "#C74634" }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                                  >
                                    Launch
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                          <p 
                            className="text-sm mt-1"
                            style={{ color: "#665f5b" }}
                          >
                            {product.shortDescription}
                          </p>
                          {product.tags && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.tags.slice(0, 5).map((tag) => (
                                <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                  {tag}
                                </span>
                              ))}
                              {product.tags.length > 5 && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                  +{product.tags.length - 5}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2zM9 11h6" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No apps found</h3>
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
