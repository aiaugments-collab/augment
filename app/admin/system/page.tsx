'use client'

import React, { useState } from 'react'
import { 
  Server, 
  Database, 
  Shield, 
  Globe, 
  Zap, 
  HardDrive,
  Cpu,
  MemoryStick,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Clock,
  RotateCcw,
  Download,
  Settings,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

// Mock system data
const systemServices = [
  {
    name: 'API Gateway',
    status: 'operational',
    uptime: '99.98%',
    responseTime: '145ms',
    requests: '2.4M',
    errors: '0.02%',
    lastCheck: '1 min ago'
  },
  {
    name: 'Database Primary',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '23ms',
    connections: '847',
    errors: '0.00%',
    lastCheck: '30 sec ago'
  },
  {
    name: 'Authentication Service',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '89ms',
    requests: '456K',
    errors: '0.05%',
    lastCheck: '45 sec ago'
  },
  {
    name: 'File Storage',
    status: 'degraded',
    uptime: '98.45%',
    responseTime: '892ms',
    requests: '1.2M',
    errors: '1.55%',
    lastCheck: '2 min ago'
  },
  {
    name: 'Email Service',
    status: 'operational',
    uptime: '99.87%',
    responseTime: '234ms',
    requests: '89K',
    errors: '0.13%',
    lastCheck: '1 min ago'
  },
  {
    name: 'Cache Layer',
    status: 'operational',
    uptime: '99.92%',
    responseTime: '12ms',
    hitRate: '94.2%',
    errors: '0.08%',
    lastCheck: '20 sec ago'
  }
]

const serverMetrics = [
  {
    name: 'CPU Usage',
    value: 68,
    max: 100,
    unit: '%',
    status: 'normal',
    trend: 'up',
    icon: Cpu
  },
  {
    name: 'Memory Usage',
    value: 74,
    max: 100,
    unit: '%',
    status: 'normal',
    trend: 'down',
    icon: MemoryStick
  },
  {
    name: 'Disk Usage',
    value: 45,
    max: 100,
    unit: '%',
    status: 'normal',
    trend: 'up',
    icon: HardDrive
  },
  {
    name: 'Network I/O',
    value: 234,
    max: 1000,
    unit: 'MB/s',
    status: 'normal',
    trend: 'up',
    icon: Wifi
  }
]

const recentIncidents = [
  {
    id: 1,
    title: 'File Storage Performance Degradation',
    status: 'investigating',
    severity: 'minor',
    startTime: '2025-09-17 14:23:00',
    description: 'Increased response times observed on file storage service',
    affectedServices: ['File Storage', 'Media Processing']
  },
  {
    id: 2,
    title: 'Database Connection Spike',
    status: 'resolved',
    severity: 'minor',
    startTime: '2025-09-17 10:15:00',
    endTime: '2025-09-17 10:45:00',
    description: 'Temporary increase in database connections resolved',
    affectedServices: ['Database Primary']
  },
  {
    id: 3,
    title: 'Email Service Maintenance',
    status: 'scheduled',
    severity: 'maintenance',
    startTime: '2025-09-18 02:00:00',
    endTime: '2025-09-18 04:00:00',
    description: 'Scheduled maintenance for email service upgrades',
    affectedServices: ['Email Service']
  }
]

export default function SystemHealthPage() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600'
      case 'degraded': return 'text-yellow-600'
      case 'down': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100'
      case 'degraded': return 'bg-yellow-100'
      case 'down': return 'bg-red-100'
      default: return 'bg-gray-100'
    }
  }

  const getMetricStatus = (value: number, max: number) => {
    const percentage = (value / max) * 100
    if (percentage > 90) return 'critical'
    if (percentage > 75) return 'warning'
    return 'normal'
  }

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500'
      case 'warning': return 'bg-yellow-500'
      case 'normal': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800'
      case 'major': return 'bg-orange-100 text-orange-800'
      case 'minor': return 'bg-yellow-100 text-yellow-800'
      case 'maintenance': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Health</h1>
          <p className="text-gray-600 mt-1">Monitor system performance and service status</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleRefresh}
            disabled={refreshing}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <RotateCcw className={`w-4 h-4 mr-2 inline ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
        </div>
      </div>

      {/* Overall Status */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Overall System Status</h2>
          <div className="flex items-center text-sm text-green-600">
            <CheckCircle className="w-5 h-5 mr-2" />
            All Systems Operational
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-green-600">99.98%</div>
            <div className="text-sm text-gray-600">Uptime (30 days)</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">156ms</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">4.2M</div>
            <div className="text-sm text-gray-600">Requests Today</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-red-600">0.05%</div>
            <div className="text-sm text-gray-600">Error Rate</div>
          </div>
        </div>
      </div>

      {/* Server Metrics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Server Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serverMetrics.map((metric) => {
            const Icon = metric.icon
            const status = getMetricStatus(metric.value, metric.max)
            const percentage = (metric.value / metric.max) * 100
            
            return (
              <div key={metric.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-6 h-6 text-gray-600" />
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="text-sm text-gray-600">{metric.name}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getMetricColor(status)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Service Status */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Status</h2>
        <div className="space-y-4">
          {systemServices.map((service) => (
            <div key={service.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${getStatusBg(service.status)}`}>
                  {service.status === 'operational' ? (
                    <CheckCircle className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                  ) : (
                    <AlertTriangle className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Uptime: {service.uptime}</span>
                    <span>Response: {service.responseTime}</span>
                    <span>Errors: {service.errors}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${
                  service.status === 'operational' 
                    ? 'bg-green-100 text-green-800' 
                    : service.status === 'degraded'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {service.status}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {service.lastCheck}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Incidents</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All Incidents
          </button>
        </div>
        <div className="space-y-4">
          {recentIncidents.map((incident) => (
            <div key={incident.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">{incident.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getIncidentStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{incident.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Started: {incident.startTime}</span>
                    {incident.endTime && <span>Resolved: {incident.endTime}</span>}
                    <span>Affected: {incident.affectedServices.join(', ')}</span>
                  </div>
                </div>
                <button className="ml-4 p-1 text-gray-400 hover:text-gray-600">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
