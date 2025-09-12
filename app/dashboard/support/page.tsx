'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('help');

  const tabs = [
    { id: 'help', label: 'Help Center', icon: '❓' },
    { id: 'tickets', label: 'Support Tickets', icon: '🎫' },
    { id: 'chat', label: 'Live Chat', icon: '💬' },
    { id: 'status', label: 'System Status', icon: '🟢' }
  ];

  const helpCategories = [
    {
      category: 'Getting Started',
      links: [
        { title: 'Getting Started Guide', href: '/knowledge/getting-started' },
        { title: 'Product Documentation', href: '/product-docs' },
        { title: 'User Guides', href: '/product-docs/user-guides' }
      ]
    },
    {
      category: 'API Documentation',
      links: [
        { title: 'Developer Documentation', href: '/developers/docs' },
        { title: 'API Authentication', href: '/knowledge/api-authentication' },
        { title: 'API Reference', href: '/developers/apis' }
      ]
    },
    {
      category: 'Troubleshooting',
      links: [
        { title: 'Troubleshooting Guide', href: '/knowledge/troubleshooting' },
        { title: 'Performance Tips', href: '/knowledge/performance' },
        { title: 'Technical Help Forum', href: '/forums/technical-help' }
      ]
    }
  ];

  const supportTickets = [
    { id: 'TICK-001', subject: 'API rate limit exceeded', status: 'Open', priority: 'High', created: '2025-01-15' },
    { id: 'TICK-002', subject: 'Integration with Slack not working', status: 'In Progress', priority: 'Medium', created: '2025-01-14' },
    { id: 'TICK-003', subject: 'Billing question about usage', status: 'Resolved', priority: 'Low', created: '2025-01-13' },
    { id: 'TICK-004', subject: 'Feature request: Custom webhooks', status: 'Open', priority: 'Medium', created: '2025-01-12' }
  ];

  const systemStatus = [
    { service: 'API Gateway', status: 'Operational', uptime: '99.9%', lastIncident: 'None' },
    { service: 'AI Processing', status: 'Operational', uptime: '99.8%', lastIncident: '2 days ago' },
    { service: 'Database', status: 'Operational', uptime: '100%', lastIncident: 'None' },
    { service: 'Authentication', status: 'Operational', uptime: '99.9%', lastIncident: 'None' },
    { service: 'Webhooks', status: 'Degraded', uptime: '98.5%', lastIncident: '1 hour ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTicketStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'text-blue-600 bg-blue-100';
      case 'in progress':
        return 'text-yellow-600 bg-yellow-100';
      case 'resolved':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
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
                Support Center
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Get help, track tickets, and check system status
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="/knowledge"
              className="p-4 bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left block"
              style={{ fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)" }}
            >
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-sm" style={{ color: "#161513" }}>Knowledge Base</h3>
              <p className="text-xs mt-1" style={{ color: "#665f5b" }}>Find answers to common questions</p>
            </a>
            <a 
              href="/portal"
              className="p-4 bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left block"
              style={{ fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)" }}
            >
              <div className="text-2xl mb-2">🎫</div>
              <h3 className="font-semibold text-sm" style={{ color: "#161513" }}>Support Portal</h3>
              <p className="text-xs mt-1" style={{ color: "#665f5b" }}>Access support tickets and resources</p>
            </a>
            <a 
              href="/forums"
              className="p-4 bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left block"
              style={{ fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)" }}
            >
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold text-sm" style={{ color: "#161513" }}>Community Forums</h3>
              <p className="text-xs mt-1" style={{ color: "#665f5b" }}>Connect with other users</p>
            </a>
            <a 
              href="/developers/docs"
              className="p-4 bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left block"
              style={{ fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)" }}
            >
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-semibold text-sm" style={{ color: "#161513" }}>API Documentation</h3>
              <p className="text-xs mt-1" style={{ color: "#665f5b" }}>Technical documentation and guides</p>
            </a>
          </div>

          {/* Tabs */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-current'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={activeTab === tab.id ? { 
                      color: "#C74634",
                      borderColor: "#C74634"
                    } : { color: "#665f5b" }}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4">
              {/* Help Center Tab */}
              {activeTab === 'help' && (
                <div className="space-y-6">
                  {helpCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-3" style={{ color: "#161513" }}>
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex} 
                            href={link.href}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors block"
                          >
                            <h4 className="text-sm font-medium" style={{ color: "#161513" }}>
                              {link.title}
                            </h4>
                            <svg className="w-4 h-4" style={{ color: "#665f5b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Support Tickets Tab */}
              {activeTab === 'tickets' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold" style={{ color: "#161513" }}>
                      Your Support Tickets
                    </h3>
                    <button 
                      className="px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                      style={{ backgroundColor: "#C74634" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                    >
                      New Ticket
                    </button>
                  </div>
                  <div className="space-y-3">
                    {supportTickets.map((ticket, index) => (
                      <div key={index} className="border border-gray-200 rounded-sm p-4 hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <h4 className="text-sm font-medium" style={{ color: "#161513" }}>
                                {ticket.subject}
                              </h4>
                              <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${getTicketStatusColor(ticket.status)}`}>
                                {ticket.status}
                              </span>
                              <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                                {ticket.priority}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs" style={{ color: "#665f5b" }}>
                                {ticket.id}
                              </span>
                              <span className="text-xs" style={{ color: "#665f5b" }}>
                                Created: {ticket.created}
                              </span>
                            </div>
                          </div>
                          <button 
                            className="text-sm hover:underline transition-colors"
                            style={{ color: "#C74634" }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Chat Tab */}
              {activeTab === 'chat' && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#161513" }}>
                    Live Chat Support
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "#665f5b" }}>
                    Connect with our support team for real-time assistance
                  </p>
                  <div className="space-y-3">
                    <div className="text-sm" style={{ color: "#665f5b" }}>
                      <strong>Available Hours:</strong> Monday - Friday, 9 AM - 6 PM PST
                    </div>
                    <div className="text-sm" style={{ color: "#665f5b" }}>
                      <strong>Average Response Time:</strong> 2-3 minutes
                    </div>
                  </div>
                  <button 
                    className="mt-6 px-6 py-3 text-sm font-medium rounded-sm text-white transition-colors"
                    style={{ backgroundColor: "#C74634" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                  >
                    Start Chat Session
                  </button>
                </div>
              )}

              {/* System Status Tab */}
              {activeTab === 'status' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold" style={{ color: "#161513" }}>
                    System Status
                  </h3>
                  <div className="space-y-3">
                    {systemStatus.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-sm p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-sm font-medium" style={{ color: "#161513" }}>
                              {service.service}
                            </h4>
                            <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${getStatusColor(service.status)}`}>
                              {service.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-6 text-sm" style={{ color: "#665f5b" }}>
                            <span>Uptime: {service.uptime}</span>
                            <span>Last incident: {service.lastIncident}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-sm border border-blue-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-blue-800">
                        Subscribe to status updates to get notified of any service disruptions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
