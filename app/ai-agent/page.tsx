'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function AIAgentPage() {
  const heroButtons = [
    {
      text: 'Try Free Agent',
      href: '/ai-agent/free',
      variant: 'primary' as const
    },
    {
      text: 'View All Products',
      href: '/product',
      variant: 'secondary' as const
    }
  ];

  const agentFeatures = [
    {
      id: 'intelligent-automation',
      title: 'Intelligent Automation',
      description: 'AI agents that can automate complex workflows and decision-making processes.',
      ctaText: 'Learn more',
      ctaLink: '/product/ai-workflow-builder',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'natural-language',
      title: 'Natural Language Processing',
      description: 'Communicate with AI agents using natural language for intuitive interactions.',
      ctaText: 'Explore NLP',
      ctaLink: '/technology/nlp',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'adaptive-learning',
      title: 'Adaptive Learning',
      description: 'AI agents that learn from your data and improve performance over time.',
      ctaText: 'See how',
      ctaLink: '/technology/machine-learning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate customer inquiries and support tickets with intelligent AI agents.',
      icon: '🎧'
    },
    {
      title: 'Data Analysis',
      description: 'Analyze large datasets and generate insights automatically.',
      icon: '📊'
    },
    {
      title: 'Content Generation',
      description: 'Create high-quality content for marketing, documentation, and more.',
      icon: '✍️'
    },
    {
      title: 'Process Optimization',
      description: 'Optimize business processes and workflows using AI-driven insights.',
      icon: '⚙️'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven predictions.',
      icon: '🔮'
    },
    {
      title: 'Quality Assurance',
      description: 'Automated testing and quality control across your operations.',
      icon: '✅'
    }
  ];

  const agentTypes = [
    {
      name: 'Coding Agent',
      description: 'AI-powered code generation, review, and optimization',
      href: '/product/coding-agent',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation']
    },
    {
      name: 'Workflow Agent',
      description: 'Intelligent workflow automation and orchestration',
      href: '/product/ai-workflow-builder',
      features: ['Process automation', 'Decision trees', 'Integration management', 'Monitoring']
    },
    {
      name: 'Analytics Agent',
      description: 'Advanced data analysis and business intelligence',
      href: '/product/augmentos',
      features: ['Data processing', 'Trend analysis', 'Report generation', 'Visualization']
    },
    {
      name: 'Security Agent',
      description: 'AI-driven security monitoring and threat detection',
      href: '/product/ai-security-auditor',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="AI Agents"
        subtitle="Intelligent automation for your business"
        description="AI agents that automate tasks, make decisions, and learn from your data to transform your business operations."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      />
 
      {/* Agent Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful AI Agent Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI agents combine advanced machine learning with practical business applications to deliver real value.
            </p>
          </div>
          <FeaturedCards cards={agentFeatures} />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Agent Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Discover how AI agents can transform different aspects of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Agent Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of AI Agents
            </h2>
            <p className="text-lg text-gray-600">
              Choose from specialized AI agents designed for specific business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {agentTypes.map((agent, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {agent.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {agent.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {agent.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-[#C74634] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={agent.href}
                  className="inline-flex items-center text-[#C74634] hover:text-[#A63429] font-medium"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Getting Started with AI Agents
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start building with AI agents in just a few simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C74634] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Your Agent
              </h3>
              <p className="text-gray-600">
                Select the AI agent that best fits your use case and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C74634] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Configure & Train
              </h3>
              <p className="text-gray-600">
                Set up your agent with your data and configure it for your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C74634] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deploy & Monitor
              </h3>
              <p className="text-gray-600">
                Deploy your AI agent and monitor its performance with our analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Deploy AI Agents?"
        description="Start with our free AI agent and see how artificial intelligence can transform your business."
        actions={[
          {
            title: 'Try Free Agent',
            href: '/ai-agent/free',
            buttonText: 'Try Free Agent'
          },
          {
            title: 'Contact Sales',
            href: '/corporate/contact/sales',
            buttonText: 'Contact Sales'
          }
        ]}
      />
    </div>
  );
}
