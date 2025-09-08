'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function AIAgentFreeTierPage() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [signupForm, setSignupForm] = useState({
    email: '',
    name: '',
    company: ''
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedUp(true);
    setTimeout(() => {
      setIsSignedUp(false);
      setSignupForm({ email: '', name: '', company: '' });
    }, 3000);
  };

  const freeTierFeatures = [
    {
      feature: 'API Calls',
      free: '10,000/month',
      paid: 'Unlimited',
      icon: '🔄'
    },
    {
      feature: 'Models',
      free: 'GPT-3.5 Turbo',
      paid: 'All Models (GPT-4, Claude, etc.)',
      icon: '🧠'
    },
    {
      feature: 'Rate Limits',
      free: '20 RPM',
      paid: '1000+ RPM',
      icon: '⚡'
    },
    {
      feature: 'Support',
      free: 'Community Forums',
      paid: 'Priority Support',
      icon: '🎧'
    },
    {
      feature: 'Analytics',
      free: 'Basic Usage Stats',
      paid: 'Advanced Analytics',
      icon: '📊'
    },
    {
      feature: 'Fine-tuning',
      free: 'Not Available',
      paid: 'Available',
      icon: '⚙️'
    }
  ];

  const useCases = [
    {
      title: 'Prototype Development',
      description: 'Build and test AI prototypes without upfront costs',
      icon: '🛠️',
      examples: ['MVP chatbots', 'Proof of concepts', 'Demo applications']
    },
    {
      title: 'Learning & Education',
      description: 'Perfect for students and developers learning AI',
      icon: '🎓',
      examples: ['Tutorials', 'Course projects', 'Skill development']
    },
    {
      title: 'Small Projects',
      description: 'Ideal for personal projects and small applications',
      icon: '🏠',
      examples: ['Personal assistants', 'Hobby projects', 'Side projects']
    },
    {
      title: 'Testing & Evaluation',
      description: 'Evaluate our platform before committing to paid plans',
      icon: '🔬',
      examples: ['API testing', 'Performance evaluation', 'Feature exploration']
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Sign Up for Free',
      description: 'Create your account in seconds - no credit card required',
      action: 'Get Started'
    },
    {
      step: 2,
      title: 'Get Your API Key',
      description: 'Instantly receive your API key and start building',
      action: 'Generate Key'
    },
    {
      step: 3,
      title: 'Make Your First Call',
      description: 'Use our SDKs or REST API to integrate AI into your app',
      action: 'Start Building'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm text-green-300 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Free Forever
              </div>
              <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Start Building with
                <span className="block text-green-400">AI for Free</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                Get started with Augment AI at no cost. 10,000 free API calls per month, access to GPT-3.5 Turbo, and everything you need to build your first AI application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#signup"
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  See What's Included
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400" style={{ fontFamily: 'var(--oraclesans)' }}>Free Tier Demo</span>
                </div>
                <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`curl -X POST "https://api.augment.ai/v1/chat/completions" \\
  -H "Authorization: Bearer free_tier_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "Hello, world!"}
    ]
  }'

// Response
{
  "choices": [{
    "message": {
      "content": "Hello! How can I help you today?"
    }
  }],
  "usage": {
    "total_tokens": 15,
    "remaining_free_calls": 9999
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tier Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Generous Free Tier Limits
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Everything you need to get started with AI development at no cost
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                10K
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Free API Calls/Month
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                $0
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Setup Cost
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                20
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Requests Per Minute
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                ∞
              </div>
              <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Time Limit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Free vs Paid Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              See what's included in our free tier and how it compares to paid plans
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-4">
                <h3 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>Feature</h3>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>Icon</h3>
              </div>
              <div className="p-4 text-center bg-green-50 border-l border-green-200">
                <h3 className="font-semibold text-green-800" style={{ fontFamily: 'var(--oracleserif)' }}>Free Tier</h3>
              </div>
              <div className="p-4 text-center bg-blue-50 border-l border-blue-200">
                <h3 className="font-semibold text-blue-800" style={{ fontFamily: 'var(--oracleserif)' }}>Paid Plans</h3>
              </div>
            </div>
            {freeTierFeatures.map((item, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-gray-200 last:border-b-0">
                <div className="p-4">
                  <span className="font-medium text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {item.feature}
                  </span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="p-4 text-center bg-green-50/50 border-l border-green-200">
                  <span className="text-sm text-green-800 font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {item.free}
                  </span>
                </div>
                <div className="p-4 text-center bg-blue-50/50 border-l border-blue-200">
                  <span className="text-sm text-blue-800 font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {item.paid}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Perfect for These Use Cases
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our free tier is designed to support various development scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4 text-2xl flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {useCase.title}
                    </h3>
                    <p className="text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {useCase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <span
                          key={exampleIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          style={{ fontFamily: 'var(--oraclesans)' }}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Get Started in 3 Steps
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Start building with AI in minutes - no credit card required
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {step.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {step.action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Start Building for Free
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join thousands of developers building with Augment AI
            </p>
          </div>

          {isSignedUp ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-green-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Welcome to Augment AI!
              </h3>
              <p className="text-green-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Your free account has been created. Check your email for your API key and getting started guide.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Go to Dashboard
              </a>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={signupForm.company}
                    onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 text-lg"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Get Started Free
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                  By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-green-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Join thousands of developers who are building the future with AI. Start for free, scale when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#signup"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Start Building Free
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
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
