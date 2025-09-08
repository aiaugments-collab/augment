'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function APIsSDKsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [activeEndpoint, setActiveEndpoint] = useState('chat');

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'go', name: 'Go', icon: '🔵' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'ruby', name: 'Ruby', icon: '💎' }
  ];

  const endpoints = [
    {
      id: 'chat',
      name: 'Chat Completions',
      method: 'POST',
      path: '/v1/chat/completions',
      description: 'Generate conversational AI responses',
      params: ['model', 'messages', 'temperature', 'max_tokens']
    },
    {
      id: 'embeddings',
      name: 'Embeddings',
      method: 'POST',
      path: '/v1/embeddings',
      description: 'Create vector embeddings for text',
      params: ['model', 'input', 'encoding_format']
    },
    {
      id: 'fine-tuning',
      name: 'Fine-tuning',
      method: 'POST',
      path: '/v1/fine-tuning/jobs',
      description: 'Create custom model fine-tuning jobs',
      params: ['training_file', 'model', 'hyperparameters']
    },
    {
      id: 'models',
      name: 'Models',
      method: 'GET',
      path: '/v1/models',
      description: 'List available AI models',
      params: []
    }
  ];

  const sdkFeatures = [
    {
      title: 'Type Safety',
      description: 'Full TypeScript support with comprehensive type definitions',
      icon: '🛡️'
    },
    {
      title: 'Async/Await',
      description: 'Modern async patterns with Promise-based APIs',
      icon: '⚡'
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error handling with detailed error types',
      icon: '🚨'
    },
    {
      title: 'Streaming',
      description: 'Real-time streaming responses for chat and completions',
      icon: '🌊'
    },
    {
      title: 'Retries',
      description: 'Automatic retry logic with exponential backoff',
      icon: '🔄'
    },
    {
      title: 'Rate Limiting',
      description: 'Built-in rate limiting and quota management',
      icon: '⏱️'
    }
  ];

  const codeExamples = {
    javascript: {
      installation: 'npm install @augment/ai-sdk',
      usage: `import { AugmentAI } from '@augment/ai-sdk';

const client = new AugmentAI({
  apiKey: process.env.AUGMENT_API_KEY
});

// Chat completion
const completion = await client.chat.completions.create({
  model: 'augment-gpt-4',
  messages: [
    { role: 'user', content: 'Hello, world!' }
  ]
});

console.log(completion.choices[0].message.content);`
    },
    python: {
      installation: 'pip install augment-ai',
      usage: `from augment_ai import AugmentAI

client = AugmentAI(
    api_key=os.environ.get("AUGMENT_API_KEY")
)

# Chat completion
completion = client.chat.completions.create(
    model="augment-gpt-4",
    messages=[
        {"role": "user", "content": "Hello, world!"}
    ]
)

print(completion.choices[0].message.content)`
    },
    go: {
      installation: 'go get github.com/augment-ai/go-sdk',
      usage: `package main

import (
    "context"
    "fmt"
    "github.com/augment-ai/go-sdk"
)

func main() {
    client := augment.NewClient("your-api-key")
    
    resp, err := client.Chat.Completions.Create(context.Background(), &augment.ChatRequest{
        Model: "augment-gpt-4",
        Messages: []augment.Message{
            {Role: "user", Content: "Hello, world!"},
        },
    })
    
    fmt.Println(resp.Choices[0].Message.Content)
}`
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              APIs & SDKs
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Powerful, developer-friendly APIs and SDKs for every programming language. Build AI applications with confidence using our comprehensive toolset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Get API Key
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View API Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Language SDKs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Official SDKs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Native SDKs for your favorite programming languages with full feature support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {languages.map((lang) => (
              <div
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 ${
                  selectedLanguage === lang.id
                    ? 'border-[#C74634] bg-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{lang.icon}</span>
                  <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {lang.name}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Type definitions
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Async support
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Error handling
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--oracleserif)' }}>
                {languages.find(l => l.id === selectedLanguage)?.name} SDK
              </h3>
              <button className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                Copy Code
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Installation
                </h4>
                <div className="bg-gray-100 rounded p-3">
                  <code className="text-sm font-mono text-gray-800">
                    {codeExamples[selectedLanguage as keyof typeof codeExamples]?.installation}
                  </code>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Usage
                </h4>
                <div className="bg-gray-900 rounded p-4">
                  <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                    {codeExamples[selectedLanguage as keyof typeof codeExamples]?.usage}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              API Endpoints
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive REST API with endpoints for all AI capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Available Endpoints
              </h3>
              <div className="space-y-4">
                {endpoints.map((endpoint) => (
                  <div
                    key={endpoint.id}
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`cursor-pointer p-4 rounded-lg border transition-all duration-200 ${
                      activeEndpoint === endpoint.id
                        ? 'border-[#C74634] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {endpoint.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {endpoint.description}
                    </p>
                    <code className="text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded">
                      {endpoint.path}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Example Request
              </h3>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`curl -X POST "https://api.augment.ai/v1/chat/completions" \\
  -H "Authorization: Bearer $AUGMENT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "augment-gpt-4",
    "messages": [
      {
        "role": "user",
        "content": "What is artificial intelligence?"
      }
    ],
    "max_tokens": 150,
    "temperature": 0.7
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              SDK Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Built-in features to make your development experience smooth and productive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdkFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C74634] to-[#A63429] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              API Performance & Reliability
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                6
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Official SDKs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Start Building with Our APIs
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Get your free API key and start integrating AI into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Get Free API Key
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
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
