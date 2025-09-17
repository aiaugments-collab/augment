'use client'

import React, { useState } from 'react'
import { 
  Users, 
  Building2, 
  Globe,
  TrendingUp,
  TrendingDown,
  Star,
  Calendar,
  Download,
  Filter,
  Search,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Award,
  Zap
} from 'lucide-react'

// Mock customer data
const customerSegments = [
  { 
    segment: 'Enterprise', 
    count: 847, 
    revenue: 1584000, 
    avgValue: 1870, 
    growth: 28.4,
    churn: 2.1,
    satisfaction: 4.7,
    color: 'purple'
  },
  { 
    segment: 'Mid-Market', 
    count: 2340, 
    revenue: 742000, 
    avgValue: 317, 
    growth: 22.1,
    churn: 4.2,
    satisfaction: 4.3,
    color: 'blue'
  },
  { 
    segment: 'Small Business', 
    count: 4280, 
    revenue: 314000, 
    avgValue: 73, 
    growth: 31.8,
    churn: 6.8,
    satisfaction: 4.1,
    color: 'green'
  },
  { 
    segment: 'Startup', 
    count: 1890, 
    revenue: 156000, 
    avgValue: 83, 
    growth: 45.2,
    churn: 8.9,
    satisfaction: 4.0,
    color: 'orange'
  }
]

const geographicData = [
  { region: 'North America', customers: 4280, revenue: 1456000, growth: 24.1 },
  { region: 'Europe', customers: 2890, revenue: 892000, growth: 31.7 },
  { region: 'Asia Pacific', customers: 1840, revenue: 534000, growth: 52.3 },
  { region: 'Latin America', customers: 420, revenue: 187000, growth: 38.9 },
  { region: 'Middle East & Africa', customers: 327, revenue: 131000, growth: 44.6 }
]

const customerHealth = [
  { 
    name: 'TechCorp Solutions', 
    segment: 'Enterprise', 
    revenue: 89400, 
    health: 'Healthy',
    lastActivity: '2 hours ago',
    apps: 12,
    satisfaction: 4.8,
    trend: 'up'
  },
  { 
    name: 'InnovateLabs Inc', 
    segment: 'Mid-Market', 
    revenue: 34200, 
    health: 'At Risk',
    lastActivity: '5 days ago',
    apps: 6,
    satisfaction: 3.2,
    trend: 'down'
  },
  { 
    name: 'GlobalTech Enterprises', 
    segment: 'Enterprise', 
    revenue: 127800, 
    health: 'Healthy',
    lastActivity: '1 hour ago',
    apps: 18,
    satisfaction: 4.9,
    trend: 'up'
  },
  { 
    name: 'StartupX', 
    segment: 'Startup', 
    revenue: 4800, 
    health: 'Critical',
    lastActivity: '12 days ago',
    apps: 2,
    satisfaction: 2.8,
    trend: 'down'
  },
  { 
    name: 'MidSize Corp', 
    segment: 'Mid-Market', 
    revenue: 28900, 
    health: 'Healthy',
    lastActivity: '30 minutes ago',
    apps: 8,
    satisfaction: 4.5,
    trend: 'up'
  }
]

const usagePatterns = [
  { hour: '00:00', usage: 12 },
  { hour: '02:00', usage: 8 },
  { hour: '04:00', usage: 6 },
  { hour: '06:00', usage: 15 },
  { hour: '08:00', usage: 45 },
  { hour: '10:00', usage: 78 },
  { hour: '12:00', usage: 92 },
  { hour: '14:00', usage: 87 },
  { hour: '16:00', usage: 94 },
  { hour: '18:00', usage: 76 },
  { hour: '20:00', usage: 58 },
  { hour: '22:00', usage: 32 }
]

const supportMetrics = [
  { metric: 'Avg Response Time', value: '2.4 hours', trend: 'down', good: true },
  { metric: 'Resolution Rate', value: '94.7%', trend: 'up', good: true },
  { metric: 'Customer Satisfaction', value: '4.6/5', trend: 'up', good: true },
  { metric: 'Escalation Rate', value: '8.2%', trend: 'down', good: true }
]

const customerJourney = [
  { stage: 'Discovery', customers: 10000, conversion: 15.2 },
  { stage: 'Trial', customers: 1520, conversion: 28.4 },
  { stage: 'Paid Subscription', customers: 432, conversion: 78.9 },
  { stage: 'Active User', customers: 341, conversion: 89.2 },
  { stage: 'Power User', customers: 304, conversion: 95.6 },
  { stage: 'Advocate', customers: 291, conversion: 100 }
]

export default function CustomerInsightsPage() {
  const [selectedSegment, setSelectedSegment] = useState('All Segments')
  const [timeRange, setTimeRange] = useState('Last 30 Days')

  const totalCustomers = customerSegments.reduce((sum, segment) => sum + segment.count, 0)
  const totalRevenue = customerSegments.reduce((sum, segment) => sum + segment.revenue, 0)
  const avgSatisfaction = (customerSegments.reduce((sum, segment) => sum + segment.satisfaction, 0) / customerSegments.length).toFixed(1)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Healthy': return 'bg-green-100 text-green-800'
      case 'At Risk': return 'bg-yellow-100 text-yellow-800'
      case 'Critical': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Customer Insights</h1>
            <p className="text-gray-600 mt-1 text-sm">Comprehensive customer analytics, segmentation, and engagement tracking</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-1.5 text-xs border border-gray-300 rounded"
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Custom Range</option>
            </select>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <Download className="w-3 h-3 mr-1 inline" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-blue-50">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.2%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{totalCustomers.toLocaleString()}</h3>
            <p className="text-xs text-gray-500 mt-1">Total Customers</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-green-50">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23.1%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{formatCurrency(totalRevenue)}</h3>
            <p className="text-xs text-gray-500 mt-1">Customer Revenue</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-yellow-50">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +0.3
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{avgSatisfaction}/5</h3>
            <p className="text-xs text-gray-500 mt-1">Avg Satisfaction</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-purple-50">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -1.2%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">4.8%</h3>
            <p className="text-xs text-gray-500 mt-1">Monthly Churn Rate</p>
          </div>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Customer Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {customerSegments.map((segment) => (
            <div key={segment.segment} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{segment.segment}</h3>
                <span className={`text-xs font-medium text-${segment.color}-600 bg-${segment.color}-50 px-2 py-1 rounded`}>
                  +{segment.growth}%
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Customers:</span>
                  <span className="font-medium">{segment.count.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-medium">{formatCurrency(segment.revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Value:</span>
                  <span className="font-medium">${segment.avgValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Churn:</span>
                  <span className="font-medium text-red-600">{segment.churn}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Satisfaction:</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="font-medium">{segment.satisfaction}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Geographic Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Geographic Distribution</h2>
          <div className="space-y-3">
            {geographicData.map((region) => (
              <div key={region.region} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-medium text-gray-900">{region.region}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-600">{region.customers.toLocaleString()} customers</span>
                  <span className="text-xs font-medium text-gray-900">{formatCurrency(region.revenue)}</span>
                  <span className="text-xs font-medium text-green-600">+{region.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Patterns */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Daily Usage Patterns</h2>
          <div className="space-y-2">
            {usagePatterns.map((pattern) => (
              <div key={pattern.hour} className="flex items-center justify-between">
                <span className="text-xs text-gray-600 w-12">{pattern.hour}</span>
                <div className="flex-1 mx-3">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${pattern.usage}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-900 w-8 text-right">{pattern.usage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Health */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Customer Health Monitor</h2>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
            View All Customers →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Segment</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Health</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Activity</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Apps</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Satisfaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customerHealth.map((customer) => (
                <tr key={customer.name} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{customer.segment}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs font-medium text-gray-900">{formatCurrency(customer.revenue)}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getHealthColor(customer.health)}`}>
                      {customer.health}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{customer.lastActivity}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{customer.apps} apps</span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">{customer.satisfaction}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Support Metrics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Support Metrics</h2>
          <div className="space-y-3">
            {supportMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <span className="text-xs font-medium text-gray-900">{metric.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gray-900">{metric.value}</span>
                  {metric.trend === 'up' ? (
                    <TrendingUp className={`w-3 h-3 ${metric.good ? 'text-green-500' : 'text-red-500'}`} />
                  ) : (
                    <TrendingDown className={`w-3 h-3 ${metric.good ? 'text-green-500' : 'text-red-500'}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Journey */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Customer Journey Funnel</h2>
          <div className="space-y-3">
            {customerJourney.map((stage, index) => (
              <div key={stage.stage} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-blue-100 rounded-full text-xs flex items-center justify-center text-blue-600 font-medium">
                    {index + 1}
                  </span>
                  <span className="text-xs font-medium text-gray-900">{stage.stage}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-600">{stage.customers.toLocaleString()}</span>
                  <span className="text-xs font-medium text-green-600">{stage.conversion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
