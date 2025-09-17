'use client'

import React, { useState } from 'react'
import { 
  Settings, 
  Save, 
  RefreshCw, 
  Bell, 
  Shield, 
  Globe, 
  Mail, 
  Database,
  Key,
  Users,
  Zap,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Copy,
  Edit,
  Trash2
} from 'lucide-react'

// Mock settings data
const settingsCategories = [
  'General',
  'Security',
  'Notifications',
  'API Settings',
  'Email Configuration',
  'Database',
  'Feature Flags'
]

export default function AdminSettingsPage() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [showApiKey, setShowApiKey] = useState(false)
  const [settings, setSettings] = useState({
    general: {
      platformName: 'Augment Platform',
      platformDescription: 'AI Products Platform for Enterprise',
      timezone: 'UTC',
      maintenanceMode: false,
      debugMode: false
    },
    security: {
      passwordMinLength: 8,
      requireMfa: true,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      apiRateLimit: 1000
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      slackNotifications: true,
      webhookUrl: 'https://hooks.slack.com/services/...'
    },
    api: {
      rateLimitPerHour: 10000,
      requireApiKey: true,
      corsEnabled: true,
      allowedOrigins: ['https://app.augment.cfd', 'https://docs.augment.cfd']
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: 587,
      smtpUser: 'noreply@augment.cfd',
      smtpPassword: '••••••••••••',
      fromEmail: 'Augment Platform <noreply@augment.cfd>'
    },
    database: {
      connectionPool: 20,
      queryTimeout: 30,
      backupFrequency: 'daily',
      retentionDays: 30
    },
    features: {
      newDashboard: true,
      advancedAnalytics: false,
      betaFeatures: true,
      aiAssistant: false
    }
  })

  const handleInputChange = (category: string, field: string, value: string | number | boolean | string[]) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleSave = () => {
    // Mock save functionality
    console.log('Settings saved:', settings)
    alert('Settings saved successfully!')
  }

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Platform Name
        </label>
        <input
          type="text"
          value={settings.general.platformName}
          onChange={(e) => handleInputChange('general', 'platformName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Platform Description
        </label>
        <textarea
          value={settings.general.platformDescription}
          onChange={(e) => handleInputChange('general', 'platformDescription', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Timezone
        </label>
        <select
          value={settings.general.timezone}
          onChange={(e) => handleInputChange('general', 'timezone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="UTC">UTC</option>
          <option value="EST">Eastern Standard Time</option>
          <option value="PST">Pacific Standard Time</option>
          <option value="GMT">Greenwich Mean Time</option>
        </select>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Maintenance Mode</h4>
            <p className="text-sm text-gray-600">Temporarily disable public access</p>
          </div>
          <button
            onClick={() => handleInputChange('general', 'maintenanceMode', !settings.general.maintenanceMode)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              settings.general.maintenanceMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                settings.general.maintenanceMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Debug Mode</h4>
            <p className="text-sm text-gray-600">Enable detailed error logging</p>
          </div>
          <button
            onClick={() => handleInputChange('general', 'debugMode', !settings.general.debugMode)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              settings.general.debugMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                settings.general.debugMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Password Length
          </label>
          <input
            type="number"
            value={settings.security.passwordMinLength}
            onChange={(e) => handleInputChange('security', 'passwordMinLength', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            value={settings.security.sessionTimeout}
            onChange={(e) => handleInputChange('security', 'sessionTimeout', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Login Attempts
          </label>
          <input
            type="number"
            value={settings.security.maxLoginAttempts}
            onChange={(e) => handleInputChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API Rate Limit (per hour)
          </label>
          <input
            type="number"
            value={settings.security.apiRateLimit}
            onChange={(e) => handleInputChange('security', 'apiRateLimit', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">Require Multi-Factor Authentication</h4>
          <p className="text-sm text-gray-600">Force MFA for all user accounts</p>
        </div>
        <button
          onClick={() => handleInputChange('security', 'requireMfa', !settings.security.requireMfa)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            settings.security.requireMfa ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              settings.security.requireMfa ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  )

  const renderApiSettings = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
          <span className="text-sm text-yellow-800">
            Changes to API settings will require service restart
          </span>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Master API Key
        </label>
        <div className="flex items-center space-x-2">
          <input
            type={showApiKey ? "text" : "password"}
            value="ak_1234567890abcdef"
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
          />
          <button
            onClick={() => setShowApiKey(!showApiKey)}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Copy className="w-4 h-4" />
          </button>
          <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Allowed Origins (CORS)
        </label>
        <div className="space-y-2">
          {settings.api.allowedOrigins.map((origin, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={origin}
                onChange={(e) => {
                  const newOrigins = [...settings.api.allowedOrigins]
                  newOrigins[index] = e.target.value
                  handleInputChange('api', 'allowedOrigins', newOrigins)
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            + Add Origin
          </button>
        </div>
      </div>
    </div>
  )

  const renderFeatureFlags = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {Object.entries(settings.features).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <p className="text-sm text-gray-600">
                {key === 'newDashboard' && 'Enable the redesigned dashboard interface'}
                {key === 'advancedAnalytics' && 'Access to advanced analytics features'}
                {key === 'betaFeatures' && 'Enable experimental beta features'}
                {key === 'aiAssistant' && 'AI-powered assistant functionality'}
              </p>
            </div>
            <button
              onClick={() => handleInputChange('features', key, !value)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                value ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  value ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeCategory) {
      case 'General': return renderGeneralSettings()
      case 'Security': return renderSecuritySettings()
      case 'API Settings': return renderApiSettings()
      case 'Feature Flags': return renderFeatureFlags()
      default: return <div className="text-gray-500">Select a category to configure settings</div>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
          <p className="text-gray-600 mt-1">Configure platform settings and preferences</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4 mr-2 inline" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900 mb-4">Settings Categories</h3>
            <nav className="space-y-2">
              {settingsCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-gray-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">{activeCategory}</h2>
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
