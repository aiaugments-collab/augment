'use client';

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { marketplaceApps } from '@/lib/marketplaceData';

export default function BillingPage() {
  // Get user's subscribed apps (first 6 apps from marketplace)
  const subscribedApps = marketplaceApps.slice(0, 6).map((app, index) => ({
    ...app,
    price: app.pricing === 'Free' ? 'Free' : ['$19', '$29', '$39', '$49', '$59', '$79'][index % 6],
    period: app.pricing === 'Free' ? '' : 'month',
    status: 'Active',
    nextBilling: '2025-02-15',
    usage: {
      used: Math.floor(Math.random() * 8000) + 1000,
      limit: 10000,
      unit: 'API calls'
    }
  }));

  // Get available apps (next 6 apps from marketplace)
  const availableApps = marketplaceApps.slice(6, 12).map((app, index) => ({
    ...app,
    price: app.pricing === 'Free' ? 'Free' : ['$15', '$25', '$35', '$45', '$55', '$65'][index % 6],
    period: app.pricing === 'Free' ? '' : 'month',
    features: app.tags.slice(0, 3)
  }));

  const usageData = [
    { service: 'AI Agent Calls', used: 2847, limit: 5000, unit: 'calls' },
    { service: 'Data Processing', used: 1.2, limit: 5.0, unit: 'GB' },
    { service: 'API Requests', used: 15420, limit: 25000, unit: 'requests' },
    { service: 'Storage', used: 3.8, limit: 10.0, unit: 'GB' }
  ];

  const invoices = [
    { id: 'INV-2025-001', date: '2025-01-01', amount: '$29.00', status: 'paid' },
    { id: 'INV-2024-012', date: '2024-12-01', amount: '$29.00', status: 'paid' },
    { id: 'INV-2024-011', date: '2024-11-01', amount: '$29.00', status: 'paid' },
    { id: 'INV-2024-010', date: '2024-10-01', amount: '$29.00', status: 'paid' }
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-normal text-gray-900 mb-2">
                Billing & Subscriptions
              </h1>
              <p className="text-gray-600">
                Manage your subscription, usage, and billing information
              </p>
            </div>
          </div>

          {/* Active Subscriptions */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Active Subscriptions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {subscribedApps.map((app, index) => (
                  <div key={app.id} className="border border-gray-200 rounded-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 relative">
                          <img
                            src={app.logo ? `/${app.logo}` : '/file.svg'}
                            alt={app.name}
                            className="w-10 h-10 rounded object-cover border border-gray-200"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/file.svg'
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">
                            {app.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {app.price}{app.period && `/${app.period}`} • Next billing: {app.nextBilling}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium bg-green-100 text-green-800">
                          {app.status}
                        </span>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          Manage
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">
                          Usage: {app.usage.used.toLocaleString()} / {app.usage.limit.toLocaleString()} {app.usage.unit}
                        </span>
                        <span className="text-xs text-gray-600">
                          {Math.round((app.usage.used / app.usage.limit) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-blue-600 rounded-full transition-all"
                          style={{ 
                            width: `${Math.min((app.usage.used / app.usage.limit) * 100, 100)}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Usage Overview */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Current Usage
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {usageData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium" style={{ color: "#161513" }}>
                        {item.service}
                      </span>
                      <span className="text-sm" style={{ color: "#665f5b" }}>
                        {item.used} / {item.limit} {item.unit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all"
                        style={{ 
                          width: `${(item.used / item.limit) * 100}%`,
                          backgroundColor: (item.used / item.limit) > 0.8 ? "#E74C3C" : "#C74634"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Apps */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Available Apps
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {availableApps.map((app, index) => (
                  <div 
                    key={index}
                    className="border rounded-sm p-4"
                    style={{ borderColor: "#e5e5e5" }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3">
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
                      <h4 className="text-lg font-semibold text-gray-900">
                        {app.name}
                      </h4>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {app.price}
                        </span>
                        {app.period && (
                          <span className="text-sm text-gray-600">
                            /{app.period}
                          </span>
                        )}
                      </div>
                      <p className="text-sm mt-2 text-gray-600">
                        {app.description}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {app.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Recent Invoices
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {invoices.map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#161513" }}>
                        {invoice.id}
                      </p>
                      <p className="text-xs" style={{ color: "#665f5b" }}>
                        {invoice.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium" style={{ color: "#161513" }}>
                        {invoice.amount}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium bg-green-100 text-green-800">
                        {invoice.status}
                      </span>
                      <button 
                        className="text-sm hover:underline transition-colors"
                        style={{ color: "#C74634" }}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
