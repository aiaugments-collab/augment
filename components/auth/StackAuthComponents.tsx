'use client';

import { useUser, useStackApp } from "@stackframe/stack";
import Link from "next/link";

// Simple user profile component
export function UserProfile() {
  const user = useUser();
  const app = useStackApp();

  if (!user) {
    return (
      <div className="flex space-x-4">
        <Link 
          href="/handler/signin" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        {user.profileImageUrl && (
          <img 
            src={user.profileImageUrl} 
            alt="Profile" 
            className="w-8 h-8 rounded-full"
          />
        )}
        <span className="text-gray-700">
          Welcome, {user.displayName || user.primaryEmail}!
        </span>
      </div>
      <button
        onClick={() => user?.signOut()}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}

// Protected content component
export function ProtectedContent({ children }: { children: React.ReactNode }) {
  const user = useUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Authentication Required
          </h2>
          <p className="text-gray-600 mb-6">
            Please sign in to access this content.
          </p>
          <Link 
            href="/handler/signin" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// User info display component
export function UserInfo() {
  const user = useUser();
  
  if (!user) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">User Information</h3>
      <div className="space-y-2">
        <p><strong>Email:</strong> {user.primaryEmail}</p>
        <p><strong>Display Name:</strong> {user.displayName || 'Not set'}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Email Verified:</strong> {user.primaryEmailVerified ? 'Yes' : 'No'}</p>
        <div className="mt-4">
          <Link 
            href="/handler/account-settings" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
