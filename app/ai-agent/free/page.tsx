'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function FreeAIAgentPage() {
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Free AI Agent signup:', signupForm);
  };

  const heroButtons = [
    {
      text: 'Start Free Trial',
      href: '#signup',
      variant: 'primary' as const
    },
    {
      text: 'View Features',
      href: '#features',
      variant: 'secondary' as const
    }
  ];

  const freeFeatures = [
    {
      id: 'basic-automation',
      title: 'Basic Automation',
      description: 'Automate simple tasks and workflows with our free AI agent.',
      ctaText: 'Try now',
      ctaLink: '#signup',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'natural-language',
      title: 'Natural Language Interface',
      description: 'Interact with your AI agent using simple, natural language commands.',
      ctaText: 'Learn more',
      ctaLink: '#features',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'quick-setup',
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process.',
      ctaText: 'Get started',
      ctaLink: '#signup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const includedFeatures = [
    '✅ Up to 100 AI agent interactions per month',
    '✅ Basic workflow automation',
    '✅ Natural language processing',
    '✅ Email and chat support',
    '✅ Pre-built templates',
    '✅ Basic analytics dashboard',
    '✅ API access (limited)',
    '✅ Community forum access'
  ];

  const limitations = [
    '❌ Advanced AI models (Pro feature)',
    '❌ Custom integrations (Enterprise feature)',
    '❌ Priority support (Paid plans)',
    '❌ Advanced analytics (Pro feature)',
    '❌ Team collaboration (Pro feature)',
    '❌ White-label options (Enterprise feature)'
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate blog posts, social media content, and marketing copy.',
      icon: '✍️'
    },
    {
      title: 'Data Processing',
      description: 'Analyze spreadsheets and extract insights from your data.',
      icon: '📊'
    },
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries.',
      icon: '🎧'
    },
    {
      title: 'Task Management',
      description: 'Organize and prioritize your daily tasks and projects.',
      icon: '📋'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Free AI Agent"
        subtitle="Experience AI automation at no cost"
        description="Get started with our free AI agent. No credit card required, start automating tasks in minutes."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      /> 

      {/* Free Features */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in the Free Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with powerful AI automation features at no cost. Perfect for individuals and small teams.
            </p>
          </div>
          <FeaturedCards cards={freeFeatures} />
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Plan Features
            </h2>
            <p className="text-lg text-gray-600">
              See what's included and what you can upgrade to with paid plans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ✅ Included in Free Plan
              </h3>
              <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🚀 Upgrade for More
              </h3>
              <ul className="space-y-3">
                {limitations.map((limitation, index) => (
                  <li key={index} className="text-gray-600">
                    {limitation}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="/corporate/contact/sales"
                  className="inline-flex items-center px-4 py-2 bg-[#C74634] text-white font-medium rounded-lg hover:bg-[#A63429] transition-colors"
                >
                  View Paid Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for These Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Our free AI agent is ideal for a variety of automation tasks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Free AI Agent
            </h2>
            <p className="text-lg text-gray-600">
              Sign up now and start automating tasks with AI. No credit card required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={signupForm.name}
                  onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={signupForm.company}
                  onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  value={signupForm.useCase}
                  onChange={(e) => setSignupForm({...signupForm, useCase: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                >
                  <option value="general">General Automation</option>
                  <option value="content">Content Creation</option>
                  <option value="data">Data Processing</option>
                  <option value="support">Customer Support</option>
                  <option value="tasks">Task Management</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 rounded border-gray-300 text-[#C74634] focus:ring-[#C74634]" required />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the <a href="/legal/privacy" className="text-[#C74634] hover:underline">Terms of Service</a> and <a href="/legal/privacy" className="text-[#C74634] hover:underline">Privacy Policy</a> *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
            >
              Start Free AI Agent
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              No credit card required • Start automating in minutes
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is the free AI agent really free?
              </h3>
              <p className="text-gray-600">
                Yes! Our free AI agent includes 100 interactions per month at no cost. No credit card required to start.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens when I exceed the free limit?
              </h3>
              <p className="text-gray-600">
                Your agent will pause until the next month, or you can upgrade to a paid plan for unlimited usage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade later?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade to Pro or Enterprise plans at any time to unlock advanced features and higher limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Automate with AI?"
        description="Join thousands of users already automating tasks with our free AI agent."
        actions={[
          {
            title: 'Start Free Now',
            href: '#signup',
            buttonText: 'Start Free Now'
          },
          {
            title: 'View All Plans',
            href: '/corporate/contact/sales',
            buttonText: 'View All Plans'
          }
        ]}
      />
    </div>
  );
}
