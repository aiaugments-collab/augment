'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { getLiveProducts, getProductsByStatus, PRODUCTS } from '@/lib/productRegistry';

export default function DashboardPage() {
  const { currentUser, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  
  // Get dynamic counts
  const liveProducts = getLiveProducts();
  const activeAppsCount = PRODUCTS.length; // Total apps count including coming-soon

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

  const comingSoonProducts = getProductsByStatus('coming-soon');

  // Color palette for app avatars
  const avatarColors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600', 
    'bg-purple-100 text-purple-600',
    'bg-orange-100 text-orange-600',
    'bg-pink-100 text-pink-600',
    'bg-indigo-100 text-indigo-600',
    'bg-red-100 text-red-600',
    'bg-yellow-100 text-yellow-600',
    'bg-teal-100 text-teal-600',
    'bg-cyan-100 text-cyan-600',
    'bg-emerald-100 text-emerald-600',
    'bg-violet-100 text-violet-600',
    'bg-fuchsia-100 text-fuchsia-600',
    'bg-rose-100 text-rose-600',
    'bg-amber-100 text-amber-600',
    'bg-lime-100 text-lime-600',
    'bg-sky-100 text-sky-600',
    'bg-slate-100 text-slate-600'
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4">
        {/* Welcome Header - Oracle Style */}
        <div 
          className="rounded-sm p-6 text-white shadow-sm"
          style={{ 
            backgroundColor: "#C74634",
            fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
          }}
        >
          <h1 
            className="text-3xl font-bold mb-4"
            style={{ 
              fontFamily: "var(--oracleserif, serif)",
              color: "#fff"
            }}
          >
            Welcome back, {currentUser?.displayName || currentUser?.email?.split('@')[0]}!
          </h1>
          {/* Oracle accent line */}
          <div 
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#fff",
              margin: "16px 0 24px 0"
            }}
          />
          <p style={{ color: "#fff", opacity: 0.9 }}>
            Manage your AI products and explore new possibilities with Augment's comprehensive suite.
          </p>
        </div>

        {/* Quick Stats - Oracle Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            className="bg-white rounded-sm shadow-sm p-4"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div 
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#C74634" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2zM9 11h6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: "#665f5b" }}>Active Apps</p>
                <p className="text-2xl font-semibold" style={{ color: "#161513" }}>{activeAppsCount}</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-sm shadow-sm p-4"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div 
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#3a3631" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: "#665f5b" }}>Usage This Month</p>
                <p className="text-2xl font-semibold" style={{ color: "#161513" }}>2.4k</p>
              </div>
            </div>
          </div>

      
          <div 
            className="bg-white rounded-sm shadow-sm p-4"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div 
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#C74634" }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: "#665f5b" }}>Team Members</p>
                <p className="text-2xl font-semibold" style={{ color: "#161513" }}>1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Apps */}
        <div className="bg-white rounded-sm shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Recently Used Apps</h3>
              <a href="/dashboard/apps" className="text-sm text-blue-600 hover:text-blue-500">
                View all apps →
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {liveProducts.slice(0, 6).map((product, index) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-gray-300 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${avatarColors[index % avatarColors.length]} shadow-sm`}>
                      <span className="font-bold text-base">
                        {product.shortName?.[0] || product.name[0]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.shortName || product.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      product.status === 'live' 
                        ? 'bg-green-100 text-green-800' 
                        : product.status === 'beta'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status === 'live' ? '✓ Live' : product.status === 'beta' ? '⚡ Beta' : '🚧 Coming Soon'}
                    </span>
                    <a
                      href={product.productUrl}
                      target={product.productUrl?.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {product.status === 'live' ? 'Launch' : 'View'} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-sm shadow-sm" style={{ border: "1px solid #e5e5e5" }}>
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/dashboard/apps"
                className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-medium text-gray-900">Browse Apps</div>
                </div>
              </a>
              <a
                href="/dashboard/account/profile"
                className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm font-medium text-gray-900">Settings</div>
                </div>
              </a>
              <a
                href="/dashboard/support"
                className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-medium text-gray-900">Support</div>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
