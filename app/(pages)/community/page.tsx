'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function CommunityPage() {
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    role: '',
    interests: '',
    experience: ''
  });
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoined(true);
    setTimeout(() => {
      setIsJoined(false);
      setJoinForm({
        name: '',
        email: '',
        role: '',
        interests: '',
        experience: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Join Community',
      href: '#join',
      variant: 'primary' as const
    },
    {
      text: 'Explore Forums',
      href: '/forums/',
      variant: 'secondary' as const
    }
  ];

  const communityFeatures = [
    {
      id: 'expert-network',
      title: 'Connect with 50,000+ AI Professionals',
      description: 'Network with AI researchers, developers, business leaders, and innovators from around the world.',
      ctaText: 'Start networking',
      ctaLink: '/community/network/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'knowledge-sharing',
      title: 'Share Knowledge and Learn Together',
      description: 'Participate in discussions, share insights, and learn from real-world AI implementations and experiences.',
      ctaText: 'Join discussions',
      ctaLink: '/forums/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'events-meetups',
      title: 'Attend Events and Meetups',
      description: 'Join virtual and in-person events, workshops, conferences, and local meetups focused on AI innovation.',
      ctaText: 'View events',
      ctaLink: '/events/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'collaboration',
      title: 'Collaborate on AI Projects',
      description: 'Find collaborators for research projects, open-source contributions, and innovative AI initiatives.',
      ctaText: 'Find projects',
      ctaLink: '/community/projects/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'mentorship',
      title: 'Mentorship and Career Growth',
      description: 'Connect with mentors, advance your AI career, and help others grow in the field of artificial intelligence.',
      ctaText: 'Find mentors',
      ctaLink: '/community/mentorship/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'early-access',
      title: 'Early Access to AI Innovations',
      description: 'Get exclusive access to new features, research findings, and beta programs from Augment and partners.',
      ctaText: 'Get early access',
      ctaLink: '/community/early-access/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const communityGroups = [
    {
      id: 'developers',
      title: 'AI Developers & Engineers',
      description: 'Technical discussions, code sharing, and collaboration for developers building AI applications and systems.',
      ctaText: 'Join developers',
      ctaLink: '/community/groups/developers/'
    },
    {
      id: 'researchers',
      title: 'AI Researchers & Scientists',
      description: 'Academic discussions, research collaboration, and sharing of latest findings in artificial intelligence research.',
      ctaText: 'Join researchers',
      ctaLink: '/community/groups/researchers/'
    },
    {
      id: 'business-leaders',
      title: 'Business Leaders & Executives',
      description: 'Strategic discussions on AI adoption, transformation, and business impact of artificial intelligence.',
      ctaText: 'Join leaders',
      ctaLink: '/community/groups/business-leaders/'
    },
    {
      id: 'data-scientists',
      title: 'Data Scientists & Analysts',
      description: 'Data science methodologies, machine learning techniques, and analytics best practices.',
      ctaText: 'Join data scientists',
      ctaLink: '/community/groups/data-scientists/'
    },
    {
      id: 'students',
      title: 'Students & Learners',
      description: 'Learning resources, study groups, and support for students and newcomers to artificial intelligence.',
      ctaText: 'Join students',
      ctaLink: '/community/groups/students/'
    },
    {
      id: 'entrepreneurs',
      title: 'AI Entrepreneurs & Startups',
      description: 'Startup discussions, funding opportunities, and entrepreneurial support for AI-focused ventures.',
      ctaText: 'Join entrepreneurs',
      ctaLink: '/community/groups/entrepreneurs/'
    }
  ];

  const communityBenefits = [
    {
      title: 'Exclusive Learning Resources',
      description: 'Access premium content, webinars, and educational materials available only to community members.',
      href: '/community/resources/',
      buttonText: 'Access resources',
      icon: ''
    },
    {
      title: 'Job Opportunities',
      description: 'Discover AI job opportunities, internships, and career advancement opportunities from our network.',
      href: '/community/jobs/',
      buttonText: 'Find jobs',
      icon: ''
    },
    {
      title: 'Research Collaboration',
      description: 'Participate in collaborative research projects and contribute to advancing AI knowledge.',
      href: '/community/research/',
      buttonText: 'Join research',
      icon: ''
    },
    {
      title: 'Industry Recognition',
      description: 'Gain recognition for your contributions and expertise within the global AI community.',
      href: '/community/recognition/',
      buttonText: 'Learn more',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Community | Augment AI Network</h1>

        <SectionHero
          title="AI Community"
          subtitle="Connect, collaborate, and grow together"
          description="Join the world's largest community of AI professionals, researchers, and innovators. Share knowledge, collaborate on projects, attend events, and advance your career in artificial intelligence with like-minded professionals."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse group of AI professionals networking and collaborating at community event"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Community Features
              </a>
              <a href="#groups" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Interest Groups
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Member Benefits
              </a>
              <a href="#join" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Join Community
              </a>
            </div>
          </div>
        </nav>

        <section id="features">
          <FeaturedCards
            title="Connect with the global AI community"
            description="Discover the features and opportunities that make our community the premier destination for AI professionals"
            cards={communityFeatures}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global AI Community
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                A thriving network of AI professionals making impact worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  120+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Events Per Year
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Projects
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="groups">
          <InfoColumns
            title="Find your community within the community"
            description="Join specialized groups based on your role, interests, and expertise in artificial intelligence"
            columns={communityGroups}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Exclusive benefits for community members"
            description="Unlock premium resources, opportunities, and recognition as part of our AI community"
            actions={communityBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="join" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Join the AI Community
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Become part of the world's largest AI community. Connect with professionals, share knowledge, and advance your career in artificial intelligence.
              </p>
            </div>
            
            {isJoined ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Welcome to the Community!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for joining our AI community. You'll receive a welcome email with next steps and access to exclusive resources.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <form onSubmit={handleJoin} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={joinForm.name}
                        onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={joinForm.email}
                        onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Professional Role *
                      </label>
                      <select
                        id="role"
                        required
                        value={joinForm.role}
                        onChange={(e) => setJoinForm({...joinForm, role: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select your role</option>
                        <option value="developer">AI Developer/Engineer</option>
                        <option value="researcher">AI Researcher/Scientist</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="business-leader">Business Leader/Executive</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="consultant">AI Consultant</option>
                        <option value="student">Student/Learner</option>
                        <option value="entrepreneur">Entrepreneur</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        AI Experience Level *
                      </label>
                      <select
                        id="experience"
                        required
                        value={joinForm.experience}
                        onChange={(e) => setJoinForm({...joinForm, experience: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (2-4 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="expert">Expert (10+ years)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Interests & Goals
                    </label>
                    <textarea
                      id="interests"
                      rows={4}
                      value={joinForm.interests}
                      onChange={(e) => setJoinForm({...joinForm, interests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Tell us about your AI interests, goals, and what you hope to gain from the community..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Join AI Community
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    By joining, you agree to our community guidelines and terms of service. Membership is free.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Shape the future of AI together
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join 50,000+ AI professionals who are collaborating, learning, and building the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/forums/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Explore Forums
              </a>
              <a
                href="/events/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View Events
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
