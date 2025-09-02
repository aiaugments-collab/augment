import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Research | AI & Automation Research Solutions',
  description: 'Purpose-built AI and automation research solutions to accelerate discovery and address complex research challenges.',
  keywords: 'research, AI research, machine learning, automation research, data science, research computing, academic research',
};

export default function ResearchPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Contact Research Team',
      href: '/research/contact/',
      variant: 'primary' as const
    },
    {
      text: 'Explore Solutions',
      href: '/research/solutions/',
      variant: 'secondary' as const
    }
  ];

  // Research Solutions Data
  const researchSolutions = [
    {
      id: 'ai-research',
      title: 'AI & Machine Learning Research',
      description: 'Advanced AI infrastructure with ultralow latencies for GPU clusters and thousands of nodes for AI training and inference.',
      ctaText: 'Explore AI research',
      ctaLink: '/research/ai-ml/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'compute-research',
      title: 'High-Performance Computing',
      description: 'Fast, flexible, and affordable compute capacity for any scientific workload, from VMs to bare metal servers.',
      ctaText: 'Learn about HPC',
      ctaLink: '/research/compute/',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Processing',
      description: 'Powerful data processing and analytics tools for large-scale research datasets and complex computations.',
      ctaText: 'Explore data tools',
      ctaLink: '/research/data-analytics/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'collaboration',
      title: 'Research Collaboration',
      description: 'Collaborative platforms and tools for multi-institutional research projects and knowledge sharing.',
      ctaText: 'Learn more',
      ctaLink: '/research/collaboration/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Research Areas Data
  const researchAreas = [
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      description: 'AI-powered research tools for drug discovery, genomics, medical imaging, and clinical research automation.',
      buttonText: 'Explore healthcare',
      href: '/research/healthcare/'
    },
    {
      id: 'climate',
      title: 'Climate & Environmental Science',
      description: 'Advanced modeling and simulation tools for climate research, environmental monitoring, and sustainability studies.',
      buttonText: 'Learn about climate research',
      href: '/research/climate/'
    },
    {
      id: 'materials',
      title: 'Materials Science',
      description: 'Computational tools for materials discovery, molecular modeling, and advanced materials research.',
      buttonText: 'Discover materials research',
      href: '/research/materials/'
    },
    {
      id: 'social-sciences',
      title: 'Social Sciences',
      description: 'Data analytics and AI tools for social research, behavioral analysis, and policy research.',
      buttonText: 'Explore social research',
      href: '/research/social-sciences/'
    },
    {
      id: 'physics',
      title: 'Physics & Astronomy',
      description: 'High-performance computing for particle physics, astrophysics simulations, and theoretical research.',
      buttonText: 'Learn about physics research',
      href: '/research/physics/'
    },
    {
      id: 'economics',
      title: 'Economics & Finance',
      description: 'Advanced analytics for economic modeling, financial research, and market analysis.',
      buttonText: 'Explore economics research',
      href: '/research/economics/'
    }
  ];

  // Research Services Data
  const researchServices = [
    {
      id: 'ai-services',
      title: 'AI Research Services',
      description: 'Anomaly detection, forecasting, natural language processing, computer vision, and machine learning services.',
      buttonText: 'View AI services',
      href: '/research/services/ai/',
      icon: '🤖'
    },
    {
      id: 'compute-services',
      title: 'Computing Infrastructure',
      description: 'GPU-accelerated compute, HPC clusters, virtual machines, and containerized research environments.',
      buttonText: 'Explore compute',
      href: '/research/services/compute/',
      icon: '💻'
    },
    {
      id: 'data-services',
      title: 'Data Management',
      description: 'Secure data storage, data lakes, real-world data access, and research data management solutions.',
      buttonText: 'Learn about data',
      href: '/research/services/data/',
      icon: '📊'
    },
    {
      id: 'collaboration-tools',
      title: 'Collaboration Platform',
      description: 'Research collaboration tools, project management, and knowledge sharing platforms for teams.',
      buttonText: 'Try collaboration',
      href: '/research/services/collaboration/',
      icon: '👥'
    }
  ];

  // Research Programs Data
  const researchPrograms = [
    {
      id: 'academic-partnerships',
      title: 'Academic Partnerships',
      description: 'Collaborate with leading universities and research institutions on cutting-edge AI and automation research.',
      ctaText: 'Partner with us',
      ctaLink: '/research/partnerships/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'grants-funding',
      title: 'Research Grants & Funding',
      description: 'Access funding opportunities and grant management tools for research projects and academic initiatives.',
      ctaText: 'Explore funding',
      ctaLink: '/research/grants/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'open-science',
      title: 'Open Science Initiative',
      description: 'Supporting open research, reproducible science, and collaborative knowledge sharing across disciplines.',
      ctaText: 'Join initiative',
      ctaLink: '/research/open-science/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Start Your Research Project',
      description: 'Get started with Augment\'s research platform and access cutting-edge AI tools.',
      href: '/research/get-started/',
      buttonText: 'Get started',
      icon: '🚀'
    },
    {
      title: 'Request Research Consultation',
      description: 'Speak with our research experts about your specific needs and requirements.',
      href: '/research/consultation/',
      buttonText: 'Schedule consultation',
      icon: '💬'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Research | AI & Automation Research Solutions</h1>

        {/* Hero Section */}
        <SectionHero
          title="Research"
          subtitle="Accelerating scientific discovery with AI"
          description="We offer purpose-built products, capabilities, and resources to simplify the research process, accelerate discovery, and address humanity's most urgent needs."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Researchers working with AI and data analytics"
        />

        {/* Research Solutions */}
        <FeaturedCards
          title="Research Solutions"
          description="Our products are designed to make research easier, faster, and more accurate"
          cards={researchSolutions}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Research Areas */}
        <InfoColumns
          title="Research Areas"
          description="Empowering researchers across diverse fields with advanced AI and automation tools"
          columns={researchAreas}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Research Services */}
        <CTASection
          title="Research Services"
          description="Comprehensive AI and computing services for modern research"
          actions={researchServices}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Research Impact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Research Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Enabling breakthrough discoveries and advancing scientific knowledge
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Research Institutions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Researchers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Research Hours Powered
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Programs */}
        <FeaturedCards
          title="Research Programs"
          description="Collaborative initiatives advancing scientific research and innovation"
          cards={researchPrograms}
          columns={3}
          backgroundColor="bg-gray-50"
        />

        {/* Research Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Research Resources
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Access comprehensive resources to support your research journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Documentation & Tutorials
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Comprehensive guides and tutorials for research tools and platforms.
                </p>
                <a
                  href="/research/documentation/"
                  className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Browse documentation →
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Research Labs & Training
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Hands-on labs and training programs for research methodologies.
                </p>
                <a
                  href="/research/labs/"
                  className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Access labs →
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Research Community
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Connect with researchers and share knowledge in our community.
                </p>
                <a
                  href="/research/community/"
                  className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Join community →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to accelerate your research?"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Contact Our Research Team
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Interested in learning more about Augment solutions for research? Get in touch with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/research/contact/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Research Team
              </a>
              <a
                href="mailto:research@augment.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                research@augment.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
