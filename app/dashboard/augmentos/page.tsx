'use client';

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

interface AugmentOSFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

const augmentosFeatures: AugmentOSFeature[] = [
  {
    id: 'natural-language',
    name: 'Natural Language Automation',
    description: 'Automate tasks with plain language',
    icon: '/products/augmentos/icons/natural-language.svg',
    href: '/product/augmentos',
  },
  {
    id: 'ai-models',
    name: 'Multi-AI Integration',
    description: 'ChatGPT, Claude, Gemini support',
    icon: '/products/augmentos/icons/ai-models.svg',
    href: '/product/augmentos',
  },
  {
    id: 'privacy-first',
    name: 'Privacy Protection',
    description: 'Local AI processing, zero tracking',
    icon: '/products/augmentos/icons/privacy.svg',
    href: '/product/augmentos',
  },
  {
    id: 'enterprise-security',
    name: 'Enterprise Security',
    description: 'SOC 2 compliance and controls',
    icon: '/products/augmentos/icons/security.svg',
    href: '/product/augmentos',
  },
  {
    id: 'chrome-compatibility',
    name: 'Chrome Extensions',
    description: 'Full extension compatibility',
    icon: '/products/augmentos/icons/extensions.svg',
    href: '/product/augmentos',
  },
  {
    id: 'team-management',
    name: 'Team Management',
    description: 'Role-based access control',
    icon: '/products/augmentos/icons/team.svg',
    href: '/product/augmentos',
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    description: 'Cross-website task automation',
    icon: '/products/augmentos/icons/workflow.svg',
    href: '/product/augmentos',
  },
  {
    id: 'mcp-integration',
    name: 'MCP Servers',
    description: 'Gmail, Calendar, Docs integration',
    icon: '/products/augmentos/icons/mcp.svg',
    href: '/product/augmentos',
  }
];

export default function AugmentOSDashboard() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-normal text-gray-900 mb-2">
                    AugmentOS
                  </h1>
                  <p className="text-gray-600">
                    Enterprise AI browser with intelligent automation and privacy-first design
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a
                    href="https://augmentos.augment.cfd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AugmentOS Features */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                AI Browser Features
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {augmentosFeatures.map((feature) => (
                  <a
                    key={feature.id}
                    href={feature.href}
                    className="group border border-gray-200 rounded-sm p-4 hover:shadow-md transition-all duration-200 hover:border-blue-500"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <img
                          src={feature.icon}
                          alt={`${feature.name} icon`}
                          className="w-6 h-6 relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/augmentos.svg';
                          }}
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-semibold group-hover:text-blue-600 transition-colors"
                          style={{ color: "#161513" }}
                        >
                          {feature.name}
                        </h4>
                        <p 
                          className="text-sm mt-1"
                          style={{ color: "#665f5b" }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                Why Choose AugmentOS
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h4>
                  <p className="text-gray-600">Local AI processing with zero tracking, unlike traditional browsers</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Language</h4>
                  <p className="text-gray-600">Automate tasks by simply describing what you want to accomplish</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0a2 2 0 002-2m-2 2a2 2 0 01-2-2m2 2H9m12 0v-4a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Ready</h4>
                  <p className="text-gray-600">Built for enterprise deployment with security controls and team management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                Get Started
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://augmentos.augment.cfd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-sm hover:shadow-md transition-all duration-200 hover:border-blue-500"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-sm flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Download App</h4>
                    <p className="text-sm text-gray-600">Get AugmentOS for your platform</p>
                  </div>
                </a>

                <a
                  href="/product/augmentos"
                  className="flex items-center p-4 border border-gray-200 rounded-sm hover:shadow-md transition-all duration-200 hover:border-blue-500"
                >
                  <div className="w-10 h-10 bg-green-50 rounded-sm flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Learn More</h4>
                    <p className="text-sm text-gray-600">Explore features and capabilities</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
