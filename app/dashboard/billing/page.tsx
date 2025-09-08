'use client';

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function BillingPage() {
  const purchasedApps = [
    {
      name: 'HR',
      fullName: 'Augment HR',
      price: '$49',
      period: 'month',
      status: 'Active',
      nextBilling: '2025-02-01',
      usage: { used: 2847, limit: 5000, unit: 'API calls' }
    },
    {
      name: 'Flow',
      fullName: 'Augment Flow',
      price: '$29',
      period: 'month',
      status: 'Active',
      nextBilling: '2025-02-01',
      usage: { used: 1542, limit: 3000, unit: 'workflows' }
    },
    {
      name: 'SearchAI',
      fullName: 'SearchAI',
      price: '$19',
      period: 'month',
      status: 'Active',
      nextBilling: '2025-02-01',
      usage: { used: 892, limit: 2000, unit: 'searches' }
    }
  ];

  const availableApps = [
    {
      name: 'FinAI',
      fullName: 'FinanceAI',
      price: '$39',
      period: 'month',
      description: 'AI-powered personal finance management',
      features: ['Receipt Scanning', 'Budget Management', 'Financial Insights']
    },
    {
      name: 'Resume AI',
      fullName: 'Resume AI',
      price: '$15',
      period: 'month',
      description: 'AI-powered resume builder with ATS optimization',
      features: ['ATS Optimization', 'Multiple Templates', 'Job Matching']
    },
    {
      name: 'Health AI',
      fullName: 'Health AI',
      price: '$25',
      period: 'month',
      description: 'AI health assistant and wellness tracker',
      features: ['Health Monitoring', 'Wellness Tips', 'Medical Insights']
    }
  ];

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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 
                className="text-2xl font-bold mb-2"
                style={{ 
                  color: "#161513",
                  fontFamily: "var(--oracleserif, serif)"
                }}
              >
                Billing & Plans
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Manage your subscription, usage, and billing information
              </p>
            </div>
          </div>

          {/* Active Subscriptions */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Active Subscriptions
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {purchasedApps.map((app, index) => (
                  <div key={index} className="border border-gray-200 rounded-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-sm flex items-center justify-center text-white font-semibold"
                          style={{ backgroundColor: "#C74634" }}
                        >
                          {app.name[0]}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold" style={{ color: "#161513" }}>
                            {app.fullName}
                          </h4>
                          <p className="text-xs" style={{ color: "#665f5b" }}>
                            {app.price}/{app.period} • Next billing: {app.nextBilling}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium bg-green-100 text-green-800">
                          {app.status}
                        </span>
                        <button 
                          className="text-sm hover:underline transition-colors"
                          style={{ color: "#C74634" }}
                        >
                          Manage
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs" style={{ color: "#665f5b" }}>
                          Usage: {app.usage.used} / {app.usage.limit} {app.usage.unit}
                        </span>
                        <span className="text-xs" style={{ color: "#665f5b" }}>
                          {Math.round((app.usage.used / app.usage.limit) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all"
                          style={{ 
                            width: `${(app.usage.used / app.usage.limit) * 100}%`,
                            backgroundColor: (app.usage.used / app.usage.limit) > 0.8 ? "#E74C3C" : "#C74634"
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
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
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
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
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
                      <div 
                        className="w-12 h-12 rounded-sm flex items-center justify-center text-white font-semibold text-lg mx-auto mb-3"
                        style={{ backgroundColor: "#665f5b" }}
                      >
                        {app.name[0]}
                      </div>
                      <h4 className="text-lg font-semibold" style={{ color: "#161513" }}>
                        {app.fullName}
                      </h4>
                      <div className="mt-2">
                        <span className="text-2xl font-bold" style={{ color: "#161513" }}>
                          {app.price}
                        </span>
                        <span className="text-sm" style={{ color: "#665f5b" }}>
                          /{app.period}
                        </span>
                      </div>
                      <p className="text-sm mt-2" style={{ color: "#665f5b" }}>
                        {app.description}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <svg className="w-4 h-4 mr-2" style={{ color: "#50C878" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span style={{ color: "#665f5b" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="w-full mt-4 px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                      style={{ backgroundColor: "#C74634" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                    >
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
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
