'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { BookOpen, Rocket, Shield, Settings, AlertTriangle } from 'lucide-react';

export default function DeveloperPage() {
  const documentationLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and guides',
      href: '/developers/docs',
      icon: '',
      color: '#C74634'
    },
    {
      title: 'Product Documentation',
      description: 'User guides and product documentation',
      href: '/product-docs',
      icon: '',
      color: '#4A90E2'
    },
    {
      title: 'Knowledge Base',
      description: 'Troubleshooting and FAQ',
      href: '/knowledge',
      icon: '',
      color: '#50C878'
    },
    {
      title: 'Developer Community',
      description: 'Connect with other developers',
      href: '/developers/community',
      icon: '',
      color: '#FF6B35'
    }
  ];

  const quickLinks = [
    {
      title: 'Getting Started',
      description: 'Learn how to integrate with our APIs',
      href: '/product-docs/getting-started',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'API Authentication',
      description: 'Authentication methods and best practices',
      href: '/knowledge/api-authentication',
      icon: ''
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      href: '/knowledge/integrations',
      icon: ''
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      href: '/knowledge/troubleshooting',
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-normal text-gray-900 mb-2">
                Developer Resources
              </h1>
              <p className="text-gray-600">
                Access documentation, manage API keys, and explore developer tools
              </p>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow block"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-8 h-8 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: link.color }}
                    >
                      <span className="text-white text-sm">{link.icon}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{link.title}</p>
                    <p className="text-xs mt-1 text-gray-600">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Quick Links
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center p-4 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-2xl mr-4">{link.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium" style={{ color: "#161513" }}>
                        {link.title}
                      </h4>
                      <p className="text-xs mt-1" style={{ color: "#665f5b" }}>
                        {link.description}
                      </p>
                    </div>
                    <svg className="w-4 h-4 ml-auto" style={{ color: "#665f5b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium" style={{ color: "#161513" }}>
                Additional Resources
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="/developers/samples"
                  className="p-4 bg-blue-50 rounded-sm border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <h4 className="font-semibold text-blue-900 mb-2">Code Samples</h4>
                  <p className="text-sm text-blue-800">
                    Ready-to-use code examples and snippets
                  </p>
                </a>
                <a
                  href="/developers/tools"
                  className="p-4 bg-green-50 rounded-sm border border-green-200 hover:bg-green-100 transition-colors"
                >
                  <h4 className="font-semibold text-green-900 mb-2">Developer Tools</h4>
                  <p className="text-sm text-green-800">
                    SDKs, libraries, and development tools
                  </p>
                </a>
                <a
                  href="/forums/technical-help"
                  className="p-4 bg-orange-50 rounded-sm border border-orange-200 hover:bg-orange-100 transition-colors"
                >
                  <h4 className="font-semibold text-orange-900 mb-2">Community Support</h4>
                  <p className="text-sm text-orange-800">
                    Get help from the developer community
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
