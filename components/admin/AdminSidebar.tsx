'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BarChart3, 
  Package, 
  DollarSign, 
  Users, 
  Activity, 
  Shield, 
  Settings, 
  FileText,
  X
} from 'lucide-react'

interface SidebarItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

const navigationItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: BarChart3
  },
  {
    name: 'Apps Management',
    href: '/admin/apps',
    icon: Package
  },
  {
    name: 'Revenue Analytics',
    href: '/admin/revenue',
    icon: DollarSign
  },
  {
    name: 'Customer Insights',
    href: '/admin/customers',
    icon: Users
  },
  {
    name: 'API Management',
    href: '/admin/api',
    icon: Activity
  },
  {
    name: 'Security Center',
    href: '/admin/security',
    icon: Shield
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings
  },
  {
    name: 'Audit Logs',
    href: '/admin/logs',
    icon: FileText
  }
]

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
          md:fixed md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ 
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
        }}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <div className="flex items-center space-x-3">
            <img src="/augment-logo.svg" alt="Augment Admin" className="h-6" />
            <span className="text-lg font-semibold text-[#1e3a5f]">Admin</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${active 
                    ? 'bg-[#1e3a5f] text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#1e3a5f]'
                  }
                `}
                onClick={onClose}
              >
                <Icon className={`
                  w-4 h-4 mr-3 transition-colors
                  ${active ? 'text-white' : 'text-gray-500 group-hover:text-[#1e3a5f]'}
                `} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
