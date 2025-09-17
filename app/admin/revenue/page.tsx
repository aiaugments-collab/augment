'use client'

import React, { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  CreditCard,
  Users,
  Target,
  PieChart,
  BarChart3,
  LineChart
} from 'lucide-react'

// Mock revenue data
const monthlyRevenue = [
  { month: 'Jan 2024', revenue: 1850000, growth: 12.5, subscriptions: 2340, churn: 3.2 },
  { month: 'Feb 2024', revenue: 1920000, growth: 15.8, subscriptions: 2480, churn: 2.9 },
  { month: 'Mar 2024', revenue: 2050000, growth: 18.2, subscriptions: 2650, churn: 2.1 },
  { month: 'Apr 2024', revenue: 2180000, growth: 21.4, subscriptions: 2820, churn: 2.8 },
  { month: 'May 2024', revenue: 2290000, growth: 19.7, subscriptions: 2950, churn: 2.4 },
  { month: 'Jun 2024', revenue: 2350000, growth: 16.3, subscriptions: 3080, churn: 3.1 },
  { month: 'Jul 2024', revenue: 2420000, growth: 22.1, subscriptions: 3210, churn: 2.6 },
  { month: 'Aug 2024', revenue: 2510000, growth: 24.8, subscriptions: 3340, churn: 2.2 },
  { month: 'Sep 2024', revenue: 2640000, growth: 26.4, subscriptions: 3480, churn: 1.9 }
]

const revenueByCategory = [
  { category: 'AI & Automation', revenue: 1200000, percentage: 45.5, growth: 34.2 },
  { category: 'Enterprise Applications', revenue: 894000, percentage: 33.9, growth: 23.1 },
  { category: 'Security & Monitoring', revenue: 356000, percentage: 13.5, growth: 41.8 },
  { category: 'Cloud & Infrastructure', revenue: 190000, percentage: 7.1, growth: 18.9 }
]

const subscriptionTiers = [
  { tier: 'Enterprise', revenue: 1584000, users: 847, avgRevenue: 1870, growth: 28.4 },
  { tier: 'Professional', revenue: 742000, users: 2340, avgRevenue: 317, growth: 22.1 },
  { tier: 'Starter', revenue: 314000, users: 4280, avgRevenue: 73, growth: 31.8 }
]

const topRevenueApps = [
  { name: 'AI HR Agent', revenue: 489000, users: 12847, arpu: 38.06, growth: 34.2 },
  { name: 'Financial Management', revenue: 423000, users: 9234, arpu: 45.82, growth: 28.1 },
  { name: 'NeuroFlow Orchestrator', revenue: 387000, users: 8156, arpu: 47.46, growth: 41.3 },
  { name: 'AI Search Engine', revenue: 329000, users: 7892, arpu: 41.69, growth: 52.1 },
  { name: 'Procurement', revenue: 284000, users: 6743, arpu: 42.13, growth: 19.4 }
]

const paymentMethods = [
  { method: 'Credit Card', percentage: 67.3, amount: 1776720 },
  { method: 'Bank Transfer', percentage: 21.4, amount: 564960 },
  { method: 'PayPal', percentage: 8.9, amount: 234960 },
  { method: 'Cryptocurrency', percentage: 2.4, amount: 63360 }
]

const cohortData = [
  { cohort: 'Q1 2024', month1: 100, month2: 87, month3: 79, month4: 73, month5: 69, month6: 66 },
  { cohort: 'Q2 2024', month1: 100, month2: 91, month3: 84, month4: 78, month5: 74, month6: 71 },
  { cohort: 'Q3 2024', month1: 100, month2: 94, month3: 88, month4: 82, month5: 78, month6: 75 },
  { cohort: 'Q4 2024', month1: 100, month2: 96, month3: 91, month4: 86, month5: 82, month6: 79 }
]

export default function RevenueAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('Last 12 Months')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  const currentRevenue = monthlyRevenue[monthlyRevenue.length - 1].revenue
  const previousRevenue = monthlyRevenue[monthlyRevenue.length - 2].revenue
  const revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue * 100).toFixed(1)

  const totalARR = currentRevenue * 12
  const avgChurn = (monthlyRevenue.reduce((sum, m) => sum + m.churn, 0) / monthlyRevenue.length).toFixed(1)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Revenue Analytics</h1>
            <p className="text-gray-600 mt-1 text-sm">Comprehensive financial performance tracking and forecasting</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-1.5 text-xs border border-gray-300 rounded"
            >
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last 12 Months</option>
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
            <div className="p-2 rounded bg-green-50">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +{revenueGrowth}%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{formatCurrency(currentRevenue)}</h3>
            <p className="text-xs text-gray-500 mt-1">Monthly Recurring Revenue</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-blue-50">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +23.4%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{formatCurrency(totalARR)}</h3>
            <p className="text-xs text-gray-500 mt-1">Annual Recurring Revenue</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-purple-50">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-red-600">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              -{avgChurn}%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{avgChurn}%</h3>
            <p className="text-xs text-gray-500 mt-1">Average Monthly Churn</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded bg-orange-50">
              <CreditCard className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +18.7%
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">$387</h3>
            <p className="text-xs text-gray-500 mt-1">Average Revenue Per User</p>
          </div>
        </div>
      </div>

      {/* Revenue Trend Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-900">Revenue Trend</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSelectedMetric('revenue')}
              className={`px-3 py-1 text-xs rounded ${selectedMetric === 'revenue' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              Revenue
            </button>
            <button
              onClick={() => setSelectedMetric('growth')}
              className={`px-3 py-1 text-xs rounded ${selectedMetric === 'growth' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              Growth %
            </button>
            <button
              onClick={() => setSelectedMetric('subscriptions')}
              className={`px-3 py-1 text-xs rounded ${selectedMetric === 'subscriptions' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              Subscriptions
            </button>
          </div>
        </div>
        <div className="space-y-3">
          {monthlyRevenue.slice(-6).map((data, index) => (
            <div key={data.month} className="flex items-center justify-between">
              <span className="text-xs text-gray-600 w-20">{data.month.split(' ')[0]}</span>
              <div className="flex-1 mx-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ 
                      width: selectedMetric === 'revenue' ? `${(data.revenue / 3000000) * 100}%` :
                             selectedMetric === 'growth' ? `${(data.growth / 30) * 100}%` :
                             `${(data.subscriptions / 4000) * 100}%`
                    }}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-gray-900 w-20 text-right">
                {selectedMetric === 'revenue' ? formatCurrency(data.revenue) :
                 selectedMetric === 'growth' ? `+${data.growth}%` :
                 data.subscriptions.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Revenue by Category</h2>
          <div className="space-y-3">
            {revenueByCategory.map((category) => (
              <div key={category.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-xs font-medium text-gray-900">{category.category}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-16 text-right">
                    {formatCurrency(category.revenue)}
                  </span>
                  <span className="text-xs text-green-600 w-12 text-right">
                    +{category.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Tiers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Subscription Tiers</h2>
          <div className="space-y-3">
            {subscriptionTiers.map((tier) => (
              <div key={tier.tier} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-900">{tier.tier}</span>
                  <span className="text-xs font-medium text-green-600">+{tier.growth}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-gray-500">Revenue</div>
                    <div className="font-medium">{formatCurrency(tier.revenue)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Users</div>
                    <div className="font-medium">{tier.users.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">ARPU</div>
                    <div className="font-medium">${tier.avgRevenue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Revenue Apps */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Top Revenue Generating Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Application</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Users</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ARPU</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topRevenueApps.map((app, index) => (
                <tr key={app.name}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-600">
                        {index + 1}
                      </span>
                      <span className="text-xs font-medium text-gray-900">{app.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-xs font-medium text-gray-900">{formatCurrency(app.revenue)}</td>
                  <td className="px-4 py-2 text-xs text-gray-600">{app.users.toLocaleString()}</td>
                  <td className="px-4 py-2 text-xs text-gray-600">${app.arpu.toFixed(2)}</td>
                  <td className="px-4 py-2 text-xs font-medium text-green-600">+{app.growth}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Payment Methods</h2>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.method} className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-900">{method.method}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-12 text-right">{method.percentage}%</span>
                  <span className="text-xs font-medium text-gray-900 w-20 text-right">
                    {formatCurrency(method.amount)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cohort Retention */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Customer Retention Cohorts</h2>
          <div className="space-y-2">
            {cohortData.map((cohort) => (
              <div key={cohort.cohort} className="grid grid-cols-7 gap-1 items-center">
                <span className="text-xs font-medium text-gray-600">{cohort.cohort}</span>
                <span className="text-xs text-center p-1 bg-green-100 text-green-800 rounded">{cohort.month1}%</span>
                <span className="text-xs text-center p-1 bg-green-100 text-green-800 rounded">{cohort.month2}%</span>
                <span className="text-xs text-center p-1 bg-yellow-100 text-yellow-800 rounded">{cohort.month3}%</span>
                <span className="text-xs text-center p-1 bg-yellow-100 text-yellow-800 rounded">{cohort.month4}%</span>
                <span className="text-xs text-center p-1 bg-orange-100 text-orange-800 rounded">{cohort.month5}%</span>
                <span className="text-xs text-center p-1 bg-orange-100 text-orange-800 rounded">{cohort.month6}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
