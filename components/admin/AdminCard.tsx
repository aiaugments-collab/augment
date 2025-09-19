'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface AdminCardProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: LucideIcon
  description?: string
  className?: string
}

export default function AdminCard({
  title,
  value,
  change,
  trend = 'neutral',
  icon: Icon,
  description,
  className = ''
}: AdminCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getTrendBgColor = () => {
    switch (trend) {
      case 'up':
        return 'bg-green-50'
      case 'down':
        return 'bg-red-50'
      default:
        return 'bg-gray-50'
    }
  }

  return (
    <div 
      className={`
        bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:shadow-md
        ${className}
      `}
      style={{ 
        fontFamily: "var(--oraclesans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`
          p-3 rounded-lg ${getTrendBgColor()}
        `}>
          <Icon className={`w-6 h-6 ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-[#1e3a5f]'}`} />
        </div>
        {change && (
          <div className={`
            flex items-center text-sm font-medium px-2 py-1 rounded-full
            ${getTrendColor()} ${getTrendBgColor()}
          `}>
            {change}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          {value}
        </h3>
        <p className="text-sm font-medium text-gray-600 mb-1">
          {title}
        </p>
        {description && (
          <p className="text-xs text-gray-500">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
