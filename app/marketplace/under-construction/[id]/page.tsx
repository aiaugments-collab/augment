'use client'

import React from 'react'
import { Construction, ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marketplaceApps, getDocsUrl, config } from '../../../../lib/marketplaceData'

export default async function UnderConstructionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = marketplaceApps.find(a => a.id === id)
  
  if (!app) {
    notFound()
  }

  const docsUrl = getDocsUrl(app)
  const imageSrc = app.logo ? `/${app.logo}` : (app.image || '/file.svg')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/marketplace" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Under Construction Banner */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 border border-gray-200">
                <img src={imageSrc} alt={app.name} className="w-10 h-10" onError={(e) => { (e.target as HTMLImageElement).src = '/file.svg' }} />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {app.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {app.subtitle}
              </p>
              
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <Construction className="w-4 h-4 mr-2" />
                Documentation Coming Soon
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Application</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Category</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {app.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Pricing</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    app.pricing === 'Free' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {app.pricing}
                  </span>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Development Status</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <Construction className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="font-medium text-gray-900">Documentation</span>
                  </div>
                  <span className="text-orange-600 text-sm font-medium">In Progress</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="font-medium text-gray-900">Current Rating</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm">{app.rating}/5</span>
                    <span className="text-gray-400 text-sm ml-2">({app.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="font-medium text-gray-900">Last Updated</span>
                  </div>
                  <span className="text-gray-600 text-sm">{app.lastUpdated}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="font-medium text-gray-900">Publisher</span>
                  </div>
                  <span className="text-gray-600 text-sm">Augment Technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Notified</h2>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you comprehensive documentation and deployment guides for {app.name}. 
              Want to be notified when it's ready?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Notify Me When Ready
              </button>
              
              <a 
                href={app.openSourceBase}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a>
              
              <Link 
                href="/marketplace"
                className="flex-1 flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse More Apps
              </Link>
            </div>
          </div>

          {/* Future Documentation Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">📚 Complete Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step installation guides, configuration examples, and best practices.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">🚀 One-Click Deploy</h3>
                <p className="text-gray-600 text-sm">
                  Deploy {app.name} to your infrastructure with pre-configured templates.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">💬 Community Support</h3>
                <p className="text-gray-600 text-sm">
                  Join discussions, get help, and share experiences with other users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
