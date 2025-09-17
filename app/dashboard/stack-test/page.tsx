'use client';

import Link from 'next/link';
import { UserProfile, ProtectedContent, UserInfo } from '@/components/auth/StackAuthComponents';

export default function StackTestPage() {
  return (
    <ProtectedContent>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                Stack Auth Test Dashboard
              </h1>
              <UserProfile />
            </div>
          </div>

          {/* User Info Card */}
          <div className="mb-8">
            <UserInfo />
          </div>

          {/* Welcome Content */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">🎉 Stack Auth is Working!</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Congratulations! You have successfully set up Stack Auth in your Next.js application.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Available Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Email/Password Authentication:</strong> Visit <Link href="/handler/signup" className="text-blue-600 hover:underline">/handler/signup</Link></li>
                <li><strong>Google OAuth:</strong> Sign in with Google account</li>
                <li><strong>Account Settings:</strong> Visit <Link href="/handler/account-settings" className="text-blue-600 hover:underline">/handler/account-settings</Link></li>
                <li><strong>Password Reset:</strong> Available in the sign-in flow</li>
                <li><strong>Email Verification:</strong> Automatic email verification</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-6">Quick Links:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Link 
                  href="/handler/signup" 
                  className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="font-medium text-blue-900">Sign Up Page</div>
                  <div className="text-sm text-blue-700">Create a new account</div>
                </Link>
                <Link 
                  href="/handler/signin" 
                  className="block p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="font-medium text-green-900">Sign In Page</div>
                  <div className="text-sm text-green-700">Sign in to existing account</div>
                </Link>
                <Link 
                  href="/handler/account-settings" 
                  className="block p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="font-medium text-purple-900">Account Settings</div>
                  <div className="text-sm text-purple-700">Manage your profile</div>
                </Link>
                <a 
                  href="/dashboard" 
                  className="block p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <div className="font-medium text-orange-900">Main Dashboard</div>
                  <div className="text-sm text-orange-700">Go to your dashboard</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedContent>
  );
}
