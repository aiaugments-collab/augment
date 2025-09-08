'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function DeveloperPortalPage() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [codeExample, setCodeExample] = useState('javascript');

  const quickStartSteps = [
    {
      step: '01',
      title: 'Get Your API Key',
      description: 'Sign up for free and get your API key in seconds',
      code: 'curl -X POST https://api.augment.ai/auth/signup'
    },
    {
      step: '02', 
      title: 'Install SDK',
      description: 'Install our SDK in your preferred language',
      code: 'npm install @augment/ai-sdk'
    },
    {
      step: '03',
      title: 'Make Your First Call',
      description: 'Start building with AI in minutes',
      code: 'const ai = new AugmentAI(apiKey);\nconst result = await ai.chat("Hello world");'
    }
  ];

  const codeExamples = {
    javascript: `import { AugmentAI } from '@augment/ai-sdk';

const ai = new AugmentAI({
  apiKey: 'your-api-key'
});

// Chat completion
const response = await ai.chat.completions.create({
  model: 'augment-gpt-4',
  messages: [
    { role: 'user', content: 'Explain quantum computing' }
  ]
});

console.log(response.choices[0].message.content);`,
    python: `from augment_ai import AugmentAI

ai = AugmentAI(api_key="your-api-key")

# Chat completion
response = ai.chat.completions.create(
    model="augment-gpt-4",
    messages=[
        {"role": "user", "content": "Explain quantum computing"}
    ]
)

print(response.choices[0].message.content)`,
    curl: `curl -X POST "https://api.augment.ai/v1/chat/completions" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "augment-gpt-4",
    "messages": [
      {"role": "user", "content": "Explain quantum computing"}
    ]
  }'`
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Interactive Elements */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#C74634]/20 border border-[#C74634]/30 rounded-full text-sm text-[#C74634] mb-6">
                <span className="w-2 h-2 bg-[#C74634] rounded-full mr-2 animate-pulse"></span>
                Developer Portal
              </div>
              <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Build the Future
                <span className="block text-[#C74634]">with AI</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                Powerful APIs, comprehensive SDKs, and world-class documentation to integrate AI into any application. Join 50,000+ developers building the next generation of intelligent software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Start Building Free
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View Documentation
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>main.js</span>
                </div>
                <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`import { AugmentAI } from '@augment/ai-sdk';

const ai = new AugmentAI({
  apiKey: process.env.AUGMENT_API_KEY
});

const response = await ai.chat({
  message: "Generate a product description",
  context: { product: "AI-powered headphones" }
});

console.log(response.content);
// "Experience crystal-clear audio enhanced 
// by real-time AI noise cancellation..."`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Get Started in Minutes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              From zero to AI-powered application in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#C74634] text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {step.description}
                  </p>
                  <div className="bg-gray-900 rounded-md p-3">
                    <code className="text-sm text-green-400 font-mono">{step.code}</code>
                  </div>
                </div>
                {index < quickStartSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#C74634] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Powerful APIs, Simple Integration
              </h2>
              <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our REST APIs and SDKs make it easy to add AI capabilities to any application. Choose your language and start building.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>RESTful APIs</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Standard HTTP endpoints for any language</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Native SDKs</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>JavaScript, Python, Go, Java, and more</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Real-time Streaming</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>WebSocket and Server-Sent Events support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-700">
                {Object.keys(codeExamples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCodeExample(lang)}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${
                      codeExample === lang
                        ? 'bg-[#C74634] text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  {codeExamples[codeExample as keyof typeof codeExamples]}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Everything You Need to Build
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive resources, tools, and community support for developers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Documentation
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Comprehensive guides, API references, and tutorials to get you started quickly.
              </p>
            </a>

            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Code Samples
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Ready-to-use code examples and templates for common AI use cases.
              </p>
            </a>

            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Community
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Connect with 50,000+ developers building AI applications worldwide.
              </p>
            </a>

            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Developer Tools
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                CLI tools, testing frameworks, and debugging utilities for AI development.
              </p>
            </a>

            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Cloud Shell
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Browser-based development environment with pre-configured AI tools.
              </p>
            </a>

            <a href="#" className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-[#C74634]">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Free Tier
              </h3>
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Start building for free with generous usage limits and no credit card required.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Trusted by Developers Worldwide
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join the growing community of developers building the future with Augment AI
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                50K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Active Developers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                1B+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                API Calls Monthly
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                99.9%
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                API Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                &lt;50ms
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Average Latency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Start Building?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Get your free API key and start integrating AI into your applications today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Get Free API Key
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
