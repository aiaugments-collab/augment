import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Tools | Augment AI Development Suite',
  description: 'Comprehensive developer tools for building AI applications. CLI tools, testing frameworks, debugging utilities, and more.',
  keywords: 'developer tools, CLI, testing, debugging, AI development, SDK tools, automation',
};

export default function DeveloperToolsPage() {
  const toolCategories = [
    {
      title: 'Command Line Tools',
      description: 'Powerful CLI tools for development and deployment',
      icon: '⌨️',
      tools: [
        {
          name: 'Augment CLI',
          description: 'Official command-line interface for managing projects and deployments',
          features: ['Project scaffolding', 'API key management', 'Deployment automation', 'Log streaming'],
          installation: 'npm install -g @augment/cli',
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'AI Model Manager',
          description: 'Manage and switch between different AI models effortlessly',
          features: ['Model switching', 'Performance comparison', 'Cost analysis', 'Usage tracking'],
          installation: 'augment install model-manager',
          color: 'from-purple-500 to-purple-600'
        }
      ]
    },
    {
      title: 'Testing & Debugging',
      description: 'Comprehensive testing and debugging utilities',
      icon: '',
      tools: [
        {
          name: 'AI Test Suite',
          description: 'Automated testing framework for AI applications',
          features: ['Response validation', 'Performance testing', 'Regression testing', 'Mock responses'],
          installation: 'npm install @augment/test-suite',
          color: 'from-green-500 to-green-600'
        },
        {
          name: 'Debug Console',
          description: 'Real-time debugging and monitoring dashboard',
          features: ['Live request monitoring', 'Error tracking', 'Performance metrics', 'Response analysis'],
          installation: 'Available in web dashboard',
          color: 'from-red-500 to-red-600'
        }
      ]
    },
    {
      title: 'Development Environment',
      description: 'Enhanced development experience and productivity tools',
      icon: '️',
      tools: [
        {
          name: 'VS Code Extension',
          description: 'Integrated development experience in Visual Studio Code',
          features: ['Syntax highlighting', 'Auto-completion', 'Inline documentation', 'Code snippets'],
          installation: 'Install from VS Code Marketplace',
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          name: 'Playground IDE',
          description: 'Browser-based development environment for quick prototyping',
          features: ['No setup required', 'Real-time collaboration', 'Template library', 'Export to code'],
          installation: 'Access via web browser',
          color: 'from-orange-500 to-orange-600'
        }
      ]
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Advanced monitoring and analytics tools',
      icon: '',
      tools: [
        {
          name: 'Performance Monitor',
          description: 'Real-time performance monitoring and optimization suggestions',
          features: ['Latency tracking', 'Throughput analysis', 'Cost optimization', 'Alert system'],
          installation: 'Included in dashboard',
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'Usage Analytics',
          description: 'Comprehensive usage analytics and insights',
          features: ['Usage patterns', 'User behavior', 'Cost breakdown', 'Trend analysis'],
          installation: 'Available in web dashboard',
          color: 'from-pink-500 to-pink-600'
        }
      ]
    }
  ];

  const quickTools = [
    {
      name: 'API Key Generator',
      description: 'Generate and manage API keys',
      icon: '',
      action: 'Generate Key'
    },
    {
      name: 'Request Builder',
      description: 'Build and test API requests',
      icon: '',
      action: 'Open Builder'
    },
    {
      name: 'Code Generator',
      description: 'Generate code snippets',
      icon: '',
      action: 'Generate Code'
    },
    {
      name: 'Model Playground',
      description: 'Test models interactively',
      icon: '',
      action: 'Open Playground'
    }
  ];

  const integrations = [
    {
      name: 'GitHub Actions',
      description: 'CI/CD integration for automated testing and deployment',
      logo: '',
      features: ['Automated testing', 'Deployment workflows', 'Security scanning']
    },
    {
      name: 'Docker',
      description: 'Containerized development and deployment',
      logo: '',
      features: ['Pre-built images', 'Development containers', 'Production deployment']
    },
    {
      name: 'Kubernetes',
      description: 'Orchestration and scaling for production workloads',
      logo: '️',
      features: ['Auto-scaling', 'Load balancing', 'Health monitoring']
    },
    {
      name: 'Terraform',
      description: 'Infrastructure as code for cloud deployments',
      logo: '️',
      features: ['Infrastructure templates', 'Multi-cloud support', 'State management']
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Developer Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive suite of tools to accelerate your AI development workflow. From CLI utilities to testing frameworks, everything you need to build, test, and deploy AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Install CLI Tools
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Browse All Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Quick Access Tools
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Essential tools for everyday AI development tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {tool.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {tool.description}
                </p>
                <div className="flex items-center text-[#C74634] text-sm font-medium">
                  {tool.action}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Complete Development Toolkit
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Professional-grade tools for every stage of AI application development
            </p>
          </div>

          <div className="space-y-16">
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-normal text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {category.title}
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold`}>
                        {tool.name.charAt(0)}
                      </div>
                      <h4 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {tool.name}
                      </h4>
                      <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {tool.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-medium text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                          Key Features:
                        </h5>
                        <ul className="space-y-1">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-900 rounded-md p-3 mb-4">
                        <code className="text-sm text-green-400 font-mono">{tool.installation}</code>
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center text-[#C74634] hover:text-[#A63429] font-medium text-sm"
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        Learn More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Popular Integrations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Seamlessly integrate with your existing development and deployment workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {integration.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {integration.description}
                </p>
                <div className="space-y-1">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
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
              Developer Tool Usage
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Trusted by developers worldwide for AI application development
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                25K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                CLI Downloads
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                500K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                API Tests Run
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                15K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                VS Code Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                99.9%
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Tool Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Supercharge Your Development
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Get started with our comprehensive developer tools and accelerate your AI application development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Install CLI Tools
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
