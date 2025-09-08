'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');

  const timeRanges = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  const metrics = [
    { name: 'Total API Calls', value: '24,847', change: '+12.5%', trend: 'up' },
    { name: 'Active Users', value: '1,234', change: '+8.2%', trend: 'up' },
    { name: 'Success Rate', value: '99.2%', change: '+0.3%', trend: 'up' },
    { name: 'Avg Response Time', value: '245ms', change: '-15.2%', trend: 'down' }
  ];

  const topApps = [
    { name: 'HR', calls: 8547, percentage: 34.4, color: '#C74634' },
    { name: 'Flow', calls: 6234, percentage: 25.1, color: '#4A90E2' },
    { name: 'SearchAI', calls: 4123, percentage: 16.6, color: '#50C878' },
    { name: 'FinAI', calls: 3456, percentage: 13.9, color: '#FF6B35' },
    { name: 'Others', calls: 2487, percentage: 10.0, color: '#665f5b' }
  ];

  const recentActivity = [
    { time: '2 minutes ago', action: 'API call to HR service', status: 'success' },
    { time: '5 minutes ago', action: 'User authentication', status: 'success' },
    { time: '8 minutes ago', action: 'Data export request', status: 'success' },
    { time: '12 minutes ago', action: 'Webhook delivery', status: 'failed' },
    { time: '15 minutes ago', action: 'API call to Flow service', status: 'success' }
  ];

  const errorTypes = [
    { type: 'Rate Limit Exceeded', count: 23, percentage: 45.1 },
    { type: 'Authentication Failed', count: 15, percentage: 29.4 },
    { type: 'Invalid Request', count: 8, percentage: 15.7 },
    { type: 'Server Error', count: 5, percentage: 9.8 }
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
                Analytics Dashboard
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Monitor your application performance and usage metrics
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                style={{ fontSize: "14px" }}
              >
                {timeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-white rounded-sm shadow-sm p-4"
                style={{ 
                  border: "1px solid #e5e5e5",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#665f5b" }}>
                      {metric.name}
                    </p>
                    <p className="text-2xl font-semibold mt-1" style={{ color: "#161513" }}>
                      {metric.value}
                    </p>
                  </div>
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <svg 
                      className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Top Applications */}
            <div 
              className="bg-white rounded-sm shadow-sm"
              style={{ 
                border: "1px solid #e5e5e5",
                fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
              }}
            >
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                  Top Applications
                </h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {topApps.map((app, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-sm font-semibold"
                          style={{ backgroundColor: app.color }}
                        >
                          {app.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "#161513" }}>
                            {app.name}
                          </p>
                          <p className="text-xs" style={{ color: "#665f5b" }}>
                            {app.calls.toLocaleString()} calls
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${app.percentage}%`,
                              backgroundColor: app.color
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium" style={{ color: "#161513" }}>
                          {app.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div 
              className="bg-white rounded-sm shadow-sm"
              style={{ 
                border: "1px solid #e5e5e5",
                fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
              }}
            >
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                  Recent Activity
                </h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <p className="text-sm" style={{ color: "#161513" }}>
                          {activity.action}
                        </p>
                        <p className="text-xs" style={{ color: "#665f5b" }}>
                          {activity.time}
                        </p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${
                        activity.status === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Error Analysis */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Error Analysis
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {errorTypes.map((error, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e5e5"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E74C3C"
                          strokeWidth="2"
                          strokeDasharray={`${error.percentage}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold" style={{ color: "#161513" }}>
                          {error.count}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-medium" style={{ color: "#161513" }}>
                      {error.type}
                    </p>
                    <p className="text-xs" style={{ color: "#665f5b" }}>
                      {error.percentage}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Performance Over Time
              </h3>
            </div>
            <div className="p-4">
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-sm">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm" style={{ color: "#665f5b" }}>
                    Performance chart will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
