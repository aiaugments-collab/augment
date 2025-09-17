'use client'

import React, { useState } from 'react'
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Calendar,
  User,
  Shield,
  Activity,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  MoreHorizontal
} from 'lucide-react'

// Mock audit log data
const logEntries = [
  {
    id: 1,
    timestamp: '2025-09-17 14:23:15',
    user: 'admin@augment.cfd',
    action: 'USER_CREATED',
    resource: 'User: john.doe@company.com',
    category: 'USER_MANAGEMENT',
    severity: 'INFO',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    details: 'Created new user account with basic permissions',
    status: 'SUCCESS'
  },
  {
    id: 2,
    timestamp: '2025-09-17 14:20:42',
    user: 'sarah.wilson@techcorp.com',
    action: 'LOGIN_FAILED',
    resource: 'Authentication',
    category: 'SECURITY',
    severity: 'WARNING',
    ipAddress: '10.0.0.45',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
    details: 'Failed login attempt - invalid password',
    status: 'FAILED'
  },
  {
    id: 3,
    timestamp: '2025-09-17 14:18:33',
    user: 'system',
    action: 'BACKUP_COMPLETED',
    resource: 'Database',
    category: 'SYSTEM',
    severity: 'INFO',
    ipAddress: 'N/A',
    userAgent: 'Automated System',
    details: 'Daily database backup completed successfully',
    status: 'SUCCESS'
  },
  {
    id: 4,
    timestamp: '2025-09-17 14:15:28',
    user: 'admin@augment.cfd',
    action: 'SETTINGS_UPDATED',
    resource: 'Platform Settings',
    category: 'CONFIGURATION',
    severity: 'INFO',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    details: 'Updated security settings - MFA requirement enabled',
    status: 'SUCCESS'
  },
  {
    id: 5,
    timestamp: '2025-09-17 14:12:56',
    user: 'michael.chen@startup.io',
    action: 'API_KEY_GENERATED',
    resource: 'API Key: ak_1234...7890',
    category: 'API',
    severity: 'INFO',
    ipAddress: '203.0.113.42',
    userAgent: 'curl/7.68.0',
    details: 'Generated new API key for integration',
    status: 'SUCCESS'
  },
  {
    id: 6,
    timestamp: '2025-09-17 14:10:15',
    user: 'unknown',
    action: 'RATE_LIMIT_EXCEEDED',
    resource: 'API Gateway',
    category: 'SECURITY',
    severity: 'WARNING',
    ipAddress: '198.51.100.23',
    userAgent: 'Python/3.9 requests/2.25.1',
    details: 'Rate limit exceeded for API endpoint /v1/users',
    status: 'BLOCKED'
  },
  {
    id: 7,
    timestamp: '2025-09-17 14:08:44',
    user: 'emma.davis@enterprise.com',
    action: 'FILE_UPLOADED',
    resource: 'File: document.pdf',
    category: 'DATA',
    severity: 'INFO',
    ipAddress: '172.16.0.89',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    details: 'Uploaded file to secure storage',
    status: 'SUCCESS'
  },
  {
    id: 8,
    timestamp: '2025-09-17 14:05:33',
    user: 'system',
    action: 'ERROR_OCCURRED',
    resource: 'Payment Service',
    category: 'SYSTEM',
    severity: 'ERROR',
    ipAddress: 'N/A',
    userAgent: 'Internal Service',
    details: 'Payment processing error - gateway timeout',
    status: 'ERROR'
  }
]

const categories = ['All Categories', 'USER_MANAGEMENT', 'SECURITY', 'SYSTEM', 'CONFIGURATION', 'API', 'DATA']
const severities = ['All Severities', 'INFO', 'WARNING', 'ERROR']
const timeRanges = ['Last Hour', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days', 'Custom Range']

export default function AuditLogsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedSeverity, setSelectedSeverity] = useState('All Severities')
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 24 Hours')
  const [selectedLog, setSelectedLog] = useState<{ id: number; timestamp: string; user: string; action: string; resource: string; severity: string; ipAddress: string; userAgent: string; details: string; category: string; status: string } | null>(null)

  const filteredLogs = logEntries.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || log.category === selectedCategory
    const matchesSeverity = selectedSeverity === 'All Severities' || log.severity === selectedSeverity
    
    return matchesSearch && matchesCategory && matchesSeverity
  })

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'ERROR': return <XCircle className="w-4 h-4 text-red-500" />
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case 'INFO': return <Info className="w-4 h-4 text-blue-500" />
      default: return <CheckCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUCCESS': return 'bg-green-100 text-green-800'
      case 'FAILED': return 'bg-red-100 text-red-800'
      case 'BLOCKED': return 'bg-yellow-100 text-yellow-800'
      case 'ERROR': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'SECURITY': return 'bg-red-100 text-red-800'
      case 'USER_MANAGEMENT': return 'bg-blue-100 text-blue-800'
      case 'SYSTEM': return 'bg-purple-100 text-purple-800'
      case 'API': return 'bg-green-100 text-green-800'
      case 'CONFIGURATION': return 'bg-orange-100 text-orange-800'
      case 'DATA': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-gray-600 mt-1">Track system activities and security events</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2 inline" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-50">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{logEntries.length}</h3>
              <p className="text-sm text-gray-600">Total Events</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-50">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {logEntries.filter(log => log.status === 'SUCCESS').length}
              </h3>
              <p className="text-sm text-gray-600">Successful</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-50">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {logEntries.filter(log => log.severity === 'WARNING').length}
              </h3>
              <p className="text-sm text-gray-600">Warnings</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-red-50">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {logEntries.filter(log => log.severity === 'ERROR').length}
              </h3>
              <p className="text-sm text-gray-600">Errors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            {/* Severity Filter */}
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {severities.map(severity => (
                <option key={severity} value={severity}>{severity}</option>
              ))}
            </select>
            
            {/* Time Range */}
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timeRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            {filteredLogs.length} of {logEntries.length} events
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      {log.timestamp}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <div>
                        <div className="font-medium text-gray-900">{log.user}</div>
                        <div className="text-gray-500">{log.ipAddress}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="font-medium text-gray-900">{log.action}</div>
                    <div className="text-gray-500">{log.resource}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(log.category)}`}>
                      {log.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {getSeverityIcon(log.severity)}
                      <span className="ml-2 text-sm">{log.severity}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button 
                        onClick={() => setSelectedLog(log)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing 1 to {filteredLogs.length} of {logEntries.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Log Detail Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Log Details</h3>
                <button 
                  onClick={() => setSelectedLog(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Timestamp</label>
                    <p className="text-sm text-gray-900">{selectedLog.timestamp}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">User</label>
                    <p className="text-sm text-gray-900">{selectedLog.user}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Action</label>
                    <p className="text-sm text-gray-900">{selectedLog.action}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">IP Address</label>
                    <p className="text-sm text-gray-900">{selectedLog.ipAddress}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">User Agent</label>
                  <p className="text-sm text-gray-900">{selectedLog.userAgent}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Details</label>
                  <p className="text-sm text-gray-900">{selectedLog.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
