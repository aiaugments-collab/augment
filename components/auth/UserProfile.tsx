'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { logOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserProfileProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ isMobile = false, onClose }) => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      onClose?.();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    if (isMobile) {
      return (
        <div className="flex items-center justify-center w-full rounded bg-black px-4 py-3 text-sm font-medium text-white">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      );
    }
    return (
      <>
        {/* Desktop Loading */}
        <div className="hidden md:inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
        {/* Mobile Loading */}
        <div className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
      </>
    );
  }

  if (!currentUser) {
    if (isMobile) {
      return (
        <Link 
          href="/auth/login" 
          className="flex items-center justify-center w-full rounded bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
          onClick={onClose}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View Accounts
        </Link>
      );
    }

    return (
      <>
        {/* User Account Icon - Desktop with text, Mobile icon only */}
        <Link
          href="/auth/login"
          className="hidden md:inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View Accounts
        </Link>

        {/* User Account Icon - Mobile only */}
        <Link
          href="/auth/login"
          className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors"
          aria-label="View Accounts"
        >
          <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </>
    );
  }

  // User is authenticated - show user info with dropdown
  if (isMobile) {
    return (
      <div className="w-full space-y-2">
        <div className="flex items-center justify-center w-full rounded bg-black px-4 py-3 text-sm font-medium text-white">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
          ) : (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
              {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
            </div>
          )}
          {currentUser.displayName || currentUser.email}
        </div>
        <div className="space-y-1">
          <Link
            href="/dashboard"
            className="block w-full text-center px-4 py-2 text-sm text-white hover:bg-gray-700/30 transition-colors rounded"
            onClick={onClose}
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            className="block w-full text-center px-4 py-2 text-sm text-white hover:bg-gray-700/30 transition-colors rounded"
            onClick={onClose}
          >
            Profile Settings
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-center px-4 py-2 text-sm text-white hover:bg-gray-700/30 transition-colors rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Authenticated User - Desktop with text, Mobile icon only */}
      <div className="hidden md:block relative group">
        <button className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-4 h-4 rounded-full mr-2"
            />
          ) : (
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
              {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
            </div>
          )}
          {currentUser.displayName || currentUser.email}
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
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile Settings
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
        <button className="h-10 w-10 items-center justify-center rounded hover:bg-gray-700/50 transition-colors flex">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
            </div>
          )}
        </button>
      </div>
    </>
  );
};
