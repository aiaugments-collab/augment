import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Community | Augment AI Developers',
  description: 'Join the Augment AI developer community. Connect with 50,000+ developers, share knowledge, and build the future of AI together.',
  keywords: 'developer community, AI developers, forums, Discord, GitHub, developer events, hackathons',
};

export default function DeveloperCommunityPage() {
  const communityStats = [
    { number: '50K+', label: 'Active Developers' },
    { number: '15K+', label: 'Community Members' },
    { number: '500+', label: 'Projects Shared' },
    { number: '100+', label: 'Events Hosted' }
  ];

  const communityChannels = [
    {
      name: 'Discord Server',
      description: 'Real-time chat with developers, get help, and share projects',
      icon: '',
      members: '15,000+',
      activity: 'Very Active',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'GitHub Discussions',
      description: 'Technical discussions, feature requests, and open source contributions',
      icon: '',
      members: '8,000+',
      activity: 'Active',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Developer Forums',
      description: 'In-depth technical discussions and knowledge sharing',
      icon: '️',
      members: '12,000+',
      activity: 'Active',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Reddit Community',
      description: 'Casual discussions, showcases, and community news',
      icon: '',
      members: '25,000+',
      activity: 'Very Active',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Hackathon 2024',
      date: 'March 15-17, 2024',
      type: 'Virtual',
      description: 'Build innovative AI applications and compete for $50K in prizes',
      participants: '2,000+ registered'
    },
    {
      title: 'Developer Meetup: San Francisco',
      date: 'March 22, 2024',
      type: 'In-Person',
      description: 'Network with local developers and learn about the latest AI trends',
      participants: '150 spots available'
    },
    {
      title: 'Webinar: Advanced Fine-tuning',
      date: 'March 28, 2024',
      type: 'Virtual',
      description: 'Deep dive into advanced fine-tuning techniques with our AI researchers',
      participants: '500+ registered'
    }
  ];

  const communityProjects = [
    {
      title: 'AI Code Review Assistant',
      author: 'Sarah Chen',
      description: 'Automated code review tool using Augment AI for better code quality',
      stars: '1.2K',
      language: 'Python',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop'
    },
    {
      title: 'Smart Documentation Generator',
      author: 'Mike Rodriguez',
      description: 'Generate comprehensive documentation from code comments automatically',
      stars: '890',
      language: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    {
      title: 'AI-Powered Customer Support',
      author: 'Emily Johnson',
      description: 'Intelligent customer support chatbot with context awareness',
      stars: '756',
      language: 'Go',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Developer Community
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with 50,000+ developers building the future with AI. Share knowledge, collaborate on projects, and grow together in our vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Discord Server
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Browse Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Join Our Community Channels
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Multiple ways to connect, learn, and collaborate with fellow developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => (
              <a
                key={index}
                href="#"
                className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} text-white rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {channel.name}
                </h3>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {channel.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <span>{channel.members} members</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    channel.activity === 'Very Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {channel.activity}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join our events to learn, network, and showcase your AI projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {event.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {event.participants}
                  </span>
                  <a
                    href="#"
                    className="text-[#C74634] hover:text-[#A63429] text-sm font-medium"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Featured Community Projects
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Discover amazing projects built by our community members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityProjects.map((project, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {project.language}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">{project.stars}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    by {project.author}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Browse All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Community Guidelines
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Help us maintain a welcoming and productive environment for all developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Be Respectful
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Treat all community members with respect and kindness
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Share Knowledge
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Help others learn and grow by sharing your expertise
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Stay On Topic
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Keep discussions relevant to AI development and Augment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Build Together
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Collaborate on projects and contribute to open source
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Connect with thousands of developers, share your projects, and build the future of AI together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Join Discord Server
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Community Guidelines
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
