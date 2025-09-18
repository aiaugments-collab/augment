"use client";

import React, { useState } from 'react'
import { Construction, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marketplaceApps } from '../../../../lib/marketplaceData'

interface UnderConstructionPageProps {
  params: Promise<{ id: string }>
}

interface App {
  id: string
  name: string
  subtitle: string
  logo?: string
  image?: string
}

export default function UnderConstructionPage({ params }: UnderConstructionPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  
  React.useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  const app = marketplaceApps.find(a => a.id === resolvedParams.id)
  
  if (!app) {
    notFound()
  }

  return <UnderConstructionClient app={app} />
}

function UnderConstructionClient({ app }: { app: App }) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = app.logo ? `/${app.logo}` : (app.image || '/file.svg')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/marketplace"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* App Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 mb-6">
              {imageError ? (
                <img src="/file.svg" alt={app.name} className="w-12 h-12 opacity-70" />
              ) : (
                <img
                  src={imageSrc}
                  alt={app.name}
                  className="w-12 h-12"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>

          {/* Construction Icon & Status */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Construction className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{app.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{app.subtitle}</p>
          </div>

          {/* Status Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                🚧 Coming Soon
              </h3>
              <p className="text-orange-800">
                We're crafting something amazing! This application is currently under development and will be available soon.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Other Apps
            </Link>
            <Link
              href="/book-demo"
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/20"
            >
              Get Notified
            </Link>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>Want to be notified when {app.name} launches? Contact our team for early access updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}