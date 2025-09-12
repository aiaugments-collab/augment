'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function SupportHelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      category: 'Getting Started',
      icon: '🚀',
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { 
          title: 'Getting Started Guide', 
          href: '/knowledge/getting-started',
          description: 'Complete guide to setting up your account and first steps',
          readTime: '5 min read'
        },
        { 
          title: 'Product Documentation', 
          href: '/product-docs',
          description: 'Comprehensive documentation for all our products',
          readTime: '10 min read'
        },
        { 
          title: 'User Guides', 
          href: '/product-docs/user-guides',
          description: 'Step-by-step guides for common tasks',
          readTime: '8 min read'
        },
        { 
          title: 'Quick Start Tutorial', 
          href: '/knowledge/quick-start',
          description: 'Get started in under 10 minutes',
          readTime: '10 min read'
        }
      ]
    },
    {
      id: 'api-docs',
      category: 'API Documentation',
      icon: '⚡',
      description: 'Technical documentation for developers',
      articles: [
        { 
          title: 'Developer Documentation', 
          href: '/developers/docs',
          description: 'Complete API reference and developer guides',
          readTime: '15 min read'
        },
        { 
          title: 'API Authentication', 
          href: '/knowledge/api-authentication',
          description: 'Learn how to authenticate with our APIs',
          readTime: '7 min read'
        },
        { 
          title: 'API Reference', 
          href: '/developers/apis',
          description: 'Detailed API endpoints and parameters',
          readTime: '20 min read'
        },
        { 
          title: 'SDK Documentation', 
          href: '/developers/sdks',
          description: 'Official SDKs for popular programming languages',
          readTime: '12 min read'
        }
      ]
    },
    {
      id: 'troubleshooting',
      category: 'Troubleshooting',
      icon: '🔧',
      description: 'Solutions to common problems and issues',
      articles: [
        { 
          title: 'Troubleshooting Guide', 
          href: '/knowledge/troubleshooting',
          description: 'Common issues and their solutions',
          readTime: '12 min read'
        },
        { 
          title: 'Performance Tips', 
          href: '/knowledge/performance',
          description: 'Optimize your usage for better performance',
          readTime: '8 min read'
        },
        { 
          title: 'Technical Help Forum', 
          href: '/forums/technical-help',
          description: 'Get help from the community',
          readTime: '5 min read'
        },
        { 
          title: 'Error Codes Reference', 
          href: '/knowledge/error-codes',
          description: 'Understanding and resolving error messages',
          readTime: '10 min read'
        }
      ]
    },
    {
      id: 'account-billing',
      category: 'Account & Billing',
      icon: '💳',
      description: 'Manage your account, billing, and subscription',
      articles: [
        { 
          title: 'Account Management', 
          href: '/knowledge/account-management',
          description: 'Manage your profile, settings, and preferences',
          readTime: '6 min read'
        },
        { 
          title: 'Billing & Payments', 
          href: '/knowledge/billing',
          description: 'Understanding billing, invoices, and payment methods',
          readTime: '8 min read'
        },
        { 
          title: 'Subscription Plans', 
          href: '/knowledge/subscription-plans',
          description: 'Compare plans and upgrade/downgrade options',
          readTime: '5 min read'
        },
        { 
          title: 'Usage Limits', 
          href: '/knowledge/usage-limits',
          description: 'Understanding usage limits and overages',
          readTime: '4 min read'
        }
      ]
    },
    {
      id: 'integrations',
      category: 'Integrations',
      icon: '🔗',
      description: 'Connect with third-party tools and services',
      articles: [
        { 
          title: 'Available Integrations', 
          href: '/knowledge/integrations',
          description: 'Browse all available third-party integrations',
          readTime: '10 min read'
        },
        { 
          title: 'Webhook Setup', 
          href: '/knowledge/webhooks',
          description: 'Configure webhooks for real-time notifications',
          readTime: '12 min read'
        },
        { 
          title: 'Slack Integration', 
          href: '/knowledge/slack-integration',
          description: 'Connect and use our Slack app',
          readTime: '8 min read'
        },
        { 
          title: 'Zapier Integration', 
          href: '/knowledge/zapier',
          description: 'Automate workflows with Zapier',
          readTime: '6 min read'
        }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Getting Started Guide', href: '/knowledge/getting-started', views: '12.5k' },
    { title: 'API Authentication', href: '/knowledge/api-authentication', views: '8.2k' },
    { title: 'Troubleshooting Guide', href: '/knowledge/troubleshooting', views: '6.8k' },
    { title: 'Billing & Payments', href: '/knowledge/billing', views: '5.4k' },
    { title: 'Webhook Setup', href: '/knowledge/webhooks', views: '4.9k' }
  ];

  const filteredCategories = helpCategories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return category.category.toLowerCase().includes(searchLower) ||
           category.description.toLowerCase().includes(searchLower) ||
           category.articles.some(article => 
             article.title.toLowerCase().includes(searchLower) ||
             article.description.toLowerCase().includes(searchLower)
           );
  });

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 
                className="text-3xl font-bold mb-2"
                style={{ 
                  color: "#161513",
                  fontFamily: "var(--oracleserif, serif)"
                }}
              >
                Help Center
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Find answers to your questions and learn how to make the most of Augment
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a 
                href="/dashboard/support"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border border-gray-300 hover:bg-gray-50 transition-colors"
                style={{ 
                  color: "#161513",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                ← Back to Support
              </a>
            </div>
          </div>

          {/* Search and Filter */}
          <div 
            className="bg-white rounded-sm shadow-sm p-6"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <svg 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "#665f5b" }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:border-transparent focus:ring-red-500"
                    style={{ 
                      color: "#161513"
                    }}
                  />
                </div>
              </div>
              <div className="sm:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:border-transparent focus:ring-red-500"
                  style={{ 
                    color: "#161513"
                  }}
                >
                  <option value="all">All Categories</option>
                  {helpCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          {!searchQuery && selectedCategory === 'all' && (
            <div 
              className="bg-white rounded-sm shadow-sm"
              style={{ 
                border: "1px solid #e5e5e5",
                fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
              }}
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold" style={{ color: "#161513" }}>
                  🔥 Popular Articles
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {popularArticles.map((article, index) => (
                    <a
                      key={index}
                      href={article.href}
                      className="block p-4 border border-gray-200 rounded-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                    >
                      <h3 className="font-medium text-sm mb-2" style={{ color: "#161513" }}>
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs" style={{ color: "#665f5b" }}>
                          {article.views} views
                        </span>
                        <svg className="w-4 h-4" style={{ color: "#665f5b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Help Categories */}
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-sm shadow-sm"
                style={{ 
                  border: "1px solid #e5e5e5",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h2 className="text-lg font-semibold" style={{ color: "#161513" }}>
                        {category.category}
                      </h2>
                      <p className="text-sm" style={{ color: "#665f5b" }}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.articles
                      .filter(article => {
                        if (!searchQuery) return true;
                        const searchLower = searchQuery.toLowerCase();
                        return article.title.toLowerCase().includes(searchLower) ||
                               article.description.toLowerCase().includes(searchLower);
                      })
                      .map((article, index) => (
                      <a
                        key={index}
                        href={article.href}
                        className="block p-4 border border-gray-200 rounded-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-sm mb-2" style={{ color: "#161513" }}>
                              {article.title}
                            </h3>
                            <p className="text-xs mb-3" style={{ color: "#665f5b" }}>
                              {article.description}
                            </p>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-sm" style={{ color: "#665f5b" }}>
                              {article.readTime}
                            </span>
                          </div>
                          <svg className="w-4 h-4 ml-2 flex-shrink-0" style={{ color: "#665f5b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div 
            className="bg-white rounded-sm shadow-sm p-6 text-center"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#161513" }}>
              Still need help?
            </h3>
            <p className="text-sm mb-6" style={{ color: "#665f5b" }}>
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/dashboard/support"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm text-white transition-colors"
                style={{ backgroundColor: "#C74634" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
              >
                Contact Support
              </a>
              <a
                href="/forums"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm border border-gray-300 hover:bg-gray-50 transition-colors"
                style={{ color: "#161513" }}
              >
                Community Forums
              </a>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
