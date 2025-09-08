'use client';

import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { currentUser, userData } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
            <p className="mt-2 text-gray-600">
              Manage your account settings and preferences.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Account Information</h2>
            </div>
            
            <div className="px-6 py-4 space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  {currentUser?.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="Profile"
                      className="w-20 h-20 rounded-full"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-medium">
                      {(userData?.displayName || currentUser?.email || 'U')[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {userData?.displayName || 'No name set'}
                  </h3>
                  <p className="text-gray-600">{currentUser?.email}</p>
                  <button className="mt-2 text-sm text-blue-600 hover:text-blue-500">
                    Change photo
                  </button>
                </div>
              </div>

              {/* Account Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={userData?.displayName || ''}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your display name"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={currentUser?.email || ''}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Member Since
                  </label>
                  <input
                    type="text"
                    value={userData?.createdAt ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString() : 'Recently'}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Status
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Update Profile
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Security & Privacy</h2>
            </div>
            
            <div className="px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                  Enable
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Login Activity</h3>
                  <p className="text-sm text-gray-600">View recent login activity and sessions</p>
                </div>
                <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                  View
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Data Export</h3>
                  <p className="text-sm text-gray-600">Download a copy of your account data</p>
                </div>
                <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="mt-8 bg-white shadow rounded-lg border border-red-200">
            <div className="px-6 py-4 border-b border-red-200">
              <h2 className="text-lg font-medium text-red-900">Danger Zone</h2>
            </div>
            
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-red-900">Delete Account</h3>
                  <p className="text-sm text-red-600">Permanently delete your account and all associated data</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
