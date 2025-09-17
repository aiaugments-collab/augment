'use client'

import React, { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity, 
  Globe,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react'

// Mock analytics data
const timeRanges = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last year']

const metrics = [
  {
    title: 'Total Revenue',
    value: '$2,847,392',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'New Users',
    value: '8,429',
    change: '+18.2%',
    trend: 'up',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Page Views',
    value: '1.2M',
    change: '-2.1%',
    trend: 'down',
    icon: Activity,
    color: 'orange'
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+0.8%',
    trend: 'up',
    icon: TrendingUp,
    color: 'purple'
  }
]

const topPages = [
  { page: '/dashboard', views: 45678, change: '+12%' },
  { page: '/marketplace', views: 34521, change: '+8%' },
  { page: '/products', views: 28934, change: '+15%' },
  { page: '/pricing', views: 21456, change: '-3%' },
  { page: '/docs', views: 18723, change: '+22%' }
]

const userSources = [
  { source: 'Organic Search', users: 15420, percentage: 45.2 },
  { source: 'Direct', users: 8934, percentage: 26.1 },
  { source: 'Social Media', users: 5678, percentage: 16.6 },
  { source: 'Email', users: 2890, percentage: 8.5 },
  { source: 'Referral', users: 1234, percentage: 3.6 }
]

const revenueData = [
  { month: 'Jan', revenue: 125000 },
  { month: 'Feb', revenue: 145000 },
  { month: 'Mar', revenue: 168000 },
  { month: 'Apr', revenue: 189000 },
  { month: 'May', revenue: 212000 },
  { month: 'Jun', revenue: 234000 },
  { month: 'Jul', revenue: 267000 },
  { month: 'Aug', revenue: 289000 },
  { month: 'Sep', revenue: 312000 }
]

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 days')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Metrics</h1>
          <p className="text-gray-600 mt-1">Track platform performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {timeRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2 inline" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          const isPositive = metric.trend === 'up'
          
          return (
            <div key={metric.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg bg-${metric.color}-50`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div className={`flex items-center text-sm ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-sm text-gray-600 mt-1">{metric.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Revenue Trend</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {revenueData.slice(-6).map((data, index) => (
              <div key={data.month} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 w-12">{data.month}</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(data.revenue / 320000) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-20 text-right">
                  ${(data.revenue / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Pages</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-600 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{page.page}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{page.views.toLocaleString()}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    page.change.startsWith('+') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {page.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Sources */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Traffic Sources</h2>
            <Globe className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {userSources.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3" />
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">
                    {source.users.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 w-12 text-right">
                    {source.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Stats</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-medium text-gray-900">42.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '42.3%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Session</span>
                <span className="text-sm font-medium text-gray-900">4m 32s</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Pages/Session</span>
                <span className="text-sm font-medium text-gray-900">3.4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '56%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Mobile Traffic</span>
                <span className="text-sm font-medium text-gray-900">67.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '67.8%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Real-time Activity</h2>
          <div className="flex items-center text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Live
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">247</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">1,234</div>
            <div className="text-sm text-gray-600">Page Views (Last Hour)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">89</div>
            <div className="text-sm text-gray-600">Events Triggered</div>
          </div>
        </div>
      </div>
    </div>
  )
}
