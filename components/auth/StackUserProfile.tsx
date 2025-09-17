'use client';

import React from 'react';
import { useUser, useStackApp } from '@stackframe/stack';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface StackUserProfileProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const StackUserProfile: React.FC<StackUserProfileProps> = ({ isMobile = false, onClose }) => {
  const user = useUser();
  const app = useStackApp();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await user?.signOut();
      onClose?.();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Not authenticated state
  if (!user) {
    if (isMobile) {
      return (
        <Link
          href="/handler/signin"
          className="flex items-center justify-center w-full rounded bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
          onClick={onClose}
        >
          Sign In
        </Link>
      );
    }

    return (
      <>
        {/* Desktop Auth Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/handler/signin"
            className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Auth Icon */}
        <div className="flex md:hidden items-center">
          <Link
            href="/handler/signin"
            className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
            aria-label="Sign In"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </>
    );
  }

  // Authenticated user state
  return (
    <>
      {/* Authenticated User - Desktop with text, Mobile icon only */}
      <div className="hidden md:block relative group">
        <button className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors">
          {user.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt="Profile"
              className="w-4 h-4 rounded-full mr-2"
            />
          ) : (
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
              {(user.displayName || user.primaryEmail || 'U')[0].toUpperCase()}
            </div>
          )}
          {user.displayName || user.primaryEmail}
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              href="/handler/account-settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Account Settings
            </Link>
            <div className="border-t border-gray-100"></div>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Authenticated User - Mobile only */}
      <div className="inline-flex md:hidden relative group">
        <button className="inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors">
          {user.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              {(user.displayName || user.primaryEmail || 'U')[0].toUpperCase()}
            </div>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-100">
              {user.displayName || user.primaryEmail}
            </div>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={onClose}
            >
              Dashboard
            </Link>
            <Link
              href="/handler/account-settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={onClose}
            >
              Account Settings
            </Link>
            <div className="border-t border-gray-100"></div>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
