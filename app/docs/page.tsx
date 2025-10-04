'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const heroButtons = [
    {
      text: 'Getting Started',
      href: '/product-docs/getting-started',
      variant: 'primary' as const
    },
    {
      text: 'API Reference',
      href: '/developers/docs',
      variant: 'secondary' as const
    }
  ];

  const docCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions for new users.',
      ctaText: 'Start here',
      ctaLink: '/product-docs/getting-started',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'api-docs',
      title: 'API Documentation',
      description: 'Complete API reference, authentication, and integration guides.',
      ctaText: 'View APIs',
      ctaLink: '/developers/docs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'product-guides',
      title: 'Product Guides',
      description: 'Detailed guides for using specific Augment AI products and features.',
      ctaText: 'Browse guides',
      ctaLink: '/product-docs',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-tools',
      title: 'AI Tools Documentation',
      description: 'Documentation for our AI workflow builder, code reviewer, and other tools.',
      ctaText: 'Explore tools',
      ctaLink: '/docs/ai-workflow-builder',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues, solutions, and debugging guides.',
      ctaText: 'Get help',
      ctaLink: '/knowledge/troubleshooting',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'community',
      title: 'Community Support',
      description: 'Connect with other users, ask questions, and share knowledge.',
      ctaText: 'Join community',
      ctaLink: '/forums',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', category: 'Getting Started', href: '/product-docs/getting-started' },
    { title: 'API Authentication', category: 'API', href: '/developers/docs' },
    { title: 'AI Workflow Builder', category: 'AI Tools', href: '/docs/ai-workflow-builder' },
    { title: 'Integration Guides', category: 'Integrations', href: '/product-docs/integrations' },
    { title: 'Troubleshooting Guide', category: 'Support', href: '/knowledge/troubleshooting' },
    { title: 'SDK Documentation', category: 'Development', href: '/docs/synapse-sdk' }
  ];

  const aiTools = [
    { name: 'AI Workflow Builder', href: '/docs/ai-workflow-builder' },
    { name: 'AI Code Reviewer', href: '/docs/ai-code-reviewer' },
    { name: 'AI Cloud Architect', href: '/docs/ai-cloud-architect' },
    { name: 'AI Cost Optimizer', href: '/docs/ai-cost-optimizer' },
    { name: 'AI Security Auditor', href: '/docs/ai-security-auditor' },
    { name: 'Aether CLI', href: '/docs/aether-cli' },
    { name: 'Synapse SDK', href: '/docs/synapse-sdk' },
    { name: 'NeuroFlow Orchestrator', href: '/docs/neuroflow-orchestrator' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Documentation"
        subtitle="Everything you need to get started"
        description="From quick start guides to detailed API references, find all the documentation you need to build with Augment AI."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      /> 

      {/* Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Documentation Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the right documentation for your needs, from basic setup to advanced integrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <a
                  href={category.ctaLink}
                  className="inline-flex items-center text-[#C74634] hover:text-[#A63429] font-medium"
                >
                  {category.ctaText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Most accessed documentation pages by our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <a
                key={index}
                href={doc.href}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doc.title}
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {doc.category}
                  </span>
                </div>
                <div className="text-[#C74634] font-medium">
                  Read more →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Documentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Tools Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Detailed documentation for all our AI-powered tools and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#C74634] hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <div className="text-sm text-[#C74634]">
                  View docs →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our support team and community are here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/support"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600 text-sm">
                Get help from our support team
              </p>
            </a>
            <a
              href="/forums"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Forums
              </h3>
              <p className="text-gray-600 text-sm">
                Ask questions and share knowledge
              </p>
            </a>
            <a
              href="/contact"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 text-sm">
                Reach out to our team directly
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build with Augment AI?"
        description="Start integrating our AI tools into your workflow today."
        actions={[
          {
            title: 'Get Started',
            href: '/product-docs/getting-started',
            buttonText: 'Get Started'
          },
          {
            title: 'View API Docs',
            href: '/developers/docs',
            buttonText: 'View API Docs'
          }
        ]}
      />
    </div>
  );
}
