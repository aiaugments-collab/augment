import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Augment Community | Connect & Collaborate',
  description: 'Join the Augment AI community. Connect with industry experts, share knowledge, participate in events, and collaborate on AI innovation across industries.',
  keywords: 'AI community, industry collaboration, AI experts, knowledge sharing, AI events, professional network, AI innovation community',
};

export default function CommunityPage() {
  const heroButtons = [
    {
      text: 'Join Community',
      href: '/industries/community/join/',
      variant: 'primary' as const
    },
    {
      text: 'Explore Events',
      href: '#events',
      variant: 'secondary' as const
    }
  ];

  const communityFeatures = [
    {
      id: 'expert-network',
      title: 'Connect with AI experts and industry leaders',
      description: 'Network with leading AI practitioners, industry experts, and innovators who are shaping the future of intelligent automation.',
      ctaText: 'Join expert network',
      ctaLink: '/industries/community/experts/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'knowledge-sharing',
      title: 'Share knowledge and best practices',
      description: 'Access exclusive content, share your experiences, and learn from real-world AI implementations across industries.',
      ctaText: 'Explore knowledge base',
      ctaLink: '/industries/community/knowledge/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'collaborative-projects',
      title: 'Collaborate on innovative AI projects',
      description: 'Participate in collaborative research projects, innovation challenges, and cross-industry AI initiatives.',
      ctaText: 'View active projects',
      ctaLink: '/industries/community/projects/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-events',
      title: 'Attend exclusive industry events and webinars',
      description: 'Join virtual and in-person events, workshops, and conferences focused on AI innovation and industry transformation.',
      ctaText: 'See upcoming events',
      ctaLink: '/industries/community/events/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'mentorship',
      title: 'Access mentorship and career development',
      description: 'Connect with mentors, advance your AI career, and help others grow in the rapidly evolving field of artificial intelligence.',
      ctaText: 'Find mentors',
      ctaLink: '/industries/community/mentorship/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'early-access',
      title: 'Get early access to new features and research',
      description: 'Be among the first to access new AI capabilities, research findings, and beta features from Augment\'s innovation labs.',
      ctaText: 'Join beta program',
      ctaLink: '/industries/community/beta/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const communityPrograms = [
    {
      id: 'industry-groups',
      title: 'Industry-Specific Groups',
      description: 'Join specialized communities for your industry including healthcare, finance, manufacturing, retail, and more.',
      ctaText: 'Browse industry groups',
      ctaLink: '/industries/community/groups/'
    },
    {
      id: 'certification',
      title: 'AI Certification Programs',
      description: 'Advance your skills with industry-recognized AI certifications and professional development programs.',
      ctaText: 'View certifications',
      ctaLink: '/industries/community/certification/'
    },
    {
      id: 'innovation-labs',
      title: 'Innovation Lab Access',
      description: 'Participate in cutting-edge research projects and get hands-on experience with emerging AI technologies.',
      ctaText: 'Apply for lab access',
      ctaLink: '/industries/community/innovation-labs/'
    },
    {
      id: 'startup-program',
      title: 'AI Startup Accelerator',
      description: 'Support and resources for AI startups including funding opportunities, mentorship, and technical guidance.',
      ctaText: 'Learn about accelerator',
      ctaLink: '/industries/community/startup-accelerator/'
    },
    {
      id: 'academic-partnership',
      title: 'Academic Partnerships',
      description: 'Collaborate with universities and research institutions on AI research and educational initiatives.',
      ctaText: 'Explore partnerships',
      ctaLink: '/industries/community/academic/'
    },
    {
      id: 'open-source',
      title: 'Open Source Contributions',
      description: 'Contribute to and benefit from open-source AI projects that advance the entire industry ecosystem.',
      ctaText: 'View open source projects',
      ctaLink: '/industries/community/open-source/'
    }
  ];

  const communityBenefits = [
    {
      title: 'Exclusive Access to AI Insights',
      description: 'Get early access to research findings, industry reports, and cutting-edge AI developments before public release.',
      href: '/industries/community/insights/',
      buttonText: 'Access insights',
      icon: ''
    },
    {
      title: 'Professional Networking Opportunities',
      description: 'Connect with 10,000+ AI professionals, industry leaders, and innovators across all major industries.',
      href: '/industries/community/networking/',
      buttonText: 'Start networking',
      icon: ''
    },
    {
      title: 'Career Development Resources',
      description: 'Access job opportunities, skill development programs, and career advancement resources in the AI field.',
      href: '/industries/community/careers/',
      buttonText: 'Explore careers',
      icon: ''
    },
    {
      title: 'Collaborative Innovation Projects',
      description: 'Participate in cross-industry innovation projects and contribute to breakthrough AI research and development.',
      href: '/industries/community/innovation/',
      buttonText: 'Join projects',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Augment Community | Connect & Collaborate</h1>

        <SectionHero
          title="Augment Community"
          subtitle="Connect, collaborate, and innovate together"
          description="Join a thriving community of AI professionals, industry experts, and innovators. Share knowledge, collaborate on projects, attend exclusive events, and shape the future of AI across industries. Connect with like-minded professionals and accelerate your AI journey."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse group of AI professionals collaborating and networking at community event"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Community Features
              </a>
              <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Programs
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Benefits
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Join Community
              </a>
            </div>
          </div>
        </nav>

        <section id="features">
          <FeaturedCards
            title="Discover what makes our community special"
            description="Explore the features and opportunities that make the Augment AI community a hub for innovation and collaboration"
            cards={communityFeatures}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Community by the Numbers
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                A thriving global community of AI professionals and industry innovators
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  10,000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries Represented
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Events Per Year
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Collaborative Projects
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs">
          <InfoColumns
            title="Community programs and initiatives"
            description="Explore specialized programs designed to foster collaboration, learning, and innovation in the AI community"
            columns={communityPrograms}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Benefits of joining the Augment community"
            description="Discover the exclusive advantages and opportunities available to community members"
            actions={communityBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Upcoming Community Events
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Join us for upcoming events, workshops, and networking opportunities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-[#C74634] font-semibold mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  March 15, 2025 • Virtual
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  AI in Healthcare: Future Trends
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Join healthcare AI experts to discuss emerging trends, regulatory challenges, and breakthrough applications.
                </p>
                <a href="/industries/community/events/healthcare-trends/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Register now →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-[#C74634] font-semibold mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  March 22, 2025 • San Francisco
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Manufacturing AI Workshop
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Hands-on workshop covering predictive maintenance, quality control, and production optimization.
                </p>
                <a href="/industries/community/events/manufacturing-workshop/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Register now →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-[#C74634] font-semibold mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  April 5, 2025 • Virtual
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Ethical AI Panel Discussion
                </h3>
                <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Industry leaders discuss responsible AI development, bias mitigation, and ethical frameworks.
                </p>
                <a href="/industries/community/events/ethical-ai-panel/" className="text-[#C74634] hover:text-[#A63429] font-medium text-sm transition-colors duration-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Register now →
                </a>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/industries/community/events/"
                className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View All Events
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Community Guidelines & Values
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our community is built on shared values of collaboration, innovation, and ethical AI development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Collaboration
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Foster open collaboration and knowledge sharing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Innovation
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Drive breakthrough innovations in AI technology
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Ethics
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Promote responsible and ethical AI development
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white"></span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Inclusivity
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Welcome diverse perspectives and backgrounds
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to join the Augment AI community?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with 10,000+ AI professionals, access exclusive resources, participate in collaborative projects, and shape the future of artificial intelligence across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/industries/community/join/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Community Now
              </a>
              <a
                href="/industries/community/events/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Explore Events
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
