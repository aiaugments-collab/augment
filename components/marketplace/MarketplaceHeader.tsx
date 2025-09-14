'use client'

import React, { useState } from 'react'
import { Search, Menu, User, Globe, ChevronDown, Bell, Heart } from 'lucide-react'

interface MarketplaceHeaderProps {
  onMobileMenuToggle: () => void
}

export default function MarketplaceHeader({ onMobileMenuToggle }: MarketplaceHeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [showResourcesMenu, setShowResourcesMenu] = useState(false)
  const [showPublishersMenu, setShowPublishersMenu] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={onMobileMenuToggle}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img 
                src="/augment-logo.svg" 
                alt="Augment" 
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/augment-A-blackbg.svg'
                }}
              />
              <div className="hidden sm:block">
                <span className="text-xl font-semibold text-gray-900">Cloud Marketplace</span>
              </div>
            </div>
          </div>

          {/* Center Section - Search (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search applications, services, and solutions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Right Section - Navigation */}
          <nav className="flex items-center space-x-1 lg:space-x-4">
            {/* Search Icon (Mobile) */}
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden lg:inline">English</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Español</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Français</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Deutsch</a>
                </div>
              )}
            </div>

            {/* Sign In */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Sign In</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Heart className="w-4 h-4 mr-3" />
                    My Favorite Apps
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Bell className="w-4 h-4 mr-3" />
                    Manage Applications
                  </a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign Out</a>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative hidden lg:block">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowResourcesMenu(!showResourcesMenu)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showResourcesMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Help</div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Help for This Page</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">How Do I?</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Videos and Tutorials</a>
                  <hr className="my-1" />
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Support</div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Technical Support</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Community Forums</a>
                </div>
              )}
            </div>

            {/* Publishers */}
            <div className="relative hidden lg:block">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowPublishersMenu(!showPublishersMenu)}
              >
                <span>Publishers</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showPublishersMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Become a Publisher</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Submit Interest to Become a Publisher</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Partner Portal</a>
                </div>
              )}
            </div>

            {/* Oracle Cloud Home Link */}
            <a 
              href="#" 
              className="hidden xl:block text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Augment Cloud Home
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden border-t border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search applications and services..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      </div>
    </header>
  )
}
