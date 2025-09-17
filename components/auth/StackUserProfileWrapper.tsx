'use client';

import React, { Suspense } from 'react';
import { StackUserProfile } from './StackUserProfile';

interface StackUserProfileWrapperProps {
  isMobile?: boolean;
  onClose?: () => void;
}

// Loading component for Suspense fallback
const UserProfileLoading: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
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
};

export const StackUserProfileWrapper: React.FC<StackUserProfileWrapperProps> = ({ isMobile = false, onClose }) => {
  return (
    <Suspense fallback={<UserProfileLoading isMobile={isMobile} />}>
      <StackUserProfile isMobile={isMobile} onClose={onClose} />
    </Suspense>
  );
};
