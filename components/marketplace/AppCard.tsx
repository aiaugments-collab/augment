'use client'

import React from 'react'
import { Star, ExternalLink, Construction } from 'lucide-react'
import Link from 'next/link'
import { type MarketplaceApp, getAppUrl, getDocsUrl } from '../../lib/marketplaceData'


interface AppCardProps {
  app: MarketplaceApp
  viewMode?: 'grid' | 'list'
}

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
    <span className="text-sm text-gray-600">({reviewCount})</span>
  </div>
)

const PricingBadge = ({ pricing }: { pricing: string }) => {
  const getBadgeStyle = (type: string) => {
    switch (type.toLowerCase()) {
      case 'free':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'paid':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'byol':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const displayText = pricing.charAt(0).toUpperCase() + pricing.slice(1).toLowerCase()

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getBadgeStyle(pricing)}`}>
      {displayText}
    </span>
  )
}

export default function AppCard({ app, viewMode = 'grid' }: AppCardProps) {
  const appUrl = getAppUrl(app)
  const isUnderConstruction = !app.beenWorkedOn
  const imageSrc = app.logo ? `/${app.logo}` : (app.image || '/file.svg')

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-300">
        <div className="p-6">
          <div className="flex items-start space-x-6">
            {/* App Icon */}
            <div className="flex-shrink-0 relative">
              <img
                src={imageSrc}
                alt={app.name}
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/file.svg'
                }}
              />
              {isUnderConstruction && (
                <div className="absolute -top-1 -right-1 bg-orange-100 text-orange-600 rounded-full p-1">
                  <Construction className="w-3 h-3" />
                </div>
              )}
            </div>

            {/* App Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Link href={appUrl}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {app.name}
                      {isUnderConstruction && (
                        <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {app.subtitle}
                  </p>
                  <StarRating rating={app.rating} reviewCount={app.reviewCount} />
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <PricingBadge pricing={app.pricing} />
                  <Link href={appUrl} className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 hover:border-blue-300 group">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* App Icon */}
          <div className="flex-shrink-0 relative">
            <img
              src={imageSrc}
              alt={app.name}
              className="w-16 h-16 rounded-lg object-cover border border-gray-200 group-hover:border-blue-300 transition-colors"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/file.svg'
              }}
            />
            {isUnderConstruction && (
              <div className="absolute -top-1 -right-1 bg-orange-100 text-orange-600 rounded-full p-1">
                <Construction className="w-3 h-3" />
              </div>
            )}
          </div>

          {/* App Info */}
          <div className="flex-1 min-w-0">
            <Link href={appUrl}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                {app.name}
                {isUnderConstruction && (
                  <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {app.subtitle}
            </p>
            <StarRating rating={app.rating} reviewCount={app.reviewCount} />
            
            <div className="flex items-center justify-between mt-4">
              <PricingBadge pricing={app.pricing} />
              <Link href={appUrl} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-400 hover:text-blue-600">
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
