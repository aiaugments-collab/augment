import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  LogoGrid
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Developer Center | Resources for developers',
  description: 'Resources for developers – Discover. Learn. Build. Access AI tools, languages, solutions, and community resources.',
  keywords: 'developer, AI, machine learning, automation, API, SDK, documentation, tutorials, community',
};

export default function DeveloperPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Explore AI Hub',
      href: '/developer/ai-hub/',
      variant: 'primary' as const
    },
    {
      text: 'View Documentation',
      href: '/developer/docs/',
      variant: 'secondary' as const
    }
  ];

  // AI Solutions Data
  const aiSolutions = [
    {
      id: 'multiagent-rag',
      title: 'Build a Multiagent RAG Solution',
      description: 'Learn how to build an intelligent RAG system using AI agents for advanced decision-making and automation.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/multiagent-rag/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-chatbot',
      title: 'Build an AI Chatbot with Unstructured Data',
      description: 'Learn how to build an AI chatbot with unstructured data using advanced AI services and RAG architecture.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/ai-chatbot/',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'invoice-automation',
      title: 'Automate Invoice Processing with AI',
      description: 'Automate invoice extraction and simplify document processing in ERP systems using AI and machine learning.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/invoice-automation/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'java-ai-integration',
      title: 'Simplify AI Integration in Java Projects',
      description: 'Integrate AI into Java applications with modern frameworks. Accelerate development with Augment AI services.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/java-ai/',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'semantic-search',
      title: 'Build Semantic Search with AI Vectors',
      description: 'Implement advanced semantic search capabilities using AI vector embeddings and similarity matching.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/semantic-search/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'workflow-automation',
      title: 'Create Intelligent Workflow Automation',
      description: 'Build smart workflows that adapt and learn from user behavior using AI-powered automation.',
      ctaText: 'View solution',
      ctaLink: '/developer/solutions/workflow-automation/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Programming Languages Data
  const languages = [
    {
      id: 'python',
      title: 'Python',
      description: 'Build AI and automation solutions with Python. Access our comprehensive SDK and AI libraries.',
      ctaText: 'Get started',
      ctaLink: '/developer/languages/python/',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      description: 'Create dynamic web applications with our JavaScript SDK and real-time automation APIs.',
      ctaText: 'Get started',
      ctaLink: '/developer/languages/javascript/',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'java',
      title: 'Java',
      description: 'Enterprise-grade automation solutions with Java. Leverage our robust SDK and enterprise tools.',
      ctaText: 'Get started',
      ctaLink: '/developer/languages/java/',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Developer Resources Data
  const developerResources = [
    {
      id: 'documentation',
      title: 'Documentation',
      description: 'Comprehensive guides, API references, and tutorials to get you started quickly.',
      buttonText: 'Browse docs',
      href: '/developer/docs/',
      icon: '📚'  
    },
    {
      id: 'sdks',
      title: 'SDKs & Tools',
      description: 'Download SDKs for Python, JavaScript, Java, and more. Command-line tools included.',
      buttonText: 'Download SDKs',
      href: '/developer/downloads/',
      icon: '🛠️'
    },
    {
      id: 'community',
      title: 'Developer Community',
      description: 'Connect with other developers, share knowledge, and get help from our community.',
      buttonText: 'Join community',
      href: '/developer/community/',
      icon: '👥'
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Labs',
      description: 'Hands-on tutorials and interactive labs to learn by doing with real-world examples.',
      buttonText: 'Start learning',
      href: '/developer/tutorials/',
      icon: '🎓'
    }
  ];

  // Technology Categories
  const technologies = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Advanced AI services, pre-trained models, and ML frameworks for intelligent automation.',
      ctaText: 'Explore AI',
      ctaLink: '/developer/technologies/ai-ml/'
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Workflow automation, RPA tools, and intelligent process optimization solutions.',
      ctaText: 'Learn more',
      ctaLink: '/developer/technologies/automation/'
    },
    {
      id: 'apis',
      title: 'APIs & Integration',
      description: 'RESTful APIs, webhooks, and integration tools to connect your applications.',
      ctaText: 'View APIs',
      ctaLink: '/developer/technologies/apis/'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      description: 'Data processing, analytics engines, and business intelligence tools.',
      ctaText: 'Explore data',
      ctaLink: '/developer/technologies/data-analytics/'
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Enterprise security, encryption, and compliance tools for secure automation.',
      ctaText: 'Learn security',
      ctaLink: '/developer/technologies/security/'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud services, containers, and serverless computing platforms.',
      ctaText: 'Deploy now',
      ctaLink: '/developer/technologies/cloud/'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Start Building Today',
      description: 'Get started with our free developer tier and build your first AI automation.',
      href: '/developer/get-started/',
      buttonText: 'Get started free',
      icon: '🚀'
    },
    {
      title: 'Join Developer Program',
      description: 'Access exclusive resources, early previews, and connect with our team.',
      href: '/developer/program/',
      buttonText: 'Join program',
      icon: '⭐'
    }
  ];

  // Partner Logos
  const partnerLogos = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop&crop=center',
      url: '/partners/microsoft/'
    },
    {
      id: 'google',
      name: 'Google Cloud',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop&crop=center',
      url: '/partners/google/'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&crop=center',
      url: '/partners/aws/'
    },
    {
      id: 'nvidia',
      name: 'NVIDIA',
      logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=100&fit=crop&crop=center',
      url: '/partners/nvidia/'
    },
    {
      id: 'docker',
      name: 'Docker',
      logo: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=200&h=100&fit=crop&crop=center',
      url: '/partners/docker/'
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=200&h=100&fit=crop&crop=center',
      url: '/partners/kubernetes/'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Developer Center | Resources for developers</h1>

        {/* Hero Section */}
        <SectionHero
          title="Developer Center"
          subtitle="Resources for developers – Discover. Learn. Build."
          description="Access cutting-edge AI tools, comprehensive documentation, and a thriving community to build the next generation of intelligent automation solutions."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Developer working on AI automation"
        />

        {/* AI Resource Hub */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              AI Resource Hub
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Gain AI knowledge, discover Augment's AI strategy, and start building AI solutions.
            </p>
            <a
              href="/developer/ai-hub/"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Explore the AI resource hub
            </a>
          </div>
        </section>

        {/* Featured AI Solutions */}
        <FeaturedCards
          title="Featured AI Solutions"
          description="Build AI solutions fast with real-world scenarios and step-by-step instructions"
          cards={aiSolutions}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Programming Languages */}
        <InfoColumns
          title="Programming Languages"
          description="Use your preferred language with Augment's powerful automation platform"
          columns={languages}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Technologies */}
        <InfoColumns
          title="Technologies"
          description="Augment gives you the power, flexibility, and reliability needed to create the best automation solutions"
          columns={technologies}
          columnsCount={3}
          backgroundColor="bg-white"
        />

        {/* Developer Resources */}
        <CTASection
          title="Developer Resources"
          description="Everything you need to build, deploy, and scale your automation solutions"
          actions={developerResources}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Technology Partners */}
        <LogoGrid
          title="Technology Partners"
          description="Integrate with leading platforms and services"
          logos={partnerLogos}
          backgroundColor="bg-white"
          viewMoreText="View all partners"
          viewMoreHref="/partners/"
        />

        {/* Developer Community Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Community & Events
                </h2>
                <p className="text-base text-gray-300 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Connect with fellow developers, learn from experts, and stay updated with the latest in AI automation.
                </p>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Developer Coaching Series
                  </h3>
                  <p className="text-sm text-gray-300 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Interactive webinars showcasing real-world AI automation solutions.
                  </p>
                  <a
                    href="/developer/coaching/"
                    className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Learn more →
                  </a>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Developer Events
                  </h3>
                  <p className="text-sm text-gray-300 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Join conferences, workshops, and meetups in your region.
                  </p>
                  <a
                    href="/developer/events/"
                    className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Find events →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to build the future?"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Newsletter Signup */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Stay Updated
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Get the latest developer news, tutorials, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-gray-900 placeholder-gray-500"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
              <button
                className="px-6 py-3 bg-white text-[#C74634] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
