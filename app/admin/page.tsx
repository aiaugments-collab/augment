'use client'

import React from 'react'
import { 
  Users, 
  DollarSign, 
  Activity, 
  Server,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle,
  Settings,
  Package,
  Zap,
  Crown,
  Download
} from 'lucide-react'
import { marketplaceApps } from '../../lib/marketplaceData'
import AdminCard from '@/components/admin/AdminCard'

// Calculate real metrics from marketplace data
const totalApps = marketplaceApps.length
const paidApps = marketplaceApps.filter(app => app.pricing === 'Paid').length
const freeApps = marketplaceApps.filter(app => app.pricing === 'Free').length
const aiApps = marketplaceApps.filter(app => app.category === 'AI & Automation').length
const erpApps = marketplaceApps.filter(app => app.category === 'Enterprise Applications').length

// Mock user and revenue data based on apps
const mockMetrics = [
  {
    title: 'Total Applications',
    value: totalApps.toString(),
    change: '+8.3%',
    trend: 'up' as const,
    icon: Package,
    color: 'blue'
  },
  {
    title: 'Monthly Revenue',
    value: '$2.4M',
    change: '+23.1%',
    trend: 'up' as const,
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Active Users',
    value: '89,247',
    change: '+15.2%',
    trend: 'up' as const,
    icon: Users,
    color: 'purple'
  },
  {
    title: 'App Deployments',
    value: '156,832',
    change: '+31.7%',
    trend: 'up' as const,
    icon: Zap,
    color: 'orange'
  }
]

// Top performing apps based on actual marketplace data
const topApps = [
  { name: 'AI HR Agent', revenue: '$489K', users: '12,847', growth: '+34%' },
  { name: 'Financial Management', revenue: '$423K', users: '9,234', growth: '+28%' },
  { name: 'NeuroFlow Orchestrator', revenue: '$387K', users: '8,156', growth: '+41%' },
  { name: 'AI Search Engine', revenue: '$329K', users: '7,892', growth: '+52%' },
  { name: 'Procurement', revenue: '$284K', users: '6,743', growth: '+19%' }
]

const recentActivity = [
  {
    id: 1,
    type: 'app_deployment',
    message: 'New deployment: AI HR Agent by TechCorp Inc.',
    timestamp: '3 minutes ago',
    status: 'success',
    amount: '$2,499'
  },
  {
    id: 2,
    type: 'payment',
    message: 'Enterprise subscription: Financial Management',
    timestamp: '12 minutes ago',
    status: 'success',
    amount: '$8,999'
  },
  {
    id: 3,
    type: 'user_signup',
    message: 'New enterprise client: GlobalTech Solutions',
    timestamp: '28 minutes ago',
    status: 'success',
    amount: ''
  },
  {
    id: 4,
    type: 'app_update',
    message: 'NeuroFlow Orchestrator v2.1.4 deployed',
    timestamp: '1 hour ago',
    status: 'info',
    amount: ''
  },
  {
    id: 5,
    type: 'milestone',
    message: 'AI Search Engine reached 10K active users',
    timestamp: '2 hours ago',
    status: 'success',
    amount: ''
  }
]

const appCategories = [
  { 
    name: 'AI & Automation', 
    count: aiApps, 
    revenue: '$1.2M',
    growth: '+67%',
    color: 'blue'
  },
  { 
    name: 'Enterprise Applications', 
    count: erpApps, 
    revenue: '$894K',
    growth: '+23%',
    color: 'green'
  },
  { 
    name: 'Security & Monitoring', 
    count: marketplaceApps.filter(app => app.category === 'Data Security & Monitoring').length, 
    revenue: '$567K',
    growth: '+41%',
    color: 'red'
  },
  { 
    name: 'Cloud & Infrastructure', 
    count: marketplaceApps.filter(app => app.category === 'Cloud & Infrastructure').length, 
    revenue: '$342K',
    growth: '+19%',
    color: 'purple'
  }
]

export default function AdminDashboard() {
  return (
    <div 
      className="space-y-6"
      style={{ 
        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
      }}
    >
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f] mb-2">Platform Overview</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI-powered application marketplace with <span className="font-semibold text-[#1e3a5f]">{totalApps}</span> enterprise applications serving <span className="font-semibold text-[#1e3a5f]">89K+</span> users globally
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Monthly Recurring Revenue</div>
              <div className="text-2xl font-bold text-green-600">$2.4M</div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 rounded-lg transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMetrics.map((metric) => (
          <AdminCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            icon={metric.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Apps */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1e3a5f]">Top Performing Applications</h2>
              <button className="text-[#0066cc] hover:text-[#0066cc]/80 text-sm font-medium transition-colors">
                View All Apps →
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topApps.map((app, index) => (
                <div key={app.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#1e3a5f]/10 rounded-lg text-sm flex items-center justify-center text-[#1e3a5f] font-semibold">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.users} active users</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{app.revenue}</div>
                    <div className="text-xs font-semibold text-green-600">
                      {app.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Categories */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-[#1e3a5f]">Categories</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {appCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.count} applications</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{category.revenue}</div>
                    <div className="text-xs font-semibold text-green-600">{category.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1e3a5f]">Recent Platform Activity</h2>
            <button className="text-[#0066cc] hover:text-[#0066cc]/80 text-sm font-medium transition-colors">
              View All Activity →
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`mt-1 w-3 h-3 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  activity.status === 'error' ? 'bg-red-500' : 'bg-[#0066cc]'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-gray-900 leading-relaxed">{activity.message}</p>
                    {activity.amount && (
                      <span className="text-sm font-bold text-green-600 whitespace-nowrap">{activity.amount}</span>
                    )}
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Statistics */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-6">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-[#1e3a5f]">{paidApps}</div>
            <div className="text-xs text-gray-600 font-medium">Paid Apps</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-[#1e3a5f]">{freeApps}</div>
            <div className="text-xs text-gray-600 font-medium">Free Apps</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-[#1e3a5f]">{aiApps}</div>
            <div className="text-xs text-gray-600 font-medium">AI Apps</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-[#1e3a5f]">{erpApps}</div>
            <div className="text-xs text-gray-600 font-medium">ERP Apps</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-green-600">97.2%</div>
            <div className="text-xs text-gray-600 font-medium">User Satisfaction</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl font-bold text-green-600">99.9%</div>
            <div className="text-xs text-gray-600 font-medium">Platform Uptime</div>
          </div>
        </div>
      </div>
    </div>
  )
}
