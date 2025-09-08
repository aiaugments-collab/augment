'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function DeveloperDocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const docSections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'authentication', title: 'Authentication', icon: '🔐' },
    { id: 'chat-api', title: 'Chat API', icon: '💬' },
    { id: 'embeddings', title: 'Embeddings', icon: '🔢' },
    { id: 'fine-tuning', title: 'Fine-tuning', icon: '⚙️' },
    { id: 'streaming', title: 'Streaming', icon: '🌊' },
    { id: 'error-handling', title: 'Error Handling', icon: '⚠️' },
    { id: 'rate-limits', title: 'Rate Limits', icon: '⏱️' },
    { id: 'webhooks', title: 'Webhooks', icon: '🔗' },
    { id: 'sdks', title: 'SDKs & Libraries', icon: '📦' }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', category: 'Getting Started', readTime: '5 min', popularity: 95 },
    { title: 'Chat Completions API', category: 'API Reference', readTime: '8 min', popularity: 92 },
    { title: 'Authentication Methods', category: 'Security', readTime: '6 min', popularity: 88 },
    { title: 'JavaScript SDK', category: 'SDKs', readTime: '10 min', popularity: 85 },
    { title: 'Error Codes Reference', category: 'Troubleshooting', readTime: '4 min', popularity: 82 },
    { title: 'Streaming Responses', category: 'Advanced', readTime: '7 min', popularity: 79 }
  ];

  const recentUpdates = [
    { title: 'New GPT-4 Turbo Model Available', date: '2024-01-15', type: 'feature' },
    { title: 'Updated Rate Limits for Free Tier', date: '2024-01-12', type: 'update' },
    { title: 'Python SDK v2.0 Released', date: '2024-01-10', type: 'release' },
    { title: 'New Webhook Events Added', date: '2024-01-08', type: 'feature' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Developer Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Everything you need to integrate Augment AI into your applications. Comprehensive guides, API references, and code examples.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Documentation
              </h3>
              <nav className="space-y-1">
                {docSections.map((section) => (
                  <a
                    key={section.id}
                    href="#"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#C74634] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Need Help?
                </h4>
                <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Join our developer community for support and discussions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-[#C74634] hover:text-[#A63429] font-medium"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Join Community →
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Access Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="#" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Quick Start
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Get up and running in 5 minutes
                </p>
              </a>

              <a href="#" className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  API Reference
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Complete API documentation
                </p>
              </a>

              <a href="#" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Code Examples
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Ready-to-use code samples
                </p>
              </a>
            </div>

            {/* Popular Documentation */}
            <div className="mb-12">
              <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Popular Documentation
              </h2>
              <div className="space-y-4">
                {popularDocs.map((doc, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-[#C74634] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                          {doc.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                          <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {doc.category}
                          </span>
                          <span>{doc.readTime} read</span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {doc.popularity}%
                          </span>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Recent Updates
              </h2>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      update.type === 'feature' ? 'bg-green-100 text-green-600' :
                      update.type === 'update' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {update.type === 'feature' ? '✨' : update.type === 'update' ? '🔄' : '📦'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {update.title}
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {update.date}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-[#C74634] hover:text-[#A63429] text-sm font-medium"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Read more →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example Section */}
            <div className="bg-gray-900 rounded-lg p-6 mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Example: Chat Completion
                </h3>
                <button className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Copy Code
                </button>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`curl -X POST "https://api.augment.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $AUGMENT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "augment-gpt-4",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user", 
        "content": "Explain machine learning in simple terms"
      }
    ],
    "max_tokens": 150,
    "temperature": 0.7
  }'`}
              </pre>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-r from-[#C74634] to-[#A63429] rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Still Need Help?
              </h3>
              <p className="text-red-100 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our developer community and support team are here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Join Community
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
