import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Industry Lab | Innovation & Research',
  description: 'Explore cutting-edge AI research and industry innovations at Augment Industry Lab. Discover emerging technologies, participate in research programs, and shape the future of AI automation.',
  keywords: 'AI research, industry innovation lab, emerging technologies, AI development, research programs, technology innovation, AI experimentation',
};

export default function IndustryLabPage() {
  const heroButtons = [
    {
      text: 'Join Research Program',
      href: '/industries/lab/research-program/',
      variant: 'primary' as const
    },
    {
      text: 'Explore Projects',
      href: '#projects',
      variant: 'secondary' as const
    }
  ];

  const researchAreas = [
    {
      id: 'emerging-ai',
      title: 'Emerging AI Technologies',
      description: 'Explore next-generation AI capabilities including advanced neural networks, quantum computing applications, and breakthrough machine learning techniques.',
      ctaText: 'Explore emerging AI',
      ctaLink: '/industries/lab/emerging-ai/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-applications',
      title: 'Industry-Specific AI Applications',
      description: 'Research and develop specialized AI solutions tailored for unique industry challenges and emerging market opportunities.',
      ctaText: 'Discover applications',
      ctaLink: '/industries/lab/industry-applications/',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ethical-ai',
      title: 'Ethical AI & Responsible Innovation',
      description: 'Advance responsible AI development with research into bias mitigation, explainable AI, and ethical decision-making frameworks.',
      ctaText: 'Learn about ethics',
      ctaLink: '/industries/lab/ethical-ai/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'human-ai-collaboration',
      title: 'Human-AI Collaboration',
      description: 'Research optimal human-AI interaction models, augmented intelligence systems, and collaborative decision-making frameworks.',
      ctaText: 'Explore collaboration',
      ctaLink: '/industries/lab/human-ai/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-safety',
      title: 'AI Safety & Security',
      description: 'Develop robust AI safety measures, security protocols, and risk mitigation strategies for enterprise AI deployment.',
      ctaText: 'Discover safety research',
      ctaLink: '/industries/lab/ai-safety/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'future-work',
      title: 'Future of Work & Automation',
      description: 'Study the evolving relationship between AI, automation, and human work to shape positive transformation outcomes.',
      ctaText: 'Learn about future work',
      ctaLink: '/industries/lab/future-work/',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const labPrograms = [
    {
      id: 'research-partnerships',
      title: 'Industry Research Partnerships',
      description: 'Collaborate with leading organizations on cutting-edge AI research projects that address real-world industry challenges.',
      ctaText: 'Join partnership program',
      ctaLink: '/industries/lab/partnerships/'
    },
    {
      id: 'innovation-challenges',
      title: 'AI Innovation Challenges',
      description: 'Participate in competitive innovation challenges that push the boundaries of AI technology and industry applications.',
      ctaText: 'View current challenges',
      ctaLink: '/industries/lab/challenges/'
    },
    {
      id: 'academic-collaboration',
      title: 'Academic Collaboration',
      description: 'Partner with universities and research institutions to advance AI science and train the next generation of AI researchers.',
      ctaText: 'Explore academic programs',
      ctaLink: '/industries/lab/academic/'
    },
    {
      id: 'startup-incubation',
      title: 'AI Startup Incubation',
      description: 'Support promising AI startups with resources, mentorship, and access to cutting-edge research and development facilities.',
      ctaText: 'Learn about incubation',
      ctaLink: '/industries/lab/incubation/'
    },
    {
      id: 'open-source',
      title: 'Open Source Initiatives',
      description: 'Contribute to and benefit from open-source AI projects that advance the entire industry and research community.',
      ctaText: 'Explore open source',
      ctaLink: '/industries/lab/open-source/'
    },
    {
      id: 'thought-leadership',
      title: 'Thought Leadership',
      description: 'Access cutting-edge research publications, whitepapers, and insights from leading AI researchers and industry experts.',
      ctaText: 'Read research papers',
      ctaLink: '/industries/lab/publications/'
    }
  ];

  const labBenefits = [
    {
      title: 'Early Access to Innovation',
      description: 'Get first access to breakthrough AI technologies and research findings before they become commercially available.',
      href: '/industries/lab/early-access/',
      buttonText: 'Learn more',
      icon: '🚀'
    },
    {
      title: 'Collaborative Research Opportunities',
      description: 'Work directly with Augment researchers on projects that align with your industry needs and strategic objectives.',
      href: '/industries/lab/collaboration/',
      buttonText: 'Start collaboration',
      icon: '🤝'
    },
    {
      title: 'Custom AI Development',
      description: 'Access specialized AI development resources for unique industry challenges and experimental applications.',
      href: '/industries/lab/custom-development/',
      buttonText: 'Explore development',
      icon: '⚙️'
    },
    {
      title: 'Industry Networking',
      description: 'Connect with other industry leaders, researchers, and innovators working on similar AI challenges and opportunities.',
      href: '/industries/lab/networking/',
      buttonText: 'Join network',
      icon: '🌐'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Augment Industry Lab | Innovation & Research</h1>

        <SectionHero
          title="Augment Industry Lab"
          subtitle="Pioneering the future of AI innovation"
          description="Join the forefront of AI research and development. Collaborate with leading researchers, explore emerging technologies, and shape the future of intelligent automation across industries. Access cutting-edge research, participate in innovation programs, and drive breakthrough discoveries."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Advanced AI research laboratory with cutting-edge technology and innovation"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#research" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Research Areas
              </a>
              <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Lab Programs
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Benefits
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Involved
              </a>
            </div>
          </div>
        </nav>

        <section id="research">
          <FeaturedCards
            title="Explore cutting-edge AI research areas"
            description="Discover breakthrough research in emerging AI technologies and their applications across industries"
            cards={researchAreas}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="programs">
          <InfoColumns
            title="Join our innovation programs"
            description="Participate in collaborative research, innovation challenges, and development programs that shape the future of AI"
            columns={labPrograms}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Industry Lab Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Driving breakthrough innovations and advancing AI research across industries
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  150+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Research Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Industry Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  75+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Published Research Papers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Breakthrough Innovations
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <CTASection
            title="Benefits of joining Augment Industry Lab"
            description="Access exclusive research opportunities, cutting-edge technology, and collaborative innovation programs"
            actions={labBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Current Research Highlights
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Explore our latest research breakthroughs and ongoing innovation projects
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Quantum-Enhanced AI Algorithms
                </h3>
                <p className="text-base text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Breakthrough research in quantum computing applications for AI, achieving 1000x performance improvements in specific optimization problems.
                </p>
                <a href="/industries/lab/quantum-ai/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn more about quantum AI →
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Explainable AI for Healthcare
                </h3>
                <p className="text-base text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Developing transparent AI systems that provide clear explanations for medical decisions, improving trust and adoption in healthcare.
                </p>
                <a href="/industries/lab/explainable-healthcare/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Explore healthcare AI →
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Sustainable AI Computing
                </h3>
                <p className="text-base text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Pioneering energy-efficient AI architectures that reduce computational costs by 80% while maintaining performance.
                </p>
                <a href="/industries/lab/sustainable-ai/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Discover sustainable AI →
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Multi-Modal AI Agents
                </h3>
                <p className="text-base text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Next-generation AI agents that seamlessly integrate text, vision, audio, and sensor data for comprehensive understanding.
                </p>
                <a href="/industries/lab/multimodal-agents/" className="text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Learn about multi-modal AI →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to join the future of AI innovation?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our research team to explore collaboration opportunities, access cutting-edge technology, and participate in breakthrough AI research that shapes the future of industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/industries/lab/research-program/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Research Program
              </a>
              <a
                href="/industries/lab/partnerships/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Explore Partnerships
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
