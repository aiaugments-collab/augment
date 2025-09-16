'use client';

import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

interface ERPModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

const erpModules: ERPModule[] = [
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Financial management',
    icon: '/products/erp/icons/accounting.svg',
    href: 'https://erp.augment.cfd/app/accounting',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Stock management',
    icon: '/products/erp/icons/inventory.svg',
    href: 'https://erp.augment.cfd/app/stock',
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'Sales management',
    icon: '/products/erp/icons/sales.svg',
    href: 'https://erp.augment.cfd/app/selling',
  },
  {
    id: 'purchasing',
    name: 'Purchasing',
    description: 'Purchase management',
    icon: '/products/erp/icons/purchasing.svg',
    href: 'https://erp.augment.cfd/app/buying',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Production control',
    icon: '/products/erp/icons/manufacturing.svg',
    href: 'https://erp.augment.cfd/app/manufacturing',
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Project tracking',
    icon: '/products/erp/icons/projects.svg',
    href: 'https://erp.augment.cfd/app/projects',
  },
  {
    id: 'crm',
    name: 'CRM',
    description: 'Customer relations',
    icon: '/products/erp/icons/crm.svg',
    href: 'https://erp.augment.cfd/app/crm',
  },
  {
    id: 'assets',
    name: 'Assets',
    description: 'Asset tracking',
    icon: '/products/erp/icons/assets.svg',
    href: 'https://erp.augment.cfd/app/assets',
  },
  {
    id: 'hr',
    name: 'HR',
    description: 'Human resources',
    icon: '/products/erp/icons/hr.svg',
    href: 'https://erp.augment.cfd/app/hr',
  },
  {
    id: 'payroll',
    name: 'Payroll',
    description: 'Payroll management',
    icon: '/products/erp/icons/payroll.svg',
    href: 'https://erp.augment.cfd/app/payroll',
  }
];

export default function ERPDashboard() {
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
                    AugmentERP
                  </h1>
                  <p className="text-gray-600">
                    Access your business applications and manage operations
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a
                    href="https://erp.augment.cfd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open ERP System
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ERP Modules */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                ERP Applications
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {erpModules.map((module) => (
                  <a
                    key={module.id}
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-gray-200 rounded-sm p-4 hover:shadow-md transition-all duration-200 hover:border-[#C74634]"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center  group-hover:bg-opacity-5 transition-colors">
                        <img
                          src={module.icon}
                          alt={`${module.name} icon`}
                          className="w-6 h-6 relative z-10"
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-semibold group-hover:text-[#C74634] transition-colors"
                          style={{ color: "#161513" }}
                        >
                          {module.name}
                        </h4>
                        <p 
                          className="text-sm mt-1"
                          style={{ color: "#665f5b" }}
                        >
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div 
            className="bg-white border border-gray-200 shadow-sm"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 
                className="text-lg font-medium"
                style={{ color: "#161513" }}
              >
                System Status
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-4 border border-gray-200 rounded-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-sm flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: "#161513" }}>10</p>
                    <p className="text-sm" style={{ color: "#665f5b" }}>Active Modules</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border border-gray-200 rounded-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: "#161513" }}>99.9%</p>
                    <p className="text-sm" style={{ color: "#665f5b" }}>Uptime</p>
                  </div>
                </div>

                <div className="flex items-center p-4 border border-gray-200 rounded-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-sm flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: "#161513" }}>24/7</p>
                    <p className="text-sm" style={{ color: "#665f5b" }}>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
