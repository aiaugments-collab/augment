'use client'

import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminBottomNav from './AdminBottomNav'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader 
        onMobileMenuToggle={() => setSidebarOpen(true)}
        showMobileMenuButton={true}
      />

      {/* Sidebar - handles both desktop and mobile */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Main content */}
      <main className="md:ml-72 min-h-screen">
        <div className="p-4 sm:p-6 pb-20 lg:pb-6">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <AdminBottomNav />
    </div>
  )
}
