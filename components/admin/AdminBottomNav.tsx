'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BarChart3, 
  Package, 
  TrendingUp, 
  Users, 
  Settings 
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/admin',
    icon: BarChart3
  },
  {
    id: 'apps',
    label: 'Apps',
    href: '/admin/apps',
    icon: Package
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/admin/revenue',
    icon: TrendingUp
  },
  {
    id: 'users',
    label: 'Users',
    href: '/admin/customers',
    icon: Users
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/admin/settings',
    icon: Settings
  }
]

export default function AdminBottomNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 safe-area-pb"
      style={{ 
        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
                flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 rounded-lg transition-all duration-200
                ${active 
                  ? 'text-[#1e3a5f]' 
                  : 'text-gray-500 hover:text-[#1e3a5f]'
                }
              `}
            >
              <div className={`
                p-1.5 rounded-lg transition-all duration-200
                ${active 
                  ? 'bg-[#1e3a5f]/10' 
                  : 'hover:bg-gray-100'
                }
              `}>
                <Icon className={`
                  w-5 h-5 transition-colors duration-200
                  ${active ? 'text-[#1e3a5f]' : 'text-gray-500'}
                `} />
              </div>
              <span className={`
                text-xs font-medium mt-1 transition-colors duration-200 truncate
                ${active ? 'text-[#1e3a5f]' : 'text-gray-500'}
              `}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
