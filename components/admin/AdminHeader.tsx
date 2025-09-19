'use client'

import React from 'react'
import Link from 'next/link'
import { Search, Bell, User, Menu } from 'lucide-react'

interface AdminHeaderProps {
  onMobileMenuToggle?: () => void
  showMobileMenuButton?: boolean
}

export default function AdminHeader({ 
  onMobileMenuToggle, 
  showMobileMenuButton = false 
}: AdminHeaderProps) {
  return (
    <header 
      className="sticky top-0 z-40 bg-[#1e3a5f] border-b border-gray-200"
      style={{ 
        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
      }}
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4 ">
          {/* Mobile menu button - only show on tablet */}
          {showMobileMenuButton && (
            <button
              onClick={onMobileMenuToggle}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          
          {/* Logo */}
          <Link href="/admin" className="flex items-center">
            <div className="flex items-center text-white space-x-3">
              <img 
                src="/augment-logo.svg" 
                alt="Augment Admin" 
                className="h-8 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-white">Super Admin</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center Section - Search (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search admin panel..."
              className="
                block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                text-sm placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent
                bg-gray-50 hover:bg-white transition-colors
              "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile search button */}
          <button className="md:hidden p-2 rounded-lg text-white hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg text-white hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#c74634] text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button className="flex items-center space-x-2 p-2 rounded-l text-white hover:text-[#1e3a5f] hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-[#1e3a5f]" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-[#1e3a5f]">
                Admin
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
