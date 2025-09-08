'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { currentUser, userData, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {userData?.displayName || currentUser?.email}!
          </h1>
          <p className="mt-2 text-gray-600">
            Here's your personalized dashboard with all your AI products and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="text-gray-900">{currentUser?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Member since:</span>
                <span className="text-gray-900">
                  {userData?.createdAt ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString() : 'Recently'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>

          {/* AI Products */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">AI Products</h3>
            <div className="space-y-3">
              <a href="/product/coding-agent" className="block p-3 border rounded-lg hover:bg-gray-50">
                <div className="font-medium text-gray-900">Coding Agent</div>
                <div className="text-sm text-gray-600">AI-powered coding assistant</div>
              </a>
              <a href="/product/searchai" className="block p-3 border rounded-lg hover:bg-gray-50">
                <div className="font-medium text-gray-900">SearchAI</div>
                <div className="text-sm text-gray-600">Intelligent search platform</div>
              </a>
              <a href="/product/hr-automation" className="block p-3 border rounded-lg hover:bg-gray-50">
                <div className="font-medium text-gray-900">HR Automation</div>
                <div className="text-sm text-gray-600">Streamline HR processes</div>
              </a>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="text-sm text-gray-600">Signed in to dashboard</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-sm text-gray-600">Account created successfully</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/product"
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-medium text-gray-900">Explore Products</div>
              </div>
            </a>
            <a
              href="/profile"
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-medium text-gray-900">Settings</div>
              </div>
            </a>
            <a
              href="/support"
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-sm font-medium text-gray-900">Support</div>
              </div>
            </a>
            <a
              href="/documentation"
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📚</div>
                <div className="text-sm font-medium text-gray-900">Docs</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
