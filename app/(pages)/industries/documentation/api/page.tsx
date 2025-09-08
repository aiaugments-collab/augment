import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API Documentation | Augment AI',
  description: 'Comprehensive API documentation for Augment AI platform. REST APIs, SDKs, authentication, and integration guides.',
  keywords: 'API documentation, REST API, SDK, authentication, integration, developer guide',
};

export default function APIDocumentationPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">API Documentation | Augment AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Comprehensive API documentation for integrating Augment AI capabilities into your applications. REST APIs, SDKs, and code examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Get API Key
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Quick Start
              </h2>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-500"># Install the Augment SDK</span><br/>
                  <span className="text-white">pip install augment-ai</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-500"># Initialize the client</span><br/>
                  <span className="text-blue-400">from</span> <span className="text-white">augment</span> <span className="text-blue-400">import</span> <span className="text-white">AugmentClient</span><br/>
                  <span className="text-white">client = AugmentClient(api_key=</span><span className="text-yellow-400">"your-api-key"</span><span className="text-white">)</span>
                </div>
                <div>
                  <span className="text-gray-500"># Make your first API call</span><br/>
                  <span className="text-white">response = client.analyze(data=</span><span className="text-yellow-400">"your data"</span><span className="text-white">)</span><br/>
                  <span className="text-blue-400">print</span><span className="text-white">(response.result)</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Core Endpoints
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <code className="text-sm">/api/v1/analyze</code>
                  </div>
                  <p className="text-gray-600 text-sm">Analyze data using AI models</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono mr-3">POST</span>
                    <code className="text-sm">/api/v1/train</code>
                  </div>
                  <p className="text-gray-600 text-sm">Train custom AI models</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <code className="text-sm">/api/v1/models</code>
                  </div>
                  <p className="text-gray-600 text-sm">List available AI models</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-mono mr-3">PUT</span>
                    <code className="text-sm">/api/v1/deploy</code>
                  </div>
                  <p className="text-gray-600 text-sm">Deploy models to production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Authentication
          </h2>
          <p className="text-gray-700 mb-6">
            All API requests require authentication using an API key. Include your API key in the Authorization header:
          </p>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <span className="text-white">curl -H </span><span className="text-yellow-400">"Authorization: Bearer YOUR_API_KEY"</span> <span className="text-white">\\</span><br/>
            <span className="text-white">     -H </span><span className="text-yellow-400">"Content-Type: application/json"</span> <span className="text-white">\\</span><br/>
            <span className="text-white">     https://api.augment.ai/v1/analyze</span>
          </div>
          
          <h3 className="text-xl font-semibold text-[#161513] mb-4">Rate Limits</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Free Tier:</strong> 1,000 requests per month</li>
              <li>• <strong>Pro Tier:</strong> 100,000 requests per month</li>
              <li>• <strong>Enterprise:</strong> Custom limits available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Start Building?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Get your API key and start integrating Augment AI into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get API Key
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Enterprise Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
