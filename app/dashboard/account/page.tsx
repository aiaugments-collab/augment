'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';

export default function AccountPage() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Settings', icon: '' },
    { id: 'security', label: 'Security', icon: '' },
    { id: 'team', label: 'Team Management', icon: '' },
    { id: 'organization', label: 'Organization', icon: '' }
  ];

  const teamMembers = [
    { name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'Active', avatar: 'JD' },
    { name: 'Jane Smith', email: 'jane@company.com', role: 'Member', status: 'Active', avatar: 'JS' },
    { name: 'Mike Johnson', email: 'mike@company.com', role: 'Member', status: 'Pending', avatar: 'MJ' }
  ];

  const securitySettings = [
    { name: 'Two-Factor Authentication', description: 'Add an extra layer of security', enabled: true },
    { name: 'Login Notifications', description: 'Get notified of new sign-ins', enabled: true },
    { name: 'Session Management', description: 'Manage active sessions', enabled: false }
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 
                className="text-2xl font-bold mb-2"
                style={{ 
                  color: "#161513",
                  fontFamily: "var(--oracleserif, serif)"
                }}
              >
                Account Settings
              </h1>
              <p 
                className="text-sm"
                style={{ 
                  color: "#665f5b",
                  fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
                }}
              >
                Manage your account preferences and security settings
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div 
            className="bg-white rounded-sm shadow-sm"
            style={{ 
              border: "1px solid #e5e5e5",
              fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
          >
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-current text-white'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={activeTab === tab.id ? { 
                      color: "#C74634",
                      borderColor: "#C74634"
                    } : { color: "#665f5b" }}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4">
              {/* Profile Settings Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold"
                      style={{ backgroundColor: "#C74634" }}
                    >
                      {(currentUser?.displayName || currentUser?.email || 'U')[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: "#161513" }}>
                        {currentUser?.displayName || 'User'}
                      </h3>
                      <p className="text-sm" style={{ color: "#665f5b" }}>
                        {currentUser?.email}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={currentUser?.displayName || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={currentUser?.email || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                        Job Title
                      </label>
                      <input
                        type="text"
                        placeholder="Your job title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button 
                      className="px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                      style={{ backgroundColor: "#C74634" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#161513" }}>
                      Security Settings
                    </h3>
                    <div className="space-y-4">
                      {securitySettings.map((setting, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div>
                            <h4 className="text-sm font-medium" style={{ color: "#161513" }}>
                              {setting.name}
                            </h4>
                            <p className="text-xs" style={{ color: "#665f5b" }}>
                              {setting.description}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <button
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                setting.enabled ? 'bg-green-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  setting.enabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#161513" }}>
                      Change Password
                    </h3>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                      <button 
                        className="px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                        style={{ backgroundColor: "#C74634" }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Team Management Tab */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold" style={{ color: "#161513" }}>
                      Team Members
                    </h3>
                    <button 
                      className="px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                      style={{ backgroundColor: "#C74634" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                    >
                      Invite Member
                    </button>
                  </div>

                  <div className="space-y-3">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                            style={{ backgroundColor: "#C74634" }}
                          >
                            {member.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium" style={{ color: "#161513" }}>
                              {member.name}
                            </p>
                            <p className="text-xs" style={{ color: "#665f5b" }}>
                              {member.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm" style={{ color: "#665f5b" }}>
                            {member.role}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${
                            member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {member.status}
                          </span>
                          <button 
                            className="text-sm hover:underline transition-colors"
                            style={{ color: "#C74634" }}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Organization Tab */}
              {activeTab === 'organization' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#161513" }}>
                      Organization Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Organization Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Acme Corporation"
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Industry
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        >
                          <option>Technology</option>
                          <option>Healthcare</option>
                          <option>Finance</option>
                          <option>Education</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Company Size
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        >
                          <option>1-10 employees</option>
                          <option>11-50 employees</option>
                          <option>51-200 employees</option>
                          <option>201-1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#161513" }}>
                          Website
                        </label>
                        <input
                          type="url"
                          placeholder="https://example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-blue-500"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button 
                      className="px-4 py-2 text-sm font-medium rounded-sm text-white transition-colors"
                      style={{ backgroundColor: "#C74634" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#b03e2d"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#C74634"}
                    >
                      Save Organization Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
