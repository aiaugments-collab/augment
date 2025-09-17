'use client'

import React, { useState } from 'react'
import { 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Key,
  Globe,
  Server,
  Users,
  Activity,
  Clock,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Search,
  Bell,
  Settings,
  Database,
  Wifi,
  FileText,
  Zap,
  Target,
  Cpu
} from 'lucide-react'

// Mock security data
const securityMetrics = [
  {
    title: 'Security Score',
    value: '97.2%',
    change: '+2.1%',
    trend: 'up',
    icon: Shield,
    color: 'green'
  },
  {
    title: 'Active Threats',
    value: '3',
    change: '-5',
    trend: 'up',
    icon: AlertTriangle,
    color: 'red'
  },
  {
    title: 'Failed Logins',
    value: '247',
    change: '+12%',
    trend: 'down',
    icon: Lock,
    color: 'yellow'
  },
  {
    title: 'Vulnerability Scans',
    value: '18',
    change: '0',
    trend: 'up',
    icon: Eye,
    color: 'blue'
  }
]

const threatAlerts = [
  {
    id: 1,
    type: 'Brute Force Attack',
    severity: 'high',
    status: 'active',
    source: '203.0.113.42',
    target: 'Login API',
    timestamp: '2 minutes ago',
    attempts: 127,
    blocked: true
  },
  {
    id: 2,
    type: 'SQL Injection Attempt',
    severity: 'critical',
    status: 'blocked',
    source: '198.51.100.23',
    target: 'User Database',
    timestamp: '15 minutes ago',
    attempts: 3,
    blocked: true
  },
  {
    id: 3,
    type: 'Suspicious API Usage',
    severity: 'medium',
    status: 'monitoring',
    source: '192.0.2.146',
    target: 'Data Export API',
    timestamp: '1 hour ago',
    attempts: 45,
    blocked: false
  },
  {
    id: 4,
    type: 'DDoS Attempt',
    severity: 'high',
    status: 'mitigated',
    source: 'Multiple IPs',
    target: 'Main Gateway',
    timestamp: '3 hours ago',
    attempts: 2847,
    blocked: true
  }
]

const vulnerabilities = [
  {
    id: 'CVE-2024-001',
    title: 'Outdated SSL Certificate',
    severity: 'medium',
    component: 'Web Server',
    status: 'patched',
    discovered: '2024-09-10',
    resolved: '2024-09-12'
  },
  {
    id: 'CVE-2024-002',
    title: 'Cross-Site Scripting (XSS)',
    severity: 'high',
    component: 'Admin Panel',
    status: 'open',
    discovered: '2024-09-15',
    resolved: null
  },
  {
    id: 'CVE-2024-003',
    title: 'Weak Password Policy',
    severity: 'low',
    component: 'User Authentication',
    status: 'resolved',
    discovered: '2024-09-08',
    resolved: '2024-09-09'
  }
]

const accessLogs = [
  {
    id: 1,
    user: 'admin@augment.cfd',
    action: 'Admin Login',
    resource: 'Admin Dashboard',
    ip: '192.168.1.100',
    timestamp: '5 minutes ago',
    status: 'success',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    user: 'api_client_1247',
    action: 'API Access',
    resource: '/api/v1/users',
    ip: '203.0.113.15',
    timestamp: '12 minutes ago',
    status: 'success',
    location: 'London, UK'
  },
  {
    id: 3,
    user: 'unknown',
    action: 'Failed Login',
    resource: 'Login Page',
    ip: '198.51.100.42',
    timestamp: '28 minutes ago',
    status: 'blocked',
    location: 'Unknown'
  },
  {
    id: 4,
    user: 'service_account',
    action: 'Database Backup',
    resource: 'Production DB',
    ip: '10.0.0.1',
    timestamp: '1 hour ago',
    status: 'success',
    location: 'Internal'
  }
]

const complianceStatus = [
  { standard: 'SOC 2 Type II', status: 'compliant', lastAudit: '2024-07-15', nextAudit: '2025-07-15' },
  { standard: 'GDPR', status: 'compliant', lastAudit: '2024-08-01', nextAudit: '2025-08-01' },
  { standard: 'HIPAA', status: 'pending', lastAudit: '2024-06-20', nextAudit: '2024-12-20' },
  { standard: 'ISO 27001', status: 'compliant', lastAudit: '2024-05-10', nextAudit: '2025-05-10' }
]

const systemHealth = [
  { component: 'Firewall', status: 'operational', uptime: 99.9, lastCheck: '30s ago' },
  { component: 'IDS/IPS', status: 'operational', uptime: 99.8, lastCheck: '1m ago' },
  { component: 'WAF', status: 'degraded', uptime: 97.2, lastCheck: '5m ago' },
  { component: 'DDoS Protection', status: 'operational', uptime: 99.9, lastCheck: '45s ago' },
  { component: 'Encryption Service', status: 'operational', uptime: 99.7, lastCheck: '2m ago' }
]

const securityPolicies = [
  { policy: 'Password Policy', status: 'enforced', coverage: '100%', lastUpdated: '2024-08-15' },
  { policy: 'MFA Requirement', status: 'enforced', coverage: '95%', lastUpdated: '2024-09-01' },
  { policy: 'Data Retention', status: 'enforced', coverage: '100%', lastUpdated: '2024-07-20' },
  { policy: 'Access Control', status: 'partial', coverage: '87%', lastUpdated: '2024-09-10' }
]

export default function SecurityCenterPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 24 Hours')
  const [selectedFilter, setSelectedFilter] = useState('All Alerts')

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800'
      case 'blocked': return 'bg-gray-100 text-gray-800'
      case 'monitoring': return 'bg-yellow-100 text-yellow-800'
      case 'mitigated': return 'bg-green-100 text-green-800'
      case 'success': return 'bg-green-100 text-green-800'
      case 'operational': return 'text-green-500'
      case 'degraded': return 'text-yellow-500'
      case 'down': return 'text-red-500'
      case 'compliant': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'enforced': return 'bg-green-100 text-green-800'
      case 'partial': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Security Center</h1>
            <p className="text-gray-600 mt-1 text-sm">Comprehensive security monitoring, threat detection, and compliance management</p>
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
              Security Report
            </button>
          </div>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric) => {
          const Icon = metric.icon
          const isPositive = metric.trend === 'up'
          
          return (
            <div key={metric.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded bg-gray-50">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className={`flex items-center text-xs font-medium ${
                  (metric.title === 'Active Threats' || metric.title === 'Failed Logins') && isPositive ? 'text-red-600' :
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

      {/* Security Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">Active Security Threats</h2>
            <div className="flex items-center space-x-2">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-1.5 text-xs border border-gray-300 rounded"
              >
                <option>All Alerts</option>
                <option>Critical</option>
                <option>High</option>
                <option>Active Only</option>
              </select>
              <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                View All →
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Threat Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Attempts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {threatAlerts.map((threat) => (
                <tr key={threat.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-medium text-gray-900">{threat.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs font-mono text-gray-900">{threat.source}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{threat.target}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(threat.status)}`}>
                      {threat.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{threat.timestamp}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs font-medium text-gray-900">{threat.attempts}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Vulnerability Management</h2>
          <div className="space-y-3">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.id} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-900">{vuln.title}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getSeverityColor(vuln.severity)}`}>
                    {vuln.severity}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Component:</span>
                    <div className="font-medium">{vuln.component}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className={`font-medium ${
                      vuln.status === 'resolved' ? 'text-green-600' :
                      vuln.status === 'patched' ? 'text-blue-600' : 'text-red-600'
                    }`}>
                      {vuln.status}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Discovered:</span>
                    <div className="font-medium">{formatDate(vuln.discovered)}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Resolved:</span>
                    <div className="font-medium">{vuln.resolved ? formatDate(vuln.resolved) : 'Pending'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Security System Health</h2>
          <div className="space-y-3">
            {systemHealth.map((system) => (
              <div key={system.component} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center space-x-3">
                  <CheckCircle className={`w-5 h-5 ${getStatusColor(system.status)}`} />
                  <div>
                    <div className="text-xs font-medium text-gray-900">{system.component}</div>
                    <div className="text-xs text-gray-500">{system.uptime}% uptime</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium capitalize ${getStatusColor(system.status)}`}>
                    {system.status}
                  </div>
                  <div className="text-xs text-gray-500">{system.lastCheck}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Access Logs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Recent Access Logs</h2>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
            View Full Logs →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Resource</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {accessLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <span className="text-xs font-medium text-gray-900">{log.user}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{log.action}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs font-mono text-gray-600">{log.resource}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs font-mono text-gray-900">{log.ip}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-600">{log.location}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-xs text-gray-500">{log.timestamp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Compliance Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Compliance Status</h2>
          <div className="space-y-3">
            {complianceStatus.map((compliance) => (
              <div key={compliance.standard} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <div className="text-xs font-medium text-gray-900">{compliance.standard}</div>
                  <div className="text-xs text-gray-500">Next audit: {formatDate(compliance.nextAudit)}</div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(compliance.status)}`}>
                  {compliance.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Policies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Security Policies</h2>
          <div className="space-y-3">
            {securityPolicies.map((policy) => (
              <div key={policy.policy} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <div className="text-xs font-medium text-gray-900">{policy.policy}</div>
                  <div className="text-xs text-gray-500">{policy.coverage} coverage</div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(policy.status)}`}>
                  {policy.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
