const fs = require('fs');
const path = require('path');

// Template for creating pages
const createPageTemplate = (title, description, keywords, content, ctaTitle, ctaDescription) => `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  keywords: '${keywords}',
};

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">${title}</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Get Started
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          ${content}
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            ${ctaTitle}
          </h2>
          <p className="text-base text-blue-100 mb-8">
            ${ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}`;

// Page definitions
const pages = [
  // Lab pages
  {
    path: 'app/industries/lab/emerging-ai/page.tsx',
    title: 'Emerging AI Technologies | Augment Lab',
    description: 'Explore next-generation AI capabilities including advanced neural networks, quantum computing applications, and breakthrough machine learning techniques.',
    keywords: 'emerging AI, neural networks, quantum computing, machine learning, AI research',
    content: `<h2 className="text-2xl font-bold text-[#161513] mb-6">Breakthrough Technologies</h2>
          <p className="text-lg text-gray-700 mb-6">Our research focuses on the most promising emerging AI technologies that will shape the future of intelligent automation.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quantum-Enhanced AI</h3>
              <p className="text-gray-700">Leveraging quantum computing to solve complex optimization problems 1000x faster than classical methods.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Neuromorphic Computing</h3>
              <p className="text-gray-700">Brain-inspired computing architectures that dramatically reduce energy consumption while improving performance.</p>
            </div>
          </div>`,
    ctaTitle: 'Explore Emerging AI',
    ctaDescription: 'Join our research program to work with cutting-edge AI technologies.'
  },
  {
    path: 'app/industries/community/join/page.tsx',
    title: 'Join Community | Augment AI',
    description: 'Join the Augment AI community of 10,000+ professionals. Connect with experts, share knowledge, and collaborate on AI innovation.',
    keywords: 'join community, AI professionals, networking, collaboration, AI experts',
    content: `<h2 className="text-2xl font-bold text-[#161513] mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-6">Connect with 10,000+ AI professionals, industry experts, and innovators from around the world.</p>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Membership Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Access to exclusive AI insights and research</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Networking with industry leaders</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Early access to new features and beta programs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Participation in collaborative projects</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Exclusive events and workshops</li>
            </ul>
          </div>`,
    ctaTitle: 'Ready to Join?',
    ctaDescription: 'Become part of the largest AI professional community and accelerate your AI journey.'
  },
  {
    path: 'app/industries/documentation/quick-start/page.tsx',
    title: 'Quick Start Guide | Augment AI',
    description: 'Get up and running with Augment AI in 30 minutes. Step-by-step guide with code examples and best practices.',
    keywords: 'quick start, getting started, tutorial, setup guide, AI implementation',
    content: `<h2 className="text-2xl font-bold text-[#161513] mb-6">Quick Start Guide</h2>
          <p className="text-lg text-gray-700 mb-6">Get up and running with Augment AI in just 30 minutes with this comprehensive guide.</p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 1: Get Your API Key</h3>
              <p className="text-gray-700">Sign up for an account and generate your API key from the dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 2: Install the SDK</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                pip install augment-ai
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Step 3: Make Your First API Call</h3>
              <p className="text-gray-700">Follow our code examples to integrate AI capabilities into your application.</p>
            </div>
          </div>`,
    ctaTitle: 'Start Building Today',
    ctaDescription: 'Follow our quick start guide and have AI running in your application within 30 minutes.'
  }
];

// Create pages
pages.forEach(page => {
  const content = createPageTemplate(
    page.title,
    page.description,
    page.keywords,
    page.content,
    page.ctaTitle,
    page.ctaDescription
  );
  
  const dir = path.dirname(page.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(page.path, content);
  console.log(`Created: ${page.path}`);
});

console.log('Pages created successfully!');
