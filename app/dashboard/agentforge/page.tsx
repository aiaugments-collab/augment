'use client';

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

interface AgentForgeFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

const agentforgeFeatures: AgentForgeFeature[] = [
  {
    id: 'ai-agents',
    name: 'Smart AI Agents',
    description: 'Intelligent agents with decision-making',
    icon: '/products/agentforge/icons/ai-agents.svg',
    href: '/product/agentforge',
  },
  {
    id: 'no-code-builder',
    name: 'No-Code Builder',
    description: 'Visual workflow automation',
    icon: '/products/agentforge/icons/no-code.svg',
    href: '/product/agentforge',
  },
  {
    id: 'integrations',
    name: '431+ Integrations',
    description: 'Massive connector ecosystem',
    icon: '/products/agentforge/icons/integrations.svg',
    href: '/product/agentforge',
  },
  {
    id: 'open-source',
    name: 'Open Source',
    description: 'Fully customizable platform',
    icon: '/products/agentforge/icons/open-source.svg',
    href: '/product/agentforge',
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple agents',
    icon: '/products/agentforge/icons/orchestration.svg',
    href: '/product/agentforge',
  },
  {
    id: 'enterprise-security',
    name: 'Enterprise Security',
    description: 'SOC 2 compliance and controls',
    icon: '/products/agentforge/icons/security.svg',
    href: '/product/agentforge',
  },
  {
    id: 'real-time-monitoring',
    name: 'Real-Time Monitoring',
    description: 'Workflow execution analytics',
    icon: '/products/agentforge/icons/monitoring.svg',
    href: '/product/agentforge',
  },
  {
    id: 'self-hosted',
    name: 'Self-Hosted Deployment',
    description: 'Docker and Kubernetes support',
    icon: '/products/agentforge/icons/deployment.svg',
    href: '/product/agentforge',
  }
];

export default function AgentForgeDashboard() {
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
                    AgentForge
                  </h1>
                  <p className="text-gray-600">
                    No-code AI automation platform with smart agents and 431+ integrations
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <a
                    href="https://agentforge.augment.cfd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Start Free
                  </a>
                  <a
                    href="https://agentforge.augment.cfd/docs/install/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AgentForge Features */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                AI Automation Features
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {agentforgeFeatures.map((feature) => (
                  <a
                    key={feature.id}
                    href={feature.href}
                    className="group border border-gray-200 rounded-sm p-4 hover:shadow-md transition-all duration-200 hover:border-orange-500"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                        <img
                          src={feature.icon}
                          alt={`${feature.name} icon`}
                          className="w-6 h-6 relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/agentforge.svg';
                          }}
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-semibold group-hover:text-orange-600 transition-colors"
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
                Why Choose AgentForge
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No-Code Simplicity</h4>
                  <p className="text-gray-600">Build sophisticated AI agents without writing a single line of code</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">431+ Integrations</h4>
                  <p className="text-gray-600">Connect to virtually any tool or service in your tech stack</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h4>
                  <p className="text-gray-600">Fully open source platform with complete customization control</p>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://agentforge.augment.cfd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-sm hover:shadow-md transition-all duration-200 hover:border-orange-500"
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-sm flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Start Free</h4>
                    <p className="text-sm text-gray-600">Build your first AI agent</p>
                  </div>
                </a>

                <a
                  href="https://agentforge.augment.cfd/docs/install/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-sm hover:shadow-md transition-all duration-200 hover:border-orange-500"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-sm flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documentation</h4>
                    <p className="text-sm text-gray-600">Learn how to deploy and use</p>
                  </div>
                </a>

                <a
                  href="/product/agentforge"
                  className="flex items-center p-4 border border-gray-200 rounded-sm hover:shadow-md transition-all duration-200 hover:border-orange-500"
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
