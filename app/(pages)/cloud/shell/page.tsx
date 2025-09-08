'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function CloudShellPage() {
  const [isShellActive, setIsShellActive] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    'Welcome to Augment Cloud Shell',
    'Type "help" for available commands',
    ''
  ]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const newOutput = [...terminalOutput, `$ ${currentCommand}`];
    
    // Simulate command responses
    switch (currentCommand.toLowerCase()) {
      case 'help':
        newOutput.push('Available commands:', '  augment - Augment AI CLI', '  python - Python interpreter', '  node - Node.js REPL', '  git - Git version control', '  curl - HTTP client', '  clear - Clear terminal', '');
        break;
      case 'clear':
        setTerminalOutput(['Welcome to Augment Cloud Shell', 'Type "help" for available commands', '']);
        setCurrentCommand('');
        return;
      case 'augment --version':
        newOutput.push('Augment CLI v2.1.0', '');
        break;
      case 'python --version':
        newOutput.push('Python 3.11.5', '');
        break;
      case 'node --version':
        newOutput.push('v18.17.0', '');
        break;
      default:
        newOutput.push(`Command not found: ${currentCommand}`, 'Type "help" for available commands', '');
    }
    
    setTerminalOutput(newOutput);
    setCurrentCommand('');
  };

  const shellFeatures = [
    {
      title: 'Pre-configured Environment',
      description: 'Ready-to-use development environment with all AI tools pre-installed',
      icon: '⚙️',
      details: ['Augment CLI', 'Python 3.11+', 'Node.js 18+', 'Git', 'Docker', 'Kubernetes CLI']
    },
    {
      title: 'Persistent Storage',
      description: 'Your files and configurations persist between sessions',
      icon: '💾',
      details: ['5GB free storage', 'Home directory persistence', 'Git repositories', 'Configuration files']
    },
    {
      title: 'Integrated Editor',
      description: 'Built-in code editor with syntax highlighting and AI assistance',
      icon: '📝',
      details: ['VS Code-like interface', 'Syntax highlighting', 'Auto-completion', 'AI code suggestions']
    },
    {
      title: 'Collaboration Tools',
      description: 'Share your shell sessions and collaborate in real-time',
      icon: '🤝',
      details: ['Session sharing', 'Real-time collaboration', 'Screen sharing', 'Voice chat integration']
    }
  ];

  const quickStartTemplates = [
    {
      name: 'AI Chatbot',
      description: 'Build a conversational AI chatbot with Augment AI',
      language: 'Python',
      time: '5 min',
      icon: '🤖'
    },
    {
      name: 'Text Analysis API',
      description: 'Create a REST API for text sentiment analysis',
      language: 'Node.js',
      time: '10 min',
      icon: '📊'
    },
    {
      name: 'Document Q&A',
      description: 'Build a document question-answering system',
      language: 'Python',
      time: '15 min',
      icon: '📄'
    },
    {
      name: 'Code Generator',
      description: 'AI-powered code generation tool',
      language: 'JavaScript',
      time: '8 min',
      icon: '💻'
    }
  ];

  const preInstalledTools = [
    { name: 'Augment CLI', version: '2.1.0', category: 'AI Tools' },
    { name: 'Python', version: '3.11.5', category: 'Languages' },
    { name: 'Node.js', version: '18.17.0', category: 'Languages' },
    { name: 'Git', version: '2.41.0', category: 'Version Control' },
    { name: 'Docker', version: '24.0.5', category: 'Containers' },
    { name: 'kubectl', version: '1.28.0', category: 'Kubernetes' },
    { name: 'curl', version: '8.2.1', category: 'HTTP Client' },
    { name: 'jq', version: '1.6', category: 'JSON Processor' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Augment Cloud Shell
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Browser-based development environment with pre-configured AI tools. Start coding immediately without any setup - everything you need is ready to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsShellActive(true)}
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Launch Cloud Shell
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      {isShellActive && (
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Augment Cloud Shell
                </span>
                <button
                  onClick={() => setIsShellActive(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 h-96 overflow-y-auto">
                <div className="font-mono text-sm text-green-400">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="mb-1">
                      {line}
                    </div>
                  ))}
                  <form onSubmit={handleCommand} className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Everything You Need, Pre-configured
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Skip the setup and start building immediately with our fully-equipped development environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shellFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="text-3xl mr-4 mt-1">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Templates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Quick Start Templates
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Get started quickly with pre-built templates for common AI use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartTemplates.map((template, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {template.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {template.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {template.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {template.language}
                  </span>
                  <span>{template.time}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-installed Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Pre-installed Tools & Languages
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Everything you need for AI development, ready to use out of the box
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preInstalledTools.map((tool, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {tool.name}
                  </h4>
                  <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {tool.version}
                  </span>
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Cloud Shell Usage
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Trusted by developers worldwide for rapid AI prototyping and development
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                15K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                500K+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Sessions Started
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                2.5M+
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Commands Executed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                99.9%
              </div>
              <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Start Coding?
          </h2>
          <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Launch your browser-based development environment and start building AI applications immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsShellActive(true)}
              className="inline-flex items-center px-8 py-4 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Launch Cloud Shell
            </button>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
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
