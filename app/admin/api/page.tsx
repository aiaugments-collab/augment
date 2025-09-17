'use client'

import React, { useState } from 'react'
import { 
  Activity, 
  Key, 
  Globe,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Download,
  Copy,
  Edit,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  RefreshCw,
  BarChart3,
  Server,
  Database
} from 'lucide-react'

// Mock API data
const apiMetrics = [
  {
    title: 'Total API Calls',
    value: '4.2M',
    change: '+18.3%',
    trend: 'up',
    icon: Activity,
    color: 'blue'
  },
  {
    title: 'Active API Keys',
    value: '1,847',
    change: '+12.4%',
    trend: 'up',
    icon: Key,
    color: 'green'
  },
  {
    title: 'Success Rate',
    value: '99.7%',
    change: '+0.3%',
    trend: 'up',
    icon: CheckCircle,
    color: 'emerald'
  },
  {
    title: 'Avg Response Time',
    value: '89ms',
    change: '-12ms',
    trend: 'up',
    icon: Clock,
    color: 'purple'
  }
]

const topEndpoints = [
  { endpoint: '/api/v1/apps', calls: 847293, avgTime: 45, errors: 0.12, method: 'GET' },
  { endpoint: '/api/v1/users', calls: 634758, avgTime: 32, errors: 0.08, method: 'GET' },
  { endpoint: '/api/v1/auth/login', calls: 423891, avgTime: 89, errors: 0.23, method: 'POST' },
  { endpoint: '/api/v1/deployments', calls: 298457, avgTime: 156, errors: 0.45, method: 'POST' },
  { endpoint: '/api/v1/analytics', calls: 189234, avgTime: 234, errors: 0.19, method: 'GET' },
  { endpoint: '/api/v1/billing', calls: 156783, avgTime: 67, errors: 0.15, method: 'GET' },
  { endpoint: '/api/v1/webhooks', calls: 134298, avgTime: 23, errors: 0.06, method: 'POST' }
]

const apiKeys = [
  {
    id: 'ak_1a2b3c4d5e',
    name: 'TechCorp Production',
    client: 'TechCorp Solutions',
    created: '2024-01-15',
    lastUsed: '2 minutes ago',
    calls: 45678,
    rateLimit: 10000,
    status: 'active',
    permissions: ['read', 'write']
  },
  {
    id: 'ak_5f6g7h8i9j',
    name: 'InnovateLabs Staging',
    client: 'InnovateLabs Inc',
    created: '2024-02-20',
    lastUsed: '1 hour ago',
    calls: 23456,
    rateLimit: 5000,
    status: 'active',
    permissions: ['read']
  },
  {
    id: 'ak_0k1l2m3n4o',
    name: 'StartupX Development',
    client: 'StartupX',
    created: '2024-03-05',
    lastUsed: '3 days ago',
    calls: 1234,
    rateLimit: 1000,
    status: 'suspended',
    permissions: ['read']
  },
  {
    id: 'ak_5p6q7r8s9t',
    name: 'GlobalTech Integration',
    client: 'GlobalTech Enterprises',
    created: '2024-01-08',
    lastUsed: '5 minutes ago',
    calls: 78923,
    rateLimit: 25000,
    status: 'active',
    permissions: ['read', 'write', 'admin']
  }
]

const rateLimitData = [
  { hour: '00:00', usage: 12, limit: 100 },
  { hour: '02:00', usage: 8, limit: 100 },
  { hour: '04:00', usage: 15, limit: 100 },
  { hour: '06:00', usage: 35, limit: 100 },
  { hour: '08:00', usage: 68, limit: 100 },
  { hour: '10:00', usage: 89, limit: 100 },
  { hour: '12:00', usage: 94, limit: 100 },
  { hour: '14:00', usage: 87, limit: 100 },
  { hour: '16:00', usage: 92, limit: 100 },
  { hour: '18:00', usage: 76, limit: 100 },
  { hour: '20:00', usage: 45, limit: 100 },
  { hour: '22:00', usage: 28, limit: 100 }
]

const errorBreakdown = [
  { code: '200', count: 4156789, percentage: 98.7 },
  { code: '400', count: 32456, percentage: 0.8 },
  { code: '401', count: 12345, percentage: 0.3 },
  { code: '403', count: 5678, percentage: 0.1 },
  { code: '500', count: 3456, percentage: 0.1 }
]

const integrationHealth = [
  { service: 'Payment Gateway', status: 'healthy', uptime: 99.9, lastPing: '30s ago' },
  { service: 'Email Service', status: 'healthy', uptime: 99.7, lastPing: '1m ago' },
  { service: 'Analytics Engine', status: 'degraded', uptime: 97.2, lastPing: '5m ago' },
  { service: 'File Storage', status: 'healthy', uptime: 99.8, lastPing: '45s ago' },
  { service: 'AI Processing', status: 'healthy', uptime: 99.5, lastPing: '2m ago' }
]

export default function APIManagementPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 24 Hours')
  const [showKeyModal, setShowKeyModal] = useState(false)
  const [selectedKey, setSelectedKey] = useState<{ id: string; name: string; key: string; permissions: string[]; lastUsed: string; status: string } | null>(null)

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'suspended': return 'bg-red-100 text-red-800'
      case 'limited': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500'
      case 'degraded': return 'text-yellow-500'
      case 'down': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">API Management</h1>
            <p className="text-gray-600 mt-1 text-sm">Monitor API usage, manage keys, and track integration health across your platform</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-1.5 text-xs border border-gray-300 rounded"
            >
              <option>Last Hour</option>
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <Download className="w-3 h-3 mr-1 inline" />
              Export Logs
            </button>
            <button 
              onClick={() => setShowKeyModal(true)}
              className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              <Plus className="w-3 h-3 mr-1 inline" />
              Generate API Key
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apiMetrics.map((metric) => {
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
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
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

      {/* API Usage Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">API Usage & Rate Limiting</h2>
        <div className="space-y-3">
          {rateLimitData.map((data) => (
            <div key={data.hour} className="flex items-center justify-between">
              <span className="text-xs text-gray-600 w-12">{data.hour}</span>
              <div className="flex-1 mx-4 relative">
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${data.usage > 80 ? 'bg-red-500' : data.usage > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${data.usage}%` }}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-gray-900 w-16 text-right">
                {data.usage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Endpoints */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Top API Endpoints</h2>
          <div className="space-y-3">
            {topEndpoints.map((endpoint, index) => (
              <div key={endpoint.endpoint} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-600">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : 
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : 
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="text-xs font-medium text-gray-900">{endpoint.endpoint}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatNumber(endpoint.calls)} calls • {endpoint.avgTime}ms avg • {endpoint.errors}% errors
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Error Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Response Code Distribution</h2>
          <div className="space-y-3">
            {errorBreakdown.map((error) => (
              <div key={error.code} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    error.code === '200' ? 'bg-green-100 text-green-700' :
                    error.code.startsWith('4') ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {error.code}
                  </span>
                  <span className="text-xs font-medium text-gray-900">{formatNumber(error.count)}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        error.code === '200' ? 'bg-green-500' :
                        error.code.startsWith('4') ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${error.percentage * 10}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-12 text-right">{error.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Keys Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">API Keys</h2>
            <div className="text-xs text-gray-600">
              {apiKeys.length} total keys • {apiKeys.filter(key => key.status === 'active').length} active
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Key ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rate Limit</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Used</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {apiKeys.map((key) => (
                <tr key={key.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Key className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-mono text-gray-900">{key.id}</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div>
                      <div className="text-xs font-medium text-gray-900">{key.client}</div>
                      <div className="text-xs text-gray-500">{key.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="text-xs font-medium text-gray-900">{formatNumber(key.calls)}</div>
                    <div className="text-xs text-gray-500">calls this month</div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="text-xs font-medium text-gray-900">{formatNumber(key.rateLimit)}/hour</div>
                    <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                      <div 
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: `${(key.calls / key.rateLimit) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{key.lastUsed}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(key.status)}`}>
                      {key.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-orange-600 transition-colors">
                        <RefreshCw className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Integration Health */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Third-Party Integration Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrationHealth.map((service) => (
            <div key={service.service} className="border border-gray-200 rounded p-3 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className={`w-6 h-6 ${getHealthColor(service.status)}`} />
              </div>
              <h3 className="text-xs font-medium text-gray-900 mb-1">{service.service}</h3>
              <div className="text-xs text-gray-600 mb-2">{service.uptime}% uptime</div>
              <div className="text-xs text-gray-500">{service.lastPing}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
