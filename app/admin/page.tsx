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
    trend: 'up',
    icon: Package,
    color: 'blue'
  },
  {
    title: 'Monthly Revenue',
    value: '$2.4M',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Active Users',
    value: '89,247',
    change: '+15.2%',
    trend: 'up',
    icon: Users,
    color: 'purple'
  },
  {
    title: 'App Deployments',
    value: '156,832',
    change: '+31.7%',
    trend: 'up',
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
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Platform Overview</h1>
            <p className="text-gray-600 mt-1 text-sm">AI-powered application marketplace with {totalApps} enterprise applications serving 89K+ users globally</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-xs text-gray-500">Monthly Recurring Revenue</div>
              <div className="text-lg font-semibold text-green-600">$2.4M</div>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <Download className="w-3 h-3 mr-1 inline" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMetrics.map((metric) => {
          const Icon = metric.icon
          const isPositive = metric.trend === 'up'
          
          return (
            <div key={metric.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded bg-gray-50">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className={`flex items-center text-xs font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? (
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{metric.value}</h3>
                <p className="text-xs text-gray-500 mt-1">{metric.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Top Performing Apps */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Top Performing Applications</h2>
              <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                View All Apps →
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {topApps.map((app, index) => (
                <div key={app.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-600">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.users} active users</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-xs font-medium text-gray-900">{app.revenue}</div>
                      <div className={`text-xs font-medium text-green-600`}>
                        {app.growth}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">Categories</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {appCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-gray-900">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.count} apps</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-gray-900">{category.revenue}</div>
                    <div className="text-xs text-green-600">{category.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">Recent Platform Activity</h2>
            <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
              View All Activity →
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded">
                <div className={`mt-1 w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-900">{activity.message}</p>
                    {activity.amount && (
                      <span className="text-xs font-medium text-green-600">{activity.amount}</span>
                    )}
                  </div>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">{paidApps}</div>
            <div className="text-xs text-gray-600">Paid Apps</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">{freeApps}</div>
            <div className="text-xs text-gray-600">Free Apps</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">{aiApps}</div>
            <div className="text-xs text-gray-600">AI Apps</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">{erpApps}</div>
            <div className="text-xs text-gray-600">ERP Apps</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">97.2%</div>
            <div className="text-xs text-gray-600">User Satisfaction</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded">
            <div className="text-lg font-semibold text-gray-900">99.9%</div>
            <div className="text-xs text-gray-600">Platform Uptime</div>
          </div>
        </div>
      </div>
    </div>
  )
}
