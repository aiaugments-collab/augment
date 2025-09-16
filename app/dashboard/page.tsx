'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { marketplaceApps } from '@/lib/marketplaceData';

export default function DashboardPage() {
  const { currentUser, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  
  // Get user's apps (simulate user having some apps from marketplace)
  const userApps = marketplaceApps.slice(0, 12); // User has first 12 apps
  const activeAppsCount = userApps.length;

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div 
        className="min-h-screen bg-white flex items-center justify-center"
        style={{ fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)" }}
      >
        <div className="text-center">
          <div 
            className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto"
            style={{ borderColor: "#C74634" }}
          ></div>
          <p className="mt-4" style={{ color: "#161513" }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  // Get recently used apps
  const recentApps = userApps.slice(0, 6);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Professional Welcome Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-2xl border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-light mb-3 text-white">
                Welcome back, <span className="font-semibold">{currentUser?.displayName || currentUser?.email?.split('@')[0]}</span>
              </h1>
              <p className="text-slate-300 text-lg font-light">
                Manage your applications and track your usage across the Augment platform
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Oracle Style Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2zM9 11h6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Applications</p>
                <p className="text-2xl font-semibold text-gray-900">{activeAppsCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">API Calls This Month</p>
                <p className="text-2xl font-semibold text-gray-900">24.1K</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Storage Used</p>
                <p className="text-2xl font-semibold text-gray-900">12.4GB</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Plan Status</p>
                <p className="text-2xl font-semibold text-gray-900">Pro</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Applications */}
        <div className="bg-white border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">My Applications</h3>
              <a href="/dashboard/apps" className="text-sm text-blue-600 hover:text-blue-500">
                View all applications →
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentApps.map((app, index) => (
                <div key={app.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-300 group overflow-hidden">
                  {/* App Icon Section */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 relative">
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
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                          {app.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          by {app.publisher || 'Augment Technologies'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                      {app.description}
                    </p>
                    
                    {/* Rating and Pricing */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        app.pricing === 'Free' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {app.pricing}
                      </span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span className="text-xs text-gray-600">{app.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Updated {new Date(app.lastUpdated).toLocaleDateString()}
                      </span>
                      <a 
                        href={`/product/${app.id}`}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Open
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="/dashboard/apps"
                className="flex items-center justify-center p-6 border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2zM9 11h6" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Browse Apps</div>
                </div>
              </a>
              
              <a
                href="/dashboard/billing"
                className="flex items-center justify-center p-6 border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Billing & Plans</div>
                </div>
              </a>

              <a
                href="/dashboard/analytics"
                className="flex items-center justify-center p-6 border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-600 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Usage Analytics</div>
                </div>
              </a>

              <a
                href="/dashboard/support"
                className="flex items-center justify-center p-6 border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-600 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Get Support</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
