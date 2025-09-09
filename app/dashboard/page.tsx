'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { getLiveProducts, getProductsByStatus } from '@/lib/productRegistry';

export default function DashboardPage() {
  const { currentUser, loading, isAuthenticated } = useAuth();
  const router = useRouter();

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

  const liveProducts = getLiveProducts();
  const comingSoonProducts = getProductsByStatus('coming-soon');

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
                <p className="text-2xl font-semibold" style={{ color: "#161513" }}>{25}</p>
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
              {liveProducts.slice(0, 6).map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
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
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {product.status}
                    </span>
                    <a
                      href={product.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-500"
                    >
                      Launch →
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
